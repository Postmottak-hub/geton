import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Package,
  Truck,
  ShoppingBag,
  Printer,
  Compass,
  RotateCcw,
  Warehouse,
  Receipt,
  Users,
  Smartphone,
  CheckCircle2,
  Sliders,
  Check,
  Sparkles,
  BarChart3,
  Zap,
} from 'lucide-react';
import { GetonLogo } from '../components/Logo.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { LanguageSwitcher } from '../components/LanguageSwitcher.tsx';

interface Frakt360CaseStudyPageProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
  onStartProject: () => void;
}

export const Frakt360CaseStudyPage: React.FC<Frakt360CaseStudyPageProps> = ({
  onBack,
  onNavigateToProject,
  onStartProject,
}) => {
  const { t, language } = useLanguage();
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  // Always scroll to top when opening page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Step ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWorkflowStep((prev) => (prev + 1) % 8);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const workflowSteps = language === 'no'
    ? [
        { title: 'Ordre', desc: 'Ordre opprettes i nettbutikk (Shopify, WooCommerce, Mystore)', icon: ShoppingBag },
        { title: 'Fraktvalg', desc: 'Beregner automatisk beste fraktvalg og priser', icon: Compass },
        { title: 'Booking', desc: 'Direkte booking via PostNord og Bring API', icon: Truck },
        { title: 'Etikett', desc: 'Automatisk generering av fraktetiketter for Zebra-skrivere', icon: Printer },
        { title: 'Forsendelse', desc: 'Pakken klargjøres på lager (Ongoing WMS integrasjon)', icon: Package },
        { title: 'Sporing', desc: 'Sanntids sporing og push-oppdateringer til kunde', icon: BarChart3 },
        { title: 'Levering', desc: 'Sikker overlevering til mottaker eller pakkeautomat', icon: CheckCircle2 },
        { title: 'Faktura', desc: 'Automatisk fraktavstemming og fakturagrunnlag', icon: Receipt },
      ]
    : [
        { title: 'Order', desc: 'Order created in store (Shopify, WooCommerce, Mystore)', icon: ShoppingBag },
        { title: 'Freight Option', desc: 'Automated live carrier rate comparison', icon: Compass },
        { title: 'Booking', desc: 'Direct booking via PostNord & Bring APIs', icon: Truck },
        { title: 'Label', desc: 'Instant Zebra thermal shipping label generation', icon: Printer },
        { title: 'Shipment', desc: 'Warehouse fulfillment & packing (Ongoing WMS sync)', icon: Package },
        { title: 'Tracking', desc: 'Real-time telemetry and recipient tracking updates', icon: BarChart3 },
        { title: 'Delivery', desc: 'Secure delivery to doorstep or parcel locker', icon: CheckCircle2 },
        { title: 'Invoice', desc: 'Automated carrier reconciliation & billing audit', icon: Receipt },
      ];

  const whatWeBuiltList = language === 'no'
    ? [
        {
          title: 'Fraktplattform',
          desc: 'Opprett, bestill og administrer forsendelser fra ett sentralt dashbord med automatisk prisberegning.',
          icon: Package,
          badge: 'Kjernemotor',
        },
        {
          title: 'E-handelsintegrasjoner',
          desc: 'Koble Shopify, WooCommerce og Mystore sømløst til logistikkflyten uten manuelt punch-arbeid.',
          icon: ShoppingBag,
          badge: 'E-Commerce',
        },
        {
          title: 'Transportør-API-er',
          desc: 'Direkte integrasjon mot transportørinfrastruktur, inkludert markedslederne PostNord og Bring.',
          icon: Truck,
          badge: 'Transport-API',
        },
        {
          title: 'Fraktetiketter & Zebra',
          desc: 'Automatisk generering av godkjente fraktetiketter med støtte for industrielle Zebra-termoskrivere.',
          icon: Printer,
          badge: 'Maskinvaresync',
        },
        {
          title: 'Sanntidssporing',
          desc: 'Følg forsendelser kronologisk: Opprettet → Under transport → Terminal → Ute for levering → Levert.',
          icon: Compass,
          badge: 'Sanntidstelemetri',
        },
        {
          title: 'Returhåndtering',
          desc: 'Digitale returflyter med støtte for kunders QR-baserte returkoder uten behov for egen skriver.',
          icon: RotateCcw,
          badge: 'Returlogistikk',
        },
        {
          title: 'Lager- & WMS-kobling',
          desc: 'Integrasjonsarkitektur for automatiserte lagre, inkludert toveis synk mot Ongoing WMS.',
          icon: Warehouse,
          badge: 'WMS Bro',
        },
        {
          title: 'Kunde- & administrasjonsportal',
          desc: 'Skalerbar flerbrukerfunksjonalitet for lageransatte, bedriftsledere og administratorer.',
          icon: Users,
          badge: 'Multi-Tenant',
        },
        {
          title: 'Fakturering & avstemming',
          desc: 'Automatisk kontroll av estimerte fraktpriser mot faktiske transportørfakturaer.',
          icon: Receipt,
          badge: 'Finans',
        },
        {
          title: 'Mobilapp for lagergulvet',
          desc: 'Responsiv web- og mobilapp for enkel skanning, opprettelse og statuskontroll på farten.',
          icon: Smartphone,
          badge: 'Mobil & Nettbrett',
        },
      ]
    : [
        {
          title: 'Shipping platform',
          desc: 'Create, book and manage shipments from one interface with multi-carrier rate calculation.',
          icon: Package,
          badge: 'Core Engine',
        },
        {
          title: 'E-commerce integrations',
          desc: 'Connect Shopify, WooCommerce and Mystore with the logistics workflow for zero manual work.',
          icon: ShoppingBag,
          badge: 'E-Commerce',
        },
        {
          title: 'Carrier APIs',
          desc: 'Direct integration with carrier infrastructure including PostNord and Bring.',
          icon: Truck,
          badge: 'Logistics API',
        },
        {
          title: 'Shipping labels',
          desc: 'Automatic label generation with support for industrial Zebra thermal label printers.',
          icon: Printer,
          badge: 'Hardware Sync',
        },
        {
          title: 'Real-time tracking',
          desc: 'Follow shipments throughout: Created → In transit → Terminal → Out for delivery → Delivered.',
          icon: Compass,
          badge: 'Live Telemetry',
        },
        {
          title: 'Returns workflow',
          desc: 'Digital return workflows with support for customer QR-based return codes.',
          icon: RotateCcw,
          badge: 'Reverse Logistics',
        },
        {
          title: 'Warehouse connectivity',
          desc: 'Integration architecture for automated warehouse management such as Ongoing WMS.',
          icon: Warehouse,
          badge: 'WMS Bridge',
        },
        {
          title: 'Customer & admin portals',
          desc: 'Separate functionality for customers, account administrators and platform administrators.',
          icon: Users,
          badge: 'Multi-Tenant',
        },
        {
          title: 'Freight invoicing',
          desc: 'Processing of carrier costs and preparation of customer billing and reconciliation data.',
          icon: Receipt,
          badge: 'FinTech',
        },
        {
          title: 'Mobile experience',
          desc: 'Mobile application for accessing important logistics and tracking operations away from desktop.',
          icon: Smartphone,
          badge: 'Cross-Platform',
        },
      ];

  return (
    <div className="min-h-screen bg-[#050b1d] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* 
        ========================================================================
        STICKY CASE STUDY NAVIGATION HEADER
        ========================================================================
      */}
      <header className="sticky top-0 z-50 bg-[#050b1d]/90 backdrop-blur-xl border-b border-cyan-500/20 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{t.frakt360Study.backToProjects}</span>
          </button>

          {/* Breadcrumb */}
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-slate-600">/</span>
            <span>{t.nav.projects}</span>
            <span className="text-slate-600">/</span>
            <span className="text-cyan-300 font-bold">Frakt360</span>
          </div>
        </div>

        {/* Center Logo */}
        <div className="hidden sm:flex items-center gap-2">
          <GetonLogo size="default" />
        </div>

        {/* Right CTA and Flag Switcher */}
        <div className="flex items-center gap-2.5 sm:gap-3">
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.frakt360Study.caseStudyTag}</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-400/40 text-blue-300 text-xs font-mono font-bold">
              {t.frakt360Study.industry}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
            {t.frakt360Study.title}
          </h1>

          <p className="text-xl sm:text-2xl text-cyan-200/90 font-light max-w-3xl leading-snug">
            {t.frakt360Study.subtitle}
          </p>
        </div>

        {/* HERO BANNER: High-Res Uploaded Graphic */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.2)] bg-slate-950">
          <img
            src="/assets/aistudio/Frakt360__Komplett_norsk_fraktplattform_6546bb91.png"
            alt="Frakt360 Komplett Norsk Fraktplattform"
            className="w-full h-auto object-cover max-h-[640px]"
          />
        </div>

        {/* PROJECT METADATA 4-COLUMN BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-cyan-500/20 backdrop-blur-md">
          <div>
            <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">{language === 'no' ? 'Bransje' : 'Industry'}</div>
            <div className="text-sm sm:text-base font-bold text-white">{t.frakt360Study.industry}</div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">{t.frakt360Study.servicesLabel}</div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">
              {t.frakt360Study.servicesValue}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">{language === 'no' ? 'Utviklet av' : 'Developed by'}</div>
            <div className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{t.frakt360Study.developedBy}</span>
            </div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">{language === 'no' ? 'Plattform' : 'Platform'}</div>
            <div className="text-sm sm:text-base font-bold text-white">{t.frakt360Study.platform}</div>
          </div>
        </div>

        {/* SECTION 1: THE PROJECT */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0a1738] to-[#060e24] border border-cyan-500/30 space-y-5">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">
            {t.frakt360Study.overviewHeading.toUpperCase()}
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            {t.frakt360Study.title} — {t.frakt360Study.subtitle}
          </h2>
          <div className="text-slate-300 text-base sm:text-lg leading-relaxed space-y-4">
            <p>{t.frakt360Study.overviewP1}</p>
            <p>{t.frakt360Study.overviewP2}</p>
            <p>{t.frakt360Study.overviewP3}</p>
            <p>{t.frakt360Study.overviewP4}</p>
          </div>

          <div className="p-5 rounded-2xl bg-cyan-950/60 border border-cyan-400/40 text-center">
            <span className="text-cyan-300 font-bold text-sm sm:text-base">
              «{t.frakt360Study.storeTagline}»
            </span>
          </div>
        </section>

        {/* SECTION 2: THE CHALLENGE vs THE SOLUTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-rose-500/30 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-5">
                <Sliders className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest block mb-1">
                {t.frakt360Study.challengeHeading.toUpperCase()}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {t.frakt360Study.challengeP1}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {t.frakt360Study.challengeP2}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.frakt360Study.challengeP3} {t.frakt360Study.challengeP4}
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.02] border border-cyan-400/40 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                {t.frakt360Study.solutionHeading.toUpperCase()}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {t.frakt360Study.solutionP1}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {t.frakt360Study.solutionP2}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.frakt360Study.solutionP3} {t.frakt360Study.solutionP4}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: WORKFLOW PIPELINE */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-cyan-500/30 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
              {language === 'no' ? 'FRAKTFLYTEN' : 'THE WORKFLOW'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              {t.frakt360Study.workflowTitle}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.frakt360Study.workflowSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeWorkflowStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-b from-blue-900/90 to-cyan-950/90 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-[1.02]'
                      : 'bg-white/[0.03] border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold">{language === 'no' ? 'STEG' : 'STEP'} 0{idx + 1}</span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-xs text-slate-300 leading-snug">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: INTEGRATIONS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0c183a] to-[#070f27] border border-cyan-400/30 space-y-4">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">
              {t.frakt360Study.storeHeading.toUpperCase()}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Shopify, WooCommerce & Mystore
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.frakt360Study.storeP1} {t.frakt360Study.storeP2} {t.frakt360Study.storeP3}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.frakt360Study.storeP4}
            </p>
            <div className="p-3 rounded-xl bg-cyan-950/70 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
              «{t.frakt360Study.storeTagline}»
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0a1532] to-[#070d20] border border-blue-400/30 space-y-4">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
              {t.frakt360Study.carrierHeading.toUpperCase()}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              PostNord, Bring, Ongoing WMS & Zebra
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.frakt360Study.carrierP1} {t.frakt360Study.carrierP2}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.frakt360Study.labelP1} {t.frakt360Study.warehouseP1}
            </p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
              {['PostNord REST', 'Bring Shipping', 'Zebra ZPL Print', 'Ongoing WMS', 'QR Returns', 'Invoice Sync'].map((item, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-950/80 text-blue-300 border border-blue-400/30">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: WHAT WE BUILT (10 Pillars) */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
              {language === 'no' ? 'LEVERANSER' : 'DELIVERABLES'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              {t.frakt360Study.whatWeBuiltHeading}
            </h3>
            <p className="text-slate-400 text-sm">
              {language === 'no' 
                ? 'Komplett leveranse på tvers av produktdesign, frontend, backend, maskinvareintegrasjon og sanntids logistikk.' 
                : 'Full-spectrum delivery across product design, frontend, backend, hardware integrations and real-time logistics.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatWeBuiltList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-400/30">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-cyan-400 font-mono">
                    <span>STATUS: {language === 'no' ? 'I FULL DRIFT' : 'LIVE IN PRODUCTION'}</span>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 6: THE RESULT */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/40 via-cyan-900/40 to-blue-950/50 border border-cyan-400/50 space-y-4">
          <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest block">
            {t.frakt360Study.businessImpactHeading.toUpperCase()}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
            {language === 'no' ? 'Én plattform. Fra ordre til levering.' : 'One platform. From order to delivery.'}
          </h2>
          <div className="p-4 rounded-xl bg-black/40 border border-cyan-400/30 font-mono text-cyan-300 text-xs sm:text-sm">
            {t.frakt360Study.workflowTitle}
          </div>
          <p className="text-slate-200 text-base leading-relaxed">
            {language === 'no'
              ? 'Frakt360 samler de mest kritiske delene av bedriftslogistikk i én sammenkoblet plattform. For Geton demonstrerer prosjektet vår evne til å ta totalansvar for et komplekst digitalt produkt på tvers av produktdesign, frontend, backend, integrasjoner, mobilutvikling og fysisk logistikkinfrastruktur.'
              : 'Frakt360 brings the most important parts of business shipping into one connected platform. For Geton, the project demonstrates our ability to take responsibility for a complex digital product across product design, frontend, backend, integrations, mobile development and real-world logistics infrastructure.'}
          </p>
        </section>

        {/* NAVIGATION TO OTHER CASE STUDIES (Swallet) & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div
            onClick={() => onNavigateToProject('swallet')}
            className="p-6 rounded-3xl bg-gradient-to-br from-[#121238] to-[#0a0c24] border border-purple-400/30 hover:border-purple-300 hover:scale-[1.01] transition-all cursor-pointer group flex items-center justify-between"
          >
            <div>
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest block mb-1">
                {t.frakt360Study.nextCaseStudy}
              </span>
              <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                Swallet
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {t.frakt360Study.nextCaseStudySubtitle}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-950 border border-purple-400/40 flex items-center justify-center text-purple-300 group-hover:bg-purple-500 group-hover:text-slate-950 transition-colors shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-900/60 to-cyan-900/60 border border-cyan-400/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-white">{t.frakt360Study.ctaHeading}</h4>
              <p className="text-xs text-slate-300 mt-0.5">{t.frakt360Study.ctaDesc}</p>
            </div>
            <button
              onClick={onStartProject}
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white btn-cyan-gradient shadow-md cursor-pointer hover:scale-105 transition-transform shrink-0"
            >
              {t.frakt360Study.ctaButton}
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
