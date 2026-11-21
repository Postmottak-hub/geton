import React from 'react';
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Building2,
  Star,
} from 'lucide-react';
import { GetonLogo } from './Logo.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { trackEvent } from '../utils/analytics.ts';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onGetStarted: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onGetStarted }) => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <footer
      className={`w-full relative z-30 border-t transition-colors duration-300 ${
        isLight
          ? 'bg-[#fafaf9] text-neutral-900 border-neutral-200'
          : 'bg-[#020512] text-white border-cyan-500/20'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-16 pb-12">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b ${
            isLight ? 'border-neutral-200' : 'border-white/10'
          }`}
        >
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <GetonLogo size="large" />
            </div>

            <p
              className={`text-sm leading-relaxed max-w-md font-normal ${
                isLight ? 'text-neutral-600' : 'text-slate-300'
              }`}
            >
              {t.footer.mission}
            </p>

            <div className="text-xs space-y-1">
              <div className={`font-semibold ${isLight ? 'text-sky-700' : 'text-cyan-300'}`}>
                {language === 'no'
                  ? 'Bergen · Øygarden · Vestland · Norge'
                  : 'Bergen · Øygarden · Vestland · Norway'}
              </div>
              <p className={isLight ? 'text-neutral-500' : 'text-slate-400'}>
                {language === 'no'
                  ? 'Norsk teknologipartner for nettsider, mobilapper og skreddersydde bedriftssystemer.'
                  : 'Norwegian technology partner for websites, mobile apps, and custom business systems.'}
              </p>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={() => {
                  trackEvent('cta_click', { label: 'footer_request_proposal', location: 'footer' });
                  onGetStarted();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white btn-cyan-gradient cursor-pointer hover:scale-[1.02] transition-all"
              >
                <span>{t.footer.requestProposal}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Head Office & Direct Contact Info */}
          <div className="lg:col-span-4 space-y-3.5">
            <span
              className={`text-xs font-semibold uppercase tracking-widest block ${
                isLight ? 'text-neutral-500' : 'text-cyan-300'
              }`}
            >
              {t.footer.headquartersTitle}
            </span>

            {/* Address */}
            <a
              href="https://maps.google.com/?q=Trollhaugmyra+15,+5353+Straume,+Norway"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 group text-left ${
                isLight
                  ? 'bg-white border-neutral-200 hover:border-neutral-400'
                  : 'bg-white/[0.03] hover:bg-cyan-950/35 border-white/10 hover:border-cyan-400/40'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 ${
                  isLight
                    ? 'bg-neutral-900 border-neutral-900 text-white'
                    : 'bg-cyan-950/70 border-cyan-400/40 text-cyan-300'
                }`}
              >
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div
                  className={`text-sm font-bold flex items-center gap-1.5 ${
                    isLight
                      ? 'text-neutral-900 group-hover:text-sky-700'
                      : 'text-white group-hover:text-cyan-200'
                  }`}
                >
                  <span>{t.footer.addressStreet}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </div>
                <div className={`text-xs mt-0.5 ${isLight ? 'text-neutral-500' : 'text-slate-400'}`}>
                  {t.footer.addressRegion}
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@getontechs.com"
              onClick={() => trackEvent('email_link_click', { location: 'footer' })}
              className={`p-3.5 rounded-2xl border transition-all flex items-center gap-3 group text-left ${
                isLight
                  ? 'bg-white border-neutral-200 hover:border-neutral-400'
                  : 'bg-white/[0.03] hover:bg-cyan-950/35 border-white/10 hover:border-cyan-400/40'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${
                  isLight
                    ? 'bg-neutral-900 border-neutral-900 text-white'
                    : 'bg-cyan-950/70 border-cyan-400/40 text-cyan-300'
                }`}
              >
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div
                  className={`text-sm font-bold ${
                    isLight
                      ? 'text-neutral-900 group-hover:text-sky-700'
                      : 'text-white group-hover:text-cyan-200'
                  }`}
                >
                  contact@getontechs.com
                </div>
                <div className={`text-xs ${isLight ? 'text-neutral-500' : 'text-slate-400'}`}>
                  {language === 'no' ? 'Direkte henvendelser og tilbud' : 'Direct inquiries and quotes'}
                </div>
              </div>
            </a>

            {/* Telephone */}
            <a
              href="tel:+4740584817"
              onClick={() => trackEvent('phone_link_click', { location: 'footer' })}
              className={`p-3.5 rounded-2xl border transition-all flex items-center gap-3 group text-left ${
                isLight
                  ? 'bg-white border-neutral-200 hover:border-neutral-400'
                  : 'bg-white/[0.03] hover:bg-cyan-950/35 border-white/10 hover:border-cyan-400/40'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${
                  isLight
                    ? 'bg-neutral-900 border-neutral-900 text-white'
                    : 'bg-cyan-950/70 border-cyan-400/40 text-cyan-300'
                }`}
              >
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div
                  className={`text-sm font-bold ${
                    isLight
                      ? 'text-neutral-900 group-hover:text-sky-700'
                      : 'text-white group-hover:text-cyan-200'
                  }`}
                >
                  +47 405 84 817
                </div>
                <div className={`text-xs ${isLight ? 'text-neutral-500' : 'text-slate-400'}`}>
                  {language === 'no' ? 'Man–Fre 08.00 – 16.00' : 'Mon–Fri 08:00 – 16:00 CET'}
                </div>
              </div>
            </a>
          </div>

          {/* Column 3: Navigation & Services */}
          <div className="lg:col-span-3 space-y-4">
            <span
              className={`text-xs font-semibold uppercase tracking-widest block ${
                isLight ? 'text-neutral-500' : 'text-cyan-300'
              }`}
            >
              {t.footer.navigationTitle}
            </span>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-2.5">
                <a
                  href="/tjenester"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('services-page');
                  }}
                  className={`block transition-colors ${
                    isLight ? 'text-neutral-700 hover:text-neutral-950' : 'text-slate-300 hover:text-cyan-300'
                  }`}
                >
                  {language === 'no' ? 'Våre tjenester' : t.nav.services}
                </a>
                <a
                  href="/prosjekter"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('projects-page');
                  }}
                  className={`block transition-colors ${
                    isLight ? 'text-neutral-700 hover:text-neutral-950' : 'text-slate-300 hover:text-cyan-300'
                  }`}
                >
                  {t.nav.projects}
                </a>
                <a
                  href="/om-oss"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('about');
                  }}
                  className={`block transition-colors ${
                    isLight ? 'text-neutral-700 hover:text-neutral-950' : 'text-slate-300 hover:text-cyan-300'
                  }`}
                >
                  {t.nav.about}
                </a>
                <a
                  href="/artikler"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('blogs');
                  }}
                  className={`block transition-colors ${
                    isLight ? 'text-neutral-700 hover:text-neutral-950' : 'text-slate-300 hover:text-cyan-300'
                  }`}
                >
                  {t.nav.blogs}
                </a>
                <a
                  href="/tjenester/vedlikehold-og-support"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('support');
                  }}
                  className={`block transition-colors ${
                    isLight ? 'text-neutral-700 hover:text-neutral-950' : 'text-slate-300 hover:text-cyan-300'
                  }`}
                >
                  Support
                </a>
                <a
                  href="/kontakt"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('contact');
                  }}
                  className={`block transition-colors ${
                    isLight ? 'text-neutral-700 hover:text-neutral-950' : 'text-slate-300 hover:text-cyan-300'
                  }`}
                >
                  {t.nav.contact}
                </a>
              </div>

              <div className="space-y-2.5">
                <span
                  className={`block font-semibold text-[11px] uppercase tracking-wider ${
                    isLight ? 'text-neutral-500' : 'text-slate-400'
                  }`}
                >
                  {language === 'no' ? 'TJENESTER' : 'SERVICES'}
                </span>
                <a
                  href="/tjenester/nettsideutvikling"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('service:nettsideutvikling');
                  }}
                  className={`block transition-colors ${
                    isLight ? 'text-neutral-800 hover:text-sky-700' : 'text-cyan-200/90 hover:text-cyan-300'
                  }`}
                >
                  {language === 'no' ? 'Nettsideutvikling' : 'Websites'}
                </a>
                <a
                  href="/tjenester/mobilapputvikling"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('service:mobilapputvikling');
                  }}
                  className={`block transition-colors ${
                    isLight ? 'text-neutral-800 hover:text-sky-700' : 'text-cyan-200/90 hover:text-cyan-300'
                  }`}
                >
                  {language === 'no' ? 'Mobilapputvikling' : 'Mobile Apps'}
                </a>
                <a
                  href="/tjenester/webapplikasjoner-og-systemutvikling"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('service:webapplikasjoner-og-systemutvikling');
                  }}
                  className={`block transition-colors ${
                    isLight ? 'text-neutral-800 hover:text-sky-700' : 'text-cyan-200/90 hover:text-cyan-300'
                  }`}
                >
                  {language === 'no' ? 'Systemutvikling' : 'Web Systems'}
                </a>
                <a
                  href="/tjenester/kunstig-intelligens-og-automasjon"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('service:kunstig-intelligens-og-automasjon');
                  }}
                  className={`block transition-colors ${
                    isLight ? 'text-neutral-800 hover:text-sky-700' : 'text-cyan-200/90 hover:text-cyan-300'
                  }`}
                >
                  {language === 'no' ? 'AI & Automasjon' : 'AI & Automation'}
                </a>
              </div>
            </div>

            <div
              className={`pt-3 border-t space-y-2 ${
                isLight ? 'border-neutral-200' : 'border-white/10'
              }`}
            >
              <div
                className={`flex items-center gap-2 text-xs ${
                  isLight ? 'text-neutral-600' : 'text-slate-400'
                }`}
              >
                <Building2 className={`w-3.5 h-3.5 shrink-0 ${isLight ? 'text-neutral-700' : 'text-cyan-400'}`} />
                <span>Org. nr. 926 117 076</span>
              </div>
              <a
                href={
                  (import.meta.env?.VITE_GOOGLE_REVIEW_URL as string | undefined) ||
                  'https://www.google.com/search?q=Geton+AS+Trollhaugmyra+15+5353+Straume'
                }
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
                  isLight ? 'text-amber-700 hover:text-amber-900' : 'text-amber-300/90 hover:text-amber-200'
                }`}
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                <span>
                  {language === 'no' ? 'Gi oss en anmeldelse på Google' : 'Review us on Google'}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className={isLight ? 'text-neutral-700 font-medium' : 'text-slate-300 font-medium'}>
            © 2026 Geton AS, org. nummer 926117076. All rights reserved.
          </span>

          <div
            className={`flex flex-wrap items-center gap-4 text-[11px] ${
              isLight ? 'text-neutral-500' : 'text-slate-400'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className={`w-3.5 h-3.5 ${isLight ? 'text-neutral-700' : 'text-cyan-400'}`} />
              <span>GDPR-tilpasset utvikling</span>
            </span>
            <span className="hidden sm:inline opacity-40" aria-hidden="true">
              ·
            </span>
            <span>Trollhaugmyra 15, 5353 Straume</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
