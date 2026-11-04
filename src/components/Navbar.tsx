import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Smartphone,
  Monitor,
  Sparkles,
  Cloud,
  Layers,
  FolderGit2,
  Users,
  BookOpen,
  Mail,
  Zap,
} from 'lucide-react';
import { GetonLogo } from './Logo.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { LanguageSwitcher } from './LanguageSwitcher.tsx';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onGetStarted,
}) => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu is open
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

  const navItems = [
    { id: 'services', label: t.nav.services, icon: Layers, badge: t.nav.servicesBadge, hasDropdown: true },
    { id: 'projects', label: t.nav.projects, icon: FolderGit2, badge: t.nav.projectsBadge },
    { id: 'about', label: t.nav.about, icon: Users, badge: t.nav.aboutBadge },
    { id: 'blogs', label: t.nav.blogs, icon: BookOpen, badge: t.nav.blogsBadge },
    { id: 'contact', label: t.nav.contact, icon: Mail, badge: t.nav.contactBadge },
  ];

  return (
    <header className="w-full relative z-40 transition-all duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 flex items-center justify-between gap-4">
        
        {/* Brand Zone: Geton with logo (larger) */}
        <button
          onClick={() => onSelectTab('home')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98] shrink-0 text-left cursor-pointer"
          aria-label="Geton Homepage"
        >
          <GetonLogo size="large" />
        </button>

        {/* Center Zone: Desktop Capsule Navigation Container */}
        <nav className="hidden lg:flex items-center relative">
          <div className="rounded-full px-7 py-2.5 bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-xl border border-white/[0.14] shadow-[0_4px_30px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center gap-7 transition-all duration-300">
            
            {/* Services with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1.5 text-[14px] font-medium transition-colors cursor-pointer select-none ${
                  activeTab === 'services' || servicesDropdownOpen
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <span>{t.nav.services}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 text-white/70 ${
                    servicesDropdownOpen ? 'rotate-180 text-cyan-300' : ''
                  }`}
                />
              </button>

              {/* Frosted Dropdown Menu */}
              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full left-0 mt-3 w-68 rounded-2xl bg-[#090e21]/95 backdrop-blur-2xl border border-cyan-400/30 p-2 shadow-[0_15px_40px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-95 duration-150 z-50"
                >
                  <button
                    onClick={() => {
                      onSelectTab('services');
                      setServicesDropdownOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:border-cyan-300">
                      <Monitor className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-cyan-300">{t.nav.webPlatforms}</div>
                      <div className="text-[10px] text-slate-400">{t.nav.webPlatformsDesc}</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      onSelectTab('services');
                      setServicesDropdownOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:border-cyan-300">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-cyan-300">{t.nav.mobileApps}</div>
                      <div className="text-[10px] text-slate-400">{t.nav.mobileAppsDesc}</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      onSelectTab('services');
                      setServicesDropdownOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:border-cyan-300">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-cyan-300">{t.hero.services.branding.title}</div>
                      <div className="text-[10px] text-slate-400">{t.hero.services.branding.subtitle}</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      onSelectTab('services');
                      setServicesDropdownOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:border-cyan-300">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-cyan-300">{t.nav.saasCloud}</div>
                      <div className="text-[10px] text-slate-400">{t.nav.saasCloudDesc}</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Projects */}
            <button
              onClick={() => onSelectTab('projects')}
              className={`text-[14px] font-medium transition-colors cursor-pointer select-none whitespace-nowrap ${
                activeTab === 'projects'
                  ? 'text-white font-semibold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {t.nav.projects}
            </button>

            {/* About */}
            <button
              onClick={() => onSelectTab('about')}
              className={`text-[14px] font-medium transition-colors cursor-pointer select-none whitespace-nowrap ${
                activeTab === 'about'
                  ? 'text-white font-semibold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {t.nav.about}
            </button>

            {/* Blogs */}
            <button
              onClick={() => onSelectTab('blogs')}
              className={`text-[14px] font-medium transition-colors cursor-pointer select-none whitespace-nowrap ${
                activeTab === 'blogs'
                  ? 'text-white font-semibold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {t.nav.blogs}
            </button>

            {/* Contact */}
            <button
              onClick={() => onSelectTab('contact')}
              className={`text-[14px] font-medium transition-colors cursor-pointer select-none whitespace-nowrap ${
                activeTab === 'contact'
                  ? 'text-white font-semibold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {t.nav.contact}
            </button>

          </div>
        </nav>

        {/* Right Desktop Controls & Language Switcher */}
        <div className="hidden lg:flex items-center gap-3.5 shrink-0">
          <LanguageSwitcher size="md" />
          <button
            onClick={onGetStarted}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 btn-cyan-gradient transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>{t.nav.getStarted}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile & Tablet Header Controls with Flag Switcher */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-2.5">
          <LanguageSwitcher size="sm" />
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 sm:p-2.5 rounded-2xl text-slate-100 hover:text-white bg-white/[0.08] hover:bg-white/[0.14] border border-cyan-400/30 backdrop-blur-xl focus:outline-none shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all cursor-pointer"
            aria-label="Open mobile navigation menu"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

      </div>

      {/* 
        CREATIVE CYBERPUNK MOBILE & TABLET DRAWER
        - Full viewport frosted glass overlay with glowing aura
        - Seamlessly blends with the cyberpunk background video
        - Interactive accordion for Services and clear visual cards for all pages
      */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-[#030614]/92 backdrop-blur-3xl animate-in fade-in duration-200 overflow-y-auto">
          
          {/* Ambient neon radial glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-0" />

          {/* Top Bar inside Menu */}
          <div className="relative z-10 w-full px-5 py-5 flex items-center justify-between border-b border-cyan-500/20 bg-black/30 backdrop-blur-md">
            <GetonLogo size="large" />

            <div className="flex items-center gap-2.5">
              <LanguageSwitcher size="sm" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-2xl text-cyan-300 hover:text-white bg-cyan-950/60 border border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all cursor-pointer"
                aria-label="Close mobile navigation menu"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Main Menu Links & Interactive Cards */}
          <div className="relative z-10 px-5 py-6 flex-1 flex flex-col gap-3">
            
            {/* Status Indicator Chip */}
            <div className="flex items-center justify-between px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/25 text-[11px] font-mono text-cyan-300 mb-2">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                <span>SYSTEMS ONLINE // 2026</span>
              </span>
              <span className="text-slate-400">GETON OS</span>
            </div>

            {/* 1. Services with Expandable Sub-items */}
            <div className="rounded-2xl border border-cyan-400/30 bg-white/[0.03] overflow-hidden transition-all">
              <button
                onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                className="w-full p-4 flex items-center justify-between text-left text-white font-medium hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-base font-bold font-display text-white">{t.nav.services}</div>
                    <div className="text-[11px] text-cyan-300/80">{t.nav.servicesBadge}</div>
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-cyan-300 transition-transform duration-200 ${
                    mobileServicesExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileServicesExpanded && (
                <div className="p-2 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-cyan-500/15 bg-black/20">
                  {[
                    { title: t.nav.webPlatforms, desc: t.nav.webPlatformsDesc, icon: Monitor },
                    { title: t.nav.mobileApps, desc: t.nav.mobileAppsDesc, icon: Smartphone },
                    { title: t.hero.services.branding.title, desc: t.hero.services.branding.subtitle, icon: Sparkles },
                    { title: t.nav.saasCloud, desc: t.nav.saasCloudDesc, icon: Cloud },
                  ].map((sub, i) => {
                    const SubIcon = sub.icon;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          onSelectTab('services');
                          setMobileMenuOpen(false);
                        }}
                        className="p-3 rounded-xl bg-white/[0.02] hover:bg-cyan-950/40 border border-white/5 hover:border-cyan-400/40 transition-all flex items-center gap-3 text-left group cursor-pointer"
                      >
                        <div className="w-7 h-7 rounded-lg bg-cyan-950/50 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                          <SubIcon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {sub.title}
                          </div>
                          <div className="text-[10px] text-slate-400">{sub.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other Navigation Items */}
            {navItems.slice(1).map((item) => {
              const ItemIcon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full p-4 rounded-2xl border transition-all flex items-center justify-between text-left group cursor-pointer ${
                    isActive
                      ? 'border-cyan-400/60 bg-cyan-950/40 shadow-[0_0_20px_rgba(34,211,238,0.25)]'
                      : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-cyan-400/30'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-base font-bold font-display text-white group-hover:text-cyan-200 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-slate-400">{item.badge}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                </button>
              );
            })}

          </div>

          {/* Bottom Drawer CTA & Quick Contact */}
          <div className="relative z-10 p-5 border-t border-cyan-500/20 bg-black/40 backdrop-blur-md flex flex-col gap-3">
            <button
              onClick={() => {
                onGetStarted();
                setMobileMenuOpen(false);
              }}
              className="w-full py-4 rounded-2xl text-sm font-semibold text-white flex items-center justify-center gap-2 btn-cyan-gradient shadow-[0_0_25px_rgba(6,182,212,0.4)] cursor-pointer transform hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <span>{t.nav.getStarted}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-2 pt-1">
              <span>Direct Brief: contact@getontechs.com</span>
              <span className="text-cyan-300">Q1/Q2 Availability</span>
            </div>
          </div>

        </div>
      )}
    </header>
  );
};
