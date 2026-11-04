import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, CheckCircle, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { ServiceItemData } from './HeroCard.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

// --- Showreel Modal ---
interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(24);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 250);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#080d1e] border border-cyan-400/40 shadow-[0_0_60px_rgba(6,182,212,0.35)] overflow-hidden">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
              {t.modals.showreelTitle} // 2026 Reel
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cinematic Video Simulation Stage */}
        <div className="relative aspect-video bg-gradient-to-br from-slate-950 via-[#0a0f26] to-[#120b2e] flex flex-col justify-between p-8 overflow-hidden select-none">
          {/* Neon grid ambience in background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.15),_transparent_70%)]" />
          
          <div className="relative z-10 flex justify-between items-start">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-[11px] font-mono text-cyan-300">
              4K · 60FPS · SPATIAL AUDIO
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400 font-mono">CLIENT CASE STUDIES</div>
              <div className="text-sm font-semibold text-white">Fintech, AI & Next-Gen E-Commerce</div>
            </div>
          </div>

          {/* Central animated showreel marquee */}
          <div className="relative z-10 text-center my-auto">
            <span className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              FEATURED PRODUCTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display mt-2 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              Crafting The Digital Frontier
            </h2>
            <p className="text-slate-300 text-sm max-w-md mx-auto mt-3">
              Over 140+ transformative products launched globally with 99.8% client satisfaction rate.
            </p>
          </div>

          {/* Player controls overlay */}
          <div className="relative z-10 pt-4">
            {/* Progress bar */}
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-4 cursor-pointer">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full relative"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-slate-400">
                  {Math.floor((progress * 0.9) / 60)}:{String(Math.floor((progress * 0.9) % 60)).padStart(2, '0')} / 01:30
                </span>
              </div>
              <div className="text-cyan-300/80 font-mono text-[11px]">
                GETON_STUDIO_MASTER.MP4
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-6 bg-slate-950/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <div>
              <span className="text-white font-semibold">140+</span> Apps Built
            </div>
            <div>
              <span className="text-white font-semibold">48M+</span> Users Reached
            </div>
            <div>
              <span className="text-white font-semibold">24</span> Design Awards
            </div>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white btn-cyan-gradient"
          >
            Close Showreel
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Service Detail Modal ---
interface ServiceModalProps {
  service: ServiceItemData | null;
  onClose: () => void;
  onGetStarted: () => void;
}

export const ServiceDetailModal: React.FC<ServiceModalProps> = ({ service, onClose, onGetStarted }) => {
  const { t, language } = useLanguage();
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#080d1e] border border-cyan-400/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-block px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-[11px] font-semibold text-cyan-300 mb-3">
          {service.subtitle}
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
          {service.title}
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
            {language === 'no' ? 'Kjernekompetanse & Leveranser' : 'Core Capabilities & Deliverables'}
          </h4>
          <ul className="space-y-2.5">
            {service.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          <button
            onClick={() => {
              onClose();
              onGetStarted();
            }}
            className="flex-1 py-3 rounded-xl text-sm font-semibold text-white btn-cyan-gradient flex items-center justify-center gap-2"
          >
            <span>{language === 'no' ? `Bestill ${service.title}` : `Request ${service.title}`}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            {t.modals.close}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Project Inquiry Modal ("Get Started") ---
interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string | null;
}

export const ProjectInquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialPackage = null,
}) => {
  const { t, language } = useLanguage();
  const [selectedType, setSelectedType] = useState('web');
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [projectNote, setProjectNote] = useState('');

  useEffect(() => {
    if (initialPackage) {
      const lower = initialPackage.toLowerCase();
      if (lower.includes('app') || lower.includes('mobil')) {
        setSelectedType('app');
      } else if (lower.includes('webapp') || lower.includes('system') || lower.includes('sky')) {
        setSelectedType('saas');
      } else {
        setSelectedType('web');
      }
      setProjectNote(
        language === 'no'
          ? `Jeg ønsker et tilbud på pakken: ${initialPackage}.`
          : `I am interested in getting a quote for: ${initialPackage}.`
      );
    }
  }, [initialPackage, language, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const projectCategories = language === 'no' ? [
    { id: 'web', label: 'Webplattform' },
    { id: 'app', label: 'Mobilapplikasjon' },
    { id: 'branding', label: 'Merkevare / UI' },
    { id: 'saas', label: 'SaaS / Skysystem' },
  ] : [
    { id: 'web', label: 'Web Platform' },
    { id: 'app', label: 'Mobile App' },
    { id: 'branding', label: 'Branding / UI' },
    { id: 'saas', label: 'SaaS Suite' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#080d1e] border border-cyan-400/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-cyan-950/80 border border-cyan-400/60 flex items-center justify-center text-cyan-300 mx-auto mb-4 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              <CheckCircle className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-2">
              {language === 'no' ? 'Forespørsel Mottatt!' : 'Transmission Received!'}
            </h3>
            <p className="text-slate-300 text-sm max-w-sm mx-auto">
              {t.modals.successMessage}
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                {language === 'no' ? 'INITIALISER PROSJEKTBRIEF' : 'INITIATE PROJECT BRIEF'}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              {t.modals.inquiryTitle}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              {t.modals.inquirySubtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  {t.modals.projectTypeLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {projectCategories.map((cat) => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setSelectedType(cat.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all text-center ${
                        selectedType === cat.id
                          ? 'border-cyan-400 bg-cyan-950/60 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.3)]'
                          : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {t.modals.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  placeholder="post@bedrift.no"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {t.modals.descriptionLabel}
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    language === 'no'
                      ? 'Beskriv nøkkelkrav, teknologiønsker eller tidslinje...'
                      : 'Outline key requirements, tech stack preference, or launch timeline...'
                  }
                  value={projectNote}
                  onChange={(e) => setProjectNote(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white btn-cyan-gradient flex items-center justify-center gap-2 mt-2 cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                <span>{t.modals.submitCTA}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Portfolio Showcase Modal ("Explore Our Work") ---
interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGetStarted: () => void;
  onNavigateToProject?: (id: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  onGetStarted,
  onNavigateToProject,
}) => {
  const { t, language } = useLanguage();
  if (!isOpen) return null;

  const portfolioProjects = [
    {
      id: 'frakt360',
      title: 'Frakt360',
      category: language === 'no' ? 'Logistikk & E-handel' : 'Logistics & E-commerce',
      metric: 'Bring · PostNord · Ongoing WMS',
      desc: language === 'no' ? 'En komplett digital fraktplattform for moderne bedrifter' : 'Complete digital logistics platform for modern business',
      tag: 'Web & Mobile · Flagship',
    },
    {
      id: 'swallet',
      title: 'Swallet',
      category: language === 'no' ? 'Fintech & Personlig Økonomi' : 'Fintech & Personal Finance',
      metric: 'PSD2 · BankID · 4 320 kr/år',
      desc: language === 'no' ? 'Full kontroll på abonnementer og faste månedlige utgifter' : 'One place to manage subscriptions and recurring expenses',
      tag: 'Web & Mobile · Flagship',
    },
    {
      id: 'hentli',
      title: 'Hentli',
      category: language === 'no' ? 'Logistikk & Mobilitet' : 'Logistics & On-Demand Delivery',
      metric: 'Kartbasert matching · Sanntid',
      desc: language === 'no' ? 'Lokal transport redesignet med kartmatching for kunde og sjåfør' : 'Map-based delivery connecting customers with nearby drivers',
      tag: 'iOS & Android · Mobile',
    },
    {
      id: 'vestlandsk-hjertesenter',
      title: 'Vestlandsk Hjertesenter',
      category: language === 'no' ? 'Spesialisthelsetjeneste' : 'Cardiology & Healthcare',
      metric: 'vestlandskhjertesenter.no · 0 ventetid',
      desc: language === 'no' ? 'Spesialistklinikk for hjertehelse med direkte timebooking' : 'Premier cardiac diagnostic portal with direct online booking',
      tag: 'Web & Pasientportal',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#080d1e] border border-cyan-400/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.3)] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
          <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
            {language === 'no' ? 'UTVALGTE PROSJEKTHØYDEPUNKTER' : 'CURATED PORTFOLIO HIGHLIGHTS'}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
          {t.projects.title}
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mb-6">
          {t.projects.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {portfolioProjects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (proj.id && onNavigateToProject) {
                  onClose();
                  onNavigateToProject(proj.id);
                }
              }}
              className="p-5 rounded-2xl bg-white/[0.03] border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-white/[0.06] transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-cyan-300">{proj.tag}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 transition-colors" />
                </div>
                <h4 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h4>
                <div className="text-xs text-slate-400 mb-2">{proj.category}</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{proj.desc}</p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-cyan-300">{proj.metric}</span>
                <span className="text-[10px] font-medium text-slate-400 group-hover:text-white transition-colors">
                  {t.projects.readFullStudy} →
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-xs text-slate-400">
            {language === 'no' ? 'Klar for å bygge ditt neste gjennombrudd?' : 'Ready to design your next breakthrough?'}
          </span>
          <button
            onClick={() => {
              onClose();
              onGetStarted();
            }}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white btn-cyan-gradient flex items-center gap-2"
          >
            <span>{t.nav.getStarted}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
