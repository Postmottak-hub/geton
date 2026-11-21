import React from 'react';
import {
  Globe,
  Smartphone,
  Sparkles,
  Layers,
  ShoppingCart,
  Workflow,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { ServiceSlug } from '../data/services.ts';
import { trackEvent } from '../utils/analytics.ts';

interface HomeServicesSectionProps {
  onNavigateToService: (slug: ServiceSlug) => void;
  onViewAllServices: () => void;
}

interface HomeServiceCard {
  slug: ServiceSlug;
  routePath: string;
  icon: React.ComponentType<{ className?: string }>;
  titleNo: string;
  titleEn: string;
  descNo: string;
  descEn: string;
}

const HOME_SERVICES: HomeServiceCard[] = [
  {
    slug: 'nettsideutvikling',
    routePath: '/tjenester/nettsideutvikling',
    icon: Globe,
    titleNo: 'Nettsider og webutvikling',
    titleEn: 'Websites & Web Development',
    descNo:
      'Moderne, raske og brukervennlige nettsider designet for å konvertere besøkende til kunder.',
    descEn:
      'Modern, fast, and user-friendly websites designed to convert visitors into customers.',
  },
  {
    slug: 'mobilapputvikling',
    routePath: '/tjenester/mobilapputvikling',
    icon: Smartphone,
    titleNo: 'Mobilapputvikling',
    titleEn: 'Mobile App Development',
    descNo:
      'Skreddersydde mobilapper for iOS og Android – fra idé og prototype til publisering.',
    descEn:
      'Custom mobile applications for iOS and Android – from concept and prototype to launch.',
  },
  {
    slug: 'kunstig-intelligens-og-automasjon',
    routePath: '/tjenester/kunstig-intelligens-og-automasjon',
    icon: Sparkles,
    titleNo: 'AI og automatisering',
    titleEn: 'AI & Automation',
    descNo:
      'Smarte AI-integrasjoner og automatiserte arbeidsprosesser som sparer tid og kostnader.',
    descEn:
      'Smart AI integrations and automated workflows engineered to save time and cut costs.',
  },
  {
    slug: 'webapplikasjoner-og-systemutvikling',
    routePath: '/tjenester/webapplikasjoner-og-systemutvikling',
    icon: Layers,
    titleNo: 'Skreddersydd programvare',
    titleEn: 'Custom Software',
    descNo: 'Programvare og digitale systemer utviklet spesielt for din bedrift.',
    descEn:
      'Bespoke web platforms and internal software systems built around your exact operations.',
  },
  {
    slug: 'nettbutikk-og-ehandel',
    routePath: '/tjenester/nettbutikk-og-ehandel',
    icon: ShoppingCart,
    titleNo: 'Nettbutikker og e-handel',
    titleEn: 'Online Stores & E-commerce',
    descNo:
      'Skalerbare nettbutikker med sømløs kjøpsopplevelse og trygge betalingsløsninger.',
    descEn:
      'Scalable e-commerce stores featuring smooth checkout and trusted payment integrations.',
  },
  {
    slug: 'systemintegrasjoner-og-api',
    routePath: '/tjenester/systemintegrasjoner-og-api',
    icon: Workflow,
    titleNo: 'Systemintegrasjoner',
    titleEn: 'System Integrations',
    descNo:
      'Sømløs kobling mellom dine eksisterende verktøy, API-er og digitale plattformer.',
    descEn:
      'Seamless data synchronization across your accounting, logistics, CRM, and cloud APIs.',
  },
];

export const HomeServicesSection: React.FC<HomeServicesSectionProps> = ({
  onNavigateToService,
  onViewAllServices,
}) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={`w-full py-20 sm:py-28 relative z-20 transition-colors duration-300 border-b ${
        isLight
          ? 'bg-[#fafaf9] text-neutral-900 border-neutral-200/80'
          : 'bg-[#040816] text-white border-white/10'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span
              className={`text-xs font-semibold tracking-[0.2em] uppercase block mb-3 ${
                isLight ? 'text-sky-700' : 'text-cyan-300'
              }`}
            >
              {language === 'no' ? 'VÅRE TJENESTER' : 'OUR SERVICES'}
            </span>
            <h2
              id="services-heading"
              className={`text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-[1.12] [text-wrap:balance] ${
                isLight ? 'text-neutral-900' : 'text-white'
              }`}
            >
              {language === 'no'
                ? 'Digitale tjenester tilpasset dine behov'
                : 'Digital services tailored to your needs'}
            </h2>
            <p
              className={`mt-4 text-base sm:text-lg leading-relaxed max-w-xl ${
                isLight ? 'text-neutral-600' : 'text-slate-300'
              }`}
            >
              {language === 'no'
                ? 'Fra enkle nettsider til avanserte digitale plattformer – vi utvikler løsninger som skaper verdi.'
                : 'From modern websites to advanced digital platforms – we build software solutions that create lasting value.'}
            </p>
          </div>

          <a
            href="/tjenester"
            onClick={(e) => {
              e.preventDefault();
              trackEvent('cta_click', { label: 'home_view_all_services', location: 'services' });
              onViewAllServices();
            }}
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors shrink-0 ${
              isLight
                ? 'text-neutral-900 hover:text-sky-700'
                : 'text-cyan-300 hover:text-cyan-200'
            }`}
          >
            <span>
              {language === 'no'
                ? 'Se alle 12 tjenester og priser'
                : 'Explore all 12 services & pricing'}
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Clean 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {HOME_SERVICES.map((item) => {
            const IconComp = item.icon;
            const title = language === 'no' ? item.titleNo : item.titleEn;
            const desc = language === 'no' ? item.descNo : item.descEn;

            return (
              <a
                key={item.slug}
                href={item.routePath}
                onClick={(e) => {
                  e.preventDefault();
                  trackEvent('service_card_click', { service: item.slug, location: 'home' });
                  onNavigateToService(item.slug);
                }}
                className={`group rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isLight
                    ? 'bg-white border-[#e7e7e5] hover:border-neutral-400 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_34px_-10px_rgba(0,0,0,0.09)] hover:-translate-y-1'
                    : 'bg-[#081026]/85 border-white/10 hover:border-cyan-400/50 hover:bg-[#0b1533] shadow-[0_4px_24px_rgba(0,0,0,0.28)] hover:-translate-y-1'
                }`}
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 transition-colors duration-200 ${
                      isLight
                        ? 'bg-neutral-100 border-neutral-200 text-neutral-900 group-hover:bg-neutral-900 group-hover:border-neutral-900 group-hover:text-white'
                        : 'bg-cyan-950/60 border-cyan-400/35 text-cyan-300 group-hover:bg-cyan-500/20 group-hover:border-cyan-300'
                    }`}
                  >
                    <IconComp className="w-5 h-5" aria-hidden="true" />
                  </div>

                  <h3
                    className={`text-lg sm:text-xl font-display font-bold mb-2.5 leading-snug transition-colors ${
                      isLight
                        ? 'text-neutral-900 group-hover:text-black'
                        : 'text-white group-hover:text-cyan-200'
                    }`}
                  >
                    {title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      isLight ? 'text-neutral-600' : 'text-slate-300'
                    }`}
                  >
                    {desc}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                    isLight
                      ? 'border-neutral-100 text-neutral-900'
                      : 'border-white/10 text-cyan-300'
                  }`}
                >
                  <span>{language === 'no' ? 'Les mer' : 'Learn more'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
