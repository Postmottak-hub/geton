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
  BarChart3,
  Zap,
} from 'lucide-react';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { ServiceSlug } from '../data/services.ts';

interface Frakt360CaseStudyPageProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
  onNavigateToTab: (tab: string) => void;
  onNavigateToService?: (slug: ServiceSlug) => void;
  onStartProject: () => void;
}

export const Frakt360CaseStudyPage: React.FC<Frakt360CaseStudyPageProps> = ({
  onNavigateToProject,
  onNavigateToTab,
  onNavigateToService,
  onStartProject,
}) => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWorkflowStep((prev) => (prev + 1) % 8);
    }, 2800);
    return () => clearInterval(timer);
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

  const workflowSteps =
    language === 'no'
      ? [
          { title: 'Ordre', desc: 'Ordre opprettes i nettbutikk (Shopify, WooCommerce, Mystore)', icon: ShoppingBag },
          { title: 'Fraktvalg', desc: 'Beregner automatisk beste fraktvalg og priser', icon: Compass },
          { title: 'Booking', desc: 'Direkte booking via PostNord og Bring API', icon: Truck },
          { title: 'Etikett', desc: 'Automatisk generering av fraktetiketter for Zebra-skrivere', icon: Printer },
          { title: 'Forsendelse', desc: 'Pakken klargjøres på lager (Ongoing WMS-integrasjon)', icon: Package },
          { title: 'Sporing', desc: 'Sanntids sporing og oppdateringer til kunde', icon: BarChart3 },
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

  const whatWeBuiltList =
    language === 'no'
      ? [
          {
            title: 'Fraktplattform',
            desc: 'Opprett, bestill og administrer forsendelser fra ett sentralt dashbord med automatisk prisberegning.',
            icon: Package,
            badge: 'Kjernemotor',
          },
          {
            title: 'E-handelsintegrasjoner',
            desc: 'Koble Shopify, WooCommerce og Mystore sømløst til logistikkflyten uten manuelt arbeid.',
            icon: ShoppingBag,
            badge: 'E-handel',
          },
          {
            title: 'Transportør-API-er',
            desc: 'Direkte integrasjon mot transportørinfrastruktur, inkludert PostNord og Bring.',
            icon: Truck,
            badge: 'Transport-API',
          },
          {
            title: 'Fraktetiketter & Zebra',
            desc: 'Automatisk generering av godkjente fraktetiketter med støtte for industrielle Zebra-skrivere.',
            icon: Printer,
            badge: 'Utskrift',
          },
          {
            title: 'Sanntidssporing',
            desc: 'Følg forsendelser kronologisk: Opprettet → Under transport → Terminal → Ute for levering → Levert.',
            icon: Compass,
            badge: 'Sporing',
          },
          {
            title: 'Returhåndtering',
            desc: 'Digitale returflyter med støtte for kunders QR-baserte returkoder uten egen skriver.',
            icon: RotateCcw,
            badge: 'Returlogistikk',
          },
          {
            title: 'Lager- & WMS-kobling',
            desc: 'Integrasjonsarkitektur for automatiserte lagre, inkludert toveis synk mot Ongoing WMS.',
            icon: Warehouse,
            badge: 'WMS-bro',
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
            badge: 'Mobil',
          },
        ]
      : [
          {
            title: 'Shipping Platform',
            desc: 'Create, book and manage shipments from one interface with multi-carrier rate comparison.',
            icon: Package,
            badge: 'Core Engine',
          },
          {
            title: 'E-commerce Integrations',
            desc: 'Connect Shopify, WooCommerce and Mystore directly into the logistics workflow.',
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
            title: 'Shipping Labels',
            desc: 'Automatic label generation with support for industrial Zebra thermal label printers.',
            icon: Printer,
            badge: 'Hardware Sync',
          },
          {
            title: 'Real-Time Tracking',
            desc: 'Follow shipments live: Created → In transit → Terminal → Out for delivery → Delivered.',
            icon: Compass,
            badge: 'Live Telemetry',
          },
          {
            title: 'Returns Workflow',
            desc: 'Digital return workflows with support for QR-based customer return codes.',
            icon: RotateCcw,
            badge: 'Reverse Logistics',
          },
          {
            title: 'Warehouse Connectivity',
            desc: 'Integration architecture for automated warehouses such as Ongoing WMS.',
            icon: Warehouse,
            badge: 'WMS Bridge',
          },
          {
            title: 'Customer & Admin Portals',
            desc: 'Separate workflows for customers, warehouse teams, and platform administrators.',
            icon: Users,
            badge: 'Multi-Tenant',
          },
          {
            title: 'Freight Invoicing',
            desc: 'Automated reconciliation of estimated freight costs against carrier invoices.',
            icon: Receipt,
            badge: 'Finance',
          },
          {
            title: 'Mobile Companion App',
            desc: 'Mobile tools for fast scanning, dispatch creation, and live tracking on the go.',
            icon: Smartphone,
            badge: 'Mobile',
          },
        ];

  return (
    <div className={`min-h-screen flex flex-col font-sans overflow-x-hidden transition-colors duration-300 ${surfaceCanvas}`}>
      {/* Persistent Top Menu */}
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
                {t.frakt360Study.caseStudyTag}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${pillClass}`}>
                {t.frakt360Study.industry}
              </span>
            </div>
          </div>

          <div className="max-w-4xl space-y-4">
            <span className={`text-xs font-semibold tracking-[0.2em] uppercase block ${eyebrowText}`}>
              {language === 'no' ? 'CASESTUDIE · LOGISTIKKPLATTFORM' : 'CASE STUDY · LOGISTICS PLATFORM'}
            </span>
            <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] ${headingText}`}>
              {t.frakt360Study.title}
            </h1>
            <p className={`text-base sm:text-xl leading-relaxed max-w-3xl ${mutedText}`}>
              {t.frakt360Study.subtitle}
            </p>
          </div>

          {/* 4-Column Responsive Metadata Bar */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl ${cardSurface}`}>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Bransje' : 'Industry'}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>{t.frakt360Study.industry}</div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {t.frakt360Study.servicesLabel}
              </div>
              <div className={`text-sm font-medium ${mutedText}`}>{t.frakt360Study.servicesValue}</div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Utviklet av' : 'Developed by'}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>{t.frakt360Study.developedBy}</div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Plattform' : 'Platform'}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>{t.frakt360Study.platform}</div>
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
              src="/assets/aistudio/Frakt360__Komplett_norsk_fraktplattform_6546bb91.webp"
              alt="Frakt360 Komplett Norsk Fraktplattform"
              width={1200}
              height={675}
              decoding="async"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW, CHALLENGE & SOLUTION */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1440px] mx-auto space-y-10">
          <div className={`p-6 sm:p-10 rounded-3xl ${cardSurface} space-y-5`}>
            <span className={`text-xs font-semibold uppercase tracking-widest block ${eyebrowText}`}>
              {t.frakt360Study.overviewHeading}
            </span>
            <h2 className={`text-2xl sm:text-3xl font-display font-extrabold ${headingText}`}>
              {t.frakt360Study.title} — {t.frakt360Study.subtitle}
            </h2>
            <div className={`text-base sm:text-lg leading-relaxed space-y-4 ${mutedText}`}>
              <p>{t.frakt360Study.overviewP1}</p>
              <p>{t.frakt360Study.overviewP2}</p>
              <p>{t.frakt360Study.overviewP3}</p>
              <p>{t.frakt360Study.overviewP4}</p>
            </div>
            <div className={`p-4 sm:p-5 rounded-2xl text-center text-sm sm:text-base font-bold ${highlightBox}`}>
              «{t.frakt360Study.storeTagline}»
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
                {t.frakt360Study.challengeHeading}
              </span>
              <h3 className={`text-xl sm:text-2xl font-display font-bold ${headingText}`}>
                {t.frakt360Study.challengeP1}
              </h3>
              <p className={`text-sm leading-relaxed ${mutedText}`}>{t.frakt360Study.challengeP2}</p>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                {t.frakt360Study.challengeP3} {t.frakt360Study.challengeP4}
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
                {t.frakt360Study.solutionHeading}
              </span>
              <h3 className={`text-xl sm:text-2xl font-display font-bold ${headingText}`}>
                {t.frakt360Study.solutionP1}
              </h3>
              <p className={`text-sm leading-relaxed ${mutedText}`}>{t.frakt360Study.solutionP2}</p>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                {t.frakt360Study.solutionP3} {t.frakt360Study.solutionP4}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE 8-STEP WORKFLOW & INTEGRATIONS */}
      <section className={`py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 ${bandAlt}`}>
        <div className="max-w-[1440px] mx-auto space-y-10">
          <div className={`p-6 sm:p-10 rounded-3xl ${cardSurface} space-y-6`}>
            <div className="max-w-2xl space-y-2">
              <span className={`text-xs font-semibold uppercase tracking-widest block ${eyebrowText}`}>
                {language === 'no' ? 'FRAKTFLYTEN' : 'THE WORKFLOW'}
              </span>
              <h2 className={`text-2xl sm:text-3xl font-display font-bold ${headingText}`}>
                {t.frakt360Study.workflowTitle}
              </h2>
              <p className={`text-sm leading-relaxed ${mutedText}`}>{t.frakt360Study.workflowSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {workflowSteps.map((step, idx) => {
                const Icon = step.icon;
                const isSelected = activeWorkflowStep === idx;
                return (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setActiveWorkflowStep(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? isLight
                          ? 'bg-neutral-900 border-neutral-900 text-white shadow-md'
                          : 'bg-cyan-950/80 border-cyan-400 text-white shadow-md'
                        : isLight
                        ? 'bg-[#fafaf9] border-neutral-200 text-neutral-900 hover:border-neutral-400'
                        : 'bg-white/[0.03] border-white/10 text-white hover:border-cyan-400/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider ${
                          isSelected
                            ? isLight
                              ? 'text-sky-300'
                              : 'text-cyan-300'
                            : eyebrowText
                        }`}
                      >
                        {language === 'no' ? `Steg 0${idx + 1}` : `Step 0${idx + 1}`}
                      </span>
                      <Icon
                        className={`w-4 h-4 ${
                          isSelected ? 'text-white' : isLight ? 'text-neutral-500' : 'text-slate-400'
                        }`}
                      />
                    </div>
                    <div className="text-sm font-bold mb-1">{step.title}</div>
                    <p
                      className={`text-xs leading-snug ${
                        isSelected
                          ? 'text-slate-200'
                          : isLight
                          ? 'text-neutral-600'
                          : 'text-slate-300'
                      }`}
                    >
                      {step.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* INTEGRATIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 sm:p-8 rounded-3xl ${cardSurface} space-y-4`}>
              <span className={`text-xs font-semibold uppercase tracking-widest block ${eyebrowText}`}>
                {t.frakt360Study.storeHeading}
              </span>
              <h3 className={`text-xl sm:text-2xl font-display font-bold ${headingText}`}>
                Shopify, WooCommerce & Mystore
              </h3>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                {t.frakt360Study.storeP1} {t.frakt360Study.storeP2} {t.frakt360Study.storeP3}
              </p>
              <p className={`text-sm leading-relaxed ${mutedText}`}>{t.frakt360Study.storeP4}</p>
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl ${cardSurface} space-y-4`}>
              <span className={`text-xs font-semibold uppercase tracking-widest block ${eyebrowText}`}>
                {t.frakt360Study.carrierHeading}
              </span>
              <h3 className={`text-xl sm:text-2xl font-display font-bold ${headingText}`}>
                PostNord, Bring, Ongoing WMS & Zebra
              </h3>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                {t.frakt360Study.carrierP1} {t.frakt360Study.carrierP2}
              </p>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                {t.frakt360Study.labelP1} {t.frakt360Study.warehouseP1}
              </p>
              <div className={`flex flex-wrap gap-2 pt-3 border-t ${isLight ? 'border-neutral-100' : 'border-white/10'}`}>
                {['PostNord REST', 'Bring Shipping', 'Zebra ZPL Print', 'Ongoing WMS', 'QR Returns', 'Invoice Sync'].map(
                  (item, i) => (
                    <span key={i} className={`px-2.5 py-1 rounded-md text-xs font-semibold ${pillClass}`}>
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES (10 PILLARS) */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1440px] mx-auto space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className={`text-xs font-semibold uppercase tracking-widest block ${eyebrowText}`}>
              {language === 'no' ? 'LEVERANSER' : 'DELIVERABLES'}
            </span>
            <h2 className={`text-2xl sm:text-3xl font-display font-bold ${headingText}`}>
              {t.frakt360Study.whatWeBuiltHeading}
            </h2>
            <p className={`text-sm sm:text-base ${mutedText}`}>
              {language === 'no'
                ? 'Komplett leveranse på tvers av produktdesign, frontend, backend, maskinvareintegrasjon og sanntids logistikk.'
                : 'Full-spectrum delivery across product design, frontend, backend, hardware integrations and real-time logistics.'}
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
                      {item.badge}
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
            onClick={() => onNavigateToProject('swallet')}
            className={`p-6 sm:p-7 rounded-3xl ${cardSurface} text-left flex items-center justify-between gap-4 cursor-pointer group hover:-translate-y-0.5 transition-all`}
          >
            <div>
              <span className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${eyebrowText}`}>
                {t.frakt360Study.nextCaseStudy}
              </span>
              <div className={`text-xl font-display font-bold ${headingText}`}>Swallet</div>
              <p className={`text-xs sm:text-sm mt-1 ${mutedText}`}>{t.frakt360Study.nextCaseStudySubtitle}</p>
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
              <h3 className={`text-lg font-display font-bold ${headingText}`}>{t.frakt360Study.ctaHeading}</h3>
              <p className={`text-xs sm:text-sm mt-1 ${mutedText}`}>{t.frakt360Study.ctaDesc}</p>
            </div>
            <button
              type="button"
              onClick={onStartProject}
              className="px-6 py-3 rounded-full text-sm font-semibold text-white btn-cyan-gradient shrink-0 cursor-pointer inline-flex items-center gap-2"
            >
              <span>{t.frakt360Study.ctaButton}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer onSelectTab={onNavigateToTab} onGetStarted={onStartProject} />
    </div>
  );
};
