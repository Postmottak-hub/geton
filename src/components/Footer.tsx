import React from 'react';
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Globe,
  Clock,
  Sparkles,
  Building2,
} from 'lucide-react';
import { GetonLogo } from './Logo.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onGetStarted: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onGetStarted }) => {
  const { t, language } = useLanguage();

  return (
    <footer className="w-full relative z-30 bg-[#020512] text-white border-t border-cyan-500/25 overflow-hidden">
      
      {/* Ambient background glow flares */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[300px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none -z-0" />

      {/* Top illuminated cyber accent line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-16 pb-12 relative z-10">
        
        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-cyan-500/20">
          
          {/* Column 1 (5 cols): Brand & Company Mission */}
          <div className="lg:col-span-5 space-y-5">
            {/* Enlarged Geton Logo */}
            <div className="flex items-center gap-3">
              <GetonLogo size="large" />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md font-normal">
              {t.footer.mission}
            </p>

            {/* Nordic Hub Status & System Indicator */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/35 text-[11px] font-semibold text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.25)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>{t.footer.nordicNode}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-400/35 text-[11px] font-semibold text-emerald-300">
                <Clock className="w-3 h-3 text-emerald-400" />
                <span>{t.footer.sreOnCall}</span>
              </div>
            </div>

            {/* Quick Action Consultation Pill */}
            <div className="pt-2">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white btn-cyan-gradient shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer hover:scale-105 active:scale-95 transition-all"
              >
                <span>{t.footer.requestProposal}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2 (4 cols): Head Office & Direct Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-semibold text-cyan-300 uppercase tracking-widest block">
              {t.footer.headquartersTitle}
            </span>

            {/* Address Card */}
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

            {/* Email Card */}
            <a
              href="mailto:contact@getontechs.com"
              className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-cyan-950/40 border border-cyan-400/25 hover:border-cyan-400/50 transition-all flex items-center gap-3 group text-left block"
            >
              <div className="w-9 h-9 rounded-xl bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform shrink-0">
                <Mail className="w-4 h-4 text-cyan-300" />
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {t.footer.emailLabel}
                </div>
                <div className="text-xs text-slate-400">
                  {language === 'no' ? 'Direkte arkitekturbriefing' : 'Direct Architectural Briefings'}
                </div>
              </div>
            </a>

            {/* Telephone Card */}
            <a
              href="tel:+4740584817"
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
                  {language === 'no' ? 'Hovedkontor Norge (Man – Fre 08:00 – 17:00)' : 'Norway HQ Line (Mon – Fri 08:00 – 17:00 CET)'}
                </div>
              </div>
            </a>
          </div>

          {/* Column 3 (3 cols): Quick Navigation & Technologies */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-semibold text-cyan-300 uppercase tracking-widest block">
              {t.footer.navigationTitle}
            </span>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="space-y-2.5">
                <button
                  onClick={() => onSelectTab('services')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors block cursor-pointer text-left"
                >
                  {t.nav.services}
                </button>
                <button
                  onClick={() => onSelectTab('projects')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors block cursor-pointer text-left"
                >
                  {t.nav.projects}
                </button>
                <button
                  onClick={() => onSelectTab('about')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors block cursor-pointer text-left"
                >
                  {t.nav.about}
                </button>
                <button
                  onClick={() => onSelectTab('blogs')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors block cursor-pointer text-left"
                >
                  {t.nav.blogs}
                </button>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors block cursor-pointer text-left"
                >
                  {t.nav.contact}
                </button>
              </div>

              <div className="space-y-2.5">
                <span className="text-slate-400 block font-mono text-[11px]">
                  {language === 'no' ? 'TEKNOSTAKK' : 'TECH STACK'}
                </span>
                <span className="text-cyan-200/90 block font-mono text-[11px]">React 19 / Next</span>
                <span className="text-cyan-200/90 block font-mono text-[11px]">Flutter & RN</span>
                <span className="text-cyan-200/90 block font-mono text-[11px]">.NET 9 / Node</span>
                <span className="text-cyan-200/90 block font-mono text-[11px]">AWS & Azure</span>
                <span className="text-cyan-200/90 block font-mono text-[11px]">AI Agents</span>
              </div>
            </div>

            {/* Corporate Registration & SRE Guarantee */}
            <div className="pt-3 border-t border-cyan-500/20">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Org. nr. 926 117 076 MVA</span>
              </div>
            </div>
          </div>

        </div>

        {/* 
          BOTTOM COPYRIGHT BAR:
          - Exact text: "© 2026 Geton AS, org. nummer 926117076. All rights reserved."
          - Enlarged Geton branding & logo
        */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Left: Exact Copyright Line */}
          <div className="flex items-center gap-3">
            <span className="text-slate-300 font-medium">
              © 2026 Geton AS, org. nummer 926117076. All rights reserved.
            </span>
          </div>

          {/* Right: Security & Compliance Badges */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>SOC2 TYPE II READY</span>
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span>GDPR COMPLIANT</span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="text-cyan-300">ISO 27001 POLICIES</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

