import React, { useEffect, useState } from 'react';
import {
  Star,
  ExternalLink,
  Copy,
  Check,
  MapPin,
  Loader2,
  MessageSquarePlus,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import {
  fetchVerifiedGoogleReviews,
  getGoogleReviewsConfig,
  GooglePlaceReviewsData,
} from '../services/googleReviews.ts';
import { trackEvent } from '../utils/analytics.ts';

interface GoogleReviewsSectionProps {
  onLiveRatingLoaded?: (ratingData: { ratingValue: number; reviewCount: number }) => void;
}

export const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({
  onLiveRatingLoaded,
}) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const config = getGoogleReviewsConfig();
  const [reviewsData, setReviewsData] = useState<GooglePlaceReviewsData | null>(null);
  const [loading, setLoading] = useState<boolean>(config.isConfigured);
  const [loadFailed, setLoadFailed] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (!config.isConfigured) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setLoadFailed(false);

    fetchVerifiedGoogleReviews(language)
      .then((data) => {
        if (cancelled) return;
        setReviewsData(data);
        if (
          data &&
          data.rating > 0 &&
          data.userRatingCount > 0 &&
          onLiveRatingLoaded
        ) {
          onLiveRatingLoaded({
            ratingValue: data.rating,
            reviewCount: data.userRatingCount,
          });
        }
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Unable to load Google Places reviews:', err);
        setLoadFailed(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [config.isConfigured, language, onLiveRatingLoaded]);

  const directReviewUrl = config.reviewUrl;
  const mapsProfileUrl =
    reviewsData?.googleMapsUri ||
    'https://maps.google.com/?q=Trollhaugmyra+15,+5353+Straume,+Norway';

  const handleCopyReviewLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(directReviewUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const renderStars = (score: number) => {
    const rounded = Math.round(score);
    return (
      <div className="flex items-center gap-0.5" aria-label={`${score} av 5`}>
        {[1, 2, 3, 4, 5].map((starIdx) => (
          <Star
            key={starIdx}
            className={`w-4 h-4 ${
              starIdx <= rounded
                ? 'text-amber-400 fill-amber-400'
                : isLight
                ? 'text-slate-300'
                : 'text-slate-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className={`rounded-3xl border p-6 sm:p-8 lg:p-10 transition-colors ${
        isLight
          ? 'bg-white border-slate-200 shadow-[0_14px_38px_rgba(15,23,42,0.06)]'
          : 'bg-white/[0.03] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.35)]'
      }`}
    >
      {/* Header Row: Official Google Business Profile Summary + Direct Review CTA */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-500">
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            <span>
              {language === 'no'
                ? 'Google Business Profile · Verifisert bedriftsprofil'
                : 'Google Business Profile · Verified Location'}
            </span>
          </div>

          <h3
            className={`text-2xl sm:text-3xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}
          >
            {language === 'no'
              ? 'Kundeanmeldelser fra Google'
              : 'Verified Client Reviews on Google'}
          </h3>

          {loading ? (
            <div
              className={`flex items-center gap-2 text-xs sm:text-sm ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
              <span>
                {language === 'no'
                  ? 'Henter oppdatert vurdering og omtaler fra Google...'
                  : 'Loading verified ratings and reviews from Google...'}
              </span>
            </div>
          ) : reviewsData && reviewsData.userRatingCount > 0 ? (
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span
                className={`text-2xl font-extrabold font-display tabular-nums ${
                  isLight ? 'text-slate-950' : 'text-white'
                }`}
              >
                {reviewsData.rating.toFixed(1)}
              </span>
              {renderStars(reviewsData.rating)}
              <span
                className={`text-xs sm:text-sm ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                {language === 'no'
                  ? `Basert på ${reviewsData.userRatingCount} verifiserte Google-anmeldelser`
                  : `Based on ${reviewsData.userRatingCount} verified Google reviews`}
              </span>
            </div>
          ) : (
            <p
              className={`text-xs sm:text-sm max-w-2xl leading-relaxed ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              {loadFailed
                ? language === 'no'
                  ? 'Kunne ikke hente Google-anmeldelser automatisk akkurat nå. Du kan fortsatt se profilen eller legge igjen vurdering direkte på Google.'
                  : 'Unable to fetch Google reviews right now. You can still view our profile or submit a review directly on Google.'
                : language === 'no'
                ? 'Vi publiserer utelukkende ekte tilbakemeldinger hentet direkte fra vår verifiserte Google Business-profil. Har du samarbeidet med Geton AS? Legg gjerne igjen din ærlige vurdering på Google.'
                : 'We only publish genuine feedback fetched directly from our verified Google Business Profile. Worked with Geton AS? Share your honest rating directly on Google.'}
            </p>
          )}
        </div>

        {/* Review Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={directReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('google_review_click', { location: 'reviews_section' })}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>
              {language === 'no' ? 'Gi oss en anmeldelse på Google' : 'Leave a Google Review'}
            </span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={mapsProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
              isLight
                ? 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                : 'bg-white/5 hover:bg-white/10 border-white/15 text-slate-200'
            }`}
          >
            <span>{language === 'no' ? 'Se profil i Google Maps' : 'View on Google Maps'}</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
          </a>

          <button
            type="button"
            onClick={handleCopyReviewLink}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              isLight
                ? 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                : 'bg-white/5 hover:bg-white/10 border-white/15 text-slate-200'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-300">
                  {language === 'no' ? 'Kopiert!' : 'Copied!'}
                </span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{language === 'no' ? 'Kopier anmeldelseslenke' : 'Copy review link'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Live Verified Google Reviews Cards (only displayed when real Google Places data returns reviews) */}
      {reviewsData && reviewsData.reviews.length > 0 && (
        <div className="pt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviewsData.reviews.slice(0, 6).map((rev, idx) => (
              <article
                key={`${rev.authorName}-${idx}`}
                className={`p-5 rounded-2xl border flex flex-col justify-between gap-4 ${
                  isLight
                    ? 'bg-slate-50/80 border-slate-200 text-slate-800'
                    : 'bg-[#071024]/80 border-white/10 text-slate-200'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    {renderStars(rev.rating)}
                    {rev.relativePublishTimeDescription && (
                      <span
                        className={`text-[11px] ${
                          isLight ? 'text-slate-500' : 'text-slate-400'
                        }`}
                      >
                        {rev.relativePublishTimeDescription}
                      </span>
                    )}
                  </div>

                  {rev.text && (
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isLight ? 'text-slate-700' : 'text-slate-200'
                      }`}
                    >
                      «{rev.text}»
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  {rev.authorPhotoUri ? (
                    <img
                      src={rev.authorPhotoUri}
                      alt={rev.authorName}
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        isLight
                          ? 'bg-sky-100 text-sky-800'
                          : 'bg-emerald-500/20 text-emerald-300'
                      }`}
                    >
                      {rev.authorName.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="min-w-0">
                    {rev.authorUri ? (
                      <a
                        href={rev.authorUri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs font-bold hover:underline block truncate ${
                          isLight ? 'text-slate-900' : 'text-white'
                        }`}
                      >
                        {rev.authorName}
                      </a>
                    ) : (
                      <div
                        className={`text-xs font-bold truncate ${
                          isLight ? 'text-slate-900' : 'text-white'
                        }`}
                      >
                        {rev.authorName}
                      </div>
                    )}
                    <div
                      className={`text-[10px] ${
                        isLight ? 'text-slate-500' : 'text-slate-400'
                      }`}
                    >
                      Google Review
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div
            className={`text-[11px] text-right ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            Powered by Google Places
          </div>
        </div>
      )}
    </div>
  );
};
