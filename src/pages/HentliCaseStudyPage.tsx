import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Navigation,
  Smartphone,
  ShieldCheck,
  Zap,
  Bell,
  Layers,
  Sparkles,
  Check,
  CheckCircle2,
  Users,
  Compass,
  Truck,
  Package,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { GetonLogo } from '../components/Logo.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { LanguageSwitcher } from '../components/LanguageSwitcher.tsx';

interface HentliCaseStudyPageProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
  onStartProject: () => void;
}

export const HentliCaseStudyPage: React.FC<HentliCaseStudyPageProps> = ({
  onBack,
  onNavigateToProject,
  onStartProject,
}) => {
  const { language } = useLanguage();
  const [activeRoleTab, setActiveRoleTab] = useState<'customer' | 'driver'>('customer');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const customerSteps = language === 'no' ? [
    { title: '1. Opprett', desc: 'Legg inn hente- og leveringsadresse' },
    { title: '2. Publiser', desc: 'Beskriv vare, mål og velg leveringstype' },
    { title: '3. Match', desc: 'Nærliggende sjåfør aksepterer oppdraget' },
    { title: '4. Spor', desc: 'Følg sjåføren i sanntid på kartet' },
    { title: '5. Levert', desc: 'Motta bildebevis og bekreft levering' },
  ] : [
    { title: '1. Create', desc: 'Enter pickup and drop-off addresses' },
    { title: '2. Publish', desc: 'Describe items, size and select speed' },
    { title: '3. Match', desc: 'Nearby verified driver accepts job' },
    { title: '4. Track', desc: 'Follow driver trajectory live on map' },
    { title: '5. Delivered', desc: 'Receive photographic proof of handover' },
  ];

  const driverSteps = language === 'no' ? [
    { title: '1. Oppdag', desc: 'Se ledige oppdrag på det interaktive kartet' },
    { title: '2. Aksepter', desc: 'Velg oppdrag som passer din rute og bil' },
    { title: '3. Henting', desc: 'Naviger til hentested og bekreft vare' },
    { title: '4. Rute', desc: 'Direkte sving-for-sving rutenavigasjon' },
    { title: '5. Utbetaling', desc: 'Dokumenter levering og motta oppgjør' },
  ] : [
    { title: '1. Discover', desc: 'Explore live deliveries on interactive map' },
    { title: '2. Accept', desc: 'Claim jobs fitting current route and vehicle' },
    { title: '3. Pick Up', desc: 'Turn-by-turn routing to pickup location' },
    { title: '4. Navigate', desc: 'Real-time GPS delivery transit route' },
    { title: '5. Payout', desc: 'Upload proof photo and receive instant pay' },
  ];

  const corePillars = language === 'no' ? [
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
      desc: 'Moderne kryssplattform-arkitektur med 60fps flyt, lavt batteriforbruk og offline-toleranse.',
      icon: Smartphone,
    },
  ] : [
    {
      title: 'Real-time job discovery',
      desc: 'Nearby delivery opportunities displayed on the map as soon as published.',
      icon: Zap,
    },
    {
      title: 'Smart role-based experience',
      desc: 'Customer and driver experiences seamlessly combined inside a single app architecture.',
      icon: Users,
    },
    {
      title: 'Live location & maps',
      desc: 'Pickup locations, destinations and driver progress presented visually and dynamically.',
      icon: MapPin,
    },
    {
      title: 'Instant notifications',
      desc: 'Sub-second push notifications keeping both parties synchronized through each handover.',
      icon: Bell,
    },
    {
      title: 'Delivery management',
      desc: 'Manage active, upcoming and completed deliveries with digital signatures and photo proof.',
      icon: Layers,
    },
    {
      title: 'Built for iOS & Android',
      desc: 'High-performance mobile architecture engineered for fluid 60fps interaction on both platforms.',
      icon: Smartphone,
    },
  ];

  return (
    <div className="min-h-screen bg-[#040816] text-white selection:bg-purple-500 selection:text-white">
      {/* 
        STICKY TOP NAVIGATION BAR
      */}
      <header className="sticky top-0 z-50 w-full bg-[#040816]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-slate-200 transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>{language === 'no' ? 'Tilbake til forsiden' : 'Back to Home'}</span>
            </button>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <GetonLogo className="w-7 h-7" />
            <LanguageSwitcher />
            <button
              onClick={onStartProject}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
            >
              {language === 'no' ? 'Start et prosjekt' : 'Start a Project'}
            </button>
          </div>
        </div>
      </header>

      {/* 
        HERO SECTION: METADATA & TITLE
      */}
      <section className="relative pt-12 pb-16 sm:py-20 px-4 sm:px-8 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-400/40 text-[11px] font-semibold tracking-wider text-purple-300 uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>CASE STUDY // GETON DIGITAL SOLUTIONS</span>
          </div>

          {/* Title & Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white mb-6 leading-[1.08]">
            Hentli
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-purple-200/90 max-w-4xl mb-8 leading-snug">
            {language === 'no' ? 'Lokal levering, redesignet fra bunnen.' : 'Local delivery, reimagined.'}
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-10">
            {language === 'no'
              ? 'Hentli er en kartbasert leveringsplattform som kobler folk som trenger frakt med sjåfører som allerede skal samme vei. I stedet for tradisjonell budbooking, forvandler Hentli lokal transport til en åpen markedsplass.'
              : 'Hentli is a map-based delivery platform that connects people who need something transported with drivers ready to take the job. Instead of traditional delivery booking, Hentli turns local deliveries into an open marketplace.'}
          </p>

          {/* Project Metadata Specs Card */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                {language === 'no' ? 'BRANSJE' : 'INDUSTRY'}
              </div>
              <div className="text-sm font-semibold text-white">
                {language === 'no' ? 'Logistikk & Markedsplass' : 'Logistics & Marketplace'}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                {language === 'no' ? 'TJENESTER' : 'SERVICES'}
              </div>
              <div className="text-sm font-semibold text-white">
                UX/UI · Mobile · Maps · API
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                {language === 'no' ? 'UTVIKLET AV' : 'DEVELOPED BY'}
              </div>
              <div className="text-sm font-semibold text-purple-300">
                Geton AS
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                {language === 'no' ? 'PLATTFORM' : 'PLATFORM'}
              </div>
              <div className="text-sm font-semibold text-white">
                iOS & Android (Mobile)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        HERO MEDIA BANNER (Attached: Hentli Case Study Two Seamless Experiences)
      */}
      <section className="py-12 px-4 sm:px-8 border-b border-white/10 bg-[#060c20]">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_20px_60px_rgba(147,51,234,0.2)] bg-slate-950">
            <img
              src="/assets/aistudio/Hentli_Case_Study__Two_Seamless_Experiences_78303fe2.png"
              alt="Hentli Case Study - One app, two experiences"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* 
        SECTION 1: THE CHALLENGE & THE OPPORTUNITY
      */}
      <section className="py-20 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-400/30 text-xs font-semibold text-purple-300 uppercase tracking-wider">
              {language === 'no' ? 'UTFORDRINGEN' : 'THE CHALLENGE'}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
              {language === 'no'
                ? 'Hvordan koble leveringsbehov med ledig kapasitet på sekunder?'
                : 'How can we connect delivery demand with available drivers in a fast and intuitive way?'}
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'no'
                ? 'Lokal frakt av møbler, pakker eller hvitevarer kan raskt bli dyrt, tregt og unødvendig komplisert. Samtidig er det tusenvis av sjåfører som allerede forflytter seg mellom bydeler og adresser hver eneste dag med ledig plass i bagasjerommet eller varebilen.'
                : 'Local deliveries can be expensive, slow and unnecessarily complicated. At the same time, thousands of drivers are already moving between locations every day.'}
            </p>

            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'no'
                ? 'Utfordringen var derfor enkel, men krevende: Bygge en digital markedsplass med null friksjon, der kunder kan publisere oppdrag på under ett minutt, og sjåfører kan plukke oppdrag rett fra et levende kart.'
                : 'The goal was clear: Eliminate friction completely so customers publish in seconds, and nearby drivers instantly spot and accept orders along their route.'}
            </p>

            <div className="p-6 rounded-2xl bg-purple-950/30 border border-purple-500/30">
              <div className="text-sm font-semibold text-purple-300 mb-1">
                {language === 'no' ? 'Hovedprinsipp' : 'Guiding Principle'}
              </div>
              <div className="text-lg font-bold text-white">
                {language === 'no'
                  ? 'Gjør ubrukt transportkapasitet synlig – og gjør lokal levering enklere.'
                  : 'Make unused transportation capacity discoverable – and make local delivery effortless.'}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group">
              <img
                src="/assets/aistudio/Smartphone_Sofa_Delivery_Map_Scene_86ff9f8d.png"
                alt="Smartphone Sofa Delivery Map Scene 3D Illustration"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 text-xs text-slate-200">
                <span className="font-bold text-purple-300">3D Visual Asset: </span>
                {language === 'no'
                  ? 'Visualisering av sofa-levering og kartkobling i Hentli-universet.'
                  : 'Sofa delivery & live map coordination within the Hentli ecosystem.'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        SECTION 2: ONE PLATFORM. TWO EXPERIENCES.
        Interactive Tab Switching between Customer Flow and Driver Flow
      */}
      <section className="py-24 px-4 sm:px-8 border-b border-white/10 bg-[#060c20]/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-400/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-4">
              {language === 'no' ? 'BRUKEROPPLEVELSEN' : 'USER EXPERIENCE'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
              {language === 'no' ? 'Én app. To sømløse opplevelser.' : 'One platform. Two experiences.'}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              {language === 'no'
                ? 'Hentli samler kunder og sjåfører i samme mobilapp. Brukeren velger rolle ved start, og hele grensesnittet tilpasser seg automatisk.'
                : 'Hentli brings customers and drivers together in one app. Users choose their role upon launch, and Hentli adapts dynamically.'}
            </p>

            {/* Toggle Role Tabs */}
            <div className="inline-flex p-1.5 rounded-2xl bg-white/10 border border-white/15 mt-8">
              <button
                onClick={() => setActiveRoleTab('customer')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeRoleTab === 'customer'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>{language === 'no' ? 'For kunder (Kundereisen)' : 'For Customers'}</span>
              </button>
              <button
                onClick={() => setActiveRoleTab('driver')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeRoleTab === 'driver'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Truck className="w-4 h-4" />
                <span>{language === 'no' ? 'For sjåfører (Sjåførreisen)' : 'For Drivers'}</span>
              </button>
            </div>
          </div>

          {/* Stepper Pipeline Display */}
          <div className="mb-14">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {(activeRoleTab === 'customer' ? customerSteps : driverSteps).map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-purple-400/20 backdrop-blur-sm"
                >
                  <div className="text-sm font-bold text-purple-300 mb-1">{step.title}</div>
                  <div className="text-xs text-slate-300 leading-relaxed">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Journey Screen Board */}
          <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 bg-slate-950 shadow-2xl">
            <div className="p-4 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                {activeRoleTab === 'customer'
                  ? (language === 'no' ? 'HENTLI KUNDERIESEN — 14 KOMPLETTE SKJERMFLATER' : 'HENTLI CUSTOMER JOURNEY — 14 COMPLETE UI SCREENS')
                  : (language === 'no' ? 'HENTLI SJÅFØRREISEN — 14 KOMPLETTE SKJERMFLATER' : 'HENTLI DRIVER JOURNEY — 14 COMPLETE UI SCREENS')}
              </span>
              <span className="text-[11px] font-semibold text-slate-400">
                Figma High-Fidelity Design System
              </span>
            </div>

            <img
              src={
                activeRoleTab === 'customer'
                  ? '/assets/aistudio/Hentli_customer_delivery_journey-2_9993afde.png'
                  : '/assets/aistudio/Hentli_driver_journey_UI_board-1_ea5e846b.png'
              }
              alt={activeRoleTab === 'customer' ? 'Hentli Customer Journey UI Board' : 'Hentli Driver Journey UI Board'}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* 
        SECTION 3: BUILT AROUND THE MAP & INSTANT OTP
      */}
      <section className="py-20 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-400/40 flex items-center justify-center text-purple-300 mb-6">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                {language === 'no' ? 'Bygget rundt kartet' : 'Built around the map'}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {language === 'no'
                  ? 'Geografisk posisjon er selve kjernen i Hentli. I stedet for å bla gjennom tungvinte lister, ser sjåfører umiddelbart hvor oppdrag finnes, og kunder kan følge transporten visuelt i sanntid. Resultatet er en raskere og mer naturlig måte å koble folk, pakker og sjåfører.'
                  : 'Location is at the heart of Hentli. Instead of browsing complicated lists, drivers instantly see where jobs are located on the map and customers follow their deliveries visually.'}
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-purple-300 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Mapbox & Google Maps Geocoding Engine</span>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-400/40 flex items-center justify-center text-indigo-300 mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                {language === 'no' ? 'Enkelt fra første interaksjon' : 'Simple from the first interaction'}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {language === 'no'
                  ? 'Hentli ble designet for å fjerne all unødvendig friksjon. Brukere logger inn med kun mobilnummer og 6-sifret SMS-engangskode (OTP). Ingen passord, ingen lange registreringsskjemaer. Rett på sak fra bestilling til levering.'
                  : 'Users get started using only their mobile phone number and OTP code, choose whether they want to use Hentli as a customer or driver, and enter an experience built around that role.'}
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-indigo-300 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              <span>Sub-20s Onboarding with Twilio OTP SMS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        SECTION 4: DESIGNED FOR REAL-TIME DELIVERY (6 Core Pillars)
      */}
      <section className="py-24 px-4 sm:px-8 border-b border-white/10 bg-[#060c20]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-400/30 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4">
              {language === 'no' ? 'ARKITEKTUR & FUNKSJONER' : 'ARCHITECTURE & FEATURES'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
              {language === 'no' ? 'Designet for sanntidslogistikk' : 'Designed for real-time delivery'}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              {language === 'no'
                ? 'Bak det enkle grensesnittet ligger en robust plattform bygget spesifikt for on-demand leveranser.'
                : 'Behind the simple interface is an architecture engineered around the needs of an on-demand marketplace.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 
        SECTION 5: THE BIGGER VISION & TRANSFORMATION
      */}
      <section className="py-20 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-400/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider">
            {language === 'no' ? 'VISJONEN' : 'THE BIGGER VISION'}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
            {language === 'no'
              ? 'Hentli er mer enn en budapp – det er en åpen markedsplass'
              : 'Hentli is more than a courier app – it is an open marketplace'}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {language === 'no'
              ? 'Visjonen er å skape en fleksibel lokal transportmarkedsplass der privatpersoner, uavhengige sjåfører og etter hvert bedrifter kan koble seg sammen rundt sanntids transportbehov. Ved å gjøre ubenyttet kapasitet synlig, skaper Hentli en smartere og mer bærekraftig måte å flytte ting fra A til B.'
              : 'The vision is to create a flexible local delivery marketplace where people, independent drivers and eventually businesses can connect around real-time transportation needs. By making unused capacity discoverable, Hentli creates a smarter way to move things from A to B.'}
          </p>

          <div className="pt-6">
            <div className="text-sm font-semibold text-purple-300">
              {language === 'no' ? 'Fra idé til ferdig produkt levert av Geton AS' : 'From concept to live product delivered by Geton AS'}
            </div>
          </div>
        </div>
      </section>

      {/* 
        BOTTOM CTA BANNER: NEED TO TURN AN IDEA INTO A DIGITAL PRODUCT?
      */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-[#080f2d] to-[#040816]">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-purple-950/80 via-indigo-950/80 to-purple-950/80 border border-purple-500/40 text-center shadow-[0_0_60px_rgba(147,51,234,0.25)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/60 border border-purple-400/40 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4">
            {language === 'no' ? 'TRENGER DU EN DIGITAL LØSNING?' : 'NEED TO TURN AN IDEA INTO A DIGITAL PRODUCT?'}
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-4">
            {language === 'no' ? 'La oss bygge noe fantastisk sammen.' : 'Let’s build something great together.'}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {language === 'no'
              ? 'Vi hjelper bedrifter med å forvandle konsepter til skalerbare apper, plattformer og digitale opplevelser med høy ytelse.'
              : 'We help businesses transform ideas into scalable apps, platforms and digital experiences with world-class engineering.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{language === 'no' ? 'Diskuter idéen din med Geton' : 'Discuss your idea with Geton'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onBack}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all cursor-pointer"
            >
              {language === 'no' ? 'Se flere prosjekter' : 'Explore more projects'}
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer onSelectTab={onBack} onGetStarted={onStartProject} />
    </div>
  );
};
