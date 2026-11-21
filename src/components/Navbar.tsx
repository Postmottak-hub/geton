import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Smartphone,
  Monitor,
  Layers,
  FolderGit2,
  Users,
  BookOpen,
  Mail,
  Home,
} from 'lucide-react';
import { GetonLogo } from './Logo.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { LanguageSwitcher } from './LanguageSwitcher.tsx';
import { ThemeSwitcher } from './ThemeSwitcher.tsx';
import { ServiceSlug } from '../data/services.ts';
import { trackEvent } from '../utils/analytics.ts';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onSelectServiceSlug?: (slug: ServiceSlug) => void;
  onGetStarted: () => void;
  forceDarkSurface?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onSelectServiceSlug,
  onGetStarted,
  forceDarkSurface = false,
}) => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const isLightBar = forceDarkSurface ? false : isLight;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const servicePagesList: {
    slug: ServiceSlug;
    href: string;
    title: string;
    desc: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      slug: 'nettsideutvikling',
      href: '/tjenester/nettsideutvikling',
      title: language === 'no' ? 'Nettsideutvikling' : 'Website Development',
      desc: language === 'no' ? 'Raske, responsive bedriftsnettsider' : 'Fast, responsive business websites',
      icon: Monitor,
    },
    {
      slug: 'mobilapputvikling',
      href: '/tjenester/mobilapputvikling',
      title: language === 'no' ? 'Mobilapputvikling' : 'Mobile App Development',
      desc: language === 'no' ? 'Skreddersydde apper for iOS & Android' : 'Custom apps for iOS & Android',
      icon: Smartphone,
    },
    {
      slug: 'webapplikasjoner-og-systemutvikling',
      href: '/tjenester/webapplikasjoner-og-systemutvikling',
      title: language === 'no' ? 'Webapplikasjoner & System' : 'Web Apps & Custom Systems',
      desc: language === 'no' ? 'Bedriftssystemer, API & automatisering' : 'Business portals, APIs & automation',
      icon: Layers,
    },
    {
      slug: 'vedlikehold-og-support',
      href: '/tjenester/vedlikehold-og-support',
      title: language === 'no' ? 'Vedlikehold & Support' : 'Maintenance & Support',
      desc: language === 'no' ? '24/7 overvåking, sikkerhet & SLA' : '24/7 monitoring, security & SLA',
      icon: Layers,
    },
  ];

  const navItems = [
    {
      id: 'projects',
      href: '/prosjekter',
      label: t.nav.projects,
      icon: FolderGit2,
      badge: language === 'no' ? 'Utvalgte prosjekter' : 'Selected Case Studies',
    },
    {
      id: 'about',
      href: '/om-oss',
      label: t.nav.about,
      icon: Users,
      badge: t.nav.aboutBadge,
    },
    {
      id: 'blogs',
      href: '/artikler',
      label: t.nav.blogs,
      icon: BookOpen,
      badge: t.nav.blogsBadge,
    },
    {
      id: 'contact',
      href: '/kontakt',
      label: t.nav.contact,
      icon: Mail,
      badge: t.nav.contactBadge,
    },
  ];

  const handleServiceLinkClick = (e: React.MouseEvent, slug: ServiceSlug) => {
    e.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onSelectServiceSlug) {
      onSelectServiceSlug(slug);
    } else {
      onSelectTab('services');
    }
  };

  return (
    <header className="w-full relative z-40 transition-all duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-3.5 sm:px-8 lg:px-12 xl:px-16 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Zone */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onSelectTab('home');
          }}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98] shrink-0 text-left cursor-pointer"
          aria-label={language === 'no' ? 'Geton AS Forside' : 'Geton Homepage'}
        >
          <GetonLogo size="large" forceDarkSurface={forceDarkSurface} />
        </a>

        {/* Center Zone: Desktop Navigation */}
        <nav aria-label={language === 'no' ? 'Hovednavigasjon' : 'Main navigation'} className="hidden lg:flex items-center relative">
          <div
            className={`rounded-full px-6 py-2.5 backdrop-blur-xl border flex items-center gap-6 transition-all duration-300 ${
              isLightBar
                ? 'bg-white hover:bg-white border-slate-200 shadow-[0_4px_20px_rgba(15,23,42,0.06)]'
                : 'bg-white/[0.08] hover:bg-white/[0.12] border-white/[0.14] shadow-[0_4px_30px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.15)]'
            }`}
          >
            {/* Home Link */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onSelectTab('home');
              }}
              className={`text-[14px] font-medium transition-colors cursor-pointer select-none whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded ${
                activeTab === 'home'
                  ? isLightBar
                    ? 'text-neutral-900 font-semibold'
                    : 'text-white font-semibold'
                  : isLightBar
                  ? 'text-neutral-700 hover:text-neutral-900'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              {language === 'no' ? 'Hjem' : 'Home'}
            </a>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1.5 text-[14px] font-medium transition-colors cursor-pointer select-none whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded ${
                  activeTab === 'services' || servicesDropdownOpen
                    ? isLightBar
                      ? 'text-neutral-900 font-semibold'
                      : 'text-white'
                    : isLightBar
                    ? 'text-neutral-700 hover:text-neutral-900'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                <span>{t.nav.services}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isLightBar ? 'text-neutral-500' : 'text-white/70'
                  } ${
                    servicesDropdownOpen
                      ? isLightBar
                        ? 'rotate-180 text-sky-700'
                        : 'rotate-180 text-cyan-300'
                      : ''
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className={`absolute top-full left-0 mt-3 w-76 rounded-2xl backdrop-blur-2xl border p-2 animate-in fade-in zoom-in-95 duration-150 z-50 ${
                    isLightBar
                      ? 'bg-white border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.12)]'
                      : 'bg-[#090e21]/95 border-cyan-400/30 shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
                  }`}
                >
                  {servicePagesList.map((sub) => {
                    const SubIcon = sub.icon;
                    return (
                      <a
                        key={sub.slug}
                        href={sub.href}
                        onClick={(e) => handleServiceLinkClick(e, sub.slug)}
                        className={`w-full text-left p-2.5 rounded-xl transition-colors flex items-center gap-3 group cursor-pointer ${
                          isLightBar ? 'hover:bg-slate-100' : 'hover:bg-white/10'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${
                            isLightBar
                              ? 'bg-slate-100 border-slate-200 text-neutral-900 group-hover:border-slate-400'
                              : 'bg-cyan-950/60 border-cyan-400/40 text-cyan-300 group-hover:border-cyan-300'
                          }`}
                        >
                          <SubIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div
                            className={`text-xs font-semibold ${
                              isLightBar
                                ? 'text-neutral-900 group-hover:text-sky-700'
                                : 'text-white group-hover:text-cyan-300'
                            }`}
                          >
                            {sub.title}
                          </div>
                          <div
                            className={`text-[11px] ${
                              isLightBar ? 'text-neutral-600' : 'text-slate-400'
                            }`}
                          >
                            {sub.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}

                  <div
                    className={`mt-1 pt-1 border-t ${
                      isLightBar ? 'border-slate-200' : 'border-white/10'
                    }`}
                  >
                    <a
                      href="/tjenester"
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectTab('services-page');
                        setServicesDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between ${
                        isLightBar
                          ? 'hover:bg-slate-50 text-sky-700'
                          : 'hover:bg-white/5 text-cyan-300'
                      }`}
                    >
                      <span>{language === 'no' ? 'Se alle tjenester' : 'View all services'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTab(item.id);
                }}
                className={`text-[14px] font-medium transition-colors cursor-pointer select-none whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded ${
                  activeTab === item.id
                    ? isLightBar
                      ? 'text-neutral-900 font-semibold'
                      : 'text-white font-semibold'
                    : isLightBar
                    ? 'text-neutral-700 hover:text-neutral-900'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Right Desktop Controls: Language Toggle · Start Project CTA · Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <LanguageSwitcher size="md" forceDarkSurface={forceDarkSurface} />
          <button
            type="button"
            onClick={() => {
              trackEvent('cta_click', { label: 'navbar_start_project', location: 'header' });
              onGetStarted();
            }}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 btn-cyan-gradient transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            <span>{t.nav.getStarted}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <ThemeSwitcher size="md" forceDarkSurface={forceDarkSurface} />
        </div>

        {/* Mobile & Tablet Header Controls */}
        <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
          <LanguageSwitcher size="sm" forceDarkSurface={forceDarkSurface} />
          <ThemeSwitcher size="sm" forceDarkSurface={forceDarkSurface} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center rounded-xl sm:rounded-2xl border backdrop-blur-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-all cursor-pointer ${
              isLightBar
                ? 'text-neutral-800 hover:text-neutral-950 bg-white border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.06)]'
                : 'text-slate-100 hover:text-white bg-white/[0.08] hover:bg-white/[0.14] border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
            }`}
            aria-label={language === 'no' ? 'Åpne meny' : 'Open mobile navigation menu'}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={language === 'no' ? 'Mobilmeny' : 'Mobile navigation'}
          className={`fixed inset-0 z-50 lg:hidden flex flex-col justify-between backdrop-blur-3xl animate-in fade-in duration-200 overflow-y-auto ${
            isLight ? 'bg-slate-50/98 text-slate-900' : 'bg-[#030614]/95 text-white'
          }`}
        >
          <div
            className={`relative z-10 w-full px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between gap-2 border-b backdrop-blur-md ${
              isLight
                ? 'border-slate-200 bg-white/80'
                : 'border-cyan-500/20 bg-black/30'
            }`}
          >
            <GetonLogo size="default" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <LanguageSwitcher size="sm" />
              <ThemeSwitcher size="sm" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className={`min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center rounded-xl sm:rounded-2xl border transition-all cursor-pointer ${
                  isLight
                    ? 'text-slate-700 hover:text-slate-950 bg-slate-100 border-slate-200'
                    : 'text-cyan-300 hover:text-white bg-cyan-950/60 border-cyan-400/40'
                }`}
                aria-label={language === 'no' ? 'Lukk meny' : 'Close mobile navigation menu'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative z-10 px-5 py-6 flex-1 flex flex-col gap-3">
            {/* Home Link */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onSelectTab('home');
                setMobileMenuOpen(false);
              }}
              className={`w-full p-4 rounded-2xl border transition-all flex items-center justify-between text-left group cursor-pointer ${
                activeTab === 'home'
                  ? isLight
                    ? 'border-sky-400 bg-sky-50'
                    : 'border-cyan-400/60 bg-cyan-950/40'
                  : isLight
                  ? 'border-slate-200 bg-white hover:bg-slate-50 shadow-sm'
                  : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06]'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center ${
                    isLight
                      ? 'bg-sky-50 border-sky-200 text-sky-600'
                      : 'bg-cyan-950/60 border-cyan-400/40 text-cyan-300'
                  }`}
                >
                  <Home className="w-4 h-4" />
                </div>
                <div>
                  <div
                    className={`text-base font-bold font-display ${
                      isLight ? 'text-slate-900' : 'text-white'
                    }`}
                  >
                    {language === 'no' ? 'Hjem' : 'Home'}
                  </div>
                  <div
                    className={`text-[11px] ${
                      isLight ? 'text-slate-600' : 'text-slate-400'
                    }`}
                  >
                    {language === 'no' ? 'Tilbake til forsiden' : 'Main landing page'}
                  </div>
                </div>
              </div>
              <ChevronRight
                className={`w-4 h-4 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}
              />
            </a>

            {/* Services Accordion */}
            <div
              className={`rounded-2xl border overflow-hidden ${
                isLight
                  ? 'border-slate-200 bg-white shadow-sm'
                  : 'border-cyan-400/30 bg-white/[0.03]'
              }`}
            >
              <button
                type="button"
                onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                aria-expanded={mobileServicesExpanded}
                className={`w-full p-4 flex items-center justify-between text-left font-medium transition-colors cursor-pointer ${
                  isLight
                    ? 'text-slate-900 hover:bg-slate-50'
                    : 'text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center ${
                      isLight
                        ? 'bg-sky-50 border-sky-200 text-sky-600'
                        : 'bg-cyan-950/60 border-cyan-400/40 text-cyan-300'
                    }`}
                  >
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div
                      className={`text-base font-bold font-display ${
                        isLight ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      {t.nav.services}
                    </div>
                    <div
                      className={`text-[11px] ${
                        isLight ? 'text-sky-700' : 'text-cyan-300/80'
                      }`}
                    >
                      {t.nav.servicesBadge}
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isLight ? 'text-sky-600' : 'text-cyan-300'
                  } ${mobileServicesExpanded ? 'rotate-180' : ''}`}
                />
              </button>

              {mobileServicesExpanded && (
                <div
                  className={`p-2 pt-2 grid grid-cols-1 gap-2 border-t ${
                    isLight
                      ? 'border-slate-200 bg-slate-50/70'
                      : 'border-cyan-500/15 bg-black/20'
                  }`}
                >
                  {servicePagesList.map((sub) => {
                    const SubIcon = sub.icon;
                    return (
                      <a
                        key={sub.slug}
                        href={sub.href}
                        onClick={(e) => handleServiceLinkClick(e, sub.slug)}
                        className={`p-3 rounded-xl border transition-all flex items-center gap-3 text-left group cursor-pointer ${
                          isLight
                            ? 'bg-white hover:bg-sky-50 border-slate-200 hover:border-sky-300'
                            : 'bg-white/[0.02] hover:bg-cyan-950/40 border-white/5 hover:border-cyan-400/40'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg border flex items-center justify-center ${
                            isLight
                              ? 'bg-sky-50 border-sky-200 text-sky-600'
                              : 'bg-cyan-950/50 border-cyan-400/30 text-cyan-300'
                          }`}
                        >
                          <SubIcon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div
                            className={`text-xs font-semibold ${
                              isLight ? 'text-slate-900' : 'text-white'
                            }`}
                          >
                            {sub.title}
                          </div>
                          <div
                            className={`text-[11px] ${
                              isLight ? 'text-slate-600' : 'text-slate-400'
                            }`}
                          >
                            {sub.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other Links */}
            {navItems.map((item) => {
              const ItemIcon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full p-4 rounded-2xl border transition-all flex items-center justify-between text-left group cursor-pointer ${
                    isActive
                      ? isLight
                        ? 'border-sky-400 bg-sky-50'
                        : 'border-cyan-400/60 bg-cyan-950/40'
                      : isLight
                      ? 'border-slate-200 bg-white hover:bg-slate-50 shadow-sm'
                      : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center ${
                        isLight
                          ? 'bg-sky-50 border-sky-200 text-sky-600'
                          : 'bg-cyan-950/60 border-cyan-400/40 text-cyan-300'
                      }`}
                    >
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div
                        className={`text-base font-bold font-display ${
                          isLight ? 'text-slate-900' : 'text-white'
                        }`}
                      >
                        {item.label}
                      </div>
                      <div
                        className={`text-[11px] ${
                          isLight ? 'text-slate-600' : 'text-slate-400'
                        }`}
                      >
                        {item.badge}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}
                  />
                </a>
              );
            })}
          </div>

          <div
            className={`relative z-10 p-5 border-t backdrop-blur-md flex flex-col gap-3 ${
              isLight ? 'border-slate-200 bg-white/90' : 'border-cyan-500/20 bg-black/40'
            }`}
          >
            <button
              type="button"
              onClick={() => {
                trackEvent('cta_click', { label: 'mobile_menu_start_project', location: 'mobile_menu' });
                onGetStarted();
                setMobileMenuOpen(false);
              }}
              className="w-full py-4 rounded-2xl text-sm font-semibold text-white flex items-center justify-center gap-2 btn-cyan-gradient cursor-pointer"
            >
              <span>{t.nav.getStarted}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div
              className={`text-center text-xs ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              contact@getontechs.com · +47 405 84 817
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
