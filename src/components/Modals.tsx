import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Loader2,
  AlertCircle,
  Mail,
} from 'lucide-react';
import { ServiceItemData } from './HeroCard.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { trackEvent } from '../utils/analytics.ts';
import { submitContactInquiry, formatContactSubmitError } from '../utils/contactSubmit.ts';

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
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/35 backdrop-blur-[4px] animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl rounded-3xl bg-[#080d1e] border border-cyan-400/40 shadow-[0_24px_80px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
            <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
              {t.modals.showreelTitle} · Geton AS
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.modals.close}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Showcase Stage */}
        <div className="relative aspect-video bg-gradient-to-br from-slate-950 via-[#0a0f26] to-[#120b2e] flex flex-col justify-between p-8 overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.15),_transparent_70%)]" />

          <div className="relative z-10 flex justify-between items-start">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-[11px] font-mono text-cyan-300">
              WEB · APPER · SYSTEMER
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400 font-mono">GETON AS · STRAUME / BERGEN</div>
              <div className="text-sm font-semibold text-white">Fintech, Logistikk & Helse</div>
            </div>
          </div>

          <div className="relative z-10 text-center my-auto">
            <span className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              {language === 'no' ? 'SKREDDERSYDD TEKNOLOGI' : 'TAILORED ENGINEERING'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display mt-2 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              {language === 'no'
                ? 'Fra idé til ferdig digitalt produkt'
                : 'From Idea to Finished Digital Product'}
            </h2>
            <p className="text-slate-300 text-sm max-w-md mx-auto mt-3">
              {language === 'no'
                ? 'Vi utvikler moderne nettsider, mobilapper og skreddersydde fagsystemer for norske virksomheter.'
                : 'Modern websites, mobile applications, and custom business systems engineered in Norway.'}
            </p>
          </div>

          {/* Player controls overlay */}
          <div className="relative z-10 pt-4">
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full relative"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-slate-400">
                  {Math.floor((progress * 0.9) / 60)}:
                  {String(Math.floor((progress * 0.9) % 60)).padStart(2, '0')} / 01:30
                </span>
              </div>
              <div className="text-cyan-300/80 font-mono text-[11px]">GETON AS · ETABLERT 2020</div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-6 bg-slate-950/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <div>
              <span className="text-white font-semibold">React & Next.js</span>
            </div>
            <div>
              <span className="text-white font-semibold">iOS & Android</span>
            </div>
            <div>
              <span className="text-white font-semibold">Sky & API</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white btn-cyan-gradient cursor-pointer"
          >
            {t.modals.close}
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

export const ServiceDetailModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onGetStarted,
}) => {
  const { t, language } = useLanguage();
  if (!service) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/35 backdrop-blur-[4px] animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl bg-[#080d1e] border border-cyan-400/40 p-6 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.modals.close}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-block px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-[11px] font-semibold text-cyan-300 mb-3">
          {service.subtitle}
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
          {service.title}
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">{service.description}</p>

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
            type="button"
            onClick={() => {
              onClose();
              onGetStarted();
            }}
            className="flex-1 py-3 rounded-xl text-sm font-semibold text-white btn-cyan-gradient flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{language === 'no' ? `Forespør ${service.title}` : `Request ${service.title}`}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            {t.modals.close}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Project Inquiry Modal ("Fortell oss om prosjektet ditt") ---
interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string | null;
}

type ProjectTypeOption =
  | 'Nettsideutvikling'
  | 'Mobilapputvikling'
  | 'Webapplikasjoner og systemutvikling'
  | 'Annet';

export const ProjectInquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialPackage = null,
}) => {
  const { t, language } = useLanguage();
  const [projectType, setProjectType] = useState<ProjectTypeOption>('Nettsideutvikling');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [projectNote, setProjectNote] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const openedAtRef = useRef<number>(Date.now());

  useEffect(() => {
    if (!isOpen) return;
    openedAtRef.current = Date.now();
    setErrorMsg(null);
    setSubmitted(false);

    if (initialPackage) {
      const lower = initialPackage.toLowerCase();
      if (lower.includes('app') || lower.includes('mobil')) {
        setProjectType('Mobilapputvikling');
      } else if (
        lower.includes('system') ||
        lower.includes('webapp') ||
        lower.includes('applikasjon') ||
        lower.includes('sky') ||
        lower.includes('saas')
      ) {
        setProjectType('Webapplikasjoner og systemutvikling');
      } else if (lower.includes('nettside') || lower.includes('web')) {
        setProjectType('Nettsideutvikling');
      } else {
        setProjectType('Annet');
      }
    }
  }, [initialPackage, isOpen]);

  if (!isOpen) return null;

  const projectCategories: { value: ProjectTypeOption; labelNo: string; labelEn: string }[] = [
    { value: 'Nettsideutvikling', labelNo: 'Nettsideutvikling', labelEn: 'Website' },
    { value: 'Mobilapputvikling', labelNo: 'Mobilapputvikling', labelEn: 'Mobile App' },
    {
      value: 'Webapplikasjoner og systemutvikling',
      labelNo: 'Webapp / System',
      labelEn: 'Web App / System',
    },
    { value: 'Annet', labelNo: 'Annet', labelEn: 'Other' },
  ];

  const budgetOptions =
    language === 'no'
      ? [
          'Under 50 000 kr',
          '50 000–150 000 kr',
          '150 000–350 000 kr',
          '350 000–500 000 kr',
          'Over 500 000 kr',
          'Usikker',
        ]
      : [
          'Under 50,000 NOK',
          '50,000–150,000 NOK',
          '150,000–350,000 NOK',
          '350,000–500,000 NOK',
          'Over 500,000 NOK',
          'Unsure',
        ];

  const timelineOptions =
    language === 'no'
      ? ['Så snart som mulig', 'Innen 1–3 måneder', 'Om 3–6 måneder', 'Kun utforskende']
      : ['As soon as possible', 'Within 1–3 months', 'In 3–6 months', 'Just exploring'];

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      `Prosjektforespørsel (${projectType}) – ${company || name || 'Ny henvendelse'}`
    );
    const body = encodeURIComponent(
      `Hei Geton AS,\n\n` +
        `Navn: ${name}\n` +
        `E-post: ${email}\n` +
        `Telefon: ${phone || 'Ikke oppgitt'}\n` +
        `Bedrift: ${company || 'Ikke oppgitt'}\n` +
        `Prosjekttype: ${projectType}\n` +
        `Budsjett: ${budget || 'Ikke oppgitt'}\n` +
        `Ønsket oppstart: ${timeline || 'Ikke oppgitt'}\n\n` +
        `Prosjektbeskrivelse:\n${projectNote}\n`
    );
    return `mailto:contact@getontechs.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Spam protection: honeypot + instantaneous bot check
    if (honeypot.trim() !== '') {
      setSubmitted(true);
      return;
    }
    if (Date.now() - openedAtRef.current < 800) {
      setErrorMsg(
        language === 'no'
          ? 'Vennligst vent et øyeblikk før du sender inn skjemaet.'
          : 'Please wait a moment before submitting the form.'
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim()) {
      setErrorMsg(language === 'no' ? 'Vennligst oppgi navnet ditt.' : 'Please enter your name.');
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setErrorMsg(
        language === 'no' ? 'Vennligst oppgi en gyldig e-postadresse.' : 'Please enter a valid email address.'
      );
      return;
    }
    if (projectNote.trim().length < 5) {
      setErrorMsg(
        language === 'no'
          ? 'Beskriv kort hva du ønsker hjelp med (minst 5 tegn).'
          : 'Please add a short project description (at least 5 characters).'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitContactInquiry({
        name,
        email,
        phone,
        company,
        projectType,
        budget,
        timeline,
        message: projectNote,
        honeypot,
        source: 'project_inquiry_modal',
      });

      if (!result.ok) {
        throw new Error(result.error || 'Submission failed');
      }

      trackEvent('contact_form_submit', {
        location: 'inquiry_modal',
        projectType,
        hasBudget: Boolean(budget),
      });

      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setBudget('');
      setTimeline('');
      setProjectNote('');
    } catch (err) {
      const msg = err instanceof Error ? err.message : undefined;
      setErrorMsg(formatContactSubmitError(msg, language));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/30 backdrop-blur-[4px] animate-in fade-in duration-200 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl bg-[#080d1e]/95 border border-cyan-400/40 p-5 sm:p-8 shadow-[0_28px_90px_rgba(0,0,0,0.45)] my-auto max-h-[92dvh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.modals.close}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-400/60 flex items-center justify-center text-emerald-300 mx-auto shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              {language === 'no' ? 'Takk for henvendelsen!' : 'Thank You for Reaching Out!'}
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              {language === 'no'
                ? 'Forespørselen din er sendt til contact@getontechs.com. Vi går gjennom detaljene og tar kontakt med deg så snart som mulig.'
                : 'Your inquiry has been sent to contact@getontechs.com. We will review your brief and get back to you shortly.'}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white btn-cyan-gradient cursor-pointer"
            >
              {t.modals.close}
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-cyan-400" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                {language === 'no' ? 'UFORPLIKTENDE PROSJEKTPRAT' : 'PROJECT INQUIRY'}
              </span>
            </div>
            <h3
              id="inquiry-modal-title"
              className="text-2xl sm:text-3xl font-display font-bold text-white mb-2"
            >
              {language === 'no' ? 'Fortell oss om prosjektet ditt' : t.modals.inquiryTitle}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6">
              {t.modals.inquirySubtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Hidden honeypot */}
              <input
                type="text"
                name="_honey"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              {/* Project Type */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  {language === 'no' ? 'Prosjekttype *' : 'Project Type *'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {projectCategories.map((cat) => (
                    <button
                      type="button"
                      key={cat.value}
                      onClick={() => setProjectType(cat.value)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all text-center cursor-pointer ${
                        projectType === cat.value
                          ? 'border-cyan-400 bg-cyan-950/60 text-cyan-200 shadow-[0_0_12px_rgba(34,211,238,0.25)]'
                          : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {language === 'no' ? cat.labelNo : cat.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-medium text-slate-300 mb-1">
                    {language === 'no' ? 'Navn *' : 'Name *'}
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder={language === 'no' ? 'Ditt fulle navn' : 'Your full name'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-medium text-slate-300 mb-1">
                    {language === 'no' ? 'E-post *' : 'Email *'}
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    placeholder="navn@bedrift.no"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-medium text-slate-300 mb-1">
                    {language === 'no' ? 'Telefonnummer (valgfritt)' : 'Phone (optional)'}
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    placeholder="+47 000 00 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="modal-company" className="block text-xs font-medium text-slate-300 mb-1">
                    {language === 'no' ? 'Bedrift (valgfritt)' : 'Company (optional)'}
                  </label>
                  <input
                    id="modal-company"
                    type="text"
                    placeholder={language === 'no' ? 'Bedriftsnavn AS' : 'Company name'}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-budget" className="block text-xs font-medium text-slate-300 mb-1">
                    {language === 'no' ? 'Budsjett (valgfritt)' : 'Budget (optional)'}
                  </label>
                  <select
                    id="modal-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    <option value="">{language === 'no' ? 'Velg budsjett...' : 'Select budget...'}</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-timeline" className="block text-xs font-medium text-slate-300 mb-1">
                    {language === 'no' ? 'Ønsket oppstart (valgfritt)' : 'Desired start (optional)'}
                  </label>
                  <select
                    id="modal-timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    <option value="">{language === 'no' ? 'Velg tidslinje...' : 'Select timeline...'}</option>
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="modal-desc" className="block text-xs font-medium text-slate-300 mb-1">
                  {language === 'no' ? 'Prosjektbeskrivelse *' : 'Project description *'}
                </label>
                <textarea
                  id="modal-desc"
                  rows={3}
                  required
                  placeholder={
                    language === 'no'
                      ? 'Fortell kort om mål, ønskede funksjoner eller hva du vil oppnå...'
                      : 'Outline your goals, key features, or desired launch timeline...'
                  }
                  value={projectNote}
                  onChange={(e) => setProjectNote(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                />
              </div>

              {errorMsg && (
                <div
                  role="alert"
                  className="p-3 rounded-xl bg-rose-950/50 border border-rose-400/40 text-xs text-rose-200 flex flex-col gap-2"
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                  <a
                    href={buildMailtoHref()}
                    className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 font-semibold underline pl-6"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>
                      {language === 'no'
                        ? 'Åpne e-postklient mot contact@getontechs.com'
                        : 'Open email client to contact@getontechs.com'}
                    </span>
                  </a>
                </div>
              )}

              <p className="text-[11px] text-slate-400 leading-relaxed">
                {language === 'no'
                  ? 'Personvern: Opplysningene sendes direkte til contact@getontechs.com og brukes kun for å besvare forespørselen din.'
                  : 'Privacy: Information is sent directly to contact@getontechs.com and used solely to respond to your inquiry.'}
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white btn-cyan-gradient flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{language === 'no' ? 'Sender...' : 'Sending...'}</span>
                  </>
                ) : (
                  <>
                    <span>{t.modals.submitCTA}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Portfolio Showcase Modal ---
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
      desc:
        language === 'no'
          ? 'En komplett digital fraktplattform for moderne bedrifter'
          : 'Complete digital logistics platform for modern business',
      tag: 'Web & Mobile · Flagship',
    },
    {
      id: 'swallet',
      title: 'Swallet',
      category: language === 'no' ? 'Fintech & Personlig Økonomi' : 'Fintech & Personal Finance',
      metric: 'PSD2 · BankID · Abonnement',
      desc:
        language === 'no'
          ? 'Full kontroll på abonnementer og faste månedlige utgifter'
          : 'One place to manage subscriptions and recurring expenses',
      tag: 'Web & Mobile · Flagship',
    },
    {
      id: 'hentli',
      title: 'Hentli',
      category: language === 'no' ? 'Logistikk & Mobilitet' : 'Logistics & On-Demand Delivery',
      metric: 'Kartbasert matching · Sanntid',
      desc:
        language === 'no'
          ? 'Lokal transport redesignet med kartmatching for kunde og sjåfør'
          : 'Map-based delivery connecting customers with nearby drivers',
      tag: 'iOS & Android · Mobile',
    },
    {
      id: 'vestlandsk-hjertesenter',
      title: 'Vestlandsk Hjertesenter',
      category: language === 'no' ? 'Spesialisthelsetjeneste' : 'Cardiology & Healthcare',
      metric: 'vestlandskhjertesenter.no · Booking',
      desc:
        language === 'no'
          ? 'Spesialistklinikk for hjertehelse med direkte timebooking'
          : 'Cardiac diagnostic portal with direct online booking',
      tag: 'Web & Pasientportal',
    },
    {
      id: 'geton-scooters',
      title: 'Geton Scooters',
      category: language === 'no' ? 'IoT, MQTT & Mobilitet' : 'IoT, MQTT & Mobility',
      metric: 'iOS & Android · MQTT · Geofencing',
      desc:
        language === 'no'
          ? 'Elsparkesykkelplattform med sanntidskart, geofencing og IoT'
          : 'Micro-mobility app with live maps, geofencing, and MQTT IoT',
      tag: 'iOS & Android · IoT',
    },
    {
      id: 'norraq-style',
      title: 'NORRAQ Style',
      category: language === 'no' ? 'Beauty Tech & Plattform' : 'Beauty Tech & Platform',
      metric: 'Matching · Booking · Chat',
      desc:
        language === 'no'
          ? 'Digital plattform som kobler modeller, studenter og salonger'
          : 'Matching, booking, and chat platform for beauty professionals',
      tag: 'Web & Matching',
    },
  ];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/35 backdrop-blur-[4px] animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl rounded-3xl bg-[#080d1e] border border-cyan-400/40 p-5 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] max-h-[90vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.modals.close}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
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
        <p className="text-slate-400 text-xs sm:text-sm mb-6">{t.projects.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {portfolioProjects.map((proj, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => {
                if (proj.id && onNavigateToProject) {
                  onClose();
                  onNavigateToProject(proj.id);
                }
              }}
              className="p-5 rounded-2xl bg-white/[0.03] border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-white/[0.06] transition-all flex flex-col justify-between group cursor-pointer text-left"
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

              <div className="pt-3 border-t border-white/10 flex items-center justify-between w-full">
                <span className="text-xs font-semibold text-cyan-300">{proj.metric}</span>
                <span className="text-[10px] font-medium text-slate-400 group-hover:text-white transition-colors">
                  {t.projects.readFullStudy} →
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-xs text-slate-400">
            {language === 'no' ? 'Klar for å starte ditt neste prosjekt?' : 'Ready to start your next project?'}
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onGetStarted();
            }}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white btn-cyan-gradient flex items-center gap-2 cursor-pointer"
          >
            <span>{t.nav.getStarted}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
