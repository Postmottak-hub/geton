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
import { trackEvent } from '../utils/analytics.ts';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onGetStarted: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onGetStarted }) => {
  const { t, language } = useLanguage();

  return (
    <footer className="w-full relative z-30 bg-[#020512] text-white border-t border-cyan-500/25 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[300px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none -z-0" />

      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-cyan-500/20">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <GetonLogo size="large" />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md font-normal">
              {t.footer.mission}
            </p>

            <div className="text-xs text-slate-300 space-y-1">
              <div className="font-semibold text-cyan-300">
                {language === 'no'
                  ? 'Bergen · Øygarden · Vestland · Norge'
                  : 'Bergen · Øygarden · Vestland · Norway'}
              </div>
              <p className="text-slate-400">
                {language === 'no'
                  ? 'Norsk teknologipartner for nettsider, mobilapper og skreddersydde bedriftssystemer.'
                  : 'Norwegian technology partner for websites, mobile apps, and custom business systems.'}
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  trackEvent('cta_click', { label: 'footer_request_proposal', location: 'footer' });
                  onGetStarted();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white btn-cyan-gradient shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer hover:scale-105 active:scale-95 transition-all"
              >
                <span>{t.footer.requestProposal}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Head Office & Direct Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-semibold text-cyan-300 uppercase tracking-widest block">
              {t.footer.headquartersTitle}
            </span>

            {/* Address */}
            <a
              href="https://maps.google.com/?q=Trollhaugmyra+15,+5353+Straume,+Norway"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-cyan-950/40 border border-cyan-400/25 hover:border-cyan-400/50 transition-all flex items-start gap-3 group text-left block"
            >
              <div className="w-9 h-9 rounded-xl bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-cyan-300" />
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors flex items-center gap-1.5">
                  <span>{t.footer.addressStreet}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-cyan-300" />
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{t.footer.addressRegion}</div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@getontechs.com"
              onClick={() => trackEvent('email_link_click', { location: 'footer' })}
              className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-cyan-950/40 border border-cyan-400/25 hover:border-cyan-400/50 transition-all flex items-center gap-3 group text-left block"
            >
              <div className="w-9 h-9 rounded-xl bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform shrink-0">
                <Mail className="w-4 h-4 text-cyan-300" />
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                  contact@getontechs.com
                </div>
                <div className="text-xs text-slate-400">
                  {language === 'no' ? 'Direkte henvendelser og tilbud' : 'Direct inquiries and quotes'}
                </div>
              </div>
            </a>

            {/* Telephone */}
            <a
              href="tel:+4740584817"
              onClick={() => trackEvent('phone_link_click', { location: 'footer' })}
              className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-cyan-950/40 border border-cyan-400/25 hover:border-cyan-400/50 transition-all flex items-center gap-3 group text-left block"
            >
              <div className="w-9 h-9 rounded-xl bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform shrink-0">
                <Phone className="w-4 h-4 text-cyan-300" />
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                  +47 405 84 817
                </div>
                <div className="text-xs text-slate-400">
                  {language === 'no' ? 'Man – Fre 08:30 – 16:30' : 'Mon – Fri 08:30 – 16:30 CET'}
                </div>
              </div>
            </a>
          </div>

          {/* Column 3: Navigation & Services */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-semibold text-cyan-300 uppercase tracking-widest block">
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
                  className="text-slate-300 hover:text-cyan-300 transition-colors block"
                >
                  {language === 'no' ? 'Våre tjenester' : t.nav.services}
                </a>
                <a
                  href="/prosjekter"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('projects-page');
                  }}
                  className="text-slate-300 hover:text-cyan-300 transition-colors block"
                >
                  {t.nav.projects}
                </a>
                <a
                  href="/om-oss"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('about');
                  }}
                  className="text-slate-300 hover:text-cyan-300 transition-colors block"
                >
                  {t.nav.about}
                </a>
                <a
                  href="/artikler"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('blogs');
                  }}
                  className="text-slate-300 hover:text-cyan-300 transition-colors block"
                >
                  {t.nav.blogs}
                </a>
                <a
                  href="/tjenester/vedlikehold-og-support"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('support');
                  }}
                  className="text-slate-300 hover:text-cyan-300 transition-colors block"
                >
                  Support
                </a>
                <a
                  href="/kontakt"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('contact');
                  }}
                  className="text-slate-300 hover:text-cyan-300 transition-colors block"
                >
                  {t.nav.contact}
                </a>
              </div>

              <div className="space-y-2.5">
                <span className="text-slate-400 block font-semibold text-[11px] uppercase tracking-wider">
                  {language === 'no' ? 'TJENESTER' : 'SERVICES'}
                </span>
                <a
                  href="/tjenester/nettsideutvikling"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('service:nettsideutvikling');
                  }}
                  className="text-cyan-200/90 hover:text-cyan-300 transition-colors block"
                >
                  {language === 'no' ? 'Nettsideutvikling' : 'Websites'}
                </a>
                <a
                  href="/tjenester/mobilapputvikling"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('service:mobilapputvikling');
                  }}
                  className="text-cyan-200/90 hover:text-cyan-300 transition-colors block"
                >
                  {language === 'no' ? 'Mobilapputvikling' : 'Mobile Apps'}
                </a>
                <a
                  href="/tjenester/webapplikasjoner-og-systemutvikling"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('service:webapplikasjoner-og-systemutvikling');
                  }}
                  className="text-cyan-200/90 hover:text-cyan-300 transition-colors block"
                >
                  {language === 'no' ? 'Systemutvikling' : 'Web Systems'}
                </a>
                <a
                  href="/tjenester/kunstig-intelligens-og-automasjon"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('service:kunstig-intelligens-og-automasjon');
                  }}
                  className="text-cyan-200/90 hover:text-cyan-300 transition-colors block"
                >
                  {language === 'no' ? 'AI & Automasjon' : 'AI & Automation'}
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-cyan-500/20 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Org. nr. 926 117 076</span>
              </div>
              <a
                href={
                  (import.meta.env?.VITE_GOOGLE_REVIEW_URL as string | undefined) ||
                  'https://www.google.com/search?q=Geton+AS+Trollhaugmyra+15+5353+Straume'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-300/90 hover:text-amber-200 transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-amber-300/80 text-amber-300 shrink-0" />
                <span>
                  {language === 'no' ? 'Gi oss en anmeldelse på Google' : 'Review us on Google'}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-slate-300 font-medium">
              © 2026 Geton AS, org. nummer 926117076. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>GDPR-tilpasset utvikling</span>
            </span>
            <span className="hidden sm:inline text-slate-600" aria-hidden="true">·</span>
            <span>Trollhaugmyra 15, 5353 Straume</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
