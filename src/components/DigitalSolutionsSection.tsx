import React, { useState } from 'react';
import {
  ArrowUpRight,
  Layers,
  X,
  CheckCircle2,
  Sparkles,
  Cpu,
  Workflow,
  ShieldCheck,
  Code2,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

// Direct local imports so Vite bundles and fingerprints them for production deployment on GitHub Pages
import imgMultidisciplinary from '../assets/images/software_multidisciplinary_ui_1793710478928.jpg';
import imgBespoke from '../assets/images/software_bespoke_architecture_1793710479073.jpg';
import imgIdeaToLaunch from '../assets/images/software_idea_to_launch_1793710481314.jpg';
import imgDevops from '../assets/images/software_devops_monitoring_1793710481343.jpg';

interface DigitalSolutionsSectionProps {
  onGetStarted: () => void;
  onExploreServices?: () => void;
}

interface PillarDetail {
  number: string;
  tagNo: string;
  tagEn: string;
  titleNo: string;
  titleEn: string;
  headlineNo: string;
  headlineEn: string;
  descriptionNo: string;
  descriptionEn: string;
  image: string;
  badge: string;
  architecturePointsNo: string[];
  architecturePointsEn: string[];
  deliverablesNo: string[];
  deliverablesEn: string[];
}

export const DigitalSolutionsSection: React.FC<DigitalSolutionsSectionProps> = ({
  onGetStarted,
  onExploreServices,
}) => {
  const { t, language } = useLanguage();
  const [selectedPillar, setSelectedPillar] = useState<PillarDetail | null>(null);

  // 4 HIGH-END SOFTWARE & ARCHITECTURE CREATIVE IMAGERY
  const cardImages = [
    {
      src: imgMultidisciplinary,
      badge: 'MODERN UI & CODE',
      alt: 'Multidisciplinary React TypeScript and Mobile Architecture',
    },
    {
      src: imgBespoke,
      badge: 'MODULAR BACKEND',
      alt: 'Tailored 3D Modular Cloud & API Microservices Infrastructure',
    },
    {
      src: imgIdeaToLaunch,
      badge: 'DESIGN TO PROD',
      alt: 'Design System Compiling Into Live Mobile and Web Platform',
    },
    {
      src: imgDevops,
      badge: 'DEVOPS & TELEMETRY',
      alt: '24/7 Real-Time Cloud Monitoring & Microservice Topology',
    },
  ];

  // Deep-dive detail data for each pillar when clicked
  const pillarDetails: PillarDetail[] = [
    {
      number: '01',
      tagNo: 'TVERRFAGLIG EKSPERTISE',
      tagEn: 'MULTIDISCIPLINARY EXPERTISE',
      titleNo: 'Tverrfaglig ekspertise under ett tak',
      titleEn: 'Multidisciplinary Engineering Under One Roof',
      headlineNo: 'Design, utvikling, strategi og skyteknologi samlet uten byråkrati',
      headlineEn: 'Design, engineering, cloud architecture, and strategy unified without agency friction',
      descriptionNo:
        'Hos Geton AS slipper du å koordinere mellom separate designbyråer, frilansere og driftsleverandører. Vi samler senior produktdesignere, full-stack utviklere og skyarkitekter i ett samkjørt team. Resultatet er kortere vei fra konsept til fungerende kode, lavere risiko og et helhetlig produkt som henger sammen fra første databasemodell til siste mikrosekunds animasjon.',
      descriptionEn:
        'At Geton AS, you never have to coordinate between fractured design agencies, freelance contractors, and DevOps vendors. We unite senior product designers, full-stack engineers, and cloud architects within one cohesive unit. The outcome: accelerated delivery from whiteboard to production, zero communication silos, and seamless consistency from database schema to sub-millisecond interaction design.',
      image: imgMultidisciplinary,
      badge: 'MODERN UI & CODE',
      architecturePointsNo: [
        'Produktdesign & UX: Interaktive prototyper i Figma og skalerbare designsystemer',
        'Frontend & Mobil: React, React Native, Next.js og TypeScript med kompromissløs fart',
        'Backend & Data: Node.js, Go og PostgreSQL med strenge typer og ACID-garantier',
        'Sky & DevOps: Docker, Terraform og automatiserte CI/CD pipelines',
      ],
      architecturePointsEn: [
        'Product Design & UX: Interactive high-fidelity Figma prototypes and design systems',
        'Frontend & Mobile: React, React Native, Next.js & TypeScript with uncompromising speed',
        'Backend & Data: Node.js, Go & PostgreSQL with strict typing and ACID transaction safety',
        'Cloud & DevOps: Docker, Terraform infrastructure-as-code and automated CI/CD pipelines',
      ],
      deliverablesNo: [
        'Komplett Figma designbibliotek med designtokens',
        'Produksjonsklar kildekode med 100% eierskap',
        'Omfattende teknisk arkitekturdokumentasjon',
        'Automatisert test- og byggoppsett',
      ],
      deliverablesEn: [
        'Production Figma design token library',
        'Full production codebase with 100% client IP ownership',
        'Comprehensive technical architecture specification',
        'Automated CI/CD test and deployment pipeline',
      ],
    },
    {
      number: '02',
      tagNo: 'SKREDDERSYDDE LØSNINGER',
      tagEn: 'TAILORED SOLUTIONS',
      titleNo: 'Skreddersydd programvare bygget rundt bedriften',
      titleEn: 'Bespoke Software Engineered for Your Operations',
      headlineNo: 'Teknologi tilpasset din unike forretningsmodell – ikke omvendt',
      headlineEn: 'Technology molded around your business model — never the other way around',
      descriptionNo:
        'Standard hyllevare tvinger ofte organisasjonen din inn i rigide arbeidsflyter og krever dyre månedlige lisenser for funksjoner du aldri bruker. Vi bygger skreddersydde fagsystemer, kundeportaler og interne verktøy som reflekterer bedriftens reelle konkurransefortrinn. Du eier kildekoden 100%, slipper lisenslås og har full frihet til å videreutvikle løsningen.',
      descriptionEn:
        'Off-the-shelf SaaS forces your team into rigid workflows and bills you monthly per-seat licenses for bloated modules you never touch. We engineer bespoke operational portals, internal tools, and client platforms tailored strictly around your competitive edge. You retain 100% intellectual property ownership with zero vendor lock-in.',
      image: imgBespoke,
      badge: 'MODULAR BACKEND',
      architecturePointsNo: [
        'Domenestyrt design (DDD) med klare forretningsregler',
        'Sømløs API-kobling mot Tripletex, PowerOffice, Salesforce og Bring',
        'Rollebasert tilgangskontroll (RBAC) og detaljerte revisjonslogger',
        'Modulær arkitektur som kan vokse fra titalls til millioner av transaksjoner',
      ],
      architecturePointsEn: [
        'Domain-Driven Design (DDD) reflecting distinct operational rules',
        'Frictionless API connectivity with Tripletex, PowerOffice, Salesforce & carrier logistics',
        'Role-Based Access Control (RBAC) and immutable audit trails',
        'Modular micro-architecture built to scale from hundreds to millions of events',
      ],
      deliverablesNo: [
        'Skreddersydd kjernesystem uten eksterne lisensgebyrer',
        'Åpne REST- og GraphQL API-grensesnitt',
        'Sikker integrasjonsbro mot bedriftens eksisterende verktøy',
        'Opplæring og teknisk overlevering til internt team',
      ],
      deliverablesEn: [
        'Bespoke enterprise core platform with zero third-party licensing taxes',
        'Open, documented REST & GraphQL API interfaces',
        'Secure bidirectional data bridge connecting legacy software',
        'Hands-on handover and knowledge transfer for internal stakeholders',
      ],
    },
    {
      number: '03',
      tagNo: 'FRA IDÉ TIL LANSERING',
      tagEn: 'FROM IDEA TO LAUNCH',
      titleNo: 'Strukturert prosess fra konsept til produksjon',
      titleEn: 'Structured Execution: From Concept to Production',
      headlineNo: 'Raske, iterative sprinter med hyppige delleveranser og full forutsigbarhet',
      headlineEn: 'Rapid agile sprints with bi-weekly demo releases and total transparency',
      descriptionNo:
        'Store programvareprosjekter feiler ofte på grunn av lange perioder uten synlig fremdrift. Vi jobber etter en smidig metode med to-ukers sprinter der du som kunde ser og tester reelle funksjoner kontinuerlig. Fra den første klikkbare prototypen i Figma til godkjenning i App Store og lansering i skyen, vet du nøyaktig hvor prosjektet står til enhver tid.',
      descriptionEn:
        'Massive software projects often fail due to months of opaque development. We enforce a disciplined two-week agile rhythm where you test and experience live product increments continually. From clickable Figma prototypes to App Store approval and zero-downtime cloud deployments, you maintain complete visibility over velocity and budget.',
      image: imgIdeaToLaunch,
      badge: 'DESIGN TO PROD',
      architecturePointsNo: [
        'Uke 1–2: Konsept, informasjonsarkitektur og klikkbare Figma-prototyper',
        'Sprint 1–4: Trinnvis bygging av frontend, backend og kjernelogikk',
        'Sikkerhet & QA: Automatiserte enhetstester, integrasjonstester og penetrasjonstest',
        'Lansering: Produksjonsutrulling med blue/green deployment uten nedetid',
      ],
      architecturePointsEn: [
        'Weeks 1–2: Concept definition, information architecture & interactive prototypes',
        'Sprints 1–4: Iterative construction of client apps, databases, and core business engines',
        'Security & QA: Automated Vitest/Playwright suites and penetration vulnerability audits',
        'Launch: Zero-downtime blue/green production deployment and App Store submission',
      ],
      deliverablesNo: [
        'Fungerende testmiljøer for ukentlig testing og tilbakemeldinger',
        'Automatiserte testsuiter for regressionstesting',
        'Godkjenning og publisering i Apple App Store & Google Play',
        'Garantert oppetid og lanseringsstøtte med SRE-team',
      ],
      deliverablesEn: [
        'Ephemeral staging environments for weekly stakeholder review',
        'End-to-end automated regression testing suites',
        'Guaranteed App Store & Google Play compliance approval',
        'On-call SRE launch supervision ensuring zero launch-day hiccups',
      ],
    },
    {
      number: '04',
      tagNo: 'KONTINUERLIG VEKST & PARTNERSKAP',
      tagEn: 'GROWTH & PARTNERSHIP',
      titleNo: 'Langsiktig trygghet og videreutvikling',
      titleEn: 'Continuous Growth & Proactive Partnership',
      headlineNo: 'Vi slipper deg aldri etter lansering – proaktiv drift, overvåking og rådgivning',
      headlineEn: 'We never walk away post-launch — proactive monitoring, updates, and roadmapping',
      descriptionNo:
        'En vellykket digital lansering er bare begynnelsen. Teknologi utvikler seg, operativsystemer oppdateres, og brukerne kommer med nye ønsker. Geton AS fungerer som din langsiktige teknologipartner. Vårt norske SRE-team overvåker oppetid 24/7, ruller ut månedlige sikkerhetspatcher og hjelper deg å prioritere nye funksjoner basert på reelle brukerdata.',
      descriptionEn:
        'A triumphant software launch is only Day Zero. Operating systems evolve, security threats emerge, and user demands grow. Geton AS operates as your permanent technical backbone. Our engineering team provides 24/7 synthetic monitoring, monthly security patching, and strategic roadmap prioritization guided by telemetry and user behavior.',
      image: imgDevops,
      badge: 'DEVOPS & TELEMETRY',
      architecturePointsNo: [
        '24/7 syntetisk overvåking av oppetid, API-responstid og databasesundhet',
        'Garantert SLA-responstid ved kritiske produksjonshendelser',
        'Månedlige sikkerhetsoppdateringer av biblioteker og skymiljø',
        'Faste månedlige timer til strategisk videreutvikling og nye funksjoner',
      ],
      architecturePointsEn: [
        '24/7 synthetic telemetry monitoring uptime, API response, and database health',
        'Guaranteed SLA response times for critical production incidents',
        'Monthly zero-day vulnerability remediation and dependency updates',
        'Dedicated monthly sprint hours reserved for feature iteration and growth',
      ],
      deliverablesNo: [
        'Månedlig helserapport og driftsstatus for systemet',
        'Dedikert Slack/Teams-kanal direkte til våre seniorutviklere',
        'Kontinuerlig kostnadsoptimalisering av skytjenester',
        'Kvartalsvis teknologistrategi og roadmap-gjennomgang',
      ],
      deliverablesEn: [
        'Monthly system health, uptime, and latency audit report',
        'Dedicated private Slack/Teams channel directly to senior engineers',
        'Continuous cloud FinOps audits to suppress compute waste',
        'Quarterly executive technology roadmap and strategy sessions',
      ],
    },
  ];

  return (
    <section
      id="digital-solutions"
      className="relative z-20 w-full py-28 sm:py-36 bg-[#fafaf9] text-neutral-900 overflow-hidden border-t border-b border-neutral-200/80"
    >
      {/* 
        SUBTLE SCANDINAVIAN VISUAL DEPTH:
        - Warm-white canvas with micro dot matrix pattern
        - Gentle blurred ambient light forms
      */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.06) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-amber-100/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            SECTION HEADER: EDITORIAL TYPOGRAPHY & ZERO-PILL DISCIPLINE
        ======================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2.5 text-xs font-semibold tracking-[0.22em] text-neutral-500 uppercase mb-4">
            <span>{t.digitalSolutions.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-neutral-900 tracking-tight leading-[1.12] [text-wrap:balance]">
            {t.digitalSolutions.headline}
          </h2>

          <p className="mt-5 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            {t.digitalSolutions.description}
          </p>
        </div>

        {/* ========================================================
            EXACTLY 4 LARGE FEATURE CARDS:
            - Desktop: 4 equal columns (lg:grid-cols-4)
            - Tablet: 2 columns (sm:grid-cols-2)
            - Mobile: Stacked
            - High-end creative studio artwork images
            - CLICKING OPENS DETAILED INFORMATION POPUP (NOT CONTACT FORM)
        ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillarDetails.map((pillar, idx) => {
            const visual = cardImages[idx];
            const title = language === 'no' ? pillar.titleNo : pillar.titleEn;
            const desc = language === 'no' ? pillar.descriptionNo : pillar.descriptionEn;
            const tag = language === 'no' ? pillar.tagNo : pillar.tagEn;

            return (
              <div
                key={idx}
                onClick={() => setSelectedPillar(pillar)}
                className="group relative rounded-[26px] p-6 sm:p-7 bg-white border border-[#e7e7e5] hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.09)] hover:-translate-y-2 cursor-pointer"
              >
                <div>
                  {/* Top Bar: Index & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-neutral-400 tracking-wider">
                      {pillar.number}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider truncate max-w-[170px]">
                      {tag}
                    </span>
                  </div>

                  {/* 
                    CREATIVE SOFTWARE ARTWORK IMAGE:
                    - Uses imported local assets so Vite hashes and bundles them
                    - Never breaks when deployed on GitHub Pages or static host
                  */}
                  <div className="relative w-full aspect-[16/11] rounded-[20px] overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs mb-5">
                    <img
                      src={visual.src}
                      alt={visual.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Minimalist studio label inside visual */}
                    <div className="absolute bottom-2.5 right-2.5 text-[9px] sm:text-[10px] font-semibold text-neutral-800 bg-white/90 px-2 py-0.5 rounded border border-neutral-200/70 backdrop-blur-sm pointer-events-none">
                      {visual.badge}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-display tracking-tight text-neutral-900 mb-2 group-hover:text-black transition-colors leading-snug">
                    {title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5 font-normal line-clamp-3">
                    {desc}
                  </p>

                  {/* Key Pillars Checklist */}
                  <div className="space-y-2 pt-4 border-t border-neutral-100">
                    {(language === 'no' ? pillar.architecturePointsNo : pillar.architecturePointsEn)
                      .slice(0, 3)
                      .map((point, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                          <span className="leading-snug truncate">{point.split(':')[0]}</span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900">
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    {language === 'no' ? 'Les mer om løsningen' : 'Explore capability'}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            NORDIC STUDIO TRUST & CONSULTATION FOOTNOTE
        ======================================================== */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white border border-[#e7e7e5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                {language === 'no'
                  ? 'Skapt for ambisjoner — bygget for kontinuerlig ytelse.'
                  : 'Crafted for ambition — built for sustained performance.'}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                {language === 'no'
                  ? 'Senior ingeniørteam med base i Bergen & Straume, Norge. Direkte arkitektkontakt fra første samtale.'
                  : 'Senior engineering team based in Bergen & Straume, Norway. Direct architect access from Day 1.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onGetStarted}
              className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <span>{t.digitalSolutions.consultationCTA}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* ========================================================
          DETAILED POPUP / MODAL ABOUT THE CLICKED PILLAR
          (Not a contact form, but a deep-dive information view)
      ======================================================== */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#090f24] text-white border border-cyan-400/40 p-6 sm:p-10 shadow-[0_0_60px_rgba(6,182,212,0.3)] max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase">
                {selectedPillar.number} // {language === 'no' ? selectedPillar.tagNo : selectedPillar.tagEn}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-2 leading-tight">
              {language === 'no' ? selectedPillar.titleNo : selectedPillar.titleEn}
            </h2>

            <p className="text-sm sm:text-base text-cyan-300 font-medium mb-6">
              {language === 'no' ? selectedPillar.headlineNo : selectedPillar.headlineEn}
            </p>

            {/* Image Banner */}
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-slate-900 mb-8 aspect-[16/9]">
              <img
                src={selectedPillar.image}
                alt={selectedPillar.titleNo}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-8">
              <p>{language === 'no' ? selectedPillar.descriptionNo : selectedPillar.descriptionEn}</p>
            </div>

            {/* Core Architectural Capabilities */}
            <div className="mb-8 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>{language === 'no' ? 'Kjernekompetanse & Teknisk rammeverk' : 'Core Capabilities & Technical Framework'}</span>
              </div>
              <div className="space-y-3">
                {(language === 'no' ? selectedPillar.architecturePointsNo : selectedPillar.architecturePointsEn).map(
                  (point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Concrete Deliverables */}
            <div className="mb-8 p-6 rounded-2xl bg-cyan-950/30 border border-cyan-400/30">
              <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>{language === 'no' ? 'Hva du mottar (Konkrete leveranser)' : 'Concrete Deliverables You Receive'}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(language === 'no' ? selectedPillar.deliverablesNo : selectedPillar.deliverablesEn).map(
                  (item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <button
                onClick={() => setSelectedPillar(null)}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                {language === 'no' ? 'Lukk visning' : 'Close Details'}
              </button>

              <button
                onClick={() => {
                  setSelectedPillar(null);
                  onGetStarted();
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>{language === 'no' ? 'Diskuter løsningen med Geton AS' : 'Discuss This Solution With Us'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
