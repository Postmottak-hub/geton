import React, { useEffect } from 'react';
import {
  ArrowRight,
  Heart,
  Activity,
  ShieldCheck,
  Calendar,
  ExternalLink,
  Globe,
} from 'lucide-react';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { ServiceSlug } from '../data/services.ts';

interface VestlandskHjertesenterCaseStudyPageProps {
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
  onNavigateToTab: (tab: string) => void;
  onNavigateToService?: (slug: ServiceSlug) => void;
  onStartProject: () => void;
}

export const VestlandskHjertesenterCaseStudyPage: React.FC<VestlandskHjertesenterCaseStudyPageProps> = ({
  onNavigateToTab,
  onNavigateToService,
  onStartProject,
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const diagnosticServices = language === 'no' ? [
    {
      title: 'Hjerteultralyd (Ekkokardiografi)',
      desc: 'Avansert ultralydundersøkelse av hjertets pumpefunksjon, klaffer og dimensjoner med høyoppløselig bildekvalitet.',
      badge: 'Billeddiagnostikk',
    },
    {
      title: 'Arbeids-EKG (Belastningstest)',
      desc: 'Måling av hjertets elektriske aktivitet under fysisk anstrengelse på ergometersykkel for utredning av brystsmerter.',
      badge: 'Funksjonstest',
    },
    {
      title: '24-timers EKG (Holter-monitorering)',
      desc: 'Kontinuerlig registrering av hjerterytmen over ett eller flere døgn for å fange opp uregelmessigheter og hjertebank.',
      badge: 'Rytmediagnostikk',
    },
    {
      title: '24-timers Blodtrykksmåling',
      desc: 'Presis døgnmåling av blodtrykk for nøyaktig diagnostikk og optimalisering av medikamentell behandling.',
      badge: 'Døgnregistrering',
    },
    {
      title: 'Kardiologisk konsultasjon & rådgivning',
      desc: 'Grundig samtale og klinisk vurdering av kardiolog med umiddelbar tilbakemelding og skreddersydd behandlingsplan.',
      badge: 'Spesialistvurdering',
    },
    {
      title: 'Pacemaker-kontroll',
      desc: 'Teknisk og medisinsk kontroll av implantert pacemaker eller hjertestarter (ICD) med telemetrisk avlesning.',
      badge: 'Enhetskontroll',
    },
  ] : [
    {
      title: 'Echocardiography (Ultrasound)',
      desc: 'Advanced cardiac ultrasound evaluating heart muscle contractility, valve function, and structural dimensions.',
      badge: 'Imaging',
    },
    {
      title: 'Stress ECG (Bicycle Ergometry)',
      desc: 'Monitoring electrical rhythm and coronary perfusion during graded physical exertion on stationary ergometer.',
      badge: 'Stress Test',
    },
    {
      title: '24-hour Holter Monitoring',
      desc: 'Continuous multi-lead rhythm surveillance over 24–72 hours to detect intermittent palpitations and arrhythmias.',
      badge: 'Rhythm Telemetry',
    },
    {
      title: '24-hour Ambulatory Blood Pressure',
      desc: 'Automated 24h pressure logging to diagnose masked hypertension and optimize medication titration.',
      badge: 'Vascular Diagnostic',
    },
    {
      title: 'Comprehensive Cardiologist Consultation',
      desc: 'In-depth consultation with senior cardiologist, including immediate clinical findings and personalized advice.',
      badge: 'Clinical Care',
    },
    {
      title: 'Pacemaker & ICD Interrogation',
      desc: 'Specialized electronic calibration and battery evaluation of implanted rhythm control systems.',
      badge: 'Device Protocol',
    },
  ];

  return (
    <div className="min-h-screen bg-[#040816] text-white selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      {/* Persistent Top Menu */}
      <div className="sticky top-0 z-50 w-full bg-[#040816]/90 backdrop-blur-xl border-b border-white/10">
        <Navbar
          activeTab="projects"
          onSelectTab={onNavigateToTab}
          onSelectServiceSlug={onNavigateToService}
          onGetStarted={onStartProject}
        />
      </div>

      {/* 
        HERO SECTION: METADATA & TITLE
      */}
      <section className="relative pt-12 pb-16 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-teal-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto relative z-10">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950/70 border border-teal-400/40 text-[11px] font-semibold tracking-wider text-teal-300 uppercase mb-6">
            <Heart className="w-3.5 h-3.5 text-teal-400 fill-teal-400/20" />
            <span>CASE STUDY // GETON HEALTHCARE SOLUTIONS</span>
          </div>

          {/* Title & Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white mb-6 leading-[1.08]">
            Vestlandsk Hjertesenter
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-teal-200/90 max-w-4xl mb-8 leading-snug">
            {language === 'no'
              ? 'Spesialistkompetanse for ditt hjerte – moderne digital pasientportal og timebooking.'
              : 'Specialist cardiac care in Bergen – modern digital patient portal and seamless appointment booking.'}
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
            {language === 'no'
              ? 'Vestlandsk Hjertesenter er en privat spesialistklinikk for hjerte- og karsykdommer i Bergen. Geton designet og utviklet en helhetlig digital plattform som kombinerer trygghetsvekkende skandinavisk helsedesign med direkte timebooking og oversikt over kardiologiske undersøkelser.'
              : 'Vestlandsk Hjertesenter is a private cardiology specialist clinic in Bergen. Geton designed and engineered a comprehensive digital healthcare web platform combining reassuring Scandinavian design with direct appointment booking and clear examination overviews.'}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="https://vestlandskhjertesenter.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-teal-500/25 transition-all"
            >
              <span>{language === 'no' ? 'Besøk vestlandskhjertesenter.no' : 'Visit vestlandskhjertesenter.no'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={onStartProject}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs sm:text-sm font-semibold text-white transition-all cursor-pointer"
            >
              <span>{language === 'no' ? 'Diskuter lignende prosjekt' : 'Discuss a Similar Project'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Project Metadata Specs Card */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                {language === 'no' ? 'KLIENT' : 'CLIENT'}
              </div>
              <div className="text-sm font-semibold text-white">
                Vestlandsk Hjertesenter
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                {language === 'no' ? 'BRANSJE' : 'INDUSTRY'}
              </div>
              <div className="text-sm font-semibold text-teal-300">
                {language === 'no' ? 'Kardiologi & Spesialisthelse' : 'Cardiology & Healthcare'}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                {language === 'no' ? 'LEVERANSE' : 'DELIVERABLES'}
              </div>
              <div className="text-sm font-semibold text-white">
                UX/UI · Web · Booking · SEO
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                {language === 'no' ? 'NETTADRESSE' : 'LIVE DOMAIN'}
              </div>
              <a
                href="https://vestlandskhjertesenter.no/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-teal-300 hover:text-teal-200 underline flex items-center gap-1"
              >
                <span>vestlandskhjertesenter.no</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 
        STUDIO MOCKUP HERO MEDIA
      */}
      <section className="py-12 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-white/10 bg-[#060c20]">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-teal-500/30 shadow-[0_20px_60px_rgba(20,184,166,0.2)] bg-slate-950">
            <img
              src="/assets/images/vestlandsk_hjertesenter_mockup_1793710496839.webp"
              alt="Vestlandsk Hjertesenter Modern iMac and iPad Clinic Mockup"
              width={1280}
              height={714}
              decoding="async"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 
        SECTION 1: THE CHALLENGE
      */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-400/30 text-xs font-semibold text-teal-300 uppercase tracking-wider">
              {language === 'no' ? 'UTFORDRINGEN' : 'THE CHALLENGE'}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
              {language === 'no'
                ? 'Trygghet, tilgjengelighet og medisinsk presisjon i det digitale møtet'
                : 'Instilling trust, clarity, and rapid medical access digitally'}
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'no'
                ? 'Pasienter som opplever symptomer fra hjertet – som brystsmerter, hjertebank, tungpustethet eller svimmelhet – trenger umiddelbar trygghet, enkel forståelse av hva undersøkelsene innebærer, og en ryddig vei til timebestilling på nett.'
                : 'Patients experiencing cardiovascular symptoms such as chest tightness, palpitations, dyspnea or dizziness need rapid reassurance, crystal-clear information about diagnostic tests, and a straightforward online booking flow.'}
            </p>

            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'no'
                ? 'Tidligere klinikknettsider var ofte preget av tungt medisinsk fagspråk, utydelige priser og tungvinte henvendelsesskjemaer. Vestlandsk Hjertesenter ønsket et moderne, profesjonelt digitalt ansikt som reflekterer klinikkens høye faglige nivå og varme pasientfokus.'
                : 'Traditional medical clinic websites frequently suffer from complex clinical jargon, hidden fees, and convoluted inquiry forms. Vestlandsk Hjertesenter needed a refined digital presence reflecting their premier clinical expertise and patient-first ethos.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-teal-950/40 border border-teal-500/30">
                <div className="text-lg font-extrabold text-teal-300 mb-1">
                  {language === 'no' ? 'Direkte timebooking' : 'Direct Booking'}
                </div>
                <div className="text-xs text-slate-300">
                  {language === 'no'
                    ? 'Enkel bestilling av konsultasjon på mobil og desktop'
                    : 'Streamlined online scheduling on mobile and desktop'}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-500/30">
                <div className="text-lg font-extrabold text-sky-300 mb-1">
                  {language === 'no' ? 'Lokal synlighet' : 'Local Search'}
                </div>
                <div className="text-xs text-slate-300">
                  {language === 'no'
                    ? 'Teknisk SEO optimalisert for pasienter i Bergen og Vestland'
                    : 'Technical SEO structured for patients in Bergen and Vestland'}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-3 text-teal-300 font-bold text-base mb-2">
                <ShieldCheck className="w-5 h-5 text-teal-400" />
                <span>{language === 'no' ? 'Medisinsk trygghet & personvern' : 'Medical Security & GDPR'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'no'
                  ? 'Streng overholdelse av personvernforordningen (GDPR) og helselovgivning. Ingen sensitiv helseinformasjon sendes i åpne kanaler.'
                  : 'Strict compliance with European healthcare confidentiality and GDPR. Zero sensitive health records stored in unencrypted form.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-3 text-teal-300 font-bold text-base mb-2">
                <Calendar className="w-5 h-5 text-teal-400" />
                <span>{language === 'no' ? 'Rask og enkel timebooking' : 'Direct Booking Protocol'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'no'
                  ? 'Intuitiv bookingkalender der pasienter kan velge ønsket undersøkelse, dato og tidspunkt på 30 sekunder fra mobil.'
                  : 'Streamlined online appointment interface allowing patients to pick examination types and time slots in 30 seconds.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-3 text-teal-300 font-bold text-base mb-2">
                <Globe className="w-5 h-5 text-teal-400" />
                <span>{language === 'no' ? 'Lokal SEO for Bergen & Vestland' : 'Regional Search Dominance'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'no'
                  ? 'Optimalisert innholdsarkitektur som rangerer på topp i Google for kardiolog, hjerteundersøkelse og ultralyd av hjerte i Vestland.'
                  : 'Technical SEO hierarchy ranking top for private cardiologist, echocardiography, and heart check in Western Norway.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        SECTION 2: EXAMINATION PORTFOLIO & CLINICAL SERVICES
      */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-white/10 bg-[#060c20]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-400/30 text-xs font-semibold text-teal-300 uppercase tracking-wider mb-4">
              {language === 'no' ? 'KARDIOLOGISKE UNDERSØKELSER' : 'CARDIAC DIAGNOSTIC SUITE'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
              {language === 'no' ? 'Oversiktlig, pedagogisk og informativt' : 'Clear, Educational & Reassuring'}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              {language === 'no'
                ? 'Hver undersøkelse er forklart med klart språk, hva pasienten kan forvente, hvordan man forbereder seg, og pris.'
                : 'Every procedure is outlined in accessible language, detailing expectations, patient preparation, and pricing.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diagnosticServices.map((service, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-teal-400/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-950/80 border border-teal-400/30 flex items-center justify-center text-teal-300">
                    <Activity className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-teal-300 uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-950/50 border border-teal-400/30">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        BOTTOM CTA BANNER
      */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-[#080f2d] to-[#040816]">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-teal-950/80 via-slate-900/80 to-teal-950/80 border border-teal-500/40 text-center shadow-[0_0_60px_rgba(20,184,166,0.25)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/60 border border-teal-400/40 text-xs font-semibold text-teal-300 uppercase tracking-wider mb-4">
            {language === 'no' ? 'TRENGER DIN KLINIKK EN MODERNE WEBLØSNING?' : 'NEED A HEALTHCARE WEB PLATFORM?'}
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-4">
            {language === 'no'
              ? 'Vi bygger digitale løsninger som skaper tillit og vekst.'
              : 'We build digital platforms that build patient trust and conversions.'}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {language === 'no'
              ? 'Fra medisinske spesialistklinikker til fintech og logistikk – Geton designer og utvikler teknologi tilpasset din virksomhet.'
              : 'From medical specialist clinics to fintech and enterprise logistics – Geton engineers digital products around your operations.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-xl shadow-teal-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{language === 'no' ? 'Få et tilbud på ditt prosjekt' : 'Get a quote for your project'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://vestlandskhjertesenter.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>{language === 'no' ? 'Se Vestlandsk Hjertesenter live' : 'Visit vestlandskhjertesenter.no'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer onSelectTab={onNavigateToTab} onGetStarted={onStartProject} />
    </div>
  );
};
