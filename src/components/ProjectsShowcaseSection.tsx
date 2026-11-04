import React, { useState, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Building,
  ShieldCheck,
  ArrowUpRight,
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
  imageSrc: string;
  isFullCaseStudy?: boolean;
}

interface ProjectsShowcaseSectionProps {
  onInspectProject: (project: ProjectCaseStudy) => void;
  onStartProject?: () => void;
}

export const ProjectsShowcaseSection: React.FC<ProjectsShowcaseSectionProps> = ({
  onInspectProject,
  onStartProject,
}) => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'mobile' | 'web' | 'fintech'>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // EXACTLY 4 FLAGSHIP PROJECTS WITH PREMIUM IMAGES (User requested 4 cards total)
  const projectsData: ProjectCaseStudy[] = [
    // 1. Frakt360 (Flagship Logistics Platform)
    {
      id: 'frakt360',
      title: 'Frakt360',
      subtitle:
        language === 'no'
          ? 'En komplett fraktplattform for moderne norske bedrifter – booking, sporing, etiketter og retur'
          : 'A complete Norwegian logistics platform for modern businesses – booking, tracking, labels and returns',
      tags: [
        { label: 'App', color: 'bg-blue-600 text-white' },
        { label: language === 'no' ? 'Nettside' : 'Web', color: 'bg-cyan-600 text-white' },
        { label: language === 'no' ? 'Logistikk' : 'Logistics', color: 'bg-emerald-600 text-white' },
      ],
      client: 'Frakt360 / Geton',
      industry: language === 'no' ? 'Logistikk & E-handel' : 'Logistics & E-commerce',
      year: '2026',
      metrics: 'PostNord · Bring · Ongoing WMS',
      description:
        language === 'no'
          ? 'Frakt360 samler hele logistikkflyten i én digital plattform: opprett forsendelser, sammenlign fraktpriser, skriv ut Zebra-etiketter, følg leveringer i sanntid og automatiser ordreflyt fra Shopify, WooCommerce og Mystore.'
          : 'Frakt360 brings the logistics workflow together in one digital platform: create shipments, compare carrier rates, generate Zebra shipping labels, follow deliveries in real-time, and automate e-commerce orders from Shopify, WooCommerce and Mystore.',
      keyFeatures: [
        language === 'no'
          ? 'Ordre → Fraktvalg → Booking → Etikett → Sporing → Levering → Faktura'
          : 'Order → Carrier Rate → Booking → Zebra Label → Tracking → Delivery',
        language === 'no'
          ? 'Direkte PostNord og Bring API-integrasjoner'
          : 'Direct PostNord and Bring carrier REST integrations',
        language === 'no'
          ? 'Shopify, WooCommerce og Mystore e-handelskobling'
          : 'Shopify, WooCommerce and Mystore e-commerce sync',
        language === 'no'
          ? 'Automatisk Zebra etikettutskrift og Ongoing WMS lagerkobling'
          : 'Automated Zebra printing & Ongoing WMS warehouse integration',
        language === 'no'
          ? 'Sanntids sporingstelemetri og QR-basert returflyt'
          : 'Real-time telemetry tracking & QR-based returns',
      ],
      techStack: ['React 19', 'Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'Carrier APIs'],
      imageSrc: '/assets/aistudio/Frakt360__Komplett_norsk_fraktplattform_6546bb91.png',
      isFullCaseStudy: true,
    },

    // 2. Swallet (Fintech & Subscription Platform)
    {
      id: 'swallet',
      title: 'Swallet',
      subtitle:
        language === 'no'
          ? 'Full kontroll på abonnementer og faste utgifter – samle, forstå og spar penger hver måned'
          : 'One place to understand, manage and reduce your subscriptions and recurring expenses',
      tags: [
        { label: 'App', color: 'bg-purple-600 text-white' },
        { label: 'Fintech', color: 'bg-blue-600 text-white' },
        { label: 'Open Banking', color: 'bg-emerald-600 text-white' },
      ],
      client: 'Swallet / Geton',
      industry: language === 'no' ? 'Fintech & Personlig Økonomi' : 'Fintech & Personal Finance',
      year: '2026',
      metrics: 'PSD2 · BankID · 4 320 kr/år spart',
      description:
        language === 'no'
          ? 'Swallet er en norsk fintech-plattform som gir forbrukere full oversikt over abonnementer, faste utgifter og muligheter til å spare penger gjennom lisensiert Open Banking (PSD2).'
          : 'Swallet is a Norwegian personal-finance platform designed to give consumers a clearer picture of their subscriptions, recurring expenses and opportunities to save money through Open Banking.',
      keyFeatures: [
        language === 'no'
          ? 'Se hva du betaler → Forstå utgifter → Finn alternativer → Spar penger'
          : 'See what you pay → Understand expenses → Discover alternatives → Save money',
        language === 'no'
          ? 'Automatisk abonnementsoversikt via Open Banking (PSD2)'
          : 'Automated subscription discovery via PSD2 Open Banking',
        language === 'no'
          ? '«Få bedre tilbud» markedsplass for strøm, forsikring og telecom'
          : 'Marketplace for power, telecom, and insurance savings',
        language === 'no'
          ? 'Personlig forbruksinnsikt med estimert årlig besparelse (4 320 kr/år)'
          : 'Consumer financial analytics with estimated annual savings',
        language === 'no'
          ? 'Strenge personvernrutiner og kryptert BankID-tilkobling'
          : 'Strict data privacy and encrypted BankID verification',
      ],
      techStack: ['React 19', 'Next.js', 'React Native', 'Node.js', 'PSD2 API', 'BankID', 'PostgreSQL'],
      imageSrc: '/assets/aistudio/Swallet_Fintech_Case_Study_Showcase_302711d7.png',
      isFullCaseStudy: true,
    },

    // 3. Hentli (Local Delivery & Mobility Platform)
    {
      id: 'hentli',
      title: 'Hentli',
      subtitle:
        language === 'no'
          ? 'Lokal levering, redesignet fra bunnen – kartbasert markedsplass som kobler leveringsbehov med sjåfører i sanntid'
          : 'Local delivery, reimagined – map-based delivery marketplace connecting delivery demand with available drivers',
      tags: [
        { label: 'App', color: 'bg-purple-600 text-white' },
        { label: language === 'no' ? 'Kart & Sanntid' : 'Maps & Real-time', color: 'bg-indigo-600 text-white' },
        { label: language === 'no' ? 'Markedsplass' : 'Marketplace', color: 'bg-emerald-600 text-white' },
      ],
      client: 'Hentli / Geton',
      industry: language === 'no' ? 'Logistikk & Mobilitet' : 'Logistics & On-Demand Delivery',
      year: '2026',
      metrics: 'Kartbasert matching · iOS & Android',
      description:
        language === 'no'
          ? 'Hentli forvandler lokal frakt til en åpen markedsplass: kunder publiserer leveringsoppdrag, og sjåfører oppdager og aksepterer dem direkte i det levende kartet. Én felles app med to skreddersydde opplevelser for kunde og sjåfør.'
          : 'Hentli turns local deliveries into an open marketplace: customers publish jobs, nearby drivers discover them on an interactive map, and the right driver delivers. One app combining customer and driver flows.',
      keyFeatures: [
        language === 'no'
          ? 'Kunde- og sjåføropplevelse i én og samme applikasjon'
          : 'Customer and driver experiences inside one application',
        language === 'no'
          ? 'Interaktiv kartmatching med sanntids GPS-ruting'
          : 'Interactive map-based matching with real-time GPS routing',
        language === 'no'
          ? 'Friksjonsfri innlogging med mobilnummer og OTP'
          : 'Frictionless onboarding using mobile number and OTP',
        language === 'no'
          ? 'Sub-sekunds push-varsler gjennom hele leveringsreisen'
          : 'Instant push notifications throughout the delivery lifecycle',
        language === 'no'
          ? 'Fotobevis ved levering og automatisert oppgjør'
          : 'Photographic proof of delivery and automated payout',
      ],
      techStack: ['React Native', 'TypeScript', 'Node.js', 'Mapbox / Google Maps', 'WebSockets', 'PostgreSQL'],
      imageSrc: '/assets/aistudio/Hentli_Case_Study__Two_Seamless_Experiences_78303fe2.png',
      isFullCaseStudy: true,
    },

    // 4. Vestlandsk Hjertesenter (Cardiology Specialist Clinic in Bergen)
    {
      id: 'vestlandsk-hjertesenter',
      title: 'Vestlandsk Hjertesenter',
      subtitle:
        language === 'no'
          ? 'Spesialistklinikk for hjerte- og karsykdommer i Bergen – digital pasientportal, timebooking og medisinsk veiledning'
          : 'Premier cardiology specialist clinic in Bergen – digital patient portal, appointment booking and clinical advice',
      tags: [
        { label: language === 'no' ? 'Kardiologi' : 'Healthcare', color: 'bg-teal-600 text-white' },
        { label: language === 'no' ? 'Nettside' : 'Web Portal', color: 'bg-sky-600 text-white' },
        { label: 'Timebooking', color: 'bg-emerald-600 text-white' },
      ],
      client: 'Vestlandsk Hjertesenter AS',
      industry: language === 'no' ? 'Spesialisthelsetjeneste' : 'Cardiology & Healthcare',
      year: '2026',
      metrics: 'vestlandskhjertesenter.no · 0 ventetid',
      description:
        language === 'no'
          ? 'Vestlandsk Hjertesenter tilbyr avansert kardiologisk utredning i Bergen uten offentlig ventetid. Geton utviklet en trygghetsvekkende skandinavisk nettside og digital pasientportal med direkte timebooking, oversikt over hjerteundersøkelser og lokal SEO.'
          : 'Vestlandsk Hjertesenter provides premier cardiovascular diagnostics in Bergen with zero wait times. Geton built a reassuring Scandinavian web platform featuring online appointment booking, diagnostic catalogs, and local SEO.',
      keyFeatures: [
        language === 'no'
          ? 'Direkte digital timebooking for pasienter uten ventetid'
          : 'Direct online appointment booking with zero waiting times',
        language === 'no'
          ? 'Komplett oversikt: Ekkokardiografi, Arbeids-EKG, 24t Holter & blodtrykk'
          : 'Comprehensive diagnostic catalog: Echo, Stress ECG, 24h Holter',
        language === 'no'
          ? 'Pedagogiske pasientveiledere for forberedelse før undersøkelser'
          : 'Patient preparation guides and clear fee transparency',
        language === 'no'
          ? 'Strenge personvernrutiner og helsedata-sikkerhet (GDPR)'
          : 'Strict medical data security and GDPR compliance',
        language === 'no'
          ? 'Optimalisert lokal SEO for Bergen og Vestland fylke'
          : 'Optimized regional search presence across Western Norway',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Booking API', 'SEO Engine'],
      imageSrc: '/assets/images/vestlandsk_hjertesenter_mockup_1793710496839.jpg',
      isFullCaseStudy: true,
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : activeFilter === 'mobile'
      ? projectsData.filter((p) => p.id === 'frakt360' || p.id === 'swallet' || p.id === 'hentli')
      : activeFilter === 'web'
      ? projectsData.filter((p) => p.id === 'frakt360' || p.id === 'swallet' || p.id === 'vestlandsk-hjertesenter')
      : projectsData.filter((p) => p.id === 'frakt360' || p.id === 'swallet');

  const filterOptions = [
    { id: 'all', label: language === 'no' ? 'Alle prosjekter (4)' : 'All Projects (4)' },
    { id: 'mobile', label: language === 'no' ? 'Mobilapper' : 'Mobile Apps' },
    { id: 'web', label: language === 'no' ? 'Web & Plattformer' : 'Web & Platforms' },
    { id: 'fintech', label: language === 'no' ? 'Fintech & Logistikk' : 'Fintech & Logistics' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="projects"
      className="w-full py-28 sm:py-36 bg-[#fafaf9] text-neutral-900 relative z-30 transition-colors duration-300 overflow-hidden border-t border-b border-neutral-200/80"
    >
      {/* 
        CREATIVE LIGHT SCANDINAVIAN VISUAL DEPTH:
        - Warm white textured field
        - Micro dot matrix pattern
        - Gentle blurred ambient warmth
      */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000000 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[420px] h-[420px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* ========================================================
            SECTION HEADER (Creative Nordic Editorial Typography)
        ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.22em] text-neutral-500 uppercase mb-4">
            <span>
              {language === 'no'
                ? 'VÅRE PROSJEKTER • 4 UTVALGTE CASE STUDIES'
                : 'OUR PROJECTS • 4 FEATURED CASE STUDIES'}
            </span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] font-display font-extrabold text-neutral-900 tracking-tight leading-[1.12] [text-wrap:balance]">
            {language === 'no' ? 'Våre tidligere prosjekter' : 'Our Selected Projects'}
          </h2>

          <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto [text-wrap:balance]">
            {language === 'no'
              ? 'Vi har hatt gleden av å samarbeide med en rekke forskjellige bedrifter og bransjer, og tilbyr web- og apputvikling som kombinerer elegant design med høy ytelse og funksjonalitet.'
              : 'We have had the pleasure of partnering with ambitious businesses across industries, delivering web and mobile solutions that marry Scandinavian design with high performance.'}
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12 sm:mb-16">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-sm scale-[1.02]'
                    : 'bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200/80 shadow-xs'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* ========================================================
            EXACTLY 4 LARGE CREATIVE CARDS (User request: "TOTAL WILL BE 4")
            - Desktop: 4 equal columns side-by-side
            - Tablet & Mobile: Touch-scrollable with carousel controls
            - High-fidelity realistic studio images matching reference
        ======================================================== */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 pb-4"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onInspectProject(project)}
              className="group relative rounded-[28px] p-4 bg-white border border-[#e7e7e5] hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-2 cursor-pointer"
            >
              <div>
                {/* 
                  TOP IMAGE CONTAINER:
                  - High-fidelity realistic product photography
                  - Tags rendered in top-left matching the reference image
                */}
                <div className="relative w-full aspect-[16/11] rounded-[20px] overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs mb-5">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient shadow overlay for pill legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Top Left Tags (Matching reference image style) */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 flex-wrap pointer-events-none">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-xs ${tag.color}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  {/* Case Study Hover Pill Indicator */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-medium text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                      {project.isFullCaseStudy
                        ? language === 'no'
                          ? 'Klikk for å lese case study'
                          : 'Click to read case study'
                        : language === 'no'
                        ? 'Se prosjekt'
                        : 'View project'}
                    </span>
                    <span className="text-[10px] font-medium text-white/90 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Unboxed Metadata Kicker */}
                <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-1">
                  {project.industry}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold font-display text-neutral-900 group-hover:text-black transition-colors mb-1.5">
                  {project.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal line-clamp-2 mb-4">
                  {project.subtitle}
                </p>
              </div>

              {/* Bottom Card Row: Tech Metric + Circular Arrow Button */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between mt-2">
                <div className="text-[11px] font-medium text-neutral-500 truncate max-w-[170px]">
                  {project.metrics}
                </div>

                {/* Circular Black Arrow Button (matching reference image) */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-900 group-hover:bg-black text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            BOTTOM STATUS BAR:
            - Demonstrates the 4 featured productions
            - Clean proposal CTA button
        ======================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-200/80 mt-10">
          <div className="text-xs sm:text-sm text-neutral-500 font-medium text-center sm:text-left">
            {language === 'no' ? (
              <>
                Viser <strong>4 utvalgte produksjoner</strong> innen logistikk, fintech, eiendom og e-handel
              </>
            ) : (
              <>
                Showing <strong>4 featured case studies</strong> in logistics, fintech, real estate, and e-commerce
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            {onStartProject && (
              <button
                onClick={onStartProject}
                className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <span>{language === 'no' ? 'Start et prosjekt med oss' : 'Start a project with us'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
