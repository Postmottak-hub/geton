import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Search,
  UserCheck,
  CalendarCheck,
  MessageSquare,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Info,
  Sparkles,
} from 'lucide-react';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { ServiceSlug } from '../data/services.ts';

interface NorraqStyleCaseStudyPageProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
  onNavigateToTab: (tab: string) => void;
  onNavigateToService?: (slug: ServiceSlug) => void;
  onStartProject: () => void;
}

export const NorraqStyleCaseStudyPage: React.FC<NorraqStyleCaseStudyPageProps> = ({
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

  const userGroups =
    language === 'no'
      ? [
          {
            role: 'Studenter og lærlinger',
            desc: 'Kan finne modeller med ønsket hårlengde, hårtype eller behandlingsinteresse til undervisning, øving og svenneprøve.',
          },
          {
            role: 'Modeller',
            desc: 'Kan registrere interesser, geografisk sted og relevante opplysninger for å bli oppdaget av aktuelle salonger og utøvere.',
          },
          {
            role: 'Frisører og skjønnhetsutøvere',
            desc: 'Kan søke målrettet etter modeller til klipp, farge, makeup, bryn, vipper, hudpleie, kurs og porteføljearbeid.',
          },
          {
            role: 'Salonger, klinikker og skoler',
            desc: 'Kan organisere modellbehov på ett sted og presentere tjenester og virksomhetsinformasjon profesjonelt.',
          },
        ]
      : [
          {
            role: 'Students & Apprentices',
            desc: 'Find models matching specific hair length, type, or treatment criteria for practice sessions and practical exams.',
          },
          {
            role: 'Models',
            desc: 'Create structured profiles listing treatment interests, city, and availability to connect with practitioners.',
          },
          {
            role: 'Stylists & Beauty Artists',
            desc: 'Search directly for hair, nail, makeup, brow, lash, or skincare models for portfolio shoots and courses.',
          },
          {
            role: 'Salons, Clinics & Schools',
            desc: 'Coordinate recurring model demand while showcasing services and verified clinic credentials.',
          },
        ];

  const keyFeatures =
    language === 'no'
      ? [
          {
            icon: Search,
            title: 'Smart søk og geografisk matching',
            desc: 'Filtrer på behandlingstype, område og relevante egenskaper som hårtype, lengde og farge for raskere lokale treff.',
          },
          {
            icon: UserCheck,
            title: 'Profiler tilpasset rollen',
            desc: 'Strukturerte profiler gjør det enkelt for modell og utøver å vurdere om behandlingen passer før kontakt opprettes.',
          },
          {
            icon: CalendarCheck,
            title: 'Forespørsler og booking',
            desc: 'Strukturerte bookingforespørsler med behandling, sted og ønsket tidspunkt – langt mer ryddig enn løse meldingsgrupper.',
          },
          {
            icon: MessageSquare,
            title: 'Privat chat og varsler',
            desc: 'Direkte kommunikasjon og statusoppdateringer samlet rundt hver avtale så forventninger og praktiske detaljer avklares trygt.',
          },
          {
            icon: ShieldCheck,
            title: 'Verifisering og vurderinger',
            desc: 'Tillitsmekanismer med verifiserte profiler og gjensidige vurderinger skaper trygghet når personer møtes for første gang.',
          },
          {
            icon: Building2,
            title: 'Funksjoner for salonger & klinikker',
            desc: 'Egen presentasjon av tjenester, portefølje og bedriftsinfo tilpasset både individuelle utøvere og etablerte aktører.',
          },
        ]
      : [
          {
            icon: Search,
            title: 'Smart Geo-Matching Search',
            desc: 'Filter candidates by treatment category, city, and hair/style attributes to surface realistic local matches quickly.',
          },
          {
            icon: UserCheck,
            title: 'Role-Specific Profiles',
            desc: 'Tailored profile fields help models and stylists confirm compatibility before starting a conversation.',
          },
          {
            icon: CalendarCheck,
            title: 'Structured Booking Requests',
            desc: 'Formal booking proposals include treatment details, location, and proposed time instead of scattered social messages.',
          },
          {
            icon: MessageSquare,
            title: 'Private Chat & Alerts',
            desc: 'Integrated messaging tied directly to the booking keeps preparation and scheduling organized in one thread.',
          },
          {
            icon: ShieldCheck,
            title: 'Verification & Reviews',
            desc: 'Profile verification indicators and mutual ratings build transparency before two parties meet in person.',
          },
          {
            icon: Building2,
            title: 'Clinic & Salon Tools',
            desc: 'Dedicated company profiles supporting portfolios, service overviews, and organized multi-student bookings.',
          },
        ];

  const userJourney =
    language === 'no'
      ? [
          { step: '01', title: 'Opprett profil', desc: 'Registrer deg som modell, student eller profesjonell.' },
          { step: '02', title: 'Legg inn behov', desc: 'Fyll inn sted, tilgjengelighet og behandlingsønsker.' },
          { step: '03', title: 'Søk etter treff', desc: 'Finn relevante personer ut fra oppgave og område.' },
          { step: '04', title: 'Send forespørsel', desc: 'Beskriv behandling, dato og oppmøtested tydelig.' },
          { step: '05', title: 'Bekreft i chat', desc: 'Godkjenn avtalen og avklar detaljer direkte.' },
          { step: '06', title: 'Gjennomfør time', desc: 'Modell og utøver møtes til avtalt behandling.' },
          { step: '07', title: 'Gi vurdering', desc: 'Gjensidig tilbakemelding styrker tilliten videre.' },
        ]
      : [
          { step: '01', title: 'Create Profile', desc: 'Register as a model, student, or salon professional.' },
          { step: '02', title: 'Set Preferences', desc: 'Add city, availability, and relevant treatment criteria.' },
          { step: '03', title: 'Match & Filter', desc: 'Browse relevant candidates matched to your task.' },
          { step: '04', title: 'Send Request', desc: 'Specify treatment details, location, and proposed slot.' },
          { step: '05', title: 'Confirm in Chat', desc: 'Approve the booking and align practical questions.' },
          { step: '06', title: 'Complete Session', desc: 'Meet safely at the agreed salon or school location.' },
          { step: '07', title: 'Leave Feedback', desc: 'Share verified post-appointment reviews.' },
        ];

  const considerations =
    language === 'no'
      ? [
          'UX/UI-design: Enkel vei fra registrering til første relevante handling',
          'Rollebaserte opplevelser: Grensesnitt tilpasset modell, student eller klinikk',
          'Søk og filtrering: Relevante treff fremfor støy og manuell leting',
          'Bookingflyt: Tydelige statuser, forespørsler og bekreftelser',
          'Kommunikasjon: Samlet chat knyttet direkte til avtalen',
          'Personvern og tillit: Bevisst håndtering av profiler, bilder og kontakt',
        ]
      : [
          'UX/UI design: Minimal friction from registration to first relevant match',
          'Role-based views tailored to models, trainees, and business clinics',
          'Focused search filters avoiding noisy, unstructured social feeds',
          'Clear booking state transitions from request to confirmation',
          'Contextual conversation threads linked directly to each appointment',
          'Privacy-conscious handling of profile photos and contact details',
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
                {language === 'no' ? 'Kundecase · Digital plattform' : 'Case Study · Digital Platform'}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${pillClass}`}>
                Beauty Tech · Matching & Booking
              </span>
            </div>
          </div>

          <div className="max-w-4xl space-y-4">
            <span className={`text-xs font-semibold tracking-[0.2em] uppercase block ${eyebrowText}`}>
              {language === 'no' ? 'PROSJEKT · BEAUTY TECH' : 'PROJECT · BEAUTY TECH PLATFORM'}
            </span>
            <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] [text-wrap:balance] ${headingText}`}>
              {language === 'no'
                ? 'NORRAQ Style – En smartere digital plattform for skjønnhetsbransjen'
                : 'NORRAQ Style – A smarter digital platform for the beauty industry'}
            </h1>
            <p className={`text-base sm:text-xl leading-relaxed max-w-3xl ${mutedText}`}>
              {language === 'no'
                ? 'Fra å lete etter modeller i sosiale medier til å finne riktig person, avtale behandling og kommunisere på ett sted. NORRAQ Style samler studenter, lærlinger, modeller, frisører og salonger i én strukturert brukerreise.'
                : 'Moving beyond scattered social media groups to match beauty students, apprentices, stylists, salons, and models in one streamlined platform with smart discovery, booking, and messaging.'}
            </p>
          </div>

          {/* 4-Column Responsive Metadata Bar */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl ${cardSurface}`}>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Plattform' : 'Platform'}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>NORRAQ Style</div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Kategori' : 'Category'}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>
                {language === 'no' ? 'Beauty Tech & Formidling' : 'Beauty Tech & Marketplace'}
              </div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Funksjonsområder' : 'Core Domains'}
              </div>
              <div className={`text-sm font-semibold ${mutedText}`}>
                Matching · Booking · Privat chat · Verifisering
              </div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Nettside' : 'Official Website'}
              </div>
              <a
                href="https://norraqstyle.no/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-bold inline-flex items-center gap-1 hover:underline ${eyebrowText}`}
              >
                <span>norraqstyle.no</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE IMAGE + CONCEPT DISCLAIMER */}
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
              src="/assets/aistudio/NORRAQ_Style__Fra_matching_til_booking_00b2d200.png"
              alt={
                language === 'no'
                  ? 'Konseptillustrasjon for NORRAQ Style med salongmotiv og mobilskjermer som viser søk, profil og booking'
                  : 'Concept UI showcase for NORRAQ Style showing model discovery, profile, and booking chat screens'
              }
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
                ? 'Illustrasjonen viser et konseptuelt design med eksempler på appgrensesnitt og er ikke et dokumentert skjermbilde fra den ferdige plattformen.'
                : 'Notice: The visual above is a conceptual UI illustration demonstrating user journeys rather than a documented screenshot of the production release.'}
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 1: CHALLENGE & 4 USER ROLES */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1440px] mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl ${cardSurface} space-y-4`}>
              <span className={`text-xs font-semibold uppercase tracking-wider block ${eyebrowText}`}>
                {language === 'no' ? 'UTFORDRINGEN' : 'THE CHALLENGE'}
              </span>
              <h2 className={`text-2xl sm:text-3xl font-display font-bold ${headingText}`}>
                {language === 'no'
                  ? 'Riktig modell, til riktig behandling, på riktig sted'
                  : 'Matching the right model, treatment, and schedule'}
              </h2>
              <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
                {language === 'no'
                  ? 'For en frisørstudent eller lærling er praktisk erfaring avgjørende. Ofte trengs modeller med bestemt hårlengde, hårtype eller utgangsfarge til klipp, farge eller eksamensarbeid – og tilsvarende gjelder for negler, makeup, bryn, vipper og hudpleie.'
                  : 'Hands-on experience is critical for beauty trainees and stylists, often requiring models with specific hair types or treatment interests.'}
              </p>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                {language === 'no'
                  ? 'Når letingen skjer via venner og åpne grupper i sosiale medier, oppstår uoversiktlige meldinger og mye manuell koordinering. NORRAQ Style samler hele prosessen i én strukturert reise.'
                  : 'Relying on informal social posts creates messy message threads and uncertainty around availability. NORRAQ Style replaces guesswork with structured matching.'}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {userGroups.map((group, idx) => (
                <div key={idx} className={`p-6 rounded-2xl ${cardSurface} space-y-2`}>
                  <span className={`text-xs font-bold uppercase tracking-wider block ${eyebrowText}`}>
                    {language === 'no' ? `Brukergruppe 0${idx + 1}` : `Role 0${idx + 1}`}
                  </span>
                  <h3 className={`text-lg font-display font-bold ${headingText}`}>{group.role}</h3>
                  <p className={`text-sm leading-relaxed ${mutedText}`}>{group.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 6 CORE PLATFORM FEATURES */}
      <section className={`py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 ${bandAlt}`}>
        <div className="max-w-[1440px] mx-auto space-y-10">
          <div className="max-w-2xl">
            <span className={`text-xs font-semibold tracking-[0.2em] uppercase block mb-2.5 ${eyebrowText}`}>
              {language === 'no' ? 'VIKTIGE FUNKSJONER' : 'KEY CAPABILITIES'}
            </span>
            <h2 className={`text-2xl sm:text-4xl font-display font-extrabold ${headingText}`}>
              {language === 'no'
                ? 'Tilpasset hele arbeidsflyten før en behandling'
                : 'Built around every step before and after treatment'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className={`p-6 rounded-2xl ${cardSurface} space-y-3`}>
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
                      isLight
                        ? 'bg-neutral-900 border-neutral-900 text-white'
                        : 'bg-cyan-950/70 border-cyan-400/40 text-cyan-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-lg font-display font-bold ${headingText}`}>{feat.title}</h3>
                  <p className={`text-sm leading-relaxed ${mutedText}`}>{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: 7-STEP USER JOURNEY */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1440px] mx-auto space-y-8">
          <div className="max-w-2xl">
            <span className={`text-xs font-semibold tracking-[0.2em] uppercase block mb-2.5 ${eyebrowText}`}>
              {language === 'no' ? 'BRUKERREISEN' : 'USER JOURNEY'}
            </span>
            <h2 className={`text-2xl sm:text-4xl font-display font-extrabold ${headingText}`}>
              {language === 'no'
                ? 'Fra opprettet profil til gjennomført avtale'
                : 'From onboarding to completed appointment'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {userJourney.map((step) => (
              <div key={step.step} className={`p-5 rounded-2xl ${cardSurface} flex flex-col justify-between`}>
                <div>
                  <span className={`text-xs font-bold tracking-wider block mb-2 ${eyebrowText}`}>
                    {language === 'no' ? `Steg ${step.step}` : `Step ${step.step}`}
                  </span>
                  <h3 className={`text-base font-display font-bold mb-1.5 ${headingText}`}>{step.title}</h3>
                  <p className={`text-xs leading-relaxed ${mutedText}`}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ENGINEERING CONSIDERATIONS, OFFICIAL LINKS & EDITORIAL NOTE */}
      <section className={`py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 ${bandAlt}`}>
        <div className="max-w-[1440px] mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl ${cardSurface} space-y-5`}>
              <div className="flex items-center gap-2">
                <Sparkles className={`w-4 h-4 ${eyebrowText}`} />
                <span className={`text-xs font-semibold uppercase tracking-wider ${eyebrowText}`}>
                  {language === 'no' ? 'DIGITAL PRODUKTUTVIKLING' : 'DIGITAL PRODUCT PRINCIPLES'}
                </span>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-display font-bold ${headingText}`}>
                {language === 'no'
                  ? 'Mer enn et pent grensesnitt'
                  : 'Combining usability with multi-role workflows'}
              </h2>
              <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
                {language === 'no'
                  ? 'Bransjetilpassede plattformer skaper størst verdi når de organiserer en prosess som allerede finnes – i stedet for å legge kompleks teknologi oppå et problem uten å forenkle hverdagen.'
                  : 'Industry-focused marketplaces succeed when they organize existing day-to-day workflows around clear roles, predictable statuses, and trust.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {considerations.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${eyebrowText}`} />
                    <span className={mutedText}>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl ${cardSurface} space-y-4`}>
              <span className={`text-xs font-semibold uppercase tracking-wider block ${eyebrowText}`}>
                {language === 'no' ? 'UTFORSK NORRAQ STYLE' : 'OFFICIAL RESOURCES'}
              </span>
              <h3 className={`text-xl font-display font-bold ${headingText}`}>
                {language === 'no' ? 'Offisielle lenker' : 'Official links'}
              </h3>
              <div className="space-y-3">
                <a
                  href="https://norraqstyle.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                    isLight
                      ? 'bg-[#fafaf9] border-neutral-200 hover:border-neutral-400 text-neutral-900'
                      : 'bg-white/[0.03] border-white/10 hover:border-cyan-400/50 text-white'
                  }`}
                >
                  <span className="text-sm font-semibold">norraqstyle.no</span>
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>
                <a
                  href="https://norraqstyle.no/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                    isLight
                      ? 'bg-[#fafaf9] border-neutral-200 hover:border-neutral-400 text-neutral-900'
                      : 'bg-white/[0.03] border-white/10 hover:border-cyan-400/50 text-white'
                  }`}
                >
                  <span className="text-sm font-semibold">Om NORRAQ Style</span>
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>
                <a
                  href="https://norraqstyle.no/for/klinikker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                    isLight
                      ? 'bg-[#fafaf9] border-neutral-200 hover:border-neutral-400 text-neutral-900'
                      : 'bg-white/[0.03] border-white/10 hover:border-cyan-400/50 text-white'
                  }`}
                >
                  <span className="text-sm font-semibold">Informasjon for klinikker</span>
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>
              </div>

              <div
                className={`mt-4 p-4 rounded-xl border text-xs leading-relaxed ${
                  isLight
                    ? 'bg-[#fafaf9] border-neutral-200 text-neutral-600'
                    : 'bg-white/[0.02] border-white/10 text-slate-400'
                }`}
              >
                <strong className={`block mb-1 ${headingText}`}>
                  {language === 'no' ? 'Kilder og redaksjonell merknad' : 'Sources & Editorial Note'}
                </strong>
                {language === 'no'
                  ? 'Funksjonsbeskrivelsene bygger på NORRAQ Styles offisielle nettside, om-side og informasjon for klinikker. De tekniske avsnittene omtaler generelle hensyn ved utvikling av slike plattformer, og angir ikke bestemte programmeringsspråk, arkitekturvalg, lanseringsresultater, antall kunder eller Getons eksakte kontraktsrolle i prosjektet.'
                  : 'Feature descriptions are based on NORRAQ Style’s official website, about page, and clinic pages. Technical considerations discuss general marketplace engineering practices without claiming specific stack choices, customer volume, launch metrics, or Geton’s exact contractual role.'}
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION & CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <button
              type="button"
              onClick={() => onNavigateToProject('frakt360')}
              className={`p-6 sm:p-7 rounded-3xl ${cardSurface} text-left flex items-center justify-between gap-4 cursor-pointer group hover:-translate-y-0.5 transition-all`}
            >
              <div>
                <span className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${eyebrowText}`}>
                  {language === 'no' ? 'NESTE CASE STUDY' : 'NEXT CASE STUDY'}
                </span>
                <div className={`text-xl font-display font-bold ${headingText}`}>Frakt360</div>
                <p className={`text-xs sm:text-sm mt-1 ${mutedText}`}>
                  {language === 'no'
                    ? 'Komplett norsk fraktplattform og TMS for moderne bedrifter'
                    : 'Complete Norwegian shipping platform and logistics suite'}
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
                    ? 'Har du en idé til en digital plattform?'
                    : 'Have an idea for a digital platform?'}
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${mutedText}`}>
                  {language === 'no'
                    ? 'Kontakt Geton AS for å diskutere ditt neste prosjekt.'
                    : 'Contact Geton AS to discuss how to turn your idea into software.'}
                </p>
              </div>
              <button
                type="button"
                onClick={onStartProject}
                className="px-6 py-3 rounded-full text-sm font-semibold text-white btn-cyan-gradient shrink-0 cursor-pointer inline-flex items-center gap-2"
              >
                <span>{language === 'no' ? 'Ta kontakt' : 'Start a Project'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer onSelectTab={onNavigateToTab} onGetStarted={onStartProject} />
    </div>
  );
};
