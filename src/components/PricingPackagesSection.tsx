import React from 'react';
import { Check, ArrowRight, Sparkles, Smartphone, Globe, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { ServiceSlug } from '../data/services.ts';
import { trackEvent } from '../utils/analytics.ts';

interface PricingPackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
  onNavigateToService?: (slug: ServiceSlug) => void;
}

export const PricingPackagesSection: React.FC<PricingPackagesSectionProps> = ({
  onSelectPackage,
  onNavigateToService,
}) => {
  const { language } = useLanguage();

  const heading =
    language === 'no'
      ? 'Digitale løsninger tilpasset dine ambisjoner'
      : 'Digital solutions tailored to your ambitions';

  const description =
    language === 'no'
      ? 'Fra første idé til ferdig produkt. Vi utvikler moderne nettsider, mobilapper og webapplikasjoner som passer dine mål, behov og budsjett.'
      : 'From initial idea to finished product. We develop modern websites, mobile apps, and web applications aligned with your goals, requirements, and budget.';

  const tailoredTitle =
    language === 'no' ? 'Skreddersydd etter dine behov' : 'Tailored to your needs';
  const tailoredSub =
    language === 'no'
      ? 'Vi tilpasser løsningen til dine mål, funksjoner og budsjett.'
      : 'We tailor the solution to your goals, features, and budget.';
  const featuresHeader =
    language === 'no' ? 'Mulige funksjoner og leveranser' : 'Possible features and deliverables';
  const cardFootnote =
    language === 'no'
      ? 'Endelig leveranse tilpasses prosjektets behov og avtalt omfang.'
      : 'Final delivery is adapted to the project’s needs and agreed scope.';

  const cards = [
    {
      id: 'website',
      slug: 'nettsideutvikling' as ServiceSlug,
      preselectKey: 'Nettsideutvikling',
      categoryTag: language === 'no' ? 'NETTSIDE' : 'WEBSITE',
      title: language === 'no' ? 'Nettsideutvikling' : 'Website Development',
      desc:
        language === 'no'
          ? 'Moderne, raske og brukervennlige nettsider som bygger tillit og gjør besøkende til kunder.'
          : 'Modern, fast, and user-friendly websites built to establish trust and convert visitors into clients.',
      cta: language === 'no' ? 'Få et uforpliktende tilbud' : 'Get a non-binding quote',
      readMore: language === 'no' ? 'Les mer om nettsideutvikling' : 'Read about websites',
      Icon: Globe,
      iconColor: 'text-sky-400',
      iconWrapper: 'bg-white/5 border border-white/10',
      popular: false,
      features:
        language === 'no'
          ? [
              'Responsivt design for mobil og desktop',
              'Tydelig struktur og konverterende flyt',
              'Kontaktskjema og leads-fangst',
              'Teknisk SEO og rask lastetid',
              'SSL-sikkerhet og personverntilpasning',
              'Enkel innholdsredigering (CMS)',
            ]
          : [
              'Responsive design for mobile & desktop',
              'Clear UX structure & conversion flow',
              'Contact forms & lead capture',
              'Technical SEO & fast page load',
              'HTTPS security & GDPR readiness',
              'Intuitive content management (CMS)',
            ],
    },
    {
      id: 'mobileApp',
      slug: 'mobilapputvikling' as ServiceSlug,
      preselectKey: 'Mobilapputvikling',
      categoryTag: 'IOS & ANDROID',
      title: language === 'no' ? 'Mobilapputvikling' : 'Mobile App Development',
      desc:
        language === 'no'
          ? 'Fra MVP til komplett iOS- og Android-app med design, backend og publisering i appbutikkene.'
          : 'From MVP to complete iOS and Android applications covering UX design, backend, and store launch.',
      cta: language === 'no' ? 'Diskuter app-idéen din' : 'Discuss your app idea',
      readMore: language === 'no' ? 'Les mer om mobilapputvikling' : 'Read about mobile apps',
      Icon: Smartphone,
      iconColor: 'text-emerald-400',
      iconWrapper: 'bg-emerald-950/70 border border-emerald-400/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]',
      popular: true,
      features:
        language === 'no'
          ? [
              'Utvikling for både iOS og Android',
              'Skreddersydd UI/UX og brukerflyt',
              'Sikker backend, database og API-er',
              'Innlogging (BankID / SMS / brukerprofiler)',
              'Push-varsler og sanntidsfunksjoner',
              'Publisering i App Store & Google Play',
            ]
          : [
              'Cross-platform iOS & Android delivery',
              'Custom UI/UX & intuitive user journeys',
              'Secure backend, database & APIs',
              'Auth (BankID / OTP / user profiles)',
              'Push notifications & live features',
              'App Store & Google Play publishing',
            ],
    },
    {
      id: 'webApp',
      slug: 'webapplikasjoner-og-systemutvikling' as ServiceSlug,
      preselectKey: 'Webapplikasjoner og systemutvikling',
      categoryTag: language === 'no' ? 'SYSTEMUTVIKLING' : 'CUSTOM SOFTWARE',
      title:
        language === 'no'
          ? 'Webapplikasjoner og systemutvikling'
          : 'Web Applications & System Development',
      desc:
        language === 'no'
          ? 'Skreddersydde fagsystemer, portaler og arbeidsverktøy som automatiserer prosesser og vokser med deg.'
          : 'Bespoke business systems, client portals, and workflow tools engineered to automate and scale.',
      cta: language === 'no' ? 'Få et uforpliktende tilbud' : 'Get a non-binding quote',
      readMore: language === 'no' ? 'Les mer om systemutvikling' : 'Read about system development',
      Icon: Layers,
      iconColor: 'text-indigo-400',
      iconWrapper: 'bg-white/5 border border-white/10',
      popular: false,
      features:
        language === 'no'
          ? [
              'Skreddersydd frontend og backend',
              'Dashbord, rapportering og adminpanel',
              'Brukerroller og sikker tilgangsstyring',
              'API-integrasjoner (ERP, regnskap, betaling)',
              'Automatisering av manuelle arbeidsprosesser',
              'Skalerbar skyarkitektur med høy oppetid',
            ]
          : [
              'Custom frontend & backend architecture',
              'Dashboards, reporting & admin panels',
              'User roles & granular permissions',
              'API integrations (ERP, accounting, payments)',
              'Workflow automation & notifications',
              'Scalable cloud deployment',
            ],
    },
  ];

  return (
    <section
      id="pricing-packages"
      aria-labelledby="services-heading"
      className="relative z-20 w-full py-24 sm:py-32 bg-[#060c1d] text-white overflow-hidden border-t border-b border-white/10"
    >
      {/* Subtle Emerald & Cyan Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase mb-3">
            {language === 'no' ? 'TJENESTER & LØSNINGER' : 'SERVICES & SOLUTIONS'}
          </p>

          <h2
            id="services-heading"
            className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.15] [text-wrap:balance]"
          >
            {heading}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            {description}
          </p>
        </div>

        {/* 3 Equal-Height Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {cards.map((card) => {
            const IconComp = card.Icon;
            return (
              <article
                key={card.id}
                className={`relative rounded-[26px] p-7 sm:p-8 flex flex-col h-full transition-all duration-300 group ${
                  card.popular
                    ? 'bg-[#0b162c] border-2 border-emerald-400/80 shadow-[0_0_50px_rgba(16,185,129,0.18)]'
                    : 'bg-[#0b1226]/90 border border-white/10 hover:border-slate-500 shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:-translate-y-1'
                }`}
              >
                {/* Popular Badge on Mobile App card */}
                {card.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" aria-hidden="true" />
                    <span>{language === 'no' ? 'POPULÆR' : 'POPULAR'}</span>
                  </div>
                )}

                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${card.iconWrapper}`}
                  >
                    <IconComp className={`w-6 h-6 ${card.iconColor}`} aria-hidden="true" />
                  </div>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      card.popular ? 'text-emerald-300' : 'text-slate-400'
                    }`}
                  >
                    {card.categoryTag}
                  </span>
                </div>

                {/* Title & Short Description */}
                <div className="min-h-[112px] flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Tailored Scope Replacement (Zero Public Fixed Prices) */}
                <div
                  className={`mt-5 mb-6 pb-6 border-b ${
                    card.popular ? 'border-emerald-400/20' : 'border-white/10'
                  }`}
                >
                  <div className="text-lg sm:text-xl font-bold text-white font-display tracking-tight">
                    {tailoredTitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {tailoredSub}
                  </p>
                </div>

                {/* Aligned CTA Button */}
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('service_inquiry_click', {
                      service: card.slug,
                      location: 'services_section',
                    });
                    onSelectPackage(card.preselectKey);
                  }}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 mb-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ${
                    card.popular
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/25 hover:scale-[1.01]'
                      : 'bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/15 hover:border-white/30'
                  }`}
                >
                  <span>{card.cta}</span>
                  <ArrowRight className={`w-4 h-4 ${card.popular ? 'stroke-[2.5]' : ''}`} />
                </button>

                {/* Features Checklist */}
                <div className="space-y-3 flex-1">
                  <div
                    className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                      card.popular ? 'text-emerald-300' : 'text-slate-400'
                    }`}
                  >
                    {featuresHeader}
                  </div>
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          card.popular
                            ? 'bg-emerald-400 text-slate-950'
                            : 'bg-emerald-500/20 text-emerald-400'
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Card Bottom Footnote & Internal SEO Link */}
                <div
                  className={`mt-8 pt-4 border-t space-y-2.5 ${
                    card.popular ? 'border-emerald-400/20' : 'border-white/10'
                  }`}
                >
                  <p
                    className={`text-xs leading-relaxed ${
                      card.popular ? 'text-emerald-200/90' : 'text-slate-400'
                    }`}
                  >
                    {cardFootnote}
                  </p>
                  {onNavigateToService && (
                    <a
                      href={`/tjenester/${card.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateToService(card.slug);
                      }}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                        card.popular
                          ? 'text-emerald-300 hover:text-emerald-200'
                          : 'text-cyan-300 hover:text-cyan-200'
                      }`}
                    >
                      <span>{card.readMore}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
