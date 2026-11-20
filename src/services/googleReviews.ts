import { importLibrary, setOptions } from '@googlemaps/js-api-loader';

export interface GoogleReviewItem {
  authorName: string;
  authorUri?: string;
  authorPhotoUri?: string;
  rating: number;
  relativePublishTimeDescription?: string;
  text: string;
  publishTime?: string;
}

export interface GooglePlaceReviewsData {
  displayName: string;
  rating: number;
  userRatingCount: number;
  googleMapsUri?: string;
  reviews: GoogleReviewItem[];
}

export interface GoogleReviewsConfigState {
  isConfigured: boolean;
  placeId: string;
  reviewUrl: string;
}

const DEFAULT_GOOGLE_SEARCH_URL =
  'https://www.google.com/search?q=Geton+AS+Trollhaugmyra+15+5353+Straume';

const sessionCache = new Map<string, GooglePlaceReviewsData>();
let optionsConfigured = false;

export function getGoogleReviewsConfig(): GoogleReviewsConfigState {
  const apiKey = (import.meta.env?.VITE_GOOGLE_MAPS_API_KEY as string | undefined)?.trim() || '';
  const placeId = (import.meta.env?.VITE_GOOGLE_PLACE_ID as string | undefined)?.trim() || '';
  const envReviewUrl =
    (import.meta.env?.VITE_GOOGLE_REVIEW_URL as string | undefined)?.trim() || '';

  const isPlaceholderKey =
    !apiKey || apiKey.startsWith('MY_') || apiKey.includes('YOUR_') || apiKey === 'REPLACE_ME';
  const isPlaceholderPlace =
    !placeId || placeId.startsWith('MY_') || placeId.includes('YOUR_') || placeId === 'REPLACE_ME';

  const fallbackReviewUrl =
    envReviewUrl ||
    (!isPlaceholderPlace
      ? `https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}`
      : DEFAULT_GOOGLE_SEARCH_URL);

  return {
    isConfigured: !isPlaceholderKey && !isPlaceholderPlace,
    placeId: isPlaceholderPlace ? '' : placeId,
    reviewUrl: fallbackReviewUrl,
  };
}

export async function fetchVerifiedGoogleReviews(
  language: 'no' | 'en'
): Promise<GooglePlaceReviewsData | null> {
  const apiKey = (import.meta.env?.VITE_GOOGLE_MAPS_API_KEY as string | undefined)?.trim() || '';
  const { isConfigured, placeId } = getGoogleReviewsConfig();

  if (!isConfigured || !apiKey || !placeId) {
    return null;
  }

  const cacheKey = `${placeId}:${language}`;
  const cached = sessionCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  if (!optionsConfigured) {
    setOptions({
      key: apiKey,
      v: 'weekly',
      language: language === 'no' ? 'nb' : 'en',
      region: 'NO',
    });
    optionsConfigured = true;
  }

  const placesLib = await importLibrary('places');
  const PlaceConstructor = placesLib.Place;
  if (!PlaceConstructor) {
    return null;
  }

  const place = new PlaceConstructor({
    id: placeId,
    requestedLanguage: language === 'no' ? 'nb' : 'en',
  });

  await place.fetchFields({
    fields: ['displayName', 'rating', 'userRatingCount', 'googleMapsURI', 'reviews'],
  });

  const rating = typeof place.rating === 'number' ? place.rating : 0;
  const userRatingCount =
    typeof place.userRatingCount === 'number' ? place.userRatingCount : 0;

  interface PlacesSdkReview {
    authorAttribution?: {
      displayName?: string | null;
      uri?: string | null;
      photoURI?: string | null;
    } | null;
    rating?: number | null;
    relativePublishTimeDescription?: string | null;
    text?: string | null;
    publishTime?: Date | string | null;
  }

  const rawReviews: PlacesSdkReview[] = Array.isArray(place.reviews)
    ? (place.reviews as PlacesSdkReview[])
    : [];
  const reviews: GoogleReviewItem[] = rawReviews
    .map((rev: PlacesSdkReview): GoogleReviewItem => {
      let publishIso: string | undefined;
      if (rev.publishTime instanceof Date) {
        publishIso = rev.publishTime.toISOString();
      } else if (typeof rev.publishTime === 'string') {
        publishIso = rev.publishTime;
      }
      return {
        authorName: rev.authorAttribution?.displayName || 'Google-bruker',
        authorUri: rev.authorAttribution?.uri || undefined,
        authorPhotoUri: rev.authorAttribution?.photoURI || undefined,
        rating: typeof rev.rating === 'number' ? rev.rating : 5,
        relativePublishTimeDescription: rev.relativePublishTimeDescription || undefined,
        text: (rev.text || '').trim(),
        publishTime: publishIso,
      };
    })
    .filter((rev: GoogleReviewItem) => rev.authorName.length > 0);

  const result: GooglePlaceReviewsData = {
    displayName: place.displayName || 'Geton AS',
    rating,
    userRatingCount,
    googleMapsUri: place.googleMapsURI || undefined,
    reviews,
  };

  sessionCache.set(cacheKey, result);
  return result;
}
