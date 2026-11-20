export type ServiceSlug =
  | 'nettsideutvikling'
  | 'mobilapputvikling'
  | 'webapplikasjoner-og-systemutvikling'
  | 'sky-losninger'
  | 'produktdesign-ux-ui'
  | 'digital-markedsforing'
  | 'nettbutikk-og-ehandel'
  | 'systemintegrasjoner-og-api'
  | 'kunstig-intelligens-og-automasjon'
  | 'vedlikehold-og-support'
  | 'merkevare-og-visuell-profil'
  | 'seo-og-ytelsesoptimalisering';

export interface ServiceFAQ {
  questionNo: string;
  questionEn: string;
  answerNo: string;
  answerEn: string;
}

export interface ServiceVisual {
  src: string;
  altNo: string;
  altEn: string;
  captionNo: string;
  captionEn: string;
}

export interface ServicePageData {
  slug: ServiceSlug;
  routePath: string;
  inquiryType: 'web' | 'app' | 'saas';
  navLabelNo: string;
  navLabelEn: string;
  seoTitleNo: string;
  seoTitleEn: string;
  seoDescNo: string;
  seoDescEn: string;
  eyebrowNo: string;
  eyebrowEn: string;
  h1No: string;
  h1En: string;
  introNo: string;
  introEn: string;
  heroImage: ServiceVisual;
  galleryImages: ServiceVisual[];
  overviewTitleNo: string;
  overviewTitleEn: string;
  overviewTextNo: string;
  overviewTextEn: string;
  benefitsNo: { title: string; desc: string }[];
  benefitsEn: { title: string; desc: string }[];
  capabilitiesNo: string[];
  capabilitiesEn: string[];
  technologies: string[];
  processNo: { step: string; title: string; desc: string }[];
  processEn: { step: string; title: string; desc: string }[];
  faqs: ServiceFAQ[];
  relatedSlugs: ServiceSlug[];
}

export const SERVICE_PAGES: Record<ServiceSlug, ServicePageData> = {
  nettsideutvikling: {
    slug: 'nettsideutvikling',
    routePath: '/tjenester/nettsideutvikling',
    inquiryType: 'web',
    navLabelNo: 'Nettsideutvikling',
    navLabelEn: 'Website Development',
    seoTitleNo: 'Nettsideutvikling & Profesjonell Nettside for Bedrift | Geton AS',
    seoTitleEn: 'Professional Website Development for Businesses | Geton AS',
    seoDescNo:
      'Skal du lage nettside for bedrift? Geton utvikler raske, responsive og søkemotoroptimaliserte nettsider fra Straume, Øygarden og Bergen for hele Norge.',
    seoDescEn:
      'Geton designs and develops fast, responsive, and SEO-ready business websites from Bergen and Vestland for clients across Norway.',
    eyebrowNo: 'NETTSIDEUTVIKLING & WEBDESIGN',
    eyebrowEn: 'WEBSITE DEVELOPMENT & WEB DESIGN',
    h1No: 'Profesjonell nettsideutvikling som gir bedriften din flere kunder',
    h1En: 'Professional website development built to convert visitors into customers',
    introNo:
      'Å lage en nettside for bedrift handler om langt mer enn pent design. Geton utvikler skreddersydde, lynraske og responsive nettsider fra vår base i Øygarden og Bergen til bedrifter over hele Vestland og Norge — konstruert for tillit, synlighet i Google og høy konvertering.',
    introEn:
      'A business website must do more than look polished. From our base in Øygarden and Bergen, Geton builds fast, responsive websites designed for Google visibility, user trust, and measurable lead generation across Norway.',
    heroImage: {
      src: '/assets/images/vestlandsk_hjertesenter_mockup_1793710496839.webp',
      altNo: 'Responsivt nettsidedesign utviklet av Geton AS for bedrifter og klinikker i Norge',
      altEn: 'Responsive website development engineered by Geton AS',
      captionNo: 'Skreddersydd bedriftsnettside med tydelig konverteringsflyt og rask mobilvisning',
      captionEn: 'Tailored business website with clear conversion flow and sub-second mobile load speed',
    },
    galleryImages: [
      {
        src: '/assets/images/newsec_proptech_showcase_1793707988321.webp',
        altNo: 'Moderne webportal og eiendomsløsning med søk og kartintegrasjon',
        altEn: 'Modern web portal with clean search and property showcase',
        captionNo: 'Moderne designsystem og rask navigasjon på desktop og nettbrett',
        captionEn: 'Modern design system and rapid navigation across desktop and tablet',
      },
      {
        src: '/assets/images/software_multidisciplinary_ui_1793710478928.webp',
        altNo: 'Frontend UI-arkitektur og semantisk HTML5 webdesign',
        altEn: 'Frontend UI architecture and semantic HTML5 web design',
        captionNo: 'Ren React- og TypeScript-kode uten tunge ferdigmaler',
        captionEn: 'Clean React and TypeScript engineering without bloated templates',
      },
    ],
    overviewTitleNo: 'Hvorfor velge skreddersydd webdesign fremfor tunge ferdigmaler?',
    overviewTitleEn: 'Why choose bespoke web design over generic templates?',
    overviewTextNo:
      'Mange bedrifter opplever at ferdige nettsidemaler blir trege, like konkurrentenes og vanskelige å rangere i søkemotorer. Når vi designer en profesjonell nettside, skreddersyr vi både struktur, innholdsoppbygging og teknisk kode. Resultatet er en responsiv nettside som laster raskt på mobil, presenterer tjenestene dine tydelig og leder besøkende naturlig frem til kontakt.',
    overviewTextEn:
      'Template websites often suffer from bloated scripts, generic layouts, and poor search visibility. When we build a website, structure, visual hierarchy, and semantic code are crafted around your business goals—delivering instant mobile loading and clear customer journeys.',
    benefitsNo: [
      {
        title: 'Bygget for synlighet i Google',
        desc: 'Semantisk HTML5, rene URL-er, rask lastetid og strukturert metadata gjør det enkelt for kunder å finne deg.',
      },
      {
        title: 'Sømløs på mobil og desktop',
        desc: 'En responsiv nettside som tilpasser seg alle skjermstørrelser, slik at kundene får en trygg opplevelse uansett enhet.',
      },
      {
        title: 'Tydelig konverteringsflyt',
        desc: 'Gjennomtenkte handlingsknapper, oversiktlig navigasjon og raske kontaktskjemaer som gjør besøkende til henvendelser.',
      },
      {
        title: 'Enkel å oppdatere selv',
        desc: 'Ved behov setter vi opp en brukervennlig publiseringsløsning (CMS) slik at teamet ditt enkelt kan redigere tekst og artikler.',
      },
    ],
    benefitsEn: [
      {
        title: 'Engineered for search visibility',
        desc: 'Semantic HTML5, clean URLs, rapid page speeds, and structured metadata help customers find you organically.',
      },
      {
        title: 'Responsive across every screen',
        desc: 'Fluid mobile, tablet, and desktop layouts ensure a trustworthy experience on every device.',
      },
      {
        title: 'Conversion-focused user journeys',
        desc: 'Clear calls to action, intuitive hierarchy, and frictionless contact forms turn traffic into qualified leads.',
      },
      {
        title: 'Effortless content control',
        desc: 'Optional modern CMS setups let your internal team publish updates and insights without developer bottlenecks.',
      },
    ],
    capabilitiesNo: [
      'Skreddersydd webdesign tilpasset din merkevare',
      'Responsiv nettside optimalisert for mobil, nettbrett og desktop',
      'Teknisk SEO, strukturerte data (JSON-LD) og semantisk HTML5',
      'Integrasjon mot bookingsystemer, CRM og kontaktskjema',
      'GDPR-tilpasset analyse og samtykkeløsning',
      'Sikker drift med HTTPS og moderne ytelsesoptimalisering',
    ],
    capabilitiesEn: [
      'Tailored visual web design aligned with your brand',
      'Responsive architecture for mobile, tablet, and desktop',
      'Technical SEO, Schema.org structured data, and semantic HTML5',
      'Booking, CRM, and lead-form integrations',
      'Privacy-compliant analytics and cookie consent',
      'HTTPS security and Core Web Vitals optimization',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Schema.org', 'Headless CMS'],
    processNo: [
      {
        step: '01',
        title: 'Kartlegging & Struktur',
        desc: 'Vi avklarer målgruppe, forretningsmål og informasjonsarkitektur før vi designer første skisse.',
      },
      {
        step: '02',
        title: 'Webdesign & Prototype',
        desc: 'Du får se og teste utformingen visuelt slik at budskap og uttrykk sitter før utvikling.',
      },
      {
        step: '03',
        title: 'Utvikling & Ytelse',
        desc: 'Ren, rask frontend-kode med bildeoptimalisering, tilgjengelighet og teknisk SEO innebygd.',
      },
      {
        step: '04',
        title: 'Lansering & Videreutvikling',
        desc: 'Grundig testing på tvers av enheter, trygg lansering og oppfølging etter behov.',
      },
    ],
    processEn: [
      {
        step: '01',
        title: 'Discovery & Architecture',
        desc: 'Defining target audiences, messaging, and sitemap structure before visual design begins.',
      },
      {
        step: '02',
        title: 'Web Design & Prototype',
        desc: 'Interactive layout previews ensuring typography, hierarchy, and CTAs feel intuitive.',
      },
      {
        step: '03',
        title: 'Engineering & Speed',
        desc: 'Clean, accessible frontend code with compressed assets and technical SEO baked in.',
      },
      {
        step: '04',
        title: 'Launch & Ongoing Care',
        desc: 'Cross-device verification, smooth DNS cutover, and continuous support.',
      },
    ],
    faqs: [
      {
        questionNo: 'Hva koster det å lage en nettside for bedrift?',
        questionEn: 'How much does a business website cost?',
        answerNo:
          'Prisen avhenger av omfang, antall undersider, integrasjoner (som booking eller CMS) og designbehov. Vi gir alltid et tydelig og uforpliktende tilbud tilpasset dine mål og ditt budsjett etter en kort prat.',
        answerEn:
          'Pricing depends on page count, bespoke design requirements, and integrations such as booking or CMS. We always provide a tailored, transparent proposal after a brief discovery call.',
      },
      {
        questionNo: 'Hvor lang tid tar nettsideutvikling?',
        questionEn: 'How long does website development take?',
        answerNo:
          'Tidsplan avtales basert på prosjektets omfang, innholdsproduksjon og ønskede integrasjoner. En oversiktlig bedriftsnettside går ofte raskt fra godkjent design til lansering, mens større portaler tar lengre tid.',
        answerEn:
          'Timelines are agreed upon based on scope, copy readiness, and integrations. Focused company websites launch quickly after design sign-off, while custom portals require iterative sprints.',
      },
      {
        questionNo: 'Blir nettsiden optimalisert for Google og mobil?',
        questionEn: 'Is the website optimized for Google and mobile devices?',
        answerNo:
          'Ja. Alle nettsider fra Geton bygges som responsive nettsider fra grunnen av, med semantiske overskrifter, rask lastetid, rene meta-data og strukturert data slik at både brukere og søkemotorer forstår innholdet.',
        answerEn:
          'Yes. Every Geton website is mobile-first and engineered with semantic headings, fast asset loading, clean metadata, and structured JSON-LD.',
      },
    ],
    relatedSlugs: ['seo-og-ytelsesoptimalisering', 'nettbutikk-og-ehandel', 'webapplikasjoner-og-systemutvikling'],
  },

  mobilapputvikling: {
    slug: 'mobilapputvikling',
    routePath: '/tjenester/mobilapputvikling',
    inquiryType: 'app',
    navLabelNo: 'Mobilapputvikling',
    navLabelEn: 'Mobile App Development',
    seoTitleNo: 'Mobilapputvikling iOS og Android – Skreddersydd App | Geton AS',
    seoTitleEn: 'Mobile App Development for iOS & Android | Geton AS',
    seoDescNo:
      'Skal du utvikle mobilapp eller MVP? Geton hjelper bedrifter i Bergen, Vestland og Norge med apputvikling for iOS og Android fra idé til App Store.',
    seoDescEn:
      'Looking to build an iOS & Android app or MVP? Geton guides businesses from UX prototype to production mobile apps.',
    eyebrowNo: 'MOBILAPPUTVIKLING • IOS & ANDROID',
    eyebrowEn: 'MOBILE APP DEVELOPMENT • IOS & ANDROID',
    h1No: 'Skreddersydd apputvikling for iOS og Android — fra MVP til ferdig produkt',
    h1En: 'Custom iOS and Android mobile app development — from MVP to launch',
    introNo:
      'Enten du skal lansere en ny digital tjeneste eller gi eksisterende kunder en smidig mobilopplevelse, hjelper Geton deg med å utvikle mobilapp for iOS og Android. Vi støtter bedrifter i Bergen, Øygarden, Vestland og resten av Norge gjennom hele reisen fra MVP-utvikling til publisering i App Store og Google Play.',
    introEn:
      'Whether launching a new digital marketplace or extending your service to mobile, Geton builds intuitive iOS and Android applications from concept and MVP to App Store and Google Play release.',
    heroImage: {
      src: '/assets/aistudio/Hentli__Two_Experiences__One_App_706526e8.png',
      altNo: 'Mobilapputvikling for iOS og Android vist gjennom kunde- og sjåførapp',
      altEn: 'Mobile app development for iOS and Android featuring dual customer and driver flows',
      captionNo: 'Komplett mobilapp med brukervennlig kartflyt, push-varsler og sanntidsdata',
      captionEn: 'Full production mobile experience combining real-time maps, push notifications, and fluid gestures',
    },
    galleryImages: [
      {
        src: '/assets/aistudio/Smartphone_Sofa_Delivery_Map_Scene_86ff9f8d.webp',
        altNo: 'Intuitiv mobilopplevelse i sanntid utviklet i React Native',
        altEn: 'Real-time mobile tracking user interface on smartphone',
        captionNo: 'Tommelvennlig mobilgrensesnitt med GPS-sporing og smidig bestilling',
        captionEn: 'Thumb-friendly UI featuring GPS tracking and streamlined mobile checkout',
      },
      {
        src: '/assets/aistudio/Hentli_customer_delivery_journey-2_9993afde.webp',
        altNo: 'Detaljert kundereise og skjermflyt i iOS- og Android-app',
        altEn: 'Detailed mobile customer onboarding and screen architecture',
        captionNo: 'BankID, Vipps eller SMS OTP innlogging og full brukertilpasning',
        captionEn: 'BankID, Vipps, or OTP sign-in paired with polished onboarding',
      },
    ],
    overviewTitleNo: 'Én felles mobilopplevelse uten kompromisser på ytelse',
    overviewTitleEn: 'Unified mobile engineering without sacrificing native feel',
    overviewTextNo:
      'God apputvikling begynner med å forstå brukerens hverdag. Vi starter ofte med klikkbare skisser og en fokusert MVP slik at du raskt kan teste funksjonalitet mot ekte brukere. Deretter bygger vi skreddersydd app-kodebase koblet mot sikker backend, innlogging med BankID eller SMS-kode (OTP), karttjenester og sanntidsvarsler.',
    overviewTextEn:
      'Successful apps start by solving friction for real users. We often begin with clickable prototypes and a focused MVP so you can validate early, then scale into a resilient production codebase with secure authentication, real-time maps, and push notifications.',
    benefitsNo: [
      {
        title: 'iOS og Android fra samme plattform',
        desc: 'Moderne rammeverk som React Native og Flutter gir rask og kostnadseffektiv utvikling for begge plattformer samtidig.',
      },
      {
        title: 'Rask vei fra idé til MVP',
        desc: 'Vi prioriterer kjernefunksjonene først slik at du kommer raskt ut i markedet og kan videreutvikle basert på reell brukerinnsikt.',
      },
      {
        title: 'Sikker backend og API-er',
        desc: 'Stabil database, brukerprofiler, rollebasert tilgang, betaling med Vipps/Stripe og kryptert dataflyt.',
      },
      {
        title: 'Komplett App Store-lansering',
        desc: 'Vi håndterer hele godkjenningsløpet mot Apple App Store og Google Play Store samt videre vedlikehold.',
      },
    ],
    benefitsEn: [
      {
        title: 'iOS & Android parity',
        desc: 'Modern cross-platform frameworks such as React Native and Flutter maximize quality while avoiding duplicate engineering effort.',
      },
      {
        title: 'Focused MVP delivery',
        desc: 'Prioritize high-impact features first to validate with real users and iterate efficiently.',
      },
      {
        title: 'Resilient backend & integrations',
        desc: 'User profiles, BankID/OTP authentication, Vipps/Stripe payments, and real-time notifications.',
      },
      {
        title: 'Managed store publishing',
        desc: 'Full handling of Apple App Store and Google Play review guidelines and release pipelines.',
      },
    ],
    capabilitiesNo: [
      'UX/UI-design og interaktive prototyper tilpasset tommelvennlig mobilbruk',
      'Apputvikling i React Native, Flutter eller native Swift / Kotlin ved behov',
      'MVP utvikling for oppstartsbedrifter og nye digitale satsinger',
      'Innlogging med BankID, Vipps eller SMS-engangs­kode (OTP)',
      'Kart, GPS-sporing i sanntid og push-varslinger',
      'Administrasjonspanel for web og full kontroll over brukere og innhold',
    ],
    capabilitiesEn: [
      'Thumb-friendly mobile UI/UX and clickable Figma prototypes',
      'Engineering with React Native, Flutter, or native Swift / Kotlin',
      'Lean MVP development for new ventures and internal pilots',
      'Secure authentication with BankID, Vipps, or mobile OTP',
      'Interactive maps, real-time GPS tracking, and push notifications',
      'Web admin dashboard for complete operational oversight',
    ],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Swift', 'Kotlin', 'Node.js', 'PostgreSQL'],
    processNo: [
      {
        step: '01',
        title: 'Konsept & MVP-omfang',
        desc: 'Vi spisser idéen, definerer brukerroller og prioriterer hva som trengs til første lansering.',
      },
      {
        step: '02',
        title: 'Interaktiv App-design',
        desc: 'Komplett flyt for alle skjermbilder skapes og testes slik at brukeropplevelsen føles intuitiv.',
      },
      {
        step: '03',
        title: 'App- og Backend-utvikling',
        desc: 'Kontinuerlige sprintleveranser der du tester nye bygg direkte på din egen telefon underveis.',
      },
      {
        step: '04',
        title: 'Publisering & Oppfølging',
        desc: 'Innsending til App Store og Google Play, overvåking og videreutvikling ved nye OS-versjoner.',
      },
    ],
    processEn: [
      {
        step: '01',
        title: 'Concept & MVP Scope',
        desc: 'Sharpening core user flows and prioritizing features required for initial market launch.',
      },
      {
        step: '02',
        title: 'Interactive App UI/UX',
        desc: 'Designing every screen and navigation transition before writing production mobile code.',
      },
      {
        step: '03',
        title: 'Mobile & API Sprints',
        desc: 'Iterative development with regular preview builds you can test directly on iOS and Android.',
      },
      {
        step: '04',
        title: 'App Store Release & Care',
        desc: 'Store submission management, crash monitoring, and continuous OS compatibility updates.',
      },
    ],
    faqs: [
      {
        questionNo: 'Bør vi velge å utvikle mobilapp for både iOS og Android?',
        questionEn: 'Should we build for both iOS and Android?',
        answerNo:
          'I Norge har iOS og Android begge høye markedsandeler. Med moderne kryssplattform-teknologi som React Native eller Flutter leverer vi begge plattformene fra én felles kodebase, slik at du når alle brukere uten å betale for to separate prosjekter.',
        answerEn:
          'Both iOS and Android hold major market share in Norway. Modern frameworks like React Native and Flutter let us ship native-feeling apps for both platforms from a unified codebase.',
      },
      {
        questionNo: 'Kan vi starte med en MVP før vi bygger hele løsningen?',
        questionEn: 'Can we launch an MVP before building the full platform?',
        answerNo:
          'Ja, vi anbefaler ofte MVP utvikling. Da bygger vi en solid og skalerbar kjerne med de viktigste funksjonene først, tester mot markedet og utvider videre i planlagte faser.',
        answerEn:
          'Yes, starting with a well-architected MVP allows you to validate core workflows with real users and expand features systematically.',
      },
      {
        questionNo: 'Hjelper Geton også med backend og adminpanel til appen?',
        questionEn: 'Do you also build the backend and admin dashboard?',
        answerNo:
          'Ja. En skreddersydd app krever nesten alltid API-er, database, autentisering og et web-basert adminpanel. Vi utvikler hele løsningen samlet.',
        answerEn:
          'Yes. Almost every mobile app relies on APIs, cloud databases, authentication, and a web admin portal—we engineer the entire stack under one roof.',
      },
    ],
    relatedSlugs: ['produktdesign-ux-ui', 'webapplikasjoner-og-systemutvikling', 'systemintegrasjoner-og-api'],
  },

  'webapplikasjoner-og-systemutvikling': {
    slug: 'webapplikasjoner-og-systemutvikling',
    routePath: '/tjenester/webapplikasjoner-og-systemutvikling',
    inquiryType: 'saas',
    navLabelNo: 'Systemutvikling',
    navLabelEn: 'System Development',
    seoTitleNo: 'Webapplikasjoner & Systemutvikling – Skreddersydd Programvare | Geton AS',
    seoTitleEn: 'Web Applications & Custom Software Development | Geton AS',
    seoDescNo:
      'Trenger bedriften en skreddersydd webapplikasjon eller nytt bedriftssystem? Geton leverer systemutvikling, API-integrasjoner og automatisering i Norge.',
    seoDescEn:
      'Bespoke web applications, enterprise business systems, API integrations, and workflow automation engineered by Geton AS in Norway.',
    eyebrowNo: 'WEBAPPLIKASJONER & SYSTEMUTVIKLING',
    eyebrowEn: 'WEB APPLICATIONS & CUSTOM SOFTWARE',
    h1No: 'Systemutvikling og webapplikasjoner skreddersydd for din bedrift',
    h1En: 'Custom software and web applications engineered for your operations',
    introNo:
      'Når hyllevare og regneark bremser veksten, skaper skreddersydd programvare et varig konkurransefortrinn. Geton utvikler webapplikasjoner, interne bedriftssystemer, kundeportaler og sømløse API-integrasjoner for virksomheter i Bergen, Øygarden, Vestland og resten av Norge.',
    introEn:
      'When spreadsheets and rigid SaaS tools hold your team back, bespoke software turns daily friction into efficiency. Geton engineers custom web applications, internal portals, and automated API integrations across Norway.',
    heroImage: {
      src: '/assets/aistudio/Frakt360__Komplett_norsk_fraktplattform_6546bb91.webp',
      altNo: 'Skreddersydd norsk systemplattform for logistikk og bedriftsdrift utviklet av Geton AS',
      altEn: 'Custom Norwegian business platform for logistics and operations engineered by Geton AS',
      captionNo: 'Komplett webplattform med sanntidsdashbord, rollebasert tilgang og API-synk',
      captionEn: 'Full-featured web platform with real-time dashboards, role access, and automated sync',
    },
    galleryImages: [
      {
        src: '/assets/images/nordic_saas_showcase_1793707988142.webp',
        altNo: 'Skalerbart SaaS-grensesnitt og adminportal for bedriftskunder',
        altEn: 'Scalable SaaS interface and administration dashboard',
        captionNo: 'Skreddersydde fagsystemer uten begrensninger fra ferdigprogramvare',
        captionEn: 'Bespoke enterprise systems tailored around actual internal workflows',
      },
      {
        src: '/assets/images/software_bespoke_architecture_1793710479073.webp',
        altNo: 'Modulær backend- og API-arkitektur for sikre forretningssystemer',
        altEn: 'Modular backend and API architecture for secure business platforms',
        captionNo: 'Sikker datamodell, automatisk fakturering og fullt eierskap til kildekode',
        captionEn: 'Clean relational modeling, automated billing, and 100% source code ownership',
      },
    ],
    overviewTitleNo: 'Bygg bedriftssystemer som passer måten dere faktisk jobber på',
    overviewTitleEn: 'Build business systems shaped around your actual workflow',
    overviewTextNo:
      'Mange selskaper kaster bort timer hver uke på å flytte data manuelt mellom regnskap, ordre, lager og kundesystemer. Med målrettet systemutvikling samler vi arbeidsflyter i én oversiktlig webapplikasjon, knytter sammen eksisterende tjenester via API og automatiserer rutineoppgaver på en sikker og skalerbar måte.',
    overviewTextEn:
      'Many organizations lose hours weekly copying data manually across accounting, orders, warehouses, and CRM tools. Custom system development unifies workflows in a single browser portal connected cleanly via APIs.',
    benefitsNo: [
      {
        title: 'Eliminer manuelt dobbeltarbeid',
        desc: 'Automatiser ordreflyt, rapportering, varsling og synkronisering på tvers av systemer med pålitelige API-integrasjoner.',
      },
      {
        title: '100 % tilpasset dine prosesser',
        desc: 'Funksjoner, dashbord og tilgangsroller bygges rundt bedriftens reelle arbeidsflyt uten unødvendige lisenskostnader.',
      },
      {
        title: 'Skalerbar og sikker arkitektur',
        desc: 'Moderne skyteknologi, rollebasert tilgangskontroll (RBAC) og ryddige datamodeller som tåler fremtidig vekst.',
      },
      {
        title: 'Fullt eierskap til løsningen',
        desc: 'Skreddersydd programvare som dere eier og kan videreutvikle i takt med nye behov i markedet.',
      },
    ],
    benefitsEn: [
      {
        title: 'Eliminate manual bottlenecks',
        desc: 'Automate order flows, reporting, and bidirectional data syncing through reliable API integrations.',
      },
      {
        title: '100% aligned with your workflow',
        desc: 'Dashboards, approvals, and business rules crafted precisely around your operations without per-seat SaaS bloat.',
      },
      {
        title: 'Scalable, secure architecture',
        desc: 'Role-based access controls, clean relational schemas, and resilient cloud hosting designed to grow with volume.',
      },
      {
        title: 'Full IP ownership',
        desc: 'You own your bespoke software and retain complete freedom to evolve capabilities over time.',
      },
    ],
    capabilitiesNo: [
      'Skreddersydde webapplikasjoner, SaaS-plattformer og kundeportaler',
      'Interne bedriftssystemer for ordre, logistikk, drift og administrasjon',
      'API-integrasjoner mot regnskap (Tripletex, PowerOffice), transportører (Bring, PostNord) og betaling (Vipps, Stripe)',
      'Automatisering av arbeidsprosesser, varsling og dokumenthåndtering',
      'Rolle- og brukerstyring med BankID, SSO eller tofaktor-innlogging',
      'Kontinuerlig videreutvikling, overvåking og teknisk support',
    ],
    capabilitiesEn: [
      'Bespoke SaaS platforms, admin portals, and customer dashboards',
      'Internal business tools for logistics, scheduling, and operations',
      'API integrations for Tripletex, PowerOffice, Bring, PostNord, Vipps, and Stripe',
      'Workflow automation and automated status notifications',
      'Role-based permissions with BankID, SSO, and MFA security',
      'Ongoing maintenance, monitoring, and iterative evolution',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', '.NET', 'PostgreSQL', 'AWS / Azure'],
    processNo: [
      {
        step: '01',
        title: 'Prosessanalyse & Arkitektur',
        desc: 'Vi kartlegger flaskehalser, datakilder og integrasjonsbehov for å designe riktig systemarkitektur.',
      },
      {
        step: '02',
        title: 'Løsningsdesign & Datamodell',
        desc: 'Tydelige arbeidsflyter, dashbord-skisser og sikkerhetsmodell verifiseres med nøkkelbrukere.',
      },
      {
        step: '03',
        title: 'Iterativ Systemutvikling',
        desc: 'Kjernefunksjoner og API-koblinger bygges trinnvis med automatiserte tester og fortløpende demo.',
      },
      {
        step: '04',
        title: 'Produksjonssetting & Support',
        desc: 'Trygg utrulling, opplæring av teamet og løpende support for videre vekst.',
      },
    ],
    processEn: [
      {
        step: '01',
        title: 'Workflow & System Blueprint',
        desc: 'Mapping operational bottlenecks, data flows, and API contracts before writing code.',
      },
      {
        step: '02',
        title: 'UX Flows & Data Modeling',
        desc: 'Validating admin screens, role permissions, and relational database schemas with key stakeholders.',
      },
      {
        step: '03',
        title: 'Iterative Engineering',
        desc: 'Delivering core modules and API bridges in transparent sprints with automated testing.',
      },
      {
        step: '04',
        title: 'Deployment & Long-Term Support',
        desc: 'Controlled production rollout, team onboarding, and proactive system maintenance.',
      },
    ],
    faqs: [
      {
        questionNo: 'Når lønner det seg å investere i skreddersydd programvare?',
        questionEn: 'When does custom software make more sense than off-the-shelf tools?',
        answerNo:
          'Når eksisterende hyllevaresystemer krever mye manuelt arbeid på tvers av verktøy, mangler kritiske bransjefunksjoner, eller når selve programvaren utgjør kjernen i produktet dere selger.',
        answerEn:
          'When standard SaaS tools force heavy manual workarounds across disconnected apps, or when your software itself is your core product or competitive advantage.',
      },
      {
        questionNo: 'Kan dere integrere en ny webapplikasjon med systemene vi bruker i dag?',
        questionEn: 'Can you integrate a new web application with our existing tools?',
        answerNo:
          'Ja. API-integrasjoner er en av våre kjernekompetanser. Vi kobler nye og eksisterende systemer sammen mot blant annet Tripletex, Shopify, WooCommerce, Bring, PostNord, Vipps, Stripe og BankID.',
        answerEn:
          'Yes. API integrations are one of our core strengths, connecting accounting, e-commerce, shipping carriers, and payment providers seamlessly.',
      },
      {
        questionNo: 'Hvordan sikrer dere datavern og videre drift etter lansering?',
        questionEn: 'How do you handle security and ongoing support after launch?',
        answerNo:
          'Vi bygger etter prinsipper om innebygd personvern (GDPR), kryptert kommunikasjon og sikker tilgangsstyring. Etter lansering tilbyr vi fleksible avtaler for drift, overvåking og videreutvikling.',
        answerEn:
          'We engineer with GDPR data protection, encrypted transit, and strict access controls, backed by ongoing support and maintenance agreements.',
      },
    ],
    relatedSlugs: ['systemintegrasjoner-og-api', 'sky-losninger', 'mobilapputvikling'],
  },

  'sky-losninger': {
    slug: 'sky-losninger',
    routePath: '/tjenester/sky-losninger',
    inquiryType: 'saas',
    navLabelNo: 'Sky-løsninger',
    navLabelEn: 'Cloud Solutions',
    seoTitleNo: 'Sky-løsninger, Hosting & Skalerbar Infrastruktur | Geton AS',
    seoTitleEn: 'Cloud Solutions, AWS, Azure & Managed Hosting | Geton AS',
    seoDescNo:
      'Sikker skydrift, AWS, Microsoft Azure, GCP og automatisk skalering for norske bedrifter. Geton AS bygger stabil skyarkitektur.',
    seoDescEn:
      'Resilient cloud hosting, AWS, Azure, and GCP architecture with automated scaling and GDPR compliance by Geton AS.',
    eyebrowNo: 'INFRASTRUKTUR & SKY • AWS / AZURE / GCP',
    eyebrowEn: 'CLOUD SOLUTIONS & INFRASTRUCTURE',
    h1No: 'Sky-løsninger og sikker drift som vokser med trafikken',
    h1En: 'Resilient cloud architecture and managed hosting built to scale',
    introNo:
      'En digital tjeneste er aldri sterkere enn infrastrukturen den kjører på. Geton AS designer, setter opp og drifter skalerbare skyløsninger på AWS, Microsoft Azure og Google Cloud med fokus på europeisk personvern (GDPR), høy oppetid og forutsigbare driftskostnader.',
    introEn:
      'Digital platforms depend on rock-solid infrastructure. Geton AS architects and operates resilient cloud environments on AWS, Azure, and Google Cloud focused on security, automatic scaling, and predictable cost control.',
    heroImage: {
      src: '/assets/images/software_devops_monitoring_1793710481343.webp',
      altNo: 'Skydrift, sanntidsovervåking og skyarkitektur hos Geton AS',
      altEn: 'Cloud operations, real-time monitoring, and microservice topology',
      captionNo: 'Automatisk skalering, sanntidsovervåking og europeisk datalagring (GDPR)',
      captionEn: 'Auto-scaling clusters, real-time telemetry, and European GDPR-compliant hosting',
    },
    galleryImages: [
      {
        src: '/assets/images/software_bespoke_architecture_1793710479073.webp',
        altNo: 'Containerisert skyplattform med automatisk CI/CD-utrulling',
        altEn: 'Containerized cloud platform with automated CI/CD deployment',
        captionNo: 'Trygg utrulling uten nedetid via automatiserte CI/CD-pipelines',
        captionEn: 'Zero-downtime releases powered by automated CI/CD pipelines',
      },
      {
        src: '/assets/images/about_geton_studio_1793711805670.webp',
        altNo: 'Geton AS skyingeniører i Straume / Bergen',
        altEn: 'Geton AS cloud engineers in Bergen and Straume',
        captionNo: 'Kontinuerlig kostnadskontroll (FinOps) og sikkerhetsovervåking',
        captionEn: 'Continuous FinOps cloud cost optimization and proactive security audits',
      },
    ],
    overviewTitleNo: 'Stabil drift, lav responstid og full kontroll på skykostnadene',
    overviewTitleEn: 'Reliable uptime, low latency, and transparent cloud governance',
    overviewTextNo:
      'Mange selskaper overbetaler for overdimensjonerte servere eller opplever ustabilitet under trafikkstopper. Vi strukturerer skyarkitekturen med containere, globale innholdsnettverk (CDN), automatiske sikkerhetskopier og presis tilgangskontroll, slik at systemene dine kjører raskt døgnet rundt.',
    overviewTextEn:
      'Businesses frequently overpay for idle server capacity or suffer slowdowns during traffic spikes. We build container-based, edge-cached cloud infrastructure with automated backups and strict access boundaries.',
    benefitsNo: [
      { title: 'Automatisk skalering', desc: 'Ressursene tilpasser seg trafikken automatisk slik at siden aldri kneler ved kampanjer.' },
      { title: 'Europeisk datalagring', desc: 'Servere plassert i EU/EØS for full etterlevelse av norske og europeiske personvernregler.' },
      { title: 'Automatisert backup & gjenoppretting', desc: 'Krypterte sikkerhetskopier og testede gjenopprettingsrutiner gir driftssikkerhet.' },
      { title: 'Kostnadskontroll (FinOps)', desc: 'Ryddig overvåking av forbruk fjerner skjulte skykostnader og unødvendig ressursbruk.' },
    ],
    benefitsEn: [
      { title: 'Elastic scaling', desc: 'Infrastructure scales smoothly with demand spikes and trims idle capacity off-peak.' },
      { title: 'EU/EEA data residency', desc: 'Cloud regions anchored in Europe to meet Norwegian GDPR expectations cleanly.' },
      { title: 'Automated resilience', desc: 'Encrypted automated snapshots and verified disaster recovery protocols.' },
      { title: 'Transparent cloud spend', desc: 'Proactive FinOps tuning prevents surprise cloud invoices.' },
    ],
    capabilitiesNo: [
      'Skystrategi og oppsett på AWS, Microsoft Azure, Google Cloud og Cloudflare',
      'Automatisert utrulling (CI/CD) via GitHub Actions og Docker',
      'Overvåking av oppetid, API-responstid og feillogger i sanntid',
      'SSL/TLS-kryptering, brannmur (WAF) og DDoS-beskyttelse',
      'Migrering fra eldre lokale servere til moderne skyløsninger',
    ],
    capabilitiesEn: [
      'Cloud architecture across AWS, Microsoft Azure, GCP, and Cloudflare',
      'Automated CI/CD deployment pipelines via GitHub Actions and Docker',
      'Real-time uptime, latency, and error monitoring',
      'TLS encryption, Web Application Firewalls, and DDoS mitigation',
      'Zero-disruption migration from legacy servers to modern cloud platforms',
    ],
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Terraform', 'Cloudflare', 'PostgreSQL'],
    processNo: [
      { step: '01', title: 'Revisjon & Behov', desc: 'Kartlegging av trafikk, datavolum, sikkerhetskrav og ønsket oppetid.' },
      { step: '02', title: 'Arkitekturplan', desc: 'Valg av riktig skyplattform, region og backup-strategi som kode.' },
      { step: '03', title: 'Migrering & Oppsett', desc: 'Kontrollert overføring og oppsett av automatiske pipelines uten nedetid.' },
      { step: '04', title: 'Kontinuerlig Drift', desc: 'Løpende overvåking, sikkerhetspatcher og månedlig ytelsessjekk.' },
    ],
    processEn: [
      { step: '01', title: 'Infrastructure Audit', desc: 'Evaluating workload patterns, compliance requirements, and latency goals.' },
      { step: '02', title: 'Architecture Blueprint', desc: 'Designing infrastructure-as-code with EU regions and clean failover paths.' },
      { step: '03', title: 'Controlled Cutover', desc: 'Migrating databases and services smoothly with zero operational interruption.' },
      { step: '04', title: 'Managed Operations', desc: 'Ongoing telemetry, vulnerability patching, and cost optimization.' },
    ],
    faqs: [
      {
        questionNo: 'Hvilken skyplattform bør bedriften velge?',
        questionEn: 'Which cloud platform fits our company best?',
        answerNo:
          'Vi jobber uavhengig med AWS, Azure, Google Cloud og moderne edge-plattformer. Valget avhenger av om dere allerede bruker Microsoft 365/.NET (ofte Azure) eller ønsker fleksibel Linux/container-drift (AWS/GCP).',
        answerEn:
          'We work across AWS, Azure, and GCP depending on your existing Microsoft/Linux stack, compliance needs, and workload shape.',
      },
      {
        questionNo: 'Kan dere overta og modernisere en eksisterende server?',
        questionEn: 'Can you migrate an existing legacy server setup?',
        answerNo:
          'Ja. Vi hjelper bedrifter med å flytte utdaterte hostingoppsett over til rask, moderne og sikker skyinfrastruktur med minimal nedetid.',
        answerEn:
          'Yes. We regularly migrate slow or legacy hosting setups onto resilient modern cloud platforms without service disruption.',
      },
    ],
    relatedSlugs: ['vedlikehold-og-support', 'webapplikasjoner-og-systemutvikling', 'systemintegrasjoner-og-api'],
  },

  'produktdesign-ux-ui': {
    slug: 'produktdesign-ux-ui',
    routePath: '/tjenester/produktdesign-ux-ui',
    inquiryType: 'web',
    navLabelNo: 'UX & Produktdesign',
    navLabelEn: 'UI/UX Product Design',
    seoTitleNo: 'UI/UX Design & Interaktive Prototyper | Geton AS',
    seoTitleEn: 'UI/UX & Product Design Studio | Geton AS',
    seoDescNo:
      'Menneskesentrert UI/UX-design, klikkbare Figma-prototyper, designsystemer og universell utforming (WCAG 2.1) fra Geton AS.',
    seoDescEn:
      'Human-centered UI/UX design, interactive Figma prototypes, scalable design systems, and WCAG accessibility by Geton AS.',
    eyebrowNo: 'BRUKEROPPLEVELSE & UI/UX-DESIGN',
    eyebrowEn: 'HUMAN-CENTERED UI/UX DESIGN',
    h1No: 'UI/UX & Produktdesign som gjør komplekse verktøy enkle å bruke',
    h1En: 'UI/UX & product design that turns complexity into effortless usability',
    introNo:
      'Godt design handler om hvordan et produkt fungerer — ikke bare hvordan det ser ut. Vi utformer brukerreiser, interaktive Figma-prototyper og helhetlige designsystemer som øker konverteringen, kutter opplæringstid og styrker merkevaren din.',
    introEn:
      'Great design is how a product works, not just how it looks. We design intuitive user flows, clickable Figma prototypes, and scalable design systems that boost conversion and user satisfaction.',
    heroImage: {
      src: '/assets/images/software_multidisciplinary_ui_1793710478928.webp',
      altNo: 'UI/UX produktdesign og interaktive skjermbilder laget i Figma av Geton AS',
      altEn: 'UI/UX product design and component library architecture',
      captionNo: 'Fra brukerinnsikt og trådskisser til klikkbar Figma-prototype klar for utvikling',
      captionEn: 'From user research and wireframes to interactive Figma prototypes ready for engineering',
    },
    galleryImages: [
      {
        src: '/assets/aistudio/Swallet_Fintech_Case_Study_Showcase_302711d7.webp',
        altNo: 'Fintech mobil- og webdesignsystem utviklet for Swallet',
        altEn: 'Fintech mobile and web UI showcase',
        captionNo: 'Visuelt klare dashbord med fokus på lesbarhet og datavisualisering',
        captionEn: 'High-clarity financial dashboards balancing typography and instant scanability',
      },
      {
        src: '/assets/aistudio/Hentli_driver_journey_UI_board-1_ea5e846b.webp',
        altNo: 'Komplett brukergrensesnitt og skjermflyt for mobilapp',
        altEn: 'End-to-end mobile interface user flow architecture',
        captionNo: 'Sømløse mobilskjermer med universell kontrast og tydelige handlingsknapper',
        captionEn: 'Seamless mobile flows built with accessible contrast and clear ergonomics',
      },
    ],
    overviewTitleNo: 'Test brukeropplevelsen før én linje kode skrives',
    overviewTitleEn: 'Validate user experience before writing a single line of code',
    overviewTextNo:
      'Å endre retning i koden er dyrt, mens å teste en klikkbar prototype i Figma er raskt. Vi starter med å forstå sluttbrukerne dine, kartlegger kritiske oppgaver og lager realistiske prototyper som kan prøves på mobil og datamaskin før utviklingsteamet tar over.',
    overviewTextEn:
      'Refactoring production code is expensive; iterating on an interactive Figma prototype is rapid. We validate flows with stakeholders early so engineering proceeds with zero ambiguity.',
    benefitsNo: [
      { title: 'Klikkbare Figma-prototyper', desc: 'Opplev nøyaktig hvordan nettsiden eller appen vil føles før utviklingen starter.' },
      { title: 'Universell utforming (WCAG)', desc: 'God kontrast, lesbar typografi og logisk tastaturnavigasjon tilgjengelig for alle brukere.' },
      { title: 'Skalerbare designsystemer', desc: 'Gjenbrukbare komponenter og design tokens gir raskere utvikling og konsistent uttrykk.' },
      { title: 'Sømløs overlevering til kode', desc: 'Våre designere sitter side om side med utviklerne — ingenting går tapt på veien.' },
    ],
    benefitsEn: [
      { title: 'Clickable Figma prototypes', desc: 'Test navigation and workflows on real screens prior to engineering.' },
      { title: 'WCAG 2.1 AA accessibility', desc: 'Generous contrast ratios, clear hierarchy, and keyboard-friendly ergonomics.' },
      { title: 'Reusable design systems', desc: 'Tokenized component libraries ensure brand consistency across web and mobile.' },
      { title: 'Design-to-code parity', desc: 'Designers collaborate daily with engineers for pixel-accurate implementation.' },
    ],
    capabilitiesNo: [
      'Brukerreiser, informasjonsarkitektur og wireframing',
      'Interaktive prototyper i Figma for både web, iOS og Android',
      'Komplette designsystemer med komponenter, farger og typografi',
      'Brukertesting og konverteringsoptimalisering (CRO) av eksisterende løsninger',
    ],
    capabilitiesEn: [
      'User journey mapping, information architecture, and wireframing',
      'High-fidelity interactive Figma prototypes for web and mobile',
      'Comprehensive UI component systems and design tokens',
      'UX audits and conversion usability reviews',
    ],
    technologies: ['Figma', 'Design Tokens', 'WCAG 2.1 AA', 'Prototyping', 'Tailwind CSS'],
    processNo: [
      { step: '01', title: 'Innsikt & Brukerreise', desc: 'Vi forstår brukere, mål og friksjonspunkter i dagens prosess.' },
      { step: '02', title: 'Wireframes & Flyt', desc: 'Raske skisser som setter struktur og prioritering på hvert skjermbilde.' },
      { step: '03', title: 'Visuelt UI & Prototype', desc: 'Farger, typografi og interaksjoner samles i en levende prototype.' },
      { step: '04', title: 'Designsystem & Kode', desc: 'Komplett komponentbibliotek overleveres klart for produksjon.' },
    ],
    processEn: [
      { step: '01', title: 'User Discovery', desc: 'Understanding core tasks, audience habits, and existing usability bottlenecks.' },
      { step: '02', title: 'Wireframing', desc: 'Mapping page structure and flow before applying visual styling.' },
      { step: '03', title: 'Interactive UI Design', desc: 'Polishing typography, color systems, and interactive Figma flows.' },
      { step: '04', title: 'Developer Handoff', desc: 'Structured component specs built directly with the engineering team.' },
    ],
    faqs: [
      {
        questionNo: 'Kan vi bestille kun UI/UX-design og prototype først?',
        questionEn: 'Can we commission UI/UX design and prototyping as a standalone first phase?',
        answerNo:
          'Ja. Mange kunder starter med en design- og prototypefase for å avklare omfang, presentere løsningen internt eller for investorer, før selve programmeringen settes i gang.',
        answerEn:
          'Yes. Starting with a standalone UX/UI prototype helps align stakeholders and lock in scope before full development begins.',
      },
    ],
    relatedSlugs: ['merkevare-og-visuell-profil', 'nettsideutvikling', 'mobilapputvikling'],
  },

  'digital-markedsforing': {
    slug: 'digital-markedsforing',
    routePath: '/tjenester/digital-markedsforing',
    inquiryType: 'web',
    navLabelNo: 'Digital markedsføring',
    navLabelEn: 'Digital Marketing',
    seoTitleNo: 'Digital Markedsføring, Google Ads & Konvertering | Geton AS',
    seoTitleEn: 'Digital Marketing, Google Ads & Conversion Growth | Geton AS',
    seoDescNo:
      'Målrettet digital markedsføring med Google Ads, Meta-annonsering, sporing (GA4) og konverteringsoptimaliserte landingssider av Geton AS.',
    seoDescEn:
      'Targeted digital marketing combining Google Ads, Meta campaigns, GA4 conversion tracking, and landing page optimization.',
    eyebrowNo: 'VEKST & DIGITAL MARKEDSFØRING',
    eyebrowEn: 'GROWTH & DIGITAL MARKETING',
    h1No: 'Digital markedsføring som gir målbare henvendelser og salg',
    h1En: 'Targeted digital marketing engineered for measurable leads and ROI',
    introNo:
      'Å kjøpe annonseplass uten riktig landingsside og presis sporing gir sjelden lønnsomhet. Geton kobler målrettet annonsering på Google og Meta sammen med raske landingssider og ryddig konverteringssporing, slik at du ser hva hver markedsføringskrone gir tilbake.',
    introEn:
      'Ad spend without converting landing pages and clean analytics wastes budget. Geton connects Google & Meta campaigns with purpose-built landing pages and accurate GA4 tracking.',
    heroImage: {
      src: '/assets/images/contact_team_consultation_1793711783282.webp',
      altNo: 'Digital markedsføring, vekststrategi og kampanjerådgivning hos Geton AS',
      altEn: 'Digital marketing consultation and campaign planning at Geton AS',
      captionNo: 'Strategisk synlighet der målgruppen aktivt leter etter dine tjenester',
      captionEn: 'High-intent visibility reaching decision makers actively searching for your solutions',
    },
    galleryImages: [
      {
        src: '/assets/images/newsec_proptech_showcase_1793707988321.webp',
        altNo: 'Skreddersydde landingssider med høy konverteringsrate',
        altEn: 'Conversion-focused landing pages for digital campaigns',
        captionNo: 'Konverteringsoptimaliserte landingssider bygget for annonsekampanjer',
        captionEn: 'Purpose-built landing pages matching exact search ad intent',
      },
      {
        src: '/assets/images/nordic_saas_showcase_1793707988142.webp',
        altNo: 'Oversiktlig analyse av trafikk og konverteringer i sanntid',
        altEn: 'Clean analytics dashboard tracking conversions and lead flow',
        captionNo: 'Personvernvennlig sporing og måling av faktiske forespørsler',
        captionEn: 'Privacy-compliant conversion tracking tied to real customer inquiries',
      },
    ],
    overviewTitleNo: 'Kombiner trafikk, tydelig budskap og raske landingssider',
    overviewTitleEn: 'Unite targeted traffic, clear copy, and fast landing pages',
    overviewTextNo:
      'Fordi vi både kan teknisk utvikling og markedsføring, slipper du brudd mellom byrået som styrer annonsene og de som oppdaterer nettsiden. Vi forbedrer overskrifter, skjemaer, sporingsoppsett (GA4 / Server-side / Consent Mode) og søkeord samtidig.',
    overviewTextEn:
      'Because we combine software engineering with growth execution, there is no disconnect between ad campaigns and website improvements—we tune headlines, forms, and consent-safe GA4 tracking together.',
    benefitsNo: [
      { title: 'Google Search & Performance', desc: 'Fang opp kunder idet de aktivt søker etter løsninger i ditt marked.' },
      { title: 'Konverteringsoptimalisering (CRO)', desc: 'Skarpe budskap og lav friksjon i skjemaer øker andelen besøkende som tar kontakt.' },
      { title: 'GDPR-trygg sporing', desc: 'Korrekt oppsett av GA4 og samtykkestyring gir pålitelige tall uten juridiske gråsoner.' },
      { title: 'Full åpenhet', desc: 'Du eier alltid dine egne annonsekontoer og alle data fra dag én.' },
    ],
    benefitsEn: [
      { title: 'High-intent search ads', desc: 'Capture buyers at the exact moment they search for your services.' },
      { title: 'Conversion rate tuning', desc: 'Refine landing page structure and forms to maximize qualified leads.' },
      { title: 'Consent-ready measurement', desc: 'Properly configured GA4 with Cookie Consent v2.' },
      { title: 'Full account ownership', desc: 'You maintain full administrative ownership of all ad accounts and data.' },
    ],
    capabilitiesNo: [
      'Søkeordsannonsering i Google Ads (Search & Local)',
      'Målrettet B2B- og B2C-annonsering på Meta og LinkedIn',
      'Skreddersydde landingssider med rask lastetid og A/B-testing',
      'Sporingsoppsett med Google Tag Manager, GA4 og samtykkebanner',
    ],
    capabilitiesEn: [
      'Google Ads search and local campaign management',
      'Targeted Meta and LinkedIn B2B/B2C advertising',
      'Fast conversion landing pages and funnel improvements',
      'GA4, Google Tag Manager, and Consent Mode implementation',
    ],
    technologies: ['Google Ads', 'GA4', 'Meta Business', 'Google Tag Manager', 'Consent Mode v2'],
    processNo: [
      { step: '01', title: 'Analyse & Målgruppe', desc: 'Gjennomgang av søkeord, konkurrenter og nåværende konverteringsflyt.' },
      { step: '02', title: 'Landingsside & Sporing', desc: 'Klargjøring av sporing og målrettede landingssider.' },
      { step: '03', title: 'Kampanjelansering', desc: 'Målrettede annonser rulles ut med presis geografisk og bransjemessig styring.' },
      { step: '04', title: 'Løpende Optimalisering', desc: 'Kontinuerlig forbedring av klikkpriser, annonsetekst og konverteringsrate.' },
    ],
    processEn: [
      { step: '01', title: 'Market & Funnel Audit', desc: 'Analyzing search intent, competitor landscape, and landing readiness.' },
      { step: '02', title: 'Tracking & Pages', desc: 'Setting up compliant GA4 tracking and crisp conversion pages.' },
      { step: '03', title: 'Campaign Rollout', desc: 'Targeted search and social campaigns launched with tight geo-focus.' },
      { step: '04', title: 'Continuous Tuning', desc: 'Ongoing keyword refinement, bid management, and conversion testing.' },
    ],
    faqs: [
      {
        questionNo: 'Kan dere kombinere annonsering med forbedring av nettsiden vår?',
        questionEn: 'Can you optimize our landing pages alongside ad management?',
        answerNo:
          'Ja, det er vår største styrke. Vi forbedrer både nettsidens hastighet, tekst og kontaktskjema slik at annonsebudsjettet gir best mulig effekt.',
        answerEn:
          'Yes—improving page speed, copy, and lead forms directly alongside your ad campaigns maximizes return on spend.',
      },
    ],
    relatedSlugs: ['seo-og-ytelsesoptimalisering', 'nettsideutvikling', 'produktdesign-ux-ui'],
  },

  'nettbutikk-og-ehandel': {
    slug: 'nettbutikk-og-ehandel',
    routePath: '/tjenester/nettbutikk-og-ehandel',
    inquiryType: 'web',
    navLabelNo: 'E-handel & Nettbutikker',
    navLabelEn: 'E-Commerce Solutions',
    seoTitleNo: 'Nettbutikk & E-handel med Vipps, Klarna & Frakt | Geton AS',
    seoTitleEn: 'High-Converting E-Commerce Stores with Vipps & Logistics | Geton AS',
    seoDescNo:
      'Skreddersydde nettbutikker med sømløs Vipps/Klarna-betaling, Bring/PostNord-frakt og ERP-synkronisering utviklet av Geton AS.',
    seoDescEn:
      'Modern e-commerce websites integrating Vipps, Klarna, Stripe, carrier shipping APIs, and warehouse automation.',
    eyebrowNo: 'E-HANDEL & NETTBUTIKKER',
    eyebrowEn: 'E-COMMERCE & ONLINE STORES',
    h1No: 'Skalerbare nettbutikker med lynrask utsjekk og helautomatisk frakt',
    h1En: 'Scalable e-commerce platforms built for fast checkouts and logistics automation',
    introNo:
      'En vellykket nettbutikk krever mer enn et vakkert produktgalleri — den må fjerne friksjon i kassen og automatisere ordre, lager og frakt. Geton AS utvikler konverterende nettbutikker integrert mot Vipps, Klarna, Stripe, Bring, PostNord og regnskapssystemet ditt.',
    introEn:
      'Great online stores combine effortless mobile checkout with automated fulfillment behind the scenes. Geton engineers tailored e-commerce platforms connected cleanly to Vipps, Klarna, carriers, and accounting.',
    heroImage: {
      src: '/assets/aistudio/Frakt360__Komplett_norsk_fraktplattform_6546bb91.webp',
      altNo: 'Nettbutikk koblet mot automatisk fraktbooking, etiketter og ordrehåndtering',
      altEn: 'E-commerce storefront connected to automated shipping labels and logistics',
      captionNo: 'Helhetlig e-handel fra produktside og Vipps-betaling til automatisk fraktetikett',
      captionEn: 'End-to-end e-commerce connecting checkout, inventory, and carrier booking',
    },
    galleryImages: [
      {
        src: '/assets/aistudio/Smartphone_Sofa_Delivery_Map_Scene_86ff9f8d.webp',
        altNo: 'Mobilvennlig handel og sanntidssporing av pakke',
        altEn: 'Mobile commerce experience with live delivery tracking',
        captionNo: 'Friksjonsfri mobilhandel hvor over 70 % av kjøpene starter',
        captionEn: 'Sub-second mobile shopping engineered for modern consumer habits',
      },
      {
        src: '/assets/images/nordic_saas_showcase_1793707988142.webp',
        altNo: 'Ordrestyring og varelagersynkronisering for nettbutikk',
        altEn: 'Order management and inventory dashboard for online retail',
        captionNo: 'Automatisert synk mot lager (WMS), Shopify/WooCommerce eller skreddersydd kasse',
        captionEn: 'Automated sync with warehouse systems, Tripletex, Shopify, or headless commerce',
      },
    ],
    overviewTitleNo: 'Slutt på manuell registrering av ordrer og fraktbrev',
    overviewTitleEn: 'Eliminate manual order handling and shipping bottlenecks',
    overviewTextNo:
      'Fra erfaringen vår med logistikkplattformen Frakt360 vet vi nøyaktig hvor skoen trykker for norske nettbutikker. Vi leverer både skreddersydde headless-løsninger og utvidede Shopify-/WooCommerce-rigger med sømløs betaling, automatisk merking av pakker og direkte regnskapssynk.',
    overviewTextEn:
      'Drawing on our engineering work behind logistics platform Frakt360, we help merchants eliminate manual copying between storefront, warehouse, carriers, and accounting.',
    benefitsNo: [
      { title: 'Norske betalingsløsninger', desc: 'Sømløs utsjekk med Vipps Hurtigkasse, Klarna, Apple Pay og Stripe.' },
      { title: 'Frakt & Retur på autopilot', desc: 'Direkte integrasjon mot Bring, PostNord, Frakt360 og etikettutskrift.' },
      { title: 'B2C og B2B kundespesifikke priser', desc: 'Støtte for innloggede forhandlere, avtalepriser og faktura.' },
      { title: 'Lynrask produktfiltrering', desc: 'Øyeblikkelig søk og filtrering selv ved tusenvis av varelinjer.' },
    ],
    benefitsEn: [
      { title: 'Nordic checkout standards', desc: 'Native support for Vipps, Klarna, Apple Pay, and Stripe.' },
      { title: 'Automated shipping & returns', desc: 'Direct carrier integrations for Bring, PostNord, and warehouse WMS.' },
      { title: 'B2C & B2B customer tiers', desc: 'Support for wholesale portals, custom pricing, and invoice checkout.' },
      { title: 'Instant catalog filtering', desc: 'Fast faceted search across thousands of SKUs on any device.' },
    ],
    capabilitiesNo: [
      'Skreddersydd nettbutikkdesign optimalisert for mobilhandel',
      'Vipps, Klarna og Stripe betalingsintegrasjoner',
      'Integrasjon mot Tripletex, PowerOffice, Shopify, WooCommerce og Mystore',
      'Automatisk ordresynkronisering til lager og transportører (Bring / PostNord)',
    ],
    capabilitiesEn: [
      'Conversion-engineered mobile-first storefront UI',
      'Vipps, Klarna, and Stripe checkout setup',
      'Integrations with Tripletex, PowerOffice, Shopify, and WooCommerce',
      'Automated order dispatch to warehouses and carriers',
    ],
    technologies: ['Next.js', 'Shopify', 'WooCommerce', 'Vipps API', 'Stripe', 'Tripletex', 'Bring / PostNord'],
    processNo: [
      { step: '01', title: 'Vareflyt & Behov', desc: 'Kartlegging av varekatalog, fraktregler, betaling og ERP-koblinger.' },
      { step: '02', title: 'Butikkdesign & Kasse', desc: 'Design av produktsider og konverterende handlekurv.' },
      { step: '03', title: 'Utvikling & Integrasjon', desc: 'Oppsett av nettbutikk, betalings-API og lagersynk.' },
      { step: '04', title: 'Testing & Lansering', desc: 'Full prøvekjøring av betaling, etiketter og kvitteringer før åpning.' },
    ],
    processEn: [
      { step: '01', title: 'Commerce Scope', desc: 'Mapping SKUs, tax/VAT, shipping rules, and ERP integrations.' },
      { step: '02', title: 'Storefront UI', desc: 'Designing clear product discovery and frictionless checkout.' },
      { step: '03', title: 'Build & API Sync', desc: 'Connecting payments, logistics carriers, and inventory automation.' },
      { step: '04', title: 'QA & Launch', desc: 'End-to-end test orders, receipts, and label verification.' },
    ],
    faqs: [
      {
        questionNo: 'Kan dere koble nettbutikken vår direkte til Tripletex og Bring/PostNord?',
        questionEn: 'Can you connect our online store directly to Tripletex and shipping carriers?',
        answerNo:
          'Ja. Vi setter opp automatisert flyt slik at nye ordrer bokføres riktig og sendes rett til lager og transportør uten manuell kopiering.',
        answerEn:
          'Yes. We integrate accounting and carrier APIs so orders synchronize automatically from checkout to fulfillment.',
      },
    ],
    relatedSlugs: ['systemintegrasjoner-og-api', 'nettsideutvikling', 'digital-markedsforing'],
  },

  'systemintegrasjoner-og-api': {
    slug: 'systemintegrasjoner-og-api',
    routePath: '/tjenester/systemintegrasjoner-og-api',
    inquiryType: 'saas',
    navLabelNo: 'API & Integrasjoner',
    navLabelEn: 'API Integrations',
    seoTitleNo: 'Systemintegrasjoner, API-utvikling & Dataflyt | Geton AS',
    seoTitleEn: 'System Integrations, Custom APIs & Data Sync | Geton AS',
    seoDescNo:
      'Koble sammen Tripletex, PowerOffice, BankID, Vipps, Bring, PostNord og CRM med skreddersydde API-integrasjoner fra Geton AS.',
    seoDescEn:
      'Unify Tripletex, PowerOffice, BankID, Vipps, CRM, and ERP tools with reliable custom API integrations engineered by Geton AS.',
    eyebrowNo: 'INTEGRASJONER & DATAFLYT',
    eyebrowEn: 'SYSTEM INTEGRATIONS & APIS',
    h1No: 'Systemintegrasjoner & API-er som får bedriftens verktøy til å snakke sammen',
    h1En: 'System integrations & custom APIs uniting your business software',
    introNo:
      'Slutt å eksportere CSV-filer og punche data på nytt mellom ulike programmer. Geton utvikler stabile API-broer og mellomvare som synkroniserer ordre, kunder, fakturaer og autentisering i sanntid — trygt, sporbart og helautomatisk.',
    introEn:
      'Stop exporting spreadsheets and re-keying customer or invoice data across disconnected tools. Geton engineers resilient API bridges that synchronize orders, accounting, authentication, and logistics automatically.',
    heroImage: {
      src: '/assets/images/software_bespoke_architecture_1793710479073.webp',
      altNo: 'Modulær API-arkitektur og dataintegrasjon mellom bedriftssystemer',
      altEn: 'Modular API integration architecture connecting enterprise services',
      captionNo: 'Pålitelig toveis synkronisering mellom ERP, betaling, frakt og kundeportaler',
      captionEn: 'Bidirectional real-time syncing between ERP, payments, logistics, and portals',
    },
    galleryImages: [
      {
        src: '/assets/aistudio/Swallet_Fintech_Case_Study_Showcase_302711d7.webp',
        altNo: 'Open Banking PSD2 og BankID integrasjonsarkitektur',
        altEn: 'PSD2 Open Banking and BankID secure API integration showcase',
        captionNo: 'Erfaring med strenge finans- og sikkerhetskrav som PSD2 og BankID',
        captionEn: 'Production-tested experience with regulated Open Banking and BankID flows',
      },
      {
        src: '/assets/aistudio/Frakt360__Komplett_norsk_fraktplattform_6546bb91.webp',
        altNo: 'Sanntids transportør- og lagersynkronisering via API',
        altEn: 'Real-time carrier and warehouse API bridge showcase',
        captionNo: 'Webhooks, køhåndtering og feiltolerant synkronisering døgnet rundt',
        captionEn: 'Webhook pipelines, retry queues, and observable event logging',
      },
    ],
    overviewTitleNo: 'Automatisk dataflyt uten manuell kopiering eller datatap',
    overviewTitleEn: 'Reliable event-driven syncing without manual spreadsheets',
    overviewTextNo:
      'Når et eksternt API er midlertidig utilgjengelig, må ikke kritiske ordrer eller fakturaer gå tapt. Vi bygger integrasjoner med køhåndtering, automatiske nye forsøk (retries), kryptografisk signaturverifisering og oversiktlig feilvarsling.',
    overviewTextEn:
      'When an upstream vendor API blips, critical orders must never be lost. We design integrations with idempotent queues, automatic retries, signature validation, and clear error alerting.',
    benefitsNo: [
      { title: 'Regnskap & ERP', desc: 'Erfaring med Tripletex, PowerOffice Go, Visma og Ongoing WMS.' },
      { title: 'Betaling & Identitet', desc: 'BankID, Vipps, Klarna, Stripe og PSD2 Open Banking.' },
      { title: 'Feiltolerant synkronisering', desc: 'Kø- og webhook-arkitektur sikrer at ingen hendelser faller mellom to stoler.' },
      { title: 'Dokumentert & overvåket', desc: 'Tydelig logging gjør feilsøking rask og forutsigbar.' },
    ],
    benefitsEn: [
      { title: 'Nordic ERP & Accounting', desc: 'Tripletex, PowerOffice Go, Visma, and Ongoing WMS workflows.' },
      { title: 'Payments & Identity', desc: 'BankID, Vipps, Klarna, Stripe, and PSD2 Open Banking integrations.' },
      { title: 'Retry-safe pipelines', desc: 'Queue-backed architecture ensures temporary outages never lose records.' },
      { title: 'Full observability', desc: 'Structured logs make troubleshooting rapid and transparent.' },
    ],
    capabilitiesNo: [
      'REST, GraphQL og Webhook-integrasjoner',
      'Skreddersydde API-er for mobilapper, partnere og kundeportaler',
      'Sanntidssynkronisering mellom nettbutikk, lager og økonomisystem',
      'OAuth 2.0, JWT, BankID og rollebasert sikkerhetsarkitektur',
    ],
    capabilitiesEn: [
      'Custom REST, GraphQL, and webhook pipelines',
      'Dedicated API layers powering mobile apps and partner portals',
      'Real-time synchronization across commerce, WMS, and accounting',
      'OAuth 2.0, JWT, and BankID enterprise authentication',
    ],
    technologies: ['Node.js', '.NET', 'REST / GraphQL', 'PostgreSQL', 'BankID', 'Vipps API', 'Tripletex API'],
    processNo: [
      { step: '01', title: 'API-kartlegging', desc: 'Gjennomgang av datamodeller, endepunkter og sikkerhetskrav.' },
      { step: '02', title: 'Kontrakt & Sikkerhet', desc: 'Oppsett av autentisering, datamapping og feilhåndtering.' },
      { step: '03', title: 'Bygging & Testing', desc: 'Automatisert testing mot sandkassemiljø og kanttilfeller.' },
      { step: '04', title: 'Produksjon & Varsling', desc: 'Overvåking av gjennomstrømming og stabil sanntidssynk.' },
    ],
    processEn: [
      { step: '01', title: 'Schema Discovery', desc: 'Auditing vendor APIs, rate limits, and payload transformations.' },
      { step: '02', title: 'Auth & Error Design', desc: 'Structuring secure keys, idempotency, and retry policies.' },
      { step: '03', title: 'Sandbox Verification', desc: 'Testing edge cases thoroughly against vendor staging environments.' },
      { step: '04', title: 'Live Monitoring', desc: 'Deploying with automated alerts and throughput tracking.' },
    ],
    faqs: [
      {
        questionNo: 'Kan dere koble sammen et eldre internt system med moderne skytjenester?',
        questionEn: 'Can you connect a legacy internal database with modern cloud APIs?',
        answerNo:
          'Ja. Vi lager trygge adaptere og mellomvare som eksponerer eller synkroniserer data fra eldre databaser uten at dere må bytte ut alt på én gang.',
        answerEn:
          'Yes. We build clean middleware adapters that connect legacy databases safely with modern SaaS tools and mobile apps.',
      },
    ],
    relatedSlugs: ['webapplikasjoner-og-systemutvikling', 'kunstig-intelligens-og-automasjon', 'nettbutikk-og-ehandel'],
  },

  'kunstig-intelligens-og-automasjon': {
    slug: 'kunstig-intelligens-og-automasjon',
    routePath: '/tjenester/kunstig-intelligens-og-automasjon',
    inquiryType: 'saas',
    navLabelNo: 'AI & Automasjon',
    navLabelEn: 'AI & Automation',
    seoTitleNo: 'Kunstig Intelligens (AI) & Prosessautomasjon for Bedrifter | Geton AS',
    seoTitleEn: 'Practical AI & Workflow Automation for Businesses | Geton AS',
    seoDescNo:
      'GDPR-trygge AI-verktøy, dokumenthåndtering, internt kunnskapssøk og arbeidsflyt-automasjon utviklet for norske bedrifter av Geton AS.',
    seoDescEn:
      'GDPR-conscious AI assistants, automated document parsing, and intelligent workflow automation engineered by Geton AS.',
    eyebrowNo: 'KUNSTIG INTELLIGENS & EFFEKTIVISERING',
    eyebrowEn: 'PRACTICAL AI & AUTOMATION',
    h1No: 'Praktisk kunstig intelligens & automasjon som sparer timer hver uke',
    h1En: 'Practical AI & workflow automation saving hours of manual work',
    introNo:
      'Kunstig intelligens gir størst verdi når den løser konkrete tidstyver i hverdagen — ikke som pynt. Geton integrerer GDPR-bevisste språkmodeller, automatisk dokumentsortering og interne søkeassistenter rett inn i bedriftens egne systemer.',
    introEn:
      'AI delivers real value when embedded cleanly into daily operations—not as hype. Geton integrates GDPR-aware assistants, automated document extraction, and smart routing into your existing workflows.',
    heroImage: {
      src: '/assets/images/software_idea_to_launch_1793710481314.webp',
      altNo: 'AI-automasjon og intelligent arbeidsflyt integrert i bedriftsprogramvare',
      altEn: 'Intelligent AI automation and structured data pipelines',
      captionNo: 'Målrettet automatisering av dokumenter, saksbehandling og kundestøtte',
      captionEn: 'Focused automation for document parsing, triage, and internal knowledge retrieval',
    },
    galleryImages: [
      {
        src: '/assets/images/nordic_saas_showcase_1793707988142.webp',
        altNo: 'Internt dashbord for AI-assistert saksbehandling og innsikt',
        altEn: 'Internal dashboard powered by AI-assisted workflows',
        captionNo: 'Kunnskapssøk (RAG) over egne dokumenter, rutiner og prosjekthistorikk',
        captionEn: 'Private knowledge retrieval (RAG) grounded strictly in your verified company docs',
      },
      {
        src: '/assets/images/software_devops_monitoring_1793710481343.webp',
        altNo: 'Personvernsikker og kontrollert AI-infrastruktur',
        altEn: 'Privacy-first AI infrastructure and human-in-the-loop verification',
        captionNo: 'Full kontroll over data — ingenting brukes til å trene eksterne modeller',
        captionEn: 'Strict data governance ensuring private inputs never train public models',
      },
    ],
    overviewTitleNo: 'Trygg, målbar automatisering med mennesket i kontroll',
    overviewTitleEn: 'Safe, measurable automation with humans in control',
    overviewTextNo:
      'Vi designer AI-funksjoner med tydelige rammer: strukturerte utdata, sporbare kilder og mulighet for manuell godkjenning der det kreves. Slik kutter dere manuelt rutinearbeid på fakturaer, tilbud, e-posttriage og rapportering uten å miste kvalitetskontrollen.',
    overviewTextEn:
      'We engineer AI modules with structured schemas, source citations, and human-in-the-loop approvals—accelerating document intake, triage, and reporting reliably.',
    benefitsNo: [
      { title: 'Dokumentsortering & OCR', desc: 'Trekk ut data fra PDF-er, ordrebekreftelser og vedlegg rett inn i databasen.' },
      { title: 'Interne AI-assistenter', desc: 'Søk og still spørsmål direkte i selskapets egen dokumentasjon med kildereferanser.' },
      { title: '100 % GDPR-fokus', desc: 'Zero-data-retention API-avtaler i EU/EØS slik at forretningsdata forblir private.' },
      { title: 'Integrert i eksisterende verktøy', desc: 'Virker sømløst der teamet allerede jobber i stedet for enda en ny fane.' },
    ],
    benefitsEn: [
      { title: 'Automated document intake', desc: 'Extract structured fields from PDFs, invoices, and orders directly into your DB.' },
      { title: 'Private knowledge assistants', desc: 'Search company manuals and technical docs instantly with source citations.' },
      { title: 'GDPR & data isolation', desc: 'Enterprise zero-retention API endpoints keeping your business data private.' },
      { title: 'Embedded workflow triggers', desc: 'Automation built inside your existing portal rather than another standalone tool.' },
    ],
    capabilitiesNo: [
      'Automatisk kategorisering og dataekstraksjon fra dokumenter og skjemaer',
      'RAG-basert søk og spørsmål/svar i bedriftens egne databaser',
      'Smarte forslag til kundeservice, utkast og klassifisering',
      'Evaluering, kvalitetsmåling og kostnadskontroll på modellbruk',
    ],
    capabilitiesEn: [
      'Structured extraction and triage from incoming PDFs and emails',
      'RAG knowledge assistants grounded in private documentation',
      'Internal drafting and workflow classification helpers',
      'Automated evaluation harnesses and token spend governance',
    ],
    technologies: ['TypeScript', 'Structured Outputs', 'PostgreSQL pgvector', 'OCR Pipelines', 'Node.js'],
    processNo: [
      { step: '01', title: 'Identifiser Tidstyver', desc: 'Vi finner oppgavene som tar mest manuell tid i dag.' },
      { step: '02', title: 'Prototype på ekte data', desc: 'Rask test mot virkelige dokumenter for å dokumentere treffsikkerhet.' },
      { step: '03', title: 'Sikker Integrasjon', desc: 'Innebygd i bedriftens portal med logging og personvernkontroll.' },
      { step: '04', title: 'Måling & Finjustering', desc: 'Kontinuerlig forbedring basert på brukernes tilbakemeldinger.' },
    ],
    processEn: [
      { step: '01', title: 'Bottleneck Mapping', desc: 'Pinpointing repetitive manual steps with high automation ROI.' },
      { step: '02', title: 'Real-Data Proof', desc: 'Testing accuracy quickly against sample company documents.' },
      { step: '03', title: 'Secure Production Build', desc: 'Shipping inside your system with audit logs and review gates.' },
      { step: '04', title: 'Accuracy Tuning', desc: 'Monitoring precision and refining prompts over time.' },
    ],
    faqs: [
      {
        questionNo: 'Blir bedriftens dokumenter brukt til å trene offentlige AI-modeller?',
        questionEn: 'Will our private documents train public AI models?',
        answerNo:
          'Nei. Vi bruker utelukkende bedrifts-API-er med null datalagring til trening og europeisk prosessering der det er tilgjengelig.',
        answerEn:
          'Never. We configure commercial enterprise API tiers with zero training retention and strict access scoping.',
      },
    ],
    relatedSlugs: ['systemintegrasjoner-og-api', 'webapplikasjoner-og-systemutvikling', 'sky-losninger'],
  },

  'vedlikehold-og-support': {
    slug: 'vedlikehold-og-support',
    routePath: '/tjenester/vedlikehold-og-support',
    inquiryType: 'saas',
    navLabelNo: 'Vedlikehold & Support',
    navLabelEn: 'Maintenance & Support',
    seoTitleNo: 'Vedlikehold, Sikkerhetsoppdateringer & Teknisk Support | Geton AS',
    seoTitleEn: 'Ongoing Software Maintenance, Monitoring & Support | Geton AS',
    seoDescNo:
      'Trygg forvaltning av nettside, app og programvare. Geton AS leverer overvåking, sikkerhetsoppdateringer og rask support fra Straume / Bergen.',
    seoDescEn:
      'Proactive software maintenance, dependency security patching, uptime monitoring, and ongoing development support.',
    eyebrowNo: 'TRYGGHET & FORVALTNING',
    eyebrowEn: 'MAINTENANCE & SUPPORT',
    h1No: 'Vedlikehold og support som holder digitale løsninger trygge år etter år',
    h1En: 'Ongoing maintenance & technical support keeping your platforms dependable',
    introNo:
      'Digital programvare krever jevnlig ettersyn for å forbli rask, sikker og kompatibel med nye nettlesere, iOS- og Android-oppdateringer. Med Geton AS som langsiktig partner får du direkte tilgang til utviklere som kjenner systemet ditt.',
    introEn:
      'Websites, mobile apps, and cloud backends require continuous care to remain secure and compatible with new OS releases. Partner with Geton for direct engineer-led support and maintenance.',
    heroImage: {
      src: '/assets/images/software_devops_monitoring_1793710481343.webp',
      altNo: 'Kontinuerlig systemovervåking, sikkerhet og vedlikehold av digitale plattformer',
      altEn: 'Continuous uptime monitoring and security maintenance architecture',
      captionNo: 'Proaktiv overvåking, månedlige sikkerhetsoppdateringer og rask feilretting',
      captionEn: 'Proactive alerting, routine security patching, and responsive issue resolution',
    },
    galleryImages: [
      {
        src: '/assets/images/contact_developer_laptop_1793711783791.webp',
        altNo: 'Norsk utvikler følger opp systemdrift og kundehenvendelser',
        altEn: 'Norwegian software engineer reviewing system health and support tickets',
        captionNo: 'Direkte kontakt med utviklere i Bergen / Øygarden uten tungvinte støtteskjemaer',
        captionEn: 'Direct dialogue with engineers who understand your product codebase',
      },
      {
        src: '/assets/images/software_idea_to_launch_1793710481314.webp',
        altNo: 'Videreutvikling av nye funksjoner etter lansering',
        altEn: 'Structured feature evolution sprints post-launch',
        captionNo: 'Kontinuerlig videreutvikling i takt med bedriftens vekst',
        captionEn: 'Structured feature iterations evolving alongside your business goals',
      },
    ],
    overviewTitleNo: 'Forebygg nedetid og sikkerhetshull før de rammer kundene dine',
    overviewTitleEn: 'Prevent downtime and security regressions before users notice',
    overviewTextNo:
      'Utdaterte programvarepakker, utløpte sertifikater eller uventede API-endringer hos leverandører kan stanse kritiske prosesser. Vi holder kodebasen oppdatert, overvåker oppetiden automatisk og tar hånd om små og store forbedringsønsker fortløpende.',
    overviewTextEn:
      'Stale dependencies, expiring tokens, or quiet third-party API changes cause unexpected failures. We keep dependencies current, verify uptime continuously, and ship enhancements steadily.',
    benefitsNo: [
      { title: 'Automatisk overvåking', desc: 'Varsling ved avvik på nettside, API-er eller databaser døgnet rundt.' },
      { title: 'Faste sikkerhetsoppdateringer', desc: 'Kontinuerlig oppdatering av rammeverk, avhengigheter og sertifikater.' },
      { title: 'Mobil OS-kompatibilitet', desc: 'Tilpasning av iOS- og Android-apper når Apple og Google slipper nye versjoner.' },
      { title: 'Fleksibel videreutvikling', desc: 'Avtalt kapasitet til nye funksjoner, justeringer og rådgivning.' },
    ],
    benefitsEn: [
      { title: 'Continuous monitoring', desc: 'Instant alerting if endpoints, forms, or API bridges experience anomalies.' },
      { title: 'Routine security patching', desc: 'Scheduled package updates, vulnerability scans, and TLS management.' },
      { title: 'iOS & Android OS readiness', desc: 'Keeping store builds compliant with annual Apple and Google SDK mandates.' },
      { title: 'Reserved feature capacity', desc: 'Predictable monthly hours for enhancements and technical advice.' },
    ],
    capabilitiesNo: [
      'Oppetidsovervåking, feillogging og ytelsestester',
      'Sikkerhetsoppdatering av React, Next.js, Node.js, React Native og databaser',
      'App Store og Google Play vedlikehold og oppdateringer',
      'Løpende videreutvikling og teknisk sparringspartner',
    ],
    capabilitiesEn: [
      '24/7 uptime monitoring and automated error tracking',
      'Framework, runtime, and database security patching',
      'App Store & Google Play compliance maintenance',
      'Ongoing feature delivery and technical roadmap advisory',
    ],
    technologies: ['GitHub Actions', 'Sentry / Logging', 'Automated Testing', 'Security Audits', 'AWS / Azure'],
    processNo: [
      { step: '01', title: 'Systemgjennomgang', desc: 'Teknisk helsesjekk av eksisterende kodebase, server og backup.' },
      { step: '02', title: 'Oppsett av Overvåking', desc: 'Etablering av feilvarsling, logger og fast vedlikeholdsplan.' },
      { step: '03', title: 'Løpende Vedlikehold', desc: 'Månedlige oppdateringer, sikkerhetspatcher og hastighetskontroll.' },
      { step: '04', title: 'Videreutvikling', desc: 'Raske leveranser når bedriften trenger nye funksjoner.' },
    ],
    processEn: [
      { step: '01', title: 'Codebase Health Check', desc: 'Auditing existing dependencies, backups, and deployment setup.' },
      { step: '02', title: 'Telemetry Setup', desc: 'Adding synthetic checks, error alerts, and clean rollback safeguards.' },
      { step: '03', title: 'Scheduled Maintenance', desc: 'Proactive monthly security patches and dependency upgrades.' },
      { step: '04', title: 'Continuous Roadmap', desc: 'Delivering incremental improvements smoothly over time.' },
    ],
    faqs: [
      {
        questionNo: 'Kan Geton overta vedlikehold av en løsning laget av et annet byrå?',
        questionEn: 'Can Geton take over maintenance for software built by another vendor?',
        answerNo:
          'Ja, så lenge koden bruker standard moderne teknologi som React, Next.js, TypeScript, Node.js, .NET eller React Native tar vi gjerne en teknisk gjennomgang for å overta drift og videreutvikling.',
        answerEn:
          'Yes—following a brief codebase audit, we regularly assume ongoing maintenance and evolution for existing web and mobile products.',
      },
    ],
    relatedSlugs: ['sky-losninger', 'webapplikasjoner-og-systemutvikling', 'seo-og-ytelsesoptimalisering'],
  },

  'merkevare-og-visuell-profil': {
    slug: 'merkevare-og-visuell-profil',
    routePath: '/tjenester/merkevare-og-visuell-profil',
    inquiryType: 'web',
    navLabelNo: 'Merkevare & Profil',
    navLabelEn: 'Brand & Identity',
    seoTitleNo: 'Merkevare, Logo & Visuell Identitet | Geton AS',
    seoTitleEn: 'Brand Identity, Logo Design & Visual Guidelines | Geton AS',
    seoDescNo:
      'Skap et profesjonelt og helhetlig uttrykk med logo, fargepalett, typografi og digital profilmanual utviklet av Geton AS.',
    seoDescEn:
      'Build instant trust with a cohesive brand identity: vector logo design, color systems, typography, and digital guidelines.',
    eyebrowNo: 'DESIGN & VISUELL IDENTITET',
    eyebrowEn: 'BRANDING & VISUAL IDENTITY',
    h1No: 'Merkevare & Visuell profil som skaper umiddelbar tillit',
    h1En: 'Branding & visual identity built to earn instant trust',
    introNo:
      'Førsteinntrykket avgjør om en kunde tar kontakt. Geton designer distinkte logoer, fargepaletter, typografihierarki og digitale profilmanualer som fungerer like sylskarpt som favicon i nettleseren som på presentasjoner og nettsider.',
    introEn:
      'First impressions shape customer confidence immediately. Geton crafts crisp vector logos, balanced color palettes, typography hierarchies, and digital brand guidelines engineered for modern screens.',
    heroImage: {
      src: '/assets/images/about_geton_studio_1793711805670.webp',
      altNo: 'Visuell identitet, logodesign og digital merkevarebygging hos Geton AS',
      altEn: 'Visual brand identity and design workshop at Geton AS',
      captionNo: 'Helhetlig visuell profil skreddersydd for digitale flater og fysisk bruk',
      captionEn: 'Cohesive visual systems optimized for high-DPI displays and print alike',
    },
    galleryImages: [
      {
        src: '/assets/images/vestlandsk_hjertesenter_mockup_1793710496839.webp',
        altNo: 'Skandinavisk visuell profil implementert på nettside',
        altEn: 'Scandinavian brand identity brought to life on a live website',
        captionNo: 'Tydelig skandinavisk typografi og rolige kontraster som vekker tillit',
        captionEn: 'Clean Scandinavian typography paired with high-legibility contrast',
      },
      {
        src: '/assets/images/software_multidisciplinary_ui_1793710478928.webp',
        altNo: 'Digital profilmanual, fargepalett og ikonografi',
        altEn: 'Digital styleguide, color tokens, and iconography suite',
        captionNo: 'Leveres komplett med SVG-vektorfiler, favicons og retningslinjer',
        captionEn: 'Delivered complete with crisp SVG vectors, favicons, and usage rules',
      },
    ],
    overviewTitleNo: 'Designet for skjermer først — sylskarpt overalt',
    overviewTitleEn: 'Engineered screen-first — razor-sharp everywhere',
    overviewTextNo:
      'Mange eldre logoer ser uskarpe eller uleselige ut på mobilskjermer, i mørk modus eller som små ikoner. Vi designer merkevarer som ren vektorgrafikk (SVG) med gjennomtenkt balanse for både lyse og mørke bakgrunner.',
    overviewTextEn:
      'Legacy logos often look fuzzy or illegible on mobile screens, dark interfaces, or tiny favicons. We design clean geometric vector identities engineered to stay crisp on both light and dark surfaces.',
    benefitsNo: [
      { title: 'Vektorlogo & Symbol (SVG)', desc: 'Sylskarp logo som skalerer fra 16px favicon til storformat uten pikselering.' },
      { title: 'Lys og mørk profil', desc: 'Fargepaletter testet for både mørke applikasjoner og lyse dokumenter.' },
      { title: 'Typografi & Tone-of-Voice', desc: 'Tydelige fonter med høy lesbarhet på både mobil og store skjermer.' },
      { title: 'Digital profilmanual', desc: 'Enkelt dokument hele teamet og eksterne leverandører kan følge.' },
    ],
    benefitsEn: [
      { title: 'Scalable SVG vector marks', desc: 'Crisp rendering from 16px browser tabs up to large-format banners.' },
      { title: 'Light & dark surface parity', desc: 'Color tokens tested across both light and dark digital themes.' },
      { title: 'Readable typography pairings', desc: 'Distinctive display and body fonts calibrated for Norwegian and English copy.' },
      { title: 'Practical brand guide', desc: 'Clear guidelines your whole team can apply consistently.' },
    ],
    capabilitiesNo: [
      'Logodesign i vektorformat (SVG, PNG, PDF) og komplette favicon-pakker',
      'Fargepalett med WCAG-kontrastsjekk for web og app',
      'Typografi, ikonsettet og grafiske mønstre',
      'Maler for sosiale medier, presentasjoner og digitale annonser',
    ],
    capabilitiesEn: [
      'Vector logo creation (SVG, PNG, PDF) and full favicon suites',
      'Accessible color systems verified for WCAG contrast compliance',
      'Typography hierarchy, custom iconography, and visual motifs',
      'Social media cards and pitch deck templates',
    ],
    technologies: ['Vector SVG', 'Figma', 'WCAG Contrast', 'Typography Systems', 'Design Tokens'],
    processNo: [
      { step: '01', title: 'Posisjonering', desc: 'Avklaring av verdier, målgruppe og ønsket uttrykk i markedet.' },
      { step: '02', title: 'Konseptretninger', desc: 'Presentasjon av distinkte visuelle retninger og logoskisser.' },
      { step: '03', title: 'Finpuss & System', desc: 'Utforming av komplett palett, typografi og ikonografi.' },
      { step: '04', title: 'Overlevering', desc: 'Alle filformater og digital profilmanual klar til bruk.' },
    ],
    processEn: [
      { step: '01', title: 'Brand Discovery', desc: 'Aligning positioning, audience trust cues, and visual tone.' },
      { step: '02', title: 'Concept Directions', desc: 'Exploring distinct logo geometry and color directions.' },
      { step: '03', title: 'Visual Systematizing', desc: 'Building out typography, dark/light variations, and icons.' },
      { step: '04', title: 'Asset Handover', desc: 'Exporting full vector bundles and practical brand guidelines.' },
    ],
    faqs: [
      {
        questionNo: 'Kan vi oppgradere en eksisterende logo uten å miste gjenkjennelighet?',
        questionEn: 'Can you modernize our existing logo without losing brand recognition?',
        answerNo:
          'Ja. En visuell oppfriskning bevarer det kundene allerede kjenner igjen, samtidig som linjer, farger og vektorkvalitet strammes opp for moderne digitale flater.',
        answerEn:
          'Yes. Brand refreshes preserve existing equity while refining proportions, vector clarity, and digital contrast.',
      },
    ],
    relatedSlugs: ['produktdesign-ux-ui', 'nettsideutvikling', 'digital-markedsforing'],
  },

  'seo-og-ytelsesoptimalisering': {
    slug: 'seo-og-ytelsesoptimalisering',
    routePath: '/tjenester/seo-og-ytelsesoptimalisering',
    inquiryType: 'web',
    navLabelNo: 'SEO & Ytelse',
    navLabelEn: 'SEO & Performance',
    seoTitleNo: 'Teknisk SEO, Google-synlighet & Core Web Vitals | Geton AS',
    seoTitleEn: 'Technical SEO, Google Visibility & Core Web Vitals | Geton AS',
    seoDescNo:
      'Bli synlig øverst i Google med teknisk SEO, strukturerte data (Schema.org), lokal SEO og Core Web Vitals-optimalisering fra Geton AS.',
    seoDescEn:
      'Rank higher organically with technical SEO audits, Schema.org structured data, Core Web Vitals speed tuning, and local search optimization.',
    eyebrowNo: 'SØKEMOTOROPTIMALISERING & HASTIGHET',
    eyebrowEn: 'TECHNICAL SEO & PERFORMANCE',
    h1No: 'SEO & Ytelsesoptimalisering som gir topplassering i Google og lynrask lastetid',
    h1En: 'Technical SEO & web performance built for top Google visibility',
    introNo:
      'Selv den peneste nettsiden skaper få resultater hvis ingen finner den på Google eller den laster tregt på mobil. Geton gjennomfører dype tekniske SEO-optimaliseringer, strukturerte Schema.org-data, bildeslanking og informasjonsarkitektur som hjelper deg å vinne viktige søk.',
    introEn:
      'Even a polished website underperforms if search engines struggle to index it or mobile visitors wait on heavy assets. Geton tunes technical SEO, structured Schema.org data, and Core Web Vitals to capture organic demand.',
    heroImage: {
      src: '/assets/images/newsec_proptech_showcase_1793707988321.webp',
      altNo: 'Søkemotoroptimalisert nettside med høy Google Lighthouse-ytelse og semantisk struktur',
      altEn: 'Search engine optimized web platform engineered for top Core Web Vitals',
      captionNo: 'Rene URL-er, rask bildekomprimering (WebP) og rik strukturert data for Google',
      captionEn: 'Clean canonical URLs, next-gen WebP delivery, and rich Schema.org graphs',
    },
    galleryImages: [
      {
        src: '/assets/images/vestlandsk_hjertesenter_mockup_1793710496839.webp',
        altNo: 'Lokal SEO og Google Maps synlighet implementert for spesialistklinikk i Bergen',
        altEn: 'Local SEO and structured service pages built for Bergen healthcare clinic',
        captionNo: 'Målrettede tjenestesider som rangerer sterkt både lokalt i Vestland og nasjonalt',
        captionEn: 'Dedicated service landing pages built to capture local and national search intent',
      },
      {
        src: '/assets/images/software_devops_monitoring_1793710481343.webp',
        altNo: 'Core Web Vitals ytelsesanalyse og caching-optimalisering',
        altEn: 'Core Web Vitals speed analysis and edge caching tuning',
        captionNo: 'Sub-sekunds responstid gjennom code-splitting, caching og minimal JavaScript',
        captionEn: 'Sub-second responsiveness through route splitting, caching, and lean bundles',
      },
    ],
    overviewTitleNo: 'Teknisk presisjon + innhold som matcher det kundene faktisk søker etter',
    overviewTitleEn: 'Technical precision paired with genuine search intent',
    overviewTextNo:
      'Google belønner nettsider som er raske, teknisk ryddige og tydelig strukturert med ekte autoritet. Vi rydder opp i dupliserte titler, manglende alt-tekster, tunge bilder, trege skript, sitemap.xml og legger inn komplett JSON-LD for tjenester, lokal bedrift, navigasjonslenker og ofte stilte spørsmål.',
    overviewTextEn:
      'Search engines reward websites that load quickly, answer real questions clearly, and expose clean structured data. We resolve crawl traps, compress media, optimize sitemaps, and wire verifiable Schema.org markup.',
    benefitsNo: [
      { title: 'Strukturerte data (Schema.org)', desc: 'Full JSON-LD for Organization, LocalBusiness, Service, Breadcrumb og FAQPage.' },
      { title: 'Core Web Vitals & WebP', desc: 'Vi krymper tunge bildefiler og deler opp kode for maksimal mobilhastighet.' },
      { title: 'Søkeords- & Sidestruktur', desc: 'Dedikerte undersider for hver kjernetjeneste gir langt sterkere rangering enn én lang side.' },
      { title: 'Lokal SEO & Google Bedrift', desc: 'Styrk synligheten på Google Søk og Google Maps i Bergen, Øygarden, Vestland og Norge.' },
    ],
    benefitsEn: [
      { title: 'Complete Schema.org JSON-LD', desc: 'LocalBusiness, Service, SiteNavigationElement, Breadcrumb, and FAQ graphs.' },
      { title: 'Core Web Vitals tuning', desc: 'Aggressive asset compression, font loading, and bundle splitting.' },
      { title: 'Intent-matched architecture', desc: 'Dedicated service pages aligned to real search queries rather than single-page dilution.' },
      { title: 'Local Search & Maps readiness', desc: 'Consistent NAP signals and geographic schema supporting regional visibility.' },
    ],
    capabilitiesNo: [
      'Full teknisk SEO-audit av eksisterende nettside',
      'Optimalisering av meta-titler, beskrivelser, kanoniske URL-er og sitemap.xml',
      'JSON-LD Schema.org for tjenester, artikler, navigasjon og lokal bedrift',
      'Optimalisering av LCP, INP, CLS (Core Web Vitals) og ressurslasting',
    ],
    capabilitiesEn: [
      'Comprehensive technical SEO and crawlability audits',
      'Metadata, canonical tags, robots.txt, and XML sitemap optimization',
      'JSON-LD graphs for services, articles, sitelinks, and local presence',
      'Core Web Vitals acceleration (LCP, CLS, INP)',
    ],
    technologies: ['Schema.org JSON-LD', 'Core Web Vitals', 'XML Sitemaps', 'Google Search Console', 'WebP / Brotli'],
    processNo: [
      { step: '01', title: 'Teknisk Audit', desc: 'Vi måler hastighet, indeksering, metadata og nåværende plasseringer.' },
      { step: '02', title: 'Søkeordsplan', desc: 'Kartlegging av hvilke søk som gir mest relevante bedriftskunder.' },
      { step: '03', title: 'Utbedring i Kode', desc: 'Fiksing av struktur, overskrifter, bilder, schema og interne lenker.' },
      { step: '04', title: 'Indeksering & Vekst', desc: 'Innsending i Search Console og oppfølging av organisk trafikk.' },
    ],
    processEn: [
      { step: '01', title: 'Technical Audit', desc: 'Measuring speed, indexation health, canonical tags, and ranking baseline.' },
      { step: '02', title: 'Keyword Mapping', desc: 'Mapping high-value commercial search terms to dedicated landing pages.' },
      { step: '03', title: 'Code & Schema Fixes', desc: 'Refining HTML hierarchy, compressed assets, internal links, and JSON-LD.' },
      { step: '04', title: 'Search Console Tracking', desc: 'Submitting updated sitemaps and monitoring organic click growth.' },
    ],
    faqs: [
      {
        questionNo: 'Hvor raskt ser vi effekt av teknisk SEO?',
        questionEn: 'How soon do technical SEO improvements take effect?',
        answerNo:
          'Hastighetsforbedringer og rike metadata merkes ofte i løpet av dager til få uker idet Google reindekserer sidene, mens konkurranseutsatte søkeord bygger styrke jevnt over 2–6 måneder.',
        answerEn:
          'Crawl improvements and speed gains appear within weeks as Google re-indexes pages, while competitive keyword rankings compound over 2–6 months.',
      },
    ],
    relatedSlugs: ['nettsideutvikling', 'digital-markedsforing', 'webapplikasjoner-og-systemutvikling'],
  },
};

export const SOFTWARE_CARD_ID_TO_SERVICE_SLUG: Record<string, ServiceSlug> = {
  'app-development': 'mobilapputvikling',
  'web-development': 'nettsideutvikling',
  'custom-software': 'webapplikasjoner-og-systemutvikling',
  'cloud-solutions': 'sky-losninger',
  'product-design': 'produktdesign-ux-ui',
  'digital-marketing': 'digital-markedsforing',
  'ecommerce-solutions': 'nettbutikk-og-ehandel',
  'api-integrations': 'systemintegrasjoner-og-api',
  'ai-automation': 'kunstig-intelligens-og-automasjon',
  'maintenance-support': 'vedlikehold-og-support',
  'branding-identity': 'merkevare-og-visuell-profil',
  'seo-performance': 'seo-og-ytelsesoptimalisering',
};
