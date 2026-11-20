import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe,
  Smartphone,
  Layers,
  Cloud,
  Palette,
  TrendingUp,
  ShoppingCart,
  Workflow,
  Sparkles,
  ShieldCheck,
  Search,
  MapPin,
} from 'lucide-react';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { SERVICE_PAGES, ServiceSlug } from '../data/services.ts';
import { trackEvent } from '../utils/analytics.ts';

interface ServicePageProps {
  slug: ServiceSlug;
  onBack: () => void;
  onNavigateToService: (slug: ServiceSlug) => void;
  onNavigateToTab: (tab: string) => void;
  onStartProject: (serviceTitle: string) => void;
}

const SERVICE_ICONS: Record<ServiceSlug, React.ComponentType<{ className?: string }>> = {
  nettsideutvikling: Globe,
  mobilapputvikling: Smartphone,
  'webapplikasjoner-og-systemutvikling': Layers,
  'sky-losninger': Cloud,
  'produktdesign-ux-ui': Palette,
  'digital-markedsforing': TrendingUp,
  'nettbutikk-og-ehandel': ShoppingCart,
  'systemintegrasjoner-og-api': Workflow,
  'kunstig-intelligens-og-automasjon': Sparkles,
  'vedlikehold-og-support': ShieldCheck,
  'merkevare-og-visuell-profil': Layers,
  'seo-og-ytelsesoptimalisering': Search,
};

export const ServicePage: React.FC<ServicePageProps> = ({
  slug,
  onBack,
  onNavigateToService,
  onNavigateToTab,
  onStartProject,
}) => {
  const { language } = useLanguage();
  const data = SERVICE_PAGES[slug];
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setOpenFaqIdx(0);
  }, [slug]);

  const ServiceIcon = SERVICE_ICONS[slug] || Globe;

  const eyebrow = language === 'no' ? data.eyebrowNo : data.eyebrowEn;
  const h1 = language === 'no' ? data.h1No : data.h1En;
  const intro = language === 'no' ? data.introNo : data.introEn;
  const overviewTitle = language === 'no' ? data.overviewTitleNo : data.overviewTitleEn;
  const overviewText = language === 'no' ? data.overviewTextNo : data.overviewTextEn;
  const benefits = language === 'no' ? data.benefitsNo : data.benefitsEn;
  const capabilities = language === 'no' ? data.capabilitiesNo : data.capabilitiesEn;
  const process = language === 'no' ? data.processNo : data.processEn;
  const navLabel = language === 'no' ? data.navLabelNo : data.navLabelEn;

  const handleOpenQuote = () => {
    trackEvent('service_inquiry_click', { service: slug, location: 'service_page' });
    onStartProject(navLabel);
  };

  return (
    <div className="min-h-screen bg-[#040816] text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Persistent Top Menu */}
      <div className="sticky top-0 z-50 w-full bg-[#040816]/90 backdrop-blur-xl border-b border-white/10">
        <Navbar
          activeTab="services"
          onSelectTab={onNavigateToTab}
          onSelectServiceSlug={onNavigateToService}
          onGetStarted={handleOpenQuote}
        />
      </div>

      <main>
        {/* Hero with Split Visual Showcase */}
        <section className="relative pt-12 pb-16 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-white/10 overflow-hidden">
          <div className="absolute top-12 left-1/4 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-[1440px] mx-auto relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-6">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onBack();
                }}
                className="hover:text-cyan-300 transition-colors"
              >
                {language === 'no' ? 'Forside' : 'Home'}
              </a>
              <span aria-hidden="true">/</span>
              <a
                href="/tjenester"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToTab('services-page');
                }}
                className="hover:text-cyan-300 transition-colors"
              >
                {language === 'no' ? 'Våre tjenester' : 'Services'}
              </a>
              <span aria-hidden="true">/</span>
              <span className="text-cyan-300 font-medium">{navLabel}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                    <ServiceIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                    {eyebrow}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold font-display tracking-tight text-white mb-6 leading-[1.12] [text-wrap:balance]">
                  {h1}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8">
                  {intro}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={handleOpenQuote}
                    className="px-7 py-3.5 rounded-full text-sm font-semibold text-white btn-cyan-gradient inline-flex items-center gap-2 cursor-pointer hover:scale-[1.02] transition-all"
                  >
                    <span>
                      {slug === 'mobilapputvikling'
                        ? language === 'no'
                          ? 'Diskuter app-idéen din'
                          : 'Discuss your app idea'
                        : language === 'no'
                        ? 'Få et uforpliktende tilbud'
                        : 'Request a free quote'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="/#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateToTab('projects');
                    }}
                    className="px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-colors"
                  >
                    {language === 'no' ? 'Se relevante prosjekter' : 'View selected projects'}
                  </a>
                </div>
              </div>

              {/* Hero Showcase Image */}
              <div className="lg:col-span-5">
                <figure className="rounded-3xl overflow-hidden border border-cyan-400/30 bg-[#081229] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                  <div className="aspect-video w-full overflow-hidden bg-slate-900">
                    <img
                      src={data.heroImage.src}
                      alt={language === 'no' ? data.heroImage.altNo : data.heroImage.altEn}
                      width={1280}
                      height={720}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <figcaption className="px-5 py-3.5 text-xs sm:text-sm text-slate-300 bg-[#071024] border-t border-white/10">
                    {language === 'no' ? data.heroImage.captionNo : data.heroImage.captionEn}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Showcase Gallery */}
        {data.galleryImages.length > 0 && (
          <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-white/10 bg-[#050b1c]">
            <div className="max-w-[1440px] mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase block mb-2">
                    {language === 'no' ? 'VISUELLE EKSEMPLER & ARKITEKTUR' : 'VISUAL EXAMPLES & ARCHITECTURE'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    {language === 'no'
                      ? `Slik ser ${navLabel.toLowerCase()} ut i praksis`
                      : `How ${navLabel} looks in production`}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {data.galleryImages.map((img, idx) => (
                  <figure
                    key={idx}
                    className="rounded-2xl overflow-hidden bg-[#09122b] border border-white/10 hover:border-cyan-400/40 transition-colors flex flex-col"
                  >
                    <div className="aspect-video w-full overflow-hidden bg-slate-900">
                      <img
                        src={img.src}
                        alt={language === 'no' ? img.altNo : img.altEn}
                        width={1280}
                        height={720}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                    <figcaption className="p-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {language === 'no' ? img.captionNo : img.captionEn}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Overview & Benefits */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-white/10 bg-[#060c1f]">
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-4 leading-tight [text-wrap:balance]">
                {overviewTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {overviewText}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#09122b] border border-white/10 flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <h3 className="text-lg font-bold font-display text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed pl-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities & Technologies */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-6">
                {language === 'no' ? 'Mulige funksjoner og leveranser' : 'Capabilities & deliverables'}
              </h2>
              <ul className="space-y-3.5">
                {capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#09122b] border border-cyan-400/25 space-y-5">
              <div>
                <h3 className="text-lg font-bold font-display text-white mb-2">
                  {language === 'no' ? 'Teknologi og rammeverk' : 'Core technologies'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {language === 'no'
                    ? 'Vi velger moderne, velprøvde teknologier som gjør løsningen rask, sikker og enkel å videreutvikle.'
                    : 'Proven technologies selected for performance, maintainability, and long-term scale.'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {language === 'no'
                      ? 'Lokal partner på Vestland – leverer i hele Norge'
                      : 'Based in Øygarden & Bergen — serving Norway'}
                  </span>
                </div>
                <p className="text-slate-400 pl-6">
                  {language === 'no'
                    ? 'Skreddersydd etter dine behov. Tidsplan og omfang avtales konkret før oppstart.'
                    : 'Tailored to your scope, goals, and timeline.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-white/10 bg-[#060c1f]">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-10">
              {language === 'no' ? 'Slik jobber vi fra idé til lansering' : 'Our development process'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-[#09122b] border border-white/10 flex flex-col gap-3"
                >
                  <span className="text-xs font-bold tracking-widest text-cyan-400 tabular-nums">
                    STEG {step.step}
                  </span>
                  <h3 className="text-base font-bold font-display text-white">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-8">
              {language === 'no' ? 'Ofte stilte spørsmål' : 'Frequently asked questions'}
            </h2>
            <div className="space-y-3">
              {data.faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                const q = language === 'no' ? faq.questionNo : faq.questionEn;
                const a = language === 'no' ? faq.answerNo : faq.answerEn;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#09122b] border border-white/10 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      <span>{q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-cyan-300 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                        {a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Related Services & Final CTA */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#060c1f]">
          <div className="max-w-[1440px] mx-auto space-y-14">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white mb-6">
                {language === 'no' ? 'Relaterte tjenester fra Geton AS' : 'Related services'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.relatedSlugs.map((relSlug) => {
                  const rel = SERVICE_PAGES[relSlug];
                  return (
                    <a
                      key={relSlug}
                      href={rel.routePath}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateToService(relSlug);
                      }}
                      className="p-6 rounded-2xl bg-[#09122b] border border-white/10 hover:border-cyan-400/50 transition-all flex items-center justify-between gap-4 group"
                    >
                      <div>
                        <div className="text-xs font-semibold text-cyan-300 mb-1">
                          {language === 'no' ? rel.eyebrowNo : rel.eyebrowEn}
                        </div>
                        <div className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                          {language === 'no' ? rel.navLabelNo : rel.navLabelEn}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-cyan-300 shrink-0 group-hover:translate-x-1 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-950/70 via-cyan-950/70 to-emerald-950/60 border border-cyan-400/35 text-center">
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-4">
                {language === 'no'
                  ? 'Klar til å diskutere prosjektet ditt?'
                  : 'Ready to discuss your project?'}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8">
                {language === 'no'
                  ? 'Skreddersydd etter dine behov. Send oss noen linjer om hva du ønsker å oppnå, så tar vi kontakt for en uforpliktende prat.'
                  : 'Tailored around your goals and budget. Tell us briefly what you want to build for a non-binding consultation.'}
              </p>
              <button
                type="button"
                onClick={handleOpenQuote}
                className="px-8 py-4 rounded-full text-sm font-semibold text-white btn-cyan-gradient inline-flex items-center gap-2 cursor-pointer hover:scale-[1.02] transition-all"
              >
                <span>
                  {language === 'no' ? 'Fortell oss om prosjektet ditt' : 'Tell us about your project'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer onSelectTab={onNavigateToTab} onGetStarted={handleOpenQuote} />
    </div>
  );
};
