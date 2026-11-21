// Privacy-first conversion & interaction analytics helper for Geton AS
// Only initializes third-party GA4 script if explicitly configured via VITE_GA_MEASUREMENT_ID
// AND user has granted analytics consent. Never fabricates external tracking accounts.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type ConsentStatus = 'pending' | 'accepted' | 'rejected';

export type AnalyticsEventName =
  | 'contact_form_submit'
  | 'cta_click'
  | 'service_inquiry_click'
  | 'service_card_click'
  | 'project_card_click'
  | 'article_click'
  | 'email_link_click'
  | 'phone_link_click'
  | 'google_review_click'
  | 'page_view';

const CONSENT_STORAGE_KEY = 'geton_analytics_consent';
const RECENT_EVENTS = new Map<string, number>();
let scriptLoaded = false;

export function getConsentStatus(): ConsentStatus {
  try {
    const val = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (val === 'accepted' || val === 'rejected') {
      return val;
    }
  } catch {
    // Ignore storage errors
  }
  return 'pending';
}

export function setConsentStatus(status: 'accepted' | 'rejected'): void {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, status);
  } catch {
    // Ignore storage errors
  }

  if (status === 'accepted') {
    initializeAnalyticsIfConsented();
  }
}

export function initializeAnalyticsIfConsented(): void {
  if (typeof window === 'undefined') return;
  if (getConsentStatus() !== 'accepted') return;

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  if (!measurementId || measurementId === 'MY_GA_MEASUREMENT_ID' || scriptLoaded) {
    return;
  }

  // Prevent duplicate script injection
  const existingScript = document.querySelector(
    `script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`
  );
  if (existingScript) {
    scriptLoaded = true;
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    anonymize_ip: true,
    send_page_view: false,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
  scriptLoaded = true;
}

export function trackEvent(
  eventName: AnalyticsEventName,
  params: Record<string, string | number | boolean> = {}
): void {
  if (typeof window === 'undefined') return;
  if (getConsentStatus() !== 'accepted') return;

  // Deduplicate rapid double-clicks/duplicate dispatches within 600ms
  const signature = `${eventName}:${JSON.stringify(params)}`;
  const now = Date.now();
  const prevTime = RECENT_EVENTS.get(signature);
  if (prevTime && now - prevTime < 600) {
    return;
  }
  RECENT_EVENTS.set(signature, now);

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
}
