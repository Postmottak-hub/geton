import fs from 'node:fs';
import path from 'node:path';
import { SERVICE_PAGES } from '../src/data/services.ts';
import { CAPABILITY_PAGES } from '../src/data/capabilities.ts';
import { ARTICLES } from '../src/data/articles.ts';

const SITE_ORIGIN = 'https://getontechs.com';
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/assets/images/about_geton_studio_1793711805670.webp`;
const DIST_DIR = path.resolve(process.cwd(), 'dist');
const PUBLIC_SITEMAP_PATH = path.resolve(process.cwd(), 'public/sitemap.xml');

interface StaticRouteMeta {
  routePath: string; // disk folder path e.g. '/' or '/tjenester'
  canonicalPath: string; // canonical URL path
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lead: string;
  sections: { heading: string; text: string; href?: string; linkLabel?: string }[];
  ogType?: 'website' | 'article';
  ogImage?: string;
  noindex?: boolean;
  includeInSitemap?: boolean;
  sitemapPriority?: string;
  sitemapChangefreq?: 'weekly' | 'monthly';
  breadcrumbs?: { name: string; path: string }[];
  serviceSchema?: {
    name: string;
    description: string;
    serviceType: string;
    urlPath: string;
  };
  faqSchema?: { question: string; answer: string }[];
  articleSchema?: {
    headline: string;
    description: string;
    authorName: string;
    imagePath: string;
    urlPath: string;
  };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildJsonLd(route: StaticRouteMeta): string {
  const orgEntity = {
    '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
    '@id': `${SITE_ORIGIN}/#organization`,
    name: 'Geton AS',
    legalName: 'Geton AS',
    url: SITE_ORIGIN,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_ORIGIN}/favicon.png`,
      width: 192,
      height: 192,
    },
    image: DEFAULT_OG_IMAGE,
    description:
      'Norsk teknologiselskap i Straume ved Bergen som utvikler skreddersydde nettsider, mobilapper, webapplikasjoner, sky-løsninger og programvare.',
    email: 'contact@getontechs.com',
    telephone: '+4740584817',
    taxID: '926117076',
    foundingDate: '2020',
    priceRange: '$$$',
    hasMap: 'https://maps.google.com/?q=Trollhaugmyra+15,+5353+Straume,+Norway',
    sameAs: ['https://maps.google.com/?q=Trollhaugmyra+15,+5353+Straume,+Norway'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 60.3547,
      longitude: 5.125,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Trollhaugmyra 15',
      postalCode: '5353',
      addressLocality: 'Straume',
      addressRegion: 'Vestland',
      addressCountry: 'NO',
    },
    areaServed: [
      { '@type': 'City', name: 'Bergen' },
      { '@type': 'AdministrativeArea', name: 'Øygarden' },
      { '@type': 'AdministrativeArea', name: 'Vestland' },
      { '@type': 'Country', name: 'Norway' },
    ],
  };

  const navItems = [
    { name: 'Forside', url: `${SITE_ORIGIN}/` },
    { name: 'Våre tjenester', url: `${SITE_ORIGIN}/tjenester` },
    { name: 'Prosjekter', url: `${SITE_ORIGIN}/prosjekter` },
    { name: 'Om oss', url: `${SITE_ORIGIN}/om-oss` },
    { name: 'Insights', url: `${SITE_ORIGIN}/artikler` },
    { name: 'Support', url: `${SITE_ORIGIN}/tjenester/vedlikehold-og-support` },
    { name: 'Ta kontakt', url: `${SITE_ORIGIN}/kontakt` },
  ];

  const graph: Record<string, unknown>[] = [
    orgEntity,
    {
      '@type': 'WebSite',
      '@id': `${SITE_ORIGIN}/#website`,
      url: SITE_ORIGIN,
      name: 'Geton AS',
      publisher: { '@id': `${SITE_ORIGIN}/#organization` },
      inLanguage: ['nb-NO', 'en'],
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_ORIGIN}/#navigation`,
      name: 'Hovednavigasjon',
      itemListElement: navItems.map((item, idx) => ({
        '@type': 'SiteNavigationElement',
        position: idx + 1,
        name: item.name,
        url: item.url,
      })),
    },
  ];

  if (route.breadcrumbs && route.breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: route.breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: `${SITE_ORIGIN}${crumb.path}`,
      })),
    });
  }

  if (route.serviceSchema) {
    graph.push({
      '@type': 'Service',
      name: route.serviceSchema.name,
      description: route.serviceSchema.description,
      serviceType: route.serviceSchema.serviceType,
      url: `${SITE_ORIGIN}${route.serviceSchema.urlPath}`,
      provider: { '@id': `${SITE_ORIGIN}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'Bergen' },
        { '@type': 'AdministrativeArea', name: 'Øygarden' },
        { '@type': 'AdministrativeArea', name: 'Vestland' },
        { '@type': 'Country', name: 'Norway' },
      ],
    });
  }

  if (route.faqSchema && route.faqSchema.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: route.faqSchema.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  if (route.articleSchema) {
    graph.push({
      '@type': 'Article',
      headline: route.articleSchema.headline,
      description: route.articleSchema.description,
      image: route.articleSchema.imagePath.startsWith('http')
        ? route.articleSchema.imagePath
        : `${SITE_ORIGIN}${route.articleSchema.imagePath}`,
      author: {
        '@type': 'Person',
        name: route.articleSchema.authorName,
      },
      publisher: { '@id': `${SITE_ORIGIN}/#organization` },
      mainEntityOfPage: `${SITE_ORIGIN}${route.articleSchema.urlPath}`,
    });
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  });
}

function buildStaticBodyHtml(route: StaticRouteMeta): string {
  const sectionsHtml = route.sections
    .map(
      (sec) => `
        <section style="padding:20px;border:1px solid rgba(255,255,255,0.1);border-radius:16px;background:rgba(12,21,51,0.7);">
          <h2 style="font-size:20px;font-weight:700;margin:0 0 8px 0;color:#ffffff;">${escapeHtml(sec.heading)}</h2>
          <p style="font-size:14px;line-height:1.6;margin:0 0 10px 0;color:#cbd5e1;">${escapeHtml(sec.text)}</p>
          ${
            sec.href && sec.linkLabel
              ? `<a href="${escapeHtml(sec.href)}" style="font-size:13px;font-weight:600;color:#38bdf8;text-decoration:none;">${escapeHtml(sec.linkLabel)} →</a>`
              : ''
          }
        </section>`
    )
    .join('\n');

  return `<div id="root"><div style="min-height:100vh;background:#040816;color:#ffffff;font-family:'Plus Jakarta Sans',system-ui,sans-serif;">
  <header style="max-width:1280px;margin:0 auto;padding:20px 24px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;border-bottom:1px solid rgba(255,255,255,0.1);">
    <a href="/" style="font-weight:800;font-size:22px;color:#ffffff;text-decoration:none;">Geton AS</a>
    <nav aria-label="Hovedmeny" style="display:flex;flex-wrap:wrap;gap:18px;font-size:14px;">
      <a href="/" style="color:#e2e8f0;text-decoration:none;">Forside</a>
      <a href="/tjenester" style="color:#e2e8f0;text-decoration:none;">Våre tjenester</a>
      <a href="/prosjekter" style="color:#e2e8f0;text-decoration:none;">Prosjekter</a>
      <a href="/om-oss" style="color:#e2e8f0;text-decoration:none;">Om oss</a>
      <a href="/artikler" style="color:#e2e8f0;text-decoration:none;">Insights</a>
      <a href="/tjenester/vedlikehold-og-support" style="color:#e2e8f0;text-decoration:none;">Support</a>
      <a href="/kontakt" style="color:#38bdf8;font-weight:700;text-decoration:none;">Ta kontakt</a>
    </nav>
  </header>
  <main style="max-width:1280px;margin:0 auto;padding:48px 24px;">
    <p style="font-size:12px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#67e8f9;margin:0 0 12px 0;">${escapeHtml(route.eyebrow)}</p>
    <h1 style="font-size:38px;line-height:1.15;font-weight:800;margin:0 0 16px 0;color:#ffffff;">${escapeHtml(route.h1)}</h1>
    <p style="font-size:17px;line-height:1.65;max-width:780px;color:#cbd5e1;margin:0 0 36px 0;">${escapeHtml(route.lead)}</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;">
      ${sectionsHtml}
    </div>
  </main>
  <footer style="max-width:1280px;margin:0 auto;padding:32px 24px;border-top:1px solid rgba(255,255,255,0.1);font-size:13px;color:#94a3b8;">
    <p style="margin:0 0 8px 0;">Geton AS · Org. nr. 926 117 076 · Trollhaugmyra 15, 5353 Straume · +47 405 84 817 · contact@getontechs.com</p>
    <div style="display:flex;flex-wrap:wrap;gap:14px;">
      <a href="/tjenester" style="color:#94a3b8;text-decoration:none;">Våre tjenester</a>
      <a href="/prosjekter" style="color:#94a3b8;text-decoration:none;">Prosjekter</a>
      <a href="/om-oss" style="color:#94a3b8;text-decoration:none;">Om oss</a>
      <a href="/artikler" style="color:#94a3b8;text-decoration:none;">Insights</a>
      <a href="/tjenester/vedlikehold-og-support" style="color:#94a3b8;text-decoration:none;">Support</a>
      <a href="/kontakt" style="color:#94a3b8;text-decoration:none;">Ta kontakt</a>
    </div>
  </footer>
</div></div>`;
}

function collectRoutes(): StaticRouteMeta[] {
  const routes: StaticRouteMeta[] = [
    {
      routePath: '/',
      canonicalPath: '/',
      title: 'Nettsider, Apper og Systemutvikling | Geton',
      description:
        'Geton utvikler moderne nettsider, mobilapper og skreddersydde webapplikasjoner. Fra idé til lansering. Kontakt oss for et uforpliktende tilbud.',
      eyebrow: 'GETON AS · PROGRAMVARE & DESIGN',
      h1: 'Digitale løsninger som driver bedriften din fremover.',
      lead:
        'Vi utvikler moderne nettsider, mobilapper, AI-løsninger og skreddersydd programvare – fra idé til lansering.',
      includeInSitemap: true,
      sitemapPriority: '1.0',
      sitemapChangefreq: 'weekly',
      sections: [
        {
          heading: 'Våre tjenester',
          text: 'Nettsideutvikling, iOS & Android mobilapper, skreddersydde webapplikasjoner, AI-automatisering, skyarkitektur og teknisk SEO.',
          href: '/tjenester',
          linkLabel: 'Se alle tjenester',
        },
        {
          heading: 'Kundecaser & Prosjekter',
          text: 'Se utvalgte prosjekter inkludert Frakt360, Swallet, Hentli, Vestlandsk Hjertesenter, Geton Scooters og NORRAQ Style.',
          href: '/prosjekter',
          linkLabel: 'Utforsk prosjekter',
        },
        {
          heading: 'Om Geton AS',
          text: 'Norskeid teknologiselskap etablert i 2020 på Straume ved Bergen. Direkte samarbeid med erfarne designere og utviklere.',
          href: '/om-oss',
          linkLabel: 'Bli kjent med oss',
        },
        {
          heading: 'Support & Vedlikehold',
          text: '24/7 overvåking, sikkerhetsoppdateringer og langsiktig videreutvikling med garantert SLA-responstid.',
          href: '/tjenester/vedlikehold-og-support',
          linkLabel: 'Les om support',
        },
      ],
    },
    {
      routePath: '/tjenester',
      canonicalPath: '/tjenester',
      title: 'Våre tjenester innen nettsider, apper & systemutvikling | Geton AS',
      description:
        'Utforsk tjenestene fra Geton AS: nettsideutvikling, mobilapper (iOS & Android), skreddersydde webapplikasjoner, AI-automasjon, sky-drift, UX-design og SEO.',
      eyebrow: 'VÅRE TJENESTER · GETON AS',
      h1: 'Våre tjenester innen web, apper, systemer og AI',
      lead:
        'Vi designer, utvikler og forvalter skreddersydde digitale løsninger — fra raske bedriftsnettsider til avanserte mobilapper og forretningskritiske fagsystemer.',
      includeInSitemap: true,
      sitemapPriority: '0.95',
      sitemapChangefreq: 'weekly',
      breadcrumbs: [
        { name: 'Forside', path: '/' },
        { name: 'Våre tjenester', path: '/tjenester' },
      ],
      sections: Object.values(SERVICE_PAGES).map((svc) => ({
        heading: svc.navLabelNo,
        text: svc.seoDescNo,
        href: svc.routePath,
        linkLabel: `Les mer om ${svc.navLabelNo}`,
      })),
    },
    {
      routePath: '/prosjekter',
      canonicalPath: '/prosjekter',
      title: 'Prosjekter & Kundecaser | Nettsider, Apper & Programvare | Geton AS',
      description:
        'Se utvalgte digitale produkter utviklet av Geton AS: Frakt360, Swallet, Hentli, Vestlandsk Hjertesenter, Geton Scooters og NORRAQ Style.',
      eyebrow: 'KUNDECASER & PROSJEKTER · GETON AS',
      h1: 'Utvalgte prosjekter levert av Geton AS',
      lead:
        'Utforsk digitale løsninger, mobilapper og plattformer utviklet for norske og nordiske virksomheter.',
      includeInSitemap: true,
      sitemapPriority: '0.9',
      sitemapChangefreq: 'weekly',
      breadcrumbs: [
        { name: 'Forside', path: '/' },
        { name: 'Prosjekter', path: '/prosjekter' },
      ],
      sections: [
        {
          heading: 'Frakt360 — Komplett norsk fraktplattform',
          text: 'Logistikkplattform og transportørintegrasjon mot Bring og PostNord bygget for rask ordrehåndtering.',
          href: '/prosjekter/frakt360',
          linkLabel: 'Se Frakt360 case study',
        },
        {
          heading: 'Swallet — Fintech & Abonnementsplattform',
          text: 'Norsk fintech-økosystem med PSD2 Open Banking, BankID-signering og smart økonomistyring.',
          href: '/prosjekter/swallet',
          linkLabel: 'Se Swallet case study',
        },
        {
          heading: 'Hentli — Kartbasert leveringsapp',
          text: 'iOS- og Android-app med sanntidssporing og direktematching mellom kunder og sjåfører.',
          href: '/prosjekter/hentli',
          linkLabel: 'Se Hentli case study',
        },
        {
          heading: 'Vestlandsk Hjertesenter — Klinikkportal',
          text: 'Moderne spesialistklinikk-nettside med digital timebooking og lokal SEO i Bergen.',
          href: '/prosjekter/vestlandsk-hjertesenter',
          linkLabel: 'Se Vestlandsk Hjertesenter case study',
        },
        {
          heading: 'Geton Scooters — IoT, MQTT & Mobilapp',
          text: 'Elsparkesykkelplattform med mobilapp, kart, geofencing og IoT-telemetri utprøvd på Sotra.',
          href: '/prosjekter/geton-scooters',
          linkLabel: 'Se Geton Scooters case study',
        },
        {
          heading: 'NORRAQ Style — Digital plattform for skjønnhetsbransjen',
          text: 'Smart matching, strukturerte profiler, booking og privat chat for modeller, studenter og salonger.',
          href: '/prosjekter/norraq-style',
          linkLabel: 'Se NORRAQ Style case study',
        },
      ],
    },
    {
      routePath: '/om-oss',
      canonicalPath: '/om-oss',
      title: 'Om Geton AS | Teknologipartner i Bergen og Straume',
      description:
        'Bli kjent med Geton AS – norskeid teknologiselskap etablert i 2020 som utvikler nettsider, mobilapper og skreddersydd programvare.',
      eyebrow: 'OM GETON AS · ETABLERT 2020',
      h1: 'Vi bygger neste generasjons programvare i Norge',
      lead:
        'Geton AS ble etablert i 2020 på Straume i Øygarden ved Bergen. Vi kombinerer design engineering, AI-drevne arbeidsflyter og robust skalerbar kode for ambisiøse bedrifter.',
      includeInSitemap: true,
      sitemapPriority: '0.75',
      sitemapChangefreq: 'monthly',
      breadcrumbs: [
        { name: 'Forside', path: '/' },
        { name: 'Om oss', path: '/om-oss' },
      ],
      sections: [
        {
          heading: 'Mobilapper & Produktutvikling',
          text: 'Skreddersydde apper for iOS og Android bygget fra scratch med 60 fps ytelse.',
          href: '/tjenester/mobilapputvikling',
          linkLabel: 'Mobilapputvikling',
        },
        {
          heading: 'Kunstig intelligens & Automasjon',
          text: 'Praktiske AI-agenter og dokumentautomasjon som kutter manuelt arbeid i hverdagen.',
          href: '/tjenester/kunstig-intelligens-og-automasjon',
          linkLabel: 'AI & Automasjon',
        },
        {
          heading: 'Webapplikasjoner & Systemer',
          text: 'Forretningskritiske kundeportaler, fagsystemer og API-integrasjoner.',
          href: '/tjenester/webapplikasjoner-og-systemutvikling',
          linkLabel: 'Systemutvikling',
        },
        {
          heading: 'Ta kontakt med teamet',
          text: 'Besøk oss på Trollhaugmyra 15, 5353 Straume, eller avtal en uforpliktende teknisk gjennomgang.',
          href: '/kontakt',
          linkLabel: 'Ta kontakt',
        },
      ],
    },
    {
      routePath: '/artikler',
      canonicalPath: '/artikler',
      title: 'Teknologiske innsikter & fagartikler | Geton',
      description:
        'Fagartikler om systemarkitektur, kunstig intelligens, moderne webutvikling, mobilapper og sikkerhet fra Geton AS.',
      eyebrow: 'TEKNOLOGISKE INNSIKTER · INSIGHTS',
      h1: 'Teknologi, arkitektur og fremtidens programvare',
      lead:
        'Dypdykk i moderne software engineering, AI-agenter, modulære skysystemer, offline-first mobilarkitektur og design engineering skrevet av ingeniørene i Geton AS.',
      includeInSitemap: true,
      sitemapPriority: '0.8',
      sitemapChangefreq: 'weekly',
      breadcrumbs: [
        { name: 'Forside', path: '/' },
        { name: 'Insights', path: '/artikler' },
      ],
      sections: ARTICLES.map((art) => ({
        heading: art.titleNo,
        text: art.excerptNo,
        href: `/artikler/${art.id}`,
        linkLabel: 'Les fagartikkel',
      })),
    },
    {
      routePath: '/kontakt',
      canonicalPath: '/kontakt',
      title: 'Kontakt Geton AS | Nettsider, Apper & Systemutvikling i Straume / Bergen',
      description:
        'Ta kontakt med Geton AS på Trollhaugmyra 15, 5353 Straume. Ring +47 405 84 817 eller send en forespørsel til contact@getontechs.com.',
      eyebrow: 'TA KONTAKT · GETON AS',
      h1: 'Klar til å bygge din neste digitale suksess?',
      lead:
        'Fortell oss om prosjektet ditt via skjemaet, ring oss på +47 405 84 817 eller send e-post til contact@getontechs.com. Vi svarer raskt med ærlige tekniske råd.',
      includeInSitemap: true,
      sitemapPriority: '0.85',
      sitemapChangefreq: 'monthly',
      breadcrumbs: [
        { name: 'Forside', path: '/' },
        { name: 'Ta kontakt', path: '/kontakt' },
      ],
      sections: [
        {
          heading: 'Kontoradresse & Google Maps',
          text: 'Trollhaugmyra 15, 5353 Straume (Øygarden / Bergen). Åpent mandag til fredag 08.00–16.00.',
          href: 'https://maps.google.com/?q=Trollhaugmyra+15,+5353+Straume,+Norway',
          linkLabel: 'Åpne i Google Maps',
        },
        {
          heading: 'Direkte kontakt',
          text: 'E-post: contact@getontechs.com · Telefon: +47 405 84 817 · Org. nr. 926 117 076.',
          href: 'mailto:contact@getontechs.com',
          linkLabel: 'Send e-post til Geton',
        },
      ],
    },
  ];

  // Alias route /support -> serves Support content while canonicalizing cleanly to /tjenester/vedlikehold-og-support
  const supportSvc = SERVICE_PAGES['vedlikehold-og-support'];
  routes.push({
    routePath: '/support',
    canonicalPath: supportSvc.routePath,
    title: supportSvc.seoTitleNo,
    description: supportSvc.seoDescNo,
    eyebrow: supportSvc.eyebrowNo,
    h1: supportSvc.h1No,
    lead: supportSvc.introNo,
    ogImage: supportSvc.heroImage.src,
    includeInSitemap: false, // Canonical URL /tjenester/vedlikehold-og-support is in sitemap
    breadcrumbs: [
      { name: 'Forside', path: '/' },
      { name: 'Våre tjenester', path: '/tjenester' },
      { name: supportSvc.navLabelNo, path: supportSvc.routePath },
    ],
    sections: supportSvc.benefitsNo.map((b) => ({
      heading: b.title,
      text: b.desc,
      href: '/kontakt',
      linkLabel: 'Kontakt support & drift',
    })),
  });

  // 12 Individual Service Pages
  for (const svc of Object.values(SERVICE_PAGES)) {
    routes.push({
      routePath: svc.routePath,
      canonicalPath: svc.routePath,
      title: svc.seoTitleNo,
      description: svc.seoDescNo,
      eyebrow: svc.eyebrowNo,
      h1: svc.h1No,
      lead: svc.introNo,
      ogImage: svc.heroImage.src,
      includeInSitemap: true,
      sitemapPriority: svc.slug === 'nettsideutvikling' || svc.slug === 'mobilapputvikling' || svc.slug === 'webapplikasjoner-og-systemutvikling' ? '0.9' : '0.85',
      sitemapChangefreq: 'monthly',
      breadcrumbs: [
        { name: 'Forside', path: '/' },
        { name: 'Våre tjenester', path: '/tjenester' },
        { name: svc.navLabelNo, path: svc.routePath },
      ],
      serviceSchema: {
        name: svc.h1No,
        description: svc.seoDescNo,
        serviceType: svc.eyebrowNo,
        urlPath: svc.routePath,
      },
      faqSchema: svc.faqs.map((f) => ({
        question: f.questionNo,
        answer: f.answerNo,
      })),
      sections: [
        {
          heading: svc.overviewTitleNo,
          text: svc.overviewTextNo,
          href: '/kontakt',
          linkLabel: 'Be om uforpliktende tilbud',
        },
        ...svc.benefitsNo.slice(0, 3).map((b) => ({
          heading: b.title,
          text: b.desc,
        })),
      ],
    });
  }

  // 4 Capability / Work-Process Pages
  for (const cap of Object.values(CAPABILITY_PAGES)) {
    routes.push({
      routePath: cap.routePath,
      canonicalPath: cap.routePath,
      title: cap.seoTitleNo,
      description: cap.seoDescNo,
      eyebrow: cap.tagNo,
      h1: cap.headlineNo,
      lead: cap.descriptionNo,
      ogImage: cap.heroImage,
      includeInSitemap: true,
      sitemapPriority: '0.8',
      sitemapChangefreq: 'monthly',
      breadcrumbs: [
        { name: 'Forside', path: '/' },
        { name: 'Om oss', path: '/om-oss' },
        { name: cap.titleNo, path: cap.routePath },
      ],
      serviceSchema: {
        name: cap.titleNo,
        description: cap.seoDescNo,
        serviceType: cap.tagNo,
        urlPath: cap.routePath,
      },
      sections: cap.extendedStoryNo.map((para, idx) => ({
        heading: idx === 0 ? cap.titleNo : 'Teknisk gjennomføring og leveranse',
        text: para,
        href: '/kontakt',
        linkLabel: 'Snakk med Geton AS',
      })),
    });
  }

  // 4 Project Case Study Pages
  const projectCases: {
    path: string;
    title: string;
    description: string;
    h1: string;
    lead: string;
    ogImage: string;
    name: string;
  }[] = [
    {
      path: '/prosjekter/frakt360',
      name: 'Frakt360',
      title: 'Frakt360 – Logistikkplattform & Case Study | Geton',
      description:
        'Hvordan Geton AS utviklet Frakt360 – en komplett norsk fraktplattform med integrasjon mot Bring, PostNord og nettbutikker.',
      h1: 'Frakt360 — Komplett norsk fraktplattform og TMS',
      lead:
        'Skreddersydd logistikk- og fraktplattform med direkte EDI/API-integrasjon mot Bring og PostNord, sporing i sanntid og automatisert etikettutskrift.',
      ogImage: '/assets/aistudio/Frakt360__Komplett_norsk_fraktplattform_6546bb91.webp',
    },
    {
      path: '/prosjekter/swallet',
      name: 'Swallet',
      title: 'Swallet – Fintech & Abonnementsplattform | Geton',
      description:
        'Case study av Swallet: norsk fintech-plattform utviklet av Geton AS med Open Banking (PSD2) og BankID.',
      h1: 'Swallet — Norsk fintech-app med Open Banking & BankID',
      lead:
        'Moderne personlig økonomi- og abonnementsplattform med PSD2-bankintegrasjon, sikker autentisering og automatisk utgiftsoversikt.',
      ogImage: '/assets/aistudio/Swallet_Fintech_Case_Study_Showcase_302711d7.webp',
    },
    {
      path: '/prosjekter/hentli',
      name: 'Hentli',
      title: 'Hentli – Kartbasert Leveringsapp | Geton',
      description:
        'Case study av Hentli: iOS- og Android-app med kartbasert matching mellom kunder og sjåfører i sanntid.',
      h1: 'Hentli — Én mobilapp, to skreddersydde opplevelser',
      lead:
        'Kartbasert leveringsapp for iOS og Android som kobler brukere som vil sende varer med sjåfører på vei i samme retning.',
      ogImage: '/assets/aistudio/Hentli__Two_Experiences__One_App_706526e8.png',
    },
    {
      path: '/prosjekter/vestlandsk-hjertesenter',
      name: 'Vestlandsk Hjertesenter',
      title: 'Vestlandsk Hjertesenter – Pasientportal & Nettside | Geton',
      description:
        'Case study av Vestlandsk Hjertesenter i Bergen: moderne nettside, digital timebooking og lokal SEO utviklet av Geton AS.',
      h1: 'Vestlandsk Hjertesenter — Spesialistklinikk på nett',
      lead:
        'Tillitsvekkende og brukervennlig nettside med digital timebestilling, WCAG-tilgjengelighet og sterk lokal SEO i Bergen.',
      ogImage: '/assets/images/vestlandsk_hjertesenter_mockup_1793710496839.webp',
    },
    {
      path: '/prosjekter/geton-scooters',
      name: 'Geton Scooters',
      title: 'Geton Scooters – IoT, MQTT og apputvikling | Geton AS',
      description:
        'Se hvordan Geton AS utviklet en elsparkesykkelplattform med mobilapp, kart, IoT, MQTT og geofencing – fra idé til drift.',
      h1: 'Geton Scooters: Fra mobilapp til en IoT-plattform',
      lead:
        'Digital mikromobilitetsplattform med iOS- og Android-app, live kart, geofencing («Outside Zone») og IoT-kommunikasjon via MQTT – utprøvd på Sotra.',
      ogImage: '/assets/aistudio/Geton_Scooters_IoT_Mobility_Case_Study_84e80f94.png',
    },
    {
      path: '/prosjekter/norraq-style',
      name: 'NORRAQ Style',
      title: 'NORRAQ Style – Digital plattform for skjønnhetsbransjen | Geton AS',
      description:
        'Se hvordan NORRAQ Style samler modeller, studenter, lærlinger og skjønnhetsaktører i én løsning med smart matching, booking og chat.',
      h1: 'NORRAQ Style – En smartere digital plattform for skjønnhetsbransjen',
      lead:
        'Digital plattform som kobler frisørstudenter, lærlinger, stylister, salonger og modeller gjennom smart matching, bookingforespørsler og privat chat.',
      ogImage: '/assets/aistudio/NORRAQ_Style__Fra_matching_til_booking_00b2d200.png',
    },
  ];

  for (const proj of projectCases) {
    routes.push({
      routePath: proj.path,
      canonicalPath: proj.path,
      title: proj.title,
      description: proj.description,
      eyebrow: `CASE STUDY · ${proj.name.toUpperCase()}`,
      h1: proj.h1,
      lead: proj.lead,
      ogImage: proj.ogImage,
      includeInSitemap: true,
      sitemapPriority: '0.8',
      sitemapChangefreq: 'monthly',
      breadcrumbs: [
        { name: 'Forside', path: '/' },
        { name: 'Prosjekter', path: '/prosjekter' },
        { name: proj.name, path: proj.path },
      ],
      sections: [
        {
          heading: `Om prosjektet: ${proj.name}`,
          text: proj.description,
          href: '/prosjekter',
          linkLabel: 'Se flere prosjekter',
        },
        {
          heading: 'Vil du bygge noe lignende?',
          text: 'Geton AS hjelper norske selskaper fra konsept til ferdig lansert produkt.',
          href: '/kontakt',
          linkLabel: 'Start et prosjekt',
        },
      ],
    });
  }

  // 9 Engineering Articles
  for (const article of ARTICLES) {
    const routePath = `/artikler/${article.id}`;
    routes.push({
      routePath,
      canonicalPath: routePath,
      title: `${article.titleNo} | Geton`,
      description: article.excerptNo.slice(0, 158),
      eyebrow: `INSIGHTS · ${article.categoryLabelNo.toUpperCase()}`,
      h1: article.titleNo,
      lead: article.excerptNo,
      ogType: 'article',
      ogImage: article.imageSrc,
      includeInSitemap: true,
      sitemapPriority: '0.65',
      sitemapChangefreq: 'monthly',
      breadcrumbs: [
        { name: 'Forside', path: '/' },
        { name: 'Insights', path: '/artikler' },
        { name: article.titleNo, path: routePath },
      ],
      articleSchema: {
        headline: article.titleNo,
        description: article.excerptNo,
        authorName: article.author,
        imagePath: article.imageSrc,
        urlPath: routePath,
      },
      sections: article.subsectionsNo.slice(0, 3).map((s) => ({
        heading: s.heading,
        text: s.text || article.excerptNo,
      })),
    });
  }

  return routes;
}

function renderHtmlForRoute(baseTemplate: string, route: StaticRouteMeta): string {
  const canonicalUrl = `${SITE_ORIGIN}${route.canonicalPath === '/' ? '/' : route.canonicalPath}`;
  const ogImageUrl = route.ogImage
    ? route.ogImage.startsWith('http')
      ? route.ogImage
      : `${SITE_ORIGIN}${route.ogImage}`
    : DEFAULT_OG_IMAGE;

  let html = baseTemplate;

  // Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`);

  // Replace description
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${escapeHtml(route.description)}" />`
  );

  // Replace robots
  html = html.replace(
    /<meta\s+name="robots"[\s\S]*?\/>/,
    `<meta name="robots" content="${route.noindex ? 'noindex, nofollow' : 'index, follow'}" />`
  );

  // Replace canonical + hreflang block
  const hreflangTags = route.noindex
    ? `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`
    : `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />\n    <link rel="alternate" hreflang="nb" href="${escapeHtml(canonicalUrl)}" />\n    <link rel="alternate" hreflang="en" href="${escapeHtml(canonicalUrl)}?lang=en" />\n    <link rel="alternate" hreflang="x-default" href="${escapeHtml(canonicalUrl)}" />`;

  html = html.replace(
    /<link rel="canonical"[\s\S]*?<link rel="alternate" hreflang="x-default"[\s\S]*?\/>/,
    hreflangTags
  );

  // Inject Google Search Console meta tag if provided at build time
  const gscToken = (process.env.VITE_GOOGLE_SITE_VERIFICATION || '').trim();
  if (
    gscToken &&
    !gscToken.startsWith('MY_') &&
    !gscToken.includes('YOUR_') &&
    gscToken !== 'REPLACE_ME'
  ) {
    html = html.replace(
      '</head>',
      `  <meta name="google-site-verification" content="${escapeHtml(gscToken)}" />\n  </head>`
    );
  }

  // Update Open Graph & Twitter tags
  html = html
    .replace(
      /<meta property="og:type" content="[^"]*" \/>/,
      `<meta property="og:type" content="${route.ogType || 'website'}" />`
    )
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`
    )
    .replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${escapeHtml(route.title)}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${escapeHtml(route.description)}" />`
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${escapeHtml(ogImageUrl)}" />`
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
    )
    .replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:image" content="${escapeHtml(ogImageUrl)}" />`
    );

  // Replace static JSON-LD script
  const jsonLd = buildJsonLd(route);
  html = html.replace(
    /<script id="dynamic-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script id="dynamic-jsonld" type="application/ld+json">${jsonLd}</script>`
  );

  // Inject pre-hydration semantic HTML inside <div id="root">
  html = html.replace('<div id="root"></div>', buildStaticBodyHtml(route));

  return html;
}

function generateMultilingualSitemap(routes: StaticRouteMeta[]): string {
  const lastmod = new Date().toISOString().slice(0, 10);
  const sitemapRoutes = routes.filter((r) => r.includeInSitemap);

  const urlNodes = sitemapRoutes
    .map((r) => {
      const url = `${SITE_ORIGIN}${r.canonicalPath === '/' ? '/' : r.canonicalPath}`;
      return `  <url>
    <loc>${escapeHtml(url)}</loc>
    <xhtml:link rel="alternate" hreflang="nb" href="${escapeHtml(url)}" />
    <xhtml:link rel="alternate" hreflang="en" href="${escapeHtml(url)}?lang=en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeHtml(url)}" />
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.sitemapChangefreq || 'monthly'}</changefreq>
    <priority>${r.sitemapPriority || '0.8'}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlNodes}
</urlset>
`;
}

function main() {
  const distIndexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(distIndexPath)) {
    throw new Error(`Missing built dist/index.html at ${distIndexPath}`);
  }

  const baseTemplate = fs.readFileSync(distIndexPath, 'utf8');
  const routes = collectRoutes();

  for (const route of routes) {
    const rendered = renderHtmlForRoute(baseTemplate, route);
    if (route.routePath === '/') {
      fs.writeFileSync(distIndexPath, rendered, 'utf8');
    } else {
      const cleanRel = route.routePath.replace(/^\/+/, '');
      const targetDir = path.join(DIST_DIR, cleanRel);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, 'index.html'), rendered, 'utf8');
    }
  }

  // Generate noindex 404.html fallback for static hosts
  const notFoundHtml = renderHtmlForRoute(baseTemplate, {
    routePath: '/404',
    canonicalPath: '/404',
    title: 'Side ikke funnet (404) | Geton',
    description: 'Siden du lette etter ble ikke funnet på getontechs.com.',
    eyebrow: '404 · SIDE IKKE FUNNET',
    h1: 'Siden ble ikke funnet',
    lead: 'Siden du prøvde å åpne finnes ikke eller har blitt flyttet. Gå tilbake til forsiden eller utforsk tjenestene våre.',
    noindex: true,
    sections: [
      {
        heading: 'Forside',
        text: 'Tilbake til hovedsiden for Geton AS.',
        href: '/',
        linkLabel: 'Gå til forsiden',
      },
      {
        heading: 'Våre tjenester',
        text: 'Se alle tjenester innen web, apper, systemutvikling og AI.',
        href: '/tjenester',
        linkLabel: 'Se tjenester',
      },
    ],
  });
  fs.writeFileSync(path.join(DIST_DIR, '404.html'), notFoundHtml, 'utf8');

  // Generate multilingual sitemap.xml in both dist/ and public/
  const sitemapXml = generateMultilingualSitemap(routes);
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(PUBLIC_SITEMAP_PATH, sitemapXml, 'utf8');

  console.log(
    `[prerender-seo] Pre-rendered ${routes.length} static route HTML files + 404.html + multilingual sitemap.xml (${routes.filter((r) => r.includeInSitemap).length} indexed URLs).`
  );
}

main();
