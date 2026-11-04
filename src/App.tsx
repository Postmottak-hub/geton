/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroCard, ServiceItemData } from './components/HeroCard.tsx';
import { FloatingBadge } from './components/FloatingBadge.tsx';
import { ScrollIndicator } from './components/ScrollIndicator.tsx';
import { SoftwareShowcaseSection } from './components/SoftwareShowcaseSection.tsx';
import { PricingPackagesSection } from './components/PricingPackagesSection.tsx';
import { DigitalSolutionsSection } from './components/DigitalSolutionsSection.tsx';
import { ProcessRouteSection } from './components/ProcessRouteSection.tsx';
import { ProjectsShowcaseSection } from './components/ProjectsShowcaseSection.tsx';
import { Footer } from './components/Footer.tsx';
import {
  ShowreelModal,
  ServiceDetailModal,
  ProjectInquiryModal,
  PortfolioModal,
} from './components/Modals.tsx';
import { Frakt360CaseStudyPage } from './pages/Frakt360CaseStudyPage.tsx';
import { SwalletCaseStudyPage } from './pages/SwalletCaseStudyPage.tsx';
import { HentliCaseStudyPage } from './pages/HentliCaseStudyPage.tsx';
import { VestlandskHjertesenterCaseStudyPage } from './pages/VestlandskHjertesenterCaseStudyPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { InsightsPage } from './pages/InsightsPage.tsx';
import { ArticleDetailPage } from './pages/ArticleDetailPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { ARTICLES } from './data/articles.ts';

const VIDEO_URL =
  'https://res.cloudinary.com/dl7lmhbg/video/upload/v1793281647/b_generate_a_video_and.mp4';

type PageView =
  | 'home'
  | 'frakt360'
  | 'swallet'
  | 'hentli'
  | 'vestlandsk-hjertesenter'
  | 'about'
  | 'insights'
  | 'article'
  | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [activeArticleId, setActiveArticleId] = useState<string>('ai-agents-in-production');
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedPricingPackage, setSelectedPricingPackage] = useState<string | null>(null);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItemData | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Guarantee autoplay execution across all browser security policies
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.warn('Autoplay prevented, retrying with muted force:', err);
        video.muted = true;
        try {
          await video.play();
        } catch {
          // Handled gracefully
        }
      }
    };

    playVideo();
  }, []);

  // Listen to browser URL hash changes for true multi-page navigation
  useEffect(() => {
    const handleHashRouting = () => {
      const hash = window.location.hash.toLowerCase();
      if (
        hash === '#/case-study/frakt360' ||
        hash === '#/prosjekt/frakt360' ||
        hash === '#frakt360'
      ) {
        setCurrentView('frakt360');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        hash === '#/case-study/swallet' ||
        hash === '#/prosjekt/swallet' ||
        hash === '#swallet'
      ) {
        setCurrentView('swallet');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        hash === '#/case-study/hentli' ||
        hash === '#/prosjekt/hentli' ||
        hash === '#hentli'
      ) {
        setCurrentView('hentli');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        hash === '#/case-study/vestlandsk-hjertesenter' ||
        hash === '#/prosjekt/vestlandsk-hjertesenter' ||
        hash === '#vestlandsk-hjertesenter' ||
        hash === '#vestlandsk'
      ) {
        setCurrentView('vestlandsk-hjertesenter');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        hash === '#about' ||
        hash === '#/about' ||
        hash === '#om-oss' ||
        hash === '#/om-oss'
      ) {
        setCurrentView('about');
        setActiveTab('about');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        hash === '#insights' ||
        hash === '#/insights' ||
        hash === '#blogs' ||
        hash === '#/blogs' ||
        hash === '#innsikt' ||
        hash === '#/innsikt'
      ) {
        setCurrentView('insights');
        setActiveTab('blogs');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash.startsWith('#/article/')) {
        const slug = hash.replace('#/article/', '').trim();
        if (slug) {
          setActiveArticleId(slug);
          setCurrentView('article');
          setActiveTab('blogs');
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      } else if (
        hash === '#contact' ||
        hash === '#/contact' ||
        hash === '#kontakt' ||
        hash === '#/kontakt'
      ) {
        setCurrentView('contact');
        setActiveTab('contact');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('home');
      }
    };

    handleHashRouting();
    window.addEventListener('hashchange', handleHashRouting);
    return () => window.removeEventListener('hashchange', handleHashRouting);
  }, []);

  const navigateToProject = (projectId: string) => {
    if (projectId === 'frakt360') {
      window.location.hash = '#/case-study/frakt360';
      setCurrentView('frakt360');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (projectId === 'swallet') {
      window.location.hash = '#/case-study/swallet';
      setCurrentView('swallet');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (projectId === 'hentli') {
      window.location.hash = '#/case-study/hentli';
      setCurrentView('hentli');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (projectId === 'vestlandsk-hjertesenter' || projectId === 'vestlandsk') {
      window.location.hash = '#/case-study/vestlandsk-hjertesenter';
      setCurrentView('vestlandsk-hjertesenter');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const navigateBackToHome = () => {
    window.location.hash = '#home';
    setCurrentView('home');
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabSelect = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'home') {
      navigateBackToHome();
    } else if (tab === 'about') {
      window.location.hash = '#/about';
      setCurrentView('about');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (tab === 'blogs' || tab === 'insights') {
      window.location.hash = '#/insights';
      setCurrentView('insights');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (tab === 'contact') {
      window.location.hash = '#/contact';
      setCurrentView('contact');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (tab === 'services') {
      if (currentView !== 'home') {
        setCurrentView('home');
        window.location.hash = '#services';
        setTimeout(() => {
          const section = document.getElementById('software-systems');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        const section = document.getElementById('software-systems');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tab === 'projects') {
      if (currentView !== 'home') {
        setCurrentView('home');
        window.location.hash = '#projects';
        setTimeout(() => {
          const section = document.getElementById('projects');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        const section = document.getElementById('projects');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleScrollToExplore = () => {
    const section = document.getElementById('software-systems');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dedicated full-page view for Swallet Case Study
  if (currentView === 'swallet') {
    return (
      <>
        <SwalletCaseStudyPage
          onBack={navigateBackToHome}
          onNavigateToProject={navigateToProject}
          onStartProject={() => setIsInquiryOpen(true)}
        />
        <ProjectInquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
        />
      </>
    );
  }

  // Dedicated full-page view for Frakt360 Case Study
  if (currentView === 'frakt360') {
    return (
      <>
        <Frakt360CaseStudyPage
          onBack={navigateBackToHome}
          onNavigateToProject={navigateToProject}
          onStartProject={() => setIsInquiryOpen(true)}
        />
        <ProjectInquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
        />
      </>
    );
  }

  // Dedicated full-page view for Hentli Delivery App Case Study
  if (currentView === 'hentli') {
    return (
      <>
        <HentliCaseStudyPage
          onBack={navigateBackToHome}
          onNavigateToProject={navigateToProject}
          onStartProject={() => setIsInquiryOpen(true)}
        />
        <ProjectInquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
        />
      </>
    );
  }

  // Dedicated full-page view for Vestlandsk Hjertesenter Case Study
  if (currentView === 'vestlandsk-hjertesenter') {
    return (
      <>
        <VestlandskHjertesenterCaseStudyPage
          onBack={navigateBackToHome}
          onNavigateToProject={navigateToProject}
          onStartProject={() => setIsInquiryOpen(true)}
        />
        <ProjectInquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
        />
      </>
    );
  }

  // Dedicated full-page view for About Page
  if (currentView === 'about') {
    return (
      <>
        <AboutPage
          onBack={navigateBackToHome}
          onNavigateToTab={handleTabSelect}
          onStartProject={() => setIsInquiryOpen(true)}
        />
        <ProjectInquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
        />
      </>
    );
  }

  // Dedicated full-page view for Insights Page
  if (currentView === 'insights') {
    return (
      <>
        <InsightsPage
          onBack={navigateBackToHome}
          onNavigateToTab={handleTabSelect}
          onStartProject={() => setIsInquiryOpen(true)}
          onSelectArticle={(articleId) => {
            setActiveArticleId(articleId);
            setCurrentView('article');
            window.location.hash = `#/article/${articleId}`;
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
        />
        <ProjectInquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
        />
      </>
    );
  }

  // Dedicated full-page view for Article Detail Page
  if (currentView === 'article') {
    const article =
      ARTICLES.find((a) => a.id === activeArticleId) || ARTICLES[0];

    return (
      <>
        <ArticleDetailPage
          article={article}
          onBack={() => {
            setCurrentView('insights');
            window.location.hash = '#/insights';
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          onSelectArticle={(articleId) => {
            setActiveArticleId(articleId);
            window.location.hash = `#/article/${articleId}`;
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          onStartProject={() => {
            setCurrentView('contact');
            window.location.hash = '#/contact';
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          onNavigateToTab={handleTabSelect}
        />
        <ProjectInquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
        />
      </>
    );
  }

  // Dedicated full-page view for Contact Page (with Google Maps & inquiry form)
  if (currentView === 'contact') {
    return (
      <>
        <ContactPage
          onBack={navigateBackToHome}
          onNavigateToTab={handleTabSelect}
        />
        <ProjectInquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
        />
      </>
    );
  }

  return (
    <div className="w-full relative min-h-screen bg-[#040714] text-white selection:bg-cyan-500 selection:text-black">
      
      {/* ========================================================
          HERO SECTION (Screen 1)
      ======================================================== */}
      <div className="min-h-[100dvh] w-full relative flex flex-col justify-between overflow-x-hidden select-none bg-gradient-to-b from-[#060b1e] via-[#050d26] to-[#060e28]">
        
        {/* Full-bleed Video Background Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <video
            ref={videoRef}
            src={VIDEO_URL}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            crossOrigin="anonymous"
            className="w-full h-full object-cover min-w-full min-h-full"
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
        </div>

        {/* Seamless bottom gradient scrim blending hero video into Section 2 */}
        <div className="absolute bottom-0 left-0 right-0 h-36 sm:h-48 bg-gradient-to-t from-[#060e28] via-[#060e28]/70 to-transparent pointer-events-none z-10" />

        {/* 1. TOP NAVIGATION BAR */}
        <div className="relative z-30">
          <Navbar
            activeTab={activeTab}
            onSelectTab={handleTabSelect}
            onGetStarted={() => setIsInquiryOpen(true)}
          />
        </div>

        {/* 2. MAIN HERO CONTENT AREA (Responsive padding & prevents top clipping on mobile) */}
        <main className="relative z-20 flex-1 w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-start lg:justify-center items-start pt-2 pb-6 sm:py-6 lg:py-10">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 xl:gap-14">
            
            {/* Left Column: Ideas to Creative Solutions Card */}
            <div className="w-full lg:w-auto shrink-0 flex justify-start animate-in fade-in slide-in-from-left-6 duration-700">
              <HeroCard
                onExploreWork={() => {
                  const el = document.getElementById('projects');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setIsPortfolioOpen(true);
                  }
                }}
                onWatchShowreel={() => setIsShowreelOpen(true)}
                onSelectService={(service) => setSelectedService(service)}
              />
            </div>

            {/* Right Column: Floating Badge (hidden on small viewports to maintain breathing space) */}
            <div className="hidden lg:flex items-center justify-end shrink-0 ml-auto pr-2 xl:pr-6 animate-in fade-in slide-in-from-right-6 duration-700">
              <FloatingBadge
                onClick={() => {
                  setSelectedService({
                    id: 'digital-solutions',
                    title: 'Geton Digital Solutions',
                    subtitle: 'Autonomous Systems & Web Architecture',
                    description:
                      'Our proprietary design & engineering methodology fuses sleek cyber aesthetics with enterprise-grade stability and sub-second performance.',
                  features: [
                    '99.99% Guaranteed Infrastructure Uptime',
                    'Zero-Latency Web & Mobile Interactivity',
                    'Adaptive Cross-Platform Responsive Ratios',
                    'Full Intellectual Property Handover',
                  ],
                });
              }}
            />
          </div>

          </div>
        </main>

        {/* 3. HERO FOOTER (Scroll to explore button) */}
        <footer className="relative z-20 w-full px-4 sm:px-8 lg:px-12 xl:px-16 pb-6 pt-2 sm:pb-8 sm:pt-4 flex items-center justify-between">
          <ScrollIndicator onClick={handleScrollToExplore} />
        </footer>
      </div>

      {/* ========================================================
          SECOND SECTION: CREATIVE SOFTWARE & ARCHITECTURE (Screen 2)
      ======================================================== */}
      <SoftwareShowcaseSection
        onScheduleReview={() => setIsInquiryOpen(true)}
        onInspectProject={(title, desc, metrics) => {
          setSelectedService({
            id: 'project-inspect',
            title,
            subtitle: metrics,
            description: desc,
            features: [
              'Zero-downtime blue/green deployments',
              'Sub-second query caching & distributed streaming',
              'Enterprise SLA with 24/7 incident response',
              'Automated regression & performance benchmarks',
            ],
          });
        }}
      />

      {/* ========================================================
          THIRD SECTION: PRICING & PACKAGES ("Hva ønsker du å utvikle?")
          (Placed directly before Technology that turns ideas into reality)
      ======================================================== */}
      <PricingPackagesSection
        onSelectPackage={(pkgName) => {
          setSelectedPricingPackage(pkgName);
          setIsInquiryOpen(true);
        }}
      />

      {/* ========================================================
          PREMIUM SCANDINAVIAN SECTION: DIGITAL SOLUTIONS & DESIGN
          "Technology that turns ideas into reality" (4 Cards)
      ======================================================== */}
      <DigitalSolutionsSection
        onGetStarted={() => setIsInquiryOpen(true)}
      />

      {/* ========================================================
          HOW WE START, DEVELOP, DEPLOY & SUPPORT
          Animated 2s Laser Circuit Route & Production SLA
      ======================================================== */}
      <ProcessRouteSection
        onScheduleReview={() => setIsInquiryOpen(true)}
      />

      {/* ========================================================
          PROJECTS SECTION: OUR PROJECTS (Våre tidligere prosjekter)
          Light, clean editorial showcase matching reference image
      ======================================================== */}
      <ProjectsShowcaseSection
        onInspectProject={(project) => {
          if (project.id === 'frakt360') {
            navigateToProject('frakt360');
            return;
          }
          if (project.id === 'swallet') {
            navigateToProject('swallet');
            return;
          }
          if (project.id === 'hentli') {
            navigateToProject('hentli');
            return;
          }
          if (project.id === 'vestlandsk-hjertesenter') {
            navigateToProject('vestlandsk-hjertesenter');
            return;
          }
          setSelectedService({
            id: project.id,
            title: `${project.title} — ${project.client}`,
            subtitle: `${project.industry} (${project.year}) · ${project.metrics}`,
            description: project.description,
            features: [
              ...project.keyFeatures,
              `Teknologistakk: ${project.techStack.join(', ')}`,
            ],
          });
        }}
        onStartProject={() => setIsInquiryOpen(true)}
      />

      {/* ========================================================
          GLOBAL FOOTER (Creative Nordic Headquarters & Tech Info)
      ======================================================== */}
      <Footer
        onSelectTab={handleTabSelect}
        onGetStarted={() => setIsInquiryOpen(true)}
      />

      {/* INTERACTIVE MODALS */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onGetStarted={() => setIsInquiryOpen(true)}
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
        onGetStarted={() => setIsInquiryOpen(true)}
        onNavigateToProject={navigateToProject}
      />
    </div>
  );
}
