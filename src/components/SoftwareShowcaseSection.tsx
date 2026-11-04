import React, { useState } from 'react';
import {
  Smartphone,
  Globe,
  Cpu,
  Cloud,
  Palette,
  TrendingUp,
  ShoppingCart,
  Workflow,
  Sparkles,
  ShieldCheck,
  Layers,
  Search,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface SoftwareShowcaseSectionProps {
  onScheduleReview: () => void;
  onInspectProject: (title: string, desc: string, metrics: string) => void;
}

export interface ServiceCardItem {
  id: string;
  category: 'dev' | 'cloud' | 'growth';
  tagNo: string;
  tagEn: string;
  titleNo: string;
  titleEn: string;
  subtitleNo: string;
  subtitleEn: string;
  descNo: string;
  descEn: string;
  chipsNo: string[];
  chipsEn: string[];
  deliverableNo: string;
  deliverableEn: string;
  deliverableLabelNo: string;
  deliverableLabelEn: string;
  icon: React.ComponentType<{ className?: string }>;
  gradientLine: string;
  iconBg: string;
  iconColor: string;
}

export const SoftwareShowcaseSection: React.FC<SoftwareShowcaseSectionProps> = ({
  onScheduleReview,
  onInspectProject,
}) => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'dev' | 'cloud' | 'growth'>('all');

  // 12 HUMAN-DESIGNED SERVICES (4 per row, 3 rows total)
  // Short, punchy copy with cool, scannable chip tags
  const services: ServiceCardItem[] = [
    // 1. App-utvikling
    {
      id: 'app-development',
      category: 'dev',
      tagNo: 'Mobilapper',
      tagEn: 'Mobile Apps',
      titleNo: 'App-utvikling',
      titleEn: 'App Development',
      subtitleNo: 'iOS & Android applikasjoner',
      subtitleEn: 'Native iOS & Android Apps',
      descNo: 'Skreddersydde, lynraske mobilapper for iOS og Android med intuitiv brukeropplevelse.',
      descEn: 'High-performance, intuitive mobile apps for iOS and Android engineered to scale.',
      chipsNo: ['iOS & Android', 'BankID / Biometri', 'App Store & Play'],
      chipsEn: ['iOS & Android', 'BankID & Biometrics', 'App Store & Play'],
      deliverableNo: 'Produksjonsklar mobilapp',
      deliverableEn: 'Production-Ready App',
      deliverableLabelNo: 'LEVERANSE',
      deliverableLabelEn: 'DELIVERABLE',
      icon: Smartphone,
      gradientLine: 'from-sky-400 via-blue-500 to-indigo-500',
      iconBg: 'bg-sky-500/10 border-sky-400/30 text-sky-400 group-hover:bg-sky-500/20 group-hover:border-sky-400/60',
      iconColor: 'text-sky-400',
    },

    // 2. Webutvikling
    {
      id: 'web-development',
      category: 'dev',
      tagNo: 'Nettsider & Portaler',
      tagEn: 'Web & Portals',
      titleNo: 'Webutvikling',
      titleEn: 'Web Development',
      subtitleNo: 'Lynrask web & portaler',
      subtitleEn: 'High-Performance Web',
      descNo: 'Moderne, konverterende nettsider og kundeportaler med sub-sekunds lastetid.',
      descEn: 'Modern, responsive websites and customer portals built for high speed and conversion.',
      chipsNo: ['Core Web Vitals 95+', 'Brukervennlig CMS', 'Responsivt design'],
      chipsEn: ['Core Web Vitals 95+', 'Intuitive CMS', 'Fully Responsive'],
      deliverableNo: 'Skalerbar webplattform',
      deliverableEn: 'Scalable Web Platform',
      deliverableLabelNo: 'LEVERANSE',
      deliverableLabelEn: 'DELIVERABLE',
      icon: Globe,
      gradientLine: 'from-cyan-400 via-teal-400 to-sky-400',
      iconBg: 'bg-cyan-500/10 border-cyan-400/30 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/60',
      iconColor: 'text-cyan-400',
    },

    // 3. Skreddersydd programvare
    {
      id: 'custom-software',
      category: 'dev',
      tagNo: 'Systemutvikling',
      tagEn: 'Custom Software',
      titleNo: 'Skreddersydd programvare',
      titleEn: 'Custom Software',
      subtitleNo: 'Forretningssystemer',
      subtitleEn: 'Bespoke Business Systems',
      descNo: 'Spesialbygde fagsystemer og interne verktøy som fjerner manuelle flaskehalser.',
      descEn: 'Bespoke business platforms and internal tools engineered around your exact workflow.',
      chipsNo: ['Skreddersydd logikk', '100% kildekode-eie', 'Rollebasert tilgang'],
      chipsEn: ['Tailored Logic', '100% Code Ownership', 'Role-Based Access'],
      deliverableNo: 'Fullt tilpasset kjernesystem',
      deliverableEn: 'Bespoke Core Platform',
      deliverableLabelNo: 'LEVERANSE',
      deliverableLabelEn: 'DELIVERABLE',
      icon: Cpu,
      gradientLine: 'from-indigo-400 via-purple-500 to-sky-400',
      iconBg: 'bg-indigo-500/10 border-indigo-400/30 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:border-indigo-400/60',
      iconColor: 'text-indigo-400',
    },

    // 4. Sky-løsninger (Cloud Solutions)
    {
      id: 'cloud-solutions',
      category: 'cloud',
      tagNo: 'Infrastruktur & Sky',
      tagEn: 'Cloud & Infrastructure',
      titleNo: 'Sky-løsninger (Cloud Solutions)',
      titleEn: 'Cloud Solutions & Hosting',
      subtitleNo: 'AWS, Azure & sikker drift',
      subtitleEn: 'AWS, Azure & Managed Hosting',
      descNo: 'Sikker skystruktur på AWS, Azure og GCP med automatisk skalering og kostnadskontroll.',
      descEn: 'Resilient cloud infrastructure on AWS, Azure & GCP with auto-scaling and cost governance.',
      chipsNo: ['AWS · Azure · GCP', 'Automatisk skalering', '99.99% oppetid'],
      chipsEn: ['AWS · Azure · GCP', 'Auto-Scaling', '99.99% Uptime SLA'],
      deliverableNo: '99.99% Driftsikkerhet',
      deliverableEn: '99.99% Uptime Guarantee',
      deliverableLabelNo: 'GARANTI',
      deliverableLabelEn: 'GUARANTEE',
      icon: Cloud,
      gradientLine: 'from-blue-400 via-indigo-400 to-cyan-400',
      iconBg: 'bg-blue-500/10 border-blue-400/30 text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-400/60',
      iconColor: 'text-blue-400',
    },

    // 5. UI/UX & Produktdesign
    {
      id: 'product-design',
      category: 'growth',
      tagNo: 'Brukeropplevelse',
      tagEn: 'User Experience',
      titleNo: 'UI/UX & Produktdesign',
      titleEn: 'UI/UX & Product Design',
      subtitleNo: 'Brukervennlig og visuelt sterkt',
      subtitleEn: 'Human-Centered Design',
      descNo: 'Gjennomtenkte brukerreiser og interaktive Figma-prototyper som gjør komplekse oppgaver enkle.',
      descEn: 'Intuitive user journeys and interactive Figma prototypes that turn complexity into clarity.',
      chipsNo: ['Figma Prototyper', 'Design Tokens', 'WCAG 2.1 Universell'],
      chipsEn: ['Figma Prototypes', 'Design Tokens', 'WCAG 2.1 AA'],
      deliverableNo: 'Komplett Designsystem',
      deliverableEn: 'Production Design System',
      deliverableLabelNo: 'LEVERANSE',
      deliverableLabelEn: 'DELIVERABLE',
      icon: Palette,
      gradientLine: 'from-pink-400 via-rose-400 to-amber-400',
      iconBg: 'bg-pink-500/10 border-pink-400/30 text-pink-400 group-hover:bg-pink-500/20 group-hover:border-pink-400/60',
      iconColor: 'text-pink-400',
    },

    // 6. Digital markedsføring
    {
      id: 'digital-marketing',
      category: 'growth',
      tagNo: 'Vekst & Markedsføring',
      tagEn: 'Growth & Acquisition',
      titleNo: 'Digital markedsføring',
      titleEn: 'Digital Marketing & Growth',
      subtitleNo: 'Målrettet synlighet & vekst',
      subtitleEn: 'Targeted Acquisition',
      descNo: 'Målrettet Google- og Meta-annonsering kombinert med konverteringsoptimalisering som gir vekst.',
      descEn: 'Data-driven Google & Meta advertising coupled with conversion optimization that drives ROI.',
      chipsNo: ['Google Ads & Meta', 'CRO Optimalisering', 'GA4 Analyse & Sporing'],
      chipsEn: ['Google & Meta Ads', 'Funnel CRO', 'GA4 Tracking & Data'],
      deliverableNo: 'Målbar kundevekst',
      deliverableEn: 'Measurable Growth',
      deliverableLabelNo: 'RESULTAT',
      deliverableLabelEn: 'OUTCOME',
      icon: TrendingUp,
      gradientLine: 'from-emerald-400 via-teal-400 to-cyan-400',
      iconBg: 'bg-emerald-500/10 border-emerald-400/30 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/60',
      iconColor: 'text-emerald-400',
    },

    // 7. E-handel & Nettbutikker
    {
      id: 'ecommerce-solutions',
      category: 'dev',
      tagNo: 'Nettbutikk & Salg',
      tagEn: 'E-commerce',
      titleNo: 'E-handel & Nettbutikker',
      titleEn: 'E-commerce Solutions',
      subtitleNo: 'Nettbutikker som selger',
      subtitleEn: 'High-Converting Stores',
      descNo: 'Konverterende nettbutikker med sømløs utsjekk, Vipps/Klarna og automatisk logistikkobling.',
      descEn: 'Modern online stores with frictionless Vipps/Klarna checkouts and automated shipping sync.',
      chipsNo: ['Vipps · Klarna · Stripe', 'Lager- & Bring/PostNord', 'Rask mobilopplevelse'],
      chipsEn: ['Vipps · Klarna · Stripe', 'WMS & Freight Sync', 'Sub-Second Checkout'],
      deliverableNo: 'Komplett nettbutikkrigg',
      deliverableEn: 'Complete Storefront',
      deliverableLabelNo: 'LEVERANSE',
      deliverableLabelEn: 'DELIVERABLE',
      icon: ShoppingCart,
      gradientLine: 'from-amber-400 via-orange-400 to-rose-400',
      iconBg: 'bg-amber-500/10 border-amber-400/30 text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-400/60',
      iconColor: 'text-amber-400',
    },

    // 8. Systemintegrasjoner & API
    {
      id: 'api-integrations',
      category: 'cloud',
      tagNo: 'Integrasjoner & Data',
      tagEn: 'System Integrations',
      titleNo: 'Systemintegrasjoner & API',
      titleEn: 'System Integrations & APIs',
      subtitleNo: 'Sømløs kobling mellom systemer',
      subtitleEn: 'Unified Data Connectivity',
      descNo: 'Koble sammen regnskap, CRM, ERP og betaling til én helhetlig automatisert informasjonsflyt.',
      descEn: 'Bridge ERP, CRM, accounting, and logistics into one automated real-time pipeline.',
      chipsNo: ['Tripletex · PowerOffice', 'BankID & API-er', 'Sanntidssynkronisering'],
      chipsEn: ['Tripletex & ERP Sync', 'BankID & Secure APIs', 'Real-Time Sync'],
      deliverableNo: 'Automatisert dataflyt',
      deliverableEn: 'Automated Data Flow',
      deliverableLabelNo: 'EFFEKT',
      deliverableLabelEn: 'IMPACT',
      icon: Workflow,
      gradientLine: 'from-teal-400 via-emerald-400 to-sky-400',
      iconBg: 'bg-teal-500/10 border-teal-400/30 text-teal-400 group-hover:bg-teal-500/20 group-hover:border-teal-400/60',
      iconColor: 'text-teal-400',
    },

    // 9. Kunstig intelligens & Automasjon
    {
      id: 'ai-automation',
      category: 'cloud',
      tagNo: 'AI & Effektivisering',
      tagEn: 'AI & Automation',
      titleNo: 'Kunstig intelligens & Automasjon',
      titleEn: 'AI & Process Automation',
      subtitleNo: 'Smarte verktøy for tidsbesparelse',
      subtitleEn: 'Intelligent Workflows',
      descNo: 'Praktisk AI og automatisering som kutter manuelle rutiner, dokumentsortering og sparer tid.',
      descEn: 'Pragmatic AI automation and internal assistants that eliminate repetitive tasks and save hours.',
      chipsNo: ['Dokumentsortering & OCR', 'Interne AI-assistenter', '100% GDPR-trygt'],
      chipsEn: ['Document OCR', 'Internal AI Agents', '100% GDPR Compliant'],
      deliverableNo: 'Opptil 70% tidsbesparelse',
      deliverableEn: 'Up to 70% Time Saved',
      deliverableLabelNo: 'GEVINST',
      deliverableLabelEn: 'EFFICIENCY',
      icon: Sparkles,
      gradientLine: 'from-violet-400 via-purple-400 to-indigo-400',
      iconBg: 'bg-violet-500/10 border-violet-400/30 text-violet-400 group-hover:bg-violet-500/20 group-hover:border-violet-400/60',
      iconColor: 'text-violet-400',
    },

    // 10. Vedlikehold og support
    {
      id: 'maintenance-support',
      category: 'cloud',
      tagNo: 'Trygghet & Drift',
      tagEn: 'Maintenance & SLA',
      titleNo: 'Vedlikehold og support',
      titleEn: 'Maintenance & 24/7 Support',
      subtitleNo: 'Trygg oppfølging etter lansering',
      subtitleEn: 'Proactive Partnership',
      descNo: 'Kontinuerlig overvåking, faste sikkerhetsoppdateringer og garantert responstid ved feil.',
      descEn: 'Proactive 24/7 synthetic monitoring, regular security patches, and guaranteed SLAs.',
      chipsNo: ['24/7 Overvåking', 'Sikkerhetsoppdateringer', 'Garantert responstid'],
      chipsEn: ['24/7 Synthetic Alerts', 'Security Patching', 'Response SLA'],
      deliverableNo: 'Garantert responstid',
      deliverableEn: 'Guaranteed SLA',
      deliverableLabelNo: 'AVTALE',
      deliverableLabelEn: 'AGREEMENT',
      icon: ShieldCheck,
      gradientLine: 'from-emerald-400 via-teal-400 to-sky-400',
      iconBg: 'bg-emerald-500/10 border-emerald-400/30 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/60',
      iconColor: 'text-emerald-400',
    },

    // 11. Merkevare & Visuell profil
    {
      id: 'branding-identity',
      category: 'growth',
      tagNo: 'Design & Identitet',
      tagEn: 'Brand & Identity',
      titleNo: 'Merkevare & Visuell profil',
      titleEn: 'Branding & Visual Identity',
      subtitleNo: 'Et uttrykk som skaper tillit',
      subtitleEn: 'Distinctive Presence',
      descNo: 'Distinkt visuell profil med logo, fargepalett, typografi og retningslinjer som skiller deg ut.',
      descEn: 'Distinctive brand identity with logo, typography, color palettes, and comprehensive guidelines.',
      chipsNo: ['Logo & Ikonografi', 'Typografi & Farger', 'Komplett profilmanual'],
      chipsEn: ['Logo & Iconography', 'Typography & Colors', 'Brand Guidelines'],
      deliverableNo: 'Komplett Merkevarepakke',
      deliverableEn: 'Brand Manual',
      deliverableLabelNo: 'LEVERANSE',
      deliverableLabelEn: 'DELIVERABLE',
      icon: Layers,
      gradientLine: 'from-purple-400 via-pink-400 to-rose-400',
      iconBg: 'bg-purple-500/10 border-purple-400/30 text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-400/60',
      iconColor: 'text-purple-400',
    },

    // 12. SEO & Ytelsesoptimalisering
    {
      id: 'seo-performance',
      category: 'growth',
      tagNo: 'Søkemotor & Fart',
      tagEn: 'SEO & Speed',
      titleNo: 'SEO & Ytelsesoptimalisering',
      titleEn: 'SEO & Performance Optimization',
      subtitleNo: 'Synlig på Google, lynrask',
      subtitleEn: 'Top Rankings & Speed',
      descNo: 'Optimalisering av kode, hastighet og innhold for topplasseringer på Google og flere henvendelser.',
      descEn: 'Technical code optimization, speed tuning, and content architecture for top Google rankings.',
      chipsNo: ['Teknisk SEO-audit', 'Lighthouse 95+ fart', 'Søkeordsanalyse'],
      chipsEn: ['Technical SEO Audit', 'Lighthouse 95+ Speed', 'Keyword Strategy'],
      deliverableNo: 'Grønne Core Web Vitals',
      deliverableEn: 'Top Google Rankings',
      deliverableLabelNo: 'MÅL',
      deliverableLabelEn: 'TARGET',
      icon: Search,
      gradientLine: 'from-orange-400 via-amber-400 to-yellow-400',
      iconBg: 'bg-orange-500/10 border-orange-400/30 text-orange-400 group-hover:bg-orange-500/20 group-hover:border-orange-400/60',
      iconColor: 'text-orange-400',
    },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory);

  const categories = [
    { id: 'all', labelNo: 'Alle tjenester (12)', labelEn: 'All Services (12)' },
    { id: 'dev', labelNo: 'Utvikling & App', labelEn: 'Development & Apps' },
    { id: 'cloud', labelNo: 'Sky & Drift', labelEn: 'Cloud & Infrastructure' },
    { id: 'growth', labelNo: 'Design & Markedsføring', labelEn: 'Design & Marketing' },
  ];

  return (
    <section
      id="software-systems"
      className="relative z-30 w-full py-24 sm:py-32 overflow-hidden text-white bg-gradient-to-b from-[#060e28] via-[#09153d] to-[#04091c]"
    >
      {/* Soft natural ambient lighting without harsh artificial neon */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-1/2 right-10 w-[650px] h-[650px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none -z-0" />

      {/* Subtle clean grid backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            HUMAN EDITORIAL SECTION HEADER (Zero-Pill Discipline)
        ======================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-sky-300 uppercase mb-3">
            <span>
              {language === 'no'
                ? 'VÅRE TJENESTER • FRA IDÉ TIL VEKST'
                : 'OUR SERVICES • DESIGN, DEVELOPMENT & GROWTH'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.15] [text-wrap:balance]">
            {language === 'no'
              ? 'Tjenester vi leverer til ambisiøse bedrifter'
              : 'Services We Deliver for Visionary Companies'}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            {language === 'no'
              ? 'Vi designer, utvikler og forvalter skreddersydde digitale løsninger. Ingen ferdigmaler eller unødvendig kompleksitet — kun solid håndverk og målbare forretningsresultater.'
              : 'We design, build, and operate bespoke digital platforms. No generic templates or needless complexity — only solid engineering and measurable outcomes.'}
          </p>
        </div>

        {/* ========================================================
            CATEGORY FILTER TABS (Interactive Human Controls)
        ======================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                    : 'bg-white/[0.06] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {language === 'no' ? cat.labelNo : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* ========================================================
            12 SERVICE CARDS GRID:
            - EXACTLY 4 CARDS PER ROW ON DESKTOP (lg:grid-cols-4)
            - 3 ROWS TOTAL = 12 CARDS
            - COMPACT, CRISP, SCANNABLE HUMAN-CRAFTED DESIGN
            - NO WALLS OF DENSE TEXT
        ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            const tag = language === 'no' ? service.tagNo : service.tagEn;
            const title = language === 'no' ? service.titleNo : service.titleEn;
            const subtitle = language === 'no' ? service.subtitleNo : service.subtitleEn;
            const desc = language === 'no' ? service.descNo : service.descEn;
            const chips = language === 'no' ? service.chipsNo : service.chipsEn;
            const deliverable = language === 'no' ? service.deliverableNo : service.deliverableEn;
            const deliverableLabel = language === 'no' ? service.deliverableLabelNo : service.deliverableLabelEn;

            return (
              <div
                key={service.id}
                onClick={() => onInspectProject(title, desc, deliverable)}
                className="group relative rounded-2xl p-5 sm:p-6 bg-[#0c1533]/85 hover:bg-[#101b42]/95 backdrop-blur-xl border border-white/10 hover:border-sky-400/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.28)] hover:shadow-[0_16px_36px_rgba(14,165,233,0.14)] cursor-pointer overflow-hidden"
              >
                {/* Top Glowing Hairline Accent */}
                <div
                  className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${service.gradientLine} opacity-40 group-hover:opacity-100 group-hover:left-3 group-hover:right-3 transition-all duration-300 rounded-full`}
                />

                {/* Ambient glow behind card on hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all pointer-events-none" />

                <div className="relative z-10">
                  {/* Card Header: Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${service.iconBg}`}
                    >
                      <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">
                      {tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base sm:text-lg font-bold font-display text-white mb-1 group-hover:text-sky-200 transition-colors leading-snug">
                    {title}
                  </h3>
                  <div className="text-[11px] text-sky-300/80 font-medium mb-3">
                    {subtitle}
                  </div>

                  {/* Short, Punchy Description (Crisp, under 15 words) */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {desc}
                  </p>

                  {/* Cool Scannable Feature Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {chips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.04] group-hover:bg-white/[0.08] border border-white/[0.08] group-hover:border-sky-400/30 text-slate-300 group-hover:text-slate-100 transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-sky-400/80" />
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Deliverable & Action Arrow */}
                <div className="pt-3.5 border-t border-white/10 flex items-center justify-between relative z-10">
                  <div className="min-w-0 pr-2">
                    <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">
                      {deliverableLabel}
                    </div>
                    <div className="text-xs font-semibold text-white truncate">
                      {deliverable}
                    </div>
                  </div>

                  <div
                    className="p-2 rounded-xl bg-white/5 group-hover:bg-sky-500 border border-white/10 group-hover:border-sky-400 text-sky-300 group-hover:text-white transition-all duration-200 shrink-0 shadow-sm"
                    title={language === 'no' ? 'Se detaljer' : 'View details'}
                  >
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            BOTTOM STUDIO CALLOUT STRIP:
            - Clear, human consultation trigger
        ======================================================== */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white/[0.04] border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              {language === 'no'
                ? 'Usikker på hvilken løsning bedriften trenger?'
                : 'Not sure which service your business needs?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {language === 'no'
                ? 'Vi tilbyr en uforpliktende teknisk samtale og gir deg en ærlig vurdering av omfang og budsjett.'
                : 'We offer a no-obligation technical call to discuss scope, timeline, and realistic budgets.'}
            </p>
          </div>

          <button
            onClick={onScheduleReview}
            className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-sky-500/25 hover:-translate-y-0.5 cursor-pointer shrink-0"
          >
            {language === 'no' ? 'Ta en uforpliktende prat' : 'Schedule a Discovery Call'}
          </button>
        </div>

      </div>
    </section>
  );
};
