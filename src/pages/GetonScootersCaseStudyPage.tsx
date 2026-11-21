import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MapPin,
  Radio,
  Smartphone,
  ShieldCheck,
  Navigation,
  Sparkles,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { ServiceSlug } from '../data/services.ts';

interface GetonScootersCaseStudyPageProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
  onNavigateToTab: (tab: string) => void;
  onNavigateToService?: (slug: ServiceSlug) => void;
  onStartProject: () => void;
}

export const GetonScootersCaseStudyPage: React.FC<GetonScootersCaseStudyPageProps> = ({
  onNavigateToProject,
  onNavigateToTab,
  onNavigateToService,
  onStartProject,
}) => {
  const { language } = useLanguage();
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

  const pillars =
    language === 'no'
      ? [
          {
            icon: Smartphone,
            title: 'Mobilapp for iOS og Android',
            desc: 'Brukeren finner tilgjengelige sparkesykler, skanner QR-kode, starter tur og vurderer turen etter parkering – alt i ett grensesnitt.',
          },
          {
            icon: MapPin,
            title: 'Kart, soner og geofencing',
            desc: 'Live kartvisning av kjøretøy og geografiske soner med tydelige varsler som «Outside Zone» når brukeren beveger seg utenfor tillatt område.',
          },
          {
            icon: Radio,
            title: 'IoT og MQTT-kommunikasjon',
            desc: 'Lettvekts publish/subscribe-meldinger via MQTT knytter fysiske kjøretøy over mobilnett til plattformen i sanntid med lav båndbreddebruk.',
          },
          {
            icon: ShieldCheck,
            title: 'Leiepass, prislogikk og fullført tur',
            desc: 'Geton Pass-oversikt, automatisk turberegning etter avslutning og mulighet for å laste opp bilder og tilbakemelding etter parkering.',
          },
        ]
      : [
          {
            icon: Smartphone,
            title: 'iOS & Android Mobile App',
            desc: 'Locate nearby scooters, scan the QR code, start your trip, and submit post-ride feedback in one cohesive mobile experience.',
          },
          {
            icon: MapPin,
            title: 'Live Maps & Geofencing',
            desc: 'Real-time vehicle discovery paired with zone boundaries and clear “Outside Zone” prompts whenever a rider exits permitted areas.',
          },
          {
            icon: Radio,
            title: 'IoT & MQTT Telemetry',
            desc: 'Lightweight MQTT publish/subscribe messaging links physical scooter hardware over cellular networks to the backend with minimal overhead.',
          },
          {
            icon: ShieldCheck,
            title: 'Passes & Ride Completion Flow',
            desc: 'Integrated Geton Pass views, automated trip summaries after parking, and optional photo confirmation with rider ratings.',
          },
        ];

  const capabilities =
    language === 'no'
      ? [
          'UI/UX-design og mobilutvikling (iOS & Android)',
          'Kart- og stedstjenester med geofencing-soner',
          'Backend, API-er og hendelsesstyrt statushåndtering',
          'IoT-integrasjon mot fysiske enheter via MQTT',
          'Logikk for leiepass, turberegning og parkeringskontroll',
          'Erfaring fra virkelig utleiedrift på Sotra',
        ]
      : [
          'UI/UX design & cross-platform iOS / Android engineering',
          'Live map rendering and geofencing boundary rules',
          'Backend APIs and event-driven vehicle state tracking',
          'IoT hardware integration using MQTT pub/sub messaging',
          'Rental pass logic, trip calculation & parking verification',
          'Validated in live day-to-day rental operations at Sotra',
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
          {/* Breadcrumb / Back */}
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
                {language === 'no' ? 'Kundecase · IoT & Apputvikling' : 'Case Study · IoT & Mobile App'}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${pillClass}`}>
                MQTT · iOS & Android
              </span>
            </div>
          </div>

          <div className="max-w-4xl space-y-4">
            <span className={`text-xs font-semibold tracking-[0.2em] uppercase block ${eyebrowText}`}>
              {language === 'no' ? 'CASESTUDIE · MIKROMOBILITET' : 'CASE STUDY · MICRO-MOBILITY'}
            </span>
            <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] [text-wrap:balance] ${headingText}`}>
              {language === 'no'
                ? 'Geton Scooters: Fra mobilapp til en IoT-plattform'
                : 'Geton Scooters: From mobile app to an IoT platform'}
            </h1>
            <p className={`text-base sm:text-xl leading-relaxed max-w-3xl ${mutedText}`}>
              {language === 'no'
                ? 'Å finne en elsparkesykkel på kartet, skanne en QR-kode og starte en tur skal oppleves enkelt. Bak opplevelsen ligger et presist samspill mellom mobilapp, karttjenester, backend, betalingsflyt og tilkoblede kjøretøy – testet i virkelig utleiedrift på Sotra.'
                : 'Locating an e-scooter on a map, scanning a QR code, and starting a ride should feel effortless. Behind the simplicity lies close coordination between mobile apps, maps, backend services, billing, and connected scooters – field-tested in live operations at Sotra.'}
            </p>
          </div>

          {/* 4-Column Responsive Metadata Bar */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl ${cardSurface}`}>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Prosjekt' : 'Project'}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>Geton Scooters</div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Bransje' : 'Industry'}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>
                {language === 'no' ? 'Mikromobilitet & IoT' : 'Micro-mobility & IoT'}
              </div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Teknologi' : 'Technology'}
              </div>
              <div className={`text-sm font-semibold ${mutedText}`}>
                iOS, Android, IoT, MQTT, Geofencing
              </div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Utprøvd i drift' : 'Real-World Testing'}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>
                {language === 'no' ? 'Sotra, Vestland' : 'Sotra, Norway'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE IMAGE + DISCLAIMER */}
      <section className={`py-10 sm:py-14 px-4 sm:px-8 lg:px-12 xl:px-16 ${bandAlt}`}>
        <div className="max-w-[1440px] mx-auto space-y-4">
          <div
            className={`rounded-2xl sm:rounded-3xl overflow-hidden border ${
              isLight
                ? 'bg-neutral-950 border-neutral-200 shadow-lg'
                : 'bg-[#040816] border-white/15 shadow-2xl'
            }`}
          >
            <img
              src="/assets/aistudio/Geton_Scooters_IoT_Mobility_Case_Study_84e80f94.png"
              alt="Geton Scooters — IoT, MQTT, Geofencing & Mobile App Case Study"
              width={1600}
              height={900}
              decoding="async"
              className="w-full h-auto object-contain"
            />
          </div>

          <div
            className={`flex items-start gap-2.5 text-xs leading-relaxed px-4 py-3 rounded-xl border ${
              isLight
                ? 'bg-white border-[#e7e7e5] text-neutral-600'
                : 'bg-white/[0.03] border-white/10 text-slate-400'
            }`}
          >
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-sky-600 dark:text-cyan-300" />
            <span>
              {language === 'no'
                ? 'Merk: Bildene viser Geton Scooters fra en tidligere versjon av tjenesten. Skjermbilder av priser og funksjoner er ikke ment som et gjeldende tilbud.'
                : 'Note: Screenshots depict an earlier version of the Geton Scooters service. Displayed prices and UI screens are historical examples and do not constitute a current offer.'}
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 1: CORE ARCHITECTURE & CAPABILITIES */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1440px] mx-auto space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className={`text-xs font-semibold tracking-[0.2em] uppercase block ${eyebrowText}`}>
              {language === 'no' ? 'ÉN TJENESTE – FLERE TEKNOLOGIER' : 'ONE SERVICE – MULTIPLE TECHNOLOGIES'}
            </span>
            <h2 className={`text-2xl sm:text-4xl font-display font-extrabold tracking-tight ${headingText}`}>
              {language === 'no'
                ? 'Når fysiske kjøretøy styres sømløst fra mobilen'
                : 'Connecting physical vehicles seamlessly with mobile software'}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed ${mutedText}`}>
              {language === 'no'
                ? 'Geton Scooters ble bygget rundt en enkel idé: Brukeren skal kunne finne, leie og avslutte en kjøretur direkte fra mobilen. Appen ble gjort tilgjengelig for både iOS og Android og samlet hele brukerreisen – fra kartoversikt og QR-skanning til leiepass og turvurdering.'
                : 'Geton Scooters started with a clear idea: riders should be able to discover, unlock, and finish a scooter ride directly from their phone. Built for both iOS and Android, the platform tied together live maps, QR scanning, passes, and ride completion feedback.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`p-6 sm:p-8 rounded-2xl ${cardSurface} space-y-4`}>
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center ${
                      isLight
                        ? 'bg-neutral-900 border-neutral-900 text-white'
                        : 'bg-cyan-950/70 border-cyan-400/40 text-cyan-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-xl font-display font-bold ${headingText}`}>{item.title}</h3>
                  <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: GEOFENCING & MQTT DEEP DIVE */}
      <section className={`py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 ${bandAlt}`}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Geofencing */}
          <div className={`lg:col-span-6 p-6 sm:p-8 rounded-3xl ${cardSurface} space-y-4`}>
            <div className="flex items-center gap-2.5">
              <Navigation className={`w-5 h-5 ${eyebrowText}`} />
              <span className={`text-xs font-semibold uppercase tracking-wider ${eyebrowText}`}>
                {language === 'no' ? 'KART & STEDSTJENESTER' : 'MAPS & LOCATION'}
              </span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-display font-bold ${headingText}`}>
              {language === 'no'
                ? 'Kart, tilgjengelighet og geografiske soner'
                : 'Live availability and geofencing boundaries'}
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
              {language === 'no'
                ? 'Kartet var sentralt i Geton Scooters. Her kunne brukeren se nærmeste ledige kjøretøy, orientere seg i området og starte turen. Kartløsningen viste tydelige soner og varslet umiddelbart («Outside Zone») når kjøretøyet beveget seg utenfor et tillatt område.'
                : 'The live map formed the heart of the rider experience. Users could immediately check available scooters nearby, inspect boundaries, and get automatic “Outside Zone” guidance whenever approaching restricted zones.'}
            </p>
            <p className={`text-sm leading-relaxed ${mutedText}`}>
              {language === 'no'
                ? 'Denne bruken av geofencing gjør geografiske driftsregler enkle å forstå i grensesnittet – uten at brukeren trenger å tolke kompliserte vilkår.'
                : 'Geofencing translates real-world municipal rules into clear in-app guidance rather than hidden policy pages.'}
            </p>
          </div>

          {/* MQTT IoT */}
          <div className={`lg:col-span-6 p-6 sm:p-8 rounded-3xl ${cardSurface} space-y-4`}>
            <div className="flex items-center gap-2.5">
              <Radio className={`w-5 h-5 ${eyebrowText}`} />
              <span className={`text-xs font-semibold uppercase tracking-wider ${eyebrowText}`}>
                {language === 'no' ? 'IOT & MELDINGSPROTOKOLL' : 'IOT TELEMETRY ARCHITECTURE'}
              </span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-display font-bold ${headingText}`}>
              {language === 'no'
                ? 'IoT og MQTT – når programvaren møter kjøretøyet'
                : 'IoT & MQTT – where software meets hardware'}
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
              {language === 'no'
                ? 'Bak appen benyttet Geton Scooters IoT og MQTT – en lettvekts meldingsprotokoll basert på publish/subscribe. I stedet for tunge spørringer kunne elsparkesykler over mobilnett sende og motta hendelser raskt og pålitelig selv ved begrenset båndbredde.'
                : 'Behind the app interface, Geton Scooters relied on IoT telemetry powered by MQTT’s publish/subscribe architecture. This allows cellular-connected hardware with tight bandwidth budgets to exchange lock/unlock and state telemetry reliably.'}
            </p>
            <p className={`text-sm leading-relaxed ${mutedText}`}>
              {language === 'no'
                ? 'Brukeren opplever bare et enkelt trykk i appen, mens plattformen koordinerer kjøretøystatus, turdata og regler sikkert i bakgrunnen.'
                : 'While riders experience a simple single tap, the backend coordinates device status, zone rules, and session state accurately behind the scenes.'}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: BROADER APPLICATION & OFFICIAL LINKS */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl ${cardSurface} space-y-5`}>
            <div className="flex items-center gap-2">
              <Sparkles className={`w-4 h-4 ${eyebrowText}`} />
              <span className={`text-xs font-semibold uppercase tracking-wider ${eyebrowText}`}>
                {language === 'no' ? 'RELEVANS FOR FLERE BRANSJER' : 'BROADER ENGINEERING VALUE'}
              </span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-display font-bold ${headingText}`}>
              {language === 'no'
                ? 'Overførbar erfaring til logistikk, sporing og smarte produkter'
                : 'Proven architecture for logistics, fleet tracking, and connected products'}
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
              {language === 'no'
                ? 'Geton Scooters ble mer enn en prototype – tjenesten ble testet i praktisk drift på Sotra. Erfaringene gir direkte verdi også for virksomheter innen logistikk, flåtestyring, utleie, sporing og tilkoblede enheter der mobilapp og backend må spille sammen sømløst.'
                : 'Geton Scooters moved far beyond a static prototype into real rental operations at Sotra. That hands-on experience transfers directly to logistics, fleet management, equipment rental, tracking, and smart-hardware platforms.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${eyebrowText}`} />
                  <span className={mutedText}>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl ${cardSurface} space-y-5`}>
            <span className={`text-xs font-semibold uppercase tracking-wider block ${eyebrowText}`}>
              {language === 'no' ? 'KILDER & APP-LENKER' : 'RESOURCES & STORE LINKS'}
            </span>
            <h3 className={`text-xl font-display font-bold ${headingText}`}>
              {language === 'no' ? 'Utforsk plattform og protokoll' : 'Explore stores & protocol'}
            </h3>
            <div className="space-y-3">
              <a
                href="https://apps.apple.com/no/app/geton-scooters/id1591591491"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                  isLight
                    ? 'bg-[#fafaf9] border-neutral-200 hover:border-neutral-400 text-neutral-900'
                    : 'bg-white/[0.03] border-white/10 hover:border-cyan-400/50 text-white'
                }`}
              >
                <span className="text-sm font-semibold">App Store — Geton Scooters</span>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.geton"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                  isLight
                    ? 'bg-[#fafaf9] border-neutral-200 hover:border-neutral-400 text-neutral-900'
                    : 'bg-white/[0.03] border-white/10 hover:border-cyan-400/50 text-white'
                }`}
              >
                <span className="text-sm font-semibold">Google Play — Geton Scooters</span>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
              <a
                href="https://mqtt.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                  isLight
                    ? 'bg-[#fafaf9] border-neutral-200 hover:border-neutral-400 text-neutral-900'
                    : 'bg-white/[0.03] border-white/10 hover:border-cyan-400/50 text-white'
                }`}
              >
                <span className="text-sm font-semibold">MQTT.org — Publish/Subscribe Protocol</span>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM NAVIGATION & CTA */}
      <section className={`py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 ${bandAlt}`}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            type="button"
            onClick={() => onNavigateToProject('norraq-style')}
            className={`p-6 sm:p-7 rounded-3xl ${cardSurface} text-left flex items-center justify-between gap-4 cursor-pointer group hover:-translate-y-0.5 transition-all`}
          >
            <div>
              <span className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'NESTE CASE STUDY' : 'NEXT CASE STUDY'}
              </span>
              <div className={`text-xl font-display font-bold ${headingText}`}>NORRAQ Style</div>
              <p className={`text-xs sm:text-sm mt-1 ${mutedText}`}>
                {language === 'no'
                  ? 'Digital matching-, booking- og chatplattform for skjønnhetsbransjen'
                  : 'Digital matching, booking, and chat platform for beauty professionals'}
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
                {language === 'no'
                  ? 'Har du en idé som krever mer enn bare en app?'
                  : 'Planning an app with backend or IoT integration?'}
              </h3>
              <p className={`text-xs sm:text-sm mt-1 ${mutedText}`}>
                {language === 'no'
                  ? 'Vi hjelper deg å definere riktig arkitektur og bygge løsningen steg for steg.'
                  : 'Talk with Geton AS to scope the right architecture and roadmap.'}
              </p>
            </div>
            <button
              type="button"
              onClick={onStartProject}
              className="px-6 py-3 rounded-full text-sm font-semibold text-white btn-cyan-gradient shrink-0 cursor-pointer inline-flex items-center gap-2"
            >
              <span>{language === 'no' ? 'Start et prosjekt' : 'Start a Project'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer onSelectTab={onNavigateToTab} onGetStarted={onStartProject} />
    </div>
  );
};
