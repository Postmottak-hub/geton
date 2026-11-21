/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect, useCallback, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroCard, ServiceItemData } from './components/HeroCard.tsx';
import { FloatingBadge } from './components/FloatingBadge.tsx';
import { ScrollIndicator } from './components/ScrollIndicator.tsx';
import { Footer } from './components/Footer.tsx';
import { ConsentBanner } from './components/ConsentBanner.tsx';
import { ScrollToTopButton } from './components/ScrollToTopButton.tsx';
import {
  ShowreelModal,
  ServiceDetailModal,
  ProjectInquiryModal,
  PortfolioModal,
} from './components/Modals.tsx';
import { ARTICLES } from './data/articles.ts';
import { SERVICE_PAGES, ServiceSlug } from './data/services.ts';
import { CAPABILITY_PAGES, CapabilitySlug } from './data/capabilities.ts';
import { useLanguage } from './context/LanguageContext.tsx';
import { useTheme } from './context/ThemeContext.tsx';
import { applyRouteSEO } from './utils/seo.ts';

// Lazy-loaded below-the-fold homepage sections & interactive game modal for faster initial load
const HomeServicesSection = lazy(() =>
  import('./components/HomeServicesSection.tsx').then((m) => ({
    default: m.HomeServicesSection,
  }))
);
const SoftwareShowcaseSection = lazy(() =>
  import('./components/SoftwareShowcaseSection.tsx').then((m) => ({
    default: m.SoftwareShowcaseSection,
  }))
);
const PricingPackagesSection = lazy(() =>
  import('./components/PricingPackagesSection.tsx').then((m) => ({
    default: m.PricingPackagesSection,
  }))
);
const DigitalSolutionsSection = lazy(() =>
  import('./components/DigitalSolutionsSection.tsx').then((m) => ({
    default: m.DigitalSolutionsSection,
  }))
);
const ProcessRouteSection = lazy(() =>
  import('./components/ProcessRouteSection.tsx').then((m) => ({
    default: m.ProcessRouteSection,
  }))
);
const ProjectsShowcaseSection = lazy(() =>
  import('./components/ProjectsShowcaseSection.tsx').then((m) => ({
    default: m.ProjectsShowcaseSection,
  }))
);
const HomeInsightsSection = lazy(() =>
  import('./components/HomeInsightsSection.tsx').then((m) => ({
    default: m.HomeInsightsSection,
  }))
);
const HomeContactSection = lazy(() =>
  import('./components/HomeContactSection.tsx').then((m) => ({
    default: m.HomeContactSection,
  }))
);
const GetonJumpGameModal = lazy(() =>
  import('./components/GetonJumpGameModal.tsx').then((m) => ({
    default: m.GetonJumpGameModal,
  }))
);

const Frakt360CaseStudyPage = lazy(() =>
  import('./pages/Frakt360CaseStudyPage.tsx').then((m) => ({ default: m.Frakt360CaseStudyPage }))
);
const SwalletCaseStudyPage = lazy(() =>
  import('./pages/SwalletCaseStudyPage.tsx').then((m) => ({ default: m.SwalletCaseStudyPage }))
);
const HentliCaseStudyPage = lazy(() =>
  import('./pages/HentliCaseStudyPage.tsx').then((m) => ({ default: m.HentliCaseStudyPage }))
);
const VestlandskHjertesenterCaseStudyPage = lazy(() =>
  import('./pages/VestlandskHjertesenterCaseStudyPage.tsx').then((m) => ({
    default: m.VestlandskHjertesenterCaseStudyPage,
  }))
);
const GetonScootersCaseStudyPage = lazy(() =>
  import('./pages/GetonScootersCaseStudyPage.tsx').then((m) => ({
    default: m.GetonScootersCaseStudyPage,
  }))
);
const NorraqStyleCaseStudyPage = lazy(() =>
  import('./pages/NorraqStyleCaseStudyPage.tsx').then((m) => ({
    default: m.NorraqStyleCaseStudyPage,
  }))
);
const AboutPage = lazy(() => import('./pages/AboutPage.tsx').then((m) => ({ default: m.AboutPage })));
const InsightsPage = lazy(() =>
  import('./pages/InsightsPage.tsx').then((m) => ({ default: m.InsightsPage }))
);
const ArticleDetailPage = lazy(() =>
  import('./pages/ArticleDetailPage.tsx').then((m) => ({ default: m.ArticleDetailPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage.tsx').then((m) => ({ default: m.ContactPage }))
);
const ServicePage = lazy(() =>
  import('./pages/ServicePage.tsx').then((m) => ({ default: m.ServicePage }))
);
const CapabilityPage = lazy(() =>
  import('./pages/CapabilityPage.tsx').then((m) => ({ default: m.CapabilityPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage.tsx').then((m) => ({ default: m.NotFoundPage }))
);

const VIDEO_URL =
  'https://res.cloudinary.com/dl7lmhbg/video/upload/v1793281647/b_generate_a_video_and.mp4';

type PageView =
  | 'home'
  | 'services-hub'
  | 'projects-hub'
  | 'service'
  | 'capability'
  | 'frakt360'
  | 'swallet'
  | 'hentli'
  | 'vestlandsk-hjertesenter'
  | 'geton-scooters'
  | 'norraq-style'
  | 'about'
  | 'insights'
  | 'article'
  | 'contact'
  | 'not-found';

interface ParsedRoute {
  view: PageView;
  tab: string;
  serviceSlug?: ServiceSlug;
  capabilitySlug?: CapabilitySlug;
  articleId?: string;
  normalizedPath?: string;
  scrollTarget?: string;
}

function parseLocation(pathname: string, hash: string): ParsedRoute {
  const cleanHash = hash.toLowerCase();

  // Normalize legacy hash URLs to clean canonical pathnames
  if (cleanHash === '#/case-study/frakt360' || cleanHash === '#/prosjekt/frakt360' || cleanHash === '#frakt360') {
    return { view: 'frakt360', tab: 'projects', normalizedPath: '/prosjekter/frakt360' };
  }
  if (cleanHash === '#/case-study/swallet' || cleanHash === '#/prosjekt/swallet' || cleanHash === '#swallet') {
    return { view: 'swallet', tab: 'projects', normalizedPath: '/prosjekter/swallet' };
  }
  if (cleanHash === '#/case-study/hentli' || cleanHash === '#/prosjekt/hentli' || cleanHash === '#hentli') {
    return { view: 'hentli', tab: 'projects', normalizedPath: '/prosjekter/hentli' };
  }
  if (
    cleanHash === '#/case-study/vestlandsk-hjertesenter' ||
    cleanHash === '#/prosjekt/vestlandsk-hjertesenter' ||
    cleanHash === '#vestlandsk-hjertesenter' ||
    cleanHash === '#vestlandsk'
  ) {
    return { view: 'vestlandsk-hjertesenter', tab: 'projects', normalizedPath: '/prosjekter/vestlandsk-hjertesenter' };
  }
  if (cleanHash === '#about' || cleanHash === '#/about' || cleanHash === '#om-oss' || cleanHash === '#/om-oss') {
    return { view: 'about', tab: 'about', normalizedPath: '/om-oss' };
  }
  if (
    cleanHash === '#insights' ||
    cleanHash === '#/insights' ||
    cleanHash === '#blogs' ||
    cleanHash === '#/blogs' ||
    cleanHash === '#innsikt' ||
    cleanHash === '#/innsikt'
  ) {
    return { view: 'insights', tab: 'blogs', normalizedPath: '/artikler' };
  }
  if (cleanHash.startsWith('#/article/')) {
    const id = hash.slice('#/article/'.length).trim();
    if (id) {
      return { view: 'article', tab: 'blogs', articleId: id, normalizedPath: `/artikler/${id}` };
    }
  }
  if (cleanHash === '#contact' || cleanHash === '#/contact' || cleanHash === '#kontakt' || cleanHash === '#/kontakt') {
    return { view: 'contact', tab: 'contact', normalizedPath: '/kontakt' };
  }

  // Clean pathname matching
  const path = pathname.replace(/\/+$/, '') || '/';

  if (path === '/' || path === '/index.html') {
    const scrollTarget =
      cleanHash === '#pricing-packages' || cleanHash === '#services'
        ? 'pricing-packages'
        : cleanHash === '#projects'
        ? 'projects'
        : cleanHash === '#software-systems'
        ? 'software-systems'
        : undefined;
    return { view: 'home', tab: 'home', scrollTarget };
  }

  if (path === '/tjenester' || path === '/services') {
    return {
      view: 'services-hub',
      tab: 'services',
      normalizedPath: path === '/services' ? '/tjenester' : undefined,
    };
  }

  if (path === '/support') {
    return {
      view: 'service',
      tab: 'services',
      serviceSlug: 'vedlikehold-og-support',
      normalizedPath: '/tjenester/vedlikehold-og-support',
    };
  }

  if (path.startsWith('/tjenester/')) {
    const slug = path.replace('/tjenester/', '') as ServiceSlug;
    if (slug in SERVICE_PAGES) {
      return { view: 'service', tab: 'services', serviceSlug: slug };
    }
    return { view: 'not-found', tab: 'home' };
  }

  if (path === '/prosjekter' || path === '/projects' || path === '/kundecaser') {
    return {
      view: 'projects-hub',
      tab: 'projects',
      normalizedPath: path !== '/prosjekter' ? '/prosjekter' : undefined,
    };
  }

  if (path.startsWith('/arbeidsmate/') || path.startsWith('/kapabiliteter/')) {
    const slug = path
      .replace('/arbeidsmate/', '')
      .replace('/kapabiliteter/', '') as CapabilitySlug;
    if (slug in CAPABILITY_PAGES) {
      return {
        view: 'capability',
        tab: 'about',
        capabilitySlug: slug,
        normalizedPath: path.startsWith('/kapabiliteter/') ? `/arbeidsmate/${slug}` : undefined,
      };
    }
    return { view: 'not-found', tab: 'home' };
  }

  if (path === '/prosjekter/frakt360') return { view: 'frakt360', tab: 'projects' };
  if (path === '/prosjekter/swallet') return { view: 'swallet', tab: 'projects' };
  if (path === '/prosjekter/hentli') return { view: 'hentli', tab: 'projects' };
  if (path === '/prosjekter/vestlandsk-hjertesenter') {
    return { view: 'vestlandsk-hjertesenter', tab: 'projects' };
  }
  if (path === '/prosjekter/geton-scooters') {
    return { view: 'geton-scooters', tab: 'projects' };
  }
  if (path === '/prosjekter/norraq-style') {
    return { view: 'norraq-style', tab: 'projects' };
  }

  if (path === '/om-oss' || path === '/about') {
    return {
      view: 'about',
      tab: 'about',
      normalizedPath: path === '/about' ? '/om-oss' : undefined,
    };
  }

  if (path === '/artikler' || path === '/insights') {
    return {
      view: 'insights',
      tab: 'blogs',
      normalizedPath: path === '/insights' ? '/artikler' : undefined,
    };
  }

  if (path.startsWith('/artikler/')) {
    const id = path.replace('/artikler/', '').trim();
    const exists = ARTICLES.some((a) => a.id === id);
    if (exists) {
      return { view: 'article', tab: 'blogs', articleId: id };
    }
    return { view: 'not-found', tab: 'home' };
  }

  if (path === '/kontakt' || path === '/contact') {
    return {
      view: 'contact',
      tab: 'contact',
      normalizedPath: path === '/contact' ? '/kontakt' : undefined,
    };
  }

  return { view: 'not-found', tab: 'home' };
}

export default function App() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeTab, setActiveTab] = useState('home');
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [activeServiceSlug, setActiveServiceSlug] = useState<ServiceSlug>('nettsideutvikling');
  const [activeCapabilitySlug, setActiveCapabilitySlug] = useState<CapabilitySlug>(
    'tverrfaglig-utvikling'
  );
  const [activeArticleId, setActiveArticleId] = useState<string>('ai-agents-in-production');
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedPricingPackage, setSelectedPricingPackage] = useState<string | null>(null);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isGetonGameOpen, setIsGetonGameOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItemData | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  const openInquiry = useCallback((packageName: string | null = null) => {
    setSelectedPricingPackage(packageName);
    setIsInquiryOpen(true);
  }, []);

  const syncFromUrl = useCallback(() => {
    const parsed = parseLocation(window.location.pathname, window.location.hash);

    if (parsed.normalizedPath) {
      window.history.replaceState(null, '', parsed.normalizedPath);
    }

    setCurrentView(parsed.view);
    setActiveTab(parsed.tab);
    if (parsed.serviceSlug) setActiveServiceSlug(parsed.serviceSlug);
    if (parsed.capabilitySlug) setActiveCapabilitySlug(parsed.capabilitySlug);
    if (parsed.articleId) setActiveArticleId(parsed.articleId);

    if (parsed.scrollTarget) {
      setTimeout(() => {
        const el = document.getElementById(parsed.scrollTarget!);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (parsed.view !== 'home') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  // Autoplay background video cleanly
  useEffect(() => {
    if (currentView !== 'home') return;
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // Fallback silently to poster/gradient if autoplay blocked
      }
    };

    playVideo();
  }, [currentView]);

  // History API + legacy hash routing synchronization
  useEffect(() => {
    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    window.addEventListener('hashchange', syncFromUrl);
    return () => {
      window.removeEventListener('popstate', syncFromUrl);
      window.removeEventListener('hashchange', syncFromUrl);
    };
  }, [syncFromUrl]);

  // Dynamic Route Metadata & Schema.org JSON-LD
  useEffect(() => {
    if (currentView === 'services-hub') {
      applyRouteSEO(
        {
          title:
            language === 'no'
              ? 'Våre tjenester | Nettsider, Mobilapper, Systemutvikling & AI | Geton'
              : 'Our Services | Websites, Mobile Apps, Custom Software & AI | Geton',
          description:
            language === 'no'
              ? 'Utforsk alle 12 tjenesteområder fra Geton AS: nettsideutvikling, mobilapper, skreddersydde systemer, sky, AI-automasjon, design og vedlikehold.'
              : 'Explore all 12 digital engineering services from Geton AS: websites, mobile apps, custom software, cloud infrastructure, AI automation, and 24/7 support.',
          canonicalPath: '/tjenester',
          breadcrumbs: [
            { name: language === 'no' ? 'Forside' : 'Home', path: '/' },
            { name: language === 'no' ? 'Våre tjenester' : 'Our Services', path: '/tjenester' },
          ],
        },
        language
      );
    } else if (currentView === 'projects-hub') {
      applyRouteSEO(
        {
          title:
            language === 'no'
              ? 'Prosjekter & Kundecaser | Frakt360, Swallet, Hentli | Geton'
              : 'Projects & Case Studies | Frakt360, Swallet, Hentli | Geton',
          description:
            language === 'no'
              ? 'Se utvalgte prosjekter og kundecaser utviklet av Geton AS – Frakt360, Swallet, Hentli og Vestlandsk Hjertesenter.'
              : 'Explore selected software platforms and case studies engineered by Geton AS: Frakt360, Swallet, Hentli, and Vestlandsk Hjertesenter.',
          canonicalPath: '/prosjekter',
          breadcrumbs: [
            { name: language === 'no' ? 'Forside' : 'Home', path: '/' },
            { name: language === 'no' ? 'Prosjekter' : 'Projects', path: '/prosjekter' },
          ],
        },
        language
      );
    } else if (currentView === 'home') {
      applyRouteSEO(
        {
          title:
            language === 'no'
              ? 'Nettsider, Apper og Systemutvikling | Geton'
              : 'Websites, Mobile Apps & System Development | Geton',
          description:
            language === 'no'
              ? 'Geton utvikler moderne nettsider, mobilapper og skreddersydde webapplikasjoner. Fra idé til lansering. Kontakt oss for et uforpliktende tilbud.'
              : 'Geton engineers modern websites, mobile apps, and bespoke web applications from idea to launch. Contact us for a non-binding quote.',
          canonicalPath: '/',
        },
        language
      );
    } else if (currentView === 'service') {
      const svc = SERVICE_PAGES[activeServiceSlug];
      applyRouteSEO(
        {
          title: language === 'no' ? svc.seoTitleNo : svc.seoTitleEn,
          description: language === 'no' ? svc.seoDescNo : svc.seoDescEn,
          canonicalPath: svc.routePath,
          ogImage: svc.heroImage.src,
          breadcrumbs: [
            { name: language === 'no' ? 'Forside' : 'Home', path: '/' },
            { name: language === 'no' ? 'Våre tjenester' : 'Services', path: '/tjenester' },
            {
              name: language === 'no' ? svc.h1No : svc.h1En,
              path: svc.routePath,
            },
          ],
          serviceSchema: {
            name: language === 'no' ? svc.h1No : svc.h1En,
            description: language === 'no' ? svc.seoDescNo : svc.seoDescEn,
            serviceType: language === 'no' ? svc.eyebrowNo : svc.eyebrowEn,
            urlPath: svc.routePath,
          },
          faqSchema: svc.faqs.map((f) => ({
            question: language === 'no' ? f.questionNo : f.questionEn,
            answer: language === 'no' ? f.answerNo : f.answerEn,
          })),
        },
        language
      );
    } else if (currentView === 'capability') {
      const cap = CAPABILITY_PAGES[activeCapabilitySlug];
      applyRouteSEO(
        {
          title: language === 'no' ? cap.seoTitleNo : cap.seoTitleEn,
          description: language === 'no' ? cap.seoDescNo : cap.seoDescEn,
          canonicalPath: cap.routePath,
          ogImage: cap.heroImage,
          breadcrumbs: [
            { name: language === 'no' ? 'Forside' : 'Home', path: '/' },
            { name: language === 'no' ? 'Om oss' : 'About Us', path: '/om-oss' },
            { name: language === 'no' ? cap.titleNo : cap.titleEn, path: cap.routePath },
          ],
          serviceSchema: {
            name: language === 'no' ? cap.titleNo : cap.titleEn,
            description: language === 'no' ? cap.seoDescNo : cap.seoDescEn,
            serviceType: language === 'no' ? cap.tagNo : cap.tagEn,
            urlPath: cap.routePath,
          },
        },
        language
      );
    } else if (currentView === 'frakt360') {
      applyRouteSEO(
        {
          title: 'Frakt360 – Logistikkplattform & Case Study | Geton',
          description:
            language === 'no'
              ? 'Hvordan Geton AS utviklet Frakt360 – en komplett norsk fraktplattform med integrasjon mot Bring, PostNord og nettbutikker.'
              : 'How Geton AS engineered Frakt360 – a Norwegian digital shipping platform integrating Bring, PostNord, and e-commerce.',
          canonicalPath: '/prosjekter/frakt360',
          ogImage: '/assets/aistudio/Frakt360__Komplett_norsk_fraktplattform_6546bb91.webp',
          breadcrumbs: [
            { name: language === 'no' ? 'Forside' : 'Home', path: '/' },
            { name: 'Frakt360', path: '/prosjekter/frakt360' },
          ],
        },
        language
      );
    } else if (currentView === 'swallet') {
      applyRouteSEO(
        {
          title: 'Swallet – Fintech & Abonnementsplattform | Geton',
          description:
            language === 'no'
              ? 'Case study av Swallet: norsk fintech-plattform utviklet av Geton AS med Open Banking (PSD2) og BankID.'
              : 'Swallet case study: Norwegian fintech platform engineered by Geton AS featuring PSD2 Open Banking and BankID.',
          canonicalPath: '/prosjekter/swallet',
          ogImage: '/assets/aistudio/Swallet_Fintech_Case_Study_Showcase_302711d7.webp',
          breadcrumbs: [
            { name: language === 'no' ? 'Forside' : 'Home', path: '/' },
            { name: 'Swallet', path: '/prosjekter/swallet' },
          ],
        },
        language
      );
    } else if (currentView === 'hentli') {
      applyRouteSEO(
        {
          title: 'Hentli – Kartbasert Leveringsapp | Geton',
          description:
            language === 'no'
              ? 'Case study av Hentli: iOS- og Android-app med kartbasert matching mellom kunder og sjåfører i sanntid.'
              : 'Hentli case study: iOS and Android marketplace connecting local delivery demand with drivers on a live map.',
          canonicalPath: '/prosjekter/hentli',
          ogImage: '/assets/aistudio/Hentli__Two_Experiences__One_App_706526e8.png',
          breadcrumbs: [
            { name: language === 'no' ? 'Forside' : 'Home', path: '/' },
            { name: 'Hentli', path: '/prosjekter/hentli' },
          ],
        },
        language
      );
    } else if (currentView === 'vestlandsk-hjertesenter') {
      applyRouteSEO(
        {
          title: 'Vestlandsk Hjertesenter – Pasientportal & Nettside | Geton',
          description:
            language === 'no'
              ? 'Case study av Vestlandsk Hjertesenter i Bergen: moderne nettside, digital timebooking og lokal SEO utviklet av Geton AS.'
              : 'Vestlandsk Hjertesenter case study: specialist medical clinic web platform and online booking built by Geton AS.',
          canonicalPath: '/prosjekter/vestlandsk-hjertesenter',
          ogImage: '/assets/images/vestlandsk_hjertesenter_mockup_1793710496839.webp',
          breadcrumbs: [
            { name: language === 'no' ? 'Forside' : 'Home', path: '/' },
            { name: language === 'no' ? 'Prosjekter' : 'Projects', path: '/prosjekter' },
            { name: 'Vestlandsk Hjertesenter', path: '/prosjekter/vestlandsk-hjertesenter' },
          ],
        },
        language
      );
    } else if (currentView === 'geton-scooters') {
      applyRouteSEO(
        {
          title: 'Geton Scooters – IoT, MQTT og apputvikling | Geton AS',
          description:
            language === 'no'
              ? 'Se hvordan Geton AS utviklet en elsparkesykkelplattform med mobilapp for iOS og Android, kart, IoT, MQTT og geofencing – testet i drift på Sotra.'
              : 'How Geton AS built an e-scooter mobility platform featuring iOS & Android apps, geofencing maps, and MQTT IoT connectivity.',
          canonicalPath: '/prosjekter/geton-scooters',
          ogImage: '/assets/aistudio/Geton_Scooters_IoT_Mobility_Case_Study_84e80f94.png',
          breadcrumbs: [
            { name: language === 'no' ? 'Forside' : 'Home', path: '/' },
            { name: language === 'no' ? 'Prosjekter' : 'Projects', path: '/prosjekter' },
            { name: 'Geton Scooters', path: '/prosjekter/geton-scooters' },
          ],
        },
        language
      );
    } else if (currentView === 'norraq-style') {
      applyRouteSEO(
        {
          title: 'NORRAQ Style – Digital plattform for skjønnhetsbransjen | Geton AS',
          description:
            language === 'no'
              ? 'Se hvordan NORRAQ Style samler modeller, studenter, lærlinger og skjønnhetsaktører i én løsning med smart matching, booking og chat.'
              : 'How NORRAQ Style unifies models, beauty students, stylists, and clinics through smart matching, structured bookings, and private chat.',
          canonicalPath: '/prosjekter/norraq-style',
          ogImage: '/assets/aistudio/NORRAQ_Style__Fra_matching_til_booking_00b2d200.png',
          breadcrumbs: [
            { name: language === 'no' ? 'Forside' : 'Home', path: '/' },
            { name: language === 'no' ? 'Prosjekter' : 'Projects', path: '/prosjekter' },
            { name: 'NORRAQ Style', path: '/prosjekter/norraq-style' },
          ],
        },
        language
      );
    } else if (currentView === 'about') {
      applyRouteSEO(
        {
          title: language === 'no' ? 'Om Geton AS | Teknologipartner i Bergen og Straume' : 'About Geton AS | Technology Partner',
          description:
            language === 'no'
              ? 'Bli kjent med Geton AS – norskeid teknologiselskap etablert i 2020 som utvikler nettsider, mobilapper og skreddersydd programvare.'
              : 'Meet Geton AS – Norwegian technology company founded in 2020 building websites, mobile apps, and custom software.',
          canonicalPath: '/om-oss',
          breadcrumbs: [
            { name: language === 'no' ? 'Forside' : 'Home', path: '/' },
            { name: language === 'no' ? 'Om oss' : 'About Us', path: '/om-oss' },
          ],
        },
        language
      );
    } else if (currentView === 'insights') {
      applyRouteSEO(
        {
          title: language === 'no' ? 'Teknologiske innsikter & fagartikler | Geton' : 'Engineering Insights & Articles | Geton',
          description:
            language === 'no'
              ? 'Fagartikler om systemarkitektur, kunstig intelligens, moderne webutvikling, mobilapper og sikkerhet fra Geton AS.'
              : 'Engineering perspectives on software architecture, AI workflows, modern web performance, mobile apps, and security.',
          canonicalPath: '/artikler',
          breadcrumbs: [
            { name: language === 'no' ? 'Forside' : 'Home', path: '/' },
            { name: language === 'no' ? 'Artikler' : 'Insights', path: '/artikler' },
          ],
        },
        language
      );
    } else if (currentView === 'article') {
      const article = ARTICLES.find((a) => a.id === activeArticleId) || ARTICLES[0];
      const title = language === 'no' ? article.titleNo : article.titleEn;
      const excerpt = language === 'no' ? article.excerptNo : article.excerptEn;
      applyRouteSEO(
        {
          title: `${title} | Geton`,
          description: excerpt.slice(0, 158),
          canonicalPath: `/artikler/${article.id}`,
          ogType: 'article',
          ogImage: article.imageSrc,
          breadcrumbs: [
            { name: language === 'no' ? 'Forside' : 'Home', path: '/' },
            { name: language === 'no' ? 'Artikler' : 'Insights', path: '/artikler' },
            { name: title, path: `/artikler/${article.id}` },
          ],
          articleSchema: {
            headline: title,
            description: excerpt,
            authorName: article.author,
            imagePath: article.imageSrc,
            urlPath: `/artikler/${article.id}`,
          },
        },
        language
      );
    } else if (currentView === 'contact') {
      applyRouteSEO(
        {
          title:
            language === 'no'
              ? 'Kontakt Geton AS | Nettsider, Apper & Systemutvikling i Straume / Bergen'
              : 'Contact Geton AS | Straume / Bergen, Norway',
          description:
            language === 'no'
              ? 'Ta kontakt med Geton AS på Trollhaugmyra 15, 5353 Straume. Ring +47 405 84 817 eller send en forespørsel til contact@getontechs.com.'
              : 'Contact Geton AS at Trollhaugmyra 15, 5353 Straume, Norway. Call +47 405 84 817 or email contact@getontechs.com.',
          canonicalPath: '/kontakt',
          breadcrumbs: [
            { name: language === 'no' ? 'Forside' : 'Home', path: '/' },
            { name: language === 'no' ? 'Kontakt' : 'Contact', path: '/kontakt' },
          ],
        },
        language
      );
    } else if (currentView === 'not-found') {
      applyRouteSEO(
        {
          title: language === 'no' ? 'Side ikke funnet (404) | Geton' : 'Page Not Found (404) | Geton',
          description:
            language === 'no'
              ? 'Siden du lette etter ble ikke funnet på getontechs.com.'
              : 'The page you requested could not be found on getontechs.com.',
          canonicalPath: window.location.pathname || '/404',
          noindex: true,
        },
        language
      );
    }
  }, [currentView, activeServiceSlug, activeCapabilitySlug, activeArticleId, language]);

  const navigateToPath = (path: string, view: PageView, tab: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    setCurrentView(view);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateToService = (slug: ServiceSlug) => {
    setActiveServiceSlug(slug);
    navigateToPath(`/tjenester/${slug}`, 'service', 'services');
  };

  const navigateToCapability = (slug: CapabilitySlug) => {
    setActiveCapabilitySlug(slug);
    navigateToPath(`/arbeidsmate/${slug}`, 'capability', 'about');
  };

  const navigateToProject = (projectId: string) => {
    if (projectId === 'frakt360') {
      navigateToPath('/prosjekter/frakt360', 'frakt360', 'projects');
    } else if (projectId === 'swallet') {
      navigateToPath('/prosjekter/swallet', 'swallet', 'projects');
    } else if (projectId === 'hentli') {
      navigateToPath('/prosjekter/hentli', 'hentli', 'projects');
    } else if (projectId === 'vestlandsk-hjertesenter' || projectId === 'vestlandsk') {
      navigateToPath('/prosjekter/vestlandsk-hjertesenter', 'vestlandsk-hjertesenter', 'projects');
    } else if (projectId === 'geton-scooters') {
      navigateToPath('/prosjekter/geton-scooters', 'geton-scooters', 'projects');
    } else if (projectId === 'norraq-style') {
      navigateToPath('/prosjekter/norraq-style', 'norraq-style', 'projects');
    }
  };

  const navigateBackToHome = () => {
    if (window.location.pathname !== '/' || window.location.hash) {
      window.history.pushState(null, '', '/');
    }
    setCurrentView('home');
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToHomeSection = (sectionId: string, tab: string) => {
    setActiveTab(tab);
    if (currentView !== 'home') {
      window.history.pushState(null, '', `/#${sectionId}`);
      setCurrentView('home');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 90);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTabSelect = (tab: string) => {
    if (tab.startsWith('service:')) {
      const slug = tab.replace('service:', '') as ServiceSlug;
      if (slug in SERVICE_PAGES) {
        navigateToService(slug);
        return;
      }
    }

    if (tab === 'home') {
      navigateBackToHome();
    } else if (tab === 'about') {
      navigateToPath('/om-oss', 'about', 'about');
    } else if (tab === 'blogs' || tab === 'insights') {
      navigateToPath('/artikler', 'insights', 'blogs');
    } else if (tab === 'contact') {
      navigateToPath('/kontakt', 'contact', 'contact');
    } else if (tab === 'support') {
      navigateToService('vedlikehold-og-support');
    } else if (tab === 'services-page') {
      navigateToPath('/tjenester', 'services-hub', 'services');
    } else if (tab === 'projects-page') {
      navigateToPath('/prosjekter', 'projects-hub', 'projects');
    } else if (tab === 'services') {
      if (currentView === 'home') {
        scrollToHomeSection('services', 'services');
      } else {
        navigateToPath('/tjenester', 'services-hub', 'services');
      }
    } else if (tab === 'projects') {
      if (currentView === 'home') {
        scrollToHomeSection('projects', 'projects');
      } else {
        navigateToPath('/prosjekter', 'projects-hub', 'projects');
      }
    }
  };

  const handleScrollToExplore = () => {
    const section = document.getElementById('services');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderPage = () => {
    if (currentView === 'services-hub') {
      return (
        <div
          className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
            isLight ? 'bg-[#fafaf9] text-neutral-900' : 'bg-[#040816] text-white'
          }`}
        >
          <div
            className={`sticky top-0 z-50 w-full backdrop-blur-xl border-b ${
              isLight ? 'bg-[#fafaf9]/95 border-[#e7e7e5]' : 'bg-[#040816]/90 border-white/10'
            }`}
          >
            <Navbar
              activeTab="services"
              onSelectTab={handleTabSelect}
              onSelectServiceSlug={navigateToService}
              onGetStarted={() => openInquiry()}
            />
          </div>
          <main>
            <section
              className={`pt-12 pb-8 px-4 sm:px-8 lg:px-12 xl:px-16 border-b ${
                isLight ? 'bg-[#fafaf9] border-[#e7e7e5]' : 'bg-[#040816] border-white/10'
              }`}
            >
              <div className="max-w-[1440px] mx-auto">
                <span
                  className={`text-xs font-semibold tracking-[0.2em] uppercase block mb-3 ${
                    isLight ? 'text-sky-700' : 'text-cyan-300'
                  }`}
                >
                  {language === 'no' ? 'TJENESTEOVERSIKT · GETON AS' : 'SERVICE OVERVIEW · GETON AS'}
                </span>
                <h1
                  className={`text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-[1.15] [text-wrap:balance] max-w-4xl ${
                    isLight ? 'text-neutral-900' : 'text-white'
                  }`}
                >
                  {language === 'no'
                    ? 'Våre tjenester innen web, apper, systemer og AI'
                    : 'Our Services Across Web, Mobile Apps, Systems & AI'}
                </h1>
              </div>
            </section>
            <SoftwareShowcaseSection
              onScheduleReview={() => openInquiry('Webapplikasjoner og systemutvikling')}
              onNavigateToService={navigateToService}
            />
            <PricingPackagesSection
              onSelectPackage={(pkgName) => openInquiry(pkgName)}
              onNavigateToService={navigateToService}
            />
          </main>
          <Footer onSelectTab={handleTabSelect} onGetStarted={() => openInquiry()} />
        </div>
      );
    }

    if (currentView === 'projects-hub') {
      return (
        <div
          className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
            isLight ? 'bg-[#fafaf9] text-neutral-900' : 'bg-[#040816] text-white'
          }`}
        >
          <div
            className={`sticky top-0 z-50 w-full backdrop-blur-xl border-b ${
              isLight ? 'bg-[#fafaf9]/95 border-[#e7e7e5]' : 'bg-[#040816]/90 border-white/10'
            }`}
          >
            <Navbar
              activeTab="projects"
              onSelectTab={handleTabSelect}
              onSelectServiceSlug={navigateToService}
              onGetStarted={() => openInquiry()}
            />
          </div>
          <main>
            <section
              className={`pt-12 pb-8 px-4 sm:px-8 lg:px-12 xl:px-16 border-b ${
                isLight ? 'bg-[#fafaf9] border-[#e7e7e5]' : 'bg-[#040816] border-white/10'
              }`}
            >
              <div className="max-w-[1440px] mx-auto">
                <span
                  className={`text-xs font-semibold tracking-[0.2em] uppercase block mb-3 ${
                    isLight ? 'text-sky-700' : 'text-cyan-300'
                  }`}
                >
                  {language === 'no' ? 'KUNDECASER & PROSJEKTER' : 'PROJECTS & CASE STUDIES'}
                </span>
                <h1
                  className={`text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-[1.15] [text-wrap:balance] max-w-4xl ${
                    isLight ? 'text-neutral-900' : 'text-white'
                  }`}
                >
                  {language === 'no'
                    ? 'Utvalgte prosjekter levert av Geton AS'
                    : 'Selected Digital Platforms Engineered by Geton AS'}
                </h1>
              </div>
            </section>
            <ProjectsShowcaseSection
              onInspectProject={(project) => {
                if (project.isFullCaseStudy) {
                  navigateToProject(project.id);
                  return;
                }
                setSelectedService({
                  id: project.id,
                  title: `${project.title} — ${project.client}`,
                  subtitle: `${project.industry} · ${project.metrics}`,
                  description: project.description,
                  features: [
                    ...project.keyFeatures,
                    `Teknologistakk: ${project.techStack.join(', ')}`,
                  ],
                });
              }}
              onStartProject={() => openInquiry()}
            />
          </main>
          <Footer onSelectTab={handleTabSelect} onGetStarted={() => openInquiry()} />
        </div>
      );
    }

    if (currentView === 'service') {
      return (
        <ServicePage
          slug={activeServiceSlug}
          onBack={navigateBackToHome}
          onNavigateToService={navigateToService}
          onNavigateToTab={handleTabSelect}
          onStartProject={(serviceTitle) => openInquiry(serviceTitle)}
        />
      );
    }

    if (currentView === 'capability') {
      return (
        <CapabilityPage
          slug={activeCapabilitySlug}
          onBack={navigateBackToHome}
          onNavigateToCapability={navigateToCapability}
          onNavigateToService={navigateToService}
          onNavigateToTab={handleTabSelect}
          onStartProject={() => openInquiry()}
        />
      );
    }

    if (currentView === 'swallet') {
      return (
        <SwalletCaseStudyPage
          onBack={navigateBackToHome}
          onNavigateToProject={navigateToProject}
          onNavigateToTab={handleTabSelect}
          onNavigateToService={navigateToService}
          onStartProject={() => openInquiry()}
        />
      );
    }

    if (currentView === 'frakt360') {
      return (
        <Frakt360CaseStudyPage
          onBack={navigateBackToHome}
          onNavigateToProject={navigateToProject}
          onNavigateToTab={handleTabSelect}
          onNavigateToService={navigateToService}
          onStartProject={() => openInquiry()}
        />
      );
    }

    if (currentView === 'hentli') {
      return (
        <HentliCaseStudyPage
          onBack={navigateBackToHome}
          onNavigateToProject={navigateToProject}
          onNavigateToTab={handleTabSelect}
          onNavigateToService={navigateToService}
          onStartProject={() => openInquiry()}
        />
      );
    }

    if (currentView === 'vestlandsk-hjertesenter') {
      return (
        <VestlandskHjertesenterCaseStudyPage
          onBack={navigateBackToHome}
          onNavigateToProject={navigateToProject}
          onNavigateToTab={handleTabSelect}
          onNavigateToService={navigateToService}
          onStartProject={() => openInquiry()}
        />
      );
    }

    if (currentView === 'geton-scooters') {
      return (
        <GetonScootersCaseStudyPage
          onBack={navigateBackToHome}
          onNavigateToProject={navigateToProject}
          onNavigateToTab={handleTabSelect}
          onNavigateToService={navigateToService}
          onStartProject={() => openInquiry()}
        />
      );
    }

    if (currentView === 'norraq-style') {
      return (
        <NorraqStyleCaseStudyPage
          onBack={navigateBackToHome}
          onNavigateToProject={navigateToProject}
          onNavigateToTab={handleTabSelect}
          onNavigateToService={navigateToService}
          onStartProject={() => openInquiry()}
        />
      );
    }

    if (currentView === 'about') {
      return (
        <AboutPage
          onBack={navigateBackToHome}
          onNavigateToTab={handleTabSelect}
          onNavigateToService={navigateToService}
          onStartProject={() => openInquiry()}
        />
      );
    }

    if (currentView === 'insights') {
      return (
        <InsightsPage
          onBack={navigateBackToHome}
          onNavigateToTab={handleTabSelect}
          onNavigateToService={navigateToService}
          onStartProject={() => openInquiry()}
          onSelectArticle={(articleId) => {
            setActiveArticleId(articleId);
            navigateToPath(`/artikler/${articleId}`, 'article', 'blogs');
          }}
        />
      );
    }

    if (currentView === 'article') {
      const article = ARTICLES.find((a) => a.id === activeArticleId) || ARTICLES[0];
      return (
        <ArticleDetailPage
          article={article}
          onBack={() => navigateToPath('/artikler', 'insights', 'blogs')}
          onSelectArticle={(articleId) => {
            setActiveArticleId(articleId);
            navigateToPath(`/artikler/${articleId}`, 'article', 'blogs');
          }}
          onStartProject={() => navigateToPath('/kontakt', 'contact', 'contact')}
          onNavigateToTab={handleTabSelect}
          onNavigateToService={navigateToService}
        />
      );
    }

    if (currentView === 'contact') {
      return (
        <ContactPage
          onBack={navigateBackToHome}
          onNavigateToTab={handleTabSelect}
          onNavigateToService={navigateToService}
          onStartProject={() => openInquiry()}
        />
      );
    }

    if (currentView === 'not-found') {
      return (
        <NotFoundPage
          onBack={navigateBackToHome}
          onNavigateToTab={handleTabSelect}
          onNavigateToService={navigateToService}
          onStartProject={() => openInquiry()}
        />
      );
    }

    return (
      <div
        className={`w-full relative min-h-screen overflow-x-hidden transition-colors duration-300 ${
          isLight
            ? 'bg-[#fafaf9] text-neutral-900 selection:bg-sky-600 selection:text-white'
            : 'bg-[#040714] text-white selection:bg-cyan-500 selection:text-black'
        }`}
      >
        {/* 1. HERO SECTION (Atmospheric Video Canvas + Product Visuals) */}
        <div
          id="hero-section"
          className="min-h-[92dvh] lg:min-h-[100dvh] w-full relative flex flex-col justify-between overflow-x-hidden select-none bg-gradient-to-b from-[#060b1e] via-[#050d26] to-[#060e28] text-white"
        >
          {/* Full-bleed Video Background Layer */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <video
              ref={videoRef}
              src={VIDEO_URL}
              poster="/assets/images/about_geton_studio_1793711805670.webp"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              crossOrigin="anonymous"
              className="w-full h-full object-cover min-w-full min-h-full opacity-100"
            >
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[#040816]/45" />
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-t from-[#040816] via-[#040816]/65 to-transparent pointer-events-none z-10"
          />

          {/* TOP NAVIGATION BAR */}
          <div className="relative z-30">
            <Navbar
              activeTab={activeTab}
              onSelectTab={handleTabSelect}
              onSelectServiceSlug={navigateToService}
              onGetStarted={() => openInquiry()}
              forceDarkSurface
            />
          </div>

          {/* MAIN HERO CONTENT AREA */}
          <main className="relative z-20 flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-center items-start py-6 sm:py-8 lg:py-12">
            <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
              <div className="w-full lg:max-w-2xl flex justify-start animate-in fade-in slide-in-from-left-6 duration-700">
                <HeroCard
                  onStartProject={() => openInquiry()}
                  onExploreServices={() => scrollToHomeSection('projects', 'projects')}
                />
              </div>

              {/* Geton Gaming Studio Badge (Desktop Right Position matching original hero) */}
              <div
                id="gaming-studio-badge"
                className="hidden lg:flex items-center justify-end shrink-0 ml-auto pr-2 xl:pr-6 animate-in fade-in slide-in-from-right-6 duration-700"
              >
                <FloatingBadge onClick={() => setIsGetonGameOpen(true)} />
              </div>
            </div>
          </main>

          {/* HERO FOOTER (Responsive on mobile phones so FloatingBadge & ScrollIndicator both fit cleanly) */}
          <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pb-5 sm:pb-6 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4">
            <div className="lg:hidden w-full sm:w-auto max-w-full">
              <div id="gaming-studio-badge-mobile" className="w-fit max-w-full">
                <FloatingBadge onClick={() => setIsGetonGameOpen(true)} className="max-w-full" />
              </div>
            </div>
            <ScrollIndicator onClick={handleScrollToExplore} />
          </div>
        </div>

        {/* LAZY-LOADED HOMEPAGE SECTIONS */}
        <Suspense fallback={<div className="min-h-[400px]" />}>
          {/* SECTION 2: OUR SERVICES (6-card overview) */}
          <HomeServicesSection
            onNavigateToService={navigateToService}
            onViewAllServices={() => navigateToPath('/tjenester', 'services-hub', 'services')}
          />

          {/* SECTION 3: SELECTED PROJECTS / CASE STUDIES */}
          <ProjectsShowcaseSection
            onInspectProject={(project) => {
              if (project.isFullCaseStudy) {
                navigateToProject(project.id);
                return;
              }
              setSelectedService({
                id: project.id,
                title: `${project.title} — ${project.client}`,
                subtitle: `${project.industry} · ${project.metrics}`,
                description: project.description,
                features: [
                  ...project.keyFeatures,
                  `Teknologistakk: ${project.techStack.join(', ')}`,
                ],
              });
            }}
            onViewAllProjects={() => navigateToPath('/prosjekter', 'projects-hub', 'projects')}
            onStartProject={() => openInquiry()}
          />

          {/* SECTION 4: WHY CHOOSE GETON? */}
          <DigitalSolutionsSection
            onGetStarted={() => openInquiry()}
            onSelectCapability={navigateToCapability}
          />

          {/* SECTION 5: OUR DEVELOPMENT PROCESS */}
          <ProcessRouteSection />

          {/* SECTION 7: INSIGHTS (Top 3 Articles + View All) */}
          <HomeInsightsSection
            onSelectArticle={(articleId) => {
              setActiveArticleId(articleId);
              navigateToPath(`/artikler/${articleId}`, 'article', 'blogs');
            }}
            onViewAllArticles={() => navigateToPath('/artikler', 'insights', 'blogs')}
          />

          {/* SECTION 8: FINAL CONTACT SECTION */}
          <HomeContactSection
            onStartProject={() => openInquiry()}
            onContactPage={() => navigateToPath('/kontakt', 'contact', 'contact')}
          />
        </Suspense>

        {/* GLOBAL FOOTER */}
        <Footer onSelectTab={handleTabSelect} onGetStarted={() => openInquiry()} />
      </div>
    );
  };

  return (
    <>
      <Suspense
        fallback={
          <div
            className={`min-h-screen flex items-center justify-center text-sm font-medium ${
              isLight ? 'bg-[#fafaf9] text-neutral-700' : 'bg-[#040714] text-cyan-300'
            }`}
          >
            Laster side...
          </div>
        }
      >
        {renderPage()}
      </Suspense>

      <ScrollToTopButton />
      <ConsentBanner />

      <ShowreelModal isOpen={isShowreelOpen} onClose={() => setIsShowreelOpen(false)} />

      {isGetonGameOpen && (
        <Suspense fallback={null}>
          <GetonJumpGameModal
            isOpen={isGetonGameOpen}
            onClose={() => setIsGetonGameOpen(false)}
            onStartProject={() => openInquiry()}
          />
        </Suspense>
      )}

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onGetStarted={() => openInquiry(selectedService?.title || null)}
      />

      <ProjectInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => {
          setIsInquiryOpen(false);
          setSelectedPricingPackage(null);
        }}
        initialPackage={selectedPricingPackage}
      />

      <PortfolioModal
        isOpen={isPortfolioOpen}
        onClose={() => setIsPortfolioOpen(false)}
        onGetStarted={() => openInquiry()}
        onNavigateToProject={navigateToProject}
      />
    </>
  );
}
