import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { trackEvent } from '../utils/analytics.ts';

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  metrics: string;
  description: string;
  problemSolvedNo: string;
  problemSolvedEn: string;
  contributionNo: string;
  contributionEn: string;
  keyFeatures: string[];
  techStack: string[];
  imageSrc: string;
  category: 'mobile' | 'web' | 'fintech' | 'logistics' | 'iot';
  isFullCaseStudy?: boolean;
}

interface ProjectsShowcaseSectionProps {
  onInspectProject: (project: ProjectCaseStudy) => void;
  onStartProject?: () => void;
  onViewAllProjects?: () => void;
  compactMode?: boolean;
}

export const ProjectsShowcaseSection: React.FC<ProjectsShowcaseSectionProps> = ({
  onInspectProject,
  onStartProject,
  onViewAllProjects,
  compactMode = false,
}) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeFilter, setActiveFilter] = useState<'all' | 'mobile' | 'web' | 'fintech'>('all');

  const projectsData: ProjectCaseStudy[] = [
    {
      id: 'frakt360',
      title: 'Frakt360',
      subtitle:
        language === 'no'
          ? 'Komplett digital fraktplattform for moderne norske bedrifter'
          : 'Complete digital logistics platform for modern Norwegian businesses',
      client: 'Frakt360 / Geton',
      industry: language === 'no' ? 'Logistikk & E-handel' : 'Logistics & E-commerce',
      metrics: 'PostNord · Bring · WMS',
      description:
        language === 'no'
          ? 'Frakt360 samler booking, prissammenligning, Zebra-etiketter, sanntidssporing og retur i én plattform koblet til Shopify og WooCommerce.'
          : 'Frakt360 unifies shipment booking, carrier rates, Zebra label printing, live tracking, and returns in one platform connected to e-commerce stores.',
      problemSolvedNo:
        'Eliminerer manuell frakthåndtering og splittede transportørportaler for nettbutikker og lager.',
      problemSolvedEn:
        'Eliminates fragmented carrier portals and manual order entry for growing e-commerce teams.',
      contributionNo:
        'Designet og utviklet fullstack webplattform, mobilflyt, API-integrasjoner og automatisert etikettutskrift.',
      contributionEn:
        'Designed and built the web platform, mobile tools, carrier APIs, and automated printing pipelines.',
      keyFeatures: [
        'Ordre → Fraktvalg → Booking → Etikett → Sporing → Levering',
        'PostNord & Bring API',
        'Shopify, WooCommerce & Ongoing WMS',
      ],
      techStack: ['React 19', 'Next.js', 'React Native', 'Node.js', 'PostgreSQL'],
      imageSrc: '/assets/aistudio/Frakt360__Komplett_norsk_fraktplattform_6546bb91.webp',
      category: 'logistics',
      isFullCaseStudy: true,
    },
    {
      id: 'swallet',
      title: 'Swallet',
      subtitle:
        language === 'no'
          ? 'Fintech-plattform for full oversikt over abonnementer og faste utgifter'
          : 'Fintech platform for managing subscriptions and recurring household costs',
      client: 'Swallet / Geton',
      industry: language === 'no' ? 'Fintech & Økonomi' : 'Fintech & Personal Finance',
      metrics: 'PSD2 · BankID · Abonnement',
      description:
        language === 'no'
          ? 'Swallet kobler seg sikkert til bankkontoen via Open Banking (PSD2), identifiserer faste trekk automatisk og viser smartere alternativer.'
          : 'Swallet connects via licensed Open Banking (PSD2), detects recurring subscriptions automatically, and surfaces better alternatives.',
      problemSolvedNo:
        'Gjør skjulte abonnementer og løpende utgifter synlige uten manuell budsjettføring.',
      problemSolvedEn:
        'Makes hidden recurring subscriptions visible without manual spreadsheet tracking.',
      contributionNo:
        'Konsept, UX/UI-design, BankID-sikkerhetsflyt, Open Banking-integrasjon og mobilapp.',
      contributionEn:
        'Product concept, UX/UI, BankID security flow, Open Banking data pipeline, and mobile app.',
      keyFeatures: [
        'Automatisk abonnementsdeteksjon via PSD2',
        'Markedsplass for strøm, mobil og forsikring',
        'BankID og sikker kryptering',
      ],
      techStack: ['React Native', 'Next.js', 'Node.js', 'PSD2 Open Banking', 'BankID'],
      imageSrc: '/assets/aistudio/Swallet_Fintech_Case_Study_Showcase_302711d7.webp',
      category: 'fintech',
      isFullCaseStudy: true,
    },
    {
      id: 'hentli',
      title: 'Hentli',
      subtitle:
        language === 'no'
          ? 'Kartbasert leveringsapp med kunde- og sjåførflyt i én løsning'
          : 'Map-based delivery marketplace unifying customer and driver journeys',
      client: 'Hentli / Geton',
      industry: language === 'no' ? 'Mobilitet & Lokal Frakt' : 'Mobility & Local Delivery',
      metrics: 'iOS & Android · Sanntidskart',
      description:
        language === 'no'
          ? 'Hentli lar privatpersoner og bedrifter legge ut lokale fraktoppdrag, mens tilgjengelige sjåfører aksepterer oppdrag direkte i kartet.'
          : 'Hentli enables local delivery matching in real time, pairing live map discovery with seamless dual workflows for customers and drivers.',
      problemSolvedNo:
        'Forenkler lokal punkt-til-punkt-transport som tidligere krevde kostbare budtjenester.',
      problemSolvedEn:
        'Simplifies rapid local transport matching between senders and nearby available drivers.',
      contributionNo:
        'Komplett design og apputvikling for iOS og Android med sanntidskart, push-varsler og oppgjør.',
      contributionEn:
        'End-to-end iOS and Android design and engineering with live GPS mapping and notifications.',
      keyFeatures: [
        'Kunde- og sjåføropplevelse i samme app',
        'Sanntids kartmatching og GPS-sporing',
        'Fotobevis og automatisk oppgjør',
      ],
      techStack: ['React Native', 'TypeScript', 'Node.js', 'WebSockets', 'PostgreSQL'],
      imageSrc: '/assets/aistudio/Hentli__Two_Experiences__One_App_706526e8.png',
      category: 'mobile',
      isFullCaseStudy: true,
    },
    {
      id: 'vestlandsk-hjertesenter',
      title: 'Vestlandsk Hjertesenter',
      subtitle:
        language === 'no'
          ? 'Pasientvennlig nettside og timebooking for spesialistklinikk i Bergen'
          : 'Patient-focused web platform and online booking for Bergen cardiology clinic',
      client: 'Vestlandsk Hjertesenter AS',
      industry: language === 'no' ? 'Helse & Spesialistklinikk' : 'Healthcare & Cardiology',
      metrics: 'Nettside · Timebooking · SEO',
      description:
        language === 'no'
          ? 'Moderne, skandinavisk nettside med tydelig oversikt over hjerteundersøkelser, pasientveiledere og friksjonsfri digital timebooking.'
          : 'Calm Scandinavian healthcare website showcasing cardiac diagnostics, patient guides, and frictionless online booking.',
      problemSolvedNo:
        'Gir pasienter trygg informasjon og mulighet til å bestille time på nett på under ett minutt.',
      problemSolvedEn:
        'Gives patients clear diagnostic information and sub-minute online appointment booking.',
      contributionNo:
        'Skreddersydd nettdesign, responsiv frontend, bookingintegrasjon og lokal søkemotoroptimalisering.',
      contributionEn:
        'Custom web design, responsive engineering, booking flow, and regional SEO architecture.',
      keyFeatures: [
        'Direkte digital timebooking for pasienter',
        'Tydelig oversikt over kardiologiske tjenester',
        'Optimalisert for Bergen og Vestland',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Booking API'],
      imageSrc: '/assets/images/vestlandsk_hjertesenter_mockup_1793710496839.webp',
      category: 'web',
      isFullCaseStudy: true,
    },
    {
      id: 'geton-scooters',
      title: 'Geton Scooters',
      subtitle:
        language === 'no'
          ? 'Fra mobilapp til komplett IoT-plattform for elsparkesykler'
          : 'From mobile app to a live IoT e-scooter mobility platform',
      client: 'Geton AS (Sotra)',
      industry: language === 'no' ? 'IoT, MQTT & Mobilitet' : 'IoT, MQTT & Mobility',
      metrics: 'iOS & Android · MQTT · Geofencing',
      description:
        language === 'no'
          ? 'Digital mikromobilitetsplattform som kobler iOS- og Android-app, sanntidskart og geofencing («Outside Zone») med fysiske elsparkesykler via IoT og MQTT.'
          : 'Micro-mobility platform connecting iOS and Android apps, live GPS maps, and geofencing (“Outside Zone”) with physical e-scooters via IoT and MQTT telemetry.',
      problemSolvedNo:
        'Samler kart, QR-skanning, leiepass og toveis enhetskommunikasjon i én sammenhengende tjeneste.',
      problemSolvedEn:
        'Unifies vehicle discovery, QR unlock, passes, and bidirectional hardware messaging in one flow.',
      contributionNo:
        'Apputvikling for iOS og Android, geofencing-logikk, MQTT publish/subscribe-kobling og reell utleiedrift på Sotra.',
      contributionEn:
        'Mobile app engineering for iOS & Android, geofencing zones, MQTT messaging, and live fleet ops at Sotra.',
      keyFeatures: [
        'Kartvisning, geofencing & «Outside Zone»-varsling',
        'IoT-telemetri med lettvekts MQTT publish/subscribe',
        'Geton Pass & fullført tur med tilbakemelding',
      ],
      techStack: ['iOS & Android', 'IoT', 'MQTT', 'Geofencing', 'Backend API'],
      imageSrc: '/assets/aistudio/Geton_Scooters_IoT_Mobility_Case_Study_84e80f94.png',
      category: 'iot',
      isFullCaseStudy: true,
    },
    {
      id: 'norraq-style',
      title: 'NORRAQ Style',
      subtitle:
        language === 'no'
          ? 'Digital plattform som kobler modeller, studenter, frisører og salonger'
          : 'Digital beauty-tech platform connecting models, students, stylists, and salons',
      client: 'NORRAQ Style',
      industry: language === 'no' ? 'Beauty Tech & Plattform' : 'Beauty Tech & Platform',
      metrics: 'Matching · Booking · Chat',
      description:
        language === 'no'
          ? 'NORRAQ Style gjør det enklere for studenter, lærlinger, frisører og salonger å finne riktige modeller gjennom smart søk, booking og privat chat.'
          : 'NORRAQ Style helps beauty students, apprentices, stylists, and salons connect with suitable models through smart search, booking, and private chat.',
      problemSolvedNo:
        'Erstatter tidkrevende leting i sosiale medier med strukturert modellmatching og tydelig bookingflyt.',
      problemSolvedEn:
        'Replaces fragmented social media searches with structured model matching and clear booking workflows.',
      contributionNo:
        'Konseptuell produktstruktur for fire brukerroller, geografisk søk, bookingflyt, chat og verifisering.',
      contributionEn:
        'Multi-role product design covering discovery filters, structured requests, private chat, and trust flows.',
      keyFeatures: [
        'Smart søk og geografisk matching for behandlinger',
        'Rollebaserte profiler og strukturert bookingflyt',
        'Privat chat, varsler, verifisering og vurderinger',
      ],
      techStack: ['Plattformdesign', 'Geo-Matching', 'Booking', 'Privat Chat', 'Verifisering'],
      imageSrc: '/assets/aistudio/NORRAQ_Style__Fra_matching_til_booking_00b2d200.png',
      category: 'web',
      isFullCaseStudy: true,
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : activeFilter === 'mobile'
      ? projectsData.filter(
          (p) =>
            p.id === 'frakt360' ||
            p.id === 'swallet' ||
            p.id === 'hentli' ||
            p.id === 'geton-scooters' ||
            p.id === 'norraq-style'
        )
      : activeFilter === 'web'
      ? projectsData.filter(
          (p) =>
            p.id === 'frakt360' ||
            p.id === 'swallet' ||
            p.id === 'vestlandsk-hjertesenter' ||
            p.id === 'norraq-style'
        )
      : projectsData.filter(
          (p) =>
            p.id === 'frakt360' ||
            p.id === 'swallet' ||
            p.id === 'geton-scooters' ||
            p.id === 'hentli'
        );

  const filterOptions = [
    { id: 'all', label: language === 'no' ? 'Alle (6)' : 'All (6)' },
    { id: 'mobile', label: language === 'no' ? 'Mobilapper' : 'Mobile Apps' },
    { id: 'web', label: language === 'no' ? 'Web & Plattformer' : 'Web & Platforms' },
    { id: 'fintech', label: language === 'no' ? 'Fintech, IoT & Logistikk' : 'Fintech, IoT & Logistics' },
  ];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={`w-full py-16 sm:py-24 lg:py-28 relative z-20 transition-colors duration-300 border-b ${
        isLight
          ? 'bg-[#f4f3f0] text-neutral-900 border-neutral-200/80'
          : 'bg-[#050b1d] text-white border-white/10'
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span
              className={`text-xs font-semibold tracking-[0.2em] uppercase block mb-3 ${
                isLight ? 'text-sky-700' : 'text-cyan-300'
              }`}
            >
              {language === 'no' ? 'UTVALGTE PROSJEKTER' : 'SELECTED CASE STUDIES'}
            </span>
            <h2
              id="projects-heading"
              className={`text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-[1.12] [text-wrap:balance] ${
                isLight ? 'text-neutral-900' : 'text-white'
              }`}
            >
              {language === 'no' ? 'Fra idé til digitale produkter' : 'From idea to digital products'}
            </h2>
            <p
              className={`mt-4 text-base sm:text-lg leading-relaxed max-w-xl ${
                isLight ? 'text-neutral-600' : 'text-slate-300'
              }`}
            >
              {language === 'no'
                ? 'Utforsk et utvalg digitale løsninger, mobilapper og plattformer vi har jobbet med.'
                : 'Explore a selection of digital products, mobile apps, and platforms we have engineered.'}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id as typeof activeFilter)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border min-h-[38px] ${
                    isActive
                      ? isLight
                        ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                        : 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.3)]'
                      : isLight
                      ? 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100'
                      : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Balanced 1/2/3-Column Responsive Grid for 6 Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => {
                trackEvent('project_card_click', { project: project.id, location: 'projects_grid' });
                onInspectProject(project);
              }}
              className={`group rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isLight
                  ? 'bg-white border-[#e7e7e5] hover:border-neutral-400 shadow-[0_6px_28px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.09)] hover:-translate-y-1'
                  : 'bg-[#081026]/90 border-white/10 hover:border-cyan-400/50 shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:-translate-y-1'
              }`}
            >
              <div>
                {/* Full Uncropped Case Study Mockup Frame */}
                <div
                  className={`aspect-video w-full overflow-hidden border-b ${
                    isLight ? 'bg-neutral-100 border-neutral-200/80' : 'bg-[#040816] border-white/10'
                  }`}
                >
                  <img
                    src={project.imageSrc}
                    alt={`${project.title} — ${project.industry}`}
                    width={1280}
                    height={720}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Case Study Details */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
                    <span className={isLight ? 'text-sky-700' : 'text-cyan-300'}>
                      {project.industry}
                    </span>
                    <span className={isLight ? 'text-neutral-500 font-medium' : 'text-slate-400 font-medium'}>
                      {project.metrics}
                    </span>
                  </div>

                  <div>
                    <h3
                      className={`text-xl sm:text-2xl font-display font-extrabold mb-1.5 transition-colors ${
                        isLight
                          ? 'text-neutral-900 group-hover:text-black'
                          : 'text-white group-hover:text-cyan-200'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isLight ? 'text-neutral-700' : 'text-slate-200'
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Structured Concise Breakdown (Challenge & Delivery) */}
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t text-xs ${
                      isLight ? 'border-neutral-100 text-neutral-600' : 'border-white/10 text-slate-300'
                    }`}
                  >
                    <div>
                      <span
                        className={`font-bold uppercase tracking-wider text-[10px] block mb-1 ${
                          isLight ? 'text-neutral-400' : 'text-slate-400'
                        }`}
                      >
                        {language === 'no' ? 'Utfordring' : 'Challenge'}
                      </span>
                      <p className="leading-relaxed">
                        {language === 'no' ? project.problemSolvedNo : project.problemSolvedEn}
                      </p>
                    </div>
                    <div>
                      <span
                        className={`font-bold uppercase tracking-wider text-[10px] block mb-1 ${
                          isLight ? 'text-neutral-400' : 'text-slate-400'
                        }`}
                      >
                        {language === 'no' ? 'Getons leveranse' : 'Geton Delivery'}
                      </span>
                      <p className="leading-relaxed">
                        {language === 'no' ? project.contributionNo : project.contributionEn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Footer Action Row */}
              <div
                className={`px-5 sm:px-6 py-4 border-t flex items-center justify-between gap-3 ${
                  isLight ? 'border-neutral-100 bg-neutral-50/60' : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                <span
                  className={`text-xs font-medium truncate ${
                    isLight ? 'text-neutral-500' : 'text-slate-400'
                  }`}
                >
                  {project.techStack.slice(0, 3).join(' · ')}
                </span>

                <a
                  href={`/prosjekter/${project.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onInspectProject(project);
                  }}
                  className={`inline-flex items-center gap-1.5 text-xs font-bold shrink-0 transition-colors ${
                    isLight
                      ? 'text-neutral-900 group-hover:text-sky-700'
                      : 'text-cyan-300 group-hover:text-cyan-200'
                  }`}
                >
                  <span>{language === 'no' ? 'Se prosjektet' : 'View project'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Clean Bottom Action Strip */}
        {(onViewAllProjects || onStartProject) && !compactMode && (
          <div
            className={`mt-10 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              isLight ? 'border-neutral-200' : 'border-white/10'
            }`}
          >
            {onViewAllProjects && (
              <a
                href="/prosjekter"
                onClick={(e) => {
                  e.preventDefault();
                  onViewAllProjects();
                }}
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                  isLight
                    ? 'text-neutral-800 hover:text-sky-700'
                    : 'text-slate-200 hover:text-cyan-300'
                }`}
              >
                <span>
                  {language === 'no'
                    ? 'Se fullstendig prosjektoversikt'
                    : 'View complete portfolio'}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            {onStartProject && (
              <button
                type="button"
                onClick={onStartProject}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-semibold text-white btn-cyan-gradient inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>
                  {language === 'no'
                    ? 'Har du et lignende prosjekt?'
                    : 'Planning a similar product?'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
