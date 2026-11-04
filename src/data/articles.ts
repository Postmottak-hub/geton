export interface Article {
  id: string;
  category: 'ai' | 'architecture' | 'web' | 'mobile' | 'security' | 'design' | 'data' | 'cloud';
  categoryLabelNo: string;
  categoryLabelEn: string;
  titleNo: string;
  titleEn: string;
  excerptNo: string;
  excerptEn: string;
  readTime: string;
  dateNo: string;
  dateEn: string;
  author: string;
  authorRoleNo: string;
  authorRoleEn: string;
  imageSrc: string;
  tags: string[];
  subsectionsNo: {
    heading: string;
    text: string;
    codeSnippet?: string;
  }[];
  subsectionsEn: {
    heading: string;
    text: string;
    codeSnippet?: string;
  }[];
  quoteCalloutNo: string;
  quoteCalloutEn: string;
  keyTakeawaysNo: string[];
  keyTakeawaysEn: string[];
}

export const ARTICLES: Article[] = [
  // 1. AI AGENTS IN PRODUCTION
  {
    id: 'ai-agents-in-production',
    category: 'ai',
    categoryLabelNo: 'AI & Automasjon',
    categoryLabelEn: 'AI & Automation',
    titleNo: 'AI-agenter i produksjon: Fra enkle prompts til autonome ingeniørsystemer',
    titleEn: 'AI Agents in Production: Beyond Simple Prompts into Autonomous Multi-Agent Systems',
    excerptNo:
      'Hvorfor monolittiske chat-prompts feiler i forretningskritiske systemer, og hvordan deterministisk tool-calling, tilstandsminne og orkestrerte del-agenter leverer pålitelige resultater uten hallusinasjoner.',
    excerptEn:
      'Why monolithic chat prompts break down in mission-critical applications, and how deterministic tool-calling, state memory, and orchestrated sub-agents deliver zero-hallucination reliability.',
    readTime: '7 min read',
    dateNo: 'November 2026',
    dateEn: 'November 2026',
    author: 'Eivind Lunde',
    authorRoleNo: 'Sjefsingeniør AI & Data',
    authorRoleEn: 'Principal AI Architect',
    imageSrc: '/assets/images/software_multidisciplinary_ui_1793710478928.jpg',
    tags: ['AI Agents', 'Function Calling', 'LangGraph', 'Python/TypeScript', 'Structured Outputs'],
    subsectionsNo: [
      {
        heading: 'Fra naive chatbots til deterministiske tilstandsmaskiner',
        text: 'De fleste bedrifter startet sin AI-reise med enkle tekstgenererende chatbots. Men i det øyeblikket en modell skal utføre finansielle oppgaver, endre databasestatus eller samhandle med offentlige registre, blir ren sannsynlighetsteori utilstrekkelig. Løsningen er agenter: autonome prosesser som kombinerer språklig resonnering med strengt typede funksjonskall og state machines.',
      },
      {
        heading: 'Arkitekturen: Memory, Scratchpads og Tool Callbacks',
        text: 'En produksjonsklar agent opererer gjennom en definert livssyklus: Observation -> Thought -> Tool Execution -> Reflection. Hvert verktøykall valideres mot et Zod- eller JSON-schema før det treffer backend-tjenesten. Dette eliminerer skadelig input og sikrer at feil håndteres med automatisk retry-logikk.',
        codeSnippet: `// Eksempel på strengt typet tool-calling i TypeScript
const generateInvoiceSchema = z.object({
  customerId: z.string().uuid(),
  amountOre: z.number().positive(),
  currency: z.literal('NOK'),
  lineItems: z.array(z.object({
    description: z.string().min(3),
    unitPrice: z.number(),
    quantity: z.number().int().positive()
  }))
});`,
      },
      {
        heading: 'Evaluering og kontinuerlig benchmarking i produksjon',
        text: 'Du kan ikke forbedre det du ikke måler. Moderne agent-arkitekturer krever syntetiske testsuiter (evals) som kjøres ved hver Pull Request. Vi simulerer tusenvis av krevende scenarioer for å verifisere at agenten holder seg innenfor tillatte handlingsrom.',
      },
    ],
    subsectionsEn: [
      {
        heading: 'From Naive Chatbots to Deterministic State Machines',
        text: 'Most organizations began their AI journey with simple generative text bots. However, the moment a model must manipulate ledgers, update production tables, or interact with external APIs, unconstrained probability fails. The answer lies in autonomous agents: software entities combining semantic reasoning with strictly typed tool-calling and finite state machines.',
      },
      {
        heading: 'The Core Architecture: Memory, Scratchpads, and Tool Execution',
        text: 'A production-grade agent operates within a disciplined lifecycle: Observation -> Thought -> Tool Execution -> Reflection. Every function invocation is validated against rigorous JSON/Zod schemas before executing on backend APIs, neutralizing hallucinations and handling transient network errors gracefully.',
        codeSnippet: `// Example of strict schema validation for agent tool execution
const generateInvoiceSchema = z.object({
  customerId: z.string().uuid(),
  amountOre: z.number().positive(),
  currency: z.literal('NOK'),
  lineItems: z.array(z.object({
    description: z.string().min(3),
    unitPrice: z.number(),
    quantity: z.number().int().positive()
  }))
});`,
      },
      {
        heading: 'Evaluation and Continuous Production Benchmarking',
        text: 'You cannot optimize what you do not systematically benchmark. Modern agent systems require rigorous synthetic evaluation suites (evals) running on every CI pipeline, stress-testing decision paths across edge cases before code touches production users.',
      },
    ],
    quoteCalloutNo:
      '«En AI-agent er ikke en magisk boks – det er en nøye orkestrert tilstandsmaskin med strenge gjerder rundt handlingene den har lov til å utføre.»',
    quoteCalloutEn:
      '"An AI agent is not a mystical black box — it is a disciplined state machine with immutable guardrails circumscribing its permitted actions."',
    keyTakeawaysNo: [
      'Bruk alltid Zod/JSON Schema for å tvinge frem 100% deterministiske strukturerte data',
      'Isoler destruktive operasjoner bak to-trinns godkjenning (Human-in-the-loop)',
      'Syntetiske evals på CI/CD forhindrer uønsket atferdsdrift over tid',
    ],
    keyTakeawaysEn: [
      'Enforce strictly typed schemas on every tool interface to eliminate hallucinated parameters',
      'Safeguard high-impact operations behind human-in-the-loop checkpoints',
      'Automated synthetic eval suites in CI prevent behavioral drift across model updates',
    ],
  },

  // 2. THE MODULAR MONOLITH
  {
    id: 'modular-monolith-architecture',
    category: 'architecture',
    categoryLabelNo: 'Arkitektur & System',
    categoryLabelEn: 'Architecture & Systems',
    titleNo: 'Døden over mikrotjeneste-bloat: Hvorfor ledende team vender tilbake til modulære monolitter',
    titleEn: 'The Death of Microservice Bloat: Why Elite Teams are Returning to Modular Monoliths',
    excerptNo:
      'Hvordan hyper-distribuerte mikrotjenester introduserte unødvendig nettverkslatens, kompleks datafragmentering og driftskostnader – og hvorfor kompilatortid-isolerte modulære monolitter vinner i 2026.',
    excerptEn:
      'How hyper-distributed microservices introduced network latency, fractured schemas, and DevOps fatigue — and why compiler-isolated modular monoliths are claiming victory in 2026.',
    readTime: '6 min read',
    dateNo: 'Oktober 2026',
    dateEn: 'October 2026',
    author: 'Marius Holmen',
    authorRoleNo: 'Sjefsarkitekt Skysystemer',
    authorRoleEn: 'Lead Cloud Architect',
    imageSrc: '/assets/images/software_bespoke_architecture_1793710479073.jpg',
    tags: ['Architecture', 'Modular Monolith', 'Domain-Driven Design', 'PostgreSQL', 'Performance'],
    subsectionsNo: [
      {
        heading: 'Mikrotjeneste-feberen og dens skjulte kostnader',
        text: 'Tidlig på 2020-tallet ble mikrotjenester solgt inn som den universelle oppskriften på skalerbarhet. Men for selskaper med under 200 ingeniører førte oppdelingen ofte til mareritt: distribuerte transaksjoner, brutt typesikkerhet over nettverket og titalls Kubernetes-klynger som krevde fulltids vedlikehold.',
      },
      {
        heading: 'Hva er egentlig en modulær monolitt?',
        text: 'En modulær monolitt kjører i én enkelt distribusjonsenhet (eller skalert horisontalt som identiske containere), men kildekoden er strengt oppdelt i uavhengige domenemoduler via grensesnitt. Ingen modul har lov til å gjøre direkte SQL-kall mot en annen moduls tabeller.',
        codeSnippet: `// Arkitekturgrense: Moduler kommuniserer kun via definerte kontrakter
export interface BillingModule {
  chargeInvoice(invoiceId: string): Promise<PaymentResult>;
  getSubscriptionStatus(tenantId: string): Promise<Subscription>;
}
// Logistikk-modulen har ingen tilgang til Billing sin interne database!`,
      },
      {
        heading: 'Resultat: Lynraske in-memory kall og enklere feilsøking',
        text: 'Når tjenester kommuniserer via in-process minnekall i stedet for HTTP/gRPC, faller latenstiden fra 25ms til mikrosekunder. Database-transaksjoner kan utføres med standard ACID-garantier i PostgreSQL, uten behov for komplekse to-fase-commits (2PC) eller Saga-mønstre.',
      },
    ],
    subsectionsEn: [
      {
        heading: 'The Microservice Mania and Its Hidden Operational Tax',
        text: 'Microservices were promoted as the universal panacea for software scalability. Yet for teams with fewer than 200 engineers, premature distribution yielded distributed transaction failures, network latency penalties, and exorbitant cloud cluster overhead.',
      },
      {
        heading: 'Defining the Modern Modular Monolith',
        text: 'A modular monolith executes within a single process space while maintaining inviolable domain boundaries enforced by the compiler. Modules export explicit TypeScript/Rust contracts and cannot query other domains internal database schemas directly.',
        codeSnippet: `// Architectural boundary: Modules interact solely via defined interfaces
export interface BillingModule {
  chargeInvoice(invoiceId: string): Promise<PaymentResult>;
  getSubscriptionStatus(tenantId: string): Promise<Subscription>;
}
// Fulfillment modules have zero access to Billing internal Postgres tables!`,
      },
      {
        heading: 'Sub-Microsecond In-Memory Calls vs. Network Serialization',
        text: 'Transitioning from cross-network RPCs to in-memory function calls collapses internal call latency from 25ms to sub-microseconds. Native ACID transactions in PostgreSQL guarantee absolute consistency without convoluted distributed Saga orchestrations.',
      },
    ],
    quoteCalloutNo:
      '«Du trenger ikke ti mikrotjenester for å skalere til 10 millioner brukere; du trenger veldesignede domener og en velsmurt database.»',
    quoteCalloutEn:
      '"You do not need twelve microservices to scale to ten million users; you need disciplined domain boundaries and an optimized relational database."',
    keyTakeawaysNo: [
      'In-memory funksjonskall er opptil 1000x raskere enn distribuerte HTTP-forespørsler',
      'ACID-transaksjoner i PostgreSQL fjerner behovet for komplekse distribuerte Sagas',
      'Kompilatorkontrollerte modulgrenser gir all fleksibiliteten til mikrotjenester uten driftsmarerittet',
    ],
    keyTakeawaysEn: [
      'In-memory function dispatches are orders of magnitude faster than distributed HTTP requests',
      'Relational ACID guarantees eliminate the cognitive burden of eventual consistency bugs',
      'Compiler-enforced domain boundaries provide the architectural hygiene of microservices with zero cluster sprawl',
    ],
  },

  // 3. NEXT-GEN WEB PERFORMANCE
  {
    id: 'nextgen-web-performance-2026',
    category: 'web',
    categoryLabelNo: 'Web & Ytelse',
    categoryLabelEn: 'Web & Performance',
    titleNo: 'Next-Gen Webytelse: Islands-arkitektur, streaming HTML og sub-50ms responstider',
    titleEn: 'Next-Gen Web Performance: Islands Architecture, Streaming HTML and Sub-50ms Latency',
    excerptNo:
      'Hvorfor tradisjonelle tunge Single Page Application-pakker taper kunder, og hvordan moderne Edge-rendering, zero-runtime CSS og delvis hydrering skaper lynraske opplevelser.',
    excerptEn:
      'Why monolithic Single Page Application bundles cause conversion drop-offs, and how modern Edge rendering, zero-runtime CSS, and partial hydration deliver instant web experiences.',
    readTime: '5 min read',
    dateNo: 'Oktober 2026',
    dateEn: 'October 2026',
    author: 'Sofia Vik',
    authorRoleNo: 'Senior Frontend Arkitekt',
    authorRoleEn: 'Staff Frontend Architect',
    imageSrc: '/assets/images/software_idea_to_launch_1793710481314.jpg',
    tags: ['React 19', 'Next.js 15', 'Core Web Vitals', 'Edge CDN', 'WebAssembly'],
    subsectionsNo: [
      {
        heading: 'Kostnaden av 2 megabyte med JavaScript på mobil',
        text: 'Når en bruker laster en nettside på en mobiltelefon over 4G, må nettleseren ikke bare laste ned JavaScript-filen – den må også parse, kompilere og utføre koden før brukeren kan klikke på noe som helst. Hvert 100 millisekund med forsinkelse koster målbare konverteringsprosenter.',
      },
      {
        heading: 'Islands Architecture og selektiv hydrering',
        text: 'Ved å behandle 90% av nettsiden som ren, statisk HTML og kun injisere interaktivitet i isolerte "øyer" (for eksempel en handlekurv eller en søkeboks), faller JavaScript-mengden sendt over nettverket med opptil 80%.',
      },
      {
        heading: 'Edge Streaming og sub-sekunds Largest Contentful Paint',
        text: 'Ved å streame HTML-skjelettet umiddelbart fra nærmeste Edge-node, begynner nettleseren å tegne skjermen innen 40 millisekunder, mens dynamiske data strømmes inn asynkront via Suspense boundaries.',
      },
    ],
    subsectionsEn: [
      {
        heading: 'The True Cost of Multi-Megabyte Client Bundles',
        text: 'When a mobile user requests a webpage over 4G, downloading the JavaScript is merely step one. The device must parse, compile, and execute scripts before the thread becomes interactive. Every 100ms of lag directly erodes user conversion metrics.',
      },
      {
        heading: 'Islands Architecture and Selective Hydration',
        text: 'Treating 90% of the viewport as pure, lightweight semantic HTML and hydrating only discrete interactive widgets (like search drawers or cart trays) cuts client-side JavaScript payloads by upwards of 80%.',
      },
      {
        heading: 'Edge Streaming and Instant Largest Contentful Paint',
        text: 'Streaming HTML directly from geo-distributed edge points ensures the client browser paints within 40 milliseconds, with dynamic database queries resolving over continuous HTTP chunk streams via Suspense.',
      },
    ],
    quoteCalloutNo:
      '«Fart er ikke en optimalisering du legger til på slutten av prosjektet – det er et fundamentalt arkitekturvalg du tar på dag én.»',
    quoteCalloutEn:
      '"Performance is not a cosmetic polish applied before launch — it is a foundational architectural commitment established on Day One."',
    keyTakeawaysNo: [
      'Optimaliser for Largest Contentful Paint (LCP) under 0.8 sekunder for maksimal Google-rangering',
      'Unngå unødvendig klient-hydrering av statisk informasjonsinnhold',
      'Bruk Edge CDN og streaming HTML for lynraske førsteinntrykk',
    ],
    keyTakeawaysEn: [
      'Maintain sub-0.8s Largest Contentful Paint (LCP) to maximize search equity and conversion',
      'Eliminate client runtime hydration on static editorial layouts',
      'Harness edge CDN streaming to deliver immediate first-frame paints globally',
    ],
  },

  // 4. OFFLINE-FIRST MOBILE ARCHITECTURE
  {
    id: 'offline-first-mobile-architecture',
    category: 'mobile',
    categoryLabelNo: 'Mobil & Klient',
    categoryLabelEn: 'Mobile & Client',
    titleNo: 'Offline-First mobilarkitektur: Slik bygger du apper som aldri feiler i felten',
    titleEn: 'Offline-First Mobile Architecture: Engineering Apps That Never Fail in the Field',
    excerptNo:
      'Brukere forventer at mobilapper fungerer umiddelbart – i tunneler, på lagergulvet og i flymodus. Slik designer vi lokale databaser, CRDTs og robuste synkroniseringskøer.',
    excerptEn:
      'Users expect mobile applications to respond instantaneously — in remote tunnels, warehouse basements, and airplane mode. How we design embedded databases, CRDTs, and sync engines.',
    readTime: '8 min read',
    dateNo: 'September 2026',
    dateEn: 'September 2026',
    author: 'Kristian Bøe',
    authorRoleNo: 'Senior Mobilutvikler',
    authorRoleEn: 'Lead Mobile Engineer',
    imageSrc: '/assets/images/software_devops_monitoring_1793710481343.jpg',
    tags: ['React Native', 'SQLite', 'CRDT', 'Offline Sync', 'Background Tasks'],
    subsectionsNo: [
      {
        heading: 'Nettverket er aldri en garanti',
        text: 'I en mobil verden er "offline" ikke en unntakstilstand – det er en normaltilstand med variabel båndbredde, pakketap og plutselige nettverksbrudd. Hvis appen viser en snurrende lasteindikator hver gang brukeren trykker på en knapp, er opplevelsen ødelagt.',
      },
      {
        heading: 'Lokal database som Single Source of Truth',
        text: 'I en offline-first arkitektur skriver brukergrensesnittet alltid direkte til en lokal SQLite/WatermelonDB-database på enheten. Grensesnittet oppdateres momentant med 0ms forsinkelse. En bakgrunnssynk-motor håndterer overføring til skyen når nettverket er tilgjengelig.',
      },
      {
        heading: 'Konflikthåndtering med CRDT og deterministiske regler',
        text: 'Hva skjer når to brukere endrer samme data offline samtidig? Ved hjelp av Conflict-free Replicated Data Types (CRDTs) eller veldefinerte Last-Write-Wins timestamps oppnås automatisk matematisk konsistens uten datatap.',
      },
    ],
    subsectionsEn: [
      {
        heading: 'The Network Is an Ephemeral Variable, Not a Guarantee',
        text: 'In mobile production, network dropouts are not anomalies — they are inevitable realities in tunnels, basements, and transit. Forcing users to wait on spinners destroys user trust and field velocity.',
      },
      {
        heading: 'The Local Embedded Database as the Absolute Truth',
        text: 'In offline-first architectures, the UI writes directly to an embedded SQLite datastore with zero network lag. A dedicated background synchronization coordinator reconciles queued operations with the remote API when connectivity resumes.',
      },
      {
        heading: 'Conflict Resolution and Conflict-Free Replicated Data Types',
        text: 'Resolving concurrent offline updates demands automated mathematical models. Leveraging CRDTs or strict deterministic timestamping guarantees eventual consistency without destructive overwrites.',
      },
    ],
    quoteCalloutNo:
      '«Hvis en app slutter å fungere når nettet forsvinner i 10 sekunder, har den en skjør arkitektur.»',
    quoteCalloutEn:
      '"If an application grinds to a halt during ten seconds of transit packet loss, its architecture is fragile by design."',
    keyTakeawaysNo: [
      'Gjør alle UI-skrivinger mot lokal enhetsdatabase først (optimistisk oppdatering)',
      'Håndter utgående forespørsler gjennom en persistert, feiltolerant oppgavekø',
      'Bruk CRDT-strukturer for samarbeidende flerbrukeropplevelser uten kollisjoner',
    ],
    keyTakeawaysEn: [
      'Commit UI writes directly to local client storage before dispatching network packets',
      'Manage outbound telemetry via durable, retry-capable background queues',
      'Deploy CRDTs to prevent merge conflicts during multi-client offline collaborations',
    ],
  },

  // 5. ZERO TRUST & PASSKEYS
  {
    id: 'zero-trust-passkeys-security',
    category: 'security',
    categoryLabelNo: 'Sikkerhet & Sky',
    categoryLabelEn: 'Security & Cloud',
    titleNo: 'Zero Trust og passkeys i 2026: Farvel til passord, phishing og utdaterte sesjoner',
    titleEn: 'Zero Trust and Passkeys in 2026: Eliminating Passwords, Phishing, and Stale Sessions',
    excerptNo:
      'Tradisjonell passordautentisering er roten til over 80% av datainnbrudd. Slik implementerer vi WebAuthn, maskinvarekryptering og kontinuerlig risikovurdering for moderne selskaper.',
    excerptEn:
      'Traditional passwords account for over 80% of corporate data breaches. How we engineer WebAuthn, cryptographic hardware enclaves, and continuous trust validation.',
    readTime: '6 min read',
    dateNo: 'September 2026',
    dateEn: 'September 2026',
    author: 'Henrik Nygård',
    authorRoleNo: 'Sikkerhetsleder & Arkitekt',
    authorRoleEn: 'Chief Security Architect',
    imageSrc: '/assets/images/creative_growth_partnership_1793709073304.jpg',
    tags: ['WebAuthn', 'Passkeys', 'Zero Trust', 'GDPR', 'Cryptography'],
    subsectionsNo: [
      {
        heading: 'Hvorfor passord er teknisk foreldet',
        text: 'Mennesker gjenbruker passord, klikker på overbevisende phishing-lenker og deler credentials over usikre kanaler. Passkeys (FIDO2 / WebAuthn) erstatter hemmeligheter sendt over nettet med asymmetrisk kryptografi forankret i enhetens Secure Enclave.',
      },
      {
        heading: 'Slik fungerer kryptografiske passkeys',
        text: 'Brukeren logger inn med Face ID, Touch ID eller Windows Hello. En privat nøkkel forlater aldri enhetens maskinvarechip, mens serveren kun oppbevarer en offentlig nøkkel. Ettersom nøkkelen er kryptografisk bundet til domenenavnet, er phishing matematisk umulig.',
      },
      {
        heading: 'Kontinuerlig verifisering i et Zero Trust-miljø',
        text: 'Autentisering er ikke et engangs-event ved innlogging. I en ekte Zero Trust-arkitektur evalueres sesjonens risiko fortløpende basert på enhetens tilstand, nettverksanomalier og tilgangsmønstre.',
      },
    ],
    subsectionsEn: [
      {
        heading: 'The Inherent Vulnerability of Shared Secrets',
        text: 'Credentials will inevitably be reused, phished, or leaked. Passkeys (FIDO2/WebAuthn) eliminate shared passwords entirely, substituting them with asymmetric public-key cryptography sealed in hardware secure enclaves.',
      },
      {
        heading: 'Cryptographic Mechanics of WebAuthn',
        text: 'User unlocks credentials via local biometric verification (Touch ID, Face ID, YubiKey). The private key never leaves the physical silicon, while the server holds only the public verification key. Because keys are bound to origin domains, credential theft is mathematically impossible.',
      },
      {
        heading: 'Continuous Authentication Under Zero Trust',
        text: 'Security verification cannot be a one-time gate at login. True Zero Trust infrastructure evaluates token validity, client hardware integrity, and behavioral anomalies continuously throughout the active session.',
      },
    ],
    quoteCalloutNo:
      '«Det sikreste passordet er det som aldri eksisterte. Passkeys fjerner phishing som trusselbilde én gang for alle.»',
    quoteCalloutEn:
      '"The most secure password is the one that never existed. Passkeys eliminate credential phishing from the threat landscape once and for all."',
    keyTakeawaysNo: [
      'WebAuthn gjør phishing matematisk umulig ved å binde autentisering til domenet',
      'Biometri utføres lokalt på enheten – ingen biometrisk data sendes til serveren',
      'Zero Trust krever at hver eneste API-forespørsel valideres uavhengig av nettverk',
    ],
    keyTakeawaysEn: [
      'WebAuthn origin-binding mathematically neutralizes credential phishing campaigns',
      'Biometric handshakes remain strictly local to device silicon — no biological data ever leaves',
      'Zero Trust demands independent token verification on every atomic API transaction',
    ],
  },

  // 6. DESIGN ENGINEERING
  {
    id: 'design-engineering-micro-interactions',
    category: 'design',
    categoryLabelNo: 'Design & UX',
    categoryLabelEn: 'Design & UX',
    titleNo: 'Design engineering: Hvorfor 60fps mikro-interaksjoner og romlig design tredobler brukerengasjement',
    titleEn: 'Design Engineering: Why 60fps Micro-Interactions and Spatial Polish Triple User Retention',
    excerptNo:
      'Forskjellen mellom programvare som oppleves som et verktøy og programvare som elskes av brukerne, ligger i mikroskopisk taktil feedback, fjærfysikk og null kognitiv friksjon.',
    excerptEn:
      'The difference between software that feels like an enterprise chore and software users genuinely love lies in microscopic haptics, spring physics, and zero cognitive friction.',
    readTime: '5 min read',
    dateNo: 'August 2026',
    dateEn: 'August 2026',
    author: 'Astrid Moen',
    authorRoleNo: 'Leder for Design Engineering',
    authorRoleEn: 'Lead Design Engineer',
    imageSrc: '/assets/images/creative_idea_to_launch_1793709073861.jpg',
    tags: ['Design Systems', 'Micro-Interactions', 'Spring Physics', 'Framer Motion', 'Accessibility'],
    subsectionsNo: [
      {
        heading: 'Gapet mellom Figma og levende kode',
        text: 'Statisk design i Figma viser aldri hvordan et grensesnitt føles når data laster tregt, når brukeren drar en knapp for fort, eller når skjermstørrelsen endrer seg. Design engineering handler om å bygge med ekte kode fra dag én.',
      },
      {
        heading: 'Fjærfysikk (Spring Physics) fremfor lineære animasjoner',
        text: 'Menneskelige sanser oppfatter lineære easing-kurver som stive og kunstige. Ved å benytte naturlig fjærfysikk med demping og masse, responderer UI-elementer organisk på brukerens gester og berøringshastighet.',
      },
      {
        heading: 'Taktil feedback og mikro-bekreftelser',
        text: 'Når en bruker fullfører en handling – for eksempel sender en betaling eller arkiverer en oppgave – gir subtil visuell og haptisk tilbakemelding trygghet for at systemet har forstått intensjonen.',
      },
    ],
    subsectionsEn: [
      {
        heading: 'Bridging the Chasm Between Figma and Live Systems',
        text: 'Static Figma mockups cannot convey how an interface breathes under network latency, erratic cursor gestures, or fluid viewport transitions. Design engineering unites aesthetic sensibility with production code.',
      },
      {
        heading: 'Natural Spring Physics vs. Rigid Linear Easings',
        text: 'The human perceptual system recognizes linear animations as robotic and unnatural. Designing with physical mass, velocity, and spring dampening produces UI components that respond organically to touch.',
      },
      {
        heading: 'Tactile Feedback and Cognitive Reassurance',
        text: 'When a user concludes an action — approving a transaction or filing a workflow — micro-interactions and tactile state transitions provide cognitive confirmation that the system has registered their intent.',
      },
    ],
    quoteCalloutNo:
      '«Godt design er ikke dekorasjon du legger utenpå koden; det er måten systemet oppfører seg på under fingrene dine.»',
    quoteCalloutEn:
      '"Superb design is not cosmetic veneer layered atop code; it is the organic responsiveness of the system under your fingertips."',
    keyTakeawaysNo: [
      'Bruk fysikkbaserte fjæranimasjoner for naturlig responsiv følelse',
      'Bygg komponenter med full tastaturnavigasjon og WCAG 2.1 AA tilgjengelighet',
      'Mikro-interaksjoner bekrefter handlinger og reduserer brukerusikkerhet',
    ],
    keyTakeawaysEn: [
      'Adopt physics-based spring animations for intuitive, human-feeling responsiveness',
      'Engineer components with full keyboard accessibility and WCAG 2.1 compliance from the outset',
      'Subtle feedback states reduce cognitive friction and heighten user confidence',
    ],
  },

  // 7. POSTGRESQL AT SCALE
  {
    id: 'postgres-spatial-scale',
    category: 'data',
    categoryLabelNo: 'Data & Cloud',
    categoryLabelEn: 'Data & Cloud',
    titleNo: 'PostgreSQL i storskala: Geohashing, read-replikaer og millioner av sanntidsdata',
    titleEn: 'PostgreSQL at Scale: Geohash Indexing, Read Replicas and Millions of Real-Time Points',
    excerptNo:
      'Hvorfor PostgreSQL forblir verdens kraftigste datamotor for komplekse applikasjoner. Slik optimaliserer vi PostGIS, tilkoblingspooling og indeksering for tusenvis av samtidige spørringer.',
    excerptEn:
      'Why PostgreSQL remains the worlds most potent database engine for sophisticated products. Optimizing PostGIS, connection pooling, and indexes for thousands of concurrent queries.',
    readTime: '7 min read',
    dateNo: 'August 2026',
    dateEn: 'August 2026',
    author: 'Jonas Strand',
    authorRoleNo: 'Leder Dataplattform',
    authorRoleEn: 'Principal Data Architect',
    imageSrc: '/assets/images/software_bespoke_architecture_1793710479073.jpg',
    tags: ['PostgreSQL', 'PostGIS', 'PgBouncer', 'Database Optimization', 'Spatial Queries'],
    subsectionsNo: [
      {
        heading: 'Myten om at relasjonsdatabaser ikke kan skalere',
        text: 'Gjennom årene har mange NoSQL-databaser lovet ubegrenset skalering på bekostning av joins og relasjoner. Realiteten er at en riktig konfigurert PostgreSQL-instans med PgBouncer enkelt håndterer over 50 000 spørringer i sekundet med sub-millisekunds svartid.',
      },
      {
        heading: 'Romlige spørringer og Geohashing med PostGIS',
        text: 'Når en app skal finne de 10 nærmeste sjåførene eller leveringspunktene, er naiv avstandsberegning (Haversine formel på hver rad) katastrofal for CPU-en. Med R-Tree indekser i PostGIS og geohash-inndeling reduseres søkerommet med 99.9%.',
      },
      {
        heading: 'Avlastning med Read Replicas og Connection Pooling',
        text: 'Ved å rute analytiske og lesetunge spørringer til horisontalt skalerte skrivebeskyttede replikaer, forblir primærdatabasen 100% dedikert til lynraske skriveoperasjoner.',
      },
    ],
    subsectionsEn: [
      {
        heading: 'Debunking the Myth That Relational Engines Cannot Scale',
        text: 'NoSQL engines frequently traded schema integrity and JOIN capabilities for promised scale. In reality, a well-tuned PostgreSQL node paired with PgBouncer comfortably services 50,000+ requests per second with sub-millisecond latencies.',
      },
      {
        heading: 'Spatial Queries and Geohash Optimization with PostGIS',
        text: 'Calculating proximity coordinates across thousands of moving endpoints using naive trigonometry overwhelms CPU capacity. R-Tree spatial indexing and geohashing truncate candidate search spaces by 99.9% instantly.',
      },
      {
        heading: 'Horizontal Read Replicas and Connection Pool Governance',
        text: 'Routing analytical queries to read replicas guarantees that the primary writer node maintains maximum throughput for transaction commits without lock contention.',
      },
    ],
    quoteCalloutNo:
      '«Før du vurderer en eksotisk NoSQL-database, lær deg å indeksere PostgreSQL riktig. Den løser 99% av alle skaleringsbehov.»',
    quoteCalloutEn:
      '"Before introducing exotic NoSQL datastores, master indexing in PostgreSQL. It will effortlessly solve 99% of your scalability challenges."',
    keyTakeawaysNo: [
      'Bruk alltid tilkoblingspooling (PgBouncer) for å unngå prosesseksplosjon under trafikktopper',
      'PostGIS GiST-indekser gjør romlige avstandssøk hundrevis av ganger raskere',
      'Splitt lese- og skrivetrafikk for forutsigbar responstid i produksjon',
    ],
    keyTakeawaysEn: [
      'Always deploy connection pooling (PgBouncer) to prevent thread exhaustion during traffic spikes',
      'PostGIS GiST spatial indexing accelerates proximity lookups exponentially',
      'Segregate read and write queries across replicas for deterministic production performance',
    ],
  },

  // 8. CLOUD FINOPS & COST OPTIMIZATION
  {
    id: 'cloud-finops-cost-optimization',
    category: 'cloud',
    categoryLabelNo: 'Sky & Kostnader',
    categoryLabelEn: 'Cloud & FinOps',
    titleNo: 'Cloud FinOps: Slik kuttet vi skyregningen på AWS og Azure med 60% uten ytelsestap',
    titleEn: 'Cloud FinOps: How We Slashed AWS and Azure Cloud Spend by 60% With Zero Downtime',
    excerptNo:
      'Mange selskaper overprovisjonerer skytjenester i frykt for nedetid. Slik utnytter vi ARM Graviton, serverless scale-to-zero og kortlevde testmiljøer for å spare millioner.',
    excerptEn:
      'Organizations routinely over-provision cloud clusters in fear of downtime. How we deploy ARM Graviton, serverless scale-to-zero, and ephemeral staging to slash spend.',
    readTime: '6 min read',
    dateNo: 'Juli 2026',
    dateEn: 'July 2026',
    author: 'Fredrik Dahl',
    authorRoleNo: 'Leder for Sky & DevOps',
    authorRoleEn: 'DevOps & Infrastructure Lead',
    imageSrc: '/assets/images/creative_multidisciplinary_prism_1793709072258.jpg',
    tags: ['FinOps', 'AWS', 'Azure', 'Kubernetes', 'Serverless', 'Cost Optimization'],
    subsectionsNo: [
      {
        heading: 'Den skjulte skatten i overdimensjonert infrastruktur',
        text: 'Det er lett å kaste mer RAM og CPU på en uoptimalisert applikasjon. Men skyregninger akkumulerer seg raskt. Ved å gjennomgå ressursutnyttelsen finner vi ofte at servere kjører på under 8% gjennomsnittlig CPU-belastning mesteparten av døgnet.',
      },
      {
        heading: 'ARM-basert maskinvare (AWS Graviton) gir 40% bedre pris/ytelse',
        text: 'Ved å rekompilere Docker-containere for ARM64-arkitektur i stedet for x86, oppnår systemer umiddelbart lavere strømforbruk, raskere minnebåndbredde og en direkte 20–40% kostnadsreduksjon per time.',
      },
      {
        heading: 'Kortlevde (ephemeral) miljøer som slår seg av automatisk',
        text: 'Hvorfor betale for staging- og testmiljøer i helgene og om natten? Med moderne infrastruktur som kode (Terraform / Pulumi) spinner vi opp testmiljøer on-demand per Pull Request og sletter dem automatisk når koden merges.',
      },
    ],
    subsectionsEn: [
      {
        heading: 'The Hidden Waste of Over-Provisioned Cloud Clusters',
        text: 'It is deceptively easy to throw surplus vCPUs and RAM at poorly tuned codebases. Most enterprise cloud instances operate below 8% average CPU utilization for 80% of the working week.',
      },
      {
        heading: 'ARM-Based Silicon (AWS Graviton) Delivers 40% Better ROI',
        text: 'Compiling application containers for ARM64 architectures immediately delivers superior memory throughput, thermal efficiency, and an instant 20–40% cost reduction per compute hour.',
      },
      {
        heading: 'Ephemeral Environments and Auto-Shutdown Protocols',
        text: 'Why fund idle staging clusters overnight and throughout weekends? Deploying ephemeral testing environments spun up on Pull Request triggers and torn down upon merge eliminates non-production waste.',
      },
    ],
    quoteCalloutNo:
      '«Skykostnader er ikke en uunngåelig fastkostnad; det er en direkte refleksjon av kode- og arkitekturkvaliteten i prosjektet ditt.»',
    quoteCalloutEn:
      '"Cloud infrastructure expenditure is not an uncontrollable fixed tax; it is a direct reflection of your codebase and architectural discipline."',
    keyTakeawaysNo: [
      'Migrer arbeidslaster til ARM64/Graviton for umiddelbar 20–40% kostnadsreduksjon',
      'Skru av staging- og testmiljøer automatisk utenfor arbeidstid',
      'Sett opp automatiske budsjettalarmer og overvåk uventede dataoverføringskostnader',
    ],
    keyTakeawaysEn: [
      'Transition container workloads to ARM64 for immediate compute savings',
      'Automate shutdown of staging and development clusters outside active sprint hours',
      'Institute automated spend anomaly alerts to detect data egress surges immediately',
    ],
  },
];
