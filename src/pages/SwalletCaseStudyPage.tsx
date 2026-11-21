import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Zap,
  TrendingDown,
  Sparkles,
  CreditCard,
  PieChart,
  Layers,
  Lock,
  Building,
  Smartphone,
  Globe,
  Sliders,
} from 'lucide-react';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { ServiceSlug } from '../data/services.ts';

interface SwalletCaseStudyPageProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
  onNavigateToTab: (tab: string) => void;
  onNavigateToService?: (slug: ServiceSlug) => void;
  onStartProject: () => void;
}

export const SwalletCaseStudyPage: React.FC<SwalletCaseStudyPageProps> = ({
  onNavigateToProject,
  onNavigateToTab,
  onNavigateToService,
  onStartProject,
}) => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const surfaceCanvas = isLight ? 'bg-[#fafaf9] text-neutral-900' : 'bg-[#040816] text-white';
  const bandAlt = isLight
    ? 'bg-[#f4f3f0] border-y border-neutral-200/80'
    : 'bg-[#060c20] border-y border-white/10';
  const cardSurface = isLight
    ? 'bg-white border border-[#e7e7e5] shadow-[0_6px_26px_rgba(0,0,0,0.03)]'
    : 'bg-[#081026] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]';
  const mutedText = isLight ? 'text-neutral-600' : 'text-slate-300';
  const headingText = isLight ? 'text-neutral-900' : 'text-white';
  const eyebrowText = isLight ? 'text-sky-700' : 'text-cyan-300';
  const pillClass = isLight
    ? 'bg-white border border-[#e7e7e5] text-neutral-700'
    : 'bg-white/[0.05] border border-white/15 text-cyan-200';
  const highlightBox = isLight
    ? 'bg-[#fafaf9] border border-neutral-200 text-neutral-800'
    : 'bg-white/[0.04] border border-white/10 text-cyan-200';

  const savingsPipeline =
    language === 'no'
      ? [
          { title: 'Utgift oppdaget', desc: 'Automatisk gjenkjenning av gjentakende banktransaksjoner', badge: 'PSD2 Sync' },
          { title: 'Forstå kostnad', desc: 'Kartlegging av månedlig og årlig kostnadsbilde', badge: 'Innsikt' },
          { title: 'Bedre alternativer', desc: 'Systemet matcher med bedre avtaler i markedet', badge: 'Markedsplass' },
          { title: 'Sammenlign vilkår', desc: 'Oversiktlig sammenligning av vilkår og besparelse', badge: 'Sammenlign' },
          { title: 'Bytt & spar', desc: 'Enklere bytte til bedre abonnement og avtaler', badge: 'Gevinst' },
        ]
      : [
          { title: 'Expense Detected', desc: 'Automatic detection of recurring bank transaction feeds', badge: 'PSD2 Sync' },
          { title: 'Mapped Cost', desc: 'Mapping of monthly and annualized recurring expenses', badge: 'Insights' },
          { title: 'Alternatives', desc: 'Matching against relevant deals across partner providers', badge: 'Marketplace' },
          { title: 'Compare Terms', desc: 'Clear side-by-side comparison of cost and terms', badge: 'Compare' },
          { title: 'Switch & Save', desc: 'Guided switch workflow directly inside the platform', badge: 'Savings' },
        ];

  const whatWeBuiltList =
    language === 'no'
      ? [
          {
            title: 'Abonnementsoversikt',
            desc: 'En helhetlig oversikt over alle faste trekk, strømmetjenester og medlemskap på ett sted.',
            icon: CreditCard,
            tag: 'Kjernefunksjon',
          },
          {
            title: 'Open Banking-arkitektur',
            desc: 'Sikker infrastruktur for tilkobling til finansielle data via lisensierte PSD2-leverandører.',
            icon: Lock,
            tag: 'Fintech API',
          },
          {
            title: 'Utgiftskategorisering',
            desc: 'Smarte algoritmer som forvandler rå transaksjonstekst til tydelige utgiftskategorier.',
            icon: PieChart,
            tag: 'Data & Innsikt',
          },
          {
            title: 'Spareinnsikt',
            desc: 'Hjelper forbrukere med å oppdage utgifter der bedre avtaler eller alternativer finnes.',
            icon: TrendingDown,
            tag: 'Analyse',
          },
          {
            title: '«Få bedre tilbud»',
            desc: 'En integrert markedsplassopplevelse for relevante tilbud basert på faktiske faste utgifter.',
            icon: Sparkles,
            tag: 'Markedsplass',
          },
          {
            title: 'Partnermarkedsplass',
            desc: 'Infrastruktur som kobler forbrukere med aktører innen forsikring, strøm og mobil.',
            icon: Building,
            tag: 'Partner API',
          },
          {
            title: 'Privatøkonomisk dashbord',
            desc: 'Månedlige utgifter, diagrammer og oversikt presentert i et intuitivt grensesnitt.',
            icon: Sliders,
            tag: 'UX/UI',
          },
          {
            title: 'Mobilapplikasjon',
            desc: 'Mobil-først iOS- og Android-opplevelse for enkel oversikt over faste trekk på farten.',
            icon: Smartphone,
            tag: 'Mobil',
          },
          {
            title: 'Webplattform',
            desc: 'Komplett nettgrensesnitt for analyse, avtaleoversikt og kontoadministrasjon.',
            icon: Globe,
            tag: 'Web',
          },
          {
            title: 'Administrasjonsplattform',
            desc: 'Verktøy for styring av brukere, verifiserte partnertilbud, kategorier og innsikt.',
            icon: Layers,
            tag: 'Admin',
          },
        ]
      : [
          {
            title: 'Subscription Overview',
            desc: 'Clear overview of recurring subscriptions and fixed monthly charges in one place.',
            icon: CreditCard,
            tag: 'Core Feature',
          },
          {
            title: 'Open Banking Architecture',
            desc: 'Infrastructure for connecting banking data securely through licensed PSD2 providers.',
            icon: Lock,
            tag: 'Fintech API',
          },
          {
            title: 'Expense Categorization',
            desc: 'Automated parsing converting raw banking transaction text into structured categories.',
            icon: PieChart,
            tag: 'Data Pipeline',
          },
          {
            title: 'Savings Insights',
            desc: 'Helps users identify recurring costs where better market deals are available.',
            icon: TrendingDown,
            tag: 'Analytics',
          },
          {
            title: 'Better Offers Marketplace',
            desc: 'Dedicated discovery interface matching offers directly to existing subscriptions.',
            icon: Sparkles,
            tag: 'Marketplace',
          },
          {
            title: 'Partner Marketplace',
            desc: 'Partner integration rails across insurance, electricity, and telecom providers.',
            icon: Building,
            tag: 'Partner API',
          },
          {
            title: 'Personal Finance Dashboard',
            desc: 'Visual breakdown of monthly cashflow commitments in a clean UI.',
            icon: Sliders,
            tag: 'UX/UI',
          },
          {
            title: 'Mobile Application',
            desc: 'Mobile-first iOS and Android experience for tracking recurring expenses anytime.',
            icon: Smartphone,
            tag: 'Mobile',
          },
          {
            title: 'Web Platform',
            desc: 'Full desktop dashboard for deep review, document tracking, and settings.',
            icon: Globe,
            tag: 'Web',
          },
          {
            title: 'Administration Platform',
            desc: 'Management suite for partner offers, categories, and operational oversight.',
            icon: Layers,
            tag: 'Admin',
          },
        ];

  return (
    <div className={`min-h-screen flex flex-col font-sans overflow-x-hidden transition-colors duration-300 ${surfaceCanvas}`}>
      {/* Sticky Top Menu */}
      <div
        className={`sticky top-0 z-50 w-full backdrop-blur-xl border-b ${
          isLight ? 'bg-[#fafaf9]/95 border-[#e7e7e5]' : 'bg-[#040816]/90 border-white/10'
        }`}
      >
        <Navbar
          activeTab="projects"
          onSelectTab={onNavigateToTab}
          onSelectServiceSlug={onNavigateToService}
          onGetStarted={onStartProject}
        />
      </div>

      {/* HERO SECTION */}
      <section className="py-10 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1440px] mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a
              href="/prosjekter"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToTab('projects-page');
              }}
              className={`inline-flex items-center gap-2 text-xs font-semibold transition-colors ${
                isLight ? 'text-neutral-600 hover:text-neutral-900' : 'text-slate-400 hover:text-white'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{language === 'no' ? 'Tilbake til prosjekter' : 'Back to projects'}</span>
            </a>

            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${pillClass}`}>
                {t.swalletStudy.caseStudyTag}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${pillClass}`}>
                PSD2 · Open Banking
              </span>
            </div>
          </div>

          <div className="max-w-4xl space-y-4">
            <span className={`text-xs font-semibold tracking-[0.2em] uppercase block ${eyebrowText}`}>
              {language === 'no' ? 'CASESTUDIE · FINTECH & ØKONOMI' : 'CASE STUDY · FINTECH ECOSYSTEM'}
            </span>
            <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] ${headingText}`}>
              {t.swalletStudy.title}
            </h1>
            <p className={`text-base sm:text-xl leading-relaxed max-w-3xl ${mutedText}`}>
              {t.swalletStudy.subtitle}
            </p>
          </div>

          {/* 4-Column Responsive Metadata Bar */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl ${cardSurface}`}>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {t.projects.industryLabel}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>{t.swalletStudy.industry}</div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {t.swalletStudy.servicesLabel}
              </div>
              <div className={`text-sm font-medium ${mutedText}`}>{t.swalletStudy.servicesValue}</div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {t.projects.clientLabel}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>{t.swalletStudy.developedBy}</div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {t.projects.platformLabel}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>{t.swalletStudy.platform}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE IMAGE */}
      <section className={`py-10 sm:py-14 px-4 sm:px-8 lg:px-12 xl:px-16 ${bandAlt}`}>
        <div className="max-w-[1440px] mx-auto">
          <div
            className={`rounded-2xl sm:rounded-3xl overflow-hidden border ${
              isLight
                ? 'bg-neutral-950 border-neutral-200 shadow-lg'
                : 'bg-[#040816] border-white/15 shadow-2xl'
            }`}
          >
            <img
              src="/assets/aistudio/Swallet_Fintech_Case_Study_Showcase_302711d7.webp"
              alt="Swallet Fintech Case Study Showcase"
              width={1200}
              height={675}
              decoding="async"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW + CHALLENGE/SOLUTION */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1440px] mx-auto space-y-10">
          <div className={`p-6 sm:p-10 rounded-3xl ${cardSurface} space-y-5`}>
            <span className={`text-xs font-semibold uppercase tracking-widest block ${eyebrowText}`}>
              {t.swalletStudy.overviewHeading}
            </span>
            <h2 className={`text-2xl sm:text-3xl font-display font-extrabold ${headingText}`}>
              {language === 'no'
                ? 'Full kontroll på abonnementer og faste utgifter'
                : 'Complete Control Over Subscriptions & Fixed Expenses'}
            </h2>
            <div className={`text-base sm:text-lg leading-relaxed space-y-4 ${mutedText}`}>
              <p>{t.swalletStudy.overviewP1}</p>
              <p>{t.swalletStudy.overviewP2}</p>
              <p>{t.swalletStudy.overviewP3}</p>
            </div>
            <div className={`p-4 sm:p-5 rounded-2xl text-center text-sm sm:text-base font-bold ${highlightBox}`}>
              {language === 'no'
                ? 'Se hva du betaler → Forstå utgifter → Finn alternativer → Spar penger'
                : 'See what you pay → Understand your expenses → Discover alternatives → Save money'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 sm:p-8 rounded-3xl ${cardSurface} space-y-4`}>
              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center ${
                  isLight
                    ? 'bg-neutral-100 border-neutral-200 text-neutral-900'
                    : 'bg-white/[0.05] border-white/15 text-cyan-300'
                }`}
              >
                <Sliders className="w-5 h-5" />
              </div>
              <span className={`text-xs font-semibold uppercase tracking-widest block ${eyebrowText}`}>
                {t.swalletStudy.challengeHeading}
              </span>
              <h3 className={`text-xl sm:text-2xl font-display font-bold ${headingText}`}>
                {language === 'no'
                  ? 'Fragmenterte banktransaksjoner og skjulte kostnader'
                  : 'Fragmented Bank Transactions & Compounding Costs'}
              </h3>
              <p className={`text-sm leading-relaxed ${mutedText}`}>{t.swalletStudy.challengeP1}</p>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                {t.swalletStudy.challengeP2} {t.swalletStudy.challengeP3}
              </p>
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl ${cardSurface} space-y-4`}>
              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center ${
                  isLight
                    ? 'bg-neutral-900 border-neutral-900 text-white'
                    : 'bg-cyan-950/70 border-cyan-400/40 text-cyan-300'
                }`}
              >
                <Zap className="w-5 h-5" />
              </div>
              <span className={`text-xs font-semibold uppercase tracking-widest block ${eyebrowText}`}>
                {t.swalletStudy.solutionHeading}
              </span>
              <h3 className={`text-xl sm:text-2xl font-display font-bold ${headingText}`}>
                {language === 'no'
                  ? 'Intuitivt finansdashbord og relevant markedsplass'
                  : 'Intuitive Financial Dashboard & Curated Marketplace'}
              </h3>
              <p className={`text-sm leading-relaxed ${mutedText}`}>{t.swalletStudy.solutionP1}</p>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                {t.swalletStudy.solutionP2} {t.swalletStudy.solutionP3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN BANKING & SAVINGS PIPELINE */}
      <section className={`py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 ${bandAlt}`}>
        <div className="max-w-[1440px] mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 sm:p-8 rounded-3xl ${cardSurface} space-y-4`}>
              <span className={`text-xs font-semibold uppercase tracking-widest block ${eyebrowText}`}>
                {t.swalletStudy.subscriptionHeading}
              </span>
              <h3 className={`text-xl sm:text-2xl font-display font-bold ${headingText}`}>
                {language === 'no'
                  ? 'Dine faste utgifter — automatisk organisert'
                  : 'Your recurring expenses — automatically organized'}
              </h3>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                {t.swalletStudy.subscriptionP1} {t.swalletStudy.subscriptionP2}
              </p>
              <p className={`text-sm leading-relaxed ${mutedText}`}>{t.swalletStudy.subscriptionP3}</p>
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl ${cardSurface} space-y-4`}>
              <span className={`text-xs font-semibold uppercase tracking-widest block ${eyebrowText}`}>
                {t.swalletStudy.openBankingHeading}
              </span>
              <h3 className={`text-xl sm:text-2xl font-display font-bold ${headingText}`}>
                PSD2 / Open Banking {language === 'no' ? 'Sikkerhet' : 'Security & Architecture'}
              </h3>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                {t.swalletStudy.openBankingP1} {t.swalletStudy.openBankingP2}
              </p>
              <p className={`text-sm leading-relaxed ${mutedText}`}>{t.swalletStudy.openBankingP3}</p>
            </div>
          </div>

          <div className={`p-6 sm:p-10 rounded-3xl ${cardSurface} space-y-6`}>
            <div className="max-w-2xl space-y-2">
              <span className={`text-xs font-semibold uppercase tracking-widest block ${eyebrowText}`}>
                {t.swalletStudy.marketplaceHeading}
              </span>
              <h2 className={`text-2xl sm:text-3xl font-display font-bold ${headingText}`}>
                {t.swalletStudy.savingsPipelineTitle}
              </h2>
              <p className={`text-sm ${mutedText}`}>{t.swalletStudy.savingsPipelineSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {savingsPipeline.map((step, idx) => (
                <div key={idx} className={`p-4 rounded-2xl border ${highlightBox} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${eyebrowText}`}>
                      {language === 'no' ? `Steg 0${idx + 1}` : `Phase 0${idx + 1}`}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${pillClass}`}>
                      {step.badge}
                    </span>
                  </div>
                  <h4 className={`text-sm font-bold ${headingText}`}>{step.title}</h4>
                  <p className={`text-xs leading-snug ${mutedText}`}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES & TECH STACK */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1440px] mx-auto space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className={`text-xs font-semibold uppercase tracking-widest block ${eyebrowText}`}>
              {language === 'no' ? 'LEVERANSER' : 'KEY DELIVERABLES'}
            </span>
            <h2 className={`text-2xl sm:text-3xl font-display font-bold ${headingText}`}>
              {t.swalletStudy.whatWeBuiltHeading}
            </h2>
            <p className={`text-sm sm:text-base ${mutedText}`}>
              {language === 'no'
                ? 'En helhetlig fintech-arkitektur fra bankintegrasjon og mobilapplikasjon til partnerdashbord.'
                : 'End-to-end fintech architecture from core banking synchronization to mobile apps and admin panels.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeBuiltList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`p-6 rounded-2xl ${cardSurface} space-y-3`}>
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
                        isLight
                          ? 'bg-neutral-900 border-neutral-900 text-white'
                          : 'bg-cyan-950/70 border-cyan-400/40 text-cyan-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${pillClass}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className={`text-base font-display font-bold ${headingText}`}>{item.title}</h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${mutedText}`}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM NAVIGATION & CTA */}
      <section className={`py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 ${bandAlt}`}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            type="button"
            onClick={() => onNavigateToProject('hentli')}
            className={`p-6 sm:p-7 rounded-3xl ${cardSurface} text-left flex items-center justify-between gap-4 cursor-pointer group hover:-translate-y-0.5 transition-all`}
          >
            <div>
              <span className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'NESTE CASE STUDY' : 'NEXT CASE STUDY'}
              </span>
              <div className={`text-xl font-display font-bold ${headingText}`}>Hentli</div>
              <p className={`text-xs sm:text-sm mt-1 ${mutedText}`}>
                {language === 'no'
                  ? 'Kartbasert leveringsapp med kunde- og sjåførflyt i én app'
                  : 'Map-based delivery app with dual customer and driver experiences'}
              </p>
            </div>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                isLight
                  ? 'bg-neutral-100 border-neutral-200 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white'
                  : 'bg-cyan-950/60 border-cyan-400/40 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-slate-950'
              }`}
            >
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>

          <div className={`p-6 sm:p-7 rounded-3xl ${cardSurface} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}>
            <div>
              <h3 className={`text-lg font-display font-bold ${headingText}`}>
                {language === 'no' ? 'Bygg din neste plattform med Geton' : 'Engineer Your Next Platform'}
              </h3>
              <p className={`text-xs sm:text-sm mt-1 ${mutedText}`}>
                {language === 'no' ? 'Ta en uforpliktende prat med teamet vårt' : 'Schedule an architecture chat with Geton'}
              </p>
            </div>
            <button
              type="button"
              onClick={onStartProject}
              className="px-6 py-3 rounded-full text-sm font-semibold text-white btn-cyan-gradient shrink-0 cursor-pointer inline-flex items-center gap-2"
            >
              <span>{t.nav.getStarted}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer onSelectTab={onNavigateToTab} onGetStarted={onStartProject} />
    </div>
  );
};
