import React, { useState, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Smartphone,
  Monitor,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Building,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';


export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tags: { label: string; color: string }[];
  client: string;
  industry: string;
  year: string;
  metrics: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  mockupType: 'frakt360' | 'swallet' | 'newsec' | 'pareto' | 'aura' | 'kinetix';
}

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'frakt360',
    title: 'Frakt360',
    subtitle: 'En komplett fraktplattform for moderne norske bedrifter – booking, sporing, etiketter og retur',
    tags: [
      { label: 'App', color: 'bg-blue-600 text-white font-semibold' },
      { label: 'Nettside', color: 'bg-cyan-500 text-white font-semibold' },
      { label: 'Logistikk', color: 'bg-emerald-600 text-white font-semibold' },
    ],
    client: 'Frakt360 / Geton',
    industry: 'Logistics & E-commerce',
    year: '2026',
    metrics: 'PostNord · Bring · Ongoing WMS',
    description:
      'Frakt360 brings the logistics workflow together in one digital platform: create shipments, compare carrier rates, generate Zebra shipping labels, follow deliveries in real-time, and automate e-commerce orders from Shopify, WooCommerce and Mystore.',
    keyFeatures: [
      'Ordre → Fraktvalg → Booking → Etikett → Sporing → Levering → Faktura',
      'Direkte PostNord og Bring API-integrasjoner',
      'Shopify, WooCommerce og Mystore e-handelskobling',
      'Automatisk Zebra etikettutskrift og Ongoing WMS lagerkobling',
      'Sanntids sporingstelemetri og QR-basert returflyt',
    ],
    techStack: ['React', 'Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'Carrier REST APIs'],
    mockupType: 'frakt360',
  },
  {
    id: 'swallet',
    title: 'Swallet',
    subtitle: 'Full kontroll på abonnementer og faste utgifter – samle, forstå og spar penger',
    tags: [
      { label: 'App', color: 'bg-purple-600 text-white font-semibold' },
      { label: 'Fintech', color: 'bg-blue-600 text-white font-semibold' },
      { label: 'Nettside', color: 'bg-cyan-500 text-white font-semibold' },
    ],
    client: 'Swallet / Geton',
    industry: 'Fintech · Personal Finance',
    year: '2026',
    metrics: 'PSD2 · Open Banking · DNB · Adtraction',
    description:
      'Swallet is a Norwegian personal-finance platform designed to give consumers a clearer picture of their subscriptions, recurring expenses and opportunities to save money.',
    keyFeatures: [
      'See what you pay → Understand expenses → Discover alternatives → Save money',
      'Automatisk abonnementsoversikt via Open Banking (PSD2)',
      '«Få bedre tilbud» markedsplass for strøm, forsikring og telecom',
      'Personlig forbruksinnsikt med estimert årlig besparelse (4 320 kr/år)',
    ],
    techStack: ['React 19', 'Next.js', 'React Native', 'Node.js', 'PSD2 API', 'BankID', 'PostgreSQL'],
    mockupType: 'swallet',
  },
  {
    id: 'newsec',
    title: 'Newsec',
    subtitle: 'Eiendomsmarkedet i Nord-Europa – rett i lomma',
    tags: [
      { label: 'App', color: 'bg-blue-600 text-white' },
      { label: 'Webdesign', color: 'bg-rose-400 text-white' },
    ],
    client: 'Newsec Commercial Real Estate',
    industry: 'PropTech & Real Estate',
    year: '2025',
    metrics: '€5.65 mrd forvaltet portefølje',
    description:
      'Nord-Europas ledende eiendomsrådgiver trengte et interaktivt investorverktøy. Vi bygget en skreddersydd mobilapplikasjon som leverer sanntids markedsanalyser, yield-kalkulatorer og digitale porteføljerapporter til institusjonelle investorer.',
    keyFeatures: [
      'Interaktiv yield-kalkulator med dynamiske 3D-grafer',
      'Push-varsler for nye næringseiendommer i markedet',
      'Digital datainnsikt for Oslo, Stockholm, Helsinki og København',
      'Biometrisk pålogging for sikker tilgang til konfidensielle prospekter',
    ],
    techStack: ['Flutter', 'Dart', 'Node.js', 'AWS Lambda', 'GraphQL'],
    mockupType: 'newsec',
  },
  {
    id: 'pareto-securities',
    title: 'Pareto Securities',
    subtitle: 'Enhetlig digital profil og markedsanalyse for aksjeinvestorer',
    tags: [
      { label: 'Nettside', color: 'bg-cyan-500 text-white' },
      { label: 'Webdesign', color: 'bg-rose-500 text-white' },
    ],
    client: 'Pareto Securities AS',
    industry: 'Investment Banking',
    year: '2024',
    metrics: '< 40ms Sanntids Kursdata',
    description:
      'Komplett redesign og front-end rekonstruksjon for en av Nordens fremste investeringsbanker. Plattformen gir investorer umiddelbar tilgang til dybdeanalyser, kursgrafer i sanntid og sikker trading i det nordiske aksjemarkedet.',
    keyFeatures: [
      'Sub-sekund streaming av aksjekurser over WebSockets',
      'Avanserte finansielle tekniske grafer med TradingView',
      'Automatisert distribusjon av daglige morgenrapporter',
      'Skalerbar flerspråklig arkitektur for 8 internasjonale kontorer',
    ],
    techStack: ['Next.js', 'TypeScript', 'WebSockets', 'Tailwind CSS', 'Redis'],
    mockupType: 'pareto',
  },
  {
    id: 'aura-health',
    title: 'Aura Health',
    subtitle: 'Telemedisin og biometrisk sanntidsanalyse for nordiske klinikker',
    tags: [
      { label: 'App', color: 'bg-blue-600 text-white' },
      { label: 'AI Løsning', color: 'bg-purple-600 text-white' },
      { label: 'Branding', color: 'bg-amber-400 text-slate-900 font-bold' },
    ],
    client: 'Aura Nordic Health',
    industry: 'HealthTech & AI',
    year: '2025',
    metrics: '99.8% Triage-nøyaktighet',
    description:
      'Pasientoppfølging med KI-støttet triage for leger og sykepleiere. Integrerer trådløse sensorer for hjerterytme og oksygenmetning med direkte overføring til det elektroniske pasientjournalsystemet.',
    keyFeatures: [
      'Normerende triage i henhold til Helsedirektoratets retningslinjer',
      'Ende-til-ende kryptert videokonsultasjon med BankID',
      'Automatisk journalnotat med talesyntese og Gemini KI',
      'Full HIPAA og GDPR-kompatibel skytjeneste i Norge',
    ],
    techStack: ['React Native', 'Python', 'FastAPI', 'Gemini AI', 'Azure Health'],
    mockupType: 'aura',
  },
  {
    id: 'kinetix-spatial',
    title: 'Kinetix Spatial Labs',
    subtitle: 'Neste generasjons 3D robotikk-opplevelse i nettleseren',
    tags: [
      { label: '3D WebGL', color: 'bg-fuchsia-600 text-white' },
      { label: 'Nettside', color: 'bg-cyan-500 text-white' },
    ],
    client: 'Kinetix Robotics AS',
    industry: 'Industrial Robotics',
    year: '2025',
    metrics: '60 FPS 4K WebGL',
    description:
      'Nyskapende digital tilstedeværelse for ledende norsk robotikkselskap. Plattformen lar internasjonale kjøpere konfigurere industrielle robotarmer i interaktiv 3D direkte i nettleseren.',
    keyFeatures: [
      'Interaktiv 3D-konfigurator med sanntids skyggelegging (GLSL)',
      'Sub-sekund CAD-modell strømming optimalisert for mobil og desktop',
      'Direkte prisestimering og produksjonsbestilling',
      'Vinner av European Design Awards 2025 for beste tech-opplevelse',
    ],
    techStack: ['Three.js', 'React 19', 'WebGPU', 'Tailwind CSS', 'Vercel Edge'],
    mockupType: 'kinetix',
  },
];

interface ProjectsShowcaseSectionProps {
  onInspectProject: (project: ProjectCaseStudy) => void;
  onStartProject: () => void;
}

export const ProjectsShowcaseSection: React.FC<ProjectsShowcaseSectionProps> = ({
  onInspectProject,
  onStartProject,
}) => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filterOptions = [
    { id: 'all', label: t.projects.filters.all },
    { id: 'mobile', label: t.projects.filters.mobile },
    { id: 'web', label: t.projects.filters.web },
    { id: 'fintech', label: t.projects.filters.fintech },
  ];

  const projectsData: ProjectCaseStudy[] = [
    {
      id: 'frakt360',
      title: t.projects.cards.frakt360.title,
      subtitle: t.projects.cards.frakt360.subtitle,
      tags: [
        { label: language === 'no' ? 'App' : 'Mobile App', color: 'bg-blue-600 text-white font-semibold' },
        { label: language === 'no' ? 'Nettside' : 'Web Platform', color: 'bg-cyan-500 text-white font-semibold' },
        { label: language === 'no' ? 'Logistikk' : 'Logistics', color: 'bg-emerald-600 text-white font-semibold' },
      ],
      client: t.projects.cards.frakt360.client,
      industry: t.projects.cards.frakt360.industry,
      year: '2026',
      metrics: 'PostNord · Bring · Ongoing WMS',
      description: t.projects.cards.frakt360.description,
      keyFeatures: t.projects.cards.frakt360.keyFeatures,
      techStack: ['React', 'Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'Carrier REST APIs'],
      mockupType: 'frakt360',
    },
    {
      id: 'swallet',
      title: t.projects.cards.swallet.title,
      subtitle: t.projects.cards.swallet.subtitle,
      tags: [
        { label: language === 'no' ? 'App' : 'Mobile App', color: 'bg-purple-600 text-white font-semibold' },
        { label: 'Fintech', color: 'bg-blue-600 text-white font-semibold' },
        { label: language === 'no' ? 'Nettside' : 'Web Platform', color: 'bg-cyan-500 text-white font-semibold' },
      ],
      client: t.projects.cards.swallet.client,
      industry: t.projects.cards.swallet.industry,
      year: '2026',
      metrics: 'PSD2 · Open Banking · DNB · Adtraction',
      description: t.projects.cards.swallet.description,
      keyFeatures: t.projects.cards.swallet.keyFeatures,
      techStack: ['React 19', 'Next.js', 'React Native', 'Node.js', 'PSD2 API', 'BankID', 'PostgreSQL'],
      mockupType: 'swallet',
    },
    {
      id: 'newsec',
      title: t.projects.cards.newsec.title,
      subtitle: t.projects.cards.newsec.subtitle,
      tags: [
        { label: language === 'no' ? 'App' : 'Mobile App', color: 'bg-blue-600 text-white' },
        { label: language === 'no' ? 'Webdesign' : 'Web Architecture', color: 'bg-rose-400 text-white' },
      ],
      client: t.projects.cards.newsec.client,
      industry: t.projects.cards.newsec.industry,
      year: '2025',
      metrics: '€5.65 mrd AUM',
      description: t.projects.cards.newsec.description,
      keyFeatures: t.projects.cards.newsec.keyFeatures,
      techStack: ['Flutter', 'Dart', 'GraphQL', 'Node.js', 'PostgreSQL'],
      mockupType: 'newsec',
    },
    {
      id: 'pareto',
      title: t.projects.cards.pareto.title,
      subtitle: t.projects.cards.pareto.subtitle,
      tags: [
        { label: language === 'no' ? 'Nettside' : 'Web Platform', color: 'bg-cyan-500 text-white' },
        { label: language === 'no' ? 'Webdesign' : 'SiteVision UI', color: 'bg-rose-400 text-white' },
      ],
      client: t.projects.cards.pareto.client,
      industry: t.projects.cards.pareto.industry,
      year: '2025',
      metrics: 'Oslo Børs API · Real-time feeds',
      description: t.projects.cards.pareto.description,
      keyFeatures: t.projects.cards.pareto.keyFeatures,
      techStack: ['React', 'SiteVision CMS', 'TypeScript', 'Streaming REST', 'Node.js'],
      mockupType: 'pareto',
    },
    {
      id: 'aura',
      title: t.projects.cards.aura.title,
      subtitle: t.projects.cards.aura.subtitle,
      tags: [
        { label: 'SaaS', color: 'bg-indigo-600 text-white' },
        { label: 'AI Analytics', color: 'bg-purple-600 text-white' },
      ],
      client: t.projects.cards.aura.client,
      industry: t.projects.cards.aura.industry,
      year: '2026',
      metrics: '1.4B events/day · 60 FPS charts',
      description: t.projects.cards.aura.description,
      keyFeatures: t.projects.cards.aura.keyFeatures,
      techStack: ['Next.js 15', 'Three.js / WebGL', 'Apache Kafka', 'ClickHouse', 'Python AI'],
      mockupType: 'aura',
    },
    {
      id: 'kinetix',
      title: t.projects.cards.kinetix.title,
      subtitle: t.projects.cards.kinetix.subtitle,
      tags: [
        { label: language === 'no' ? 'Mobilapp' : 'Mobile App', color: 'bg-blue-600 text-white' },
        { label: 'HealthTech', color: 'bg-emerald-600 text-white' },
      ],
      client: t.projects.cards.kinetix.client,
      industry: t.projects.cards.kinetix.industry,
      year: '2025',
      metrics: 'Apple HealthKit · BLE IoT sync',
      description: t.projects.cards.kinetix.description,
      keyFeatures: t.projects.cards.kinetix.keyFeatures,
      techStack: ['SwiftUI', 'Kotlin Multiplatform', 'CoreBluetooth', 'Node.js', 'Fastify'],
      mockupType: 'kinetix',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : activeFilter === 'mobile'
      ? projectsData.filter((p) => p.mockupType === 'frakt360' || p.mockupType === 'swallet' || p.mockupType === 'newsec' || p.mockupType === 'kinetix')
      : activeFilter === 'web'
      ? projectsData.filter((p) => p.mockupType === 'frakt360' || p.mockupType === 'swallet' || p.mockupType === 'pareto' || p.mockupType === 'aura')
      : projectsData.filter((p) => p.mockupType === 'frakt360' || p.mockupType === 'swallet');


  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 440;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Render authentic realistic device mockups for each project matching the reference image style
  const renderCardMockup = (project: ProjectCaseStudy) => {
    switch (project.mockupType) {
      // Frakt360: High-fidelity render using the uploaded flagship case study graphic
      case 'frakt360':
        return (
          <div className="w-full h-full relative overflow-hidden bg-slate-950 flex items-center justify-center select-none group/img">
            <img
              src="/assets/aistudio/Frakt360__Komplett_norsk_fraktplattform_6546bb91.png"
              alt="Frakt360 Komplett Norsk Fraktplattform"
              className="w-full h-full object-cover object-center transform group-hover/img:scale-105 transition-transform duration-700"
            />
            {/* Subtle bottom gradient to showcase badges clearly */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="text-[10px] font-mono font-bold text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-cyan-400/40 shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>CASE STUDY · KLIKK FOR Å LESE</span>
              </span>
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/85 backdrop-blur-md px-2 py-1 rounded-md border border-cyan-400/40">
                Web + Mobil
              </span>
            </div>
          </div>
        );

      // Swallet: High-fidelity render using the uploaded fintech case study showcase
      case 'swallet':
        return (
          <div className="w-full h-full relative overflow-hidden bg-slate-950 flex items-center justify-center select-none group/img">
            <img
              src="/assets/aistudio/Swallet_Fintech_Case_Study_Showcase_302711d7.png"
              alt="Swallet Fintech Case Study Showcase"
              className="w-full h-full object-cover object-center transform group-hover/img:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="text-[10px] font-mono font-bold text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-purple-400/40 shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span>CASE STUDY · KLIKK FOR Å LESE</span>
              </span>
              <span className="text-[10px] font-mono text-purple-200 bg-purple-950/85 backdrop-blur-md px-2 py-1 rounded-md border border-purple-400/40">
                Fintech + Open Banking
              </span>
            </div>
          </div>
        );

      // Newsec: Clean floating smartphone with 3D chart tape/receipt
      case 'newsec':
        return (
          <div className="w-full h-full bg-gradient-to-br from-indigo-100/80 via-blue-50 to-slate-100 flex items-center justify-center p-4 relative overflow-hidden select-none">
            {/* Curved background tape graphic */}
            <div className="absolute -right-8 -bottom-10 w-44 h-44 bg-white/90 rounded-full shadow-lg border border-slate-200/80 -rotate-12 flex flex-col p-4 text-[7px] text-slate-600 font-mono">
              <span className="font-bold text-slate-900 text-[9px]">PORTFOLIO METRICS</span>
              <span className="text-emerald-600 font-bold mt-1">+14.2% YIELD Q3</span>
              <span>€5.65 BN TOTAL AUM</span>
              <div className="h-1 bg-emerald-400 rounded-full mt-2 w-3/4" />
            </div>

            {/* Smartphone device */}
            <div className="w-[50%] h-[92%] bg-slate-900 rounded-[28px] p-1.5 shadow-2xl relative z-10 border-[2px] border-slate-600">
              <div className="w-full h-full bg-white rounded-[22px] overflow-hidden flex flex-col p-2.5 text-[8px]">
                <div className="flex justify-between items-center text-[7px] text-slate-400 pb-1">
                  <span>9:41</span>
                  <span>Newsec Pro</span>
                </div>
                <span className="text-[7px] text-slate-400 font-mono uppercase">Portfolio Value</span>
                <span className="text-sm font-extrabold text-slate-900 leading-none">€5.65 bn</span>
                
                {/* Chart graph */}
                <div className="my-2 h-16 bg-slate-50 rounded-lg border border-slate-100 p-1 flex items-end justify-between gap-1">
                  <div className="w-2 h-5 bg-blue-300 rounded-t" />
                  <div className="w-2 h-7 bg-blue-400 rounded-t" />
                  <div className="w-2 h-9 bg-blue-500 rounded-t" />
                  <div className="w-2 h-12 bg-blue-600 rounded-t" />
                  <div className="w-2 h-11 bg-indigo-500 rounded-t" />
                  <div className="w-2 h-14 bg-indigo-600 rounded-t" />
                </div>

                <div className="mt-auto flex justify-between text-[7px] font-bold text-slate-700 pt-1 border-t">
                  <span>Nordic Commercial</span>
                  <span className="text-emerald-600">Active</span>
                </div>
              </div>
            </div>
          </div>
        );

      // Pareto: Laptop on workspace aesthetic
      case 'pareto':
        return (
          <div className="w-full h-full bg-[#f1f5f9] flex items-center justify-center p-4 relative overflow-hidden select-none">
            <div className="w-[88%] h-[80%] bg-slate-900 rounded-xl p-1.5 shadow-xl border border-slate-300">
              <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col">
                <div className="h-4 bg-slate-100 border-b border-slate-200 px-2 flex items-center justify-between">
                  <span className="text-[8px] font-bold text-slate-800">Pareto Securities</span>
                  <span className="text-[7px] text-emerald-600 font-bold font-mono">MARKET OPEN</span>
                </div>
                <div className="p-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-slate-800 block">Få full kontroll over aksjehandel</span>
                    <span className="text-[7px] text-slate-500">Avanserte verktøy for institusjonelle og private investorer</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 my-1 text-[7px]">
                    <div className="p-1 bg-slate-50 rounded border">
                      <div className="text-slate-400 font-mono">OSEBX NORGE</div>
                      <div className="text-[9px] font-bold text-emerald-600 font-mono">1 428.40 (+1.2%)</div>
                    </div>
                    <div className="p-1 bg-slate-50 rounded border">
                      <div className="text-slate-400 font-mono">S&P 500</div>
                      <div className="text-[9px] font-bold text-emerald-600 font-mono">5 842.10 (+0.8%)</div>
                    </div>
                  </div>
                  <div className="h-1.5 bg-blue-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        );

      // Aura Health: Tablet view
      case 'aura':
        return (
          <div className="w-full h-full bg-gradient-to-tr from-cyan-50 via-slate-50 to-purple-50 flex items-center justify-center p-4 relative overflow-hidden select-none">
            <div className="w-[82%] h-[84%] bg-slate-900 rounded-[20px] p-1.5 shadow-xl border border-slate-300">
              <div className="w-full h-full bg-white rounded-[16px] overflow-hidden flex flex-col p-3">
                <div className="flex justify-between items-center pb-2 border-b">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                    <span className="font-extrabold text-slate-900 text-xs">Aura Triage AI</span>
                  </div>
                  <span className="text-[8px] font-mono text-cyan-600 font-bold">NORWAY EPJ SYNC</span>
                </div>
                <div className="my-2 p-2 rounded-lg bg-cyan-50/80 border border-cyan-100 text-[8px]">
                  <div className="font-bold text-slate-800 text-[9px]">Automatisk Triage: Prioritet 1</div>
                  <div className="text-slate-500 mt-0.5">SpO2: 98% · Puls: 68 BPM · EKG: Sinusrytme</div>
                </div>
                <div className="mt-auto flex justify-between items-center text-[8px]">
                  <span className="text-slate-500">Pasientjournal godkjent</span>
                  <span className="bg-cyan-600 text-white font-bold px-2 py-0.5 rounded text-[8px]">Journalfør</span>
                </div>
              </div>
            </div>
          </div>
        );

      // Kinetix: 3D interactive viewer
      default:
        return (
          <div className="w-full h-full bg-[#0a1128] flex items-center justify-center p-4 relative overflow-hidden select-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.3),_transparent_70%)]" />
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-full border-2 border-cyan-400/80 border-t-transparent animate-spin mx-auto mb-2 flex items-center justify-center">
                <span className="w-10 h-10 rounded-full bg-cyan-400/20" />
              </div>
              <span className="font-mono text-xs font-bold text-cyan-300 tracking-wider">
                KINETIX SPATIAL // 3D GLSL
              </span>
              <span className="block text-[10px] text-slate-300 mt-0.5">Real-time WebGPU 60 FPS viewport</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section
      id="projects"
      className="w-full py-24 sm:py-32 bg-[#ffffff] text-slate-900 relative z-30 transition-colors duration-300 overflow-hidden"
    >
      {/* Crisp subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000000 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header (Centered, elegant Nordic typography matching reference image) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t.projects.badge}</span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            {t.projects.title}
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-14">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-[1.02]'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* 
          HORIZONTAL SLIDER / CAROUSEL
          - Cards match reference image layout:
            - Large visual rounded container with realistic mockups and top tag pills
            - Clean title and subtitle below
            - Black circular arrow button (→) that opens case study modal
        */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-[310px] xs:w-[350px] sm:w-[410px] lg:w-[430px] shrink-0 snap-start flex flex-col justify-between group cursor-pointer"
              onClick={() => onInspectProject(project)}
            >
              {/* Visual Mockup Card Container */}
              <div className="relative w-full aspect-[4/3] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-100 border border-slate-200/80 shadow-sm group-hover:shadow-xl group-hover:border-slate-300 transition-all duration-300">
                
                {/* Top Left Tag Pills (Matching reference image: Blue App, Red Webdesign, Yellow Branding, etc.) */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 flex-wrap pointer-events-none">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] font-semibold px-3 py-1 rounded-full shadow-xs ${tag.color}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                {/* Device & Screen Visual Render */}
                <div className="w-full h-full transform group-hover:scale-[1.02] transition-transform duration-500">
                  {renderCardMockup(project)}
                </div>
              </div>

              {/* Bottom Project Info & Circular Arrow Trigger */}
              <div className="pt-4 flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-snug mt-1 font-normal line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                {/* Circular Black Arrow Button (Matching reference) */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-cyan-600 group-hover:scale-105 transition-all mt-0.5">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Arrows Controls at bottom right */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-4">
          <div className="text-xs text-slate-500 font-medium">
            Viser <strong>{filteredProjects.length}</strong> utvalgte produksjoner
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-800 transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-white transition-colors cursor-pointer shadow-sm"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
