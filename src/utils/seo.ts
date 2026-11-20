// Dynamic Metadata, Canonical URL, Hreflang, OpenGraph, Twitter/X & JSON-LD Structured Data Manager

export interface SEOConfig {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
  ogType?: 'website' | 'article';
  ogImage?: string;
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
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

const SITE_ORIGIN = 'https://getontechs.com';
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/assets/images/about_geton_studio_1793711805670.webp`;

function setOrCreateMeta(attrName: 'name' | 'property', attrValue: string, content: string): void {
  let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attrName, attrValue);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function setOrCreateCanonical(href: string): void {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}

function setOrRemoveHreflangLinks(baseUrl: string, disabled?: boolean): void {
  const existing = document.querySelectorAll('link[rel="alternate"][data-seo-hreflang="true"]');
  existing.forEach((node) => node.remove());

  if (disabled) return;

  const entries: { hreflang: string; href: string }[] = [
    { hreflang: 'nb', href: baseUrl },
    { hreflang: 'en', href: `${baseUrl}?lang=en` },
    { hreflang: 'x-default', href: baseUrl },
  ];

  for (const entry of entries) {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = entry.hreflang;
    link.href = entry.href;
    link.setAttribute('data-seo-hreflang', 'true');
    document.head.appendChild(link);
  }
}

export function applyRouteSEO(config: SEOConfig, language: 'no' | 'en'): void {
  if (typeof document === 'undefined') return;

  const cleanPath = config.canonicalPath.startsWith('/')
    ? config.canonicalPath
    : `/${config.canonicalPath}`;
  const baseRouteUrl = `${SITE_ORIGIN}${cleanPath === '/' ? '/' : cleanPath}`;

  // Self-referencing canonical respects explicit ?lang=en query if requested
  const urlSearch =
    typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const isExplicitEnglishUrl = urlSearch?.get('lang')?.toLowerCase() === 'en';
  const canonicalUrl = isExplicitEnglishUrl ? `${baseRouteUrl}?lang=en` : baseRouteUrl;

  const ogImageUrl = config.ogImage
    ? config.ogImage.startsWith('http')
      ? config.ogImage
      : `${SITE_ORIGIN}${config.ogImage}`
    : DEFAULT_OG_IMAGE;

  // Title & Document lang
  document.title = config.title;
  document.documentElement.lang = language === 'no' ? 'nb' : 'en';

  // Core Meta
  setOrCreateMeta('name', 'description', config.description);
  setOrCreateMeta('name', 'robots', config.noindex ? 'noindex, nofollow' : 'index, follow');

  // Optional Google Search Console HTML Verification Meta Tag
  const gscToken = (
    import.meta.env?.VITE_GOOGLE_SITE_VERIFICATION as string | undefined
  )?.trim();
  if (
    gscToken &&
    !gscToken.startsWith('MY_') &&
    !gscToken.includes('YOUR_') &&
    gscToken !== 'REPLACE_ME'
  ) {
    setOrCreateMeta('name', 'google-site-verification', gscToken);
  }

  // Canonical + Hreflang alternates
  setOrCreateCanonical(canonicalUrl);
  setOrRemoveHreflangLinks(baseRouteUrl, config.noindex);

  // OpenGraph
  setOrCreateMeta('property', 'og:type', config.ogType || 'website');
  setOrCreateMeta('property', 'og:site_name', 'Geton AS');
  setOrCreateMeta('property', 'og:title', config.title);
  setOrCreateMeta('property', 'og:description', config.description);
  setOrCreateMeta('property', 'og:url', canonicalUrl);
  setOrCreateMeta('property', 'og:locale', language === 'no' ? 'nb_NO' : 'en_US');
  setOrCreateMeta(
    'property',
    'og:locale:alternate',
    language === 'no' ? 'en_US' : 'nb_NO'
  );
  setOrCreateMeta('property', 'og:image', ogImageUrl);

  // Twitter / X
  setOrCreateMeta('name', 'twitter:card', 'summary_large_image');
  setOrCreateMeta('name', 'twitter:title', config.title);
  setOrCreateMeta('name', 'twitter:description', config.description);
  setOrCreateMeta('name', 'twitter:image', ogImageUrl);

  // Build verified Schema.org JSON-LD graph targeting key sitelinks
  const navLinks = [
    {
      name: language === 'no' ? 'Forside' : 'Home',
      url: `${SITE_ORIGIN}/`,
    },
    {
      name: language === 'no' ? 'Våre tjenester' : 'Our Services',
      url: `${SITE_ORIGIN}/tjenester`,
    },
    {
      name: language === 'no' ? 'Prosjekter' : 'Our Projects',
      url: `${SITE_ORIGIN}/prosjekter`,
    },
    {
      name: language === 'no' ? 'Om oss' : 'About Us',
      url: `${SITE_ORIGIN}/om-oss`,
    },
    {
      name: language === 'no' ? 'Insights & Artikler' : 'Insights',
      url: `${SITE_ORIGIN}/artikler`,
    },
    {
      name: language === 'no' ? 'Support & Drift' : 'Support',
      url: `${SITE_ORIGIN}/tjenester/vedlikehold-og-support`,
    },
    {
      name: language === 'no' ? 'Ta kontakt' : 'Contact Us',
      url: `${SITE_ORIGIN}/kontakt`,
    },
  ];

  const orgEntity: Record<string, unknown> = {
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
      language === 'no'
        ? 'Norsk teknologiselskap i Straume ved Bergen som utvikler skreddersydde nettsider, mobilapper, webapplikasjoner, sky-løsninger og programvare.'
        : 'Norwegian software engineering company near Bergen specializing in custom websites, mobile apps, web applications, cloud solutions, and software architecture.',
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
        opens: '08:30',
        closes: '16:30',
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
    knowsAbout: [
      'Programvareutvikling',
      'Systemutvikling',
      'Webutvikling',
      'Mobilapputvikling',
      'Kunstig intelligens',
      'Skyarkitektur',
      'API-integrasjoner',
      'Teknisk SEO',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'no' ? 'Digitale tjenester fra Geton AS' : 'Geton AS Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: language === 'no' ? 'Nettsideutvikling' : 'Website Development',
            url: `${SITE_ORIGIN}/tjenester/nettsideutvikling`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: language === 'no' ? 'Mobilapputvikling' : 'Mobile App Development',
            url: `${SITE_ORIGIN}/tjenester/mobilapputvikling`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name:
              language === 'no'
                ? 'Webapplikasjoner og systemutvikling'
                : 'Web Applications & Custom Systems',
            url: `${SITE_ORIGIN}/tjenester/webapplikasjoner-og-systemutvikling`,
          },
        },
      ],
    },
  };

  // Attach verified Google Business rating ONLY when provided from official Google Places data
  if (
    config.aggregateRating &&
    config.aggregateRating.ratingValue > 0 &&
    config.aggregateRating.reviewCount > 0
  ) {
    orgEntity.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: Number(config.aggregateRating.ratingValue.toFixed(1)),
      reviewCount: Math.round(config.aggregateRating.reviewCount),
      bestRating: 5,
      worstRating: 1,
    };
  }

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
      name: language === 'no' ? 'Hovednavigasjon' : 'Main Navigation',
      itemListElement: navLinks.map((item, idx) => ({
        '@type': 'SiteNavigationElement',
        position: idx + 1,
        name: item.name,
        url: item.url,
      })),
    },
  ];

  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: config.breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: `${SITE_ORIGIN}${crumb.path}`,
      })),
    });
  }

  if (config.serviceSchema) {
    graph.push({
      '@type': 'Service',
      name: config.serviceSchema.name,
      description: config.serviceSchema.description,
      serviceType: config.serviceSchema.serviceType,
      url: `${SITE_ORIGIN}${config.serviceSchema.urlPath}`,
      provider: { '@id': `${SITE_ORIGIN}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'Bergen' },
        { '@type': 'AdministrativeArea', name: 'Øygarden' },
        { '@type': 'AdministrativeArea', name: 'Vestland' },
        { '@type': 'Country', name: 'Norway' },
      ],
    });
  }

  if (config.faqSchema && config.faqSchema.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: config.faqSchema.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  if (config.articleSchema) {
    graph.push({
      '@type': 'Article',
      headline: config.articleSchema.headline,
      description: config.articleSchema.description,
      image: config.articleSchema.imagePath.startsWith('http')
        ? config.articleSchema.imagePath
        : `${SITE_ORIGIN}${config.articleSchema.imagePath}`,
      author: {
        '@type': 'Person',
        name: config.articleSchema.authorName,
      },
      publisher: { '@id': `${SITE_ORIGIN}/#organization` },
      mainEntityOfPage: `${SITE_ORIGIN}${config.articleSchema.urlPath}`,
    });
  }

  let jsonLdScript = document.getElementById('dynamic-jsonld') as HTMLScriptElement | null;
  if (!jsonLdScript) {
    jsonLdScript = document.createElement('script');
    jsonLdScript.id = 'dynamic-jsonld';
    jsonLdScript.type = 'application/ld+json';
    document.head.appendChild(jsonLdScript);
  }
  jsonLdScript.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  });
}
