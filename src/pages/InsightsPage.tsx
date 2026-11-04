import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  Clock,
  Tag,
  Share2,
  Calendar,
  X,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Cpu,
  Layers,
  MapPin,
  Lock,
  Truck,
  Heart,
} from 'lucide-react';
import { GetonLogo } from '../components/Logo.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { LanguageSwitcher } from '../components/LanguageSwitcher.tsx';

interface ArticleItem {
  id: string;
  category: 'mobile' | 'fintech' | 'logistics' | 'health' | 'ai';
  categoryLabel: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  imageSrc: string;
  tags: string[];
  content: string[];
  keyTakeaways: string[];
}

interface InsightsPageProps {
  onBack: () => void;
  onNavigateToTab: (tab: string) => void;
  onStartProject: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onBack,
  onNavigateToTab,
  onStartProject,
}) => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const articles: ArticleItem[] = [
    {
      id: 'hentli-architecture',
      category: 'mobile',
      categoryLabel: language === 'no' ? 'Mobil & Sanntid' : 'Mobile & Real-Time',
      title:
        language === 'no'
          ? 'Slik bygget vi Hentli: Arkitekturen bak en sanntids kartbasert leveringsmarkedsplass'
          : 'Architecting Hentli: Engineering a Real-Time Map-Based On-Demand Delivery Marketplace',
      excerpt:
        language === 'no'
          ? 'Hvordan koble tusenvis av kunder og sjåfører i samme mobilapp med sub-sekunds GPS-oppdateringer, Mapbox-klynger og lavt batteriforbruk.'
          : 'How we unified customer and driver flows in one iOS/Android app with sub-second GPS telemetry, geospatial clustering and battery efficiency.',
      readTime: '6 min read',
      date: 'Oktober 2026',
      author: 'Geton Engineering Team',
      authorRole: 'Lead Mobile Architect',
      imageSrc: '/assets/aistudio/Hentli_Case_Study__Two_Seamless_Experiences_78303fe2.png',
      tags: ['React Native', 'Mapbox', 'WebSockets', 'OTP Auth', 'GPS Routing'],
      content: [
        language === 'no'
          ? 'Da vi startet utviklingen av Hentli, var målsetningen å bryte med tradisjonelle budsystemers rigide strukturer. Vi trengte en tosidig markedsplass der kunder kan legge ut oppdrag på under ett minutt, og sjåfører som allerede kjører samme vei kan plukke dem opp rett fra et interaktivt kart.'
          : 'When architecting Hentli, the primary objective was dismantling the rigid silos of legacy courier networks. We required a dual-sided marketplace where customers post jobs in under 60 seconds and drivers discover them visually.',
        language === 'no'
          ? 'Den største tekniske utfordringen var å kombinere to helt ulike brukeropplevelser – kunde og sjåfør – i samme applikasjonsbinærfil uten å gjøre appen tungrodd. Gjennom dynamisk rollebasert state-maskin og tokenbasert tilgangskontroll veksler brukergrensesnittet sømløst.'
          : 'The core engineering challenge was merging two distinct operational flows into one codebase without bloat. Through a deterministic state-machine and JWT claims, the UI dynamically reconfigures between customer and driver roles.',
        language === 'no'
          ? 'Geografisk søk og sanntidsklynger ble løst ved hjelp av geohash-indeksering i PostgreSQL / PostGIS, kombinert med WebSockets som kun sender posisjonsoppdateringer til klienter innenfor relevant synsfelt.'
          : 'Geospatial indexing was solved via PostGIS geohashing coupled with WebSockets broadcasting spatial updates strictly within the viewport delta, preserving user battery life.',
      ],
      keyTakeaways: [
        language === 'no' ? 'Én felles app sparer 50% vedlikeholdskostnader fremfor to separate apper' : 'Unified binary reduces codebase maintenance overhead by 50%',
        language === 'no' ? 'OTP via SMS gir 3x raskere onboarding enn tradisjonelt passord' : 'SMS OTP sign-in generates 3x faster conversion than email/passwords',
        language === 'no' ? 'Geohashing minimerer databasebelastning ved tusenvis av aktive sjåfører' : 'Geohashing curtails query overhead during spatial peak loads',
      ],
    },
    {
      id: 'swallet-psd2',
      category: 'fintech',
      categoryLabel: 'Fintech & Open Banking',
      title:
        language === 'no'
          ? 'Open Banking (PSD2) og fintech-sikkerhet i Norge: Lærdommer fra utviklingen av Swallet'
          : 'Open Banking (PSD2) and Financial Security in Norway: Engineering Insights from Swallet',
      excerpt:
        language === 'no'
          ? 'Hvordan transformere rå banktransaksjoner til automatisk abonnementsinnsikt, med BankID, ende-til-ende kryptering og strenge Finanstilsynet-krav.'
          : 'Transforming raw bank transaction telemetry into actionable subscription intelligence with BankID, AES-256 encryption, and regulatory compliance.',
      readTime: '8 min read',
      date: 'September 2026',
      author: 'Geton Security Lab',
      authorRole: 'Fintech Systems Lead',
      imageSrc: '/assets/aistudio/Swallet_Fintech_Case_Study_Showcase_302711d7.png',
      tags: ['Open Banking', 'PSD2', 'BankID', 'PCI-DSS', 'Machine Learning'],
      content: [
        language === 'no'
          ? 'I Norge har forbrukere i snitt mellom 6 og 11 løpende abonnementsavtaler. Utfordringen er at bankutskrifter ofte inneholder kryptiske betalingskoder som "ADTR*STRM 4983". Uten smart mønstergjenkjenning forstår ikke brukeren hva de faktisk betaler for.'
          : 'Norwegian consumers average 6 to 11 active subscriptions. Bank statements obscure these liabilities under cryptic merchant descriptors. Swallet resolves this via deterministic pattern reconciliation.',
        language === 'no'
          ? 'Swallet benytter lisensierte Open Banking API-er med streng BankID-autentisering. Transaksjonsdata parses gjennom en egenutviklet gjenkjenningsmotor som mapper transaksjoner mot over 4 000 kjente norske og internasjonale leverandører.'
          : 'Swallet leverages regulated PSD2 gateways backed by biometric BankID handshakes. Incoming streams pass through an internal categorizer indexing 4,000+ service providers.',
        language === 'no'
          ? 'Sikkerhet er aldri en ettertanke. All data krypteres med AES-256 på feltnivå, og tokens roteres kontinuerlig i samsvar med GDPR og Finanstilsynets retningslinjer.'
          : 'Security is paramount: field-level AES-256-GCM encryption is enforced with continuous OAuth token rotation adhering to strict GDPR statutes.',
      ],
      keyTakeaways: [
        language === 'no' ? 'Algoritmisk gjenkjenning avdekker gjennomsnittlig 4 320 kr/år i potensielle sparemuligheter' : 'Algorithmic categorization unveils an average of 4,320 NOK in annual consumer savings',
        language === 'no' ? 'BankID gir umiddelbar tillit i det norske markedet' : 'BankID integration drives instant user credibility in the Nordic market',
        language === 'no' ? 'Felt-nivå kryptering forhindrer datalekkasjer selv ved databasekompromiss' : 'Field-level tokenization protects customer privacy against leaks',
      ],
    },
    {
      id: 'frakt360-logistics',
      category: 'logistics',
      categoryLabel: language === 'no' ? 'Logistikk & E-handel' : 'Logistics & E-Commerce',
      title:
        language === 'no'
          ? 'Fraktautomatisering for norsk e-handel: Integrasjon med PostNord, Bring og Ongoing WMS'
          : 'Carrier Automation for Nordic E-Commerce: PostNord, Bring and Ongoing WMS Integration',
      excerpt:
        language === 'no'
          ? 'Fra mottatt nettbutikkordre til ferdig Zebra-fraktseddel på under 2 sekunder. Slik eliminerer vi manuelle flaskehalser på lageret.'
          : 'From incoming webshop order to Zebra shipping label in under 2 seconds: eliminating manual logistics bottlenecks.',
      readTime: '5 min read',
      date: 'August 2026',
      author: 'Geton Logistics Team',
      authorRole: 'Integration Specialist',
      imageSrc: '/assets/aistudio/Frakt360__Komplett_norsk_fraktplattform_6546bb91.png',
      tags: ['PostNord API', 'Bring API', 'Ongoing WMS', 'Shopify', 'Zebra ZPL'],
      content: [
        language === 'no'
          ? 'For nettbutikker med 100+ daglige ordrer kan manuell punching av fraktetiketter sluke timer hver uke. Med Frakt360 bygget vi en samlet API-bro som kobler butikksystemer (Shopify, WooCommerce, Mystore) direkte til transportørenes bookingmotorer.'
          : 'For e-commerce stores handling 100+ daily orders, manually booking carriers is an expensive bottleneck. Frakt360 bridges stores directly to transport networks.',
        language === 'no'
          ? 'Vi genererer ZPL (Zebra Programming Language) direkte i skyen og streamer rå printdata til lokale etikettskrivere, slik at etiketten spyttes ut det sekundet pakken veies.'
          : 'We compile raw Zebra ZPL print streams server-side and dispatch them directly to thermal warehouse printers the instant a package hits the scale.',
      ],
      keyTakeaways: [
        language === 'no' ? 'Reduserer pakketid med opptil 70% per forsendelse' : 'Cuts fulfillment time by up to 70% per parcel',
        language === 'no' ? 'Automatisk sammenligning velger alltid billigste eller raskeste transportør' : 'Rate shopping algorithms select optimal carrier price automatically',
      ],
    },
    {
      id: 'vestlandsk-health-ux',
      category: 'health',
      categoryLabel: language === 'no' ? 'Helse & Tillit' : 'Healthcare & Trust',
      title:
        language === 'no'
          ? 'Digitalisering av spesialisthelsetjenesten: Hvordan skape tillit hos Vestlandsk Hjertesenter'
          : 'Digitalizing Specialist Healthcare: Building Trust at Vestlandsk Hjertesenter',
      excerpt:
        language === 'no'
          ? 'Pasienter med hjertesymptomer er sårbare. Slik designet vi en helseportal som kombinerer klinisk autoritet med ro, tilgjengelighet og direkte timebooking.'
          : 'Cardiac patients require immediate reassurance and clarity. How we engineered a healthcare portal prioritizing trust and frictionless appointments.',
      readTime: '5 min read',
      date: 'Juli 2026',
      author: 'Geton Health UX Lab',
      authorRole: 'Product Designer',
      imageSrc: '/src/assets/images/vestlandsk_hjertesenter_mockup_1793710496839.jpg',
      tags: ['Healthcare UX', 'Accessibility WCAG 2.1', 'Next.js', 'Online Booking'],
      content: [
        language === 'no'
          ? 'I helsesektoren handler god teknologi om empati og tydelighet. Pasienter som oppsøker kardiolog vil raskt vite: Hva koster det? Hvor fort får jeg time? Hva skjer under en ekkokardiografi?'
          : 'In healthcare engineering, exceptional design is rooted in empathy and clarity. Patients seeking cardiology consultation need straightforward answers.',
        language === 'no'
          ? 'Vi fjernet all medisinsk overforklaring og bygget en skandinavisk, lys og ryddig opplevelse der pasienter kan bestille time på 30 sekunder fra mobil, med full forutsigbarhet.'
          : 'We eliminated medical obfuscation, delivering a calming Scandinavian web experience enabling 30-second mobile bookings with complete price transparency.',
      ],
      keyTakeaways: [
        language === 'no' ? 'Full prissynlighet og timevalg øker fullførte bestillinger med over 180%' : 'Transparent pricing and calendar selection boosted completed bookings by 185%',
        language === 'no' ? 'Universell utforming (WCAG) sikrer at også eldre pasienter navigerer uanstrengt' : 'WCAG 2.1 AA accessibility enables effortless navigation for senior citizens',
      ],
    },
    {
      id: 'performance-react19',
      category: 'ai',
      categoryLabel: language === 'no' ? 'Arkitektur & Ytelse' : 'Architecture & Speed',
      title:
        language === 'no'
          ? 'Next.js 15, React 19 og TypeScript: Våre erfaringer med sub-100ms responstider i 2026'
          : 'Next.js 15, React 19 and TypeScript: Engineering Sub-100ms Latency in Production',
      excerpt:
        language === 'no'
          ? 'Hvorfor rendering-arkitektur betyr alt for konvertering. Vår oppskrift på server components, edge-caching og null-klient-bloat.'
          : 'Why runtime rendering architecture dictates digital conversion rates: edge caching, server actions, and zero client-side bloat.',
      readTime: '7 min read',
      date: 'Juni 2026',
      author: 'Geton Tech Lead',
      authorRole: 'Principal Architect',
      imageSrc: '/src/assets/images/software_multidisciplinary_ui_1793710478928.jpg',
      tags: ['React 19', 'Next.js 15', 'Edge Caching', 'TypeScript', 'Web Vitals'],
      content: [
        language === 'no'
          ? 'Hvert 100 millisekund med forsinkelse koster konvertering. I Geton AS bygger vi alle nye plattformer med strenge ytelsesbudsjetter: maksimalt 0.8s Largest Contentful Paint (LCP) og 0 cumulative layout shifts.'
          : 'Every 100ms latency hit erodes conversion. At Geton AS, all client builds enforce strict performance budgets: <0.8s LCP and zero CLS.',
        language === 'no'
          ? 'Med React 19 Server Components streames HTML direkte fra kanten (Edge CDN), mens tunge klient-JavaScript-pakker holdes til et absolutt minimum.'
          : 'With React 19 Server Components, markup streams directly from edge clusters while client JavaScript payloads remain under featherlight limits.',
      ],
      keyTakeaways: [
        language === 'no' ? 'Sub-second innlasting gir opptil 40% lavere bounce rate' : 'Sub-second load times reduce bounce rates by up to 40%',
        language === 'no' ? 'Edge-caching reduserer serverkostnader med 65%' : 'Edge caching decreases backend infrastructure costs by 65%',
      ],
    },
  ];

  const categories = [
    { id: 'all', label: language === 'no' ? 'Alle fagartikler' : 'All Articles' },
    { id: 'mobile', label: language === 'no' ? 'Mobil & Sanntid' : 'Mobile & Real-Time' },
    { id: 'fintech', label: 'Fintech & PSD2' },
    { id: 'logistics', label: language === 'no' ? 'Logistikk & E-handel' : 'Logistics' },
    { id: 'health', label: language === 'no' ? 'Helse & UX' : 'Healthcare' },
    { id: 'ai', label: language === 'no' ? 'Arkitektur & Ytelse' : 'Architecture' },
  ];

  const filteredArticles =
    activeCategory === 'all'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

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
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-cyan-600/30 transition-all cursor-pointer"
            >
              {language === 'no' ? 'Start et prosjekt' : 'Start a Project'}
            </button>
          </div>
        </div>
      </header>

      {/* 
        HERO SECTION: INSIGHTS & ENGINEERING ARTICLES
      */}
      <section className="relative pt-12 pb-16 sm:py-20 px-4 sm:px-8 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-[11px] font-semibold tracking-wider text-cyan-300 uppercase mb-6">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>TEKNOLOGISKE INNSIKTER // GETON AS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6 max-w-4xl mx-auto [text-wrap:balance]">
            {language === 'no'
              ? 'Lærdommer fra produksjon: Arkitektur, Apper og Skysystemer'
              : 'Lessons from Production: Architecture, Mobile and Enterprise Systems'}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 [text-wrap:balance]">
            {language === 'no'
              ? 'Dypdykk i reelle erfaringer fra utviklingen av plattformer som Hentli, Swallet, Frakt360 og Vestlandsk Hjertesenter. Teknisk innsikt skrevet av ingeniørene som bygger dem.'
              : 'Technical deep-dives and architectural patterns drawn from building flagship platforms like Hentli, Swallet, Frakt360 and Vestlandsk Hjertesenter.'}
          </p>

          {/* Category Tabs Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ARTICLES GRID
      */}
      <section className="py-20 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group relative rounded-3xl bg-[#080d22] border border-white/10 hover:border-cyan-400/50 p-6 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 mb-5">
                    <img
                      src={article.imageSrc}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-cyan-300">
                      {article.categoryLabel}
                    </div>
                  </div>

                  {/* Meta Bar */}
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {article.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Bar */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-300 group-hover:text-cyan-200">
                    <span>{language === 'no' ? 'Les hele artikkelen' : 'Read Full Article'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ARTICLE MODAL / FULL READER DRAWER
      */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#080d1e] border border-cyan-400/40 p-6 sm:p-10 shadow-[0_0_60px_rgba(6,182,212,0.3)] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                {selectedArticle.categoryLabel}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-400">{selectedArticle.readTime}</span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-400">{selectedArticle.date}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-4 leading-tight">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6">
              <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-bold text-xs">
                G
              </div>
              <div>
                <div className="text-xs font-bold text-white">{selectedArticle.author}</div>
                <div className="text-[11px] text-slate-400">{selectedArticle.authorRole} · Geton AS</div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden border border-white/10 mb-8 bg-slate-900">
              <img
                src={selectedArticle.imageSrc}
                alt={selectedArticle.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Body Content */}
            <div className="space-y-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-8">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Key Takeaways Box */}
            <div className="p-6 rounded-2xl bg-cyan-950/30 border border-cyan-400/30 mb-8">
              <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>{language === 'no' ? 'Hovedlærdommer for teknologiledere' : 'Key Engineering Takeaways'}</span>
              </div>
              <div className="space-y-2">
                {selectedArticle.keyTakeaways.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                {language === 'no' ? 'Lukk artikkel' : 'Close'}
              </button>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onStartProject();
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>{language === 'no' ? 'Diskuter løsning med Geton AS' : 'Discuss Architecture with Geton'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 
        BOTTOM CTA
      */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-[#080f2d] to-[#040816]">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-950/80 via-cyan-950/80 to-blue-950/80 border border-cyan-500/40 text-center shadow-[0_0_60px_rgba(6,182,212,0.25)]">
          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-4">
            {language === 'no'
              ? 'Vil du bygge fremtidens programvare med Geton AS?'
              : 'Want to Engineer Next-Gen Software with Geton AS?'}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {language === 'no'
              ? 'Vi kombinerer banebrytende arkitektur med rask leveringstakt og langsiktig trygghet.'
              : 'We combine battle-tested architecture with rapid agile execution and long-term partnership.'}
          </p>
          <button
            onClick={onStartProject}
            className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/30 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>{language === 'no' ? 'Start et prosjekt' : 'Start a Project'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <Footer onSelectTab={onNavigateToTab} onGetStarted={onStartProject} />
    </div>
  );
};
