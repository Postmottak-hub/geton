import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
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
  CheckCircle2,
  Share2,
  ExternalLink,
  Tag,
  Eye,
  Check,
} from 'lucide-react';
import { GetonLogo } from '../components/Logo.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { LanguageSwitcher } from '../components/LanguageSwitcher.tsx';

interface SwalletCaseStudyPageProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
  onStartProject: () => void;
}

export const SwalletCaseStudyPage: React.FC<SwalletCaseStudyPageProps> = ({
  onBack,
  onNavigateToProject,
  onStartProject,
}) => {
  const { t, language } = useLanguage();
  const [activeSavingsStep, setActiveSavingsStep] = useState(0);

  // Always scroll to top when page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const savingsPipeline = language === 'no' ? [
    { title: 'Utgift oppdaget', desc: 'Automatisk gjenkjenning av gjentakende banktransaksjoner', badge: 'PSD2 Sync' },
    { title: 'Forstå reell kostnad', desc: 'Kartlegging av månedlig og årlig kostnadsbilde', badge: 'Innsikt' },
    { title: 'Bedre alternativer', desc: 'Systemet matcher med bedre avtaler i markedet', badge: 'Markedsplass' },
    { title: 'Sammenlign vilkår', desc: 'Oversiktlig sammenligning av vilkår og reell besparelse', badge: 'Sammenlign' },
    { title: 'Dokumentert besparelse', desc: 'Bytte av leverandør med estimert besparelse på 4 320 kr/år', badge: 'Gevinst' },
  ] : [
    { title: 'Expense Detected', desc: 'Automatic detection of recurring banking transaction feeds', badge: 'PSD2 Sync' },
    { title: 'Current Cost Mapped', desc: 'Comprehensive mapping of monthly and annualized liabilities', badge: 'Insights' },
    { title: 'Alternatives Available', desc: 'Algorithmic matching against competitive market deals', badge: 'Marketplace' },
    { title: 'User Compares', desc: 'Transparent comparison of terms and verified savings delta', badge: 'Compare' },
    { title: 'Secured Savings', desc: 'Seamless provider switch with estimated savings of $420/yr', badge: 'Payoff' },
  ];

  const whatWeBuiltList = language === 'no' ? [
    {
      title: 'Abonnementsoversikt',
      desc: 'En helhetlig oversikt over alle faste trekk, strømmetjenester og medlemskap på ett sted.',
      icon: CreditCard,
      tag: 'Kjernefunksjon',
    },
    {
      title: 'Open Banking arkitektur',
      desc: 'Sikker infrastruktur for tilkobling til finansielle data via lisensierte PSD2-leverandører.',
      icon: Lock,
      tag: 'Fintech API',
    },
    {
      title: 'Utgiftskategorisering',
      desc: 'Maskinlæringsassisterte algoritmer som forvandler rå transaksjonstekst til gjenkjennbare utgiftskategorier.',
      icon: PieChart,
      tag: 'AI & Data',
    },
    {
      title: 'Spareinnsikt',
      desc: 'Hjelper forbrukere med å oppdage utgifter der bedre avtaler eller partnerfordeler er tilgjengelige.',
      icon: TrendingDown,
      tag: 'Algoritme',
    },
    {
      title: '«Få bedre tilbud»',
      desc: 'En integrert markedsplassopplevelse for å oppdage relevante tilbud basert på faktiske husholdningsutgifter.',
      icon: Sparkles,
      tag: 'Markedsplass',
    },
    {
      title: 'Partnermarkedsplass',
      desc: 'Infrastruktur som kobler forbrukere sammen med ledende forsikringsselskaper, strømleverandører og telecom.',
      icon: Building,
      tag: 'Partner API',
    },
    {
      title: 'Privatøkonomisk dashbord',
      desc: 'Månedlige utgifter, kategoriske diagrammer og finansiell utvikling visualisert i et intuitivt grensesnitt.',
      icon: Sliders,
      tag: 'UX/UI',
    },
    {
      title: 'Mobilapplikasjon',
      desc: 'En mobil-først iOS- og Android-opplevelse for overvåking av utgifter og mottak av sparetilbud på farten.',
      icon: Smartphone,
      tag: 'Cross-Platform',
    },
    {
      title: 'Webplattform',
      desc: 'Et fullskala skrivebordsdashbord for dypere finansiell analyse, avtalearkiv og kontoadministrasjon.',
      icon: Globe,
      tag: 'Next.js Web',
    },
    {
      title: 'Administrasjonsplattform',
      desc: 'Omfattende verktøy for styring av brukere, verifiserte partnertilbud, kategorier og analyse.',
      icon: Layers,
      tag: 'Enterprise Admin',
    },
  ] : [
    {
      title: 'Subscription Overview',
      desc: 'A simple overview of recurring subscriptions and fixed expenses in one single place.',
      icon: CreditCard,
      tag: 'Core Feature',
    },
    {
      title: 'Open Banking Architecture',
      desc: 'Infrastructure for connecting financial data securely through licensed PSD2/Open Banking providers.',
      icon: Lock,
      tag: 'Fintech API',
    },
    {
      title: 'Expense Categorization',
      desc: 'Machine-learning aided algorithms turning financial transaction descriptions into recognizable categories.',
      icon: PieChart,
      tag: 'AI & Data',
    },
    {
      title: 'Savings Insights',
      desc: 'Helping users identify expenses where better alternatives, renegotiations or discounts exist.',
      icon: TrendingDown,
      tag: 'Algorithm',
    },
    {
      title: 'Better Offers Marketplace',
      desc: 'A dedicated marketplace experience for discovering relevant offers based on exact expense categories.',
      icon: Sparkles,
      tag: 'Marketplace',
    },
    {
      title: 'Partner Marketplace',
      desc: 'Infrastructure for connecting consumers with leading insurance companies, electricity providers and telcos.',
      icon: Building,
      tag: 'Partner API',
    },
    {
      title: 'Personal Finance Dashboard',
      desc: 'Monthly expenses, categorical donuts, and financial development presented in an intuitive interface.',
      icon: Sliders,
      tag: 'UX/UI',
    },
    {
      title: 'Mobile Application',
      desc: 'A mobile-first iOS and Android experience for monitoring expenses and discovering offers on the go.',
      icon: Smartphone,
      tag: 'Cross-Platform',
    },
    {
      title: 'Web Platform',
      desc: 'A broader desktop dashboard for deeper financial analysis, contract archiving and account management.',
      icon: Globe,
      tag: 'Next.js Web',
    },
    {
      title: 'Administration Platform',
      desc: 'Comprehensive tools for managing users, verified partner offers, categories, and platform analytics.',
      icon: Layers,
      tag: 'Enterprise Admin',
    },
  ];

  return (
    <div className="min-h-screen bg-[#060c1e] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* 
        ========================================================================
        STICKY CASE STUDY NAVIGATION HEADER
        ========================================================================
      */}
      <header className="sticky top-0 z-50 bg-[#060c1e]/90 backdrop-blur-xl border-b border-cyan-500/20 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{t.swalletStudy.backToProjects}</span>
          </button>

          {/* Breadcrumb */}
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-slate-600">/</span>
            <span>{t.nav.projects}</span>
            <span className="text-slate-600">/</span>
            <span className="text-purple-300 font-bold">Swallet Fintech</span>
          </div>
        </div>

        {/* Center Logo */}
        <div className="hidden sm:flex items-center gap-2">
          <GetonLogo size="default" />
        </div>

        {/* Right CTA & Language Switcher */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher size="sm" />
          <button
            onClick={onStartProject}
            className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-white btn-cyan-gradient shadow-sm hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            {t.nav.getStarted}
          </button>
        </div>
      </header>

      {/* 
        ========================================================================
        MAIN CASE STUDY PAGE CONTAINER
        ========================================================================
      */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        
        {/* HERO TITLE & INTRO */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/40 text-purple-300 text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>{t.swalletStudy.caseStudyTag}</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase">
              {language === 'no' ? 'OPEN BANKING & MARKEDSPLASS' : 'OPEN BANKING & MARKETPLACE'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
            {t.swalletStudy.title}
          </h1>

          <p className="text-xl sm:text-2xl text-purple-200/90 font-light max-w-3xl leading-snug">
            {t.swalletStudy.subtitle}
          </p>
        </div>

        {/* 
          HERO BANNER: High-Res Uploaded Graphic
        */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_0_60px_rgba(168,85,247,0.18)] bg-slate-950">
          <img
            src="/assets/aistudio/Swallet_Fintech_Case_Study_Showcase_302711d7.png"
            alt="Swallet Fintech Case Study Showcase"
            className="w-full h-auto object-cover max-h-[640px]"
          />
        </div>

        {/* 
          PROJECT METADATA 4-COLUMN BAR
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-purple-500/20 backdrop-blur-md">
          <div>
            <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider mb-1">
              {t.projects.industryLabel}
            </div>
            <div className="text-sm sm:text-base font-bold text-white">{t.swalletStudy.industry}</div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider mb-1">
              {t.swalletStudy.servicesLabel}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">
              {t.swalletStudy.servicesValue}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider mb-1">
              {t.projects.clientLabel}
            </div>
            <div className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span>{t.swalletStudy.developedBy}</span>
            </div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider mb-1">
              {t.projects.platformLabel}
            </div>
            <div className="text-sm sm:text-base font-bold text-white">{t.swalletStudy.platform}</div>
          </div>
        </div>

        {/* 
          SECTION 1: THE PROJECT
        */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0e1738] to-[#070e24] border border-purple-500/30 space-y-5">
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block">
            {t.swalletStudy.overviewHeading.toUpperCase()}
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            {language === 'no' ? 'Full kontroll på abonnementer og faste utgifter' : 'Complete Control Over Subscriptions & Fixed Expenses'}
          </h2>
          <div className="text-slate-300 text-base sm:text-lg leading-relaxed space-y-4">
            <p>{t.swalletStudy.overviewP1}</p>
            <p>{t.swalletStudy.overviewP2}</p>
            <p>{t.swalletStudy.overviewP3}</p>
          </div>

          {/* Simple Idea Banner */}
          <div className="p-5 rounded-2xl bg-purple-950/60 border border-purple-400/40 text-center">
            <div className="text-xs font-mono text-purple-300 uppercase tracking-wider mb-1">
              {language === 'no' ? 'Kjernen i konseptet' : 'The Core Concept'}
            </div>
            <div className="text-base sm:text-xl font-bold text-white">
              {language === 'no'
                ? 'Se hva du betaler → Forstå utgifter → Finn alternativer → Spar penger'
                : 'See what you pay → Understand your expenses → Discover alternatives → Save money'}
            </div>
          </div>
        </section>

        {/* 
          SECTION 2: THE CHALLENGE vs THE SOLUTION
        */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* The Challenge */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-rose-500/30 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-5">
                <Sliders className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest block mb-1">
                {t.swalletStudy.challengeHeading.toUpperCase()}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {language === 'no'
                  ? 'Fragmenterte banktransaksjoner og skjulte kostnader'
                  : 'Fragmented Bank Transactions & Compounding Costs'}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {t.swalletStudy.challengeP1}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {t.swalletStudy.challengeP2}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.swalletStudy.challengeP3}
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-rose-500/20 text-xs font-mono font-bold text-rose-300">
              {language === 'no'
                ? 'Forbrukere → Finansielle bankdata → Tjenesteleverandører'
                : 'Consumers → Financial Banking Data → Service Providers'}
            </div>
          </div>

          {/* The Solution */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-cyan-400/40 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                {t.swalletStudy.solutionHeading.toUpperCase()}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {language === 'no'
                  ? 'Intuitivt finansdashbord og relevant markedsplass'
                  : 'Intuitive Financial Dashboard & Curated Marketplace'}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {t.swalletStudy.solutionP1}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {t.swalletStudy.solutionP2}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.swalletStudy.solutionP3}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-cyan-400/20 text-xs font-mono font-bold text-cyan-300">
              {language === 'no'
                ? 'Abonnementer · Forsikring · Strøm · Telecom · Strømming · Digitale tjenester'
                : 'Subscriptions · Insurance · Electricity · Telecom · Streaming · Digital Services'}
            </div>
          </div>

        </section>

        {/* 
          SECTION 3: AUTOMATIC SUBSCRIPTIONS & OPEN BANKING
        */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#121438] to-[#0a0f2b] border border-purple-500/30">
            <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-2">
              {t.swalletStudy.subscriptionHeading.toUpperCase()}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {language === 'no' ? 'Dine faste utgifter — automatisk organisert' : 'Your recurring expenses — automatically organized.'}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {t.swalletStudy.subscriptionP1}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {t.swalletStudy.subscriptionP2}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.swalletStudy.subscriptionP3}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0c1c3f] to-[#07112b] border border-cyan-500/30">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
              {t.swalletStudy.openBankingHeading.toUpperCase()}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              PSD2 / Open Banking {language === 'no' ? 'Sikkerhet' : 'Compliance & Security'}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {t.swalletStudy.openBankingP1}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {t.swalletStudy.openBankingP2}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.swalletStudy.openBankingP3}
            </p>
          </div>

        </section>

        {/* 
          SECTION 4: FIND OPPORTUNITIES & THE SAVINGS PIPELINE
        */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-purple-500/30 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-2">
              {t.swalletStudy.marketplaceHeading.toUpperCase()}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              {t.swalletStudy.savingsPipelineTitle}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.swalletStudy.savingsPipelineSubtitle}
            </p>
          </div>

          {/* Interactive Pipeline Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
            {savingsPipeline.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-purple-400 font-bold">
                      {language === 'no' ? `STEG 0${idx + 1}` : `PHASE 0${idx + 1}`}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-900/60 text-purple-200">
                      {step.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-xs text-slate-400 leading-snug">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-900/40 via-cyan-900/40 to-purple-900/40 border border-purple-400/40 text-center">
            <span className="text-white font-bold text-sm sm:text-base">
              «{t.swalletStudy.marketplaceTagline}»
            </span>
          </div>
        </section>

        {/* 
          SECTION 5: WHAT WE BUILT (10 Pillars)
        */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-1">
              {language === 'no' ? 'LEVERANSER' : 'KEY DELIVERABLES'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              {t.swalletStudy.whatWeBuiltHeading}
            </h3>
            <p className="text-slate-400 text-sm">
              {language === 'no'
                ? 'En helhetlig fintech-arkitektur levert av Geton, fra bankintegrasjon og mobilapplikasjon til partnerdashbord.'
                : 'End-to-end fintech architecture engineered by Geton, from core banking synchronization to native mobile apps.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatWeBuiltList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-purple-500/20 hover:border-purple-400/50 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-400/30 flex items-center justify-center text-purple-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-400/30">
                        {item.tag}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-purple-300 font-mono">
                    <span>STATUS: {language === 'no' ? 'PRODUKSJONSKLAR' : 'PRODUCTION READY'}</span>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 
          SECTION 6: TECHNOLOGY & BUSINESS MODEL
        */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0c183a] to-[#070f27] border border-cyan-400/30 space-y-4">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">
              {t.swalletStudy.techStackHeading.toUpperCase()}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {language === 'no' ? 'Modulær fintech-arkitektur' : 'Modular Fintech Architecture'}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.swalletStudy.techStackDesc}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.swalletStudy.architectureP1}
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
              {['PSD2 / Open Banking', 'React 19', 'Next.js', 'React Native', 'Node.js', 'TypeScript', 'DNB API', 'BankID Auth', 'PostgreSQL', 'Redis'].map((tech, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-950/70 text-cyan-300 border border-cyan-400/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1a1236] to-[#0a0c24] border border-purple-400/30 space-y-4">
            <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block">
              {language === 'no' ? 'FORRETNINGSMODELL & VERDISKAPING' : 'BUSINESS MODEL & VALUE CREATION'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {language === 'no'
                ? 'Brukervennlig gratisopplevelse med partnerinntekter'
                : 'Zero-Cost Consumer Utility with Partner Monetization'}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.swalletStudy.marketplaceP1}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.swalletStudy.marketplaceP2}
            </p>
            <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-400/30 text-purple-200 text-xs font-semibold">
              «{t.swalletStudy.marketplaceTagline}»
            </div>
          </div>

        </section>

        {/* 
          SECTION 7: THE RESULT
        */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-cyan-900/40 border border-purple-400/50 space-y-4">
          <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest block">
            {t.swalletStudy.businessImpactHeading.toUpperCase()}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
            {language === 'no'
              ? 'Forstå utgiftene dine. Finn bedre tilbud. Behold mer av egne penger.'
              : 'Understand your expenses. Discover better offers. Keep more of your money.'}
          </h2>
          <div className="p-4 rounded-xl bg-black/40 border border-purple-400/30 font-mono text-purple-200 text-xs sm:text-sm">
            Connect → Discover → Understand → Compare → Save
          </div>
          <p className="text-slate-200 text-base leading-relaxed">
            {language === 'no'
              ? 'Swallet forvandler uoversiktlige faste trekk til en klar, verdifull økonomisk opplevelse. For Geton viser Swallet vår ekspertise i skjæringspunktet mellom fintech, Open Banking, mobilapper, markedsplasser og sikre API-integrasjoner.'
              : 'Swallet transforms fragmented recurring expenses into one understandable financial cockpit. For Geton, Swallet proves our architectural expertise across fintech, Open Banking, cross-platform apps, and enterprise partner integrations.'}
          </p>
        </section>

        {/* 
          NAVIGATION TO OTHER CASE STUDIES (Frakt360) & CTA
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          
          {/* Next Case Study: Frakt360 */}
          <div
            onClick={() => onNavigateToProject('frakt360')}
            className="p-6 rounded-3xl bg-gradient-to-br from-[#0c183a] to-[#070e24] border border-cyan-400/30 hover:border-cyan-300 hover:scale-[1.01] transition-all cursor-pointer group flex items-center justify-between"
          >
            <div>
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                {language === 'no' ? 'NESTE CASE STUDY' : 'NEXT CASE STUDY'}
              </span>
              <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                Frakt360
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {language === 'no'
                  ? 'Komplett digital logistikkplattform for norske bedrifter'
                  : 'Complete digital logistics platform for modern enterprises'}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          {/* Initiate Sprint CTA */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-900/60 to-cyan-900/60 border border-purple-400/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-white">
                {language === 'no' ? 'Bygg din neste fintech-plattform' : 'Engineer Your Next Fintech Platform'}
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                {language === 'no' ? 'Ta en uforpliktende prat med Geton' : 'Schedule an architecture consultation with Geton'}
              </p>
            </div>
            <button
              onClick={onStartProject}
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white btn-cyan-gradient shadow-md cursor-pointer hover:scale-105 transition-transform shrink-0"
            >
              {t.nav.getStarted}
            </button>
          </div>

        </div>

      </main>

      {/* Global Footer */}
      <Footer
        onSelectTab={(tab) => {
          onBack();
          setTimeout(() => {
            const el = document.getElementById(tab);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        onGetStarted={onStartProject}
      />
    </div>
  );
};
