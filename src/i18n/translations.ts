export interface TranslationSchema {
  nav: {
    services: string;
    servicesBadge: string;
    projects: string;
    projectsBadge: string;
    about: string;
    aboutBadge: string;
    blogs: string;
    blogsBadge: string;
    contact: string;
    contactBadge: string;
    getStarted: string;
    brandLabel: string;
    webPlatforms: string;
    webPlatformsDesc: string;
    mobileApps: string;
    mobileAppsDesc: string;
    saasCloud: string;
    saasCloudDesc: string;
    quickEstimate: string;
    directContact: string;
    menuTitle: string;
  };
  hero: {
    tagline: string;
    headlinePrefix: string;
    headlineGradient: string;
    description: string;
    exploreWork: string;
    watchShowreel: string;
    scrollIndicator: string;
    services: {
      appDev: { title: string; subtitle: string; desc: string; features: string[] };
      webDev: { title: string; subtitle: string; desc: string; features: string[] };
      branding: { title: string; subtitle: string; desc: string; features: string[] };
      saas: { title: string; subtitle: string; desc: string; features: string[] };
    };
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    footnote: string;
    popularBadge: string;
    website: {
      title: string;
      price: string;
      description: string;
      features: string[];
      button: string;
    };
    mobileApp: {
      title: string;
      price: string;
      description: string;
      features: string[];
      button: string;
    };
    webApp: {
      title: string;
      price: string;
      description: string;
      features: string[];
      button: string;
    };
  };
  digitalSolutions: {
    eyebrow: string;
    headline: string;
    description: string;
    cards: {
      number: string;
      title: string;
      description: string;
      pillars: string[];
      highlight: string;
    }[];
    consultationCTA: string;
  };
  showcase: {
    badge: string;
    heading: string;
    subheading: string;
    categories: {
      all: string;
      mobile: string;
      frontend: string;
      backend: string;
      ai: string;
    };
    routeBadge: string;
    routeTitle: string;
    routeSubtitle: string;
    cycleSpeedNotice: string;
    interactiveNotice: string;
    inspectCodeCTA: string;
    requestArchReview: string;
    bookSprintCTA: string;
    readyToDeployHeading: string;
    readyToDeployDesc: string;
    talkToPrincipalEngineer: string;
    stages: {
      title: string;
      subtitle: string;
      desc: string;
      deliverables: string[];
      sla: string;
    }[];
    techCards: {
      id: string;
      category: 'mobile' | 'frontend' | 'backend' | 'ai';
      tag: string;
      badge: string;
      title: string;
      subtitle: string;
      desc: string;
      highlights: string[];
      metric: string;
      metricLabel: string;
    }[];
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    filters: {
      all: string;
      mobile: string;
      web: string;
      fintech: string;
    };
    viewCaseStudy: string;
    liveDemo: string;
    clientLabel: string;
    industryLabel: string;
    yearLabel: string;
    platformLabel: string;
    impactLabel: string;
    readFullStudy: string;
    cards: {
      frakt360: {
        title: string;
        subtitle: string;
        client: string;
        industry: string;
        description: string;
        keyFeatures: string[];
      };
      swallet: {
        title: string;
        subtitle: string;
        client: string;
        industry: string;
        description: string;
        keyFeatures: string[];
      };
      newsec: {
        title: string;
        subtitle: string;
        client: string;
        industry: string;
        description: string;
        keyFeatures: string[];
      };
      pareto: {
        title: string;
        subtitle: string;
        client: string;
        industry: string;
        description: string;
        keyFeatures: string[];
      };
      aura: {
        title: string;
        subtitle: string;
        client: string;
        industry: string;
        description: string;
        keyFeatures: string[];
      };
      kinetix: {
        title: string;
        subtitle: string;
        client: string;
        industry: string;
        description: string;
        keyFeatures: string[];
      };
    };
  };
  frakt360Study: {
    backToProjects: string;
    caseStudyTag: string;
    title: string;
    subtitle: string;
    industry: string;
    servicesLabel: string;
    servicesValue: string;
    developedBy: string;
    platform: string;
    overviewHeading: string;
    overviewP1: string;
    overviewP2: string;
    overviewP3: string;
    overviewP4: string;
    challengeHeading: string;
    challengeP1: string;
    challengeP2: string;
    challengeP3: string;
    challengeP4: string;
    solutionHeading: string;
    solutionP1: string;
    solutionP2: string;
    solutionP3: string;
    solutionP4: string;
    workflowTitle: string;
    workflowSubtitle: string;
    storeHeading: string;
    storeP1: string;
    storeP2: string;
    storeP3: string;
    storeTagline: string;
    storeP4: string;
    carrierHeading: string;
    carrierP1: string;
    carrierP2: string;
    labelP1: string;
    trackingP1: string;
    returnsP1: string;
    warehouseHeading: string;
    warehouseP1: string;
    invoicingHeading: string;
    invoicingP1: string;
    multiUserHeading: string;
    multiUserP1: string;
    mobileHeading: string;
    mobileP1: string;
    whatWeBuiltHeading: string;
    techStackHeading: string;
    techStackDesc: string;
    businessImpactHeading: string;
    ctaHeading: string;
    ctaDesc: string;
    ctaButton: string;
    nextCaseStudy: string;
    nextCaseStudySubtitle: string;
  };
  swalletStudy: {
    backToProjects: string;
    caseStudyTag: string;
    title: string;
    subtitle: string;
    industry: string;
    servicesLabel: string;
    servicesValue: string;
    developedBy: string;
    platform: string;
    overviewHeading: string;
    overviewP1: string;
    overviewP2: string;
    overviewP3: string;
    overviewP4: string;
    challengeHeading: string;
    challengeP1: string;
    challengeP2: string;
    challengeP3: string;
    challengeP4: string;
    challengeP5: string;
    solutionHeading: string;
    solutionP1: string;
    solutionP2: string;
    solutionP3: string;
    solutionP4: string;
    savingsPipelineTitle: string;
    savingsPipelineSubtitle: string;
    subscriptionHeading: string;
    subscriptionP1: string;
    subscriptionP2: string;
    subscriptionP3: string;
    openBankingHeading: string;
    openBankingP1: string;
    openBankingP2: string;
    openBankingP3: string;
    marketplaceHeading: string;
    marketplaceP1: string;
    marketplaceP2: string;
    marketplaceP3: string;
    marketplaceTagline: string;
    architectureHeading: string;
    architectureP1: string;
    privacyHeading: string;
    privacyP1: string;
    privacyP2: string;
    whatWeBuiltHeading: string;
    techStackHeading: string;
    techStackDesc: string;
    businessImpactHeading: string;
    ctaHeading: string;
    ctaDesc: string;
    ctaButton: string;
    prevCaseStudy: string;
    prevCaseStudySubtitle: string;
  };
  modals: {
    showreelTitle: string;
    showreelSubtitle: string;
    inquiryTitle: string;
    inquirySubtitle: string;
    nameLabel: string;
    emailLabel: string;
    companyLabel: string;
    projectTypeLabel: string;
    budgetLabel: string;
    descriptionLabel: string;
    submitCTA: string;
    sending: string;
    successMessage: string;
    close: string;
  };
  footer: {
    tagline: string;
    mission: string;
    nordicNode: string;
    sreOnCall: string;
    requestProposal: string;
    headquartersTitle: string;
    addressStreet: string;
    addressRegion: string;
    emailLabel: string;
    navigationTitle: string;
    servicesTitle: string;
    legalTitle: string;
    copyrightText: string;
    compliancePill: string;
  };
}

export const translations: Record<'no' | 'en', TranslationSchema> = {
  no: {
    nav: {
      services: 'Tjenester',
      servicesBadge: 'Kjernekompetanse',
      projects: 'Prosjekter',
      projectsBadge: '140+ leverte systemer',
      about: 'Om oss',
      aboutBadge: 'Ekspertteam',
      blogs: 'Artikler',
      blogsBadge: 'Innsikt & Arkitektur',
      contact: 'Kontakt',
      contactBadge: 'Direkte dialog',
      getStarted: 'Start et prosjekt',
      brandLabel: 'Geton Digitale Løsninger',
      webPlatforms: 'Webplattformer',
      webPlatformsDesc: 'Lynrask, skalerbar & moderne',
      mobileApps: 'Mobilapplikasjoner',
      mobileAppsDesc: 'Native iOS & Android',
      saasCloud: 'SaaS & Skysystemer',
      saasCloudDesc: 'Bygget for vekst & volum',
      quickEstimate: 'Be om prosjektestimat',
      directContact: 'Direkte teknisk rådgivning',
      menuTitle: 'Hovedmeny',
    },
    hero: {
      tagline: 'KREATIVE DIGITALE LØSNINGER',
      headlinePrefix: 'Fra idé til',
      headlineGradient: 'Kreative Løsninger',
      description:
        'Vi designer og bygger moderne, lynraske og responsive apper, webapplikasjoner og forretningskritiske skysystemer som akselererer vekst, engasjerer sluttbrukere og skaper varige digitale verdier.',
      exploreWork: 'Utforsk våre prosjekter',
      watchShowreel: 'Se showreel',
      scrollIndicator: 'Rull for å utforske',
      services: {
        appDev: {
          title: 'Mobilapp-utvikling',
          subtitle: 'iOS & Android',
          desc: 'Høyytelses native og kryssplattform-mobilapper med sømløs 120Hz-fysikk, offline-synkronisering og biometrisk sikkerhet.',
          features: [
            'Native moduler i Swift & Kotlin',
            'React Native & Flutter arkitektur',
            'App Store & Play Store distribusjon',
            'Sanntids push-varsler og telemetri',
          ],
        },
        webDev: {
          title: 'Webutvikling',
          subtitle: 'Lynrask & skalerbar',
          desc: 'Toppmoderne Next.js og React 19-arkitekturer optimalisert for sub-sekunds Core Web Vitals, enterprise-skalering og kompromissløs interaksjon.',
          features: [
            'React 19 & Next.js arkitekturer',
            'Edge-renderte API-bakkanaler',
            'WebGL, Three.js & mikrointeraksjoner',
            'Helautomatiske CI/CD-pipelines',
          ],
        },
        branding: {
          title: 'Merkevare & Identitet',
          subtitle: 'Unikt særpreg',
          desc: 'Skreddersydde designspråk, typografiske hierarkier og sensorisk merkevareopplevelse som posisjonerer visjonære selskaper i toppsjiktet.',
          features: [
            'Komplette merkevarepakker & retningslinjer',
            'Tilpasset typografi & fargepaletter',
            'Designsystemer & Figma token-biblioteker',
            'Interaktive motion-retningslinjer',
          ],
        },
        saas: {
          title: 'SaaS & Skytjenester',
          subtitle: 'Bygget for vekst',
          desc: 'Fullstack skyapplikasjoner konstruert for multi-tenancy, høy samtidighet og abonnementsdrevet forretningsmodell.',
          features: [
            'Multi-tenant databasedesign & skille',
            'Stripe-fakturering & lisensstyring',
            'Rollebasert tilgangskontroll (RBAC)',
            'Sanntidstelemetri, metrikker & logging',
          ],
        },
      },
    },
    pricing: {
      badge: 'PROSJEKTTYPER & PRISER',
      title: 'Hva ønsker du å utvikle?',
      subtitle:
        'Fra idé til ferdig digital løsning. Velg det som passer prosjektet ditt – vi tilpasser funksjonalitet, teknologi og pris etter dine behov.',
      footnote:
        '*Prisene er veiledende startpriser. Endelig pris avhenger av prosjektets omfang, funksjonalitet og integrasjoner.*',
      popularBadge: 'POPULÆR',
      website: {
        title: 'Nettside',
        price: 'Fra 15 000 kr',
        description:
          'For bedrifter som ønsker en moderne, rask og profesjonell nettside som skaper tillit og konverterer besøkende til kunder.',
        features: [
          'Moderne og responsivt design',
          'Opptil 5 sider',
          'Kontaktskjema',
          'Grunnleggende SEO',
          'SSL og sikkerhet',
          'CMS / enkel innholdsredigering',
          'Analyse og sporing',
          'Opplæring ved lansering',
        ],
        button: 'Få et tilbud',
      },
      mobileApp: {
        title: 'Mobilapp',
        price: 'Fra 300 000 kr',
        description:
          'Fra MVP til komplett iOS- og Android-app. Vi hjelper deg med design, utvikling, backend og lansering.',
        features: [
          'iOS og Android',
          'Moderne UI/UX',
          'Backend og database',
          'API-integrasjoner',
          'Innlogging og brukerprofiler',
          'Push-varsler',
          'Adminpanel',
          'Publisering i App Store & Google Play',
        ],
        button: 'Diskuter app-idéen din',
      },
      webApp: {
        title: 'Webapplikasjon',
        price: 'Fra 250 000 kr',
        description:
          'Skreddersydde webbaserte systemer for bedrifter, startups og digitale tjenester – bygget for å kunne vokse med virksomheten.',
        features: [
          'Skreddersydd frontend & backend',
          'Dashboard og adminpanel',
          'Bruker- og rollehåndtering',
          'API-integrasjoner',
          'Database og skyløsning',
          'Automatisering av arbeidsprosesser',
          'Sikkerhet og skalerbarhet',
          'Responsive design',
        ],
        button: 'Få et tilbud',
      },
    },
    digitalSolutions: {
      eyebrow: 'DIGITALE LØSNINGER • DESIGN • UTVIKLING',
      headline: 'Teknologi som forvandler idéer til virkelighet',
      description:
        'Vi designer og utvikler digitale produkter som løser reelle forretningsbehov — fra moderne nettsider og mobilapper til skreddersydd programvare og komplette digitale plattformer.',
      cards: [
        {
          number: '01',
          title: 'TVERRFAGLIG EKSPERTISE',
          description:
            'Design, utvikling, strategi og teknologi — samlet på ett sted.',
          pillars: ['Produktdesign & UX', 'Full-stack utvikling', 'Teknisk arkitektur', 'Produktstrategi'],
          highlight: 'Samlet produktgjennomføring',
        },
        {
          number: '02',
          title: 'SKREDDERSYDDE LØSNINGER',
          description:
            'Vi bygger teknologi tilpasset din virksomhet — ikke omvendt.',
          pillars: ['Bespoke arkitektur', 'Sømløse API-integrasjoner', 'Domene-spesifikke arbeidsflyter', 'Skalerbare skysystemer'],
          highlight: 'Null hyllevare-kompromisser',
        },
        {
          number: '03',
          title: 'FRA IDÉ TIL LANSERING',
          description:
            'Vi tar prosjekter fra konsept og design gjennom utvikling, lansering og kontinuerlig vekst.',
          pillars: ['Rask prototyping', 'Agile sprintleveranser', 'Produksjonsutrulling', '24/7 videreutvikling & vekst'],
          highlight: 'Helhetlig partnerskap',
        },
        {
          number: '04',
          title: 'KONTINUERLIG VEKST & PARTNERSKAP',
          description:
            'Vi er en langsiktig teknologipartner. Dedikert oppfølging, sikkerhet og videreutvikling etter lansering.',
          pillars: ['24/7 overvåking & feilretting', 'Månedlige sikkerhetsoppdateringer', 'Videreutvikling av funksjoner', 'Garantert responstid SLA'],
          highlight: 'Langsiktig trygghet',
        },
      ],
      consultationCTA: 'Diskuter ditt prosjekt med oss',
    },
    showcase: {
      badge: 'ENTERPRISE PROGRAMVAREARKITEKTUR',
      heading: 'Teknologistakk, Rammeverk & Skysystemer',
      subheading:
        'Vi bygger robuste applikasjoner på gjennomprøvde, hypermoderne teknologier for mobil, web, mikrotjenester og kunstig intelligens.',
      categories: {
        all: 'Alle teknologier (9)',
        mobile: 'Mobilutvikling',
        frontend: 'Frontend & Web',
        backend: 'Backend, Sky & DevOps',
        ai: 'AI & Maskinlæring',
      },
      routeBadge: 'UTVIKLINGSLØP & DEPLOYMENT-RUTE',
      routeTitle: 'Hvordan vi starter, utvikler, deployer & supporterer',
      routeSubtitle:
        'En transparent og strukturert ingeniørprosess fra forprosjekt til kontinuerlig drift, automatisert testing og 24/7 SRE-overvåking.',
      cycleSpeedNotice: 'Rask laserpuls animeres hvert 2. sekund mellom fasene',
      interactiveNotice: 'Trykk på en fase for å inspisere tekniske leveranser og SLA-garantier',
      inspectCodeCTA: 'Inspiser arkitektur',
      requestArchReview: 'Bestill arkitekturgjennomgang',
      bookSprintCTA: 'Book 2-ukers utviklingssprint',
      readyToDeployHeading: 'Klar for å sette prosjektet i produksjon?',
      readyToDeployDesc:
        'Vi stiller med dedikerte seniorutviklere og arkitekter klare til å levere fra uke én.',
      talkToPrincipalEngineer: 'Snakk med en sjefsarkitekt',
      stages: [
        {
          title: '1. Forprosjekt & Arkitektur',
          subtitle: 'Systemdesign · Datamodellering · Sikkerhet',
          desc: 'Vi analyserer systemkrav, definerer datamodeller i PostgreSQL, oppretter OpenAPI-spesifikasjoner og etablerer skyarkitektur i AWS/Azure med strenge ISO- og GDPR-krav.',
          deliverables: [
            'OpenAPI 3.1 & gRPC kontrakter',
            'Skyinfrastruktur definert som kode (Terraform)',
            'Figma designsystem & tokens',
            'Trussel- og sikkerhetsvurdering',
          ],
          sla: '15-minutters respons-SLA for kritiske produksjonshendelser',
        },
        {
          title: '2. Sprint & Koding',
          subtitle: 'Agil utvikling · Testdrevet · Tett dialog',
          desc: 'Våre utviklere koder i to ukers sprinter med kontinuerlige pull requests, strenge typekontroller i TypeScript/C#, automatiserte enhetstester og ukentlige demoer i testmiljø.',
          deliverables: [
            'TypeScript / .NET 9 kjernekomponenter',
            'React Native & Flutter mobil-builds',
            'Automatisert testdekning > 85%',
            'Ukentlige staging-demonstrasjoner',
          ],
          sla: 'Daglige staging-bygg med helautomatisk regresjonstesting',
        },
        {
          title: '3. Automatisert CI/CD',
          subtitle: 'Docker · Zero-Downtime · Kube',
          desc: 'Hver commit trigger GitHub Actions-pipelines som kjører lintere, sikkerhetsskanninger, Docker-bygging og automatisk rullering uten nedetid på Kubernetes eller AWS ECS.',
          deliverables: [
            'GitHub Actions flertrinns-pipelines',
            'Docker containerisering & signering',
            'Sårbarhetsskanning (Snyk / Trivy)',
            'Canary & Blue/Green deployment',
          ],
          sla: 'Fullautomatisk pipeline med deployment på under 120 sekunder',
        },
        {
          title: '4. Produksjonssetting',
          subtitle: 'Skylagring · CDN-edge · Datamigrering',
          desc: 'Kontrollert lansering med CDN edge-caching, automatisk skalering ved trafikstopper, SSL/TLS med HSTS og sanntids loggaggregering i Datadog og CloudWatch.',
          deliverables: [
            'Multi-region CDN distribusjon',
            'PostgreSQL lesereplikaer & backup',
            'Stripe & betalingskanal-verifisering',
            'DNS, SPF, DKIM og DMARC herding',
          ],
          sla: '99,99 % oppetidsgaranti med automatisk failover',
        },
        {
          title: '5. Forvaltning & 24/7 SRE',
          subtitle: 'Vaktteam · Ytelse · Videreutvikling',
          desc: 'Etter lansering forvalter vi løsningen med dedikert SRE-team, proaktiv overvåking, jevnlige sikkerhetsoppdateringer og planlagte funksjonsforbedringer.',
          deliverables: [
            '24/7 telemetri og alarmering',
            'Kvartalsvise penetrasjonstester',
            'Månedlige sikkerhetspatcher',
            'Dedikert Slack-kanal med seniorutvikler',
          ],
          sla: '15-minutters respons-SLA for kritiske produksjonshendelser',
        },
      ],
      techCards: [
        {
          id: 'react-native',
          category: 'mobile',
          tag: 'Mobilapp-rammeverk',
          badge: 'iOS & Android Paritet',
          title: 'React Native & Expo Ecosystem',
          subtitle: 'Native Ytelse · Én Kodebase',
          desc: 'Høyhastighets native iOS- og Android-apper drevet av React Natives New Architecture (Fabric renderer & TurboModules). Synkron kjøring uten bridge med ekte native følelse.',
          highlights: [
            'Hermes JIT-motor med oppstartstid under sekundet',
            'Fabric UI-renderer med flytende 120Hz-bevegelsesfysikk',
            'Direkte C++ TurboModules for rå maskinvareytelse',
            'CodePush edge-oppdateringer & offline SQLite-synkronisering',
          ],
          metric: '60 FPS Jevn Fysikk',
          metricLabel: 'RAMMEBUDSJETT',
        },
        {
          id: 'flutter',
          category: 'mobile',
          tag: 'Mobilapp-rammeverk',
          badge: 'Dart & Skia Engine',
          title: 'Flutter & Dart Arkitektur',
          subtitle: 'Pikselsentrert Impeller-rendering',
          desc: 'Skreddersydde mobilapper utviklet med Dart og Flutters Impeller-grafikkmotor. Perfekt for krevende grafikk, dynamiske animasjoner og enhetlig visning på tvers av enheter.',
          highlights: [
            'AOT-kompilering direkte til ARM64 maskinkode',
            'Impeller GPU-grafikkmotor som eliminerer jank',
            'BLoC & Riverpod forutsigbar tilstandshåndtering',
            'Flere plattformer: iOS, Android, macOS & nettleser',
          ],
          metric: '100% Maskinkode',
          metricLabel: 'KOMPILATOREFFEKTIVITET',
        },
        {
          id: 'swift-kotlin',
          category: 'mobile',
          tag: 'Nativ Maskinvare',
          badge: 'SwiftUI & Jetpack Compose',
          title: 'Native Swift (iOS) & Kotlin (Android)',
          subtitle: 'Maksimal Maskinvareutnyttelse',
          desc: 'Når maskinvaren krever ekstrem ytelse, koder vi native Swift- og Kotlin-moduler for Apple Secure Enclave, biometri, ARKit og lavenergi Bluetooth (BLE)-kommunikasjon.',
          highlights: [
            'Apple Secure Enclave & Android KeyStore biometrisk sikkerhet',
            'CoreNFC & BLE bakgrunnssynkronisering for IoT-enheter',
            'Swift Concurrency (async/await, Actors) for lynrask I/O',
            'Jetpack Compose declarative grensesnitt for moderne Android',
          ],
          metric: '0 ms Bridge Overhead',
          metricLabel: 'NATIV LATENS',
        },
        {
          id: 'react-next',
          category: 'frontend',
          tag: 'Web & Grensesnitt',
          badge: 'React 19 & Server Components',
          title: 'React, Next.js & TypeScript',
          subtitle: 'Moderne Webarkitektur & SSR',
          desc: 'Lynraske nettapplikasjoner med Server Components, Streaming SSR og partial hydration. Konstruert for maksimal synlighet i søkemotorer og umiddelbar lastetid.',
          highlights: [
            'Next.js App Router med granular streaming og suspense',
            'Edge-renderte ruter med global CDN-distribusjon',
            'Tailwind CSS v4 med minimalstil og null ubrukt CSS',
            'Strenge TypeScript-typer for stabil produksjonskode',
          ],
          metric: '99+ Lighthouse Score',
          metricLabel: 'CORE WEB VITALS',
        },
        {
          id: 'node-ts',
          category: 'backend',
          tag: 'Backend & API',
          badge: 'Asynkron Hendelsesdrevet',
          title: 'Node.js, TypeScript & Fastify',
          subtitle: 'Skalerbare Mikrotjenester',
          desc: 'Mikrotjenester og API-gateways bygget på Node.js og Fastify med evne til å håndtere titusenvis av samtidige forespørsler med minimal minnebruk.',
          highlights: [
            'Fastify med Schema-validering via TypeBox og Zod',
            'GraphQL og RESTful API-arkitekturer med OpenAPI 3.1',
            'WebSockets & Server-Sent Events (SSE) for live data',
            'Worker Threads for tunge CPU-oppgaver i bakgrunnen',
          ],
          metric: '40 000+ Req/sek',
          metricLabel: 'GJENNOMSTRØMMING',
        },
        {
          id: 'dotnet-core',
          category: 'backend',
          tag: 'Bedriftssystemer',
          badge: '.NET 9 C# Enterprise',
          title: '.NET Core & C# Arkitektur',
          subtitle: 'Fintech & Transaksjonssikkerhet',
          desc: 'Høykapasitets forretningssystemer for bank, finans og logistikk der transaksjonssikkerhet, typeintegritet og multitråding er strengt påkrevd.',
          highlights: [
            'Kestrel web-server med JIT-optimaliseringer i verdensklasse',
            'Entity Framework Core med optimaliserte SQL-spørringer',
            'Innebygd støtte for OpenTelemetry og helsesjekker',
            'Sømløs Azure Service Bus & RabbitMQ meldingskøer',
          ],
          metric: 'Sub-millisekund',
          metricLabel: 'SVARTID KESTREL',
        },
        {
          id: 'cloud-aws-azure',
          category: 'backend',
          tag: 'Skyinfrastruktur & DevOps',
          badge: 'AWS & Microsoft Azure',
          title: 'Skyløsninger, Serverless & Integrasjoner',
          subtitle: 'Multi-Cloud & Tjenesteintegrasjon',
          desc: 'Arkitektur på AWS (Lambda, ECS, RDS, S3) og Azure (Container Apps, AKS, Cosmos DB). Vi kobler sammen ERP-systemer, CRM, betaling og logistikk til én helhet.',
          highlights: [
            'Terraform & CDK for reproduserbar infrastruktur',
            'Automatisert skalering fra 0 til millioner av forespørsler',
            'Integrasjoner mot Vipps, BankID, Stripe, Ongoing & Tripletex',
            'Zero Trust nettverkssikkerhet og kryptering i hvile og transitt',
          ],
          metric: '99,99% Tilgjengelighet',
          metricLabel: 'SKYOPPETID',
        },
        {
          id: 'gemini-ai',
          category: 'ai',
          tag: 'Kunstig Intelligens',
          badge: 'LLM & Multimodal AI',
          title: 'AI-integrasjoner & Gemini API',
          subtitle: 'Intelligente Produkter & Automatisering',
          desc: 'Vi implementerer toppmoderne AI-funksjonalitet med Gemini 2.5 Flash, vektor-databaser og semantisk søk for å automatisere manuelle arbeidsoppgaver.',
          highlights: [
            'Strukturerte JSON-utdata med schema-validering',
            'RAG (Retrieval-Augmented Generation) på egne bedriftsdata',
            'Bilde- og dokumentgjenkjenning for faktura og kvitteringer',
            'Sanntids tale og intelligent kundedialog',
          ],
          metric: '10x Raskere Behandling',
          metricLabel: 'PROSESSGEVINST',
        },
        {
          id: 'db-postgres',
          category: 'backend',
          tag: 'Data & Lagring',
          badge: 'ACID Relasjonsdatabase',
          title: 'PostgreSQL, Redis & Drizzle ORM',
          subtitle: 'Dataintegritet i Sanntid',
          desc: 'Robuste datalagringsmodeller med relasjonell integritet i PostgreSQL, lynrask in-memory caching med Redis og typesikker tilgang med Drizzle ORM.',
          highlights: [
            'Partisjonerte tabeller for håndtering av store datamengder',
            'Pub/Sub i Redis for lynrask push-kommunikasjon',
            'pgvector for lynrask semantisk søk og AI-innleiringer',
            'Point-in-time gjenoppretting og automatisk backup',
          ],
          metric: '< 2 ms Cache Latens',
          metricLabel: 'REDIS HASTIGHET',
        },
      ],
    },
    projects: {
      badge: 'UTVALGTE CASER',
      title: 'Våre tidligere prosjekter',
      subtitle:
        'Vi har hatt gleden av å samarbeide med en rekke ambisiøse bedrifter og industrier, og leverer programvare som kombinerer elegant design med høy ytelse og robust arkitektur.',
      filters: {
        all: 'Alle prosjekter (6)',
        mobile: 'Mobilapper',
        web: 'Web & SaaS',
        fintech: 'Fintech & Logistikk',
      },
      viewCaseStudy: 'Åpne case study',
      liveDemo: 'Se demonstrasjon',
      clientLabel: 'Kunde',
      industryLabel: 'Bransje',
      yearLabel: 'År',
      platformLabel: 'Plattform',
      impactLabel: 'Nøkkeltall / Integrasjoner',
      readFullStudy: 'Les hele prosjektbeskrivelsen',
      cards: {
        frakt360: {
          title: 'Frakt360',
          subtitle: 'En komplett fraktplattform for moderne norske bedrifter – booking, sporing, etiketter og retur',
          client: 'Frakt360 / Geton',
          industry: 'Logistikk & E-handel',
          description:
            'Frakt360 samler hele logistikkflyten i én digital plattform: opprett forsendelser, sammenlign fraktpriser, skriv ut Zebra-etiketter, følg leveringer i sanntid og automatiser ordreflyt fra Shopify, WooCommerce og Mystore.',
          keyFeatures: [
            'Ordre → Fraktvalg → Booking → Etikett → Sporing → Levering → Faktura',
            'Direkte PostNord og Bring API-integrasjoner',
            'Shopify, WooCommerce og Mystore e-handelskobling',
            'Automatisk Zebra etikettutskrift og Ongoing WMS lagerkobling',
            'Sanntids sporingstelemetri og QR-basert returflyt',
          ],
        },
        swallet: {
          title: 'Swallet',
          subtitle: 'Full kontroll på abonnementer og faste utgifter – samle, forstå og spar penger',
          client: 'Swallet / Geton',
          industry: 'Fintech & Personlig Økonomi',
          description:
            'Swallet er en norsk fintech-plattform som gir forbrukere full oversikt over abonnementer, faste utgifter og muligheter til å spare penger gjennom lisensiert Open Banking (PSD2).',
          keyFeatures: [
            'Se hva du betaler → Forstå utgifter → Finn alternativer → Spar penger',
            'Automatisk abonnementsoversikt via Open Banking (PSD2)',
            '«Få bedre tilbud» markedsplass for strøm, forsikring og telecom',
            'Personlig forbruksinnsikt med estimert årlig besparelse (4 320 kr/år)',
            'Strenge personvernrutiner og kryptert BankID-tilkobling',
          ],
        },
        newsec: {
          title: 'Newsec',
          subtitle: 'Eiendomsmarkedet i Nord-Europa – rett i lomma',
          client: 'Newsec Commercial Real Estate',
          industry: 'PropTech & Næringseiendom',
          description:
            'Nord-Europas ledende eiendomsrådgiver trengte et interaktivt investorverktøy. Vi bygget en skreddersydd mobilapplikasjon som leverer sanntids markedsanalyser, yield-kalkulatorer og digitale porteføljerapporter til institusjonelle investorer.',
          keyFeatures: [
            'Interaktiv yield-kalkulator med dynamiske 3D-grafer',
            'Push-varsler for nye næringseiendommer i markedet',
            'Digital datainnsikt for Oslo, Stockholm, Helsinki og København',
            'Biometrisk pålogging for sikker tilgang til konfidensielle prospekter',
          ],
        },
        pareto: {
          title: 'Pareto Securities',
          subtitle: 'Enhetlig digital profil med SiteVision og sanntidskurser',
          client: 'Pareto Securities',
          industry: 'Investeringsbank & Verdipapirhandel',
          description:
            'Pareto Securities trengte en modernisering av sine digitale flater med lynrask oppdatering av aksjekurser, analysedokumenter og podcast-strømming for nordiske investorer.',
          keyFeatures: [
            'Sanntids integrasjon mot Oslo Børs og globale markedsdata',
            'Automatisert distribusjon av daglige morgenrapporter og analyser',
            'Responsivt institusjonelt designsystem bygget på SiteVision',
            'Sømløs integrasjon mot kundelogin og porteføljeoversikter',
          ],
        },
        aura: {
          title: 'Aura AI Analytics',
          subtitle: 'Sanntids prediktiv intelligens for bedrifter',
          client: 'Aura Intelligence Ltd.',
          industry: 'B2B SaaS & Kunstig Intelligens',
          description:
            'En komplett SaaS-plattform for analyse og prediktiv maskinlæring som analyserer store datastrømmer i sanntid og visualiserer trender før konkurrentene oppdager dem.',
          keyFeatures: [
            'Sanntids hendelsesbehandling med Kafka og ClickHouse',
            'Interaktivt WebGL-dashbord med 60 FPS visualiseringer',
            'Automatiserte anomali-varsler via Slack og webhook-kanaler',
            'Multi-tenant enterprise-arkitektur med SSO og SAML 2.0',
          ],
        },
        kinetix: {
          title: 'Kinetix Health',
          subtitle: 'Neste generasjons trenings- og restitusjonsapp',
          client: 'Kinetix Performance',
          industry: 'MedTech & Helse',
          description:
            'En personlig helse- og restitusjonsplattform som integrerer med Apple HealthKit, Garmin og Oura Ring for å gi idrettsutøvere skreddersydde treningsanbefalinger.',
          keyFeatures: [
            'Direkte toveis HealthKit- og Bluetooth BLE-synkronisering',
            'Egendefinert AI-algoritme for beregning av restitusjonsscore',
            'Offline-first arkitektur med automatisk sky-synkronisering',
            'Dynamisk tilpassede treningsøkter med videoinstruksjon',
          ],
        },
      },
    },
    frakt360Study: {
      backToProjects: 'Tilbake til alle prosjekter',
      caseStudyTag: 'CASE STUDY',
      title: 'Frakt360',
      subtitle: 'En komplett digital fraktplattform for moderne norske bedrifter',
      industry: 'Logistikk & E-handel',
      servicesLabel: 'Tjenester',
      servicesValue:
        'Produktdesign · UX/UI · Webapplikasjon · Mobilapplikasjon · API-integrasjoner · Logistikkautomatisering',
      developedBy: 'Geton Digitale Løsninger',
      platform: 'Web & Mobil (iOS / Android)',
      overviewHeading: 'Om prosjektet',
      overviewP1:
        'Frakt360 er en norsk logistikkplattform utviklet for å gjøre frakt enklere, mer automatisert og mer kostnadseffektiv for bedrifter i alle størrelser.',
      overviewP2:
        'I stedet for å håndtere fraktbestillinger, etiketter, sporing, returer og fakturaer på tvers av mange ulike systemer og transportørportaler, samler Frakt360 hele logistikkflyten i én digital plattform.',
      overviewP3:
        'Bedrifter kan opprette forsendelser, sammenligne tilgjengelige fraktalternativer, generere fraktetiketter, følge leveranser og administrere logistikken fra ett sentralt dashbord.',
      overviewP4:
        'For nettbutikker kobler Frakt360 seg direkte til butikksystemet, og automatiserer hele løpet fra innkommende ordre til en forsendelse klar for henting av transportør.',
      challengeHeading: 'Utfordringen',
      challengeP1: 'Frakt kan raskt bli komplisert og ressurskrevende når en bedrift vokser.',
      challengeP2:
        'Ordrene oppstår i ett system, lageret opererer i et annet, frakt bestilles gjennom transportørens egen portal, etiketter skrives ut separat, og fakturaene må avstemmes manuelt i etterkant.',
      challengeP3:
        'Målet med Frakt360 var derfor langt mer ambisiøst enn å bygge et enkelt bestillingsskjema.',
      challengeP4:
        'Vi måtte skape en robust infrastruktur som binder sammen e-handel, lagerdrift, transportører, etikettskrivere, sanntidssporing, returer og økonomiprosesser til én sammenhengende flyt.',
      solutionHeading: 'Løsningen',
      solutionP1:
        'Geton designet og utviklet Frakt360 som en modulær logistikkplattform der bedrifter styrer hele fraktprosessen fra et moderne grensesnitt.',
      solutionP2:
        'Brukeren legger inn forsendelsesinformasjon og mottar umiddelbart relevante fraktalternativer og priser før bestilling.',
      solutionP3:
        'Ved bestilling kommuniserer Frakt360 med transportørens API, oppretter forsendelsen og genererer godkjent fraktetikett.',
      solutionP4:
        'Plattformen overvåker forsendelsen gjennom hele livssyklusen og gjør sanntids sporingsinformasjon tilgjengelig for både avsender og mottaker.',
      workflowTitle: 'Den helhetlige fraktflyten',
      workflowSubtitle:
        'Fra innkommende nettbutikkordre til avstemt fraktfaktura i ett automatisert system',
      storeHeading: 'Koble til din nettbutikk',
      storeP1: 'En av kjernefunksjonene i Frakt360 er integrasjonslaget mot ledende e-handelsplattformer.',
      storeP2: 'Bedrifter kan enkelt koble butikker som Shopify, WooCommerce og Mystore direkte til Frakt360.',
      storeP3:
        'Når en kunde fullfører et kjøp, overføres ordredata automatisk til logistikkplattformen, slik at ansatte slipper å punche forsendelsesinformasjon manuelt.',
      storeTagline: 'Koble til butikken din. Automatiser frakten. Få bedre fraktpriser.',
      storeP4:
        'Dette er spesielt verdifullt for nettbutikker med økende volum som ønsker å eliminere feilkilder og spare verdifulle arbeidstimer.',
      carrierHeading: 'Integrasjon mot ledende transportører',
      carrierP1:
        'Frakt360 integrerer direkte med transportørinfrastrukturen, inkludert markedsledere som PostNord og Bring.',
      carrierP2:
        'Gjennom disse integrasjonene kan plattformen hente tilgjengelige frakttjenester, beregne priser, reservere forsendelser og generere transportøretiketter i sanntid.',
      labelP1:
        'Utskrift av fraktetiketter er en kritisk del av hverdagen. Frakt360 genererer etiketter tilpasset industrielle Zebra-termoetikettskrivere for lynrask pakkehåndtering.',
      trackingP1:
        'Plattformen henter statusoppdateringer fra transportørene og viser hendelsene kronologisk: Opprettet → Under transport → Ankommet terminal → Ute for levering → Levert.',
      returnsP1:
        'Returhåndtering skjer like enkelt: sluttkunder kan motta QR-baserte returkoder på mobilen og levere pakken uten behov for egen printer.',
      warehouseHeading: 'Lager- og WMS-integrasjon',
      warehouseP1:
        'For bedrifter med eksterne eller automatiserte lagre kan Frakt360 kobles til systemer som Ongoing WMS for sømløs pakkeplukk og fraktbokføring.',
      invoicingHeading: 'Fakturering og kostnadskontroll',
      invoicingP1:
        'Logistikkomkostninger kan være uforutsigbare. Frakt360 gir full oversikt over estimerte fraktpriser opp mot faktiske transportørfakturaer for enkel avstemming.',
      multiUserHeading: 'Flerbruker og rettighetsstyring',
      multiUserP1:
        'Plattformen støtter team med ulike roller – fra lagerarbeidere som kun skriver ut etiketter, til regnskapsførere og administratorer med full innsikt.',
      mobileHeading: 'Mobil og nettbrett for lagergulvet',
      mobileP1:
        'Lagerarbeid krever mobilitet. Frakt360 er tilpasset nettbrett og smarttelefoner for enkel skanning, opprettelse og statuskontroll på farten.',
      whatWeBuiltHeading: 'Hva vi bygget i Frakt360',
      techStackHeading: 'Teknologistakk & Arkitektur',
      techStackDesc:
        'Bygget på robuste standarder for høy oppetid, lynraske API-kall og null tap av forsendelsesdata.',
      businessImpactHeading: 'Resultater & Verdiskaping',
      ctaHeading: 'Trenger din bedrift en skreddersydd logistikk- eller programvareløsning?',
      ctaDesc:
        'Vi hjelper innovative virksomheter med å automatisere prosesser og bygge robuste digitale systemer.',
      ctaButton: 'Start en uforpliktende samtale',
      nextCaseStudy: 'Neste case study: Swallet',
      nextCaseStudySubtitle: 'Fintech-plattform for kontroll på faste utgifter og abonnementer →',
    },
    swalletStudy: {
      backToProjects: 'Tilbake til alle prosjekter',
      caseStudyTag: 'FINTECH CASE STUDY',
      title: 'Swallet',
      subtitle: 'Én plattform for å forstå, administrere og redusere faste utgifter',
      industry: 'Fintech · Personlig Økonomi',
      servicesLabel: 'Tjenester',
      servicesValue:
        'Produktstrategi · UX/UI · Webutvikling · Mobilapp · Open Banking (PSD2) · Sikkerhetsarkitektur',
      developedBy: 'Geton Digitale Løsninger',
      platform: 'Web & Mobil (iOS / Android)',
      overviewHeading: 'Om prosjektet',
      overviewP1:
        'Swallet er en norsk fintech-plattform utviklet for å gi forbrukere full oversikt over abonnementer, faste utgifter og konkrete muligheter til å spare penger hver måned.',
      overviewP2:
        'I dag er faste kostnader spredt over strømmetjenester, forsikringer, strømavtaler, mobilabonnement, treningssentre og digitale abonnementer. Det er krevende å vite nøyaktig hva man betaler – og enda vanskeligere å vite om det finnes billigere alternativer.',
      overviewP3:
        'Swallet samler alle faste utgifter i en intuitiv oversikt, analyserer forbruksmønsteret og matcher brukeren med gunstigere avtaler fra relevante leverandører.',
      overviewP4:
        'Prinsippet er krystallklart: Se hva du betaler → Forstå utgiftene → Oppdag alternativer → Spar penger.',
      challengeHeading: 'Utfordringen',
      challengeP1:
        'De fleste har god kontroll på store utgifter som boliglån og husleie, men mindre faste trekk forsvinner lett i mengden av banktransaksjoner.',
      challengeP2:
        'Et strømmeabonnement her, en forsikring der, strømavtale, mobilabonnement og softwarelisenser utgjør til sammen betydelige summer hver måned.',
      challengeP3:
        'Utfordringen var derfor ikke bare å bygge enda en budsjett-app med statiske grafer.',
      challengeP4:
        'Swallet måtte transformere rå banktransaksjoner til tydelig, handlingsrettet forbrukerinnsikt som alle kan forstå og handle ut fra umiddelbart.',
      challengeP5:
        'Samtidig måtte plattformen koble sammen tre ulike økosystemer: Forbrukere → Finansielle bankdata → Tjenesteleverandører.',
      solutionHeading: 'Løsningen',
      solutionP1:
        'Geton designet Swallet rundt et ryddig og informativt finasielt instrumentpanel.',
      solutionP2:
        'I stedet for overveldende kontoutskrifter fokuserer appen på de gjentakende kostnadene som akkumuleres over tid.',
      solutionP3:
        'Brukere ser nøyaktig hva de betaler hver måned og oppdager umiddelbart kategorier der det finnes sparepotensial.',
      solutionP4:
        'Systemet grupperer faste utgifter automatisk: Abonnementer · Forsikring · Strøm · Telecom · Strømming · Digitale tjenester.',
      savingsPipelineTitle: 'Hvordan sparemodellen fungerer',
      savingsPipelineSubtitle:
        'Fra automatisk oppdagelse av transaksjon til fullført leverandørbytte og dokumentert besparelse',
      subscriptionHeading: 'Automatisk abonnementsoversikt',
      subscriptionP1:
        'En av kjerneverdiene i Swallet er at brukeren slipper å legge inn utgifter manuelt.',
      subscriptionP2:
        'Gjennom Open Banking og finansielle dataintegrasjoner analyserer plattformen historiske kontobevegelser og identifiserer gjentakende faste trekk.',
      subscriptionP3:
        'Brukeren får servert en fiks ferdig liste med månedspris, neste forfallsdato og total årlig belastning.',
      openBankingHeading: 'Sikker Open Banking-arkitektur (PSD2)',
      openBankingP1:
        'Finansielle applikasjoner stiller de aller høyeste krav til datasikkerhet, kryptering og tillit.',
      openBankingP2:
        'Swallet er bygget for å integrere med lisensierte PSD2-partnere og europeiske Open Banking-API-er.',
      openBankingP3:
        'Brukeren logger seg trygt inn med BankID. All dataoverføring er end-to-end-kryptert, og plattformen har kun skrivebeskyttet tilgang for analyseformål.',
      marketplaceHeading: '«Få bedre tilbud» – Markedsplass for besparelser',
      marketplaceP1:
        'Å vite hva man betaler er bare første steg; den virkelige verdien oppstår når forbrukeren kan kutte kostnader.',
      marketplaceP2:
        'Swallet inkluderer en innebygd markedsplass der brukeren med ett trykk kan hente inn tilbud på strøm, forsikring eller mobil fra konkurrerende selskaper.',
      marketplaceP3:
        'Gjennom kommersielle partnerskap og affiliate-nettverk (som Adtraction) kan Swallet formidle reelle rabatter til brukeren.',
      marketplaceTagline: 'Sammenlign vilkår. Kutt overflødige gebyrer. Spar tusenvis av kroner årlig.',
      architectureHeading: 'Skalerbar fintech-arkitektur',
      architectureP1:
        'Systemet er utviklet med modulære mikrotjenester for banktilkobling, kategoriseringsmotor, tilbudsmatching og mobilvarsling.',
      privacyHeading: 'Personvern og GDPR i sentrum',
      privacyP1:
        'Finansdata behandles med ytterste konfidensialitet. Brukeren har fullt eierskap til sine data og kan når som helst koble fra banker eller slette profilen.',
      privacyP2:
        'All datalagring skjer i sikre, europeiske datasentre i samsvar med GDPR og Finanstilsynets retningslinjer.',
      whatWeBuiltHeading: 'Hva vi bygget i Swallet',
      techStackHeading: 'Teknologistakk & Sikkerhet',
      techStackDesc:
        'Konstruert med moderne reaktive rammeverk, strenge bankstandarder og kryptert databehandling.',
      businessImpactHeading: 'Resultater & Brukerverdi',
      ctaHeading: 'Har du en idé til en banebrytende fintech-app eller plattform?',
      ctaDesc:
        'Vi bistår selskaper fra konsept og reguleringsforståelse til ferdig lansert produkt i App Store og skyen.',
      ctaButton: 'Diskuter ditt prosjekt med oss',
      prevCaseStudy: 'Forrige case study: Frakt360',
      prevCaseStudySubtitle: '← Komplett frakt- og logistikkplattform for norske bedrifter',
    },
    modals: {
      showreelTitle: 'Geton Digital Solutions Showreel',
      showreelSubtitle: 'Et innblikk i våre siste app- og webarkitekturer',
      inquiryTitle: 'Start et prosjekt med Geton',
      inquirySubtitle: 'Fortell oss kort om ideen din, så tar en seniorarkitekt kontakt innen 24 timer.',
      nameLabel: 'Ditt navn',
      emailLabel: 'E-postadresse',
      companyLabel: 'Bedrift / Organisasjon',
      projectTypeLabel: 'Hva ønsker du å bygge?',
      budgetLabel: 'Estimert budsjettramme',
      descriptionLabel: 'Kort prosjektbeskrivelse',
      submitCTA: 'Send prosjektforespørsel',
      sending: 'Sender forespørsel...',
      successMessage: 'Takk! Forespørselen er mottatt. Vi kontakter deg innen 24 timer.',
      close: 'Lukk',
    },
    footer: {
      tagline: 'Kreative digitale løsninger for krevende merkevarer',
      mission:
        'Neste generasjons digitale løsninger, mobilapper og forretningskritiske skysystemer. Vi transformerer komplekse utfordringer til lynrask programvare med sub-sekunds ytelse.',
      nordicNode: 'NORDISK TEKNOLOGIHUB // NORGE',
      sreOnCall: 'UTC+1 // 24/7 VAKTTEAM SRE',
      requestProposal: 'Be om prosjektestimat',
      headquartersTitle: 'HOVEDKONTOR & KONTAKT',
      addressStreet: 'Trollhaugmyra 15, 5353 Straume',
      addressRegion: 'Vestland, Norge · Nordic Innovation Park',
      emailLabel: 'hello@geton.agency',
      navigationTitle: 'NAVIGASJON',
      servicesTitle: 'TJENESTER',
      legalTitle: 'JURIDISK & SIKKERHET',
      copyrightText: '© 2026 Geton AS, org. nummer 926117076. All rights reserved.',
      compliancePill: 'ISO 27001 & GDPR-KOMPATIBELT UTVIKLINGSMILJØ',
    },
  },
  en: {
    nav: {
      services: 'Services',
      servicesBadge: 'Core Capabilities',
      projects: 'Projects',
      projectsBadge: '140+ Shipped',
      about: 'About',
      aboutBadge: 'Studio Team',
      blogs: 'Insights',
      blogsBadge: 'Architecture & Tech',
      contact: 'Contact',
      contactBadge: 'Direct Brief',
      getStarted: 'Start a Project',
      brandLabel: 'Geton Digital Solutions',
      webPlatforms: 'Web Platforms',
      webPlatformsDesc: 'Fast, scalable & modern',
      mobileApps: 'Mobile Applications',
      mobileAppsDesc: 'Native iOS & Android',
      saasCloud: 'SaaS & Cloud Systems',
      saasCloudDesc: 'Built for enterprise growth',
      quickEstimate: 'Request Project Estimate',
      directContact: 'Direct Engineering Consultation',
      menuTitle: 'Main Menu',
    },
    hero: {
      tagline: 'CREATIVE DIGITAL SOLUTIONS',
      headlinePrefix: 'Ideas to',
      headlineGradient: 'Creative Solutions',
      description:
        'We design and build modern, fast, and responsive mobile apps, web applications, and mission-critical cloud solutions that help visionary brands scale, captivate users, and engineer enduring digital value.',
      exploreWork: 'Explore Our Work',
      watchShowreel: 'Watch Showreel',
      scrollIndicator: 'Scroll to explore',
      services: {
        appDev: {
          title: 'App Development',
          subtitle: 'iOS & Android',
          desc: 'High-performance native and cross-platform mobile apps with fluid 120Hz gesture physics, offline synchronization, and biometric security.',
          features: [
            'Swift & Kotlin native modules',
            'React Native & Flutter architectures',
            'App Store & Google Play distribution',
            'Real-time push pipelines and telemetry',
          ],
        },
        webDev: {
          title: 'Web Development',
          subtitle: 'Fast & Scalable',
          desc: 'Ultra-fast Next.js and React 19 architectures optimized for sub-second Core Web Vitals, enterprise scalability, and flawless interactions.',
          features: [
            'React 19 & Next.js architectures',
            'Edge-rendered API backends',
            'WebGL, Three.js & micro-interactions',
            'Automated CI/CD pipelines',
          ],
        },
        branding: {
          title: 'Branding & Design Systems',
          subtitle: 'Unique Identity',
          desc: 'Bespoke design systems, typography hierarchies, and sensory identity that distinguish visionary modern brands in competitive markets.',
          features: [
            'Complete brand identity kits & guidelines',
            'Custom typography & curated palettes',
            'Figma design tokens & component libraries',
            'Motion design & interaction guidelines',
          ],
        },
        saas: {
          title: 'SaaS & Cloud Platforms',
          subtitle: 'Built for Growth',
          desc: 'Full-stack cloud applications designed for multi-tenancy, high concurrency, and subscription-driven growth.',
          features: [
            'Multi-tenant database architectures',
            'Stripe billing & seat management',
            'Role-based access controls (RBAC)',
            'Real-time telemetry, APM & logging',
          ],
        },
      },
    },
    pricing: {
      badge: 'PACKAGES & PRICING',
      title: 'What do you want to build?',
      subtitle:
        'From concept to production-ready digital solution. Choose the package that fits your project – we tailor functionality, tech stack, and scope to your needs.',
      footnote:
        '*Prices are indicative starting estimates. Final quote depends on project scope, custom features, and third-party integrations.*',
      popularBadge: 'POPULAR',
      website: {
        title: 'Website',
        price: 'From 15 000 NOK',
        description:
          'For businesses seeking a modern, fast, and professional website that establishes trust and converts visitors into clients.',
        features: [
          'Modern and responsive layout',
          'Up to 5 pages / sections',
          'Lead capture contact form',
          'Core technical SEO structure',
          'SSL encryption & security',
          'CMS / effortless content editing',
          'Analytics and event tracking',
          'Handover training upon launch',
        ],
        button: 'Request a Quote',
      },
      mobileApp: {
        title: 'Mobile App',
        price: 'From 300 000 NOK',
        description:
          'From MVP to complete native iOS and Android application. We guide you through UX design, mobile engineering, backend, and app store launch.',
        features: [
          'iOS and Android parity',
          'Modern, human-centric UI/UX',
          'Backend API & cloud database',
          'Third-party API integrations',
          'Auth, BankID & user profiles',
          'Real-time push notifications',
          'Admin control dashboard',
          'App Store & Google Play distribution',
        ],
        button: 'Discuss Your App Idea',
      },
      webApp: {
        title: 'Web Application',
        price: 'From 250 000 NOK',
        description:
          'Bespoke web-based software for businesses, startups, and digital operations – engineered to scale seamlessly with your growth.',
        features: [
          'Tailored frontend & scalable backend',
          'Executive dashboard & admin panel',
          'Role-based access & permissions',
          'REST & GraphQL API integrations',
          'Database & managed cloud hosting',
          'Operational workflow automation',
          'Enterprise security & scalability',
          'Fully responsive fluid design',
        ],
        button: 'Request a Quote',
      },
    },
    digitalSolutions: {
      eyebrow: 'DIGITAL SOLUTIONS • DESIGN • DEVELOPMENT',
      headline: 'Technology that turns ideas into reality',
      description:
        'We design and build digital products that solve real business needs — from modern websites and mobile apps to custom software and complete digital platforms.',
      cards: [
        {
          number: '01',
          title: 'MULTIDISCIPLINARY EXPERTISE',
          description:
            'Design, development, strategy, and technology — all in one place.',
          pillars: ['Product Design & UX', 'Full-Stack Development', 'Technical Architecture', 'Product Strategy'],
          highlight: 'Unified Product Execution',
        },
        {
          number: '02',
          title: 'TAILORED SOLUTIONS',
          description:
            'We build technology around your business — not the other way around.',
          pillars: ['Bespoke Architecture', 'Seamless API Integrations', 'Domain-Specific Workflows', 'Scalable Cloud Systems'],
          highlight: 'Zero Off-The-Shelf Compromise',
        },
        {
          number: '03',
          title: 'FROM IDEA TO LAUNCH',
          description:
            'We take projects from concept and design through development, launch, and continuous growth.',
          pillars: ['Rapid Prototyping', 'Agile Sprint Delivery', 'Production Go-Live', '24/7 Post-Launch Evolution'],
          highlight: 'End-to-End Partnership',
        },
        {
          number: '04',
          title: 'CONTINUOUS GROWTH & PARTNERSHIP',
          description:
            'We serve as your long-term technology partner. Dedicated support, proactive security, and ongoing feature growth.',
          pillars: ['24/7 Monitoring & Alerting', 'Monthly Security Updates', 'Continuous Feature Roadmap', 'Guaranteed Response SLA'],
          highlight: 'Long-Term Security',
        },
      ],
      consultationCTA: 'Discuss Your Product with Us',
    },
    showcase: {
      badge: 'ENTERPRISE SOFTWARE ARCHITECTURE',
      heading: 'Technology Stack, Frameworks & Cloud Infrastructure',
      subheading:
        'We engineer robust, high-throughput digital platforms utilizing proven, bleeding-edge technologies across mobile, web, microservices, and artificial intelligence.',
      categories: {
        all: 'All Technologies (9)',
        mobile: 'Mobile Development',
        frontend: 'Frontend & Web',
        backend: 'Backend, Cloud & DevOps',
        ai: 'AI & Data Models',
      },
      routeBadge: 'DEVELOPMENT & DEPLOYMENT ROUTE',
      routeTitle: 'How we start, develop, deploy & support',
      routeSubtitle:
        'A transparent and rigorous engineering lifecycle from architectural inception to continuous integration, automated testing, and 24/7 SRE monitoring.',
      cycleSpeedNotice: 'Fast laser pulse animates every 2 seconds between phases',
      interactiveNotice: 'Click any phase to inspect technical deliverables and SLA guarantees',
      inspectCodeCTA: 'Inspect Architecture',
      requestArchReview: 'Request Architecture Review',
      bookSprintCTA: 'Book 2-Week Engineering Sprint',
      readyToDeployHeading: 'Ready to deploy your enterprise project?',
      readyToDeployDesc:
        'Our senior software architects and engineers are primed to accelerate your timeline from week one.',
      talkToPrincipalEngineer: 'Talk to a Principal Engineer',
      stages: [
        {
          title: '1. Discovery & Architecture',
          subtitle: 'System Design · Data Modeling · Security',
          desc: 'We analyze technical requirements, define relational data schemas in PostgreSQL, draft OpenAPI contracts, and design cloud topology in AWS/Azure with ISO and GDPR compliance.',
          deliverables: [
            'OpenAPI 3.1 & gRPC specification contracts',
            'Infrastructure as Code (Terraform / AWS CDK)',
            'Figma design system & token taxonomy',
            'Security threat model & attack surface review',
          ],
          sla: '15-minute response SLA for critical production incidents',
        },
        {
          title: '2. Sprint & Development',
          subtitle: 'Agile Delivery · Test-Driven · High Velocity',
          desc: 'Engineers build in structured two-week sprints with continuous pull requests, strict TypeScript/C# type safety, automated unit testing, and weekly interactive staging demos.',
          deliverables: [
            'TypeScript / .NET 9 core business logic',
            'React Native & Flutter mobile compilation',
            'Automated test coverage > 85%',
            'Weekly live staging demonstrations',
          ],
          sla: 'Continuous staging builds with automated regression suites',
        },
        {
          title: '3. Automated CI/CD Pipeline',
          subtitle: 'Docker · Zero-Downtime · Kubernetes',
          desc: 'Every commit executes GitHub Actions pipelines running static analysis, security vulnerability scanning, multi-stage Docker builds, and zero-downtime rolling updates.',
          deliverables: [
            'GitHub Actions multi-stage build pipelines',
            'Docker containerization & cryptographic signing',
            'Automated vulnerability scanning (Snyk / Trivy)',
            'Canary & Blue/Green deployment routing',
          ],
          sla: 'Fully automated pipeline with deployment execution under 120s',
        },
        {
          title: '4. Production Release',
          subtitle: 'Cloud Edge · Global CDN · Migration',
          desc: 'Controlled production deployment with global CDN edge caching, auto-scaling clusters, TLS 1.3 with HSTS enforcement, and centralized log aggregation via Datadog and CloudWatch.',
          deliverables: [
            'Global multi-region CDN routing',
            'PostgreSQL read-replicas & automated backups',
            'Payment gateway & webhooks verification',
            'DNS, SPF, DKIM and DMARC security hardening',
          ],
          sla: '99.99% uptime guarantee with automated multi-zone failover',
        },
        {
          title: '5. Support & 24/7 SRE',
          subtitle: 'On-Call Engineers · Performance · Evolution',
          desc: 'Post-launch operations managed by dedicated Site Reliability Engineers with real-time alerting, routine dependency patching, performance tuning, and roadmap feature delivery.',
          deliverables: [
            '24/7 telemetry, APM & pager alerting',
            'Quarterly penetration audits',
            'Monthly vulnerability and dependency patches',
            'Dedicated engineering Slack channel',
          ],
          sla: '15-minute response SLA for critical production incidents',
        },
      ],
      techCards: [
        {
          id: 'react-native',
          category: 'mobile',
          tag: 'Mobile App Framework',
          badge: 'iOS & Android Parity',
          title: 'React Native & Expo Ecosystem',
          subtitle: 'Native Performance · Single Codebase',
          desc: 'High-velocity native iOS and Android apps powered by React Native’s New Architecture (Fabric renderer & TurboModules). Zero-bridge synchronous execution with authentic native feel.',
          highlights: [
            'Hermes JIT engine with sub-second launch times',
            'Fabric UI renderer with fluid 120Hz gesture physics',
            'Direct C++ TurboModules for high-performance hardware access',
            'CodePush live edge updates & offline SQLite / WatermelonDB sync',
          ],
          metric: '60 FPS Smooth Gestures',
          metricLabel: 'FRAME BUDGET',
        },
        {
          id: 'flutter',
          category: 'mobile',
          tag: 'Mobile App Framework',
          badge: 'Dart & Skia Engine',
          title: 'Flutter & Dart Mobile Architecture',
          subtitle: 'Pixel-Perfect Impeller Rendering',
          desc: 'Custom-rendered mobile applications engineered with Dart and Flutter’s Impeller engine. Ideal for complex graphics, custom audio pipelines, and unified cross-device experiences.',
          highlights: [
            'AOT (Ahead-of-Time) compilation to ARM64 machine code',
            'Impeller GPU graphics engine eliminating shader compilation jank',
            'BLoC & Riverpod reactive architecture with predictable state',
            'Multi-platform target: iOS, Android, macOS & Embedded screens',
          ],
          metric: '100% Native Code Gen',
          metricLabel: 'COMPILER EFFICIENCY',
        },
        {
          id: 'swift-kotlin',
          category: 'mobile',
          tag: 'Native Languages',
          badge: 'SwiftUI & Jetpack Compose',
          title: 'Native Swift (iOS) & Kotlin (Android)',
          subtitle: 'Pure Platform Hardware Mastery',
          desc: 'When raw hardware capabilities are paramount, our engineers write native Swift and Kotlin modules for biometric Secure Enclave, ARKit spatial audio, and low-level BLE telemetry.',
          highlights: [
            'Apple Secure Enclave & Android KeyStore biometric cryptosystems',
            'CoreNFC & BLE background polling for specialized hardware',
            'Swift Concurrency (async/await, Actors) for high-frequency I/O',
            'Jetpack Compose declarative UI for hyper-responsive Android apps',
          ],
          metric: '0 ms Bridge Overhead',
          metricLabel: 'NATIVE LATENCY',
        },
        {
          id: 'react-next',
          category: 'frontend',
          tag: 'Web & Interface Systems',
          badge: 'React 19 & Server Components',
          title: 'React, Next.js & Modern TypeScript',
          subtitle: 'Sub-Second Web Applications',
          desc: 'High-performance web applications leveraging React Server Components, streaming SSR, and partial hydration for optimal Core Web Vitals and frictionless customer journeys.',
          highlights: [
            'Next.js App Router with granular streaming & Suspense boundaries',
            'Edge-rendered routes with sub-10ms Time to First Byte (TTFB)',
            'Tailwind CSS v4 with zero-runtime CSS footprint',
            'Strict TypeScript typing across full client-server boundaries',
          ],
          metric: '99+ Lighthouse Score',
          metricLabel: 'CORE WEB VITALS',
        },
        {
          id: 'node-ts',
          category: 'backend',
          tag: 'Backend & APIs',
          badge: 'Async Event-Driven',
          title: 'Node.js, TypeScript & Fastify',
          subtitle: 'High-Concurrency Microservices',
          desc: 'Scalable backend microservices and API gateways built on Node.js and Fastify capable of serving tens of thousands of concurrent requests with low memory footprints.',
          highlights: [
            'Fastify with JSON schema validation via TypeBox and Zod',
            'GraphQL and RESTful API architectures with OpenAPI 3.1 specs',
            'WebSockets & Server-Sent Events (SSE) for live push updates',
            'Worker Threads for compute-intensive background tasks',
          ],
          metric: '40 000+ Req/sec',
          metricLabel: 'THROUGHPUT CAPACITY',
        },
        {
          id: 'dotnet-core',
          category: 'backend',
          tag: 'Enterprise Systems',
          badge: '.NET 9 C# Enterprise',
          title: '.NET Core & C# Architecture',
          subtitle: 'Mission-Critical Reliability',
          desc: 'High-throughput enterprise backends for fintech, banking, and logistics where strict typing, thread safety, and memory predictability are non-negotiable.',
          highlights: [
            'Kestrel web server with world-class Tiered PGO JIT compilation',
            'Entity Framework Core with optimized raw SQL query execution',
            'Built-in OpenTelemetry instrumentation and health check endpoints',
            'Native Azure Service Bus & RabbitMQ enterprise messaging',
          ],
          metric: 'Sub-millisecond',
          metricLabel: 'KESTREL LATENCY',
        },
        {
          id: 'cloud-aws-azure',
          category: 'backend',
          tag: 'Cloud Infrastructure & DevOps',
          badge: 'AWS & Microsoft Azure',
          title: 'Cloud Platforms, Serverless & Integrations',
          subtitle: 'Multi-Cloud Resilience & APIs',
          desc: 'Enterprise cloud infrastructure on AWS (Lambda, ECS, RDS, S3) and Azure (Container Apps, AKS, Cosmos DB). We connect ERPs, CRMs, payments, and logistics into one unified engine.',
          highlights: [
            'Terraform & CDK for reproducible, immutable cloud infrastructure',
            'Auto-scaling serverless architectures handling millions of calls',
            'Integrations with Vipps, BankID, Stripe, Ongoing WMS & Tripletex',
            'Zero Trust network segmentation and end-to-end data encryption',
          ],
          metric: '99.99% Availability',
          metricLabel: 'CLOUD UPTIME',
        },
        {
          id: 'gemini-ai',
          category: 'ai',
          tag: 'Artificial Intelligence',
          badge: 'LLMs & Multimodal AI',
          title: 'AI Integrations & Gemini API',
          subtitle: 'Cognitive Automation & Vision',
          desc: 'Production-ready AI capabilities utilizing Gemini 2.5 Flash, vector databases, and semantic search pipelines to automate complex knowledge tasks.',
          highlights: [
            'Structured JSON output generation with strict schema enforcement',
            'RAG (Retrieval-Augmented Generation) on proprietary knowledge bases',
            'Computer vision for document and invoice parsing',
            'Real-time streaming speech and intelligent customer triage',
          ],
          metric: '10x Faster Processing',
          metricLabel: 'OPERATIONAL GAIN',
        },
        {
          id: 'db-postgres',
          category: 'backend',
          tag: 'Data & Persistence',
          badge: 'ACID Relational Database',
          title: 'PostgreSQL, Redis & Drizzle ORM',
          subtitle: 'Real-Time Data Integrity',
          desc: 'Robust relational persistence with PostgreSQL, ultra-low latency caching with Redis, and end-to-end type safety using Drizzle ORM.',
          highlights: [
            'Partitioned tables for high-volume timeseries and events',
            'Redis Pub/Sub for sub-millisecond push messaging',
            'pgvector extension for semantic similarity and AI embeddings',
            'Point-in-time recovery and continuous automated backups',
          ],
          metric: '< 2 ms Cache Latency',
          metricLabel: 'REDIS SPEED',
        },
      ],
    },
    projects: {
      badge: 'SELECTED CASE STUDIES',
      title: 'Our Selected Projects',
      subtitle:
        'We partner with ambitious founders and enterprise brands, delivering bespoke software that unifies elegant aesthetics with uncompromising architecture and performance.',
      filters: {
        all: 'All Projects (6)',
        mobile: 'Mobile Apps',
        web: 'Web & SaaS',
        fintech: 'Fintech & Logistics',
      },
      viewCaseStudy: 'Open Case Study',
      liveDemo: 'View Interactive Demo',
      clientLabel: 'Client',
      industryLabel: 'Industry',
      yearLabel: 'Year',
      platformLabel: 'Platform',
      impactLabel: 'Key Metrics / Integrations',
      readFullStudy: 'Read Full Project Case Study',
      cards: {
        frakt360: {
          title: 'Frakt360',
          subtitle: 'A complete logistics platform for modern businesses – booking, tracking, labels and returns',
          client: 'Frakt360 / Geton',
          industry: 'Logistics & E-Commerce',
          description:
            'Frakt360 brings the entire logistics workflow together into one digital platform: create shipments, compare carrier rates, generate Zebra thermal labels, follow deliveries in real time, and automate e-commerce orders from Shopify, WooCommerce, and Mystore.',
          keyFeatures: [
            'Order → Freight option → Booking → Label → Shipment → Tracking → Delivery → Invoice',
            'Direct PostNord and Bring carrier API integrations',
            'Shopify, WooCommerce, and Mystore e-commerce sync',
            'Automated Zebra thermal printing & Ongoing WMS connectivity',
            'Real-time telemetry tracking and QR return workflows',
          ],
        },
        swallet: {
          title: 'Swallet',
          subtitle: 'Full control of recurring expenses – aggregate, understand, and reduce monthly costs',
          client: 'Swallet / Geton',
          industry: 'Fintech & Personal Finance',
          description:
            'Swallet is a Norwegian personal-finance platform designed to give consumers complete visibility over subscriptions, recurring bills, and money-saving opportunities via licensed Open Banking (PSD2).',
          keyFeatures: [
            'See what you pay → Understand expenses → Discover alternatives → Save money',
            'Automated subscription recognition via Open Banking (PSD2)',
            '“Better Offers” marketplace for electricity, insurance & telecom',
            'Personal spending intelligence with estimated savings (4,320 NOK/yr)',
            'Bank-grade encryption, GDPR compliance & BankID verification',
          ],
        },
        newsec: {
          title: 'Newsec',
          subtitle: 'Northern European commercial real estate – in your pocket',
          client: 'Newsec Commercial Real Estate',
          industry: 'PropTech & Real Estate',
          description:
            'Northern Europe’s leading real estate advisory needed an interactive investor tool. We engineered a bespoke mobile application delivering real-time market analyses, yield calculators, and digital portfolio intelligence to institutional investors.',
          keyFeatures: [
            'Interactive yield calculator with dynamic 3D visualizations',
            'Push alerts for prime commercial listings hitting the market',
            'Digital market intelligence across Oslo, Stockholm, Helsinki & Copenhagen',
            'Biometric authentication for secure confidential prospectus access',
          ],
        },
        pareto: {
          title: 'Pareto Securities',
          subtitle: 'Unified institutional web experience with live tickers and analysis',
          client: 'Pareto Securities',
          industry: 'Investment Banking & Equities',
          description:
            'Pareto Securities required modern digital touchpoints delivering ultra-low-latency stock quotes, equity research papers, and podcast streaming for Nordic and international investors.',
          keyFeatures: [
            'Real-time integration with Oslo Børs and global equity feeds',
            'Automated daily distribution of morning research notes',
            'Responsive institutional design system built on SiteVision',
            'Seamless authentication with client portfolio portals',
          ],
        },
        aura: {
          title: 'Aura AI Analytics',
          subtitle: 'Real-time predictive business intelligence platform',
          client: 'Aura Intelligence Ltd.',
          industry: 'B2B SaaS & Artificial Intelligence',
          description:
            'A comprehensive SaaS platform for high-throughput stream processing and predictive machine learning, visualizing market patterns in real time before competitors detect them.',
          keyFeatures: [
            'Real-time event processing with Apache Kafka and ClickHouse',
            'Interactive WebGL dashboard with fluid 60 FPS charts',
            'Automated anomaly alerts piped directly to Slack & webhooks',
            'Enterprise multi-tenant architecture with SAML 2.0 and SSO',
          ],
        },
        kinetix: {
          title: 'Kinetix Health',
          subtitle: 'Next-generation biometric athletic recovery application',
          client: 'Kinetix Performance',
          industry: 'MedTech & Digital Health',
          description:
            'A personalized athletic performance and recovery platform integrating Apple HealthKit, Garmin, and Oura Ring to compute tailored training and recovery recommendations.',
          keyFeatures: [
            'Direct bidirectional HealthKit and Bluetooth BLE sync',
            'Custom algorithmic modeling of nervous system readiness',
            'Offline-first mobile architecture with background cloud sync',
            'Dynamically adjusted workout prescriptions with HD video',
          ],
        },
      },
    },
    frakt360Study: {
      backToProjects: 'Back to all projects',
      caseStudyTag: 'CASE STUDY',
      title: 'Frakt360',
      subtitle: 'A complete digital logistics platform for modern businesses',
      industry: 'Logistics & E-Commerce',
      servicesLabel: 'Services',
      servicesValue:
        'Product Design · UX/UI · Web Application · Mobile Application · API Integrations · Logistics Automation',
      developedBy: 'Geton Digital Solutions',
      platform: 'Web & Mobile (iOS / Android)',
      overviewHeading: 'The Project',
      overviewP1:
        'Frakt360 is a Norwegian logistics platform designed to make shipping simpler, more automated, and significantly more cost-effective for businesses.',
      overviewP2:
        'Instead of managing freight bookings, labels, tracking, returns, and invoices across several disparate portals, Frakt360 brings the entire logistics workflow together into one unified digital platform.',
      overviewP3:
        'Businesses can create shipments, compare available freight options, generate shipping labels, follow deliveries, and manage their logistics from a central dashboard.',
      overviewP4:
        'For e-commerce stores, Frakt360 connects directly to store engines, automating the flow from an incoming order to a shipment prepped and ready for carrier pickup.',
      challengeHeading: 'The Challenge',
      challengeP1: 'Shipping quickly becomes complicated and resource-heavy as a business scales.',
      challengeP2:
        'Orders originate in one system, warehouse operations happen in another, shipping is booked through carrier portals, labels are printed separately, and invoices have to be reconciled manually afterwards.',
      challengeP3:
        'The goal with Frakt360 was therefore far bigger than building another booking interface.',
      challengeP4:
        'We needed to engineer an infrastructure that connects e-commerce, warehouse operations, carriers, thermal label printing, real-time tracking, returns, and financial auditing into one seamless pipeline.',
      solutionHeading: 'The Solution',
      solutionP1:
        'Geton designed and developed Frakt360 as a modular logistics platform where businesses govern the entire shipping process from a single modern interface.',
      solutionP2:
        'A user enters shipment details and immediately retrieves relevant freight options and rates before confirming booking.',
      solutionP3:
        'Once booked, Frakt360 communicates directly with carrier APIs, registers the shipment, and generates the carrier-compliant thermal label.',
      solutionP4:
        'The platform tracks the parcel throughout its lifecycle, streaming live telemetry to both the sender and recipient.',
      workflowTitle: 'The End-to-End Shipping Pipeline',
      workflowSubtitle:
        'From online store checkout to carrier invoice reconciliation in one automated system',
      storeHeading: 'Connect Your Online Store',
      storeP1: 'One of the key pillars of Frakt360 is its e-commerce integration layer.',
      storeP2:
        'Businesses can connect platforms such as Shopify, WooCommerce, and Mystore directly into Frakt360.',
      storeP3:
        'Orders flow into the logistics engine automatically instead of staff having to manually re-enter shipment details.',
      storeTagline: 'Connect your store. Automate shipping. Access better freight rates.',
      storeP4:
        'This is especially vital for growing merchants looking to eliminate human error and save hundreds of operational hours.',
      carrierHeading: 'Carrier API Integrations',
      carrierP1:
        'Frakt360 integrates directly with national and Nordic carrier infrastructure, including PostNord and Bring.',
      carrierP2:
        'Through these direct API channels, the platform queries freight services, calculates live rates, books consignments, and retrieves barcode labels instantly.',
      labelP1:
        'Thermal label printing is central to daily operations. Frakt360 generates native print jobs tailored for industrial Zebra thermal printers.',
      trackingP1:
        'The platform pulls real-time status updates from carriers: Created → In transit → Terminal → Out for delivery → Delivered.',
      returnsP1:
        'Returns are equally effortless: customers receive digital QR codes on their smartphones, enabling drop-offs without requiring a home printer.',
      warehouseHeading: 'Warehouse & WMS Connectivity',
      warehouseP1:
        'For businesses utilizing third-party logistics or automated warehouses, Frakt360 links seamlessly with systems such as Ongoing WMS.',
      invoicingHeading: 'Invoicing & Cost Reconciliation',
      invoicingP1:
        'Freight costs can be unpredictable. Frakt360 offers complete visibility into quoted freight rates versus audited carrier invoices for exact accounting.',
      multiUserHeading: 'Multi-User & Role Management',
      multiUserP1:
        'The platform supports tiered access roles – from warehouse personnel who only print labels to financial controllers with full analytics.',
      mobileHeading: 'Mobile & Tablet for the Warehouse Floor',
      mobileP1:
        'Warehouse operations require mobility. Frakt360 is responsive across tablets and handheld barcode scanners for on-the-go processing.',
      whatWeBuiltHeading: 'What We Built in Frakt360',
      techStackHeading: 'Tech Stack & Architecture',
      techStackDesc:
        'Engineered for maximum reliability, low API latency, and zero data loss across high-volume shipping peaks.',
      businessImpactHeading: 'Business Impact & Results',
      ctaHeading: 'Does your company require a custom logistics or enterprise software platform?',
      ctaDesc:
        'We help ambitious companies automate legacy workflows and engineer resilient, scalable software systems.',
      ctaButton: 'Start a Project Conversation',
      nextCaseStudy: 'Next Case Study: Swallet',
      nextCaseStudySubtitle: 'Fintech platform for recurring expense and subscription management →',
    },
    swalletStudy: {
      backToProjects: 'Back to all projects',
      caseStudyTag: 'FINTECH CASE STUDY',
      title: 'Swallet',
      subtitle: 'One place to understand, manage, and reduce your recurring expenses',
      industry: 'Fintech · Personal Finance',
      servicesLabel: 'Services',
      servicesValue:
        'Product Strategy · UX/UI · Web Development · Mobile App · Open Banking (PSD2) · Security Architecture',
      developedBy: 'Geton Digital Solutions',
      platform: 'Web & Mobile (iOS / Android)',
      overviewHeading: 'The Project',
      overviewP1:
        'Swallet is a Norwegian personal-finance platform designed to give consumers a crystal-clear overview of their subscriptions, recurring expenses, and tangible opportunities to save money.',
      overviewP2:
        'Today, recurring costs are dispersed across streaming subscriptions, insurance policies, electricity tariffs, telecom contracts, gym memberships, and digital services. It is remarkably difficult for consumers to pinpoint their exact monthly burn – and even harder to identify superior deals.',
      overviewP3:
        'Swallet consolidates this disparate data into one clean experience, analyzes spending patterns, and matches users with competitive offers from vetted providers.',
      overviewP4:
        'The philosophy is simple: See what you pay → Understand your expenses → Discover alternatives → Save money.',
      challengeHeading: 'The Challenge',
      challengeP1:
        'Most consumers know what they pay for primary expenses like mortgages and rent, but smaller recurring deductions easily vanish within hundreds of bank transactions.',
      challengeP2:
        'A streaming subscription here, an insurance plan there, power contracts, phone plans, and software licenses aggregate into a substantial monthly drain.',
      challengeP3:
        'The challenge was therefore not merely constructing another generic budgeting app with static charts.',
      challengeP4:
        'Swallet needed to translate raw bank transaction streams into actionable financial intelligence that everyday users could immediately comprehend and act on.',
      challengeP5:
        'Simultaneously, the platform had to orchestrate three distinct ecosystems: Consumers → Financial Banking Data → Service Providers.',
      solutionHeading: 'The Solution',
      solutionP1:
        'Geton engineered Swallet around an uncluttered, high-utility financial cockpit.',
      solutionP2:
        'Instead of overwhelming users with dense transaction ledgers, Swallet highlights the compounding expenses that impact wealth over time.',
      solutionP3:
        'Users see exactly what they spend on subscriptions each month and pinpoint categories where substantial savings exist.',
      solutionP4:
        'The platform automatically categorizes fixed outlays across: Subscriptions · Insurance · Electricity · Telecom · Streaming · Digital Services.',
      savingsPipelineTitle: 'How the Savings Pipeline Works',
      savingsPipelineSubtitle:
        'From automated transaction detection to verified provider switching and tracked annual savings',
      subscriptionHeading: 'Automated Subscription Discovery',
      subscriptionP1:
        'A fundamental premise of Swallet is eliminating the tedium of manually registering subscriptions.',
      subscriptionP2:
        'Leveraging Open Banking and financial data feeds, the system analyzes transaction histories to detect recurring payments and billing cadences.',
      subscriptionP3:
        'Users are presented with an organized inventory indicating renewal dates, monthly charges, and annualized commitments.',
      openBankingHeading: 'Secure Open Banking Architecture (PSD2)',
      openBankingP1:
        'Financial applications demand the absolute highest tier of cryptographic security, regulatory compliance, and trust.',
      openBankingP2:
        'Swallet is architected to interface with licensed PSD2 providers and European Open Banking APIs.',
      openBankingP3:
        'Consumers authenticate securely via BankID. All data transit is encrypted end-to-end, and the system maintains read-only access strictly for analysis.',
      marketplaceHeading: '“Better Offers” – The Savings Marketplace',
      marketplaceP1:
        'Knowing what you pay is merely step one; the true payoff comes when consumers can reduce their monthly bills.',
      marketplaceP2:
        'Swallet features an integrated marketplace where users can explore tailored quotes on electricity, insurance, or telecom with one tap.',
      marketplaceP3:
        'Through strategic partnerships and affiliate networks (such as Adtraction), Swallet provides genuine discounts directly to consumers.',
      marketplaceTagline: 'Compare terms. Eliminate hidden fees. Save thousands annually.',
      architectureHeading: 'Scalable Fintech Architecture',
      architectureP1:
        'Built with microservices separating bank syncing, machine-learning categorization, offer matching, and real-time push alerts.',
      privacyHeading: 'Privacy & GDPR at the Core',
      privacyP1:
        'Financial data is handled with strict confidentiality. Users maintain complete ownership of their data and can revoke bank access or purge accounts at any time.',
      privacyP2:
        'All data storage resides in secure European cloud infrastructure complying with GDPR and financial oversight standards.',
      whatWeBuiltHeading: 'What We Built in Swallet',
      techStackHeading: 'Tech Stack & Security',
      techStackDesc:
        'Constructed on modern reactive frameworks, strict banking encryption, and compliant cloud infrastructure.',
      businessImpactHeading: 'Business Impact & User Value',
      ctaHeading: 'Do you have an idea for a transformative fintech application or platform?',
      ctaDesc:
        'We help founders and institutions navigate from conceptualization and regulatory compliance to App Store deployment and scale.',
      ctaButton: 'Discuss Your Project With Us',
      prevCaseStudy: 'Previous Case Study: Frakt360',
      prevCaseStudySubtitle: '← Complete logistics platform for modern Norwegian businesses',
    },
    modals: {
      showreelTitle: 'Geton Digital Solutions Showreel',
      showreelSubtitle: 'A showcase of our recent mobile and web architectures',
      inquiryTitle: 'Start a Project With Geton',
      inquirySubtitle: 'Share a brief summary of your vision, and a senior architect will respond within 24 hours.',
      nameLabel: 'Your Name',
      emailLabel: 'Email Address',
      companyLabel: 'Company / Organization',
      projectTypeLabel: 'What are you looking to build?',
      budgetLabel: 'Estimated Budget Range',
      descriptionLabel: 'Brief Project Description',
      submitCTA: 'Submit Project Inquiry',
      sending: 'Submitting Inquiry...',
      successMessage: 'Thank you! Your inquiry has been received. We will contact you within 24 hours.',
      close: 'Close',
    },
    footer: {
      tagline: 'Creative digital solutions for visionary brands',
      mission:
        'Next-generation digital solutions, mobile architectures, and enterprise cloud systems. We transform complex vision into high-throughput reality with sub-second performance.',
      nordicNode: 'NORDIC TECH NODE // NORWAY',
      sreOnCall: 'UTC+1 // 24/7 ON-CALL SRE',
      requestProposal: 'Request Project Proposal',
      headquartersTitle: 'HEADQUARTERS & CONTACT',
      addressStreet: 'Trollhaugmyra 15, 5353 Straume',
      addressRegion: 'Vestland, Norway · Nordic Innovation Park',
      emailLabel: 'hello@geton.agency',
      navigationTitle: 'NAVIGATION',
      servicesTitle: 'SERVICES',
      legalTitle: 'LEGAL & COMPLIANCE',
      copyrightText: '© 2026 Geton AS, org. nummer 926117076. All rights reserved.',
      compliancePill: 'ISO 27001 & GDPR COMPLIANT ENGINEERING ENVIRONMENT',
    },
  },
};
