import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Activity,
  ShieldCheck,
  Calendar,
  ExternalLink,
  Globe,
} from 'lucide-react';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { ServiceSlug } from '../data/services.ts';

interface VestlandskHjertesenterCaseStudyPageProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
  onNavigateToTab: (tab: string) => void;
  onNavigateToService?: (slug: ServiceSlug) => void;
  onStartProject: () => void;
}

export const VestlandskHjertesenterCaseStudyPage: React.FC<VestlandskHjertesenterCaseStudyPageProps> = ({
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
  const highlightBox = isLight
    ? 'bg-[#fafaf9] border border-neutral-200 text-neutral-800'
    : 'bg-white/[0.04] border border-white/10 text-cyan-200';

  const diagnosticServices =
    language === 'no'
      ? [
          {
            title: 'Hjerteultralyd (Ekkokardiografi)',
            desc: 'Grundig ultralydundersøkelse av hjertets pumpefunksjon, klaffer og dimensjoner.',
            badge: 'Billeddiagnostikk',
          },
          {
            title: 'Arbeids-EKG (Belastningstest)',
            desc: 'Måling av hjertets elektriske aktivitet under fysisk anstrengelse på ergometersykkel.',
            badge: 'Funksjonstest',
          },
          {
            title: '24-timers EKG (Holter-monitorering)',
            desc: 'Kontinuerlig registrering av hjerterytmen for å fange opp uregelmessigheter og hjertebank.',
            badge: 'Rytmediagnostikk',
          },
          {
            title: '24-timers blodtrykksmåling',
            desc: 'Presis døgnmåling av blodtrykk for nøyaktig diagnostikk og vurdering av behandling.',
            badge: 'Døgnregistrering',
          },
          {
            title: 'Kardiologisk konsultasjon & rådgivning',
            desc: 'Grundig samtale og klinisk vurdering av kardiolog med tydelig oppfølgingsplan.',
            badge: 'Spesialistvurdering',
          },
          {
            title: 'Pacemaker-kontroll',
            desc: 'Teknisk og medisinsk kontroll av implantert pacemaker eller hjertestarter (ICD).',
            badge: 'Enhetskontroll',
          },
        ]
      : [
          {
            title: 'Echocardiography (Ultrasound)',
            desc: 'Advanced cardiac ultrasound evaluating heart muscle contractility and valve function.',
            badge: 'Imaging',
          },
          {
            title: 'Stress ECG (Bicycle Ergometry)',
            desc: 'Monitoring cardiac rhythm and perfusion during graded physical exertion.',
            badge: 'Stress Test',
          },
          {
            title: '24-Hour Holter Monitoring',
            desc: 'Continuous multi-lead rhythm monitoring to detect intermittent arrhythmias.',
            badge: 'Telemetry',
          },
          {
            title: '24-Hour Ambulatory Blood Pressure',
            desc: 'Automated 24h blood pressure logging for precise clinical evaluation.',
            badge: 'Vascular',
          },
          {
            title: 'Cardiologist Consultation',
            desc: 'Comprehensive specialist consultation with clear immediate feedback.',
            badge: 'Clinical Care',
          },
          {
            title: 'Pacemaker & ICD Checkup',
            desc: 'Technical and medical follow-up for implanted cardiac rhythm devices.',
            badge: 'Device Control',
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
                {language === 'no' ? 'Kundecase · Helse & Klinikk' : 'Case Study · Healthcare'}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${pillClass}`}>
                Bergen · Digital Timebooking
              </span>
            </div>
          </div>

          <div className="max-w-4xl space-y-4">
            <span className={`text-xs font-semibold tracking-[0.2em] uppercase block ${eyebrowText}`}>
              {language === 'no' ? 'CASESTUDIE · SPESIALISTKLINIKK' : 'CASE STUDY · HEALTHCARE WEB'}
            </span>
            <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] ${headingText}`}>
              Vestlandsk Hjertesenter
            </h1>
            <p className={`text-base sm:text-xl leading-relaxed max-w-3xl ${mutedText}`}>
              {language === 'no'
                ? 'Pasientvennlig digital klinikkplattform og direkte timebooking for privat spesialistklinikk innen hjerte- og karsykdommer i Bergen.'
                : 'Patient-focused healthcare web platform and online booking experience for a Bergen specialist cardiology clinic.'}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://vestlandskhjertesenter.no/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white btn-cyan-gradient inline-flex items-center gap-2"
              >
                <span>{language === 'no' ? 'Besøk vestlandskhjertesenter.no' : 'Visit vestlandskhjertesenter.no'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={onStartProject}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold border transition-colors cursor-pointer inline-flex items-center gap-2 ${
                  isLight
                    ? 'bg-white border-neutral-300 text-neutral-900 hover:bg-neutral-100'
                    : 'bg-white/5 border-white/15 text-white hover:bg-white/10'
                }`}
              >
                <span>{language === 'no' ? 'Diskuter lignende prosjekt' : 'Discuss a Similar Project'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4-Column Responsive Metadata Bar */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl ${cardSurface}`}>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Klient' : 'Client'}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>Vestlandsk Hjertesenter</div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Bransje' : 'Industry'}
              </div>
              <div className={`text-sm font-bold ${headingText}`}>
                {language === 'no' ? 'Helse & Kardiologi' : 'Cardiology & Healthcare'}
              </div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Leveranse' : 'Deliverables'}
              </div>
              <div className={`text-sm font-medium ${mutedText}`}>UX/UI · Nettside · Booking · SEO</div>
            </div>
            <div>
              <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${eyebrowText}`}>
                {language === 'no' ? 'Nettadresse' : 'Website'}
              </div>
              <a
                href="https://vestlandskhjertesenter.no/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-bold inline-flex items-center gap-1 hover:underline ${eyebrowText}`}
              >
                <span>vestlandskhjertesenter.no</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MOCKUP MEDIA BANNER */}
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
              src="/assets/images/vestlandsk_hjertesenter_mockup_1793710496839.webp"
              alt="Vestlandsk Hjertesenter nettside og timebooking"
              width={1280}
              height={714}
              decoding="async"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: CHALLENGE & ARCHITECTURE */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          <div className="lg:col-span-7 space-y-5">
            <span className={`text-xs font-semibold uppercase tracking-wider block ${eyebrowText}`}>
              {language === 'no' ? 'UTFORDRINGEN' : 'THE CHALLENGE'}
            </span>
            <h2 className={`text-2xl sm:text-4xl font-display font-extrabold leading-tight ${headingText}`}>
              {language === 'no'
                ? 'Trygghet, tilgjengelighet og medisinsk presisjon i det digitale møtet'
                : 'Instilling trust, clarity, and seamless patient access online'}
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
              {language === 'no'
                ? 'Pasienter som opplever symptomer fra hjertet – som brystsmerter, hjertebank eller svimmelhet – trenger umiddelbar trygghet, enkel forståelse av undersøkelsene og en rask vei til timebestilling på nett.'
                : 'Patients seeking specialist cardiac diagnostics need calm reassurance, clear descriptions of examinations, and a straightforward way to book appointments online.'}
            </p>
            <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
              {language === 'no'
                ? 'Vestlandsk Hjertesenter ønsket et rolig, tillitsvekkende og brukervennlig skandinavisk design fritt for tungt fagspråk og uoversiktlige skjemaer.'
                : 'Vestlandsk Hjertesenter wanted a reassuring Nordic design language free from confusing jargon and clunky inquiry forms.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className={`p-5 rounded-2xl border ${highlightBox}`}>
                <div className={`text-base font-bold mb-1 ${headingText}`}>
                  {language === 'no' ? 'Direkte timebooking' : 'Direct Booking'}
                </div>
                <p className={`text-xs leading-relaxed ${mutedText}`}>
                  {language === 'no'
                    ? 'Enkel bestilling av konsultasjon på mobil og desktop uten unødvendige steg.'
                    : 'Frictionless online scheduling across mobile phones and desktop browsers.'}
                </p>
              </div>
              <div className={`p-5 rounded-2xl border ${highlightBox}`}>
                <div className={`text-base font-bold mb-1 ${headingText}`}>
                  {language === 'no' ? 'Lokal synlighet' : 'Local SEO'}
                </div>
                <p className={`text-xs leading-relaxed ${mutedText}`}>
                  {language === 'no'
                    ? 'Teknisk og redaksjonell SEO optimalisert for pasienter i Bergen og Vestland.'
                    : 'Technical and local search structure helping patients in Bergen and Western Norway.'}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className={`p-6 rounded-2xl ${cardSurface} space-y-2`}>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className={`w-5 h-5 ${eyebrowText}`} />
                <h3 className={`text-base font-bold ${headingText}`}>
                  {language === 'no' ? 'Medisinsk trygghet & personvern' : 'Patient Privacy & GDPR'}
                </h3>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${mutedText}`}>
                {language === 'no'
                  ? 'Ryddig informasjonshåndtering tilpasset norske personvernkrav – ingen sensitiv helseinfo håndteres i usikre åpne kanaler.'
                  : 'Privacy-first patient pathways ensuring sensitive medical communications stay inside dedicated clinical channels.'}
              </p>
            </div>

            <div className={`p-6 rounded-2xl ${cardSurface} space-y-2`}>
              <div className="flex items-center gap-2.5">
                <Calendar className={`w-5 h-5 ${eyebrowText}`} />
                <h3 className={`text-base font-bold ${headingText}`}>
                  {language === 'no' ? 'Mobilvennlig timebestilling' : 'Mobile Appointment Flow'}
                </h3>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${mutedText}`}>
                {language === 'no'
                  ? 'Intuitiv bestilling hvor pasienter enkelt kan velge riktig undersøkelse og ønsket tidspunkt direkte fra telefonen.'
                  : 'Streamlined flow letting patients select examination types and available time slots straight from mobile.'}
              </p>
            </div>

            <div className={`p-6 rounded-2xl ${cardSurface} space-y-2`}>
              <div className="flex items-center gap-2.5">
                <Globe className={`w-5 h-5 ${eyebrowText}`} />
                <h3 className={`text-base font-bold ${headingText}`}>
                  {language === 'no' ? 'Lokal SEO for Bergen & Vestland' : 'Bergen & Regional Search'}
                </h3>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${mutedText}`}>
                {language === 'no'
                  ? 'Tydelig sidestruktur for kardiologiske undersøkelser, ultralyd av hjerte og spesialisttjenester på Vestlandet.'
                  : 'Clear service pages targeting cardiologist consultations and diagnostic imaging across Western Norway.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC SERVICES OVERVIEW */}
      <section className={`py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 ${bandAlt}`}>
        <div className="max-w-[1440px] mx-auto space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className={`text-xs font-semibold uppercase tracking-wider block ${eyebrowText}`}>
              {language === 'no' ? 'KARDIOLOGISKE UNDERSØKELSER' : 'DIAGNOSTIC SERVICES'}
            </span>
            <h2 className={`text-2xl sm:text-4xl font-display font-extrabold ${headingText}`}>
              {language === 'no' ? 'Oversiktlig, pedagogisk og informativt' : 'Clear, Educational & Reassuring'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diagnosticServices.map((service, idx) => (
              <div key={idx} className={`p-6 rounded-2xl ${cardSurface} space-y-3`}>
                <div className="flex items-center justify-between gap-2">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
                      isLight
                        ? 'bg-neutral-900 border-neutral-900 text-white'
                        : 'bg-cyan-950/70 border-cyan-400/40 text-cyan-300'
                    }`}
                  >
                    <Activity className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${pillClass}`}>
                    {service.badge}
                  </span>
                </div>
                <h3 className={`text-base font-display font-bold ${headingText}`}>{service.title}</h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${mutedText}`}>{service.desc}</p>
              </div>
            ))}
          </div>

          {/* BOTTOM NAVIGATION & CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <button
              type="button"
              onClick={() => onNavigateToProject('geton-scooters')}
              className={`p-6 sm:p-7 rounded-3xl ${cardSurface} text-left flex items-center justify-between gap-4 cursor-pointer group hover:-translate-y-0.5 transition-all`}
            >
              <div>
                <span className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${eyebrowText}`}>
                  {language === 'no' ? 'NESTE CASE STUDY' : 'NEXT CASE STUDY'}
                </span>
                <div className={`text-xl font-display font-bold ${headingText}`}>Geton Scooters</div>
                <p className={`text-xs sm:text-sm mt-1 ${mutedText}`}>
                  {language === 'no'
                    ? 'Fra mobilapp til komplett IoT-plattform med MQTT og geofencing'
                    : 'From mobile app to IoT micro-mobility platform with MQTT & geofencing'}
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
                  {language === 'no' ? 'Trenger din bedrift en ny nettside?' : 'Planning a new website?'}
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${mutedText}`}>
                  {language === 'no'
                    ? 'Vi utvikler skreddersydde nettsider som bygger tillit og konverterer.'
                    : 'We build calm, conversion-focused websites built for real trust.'}
                </p>
              </div>
              <button
                type="button"
                onClick={onStartProject}
                className="px-6 py-3 rounded-full text-sm font-semibold text-white btn-cyan-gradient shrink-0 cursor-pointer inline-flex items-center gap-2"
              >
                <span>{language === 'no' ? 'Få et tilbud' : 'Get a quote'}</span>
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
