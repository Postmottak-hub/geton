import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Navigation,
  Smartphone,
  Zap,
  Bell,
  Layers,
  CheckCircle2,
  Users,
  Truck,
  Package,
} from 'lucide-react';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { ServiceSlug } from '../data/services.ts';

interface HentliCaseStudyPageProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
  onNavigateToTab: (tab: string) => void;
  onNavigateToService?: (slug: ServiceSlug) => void;
  onStartProject: () => void;
}

export const HentliCaseStudyPage: React.FC<HentliCaseStudyPageProps> = ({
  onNavigateToProject,
  onNavigateToTab,
  onNavigateToService,
  onStartProject,
}) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeRoleTab, setActiveRoleTab] = useState<'customer' | 'driver'>('customer');

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

  const customerSteps =
    language === 'no'
      ? [
          { title: '1. Opprett', desc: 'Legg inn hente- og leveringsadresse' },
          { title: '2. Publiser', desc: 'Beskriv vare, mål og velg leveringstype' },
          { title: '3. Match', desc: 'Nærliggende sjåfør aksepterer oppdraget' },
          { title: '4. Spor', desc: 'Følg sjåføren i sanntid på kartet' },
          { title: '5. Levert', desc: 'Motta bildebevis og bekreft levering' },
        ]
      : [
          { title: '1. Create', desc: 'Enter pickup and drop-off addresses' },
          { title: '2. Publish', desc: 'Describe items, size and select speed' },
          { title: '3. Match', desc: 'Nearby verified driver accepts job' },
          { title: '4. Track', desc: 'Follow driver live on the map' },
          { title: '5. Delivered', desc: 'Receive photo confirmation of handover' },
        ];

  const driverSteps =
    language === 'no'
      ? [
          { title: '1. Oppdag', desc: 'Se ledige oppdrag på det interaktive kartet' },
          { title: '2. Aksepter', desc: 'Velg oppdrag som passer din rute og bil' },
          { title: '3. Henting', desc: 'Naviger til hentested og bekreft vare' },
          { title: '4. Rute', desc: 'Direkte rutenavigasjon til leveringssted' },
          { title: '5. Oppgjør', desc: 'Dokumenter levering og motta betaling' },
        ]
      : [
          { title: '1. Discover', desc: 'Explore available deliveries on the map' },
          { title: '2. Accept', desc: 'Claim jobs matching your route and vehicle' },
          { title: '3. Pick Up', desc: 'Turn-by-turn routing to pickup spot' },
          { title: '4. Navigate', desc: 'Live route navigation to destination' },
          { title: '5. Payout', desc: 'Confirm handover and receive payout' },
        ];

  const corePillars =
    language === 'no'
      ? [
          {
            title: 'Oppdrag i sanntid',
            desc: 'Nærliggende transportoppdrag vises øyeblikkelig i kartet så snart de opprettes.',
            icon: Zap,
          },
          {
            title: 'To roller – én applikasjon',
            desc: 'Kunde og sjåfør i én felles app. Brukeren velger rolle ved innlogging med et enkelt tastetrykk.',
            icon: Users,
          },
          {
            title: 'Kart og sanntidsposisjon',
            desc: 'Hentesteder, leveringsadresser og sjåførens forflytning vises visuelt og dynamisk.',
            icon: MapPin,
          },
          {
            title: 'Lynraske push-varsler',
            desc: 'Umiddelbar varsling når sjåfør har akseptert, er på vei, ankommer eller har levert varen.',
            icon: Bell,
          },
          {
            title: 'Helhetlig leveringsstyring',
            desc: 'Full historikk, kvitteringer, fotobevis og betalingsoppgjør samlet i én ryddig oversikt.',
            icon: Layers,
          },
          {
            title: 'Optimalisert for iOS & Android',
            desc: 'Moderne mobilarkitektur med myk ytelse, lavt batteriforbruk og god dekning på farten.',
            icon: Smartphone,
          },
        ]
      : [
          {
            title: 'Real-Time Job Discovery',
            desc: 'Nearby delivery opportunities appear live on the map immediately when published.',
            icon: Zap,
          },
          {
            title: 'Dual Role Architecture',
            desc: 'Customer and driver workflows seamlessly combined inside one unified app.',
            icon: Users,
          },
          {
            title: 'Live Location & Maps',
            desc: 'Pickups, destinations and driver routing rendered dynamically in real time.',
            icon: MapPin,
          },
          {
            title: 'Instant Notifications',
            desc: 'Immediate alerts whenever a driver accepts, picks up, or completes delivery.',
            icon: Bell,
          },
          {
            title: 'Delivery Management',
            desc: 'Full history, receipts, photo proof, and automated payouts in one view.',
            icon: Layers,
          },
          {
            title: 'Built for iOS & Android',
            desc: 'Cross-platform mobile engineering tuned for smooth interaction on both stores.',
            icon: Smartphone,
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
                {language === 'no' ? 'Kundecase · Mobilapp' : 'Case Study · Mobile App'}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${pillClass}`}>
                iOS & Android · Sanntidskart
              </span>
            </div>
          </div>

          <div className="max-w-4xl space-y-4">
            <span className={`text-xs font-semibold tracking-[0.2em] uppercase block ${eyebrowText}`}>
              {language === 'no' ? 'CASESTUDIE · MOBILAPP & LOGISTIKK' : 'CASE STUDY · MOBILE MARKETPLACE'}
            </span>
            <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] ${headingText}`}>
              {language === 'no'
                ? 'Hentli – Én app, to sømløse opplevelser'
                : 'Hentli – Local delivery, reimagined'}
            </h1>
            <p className={`text-base sm:text-xl leading-relaxed max-w-3xl ${mutedText}`}>
              {language === 'no'
                ? 'Hentli er en kartbasert leveringsplattform som kobler folk som trenger frakt med sjåfører som allerede skal samme vei.'
                : 'Hentli is a map-based delivery platform connecting people who need items moved with drivers already heading in that direction.'}
            </p>
          </div>

          {/* 4-Column Responsive Metadata Bar */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl ${cardSurface}`}>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Bransje' : 'Industry'}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>
                {language === 'no' ? 'Mobilitet & Lokal Frakt' : 'Mobility & Local Delivery'}
              </div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Tjenester' : 'Services'}
              </div>
              <div className={`text-sm font-medium ${mutedText}`}>UX/UI · Mobile · Maps · API</div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Utviklet av' : 'Developed by'}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>Geton AS</div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Plattform' : 'Platform'}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>iOS & Android</div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO BANNER IMAGE */}
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
              src="/assets/aistudio/Hentli__Two_Experiences__One_App_706526e8.png"
              alt="Hentli Case Study - One app, two experiences"
              width={1672}
              height={941}
              decoding="async"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: THE CHALLENGE & VISUAL */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className={`text-xs font-semibold uppercase tracking-wider block ${eyebrowText}`}>
              {language === 'no' ? 'UTFORDRINGEN' : 'THE CHALLENGE'}
            </span>
            <h2 className={`text-2xl sm:text-4xl font-display font-extrabold leading-tight ${headingText}`}>
              {language === 'no'
                ? 'Hvordan koble leveringsbehov med ledig kapasitet på sekunder?'
                : 'How to match delivery demand with available drivers instantly'}
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
              {language === 'no'
                ? 'Lokal frakt av møbler, pakker eller hvitevarer kan raskt bli dyrt og tungvint. Samtidig forflytter tusenvis av sjåfører seg mellom adresser hver dag med ledig bagasjeplass.'
                : 'Local deliveries of furniture or larger packages can be expensive and slow, even while thousands of drivers already cover the same routes daily.'}
            </p>
            <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
              {language === 'no'
                ? 'Utfordringen var å bygge en friksjonsfri markedsplass der kunder publiserer oppdrag på under ett minutt og sjåfører plukker oppdrag direkte fra kartet.'
                : 'Our goal was to eliminate friction so customers publish a job in under a minute and nearby drivers claim orders straight from a live map.'}
            </p>
            <div className={`p-5 rounded-2xl border ${highlightBox}`}>
              <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Hovedprinsipp' : 'Guiding Principle'}
              </div>
              <div className={`text-base sm:text-lg font-bold ${headingText}`}>
                {language === 'no'
                  ? 'Gjør ubrukt transportkapasitet synlig – og lokal levering enklere.'
                  : 'Make unused transport capacity visible – and local delivery effortless.'}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              className={`rounded-3xl overflow-hidden border ${
                isLight ? 'bg-white border-[#e7e7e5] shadow-md' : 'bg-[#081026] border-white/10 shadow-xl'
              }`}
            >
              <img
                src="/assets/aistudio/Smartphone_Sofa_Delivery_Map_Scene_86ff9f8d.webp"
                alt="Smartphone Sofa Delivery Map Scene"
                width={900}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CUSTOMER vs DRIVER FLOW */}
      <section className={`py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 ${bandAlt}`}>
        <div className="max-w-[1440px] mx-auto space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span className={`text-xs font-semibold uppercase tracking-wider block ${eyebrowText}`}>
                {language === 'no' ? 'BRUKEROPPLEVELSEN' : 'USER EXPERIENCE'}
              </span>
              <h2 className={`text-2xl sm:text-4xl font-display font-extrabold ${headingText}`}>
                {language === 'no' ? 'Én app. To sømløse opplevelser.' : 'One platform. Two experiences.'}
              </h2>
              <p className={`text-sm sm:text-base ${mutedText}`}>
                {language === 'no'
                  ? 'Brukeren velger rolle ved oppstart, og hele grensesnittet tilpasser seg enten du sender varer eller kjører oppdrag.'
                  : 'Users select their role upon opening the app and get an experience tailored specifically for sending or delivering.'}
              </p>
            </div>

            <div className={`inline-flex flex-wrap p-1.5 rounded-2xl border ${cardSurface} w-fit`}>
              <button
                type="button"
                onClick={() => setActiveRoleTab('customer')}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeRoleTab === 'customer'
                    ? isLight
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'bg-cyan-500 text-slate-950 shadow-sm'
                    : isLight
                    ? 'text-neutral-600 hover:text-neutral-900'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>{language === 'no' ? 'Kundereisen' : 'For Customers'}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveRoleTab('driver')}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeRoleTab === 'driver'
                    ? isLight
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'bg-cyan-500 text-slate-950 shadow-sm'
                    : isLight
                    ? 'text-neutral-600 hover:text-neutral-900'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Truck className="w-4 h-4" />
                <span>{language === 'no' ? 'Sjåførreisen' : 'For Drivers'}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {(activeRoleTab === 'customer' ? customerSteps : driverSteps).map((step, idx) => (
              <div key={idx} className={`p-4 rounded-2xl ${cardSurface}`}>
                <div className={`text-sm font-bold mb-1 ${eyebrowText}`}>{step.title}</div>
                <p className={`text-xs leading-relaxed ${mutedText}`}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div
            className={`rounded-2xl sm:rounded-3xl overflow-hidden border ${
              isLight ? 'bg-white border-[#e7e7e5] shadow-md' : 'bg-[#081026] border-white/15 shadow-2xl'
            }`}
          >
            <div
              className={`px-5 py-3.5 border-b flex flex-wrap items-center justify-between gap-2 ${
                isLight ? 'bg-[#fafaf9] border-[#e7e7e5]' : 'bg-white/[0.03] border-white/10'
              }`}
            >
              <span className={`text-xs font-bold uppercase tracking-wider ${eyebrowText}`}>
                {activeRoleTab === 'customer'
                  ? language === 'no'
                    ? 'HENTLI KUNDEREISEN — SKJERMFLYT'
                    : 'HENTLI CUSTOMER JOURNEY'
                  : language === 'no'
                  ? 'HENTLI SJÅFØRREISEN — SKJERMFLYT'
                  : 'HENTLI DRIVER JOURNEY'}
              </span>
              <span className={`text-xs font-medium ${mutedText}`}>iOS & Android UI System</span>
            </div>
            <img
              src={
                activeRoleTab === 'customer'
                  ? '/assets/aistudio/Hentli_customer_delivery_journey-2_9993afde.webp'
                  : '/assets/aistudio/Hentli_driver_journey_UI_board-1_ea5e846b.webp'
              }
              alt={activeRoleTab === 'customer' ? 'Hentli Customer Journey UI Board' : 'Hentli Driver Journey UI Board'}
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE ARCHITECTURE PILLARS */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1440px] mx-auto space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className={`text-xs font-semibold uppercase tracking-wider block ${eyebrowText}`}>
              {language === 'no' ? 'ARKITEKTUR & FUNKSJONER' : 'ARCHITECTURE & FEATURES'}
            </span>
            <h2 className={`text-2xl sm:text-4xl font-display font-extrabold ${headingText}`}>
              {language === 'no' ? 'Designet for sanntidslogistikk' : 'Designed for real-time delivery'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className={`p-6 sm:p-7 rounded-2xl ${cardSurface} space-y-3`}>
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center ${
                      isLight
                        ? 'bg-neutral-900 border-neutral-900 text-white'
                        : 'bg-cyan-950/70 border-cyan-400/40 text-cyan-300'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className={`text-lg font-display font-bold ${headingText}`}>{item.title}</h3>
                  <p className={`text-sm leading-relaxed ${mutedText}`}>{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 sm:p-8 rounded-3xl ${cardSurface} space-y-3`}>
              <div className="flex items-center gap-2.5">
                <Navigation className={`w-5 h-5 ${eyebrowText}`} />
                <h3 className={`text-xl font-display font-bold ${headingText}`}>
                  {language === 'no' ? 'Bygget rundt kartet' : 'Built around the map'}
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                {language === 'no'
                  ? 'I stedet for å bla gjennom tunge lister ser sjåfører umiddelbart hvor oppdrag finnes, og kunder følger leveringen visuelt i sanntid.'
                  : 'Instead of sifting through static lists, drivers immediately spot available jobs around them and customers track routes visually.'}
              </p>
              <div className={`pt-2 flex items-center gap-2 text-xs font-semibold ${eyebrowText}`}>
                <CheckCircle2 className="w-4 h-4" />
                <span>Sanntids kartmatching & GPS-sporing</span>
              </div>
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl ${cardSurface} space-y-3`}>
              <div className="flex items-center gap-2.5">
                <Smartphone className={`w-5 h-5 ${eyebrowText}`} />
                <h3 className={`text-xl font-display font-bold ${headingText}`}>
                  {language === 'no' ? 'Enkelt fra første interaksjon' : 'Zero-friction onboarding'}
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                {language === 'no'
                  ? 'Rask innlogging med mobilnummer og engangskode (OTP) fjerner unødvendige skjemaer – rett fra bestilling til levering.'
                  : 'Phone number and OTP verification eliminate long sign-up hurdles so users get straight to posting or claiming deliveries.'}
              </p>
              <div className={`pt-2 flex items-center gap-2 text-xs font-semibold ${eyebrowText}`}>
                <CheckCircle2 className="w-4 h-4" />
                <span>Rask SMS-engangskode & rollevalg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM NAVIGATION & CTA */}
      <section className={`py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 ${bandAlt}`}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            type="button"
            onClick={() => onNavigateToProject('vestlandsk-hjertesenter')}
            className={`p-6 sm:p-7 rounded-3xl ${cardSurface} text-left flex items-center justify-between gap-4 cursor-pointer group hover:-translate-y-0.5 transition-all`}
          >
            <div>
              <span className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'NESTE CASE STUDY' : 'NEXT CASE STUDY'}
              </span>
              <div className={`text-xl font-display font-bold ${headingText}`}>Vestlandsk Hjertesenter</div>
              <p className={`text-xs sm:text-sm mt-1 ${mutedText}`}>
                {language === 'no'
                  ? 'Pasientvennlig klinikknettside og timebooking i Bergen'
                  : 'Patient-focused cardiology website and online booking in Bergen'}
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
                {language === 'no' ? 'Har du en appidé?' : 'Planning a mobile app?'}
              </h3>
              <p className={`text-xs sm:text-sm mt-1 ${mutedText}`}>
                {language === 'no'
                  ? 'La oss forvandle idéen til en skalerbar løsning for iOS og Android.'
                  : 'Let’s bring your mobile concept to iOS and Android.'}
              </p>
            </div>
            <button
              type="button"
              onClick={onStartProject}
              className="px-6 py-3 rounded-full text-sm font-semibold text-white btn-cyan-gradient shrink-0 cursor-pointer inline-flex items-center gap-2"
            >
              <span>{language === 'no' ? 'Diskuter prosjektet' : 'Discuss project'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer onSelectTab={onNavigateToTab} onGetStarted={onStartProject} />
    </div>
  );
};
