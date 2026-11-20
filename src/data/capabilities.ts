export type CapabilitySlug =
  | 'tverrfaglig-utvikling'
  | 'skreddersydde-losninger'
  | 'fra-ide-til-lansering'
  | 'videreutvikling-og-support';

export interface CapabilityPageData {
  slug: CapabilitySlug;
  routePath: string;
  number: string;
  badge: string;
  tagNo: string;
  tagEn: string;
  titleNo: string;
  titleEn: string;
  headlineNo: string;
  headlineEn: string;
  seoTitleNo: string;
  seoTitleEn: string;
  seoDescNo: string;
  seoDescEn: string;
  descriptionNo: string;
  descriptionEn: string;
  extendedStoryNo: string[];
  extendedStoryEn: string[];
  heroImage: string;
  heroAltNo: string;
  heroAltEn: string;
  secondaryImage: string;
  secondaryAltNo: string;
  secondaryAltEn: string;
  architecturePointsNo: string[];
  architecturePointsEn: string[];
  deliverablesNo: string[];
  deliverablesEn: string[];
  relatedCapabilities: CapabilitySlug[];
}

export const CAPABILITY_PAGES: Record<CapabilitySlug, CapabilityPageData> = {
  'tverrfaglig-utvikling': {
    slug: 'tverrfaglig-utvikling',
    routePath: '/arbeidsmate/tverrfaglig-utvikling',
    number: '01',
    badge: 'MODERN UI & CODE',
    tagNo: 'SKREDDERSYDD UTVIKLING',
    tagEn: 'BESPOKE ENGINEERING',
    titleNo: 'Design, utvikling og strategi samlet',
    titleEn: 'Design, Engineering & Strategy Unified',
    headlineNo: 'Én erfaren teknologipartner fra første idé til ferdig produksjon',
    headlineEn: 'One dedicated engineering partner from initial concept to production',
    seoTitleNo: 'Tverrfaglig Programvareutvikling & Design | Geton AS',
    seoTitleEn: 'Unified Software Engineering, UX & Strategy | Geton AS',
    seoDescNo:
      'Hos Geton AS samles produktdesign, webutvikling, apputvikling og skyarkitektur i ett team på Straume i Øygarden og Bergen.',
    seoDescEn:
      'Product design, web engineering, mobile apps, and cloud architecture united under one team at Geton AS in Norway.',
    descriptionNo:
      'Hos Geton AS slipper du å koordinere mellom separate designbyråer og eksterne utviklere. Vi samler produktdesign, webutvikling, apputvikling og skyarkitektur i ett samkjørt team på Straume i Øygarden ved Bergen. Det gir kortere vei fra konsept til fungerende kode og full konsistens på tvers av hele løsningen.',
    descriptionEn:
      'At Geton AS, product design, web engineering, mobile apps, and cloud architecture live under one roof in Øygarden near Bergen. You work directly with the team building your product.',
    extendedStoryNo: [
      'Når strategi, design og kode splittes opp på tre forskjellige leverandører, oppstår det ofte misforståelser, ekstra prosjektledelse og forsinkelser underveis. Hos Geton jobber designere og systemutviklere sammen fra dag én.',
      'Dette sikrer at hver eneste skisse i Figma er teknisk gjennomførbar, universelt utformet og optimalisert for hastighet — enten produktet skal leve på web, iOS, Android eller som et internt bedriftssystem.',
    ],
    extendedStoryEn: [
      'Splitting strategy, design, and engineering across separate vendors frequently leads to handoff friction, delays, and budget bloat. At Geton, designers and engineers sit side by side from kickoff.',
      'Every Figma screen is built with real component boundaries, accessibility contrast, and sub-second performance from day one across web, iOS, Android, and internal portals.',
    ],
    heroImage: '/assets/images/software_multidisciplinary_ui_1793710478928.webp',
    heroAltNo: 'Tverrfaglig grensesnitt for webutvikling, designsystem og mobilapp hos Geton AS',
    heroAltEn: 'Multidisciplinary React, TypeScript, and mobile UI design system',
    secondaryImage: '/assets/images/about_geton_studio_1793711805670.webp',
    secondaryAltNo: 'Geton AS utviklingsteam i arbeid på Straume',
    secondaryAltEn: 'Geton AS engineering team collaborating in studio',
    architecturePointsNo: [
      'Produktdesign & UX: Klikkbare prototyper i Figma før koding starter',
      'Frontend & Mobil: React, React Native, Next.js og TypeScript',
      'Backend & Database: Node.js, .NET og PostgreSQL med trygg datastruktur',
      'Tilpasset for både lokale og nasjonale bedrifter i Norge',
    ],
    architecturePointsEn: [
      'Product Design & UX: Interactive Figma prototypes prior to development',
      'Frontend & Mobile: React, React Native, Next.js & TypeScript',
      'Backend & Database: Node.js, .NET & PostgreSQL with strict data integrity',
      'Tailored for Norwegian businesses and scaling digital ventures',
    ],
    deliverablesNo: [
      'Interaktive designskisser og komponentbibliotek',
      'Ryddig og vedlikeholdbar kildekode med 100 % eierskap',
      'Teknisk dokumentasjon av arkitektur og API-er',
      'Automatisert bygg- og testoppsett',
    ],
    deliverablesEn: [
      'Interactive prototypes and component libraries',
      'Clean, maintainable client codebase with 100% ownership',
      'Technical architecture documentation',
      'Automated build and quality checks',
    ],
    relatedCapabilities: ['skreddersydde-losninger', 'fra-ide-til-lansering', 'videreutvikling-og-support'],
  },

  'skreddersydde-losninger': {
    slug: 'skreddersydde-losninger',
    routePath: '/arbeidsmate/skreddersydde-losninger',
    number: '02',
    badge: 'MODULAR BACKEND',
    tagNo: 'FLEKSIBLE LØSNINGER',
    tagEn: 'FLEXIBLE SOLUTIONS',
    titleNo: 'Skreddersydd rundt bedriftens prosesser',
    titleEn: 'Built Around Your Real Operations',
    headlineNo: 'Programvare som passer måten dere jobber på – ikke omvendt',
    headlineEn: 'Software shaped around how your team actually operates',
    seoTitleNo: 'Skreddersydd Programvare & API-Integrasjoner | Geton AS',
    seoTitleEn: 'Custom Software & Flexible Business Integrations | Geton AS',
    seoDescNo:
      'Vi bygger fleksible webapplikasjoner, kundeportaler og interne verktøy tilpasset bedriftens arbeidsflyt og eksisterende systemer.',
    seoDescEn:
      'Bespoke web applications, customer portals, and automated API integrations shaped precisely around your company workflow.',
    descriptionNo:
      'Standard hyllevare passer sjelden perfekt når arbeidsprosesser blir unike. Vi bygger fleksible webapplikasjoner, kundeportaler og interne verktøy som knytter sammen regnskap, ordre, lager og betaling via pålitelige API-integrasjoner.',
    descriptionEn:
      'Off-the-shelf software rarely matches unique business workflows cleanly. We build flexible web portals and internal systems connected seamlessly to accounting, orders, and payment tools.',
    extendedStoryNo: [
      'Bedrifter mister ofte verdifulle timer hver uke på å tvinge egne rutiner inn i stive standardsystemer — eller ved å fylle hullene med manuelle regneark. Med skreddersydd programvare speiler systemet måten deres dyktigste folk faktisk arbeider på.',
      'Alt bygges modulært slik at dere kan starte med kjernebehovet i dag og koble på nye funksjoner, mobilapper eller eksterne partnere når virksomheten vokser.',
    ],
    extendedStoryEn: [
      'Growing teams often waste hours forcing unique operational workflows into rigid off-the-shelf software or manual spreadsheets. Bespoke software reflects how your business actually creates value.',
      'Our modular architecture lets you launch with high-impact workflows today and add portals, mobile companions, or partner integrations smoothly as volume grows.',
    ],
    heroImage: '/assets/images/software_bespoke_architecture_1793710479073.webp',
    heroAltNo: 'Skreddersydd skyarkitektur og API-integrasjoner for bedriftssystemer',
    heroAltEn: 'Modular cloud microservices and custom software API architecture',
    secondaryImage: '/assets/aistudio/Frakt360__Komplett_norsk_fraktplattform_6546bb91.webp',
    secondaryAltNo: 'Eksempel på skreddersydd norsk systemløsning utviklet av Geton AS',
    secondaryAltEn: 'Custom Norwegian logistics and operational platform engineered by Geton AS',
    architecturePointsNo: [
      'API-integrasjoner mot Tripletex, PowerOffice, Bring, PostNord og Vipps',
      'Rollebasert tilgangskontroll (RBAC) og sikker innlogging med BankID',
      'Automatisering av manuelle steg og dobbeltregistrering',
      'Modulær oppbygging som enkelt kan utvides videre',
    ],
    architecturePointsEn: [
      'API integrations for Tripletex, PowerOffice, Bring, PostNord & Vipps',
      'Role-based access control and BankID authentication',
      'Elimination of repetitive manual data entry',
      'Modular design ready for future capabilities',
    ],
    deliverablesNo: [
      'Skreddersydd kjernesystem uten unødvendige lisenskostnader',
      'Dokumenterte API-koblinger mot eksisterende verktøy',
      'Tilgangsstyring tilpasset roller i bedriften',
      'Full opplæring for administratorer og brukere',
    ],
    deliverablesEn: [
      'Custom core platform without per-seat bloat',
      'Documented API integrations with existing tools',
      'Role permissions matched to your team',
      'Hands-on onboarding and documentation',
    ],
    relatedCapabilities: ['tverrfaglig-utvikling', 'fra-ide-til-lansering', 'videreutvikling-og-support'],
  },

  'fra-ide-til-lansering': {
    slug: 'fra-ide-til-lansering',
    routePath: '/arbeidsmate/fra-ide-til-lansering',
    number: '03',
    badge: 'DESIGN TO PROD',
    tagNo: 'FRA IDÉ TIL LANSERING',
    tagEn: 'IDEA TO LAUNCH',
    titleNo: 'Strukturerte leveranser og tett samarbeid',
    titleEn: 'Transparent Sprints & Close Collaboration',
    headlineNo: 'Forutsigbar fremdrift der du tester nye funksjoner fortløpende',
    headlineEn: 'Predictable execution with continuous test builds and visibility',
    seoTitleNo: 'Fra Idé til Lansering – Vår Utviklingsprosess | Geton AS',
    seoTitleEn: 'Idea to Launch – Transparent Agile Delivery | Geton AS',
    seoDescNo:
      'Slik tar Geton AS digitale prosjekter fra første skisse og MVP til testet lansering på web, App Store og Google Play.',
    seoDescEn:
      'How Geton AS takes digital projects from discovery and MVP prototypes through transparent sprints to live production launch.',
    descriptionNo:
      'Store IT-prosjekter blir best når oppdragsgiver har full innsikt underveis. Vi jobber iterativt med jevnlige demonstrasjoner i eget testmiljø slik at du kan gi tilbakemeldinger tidlig og trygt styre prioriteringene frem mot lansering.',
    descriptionEn:
      'Digital projects succeed when communication stays close. We deliver iteratively with regular staging previews so you can test progress early and steer priorities confidently.',
    extendedStoryNo: [
      'Ingen liker lange perioder i stillhet etterfulgt av overraskelser rett før fristen. Derfor deler vi prosjektet opp i tydelige sprinter med jevnlige testlenker og bygg som du kan klikke rundt i på din egen mobil eller nettleser.',
      'Før lansering kjører vi sjekk på ytelse, sikkerhet, responsivitet og søkemotoroptimalisering slik at overgangen til produksjon skjer trygt og ryddig.',
    ],
    extendedStoryEn: [
      'Successful software relies on frequent visibility rather than silent months before release. We run transparent sprints where stakeholders test live staging builds directly on their own devices.',
      'Ahead of launch, every product undergoes cross-device QA, security checks, and Core Web Vitals optimization so go-live happens smoothly.',
    ],
    heroImage: '/assets/images/software_idea_to_launch_1793710481314.webp',
    heroAltNo: 'Strukturert utviklingsprosess fra første skisse og prototype til lansering',
    heroAltEn: 'Design system compiling into live mobile and web platform',
    secondaryImage: '/assets/images/contact_team_consultation_1793711783282.webp',
    secondaryAltNo: 'Tett kundesamarbeid og gjennomgang av leveranse hos Geton AS',
    secondaryAltEn: 'Close client collaboration and sprint planning at Geton AS',
    architecturePointsNo: [
      'Forprosjekt: Tydelig mål, brukerreiser og avtalt omfang før oppstart',
      'Iterativ utvikling med fortløpende demonstrasjoner underveis',
      'Kvalitetssikring på mobil, nettbrett og desktop før publisering',
      'Smidig godkjenning og lansering på web, iOS og Android',
    ],
    architecturePointsEn: [
      'Scoping: Clear goals and aligned specifications before build',
      'Iterative sprints with live staging demos throughout',
      'Cross-device QA verification prior to go-live',
      'Smooth release on web, Apple App Store, and Google Play',
    ],
    deliverablesNo: [
      'Eget testmiljø tilgjengelig gjennom hele utviklingsløpet',
      'Kontinuerlig testing av funksjonalitet og ytelse',
      'Sikkerhetssjekk og klargjøring for produksjon',
      'Trygg overlevering ved lansering',
    ],
    deliverablesEn: [
      'Dedicated staging environment throughout delivery',
      'Continuous functional and performance verification',
      'Production security checklist prior to launch',
      'Structured launch handover',
    ],
    relatedCapabilities: ['tverrfaglig-utvikling', 'skreddersydde-losninger', 'videreutvikling-og-support'],
  },

  'videreutvikling-og-support': {
    slug: 'videreutvikling-og-support',
    routePath: '/arbeidsmate/videreutvikling-og-support',
    number: '04',
    badge: 'DRIFT & SUPPORT',
    tagNo: 'VIDEREUTVIKLING & SUPPORT',
    tagEn: 'EVOLUTION & SUPPORT',
    titleNo: 'Trygg drift og langsiktig støtte',
    titleEn: 'Reliable Support & Ongoing Evolution',
    headlineNo: 'En tilgjengelig teknologipartner også etter at løsningen er lansert',
    headlineEn: 'A dependable technology partner long after launch day',
    seoTitleNo: 'Trygg Drift, Support & Videreutvikling | Geton AS',
    seoTitleEn: 'Reliable Support, Monitoring & Evolution | Geton AS',
    seoDescNo:
      'Geton AS sørger for sikkerhetspatcher, overvåking og videreutvikling av nettsider, apper og bedriftssystemer etter lansering.',
    seoDescEn:
      'Ongoing software care, security patching, monitoring, and continuous product iteration by Geton AS.',
    descriptionNo:
      'En nettside, app eller bedriftsplattform må fungere stabilt over tid. Geton AS hjelper deg med løpende vedlikehold, sikkerhetsoppdateringer, overvåking og videreutvikling av nye funksjoner etter hvert som bedriften og markedet utvikler seg.',
    descriptionEn:
      'Every digital product requires ongoing care. Geton AS supports you with proactive monitoring, security patching, and feature iterations as your business grows.',
    extendedStoryNo: [
      'Lanseringsdagen er bare starten på et digitalt produkts livssyklus. Når brukerne tar løsningen i bruk, oppdager dere nye muligheter til å automatisere enda mer eller forbedre kundereisen.',
      'Som lokal teknologipartner på Vestland er vi raskt tilgjengelige på telefon og e-post når spørsmål oppstår — med utviklere som allerede kjenner koden deres inn og ut.',
    ],
    extendedStoryEn: [
      'Launch day marks the beginning of a product’s real-world lifecycle. Once users engage with the platform, valuable insights emerge for further automation and UX refinement.',
      'As your dedicated partner in Norway, you have direct phone and email access to senior engineers who already know your architecture inside and out.',
    ],
    heroImage: '/assets/images/software_devops_monitoring_1793710481343.webp',
    heroAltNo: 'Overvåking, sikkerhet og videreutvikling av digitale plattformer',
    heroAltEn: 'Real-time cloud monitoring and microservice operations',
    secondaryImage: '/assets/images/contact_developer_laptop_1793711783791.webp',
    secondaryAltNo: 'Utvikler hos Geton AS som følger opp systemvedlikehold og support',
    secondaryAltEn: 'Senior engineer at Geton AS supporting live production systems',
    architecturePointsNo: [
      'Sikkerhetsoppdateringer og vedlikehold av biblioteker og skytjenester',
      'Overvåking av tilgjengelighet, hastighet og feilmeldinger',
      'Rask support direkte med utviklere som kjenner systemet ditt',
      'Planlagt videreutvikling basert på reelle brukerbehov',
    ],
    architecturePointsEn: [
      'Routine security patching and framework updates',
      'Uptime, performance, and error monitoring',
      'Direct support from engineers familiar with your codebase',
      'Planned feature roadmap iterations based on real feedback',
    ],
    deliverablesNo: [
      'Fast kontaktpunkt for teknisk support og spørsmål',
      'Løpende sikkerhets- og ytelsessjekker',
      'Oppdateringer for nye iOS-, Android- og nettleserversjoner',
      'Fleksible avtaler tilpasset bedriftens aktivitetsnivå',
    ],
    deliverablesEn: [
      'Direct contact channel for technical support',
      'Ongoing security and speed checkups',
      'Compatibility updates across iOS, Android, and browsers',
      'Flexible maintenance agreements matching your needs',
    ],
    relatedCapabilities: ['tverrfaglig-utvikling', 'skreddersydde-losninger', 'fra-ide-til-lansering'],
  },
};

export const CAPABILITY_LIST: CapabilityPageData[] = [
  CAPABILITY_PAGES['tverrfaglig-utvikling'],
  CAPABILITY_PAGES['skreddersydde-losninger'],
  CAPABILITY_PAGES['fra-ide-til-lansering'],
  CAPABILITY_PAGES['videreutvikling-og-support'],
];
