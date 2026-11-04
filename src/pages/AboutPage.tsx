import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Users,
  Code2,
  Cpu,
  Smartphone,
  Globe,
  Award,
  CheckCircle2,
  Calendar,
  Building2,
  Layers,
  HeartHandshake,
} from 'lucide-react';
import { GetonLogo } from '../components/Logo.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { LanguageSwitcher } from '../components/LanguageSwitcher.tsx';

interface AboutPageProps {
  onBack: () => void;
  onNavigateToTab: (tab: string) => void;
  onStartProject: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBack,
  onNavigateToTab,
  onStartProject,
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const stats = [
    {
      value: '2018',
      label: language === 'no' ? 'Etablert i Norge' : 'Founded in Norway',
      sub: language === 'no' ? 'Over 8 års innovasjon' : '8+ years of innovation',
    },
    {
      value: '50+',
      label: language === 'no' ? 'Vellykkede leveranser' : 'Shipped Platforms',
      sub: language === 'no' ? 'Frakt360, Swallet, Hentli' : 'Fintech, Logistics & Health',
    },
    {
      value: '99.99%',
      label: language === 'no' ? 'Infrastruktur oppetid' : 'System Availability',
      sub: language === 'no' ? 'Bedrifts-SLA' : 'Enterprise Grade SLA',
    },
    {
      value: '100%',
      label: language === 'no' ? 'Norskeid selskap' : 'Norwegian Owned',
      sub: 'Org. nr. 926117076',
    },
  ];

  const milestones = language === 'no' ? [
    {
      year: '2018',
      title: 'Geton AS etableres',
      desc: 'Grunnlagt med et krystallklart oppdrag: Å bygge kompromissløse digitale produkter med fokus på ekte forretningsverdi, rå ytelse og sublimt design.',
    },
    {
      year: '2020',
      title: 'Mobilapp- og Skyløft',
      desc: 'Utvidet satsingen på kryssplattform mobilutvikling (React Native & Flutter) samt skytjenester i AWS og Azure for norske vekstbedrifter.',
    },
    {
      year: '2022',
      title: 'Fintech & Open Banking',
      desc: 'Utvikling av høysikkerhetsløsninger, PSD2-integrasjoner og BankID-pålogging – inkludert arkitekturen bak spareplattformen Swallet.',
    },
    {
      year: '2024',
      title: 'Logistikk og Kartmarkedsplasser',
      desc: 'Lansering av store transport- og kartsystemer som Frakt360 og Hentli med sanntids ruting, Zebra-etiketter og WMS-integrasjon.',
    },
    {
      year: '2026',
      title: 'AI-Agenter & Helseteknologi',
      desc: 'Integrerer neste generasjons AI-modeller, helseplattformer som Vestlandsk Hjertesenter, og autonome arbeidsflyter for ledende virksomheter.',
    },
  ] : [
    {
      year: '2018',
      title: 'Geton AS Founded',
      desc: 'Established with a sharp mission: Building uncompromising digital products prioritizing business impact, extreme speed, and sublime design.',
    },
    {
      year: '2020',
      title: 'Mobile & Cloud Expansion',
      desc: 'Scaled cross-platform mobile engineering (React Native & Flutter) and enterprise cloud architectures on AWS & Azure for fast-growing businesses.',
    },
    {
      year: '2022',
      title: 'Fintech & Open Banking',
      desc: 'Engineered high-security financial pipelines, PSD2 API integrations, and BankID auth – including the core architecture of Swallet.',
    },
    {
      year: '2024',
      title: 'Logistics & Map Marketplaces',
      desc: 'Shipped large-scale transport systems like Frakt360 and Hentli featuring real-time geocoding, Zebra printing, and WMS warehouse sync.',
    },
    {
      year: '2026',
      title: 'AI Agents & Digital Healthcare',
      desc: 'Pioneering next-generation AI workflows, cardiology medical portals like Vestlandsk Hjertesenter, and autonomous enterprise tooling.',
    },
  ];

  const pillars = language === 'no' ? [
    {
      icon: Smartphone,
      title: 'Mobilapplikasjoner',
      desc: 'Banebrytende native og kryssplattform-apper for iOS og Android. Fra MVP til skalerbare markedsplasser med millioner av transaksjoner.',
    },
    {
      icon: Cpu,
      title: 'Kunstig Intelligens (AI)',
      desc: 'Autonome agenter, naturlig språkbehandling og skreddersydde AI-modeller som automatiserer manuelle prosesser og øker lønnsomheten.',
    },
    {
      icon: Globe,
      title: 'Web & Skysystemer',
      desc: 'Moderne webapplikasjoner i React 19, Next.js, Node.js og .NET 9. Skalerbar mikrotjeneste-arkitektur hostet på AWS og Azure med 99.99% oppetid.',
    },
    {
      icon: Layers,
      title: 'Design & Brukeropplevelse',
      desc: 'Menneskesentrert design som kombinerer estetikk med konvertering. Våre designsystemer sikrer sømløs konsistens på tvers av alle flater.',
    },
  ] : [
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      desc: 'Groundbreaking native and cross-platform apps for iOS & Android. From early MVPs to high-throughput platforms handling heavy volume.',
    },
    {
      icon: Cpu,
      title: 'Artificial Intelligence (AI)',
      desc: 'Autonomous agents, customized model workflows, and smart automation turning manual tasks into competitive business advantages.',
    },
    {
      icon: Globe,
      title: 'Web & Cloud Systems',
      desc: 'State-of-the-art web platforms built on React 19, Next.js, Node.js and .NET 9. Microservices hosted on AWS & Azure with enterprise SLAs.',
    },
    {
      icon: Layers,
      title: 'Design & Experience',
      desc: 'Human-centered aesthetics prioritizing intuition and conversion. Modular design systems maintaining brand integrity everywhere.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#040816] text-white selection:bg-cyan-500 selection:text-black">
      {/* 
        STICKY NAVIGATION BAR
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
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
            >
              {language === 'no' ? 'Start et prosjekt' : 'Start a Project'}
            </button>
          </div>
        </div>
      </header>

      {/* 
        HERO SECTION: ABOUT GETON AS
      */}
      <section className="relative pt-12 pb-16 sm:py-20 px-4 sm:px-8 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-[11px] font-semibold tracking-wider text-cyan-300 uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>OM OSS // GETON AS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-8 leading-[1.15] max-w-5xl [text-wrap:balance]">
            {language === 'no'
              ? 'Ledende innen innovasjon i mobilapper, kunstig intelligens og virtuell virkelighet siden 2018'
              : 'Pioneering mobile innovation, artificial intelligence and spatial computing since 2018'}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <p>
                {language === 'no'
                  ? 'Vi er en totalleverandør av digitale løsninger som hjelper bedrifter med å vokse i en stadig mer digital verden. Hos oss samles teknologi, strategi og kreativitet på ett sted, slik at vi kan utvikle helhetlige og fremtidsrettede løsninger for våre kunder.'
                  : 'We are a full-service provider of digital solutions helping companies accelerate in an increasingly connected world. At Geton AS, technology, strategy, and creativity converge under one roof to forge comprehensive, future-proof products.'}
              </p>
              <p>
                {language === 'no'
                  ? 'Teamet vårt består av erfarne utviklere, designere og teknologer som brenner for innovative ideer og smarte løsninger. Vi jobber med alt fra web- og apputvikling til AI-løsninger, skreddersydd programvare og digitale produkter.'
                  : 'Our team consists of seasoned software engineers, product designers, and technology architects dedicated to intelligent systems. We engineer web and mobile platforms, generative AI workflows, bespoke software, and scalable digital services.'}
              </p>
              <p>
                {language === 'no'
                  ? 'Gjennom effektive arbeidsprosesser, tett samarbeid og solid teknisk kompetanse leverer vi skalerbare, sikre og brukervennlige løsninger – alltid med fokus på kvalitet, ytelse og langsiktig verdi.'
                  : 'Through streamlined agile methodologies, tight partnership, and deep technical mastery, we ship secure, performant, and intuitive applications – consistently focused on engineering excellence and long-term value.'}
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-cyan-400/20 backdrop-blur-md flex flex-col justify-between"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-1">
                    {stat.value}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-cyan-300 mb-0.5">{stat.label}</div>
                    <div className="text-[11px] text-slate-400">{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 
        STUDIO TEAM PHOTOGRAPHY SHOWCASE
      */}
      <section className="py-12 px-4 sm:px-8 border-b border-white/10 bg-[#060c20]">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_20px_60px_rgba(6,182,212,0.18)] bg-slate-950">
            <img
              src="/assets/images/about_geton_studio_1793711805670.jpg"
              alt="Geton AS team studio in Bergen Norway"
              className="w-full h-auto object-cover"
            />
            <div className="p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="font-semibold text-white">Geton AS Headquarters</span>
                <span className="text-slate-400">· Trollhaugmyra 15, 5353 Straume (Bergen)</span>
              </div>
              <div className="text-cyan-300 font-medium">
                {language === 'no' ? 'Tverrfaglig team innen App, Web, Sky og AI' : 'Multidisciplinary team in App, Web, Cloud & AI'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        CORE EXPERTISE PILLARS
      */}
      <section className="py-24 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-400/30 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-4">
              {language === 'no' ? 'KJERNEKOMPETANSE' : 'CORE CAPABILITIES'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
              {language === 'no' ? 'Hva vi mestrer best' : 'Where We Excel'}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              {language === 'no'
                ? 'Fra idé og prototype til fullskala skydrift – vi tar helhetlig ansvar for din digitale suksess.'
                : 'From concept to enterprise cloud operation – we take complete stewardship of your digital future.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-5 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-white mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 text-xs font-semibold text-cyan-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>{language === 'no' ? 'Les mer om tjenesten' : 'Learn more'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 
        MILESTONES & TIMELINE SINCE 2018
      */}
      <section className="py-24 px-4 sm:px-8 border-b border-white/10 bg-[#060c20]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-4">
              {language === 'no' ? 'VÅR HISTORIE' : 'OUR JOURNEY'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-4">
              {language === 'no' ? 'Vår reise fra 2018 til i dag' : 'Milestones from 2018 to Today'}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              {language === 'no'
                ? 'Kontinuerlig teknologisk utvikling, sterk innovasjonskraft og langvarige kundeforhold.'
                : 'Continuous engineering advancement, bold innovation, and enduring client partnerships.'}
            </p>
          </div>

          <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-[#040816] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_12px_rgba(34,211,238,0.8)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>
                <div className="text-xs font-bold text-cyan-300 uppercase tracking-widest mb-1">
                  {m.year}
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-2">{m.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        BOTTOM CTA
      */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-[#080f2d] to-[#040816]">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-950/80 via-cyan-950/80 to-blue-950/80 border border-cyan-500/40 text-center shadow-[0_0_60px_rgba(6,182,212,0.25)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/60 border border-cyan-400/40 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-4">
            {language === 'no' ? 'VIL DU SAMARBEIDE MED OSS?' : 'READY TO WORK WITH US?'}
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-4">
            {language === 'no' ? 'La oss skape fremtiden sammen' : 'Let’s Build the Future Together'}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {language === 'no'
              ? 'Ta kontakt med oss for en uforpliktende prat om hvordan Geton AS kan hjelpe din virksomhet med å lykkes digitalt.'
              : 'Get in touch for a direct discussion on how Geton AS can accelerate your digital roadmap.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{language === 'no' ? 'Ta kontakt med oss' : 'Contact Us Today'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigateToTab('projects')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all cursor-pointer"
            >
              {language === 'no' ? 'Utforsk våre prosjekter' : 'Explore Our Projects'}
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer onSelectTab={onNavigateToTab} onGetStarted={onStartProject} />
    </div>
  );
};
