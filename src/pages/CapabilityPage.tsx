import React, { useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Sparkles,
  Layers,
} from 'lucide-react';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CAPABILITY_PAGES, CAPABILITY_LIST, CapabilitySlug } from '../data/capabilities.ts';
import { ServiceSlug } from '../data/services.ts';
import { trackEvent } from '../utils/analytics.ts';

interface CapabilityPageProps {
  slug: CapabilitySlug;
  onBack: () => void;
  onNavigateToCapability: (slug: CapabilitySlug) => void;
  onNavigateToService: (slug: ServiceSlug) => void;
  onNavigateToTab: (tab: string) => void;
  onStartProject: () => void;
}

export const CapabilityPage: React.FC<CapabilityPageProps> = ({
  slug,
  onBack,
  onNavigateToCapability,
  onNavigateToService,
  onNavigateToTab,
  onStartProject,
}) => {
  const { language } = useLanguage();
  const data = CAPABILITY_PAGES[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  const title = language === 'no' ? data.titleNo : data.titleEn;
  const tag = language === 'no' ? data.tagNo : data.tagEn;
  const headline = language === 'no' ? data.headlineNo : data.headlineEn;
  const description = language === 'no' ? data.descriptionNo : data.descriptionEn;
  const extendedStory = language === 'no' ? data.extendedStoryNo : data.extendedStoryEn;
  const architecturePoints =
    language === 'no' ? data.architecturePointsNo : data.architecturePointsEn;
  const deliverables = language === 'no' ? data.deliverablesNo : data.deliverablesEn;

  return (
    <div className="min-h-screen bg-[#040816] text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Persistent Top Menu */}
      <div className="sticky top-0 z-50 w-full bg-[#040816]/90 backdrop-blur-xl border-b border-white/10">
        <Navbar
          activeTab="about"
          onSelectTab={onNavigateToTab}
          onSelectServiceSlug={onNavigateToService}
          onGetStarted={onStartProject}
        />
      </div>

      <main>
        {/* Hero */}
        <section className="relative pt-12 pb-16 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-white/10 overflow-hidden">
          <div className="absolute top-10 left-1/3 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-[1440px] mx-auto relative z-10">
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
              <span>{language === 'no' ? 'Teknologipartner' : 'Technology Partner'}</span>
              <span aria-hidden="true">/</span>
              <span className="text-cyan-300 font-medium">{title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase mb-4">
                  <span className="tabular-nums">{data.number}</span>
                  <span>·</span>
                  <span>{tag}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold font-display tracking-tight text-white mb-4 leading-[1.12] [text-wrap:balance]">
                  {title}
                </h1>

                <p className="text-base sm:text-xl font-medium text-cyan-300 mb-6">{headline}</p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-8">
                  {description}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      trackEvent('cta_click', {
                        label: `capability_cta_${slug}`,
                        location: 'capability_page',
                      });
                      onStartProject();
                    }}
                    className="px-7 py-3.5 rounded-full text-sm font-semibold text-white btn-cyan-gradient inline-flex items-center gap-2 cursor-pointer hover:scale-[1.02] transition-all"
                  >
                    <span>
                      {language === 'no' ? 'Diskuter løsningen med oss' : 'Discuss With Us'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="/om-oss"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateToTab('about');
                    }}
                    className="px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-colors"
                  >
                    {language === 'no' ? 'Les mer om Geton AS' : 'Learn about Geton AS'}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border border-cyan-400/30 bg-[#081229] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                  <div className="aspect-video w-full overflow-hidden bg-slate-900">
                    <img
                      src={data.heroImage}
                      alt={language === 'no' ? data.heroAltNo : data.heroAltEn}
                      width={1280}
                      height={714}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="px-5 py-3.5 flex items-center justify-between text-xs text-slate-300 bg-[#071024] border-t border-white/10">
                    <span className="font-semibold text-cyan-300">{data.badge}</span>
                    <span>Geton AS · Straume / Bergen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Narrative & Secondary Photo */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-white/10 bg-[#060c1f]">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-white/15 bg-slate-900 aspect-video shadow-2xl">
                <img
                  src={data.secondaryImage}
                  alt={language === 'no' ? data.secondaryAltNo : data.secondaryAltEn}
                  width={1280}
                  height={714}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                <Layers className="w-4 h-4" />
                <span>{language === 'no' ? 'METODIKK & KVALITET' : 'METHODOLOGY & QUALITY'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white leading-tight [text-wrap:balance]">
                {language === 'no'
                  ? 'Hvorfor dette betyr noe for prosjektet ditt'
                  : 'Why this matters for your digital project'}
              </h2>
              {extendedStory.map((paragraph, i) => (
                <p key={i} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture & Deliverables */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#09122b] border border-white/10 space-y-5">
              <div className="flex items-center gap-2.5 text-xs font-bold text-cyan-300 uppercase tracking-wider">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>
                  {language === 'no'
                    ? 'Kjernekompetanse & Teknisk rammeverk'
                    : 'Core Capabilities & Framework'}
                </span>
              </div>
              <div className="space-y-4">
                {architecturePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 sm:p-9 rounded-3xl bg-cyan-950/25 border border-cyan-400/30 space-y-5">
              <div className="flex items-center gap-2.5 text-xs font-bold text-cyan-300 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>
                  {language === 'no' ? 'Hva du mottar i leveransen' : 'Concrete Deliverables'}
                </span>
              </div>
              <div className="space-y-4">
                {deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Pillars & Bottom CTA */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#060c1f]">
          <div className="max-w-[1440px] mx-auto space-y-12">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white mb-6">
                {language === 'no'
                  ? 'Utforsk flere deler av vårt partnerskap'
                  : 'Explore more of our engineering pillars'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CAPABILITY_LIST.filter((c) => c.slug !== slug).map((cap) => (
                  <a
                    key={cap.slug}
                    href={cap.routePath}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateToCapability(cap.slug);
                    }}
                    className="p-6 rounded-2xl bg-[#09122b] border border-white/10 hover:border-cyan-400/50 transition-all flex items-center justify-between gap-4 group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-cyan-300 mb-1 tabular-nums">
                        {cap.number} · {language === 'no' ? cap.tagNo : cap.tagEn}
                      </div>
                      <div className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {language === 'no' ? cap.titleNo : cap.titleEn}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-cyan-300 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-950/70 via-cyan-950/70 to-emerald-950/60 border border-cyan-400/35 text-center">
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-4">
                {language === 'no'
                  ? 'Ønsker du en pålitelig teknologipartner?'
                  : 'Looking for a dedicated technology partner?'}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8">
                {language === 'no'
                  ? 'Ta kontakt med Geton AS for en uforpliktende samtale om idé, arkitektur og gjennomføring.'
                  : 'Reach out to Geton AS for a non-binding conversation about your roadmap, architecture, and delivery.'}
              </p>
              <button
                type="button"
                onClick={onStartProject}
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

      <Footer onSelectTab={onNavigateToTab} onGetStarted={onStartProject} />
    </div>
  );
};
