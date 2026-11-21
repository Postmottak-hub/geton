import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Send,
  X,
  Play,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { GoogleReviewsSection } from '../components/GoogleReviewsSection.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { ServiceSlug } from '../data/services.ts';
import { trackEvent } from '../utils/analytics.ts';
import { applyRouteSEO } from '../utils/seo.ts';
import { submitContactInquiry, formatContactSubmitError } from '../utils/contactSubmit.ts';

interface ContactPageProps {
  onBack: () => void;
  onNavigateToTab: (tab: string) => void;
  onNavigateToService?: (slug: ServiceSlug) => void;
  onStartProject?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateToTab,
  onNavigateToService,
  onStartProject,
}) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const handleLiveRatingLoaded = useCallback(
    (ratingData: { ratingValue: number; reviewCount: number }) => {
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
          aggregateRating: ratingData,
        },
        language
      );
    },
    [language]
  );

  // Form states
  const [projectType, setProjectType] = useState('Nettsideutvikling');
  const [selectedBudget, setSelectedBudget] = useState('Usikker');
  const [timeline, setTimeline] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const loadedAtRef = useRef<number>(Date.now());

  // Modal for the 4 info cards
  const [activeInfoCard, setActiveInfoCard] = useState<{
    title: string;
    description: string;
    details: string[];
    actionLabel: string;
    actionType: 'call' | 'email' | 'form';
  } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    loadedAtRef.current = Date.now();
  }, []);

  const projectTypeOptions = [
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
      `Prosjektforespørsel (${projectType}): ${company || name || 'Kontakt'}`
    );
    const body = encodeURIComponent(
      `Hei Geton AS,\n\nNavn: ${name}\nE-post: ${email}\nFirmanavn: ${company || 'Ikke oppgitt'}\nTelefon: ${phone || 'Ikke oppgitt'}\nProsjekttype: ${projectType}\nBudsjett: ${selectedBudget || 'Ikke oppgitt'}\nØnsket oppstart: ${timeline || 'Ikke oppgitt'}\n\nProsjektdetaljer:\n${details || 'Ingen ytterligere detaljer oppgitt.'}\n\nMvh,\n${name}`
    );
    return `mailto:contact@getontechs.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (honeypot.trim() !== '') {
      setIsSubmitted(true);
      return;
    }

    if (Date.now() - loadedAtRef.current < 800) {
      setErrorMsg(
        language === 'no'
          ? 'Vennligst vent et øyeblikk før du sender inn skjemaet.'
          : 'Please wait a moment before submitting.'
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
        language === 'no'
          ? 'Vennligst oppgi en gyldig e-postadresse.'
          : 'Please enter a valid email address.'
      );
      return;
    }
    if (details.trim().length < 5) {
      setErrorMsg(
        language === 'no'
          ? 'Vennligst legg til en kort prosjektbeskrivelse (minst 5 tegn).'
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
        budget: selectedBudget,
        timeline,
        message: details,
        honeypot,
        source: 'contact_page',
      });

      if (!result.ok) {
        throw new Error(result.error || 'Submission failed');
      }

      trackEvent('contact_form_submit', {
        location: 'contact_page',
        projectType,
        hasBudget: Boolean(selectedBudget),
      });

      setIsSubmitted(true);
      setName('');
      setEmail('');
      setCompany('');
      setPhone('');
      setDetails('');
      setTimeline('');
    } catch (err) {
      const msg = err instanceof Error ? err.message : undefined;
      setErrorMsg(formatContactSubmitError(msg, language));
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoCards = [
    {
      id: 'location',
      title: language === 'no' ? 'Vår beliggenhet' : 'Our Location',
      desc:
        language === 'no'
          ? 'Stikk innom kontoret vårt på Straume eller avtal et møte online. Vi er alltid åpne for samarbeid og nye ideer.'
          : 'Drop by our office at Straume or schedule an online meeting. We are always open to collaboration and new ideas.',
      fullDetails: [
        'Besøksadresse: Trollhaugmyra 15, 5353 Straume (Øygarden / Bergen)',
        language === 'no'
          ? 'Åpningstider: Man-Fre 08.00 - 16.00'
          : 'Opening hours: Mon–Fri 08:00 – 16:00',
        'Org. nr.: 926 117 076',
        'Digitalt møte eller fysisk møte etter avtale',
      ],
      actionLabel: language === 'no' ? 'Få veibeskrivelse' : 'Get Directions',
      actionType: 'call' as const,
    },
    {
      id: 'partnership',
      title: language === 'no' ? 'Støtte & partnerskap' : 'Support & Partnership',
      desc:
        language === 'no'
          ? 'Bli vår partner for å bygge innovative, pålitelige og fremtidssikre digitale løsninger sammen.'
          : 'Partner with Geton AS to engineer innovative, dependable and future-proof digital platforms.',
      fullDetails: [
        'Langsiktige teknologiavtaler og forvaltning',
        'Utvikling innen nettsider, mobilapper og fagsystemer',
        'Videreutvikling, vedlikehold og sikkerhetsoppdateringer',
        'Full overlevering av kildekode og eierskap',
      ],
      actionLabel: language === 'no' ? 'Diskuter partnerskap' : 'Discuss Partnership',
      actionType: 'email' as const,
    },
    {
      id: 'general',
      title: language === 'no' ? 'Generelle henvendelser' : 'General Inquiries',
      desc:
        language === 'no'
          ? 'Har du spørsmål eller en idé? Ta kontakt når som helst, vi er her for å lytte, veilede og hjelpe deg med å lykkes.'
          : 'Have a question or concept? Reach out anytime – our team is here to listen, advise and help you succeed.',
      fullDetails: [
        'E-post: contact@getontechs.com',
        'Telefon: +47 405 84 817',
        'Uforpliktende vurdering av idé, omfang og teknologivalg',
        'Vi svarer så snart vi har sett gjennom henvendelsen',
      ],
      actionLabel: language === 'no' ? 'Send henvendelse' : 'Send Message',
      actionType: 'form' as const,
    },
    {
      id: 'careers',
      title: language === 'no' ? 'Karrieremuligheter' : 'Career Opportunities',
      desc:
        language === 'no'
          ? 'Er du utvikler eller designer? Vi blir alltid glade for å bli kjent med dyktige folk som brenner for gode digitale produkter.'
          : 'Are you a developer or designer? We welcome open applications from talented technologists.',
      fullDetails: [
        'Kompetanseområder: React, TypeScript, mobilapper og backend',
        'Arbeidssted: Trollhaugmyra 15, 5353 Straume / fleksibelt',
        'Send en åpen søknad og lenke til arbeid til contact@getontechs.com',
      ],
      actionLabel: language === 'no' ? 'Send åpen søknad' : 'Send Open Application',
      actionType: 'email' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      {/* Persistent Top Menu */}
      <div className="sticky top-0 z-50 w-full bg-[#030712]/90 backdrop-blur-xl border-b border-white/10">
        <Navbar
          activeTab="contact"
          onSelectTab={onNavigateToTab}
          onSelectServiceSlug={onNavigateToService}
          onGetStarted={
            onStartProject || (() => window.scrollTo({ top: 180, behavior: 'smooth' }))
          }
        />
      </div>

      <main>
        {/* HERO & FORM SECTION */}
        <section className="relative pt-8 pb-14 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-white/10 overflow-hidden">
          <div className="absolute top-10 left-1/4 w-[600px] h-[500px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="max-w-3xl mb-8 sm:mb-16">
              <h1 className="text-3xl sm:text-6xl font-extrabold font-display tracking-tight text-white mb-4 sm:mb-6">
                {language === 'no' ? 'Ta kontakt med Geton AS' : 'Get in Touch With Geton AS'}
              </h1>
              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal">
                {language === 'no'
                  ? 'Har du planer om ny nettside, mobilapp eller skreddersydd system? Fortell oss litt om prosjektet ditt, så tar vi kontakt for en uforpliktende prat.'
                  : 'Planning a new website, mobile application, or custom business system? Share your goals with us for a non-binding consultation.'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-start">
              {/* Left Column: Visual Photos & Direct Contact Info */}
              <div className="lg:col-span-5 space-y-8">
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group relative">
                  <img
                    src="/assets/images/contact_team_consultation_1793711783282.webp"
                    alt="Rådgiver i Geton AS i telefonsamtale med kunde"
                    width={1200}
                    height={896}
                    decoding="async"
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-black/65 backdrop-blur-md border border-white/15 text-xs text-slate-200 flex items-center justify-between">
                    <span className="font-semibold text-emerald-400">
                      {language === 'no' ? 'Direkte rådgivning' : 'Direct Advisory'}
                    </span>
                    <span className="text-slate-300">Geton AS · Straume</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 aspect-video flex items-center justify-center group">
                    <img
                      src="/assets/images/about_geton_studio_1793711805670.webp"
                      alt="Utviklerteamet hos Geton AS i samarbeid"
                      width={1280}
                      height={714}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all"
                    />
                    <div className="absolute w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
                      <Play className="w-4 h-4 fill-white ml-0.5" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 aspect-video flex items-center justify-center group">
                    <img
                      src="/assets/images/contact_developer_laptop_1793711783791.webp"
                      alt="Programvareutvikler hos Geton AS med bærbar PC"
                      width={1200}
                      height={896}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all"
                    />
                    <div className="absolute w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
                      <Play className="w-4 h-4 fill-white ml-0.5" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Verified NAP Contact Info List */}
                <div className="space-y-4 pt-2">
                  <a
                    href="tel:+4740584817"
                    onClick={() => trackEvent('phone_link_click', { location: 'contact_card' })}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                        {language === 'no' ? 'Telefon' : 'Phone number'}
                      </div>
                      <div className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                        +47 405 84 817
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@getontechs.com"
                    onClick={() => trackEvent('email_link_click', { location: 'contact_card' })}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                        {language === 'no' ? 'E-postadresse' : 'Email address'}
                      </div>
                      <div className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                        contact@getontechs.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                        {language === 'no' ? 'Besøksadresse' : 'Physical address'}
                      </div>
                      <div className="text-base font-bold text-white">
                        Trollhaugmyra 15, 5353 Straume
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Øygarden / Bergen · Org. nr. 926 117 076
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Validated Lead-Generation Form */}
              <div className="lg:col-span-7">
                <div className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#081220]/90 border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                  {isSubmitted ? (
                    <div className="py-14 text-center animate-in fade-in space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                        {language === 'no' ? 'Takk for din henvendelse!' : 'Thank you for reaching out!'}
                      </h2>
                      <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                        {language === 'no'
                          ? 'Henvendelsen din er sendt direkte til contact@getontechs.com. Vi går gjennom den og tar kontakt med deg så snart som mulig.'
                          : 'Your inquiry has been sent directly to contact@getontechs.com. We will review your project brief and get in touch shortly.'}
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white cursor-pointer"
                      >
                        {language === 'no' ? 'Send en ny henvendelse' : 'Send another inquiry'}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                          {language === 'no' ? 'Prosjekttype *' : 'Project Type *'}
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {projectTypeOptions.map((opt) => (
                            <button
                              type="button"
                              key={opt.value}
                              onClick={() => setProjectType(opt.value)}
                              className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer text-center ${
                                projectType === opt.value
                                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/25 border border-emerald-400'
                                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                              }`}
                            >
                              {language === 'no' ? opt.labelNo : opt.labelEn}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                            {language === 'no' ? 'Navn *' : 'Your name *'}
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={language === 'no' ? 'Ditt navn' : 'Full name'}
                            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                            {language === 'no' ? 'E-post *' : 'Your email *'}
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="navn@bedrift.no"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Phone & Company Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                            {language === 'no' ? 'Telefonnummer (valgfritt)' : 'Phone number (optional)'}
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+47 000 00 000"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-company" className="block text-xs font-medium text-slate-300 mb-1.5">
                            {language === 'no' ? 'Bedrift (valgfritt)' : 'Company (optional)'}
                          </label>
                          <input
                            id="contact-company"
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Bedrift AS"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Budget selector */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                          {language === 'no' ? 'Budsjett (valgfritt)' : 'Budget (optional)'}
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {budgetOptions.map((opt) => (
                            <button
                              type="button"
                              key={opt}
                              onClick={() => setSelectedBudget(opt === selectedBudget ? '' : opt)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                                selectedBudget === opt
                                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/25 border border-emerald-400'
                                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Desired Start */}
                      <div>
                        <label htmlFor="contact-timeline" className="block text-xs font-medium text-slate-300 mb-1.5">
                          {language === 'no' ? 'Ønsket oppstart (valgfritt)' : 'Desired start (optional)'}
                        </label>
                        <select
                          id="contact-timeline"
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                        >
                          <option value="">
                            {language === 'no' ? 'Velg ønsket tidslinje...' : 'Select desired timeline...'}
                          </option>
                          {timelineOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Project Details */}
                      <div>
                        <label htmlFor="contact-details" className="block text-xs font-medium text-slate-300 mb-1.5">
                          {language === 'no' ? 'Prosjektbeskrivelse *' : 'Project description *'}
                        </label>
                        <textarea
                          id="contact-details"
                          rows={4}
                          required
                          value={details}
                          onChange={(e) => setDetails(e.target.value)}
                          placeholder={
                            language === 'no'
                              ? 'Fortell oss kort om hva du ønsker å bygge – nettside, mobilapp, webapplikasjon eller integrasjoner...'
                              : 'Tell us briefly what you want to build – website, mobile app, web application, or integrations...'
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors resize-none"
                        />
                      </div>

                      {errorMsg && (
                        <div
                          role="alert"
                          className="p-3.5 rounded-xl bg-rose-950/50 border border-rose-400/40 text-xs text-rose-200 flex flex-col gap-2"
                        >
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                            <span>{errorMsg}</span>
                          </div>
                          <a
                            href={buildMailtoHref()}
                            className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 font-semibold underline pl-6"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>
                              {language === 'no'
                                ? 'Send direkte via e-post til contact@getontechs.com'
                                : 'Send directly via email to contact@getontechs.com'}
                            </span>
                          </a>
                        </div>
                      )}

                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {language === 'no'
                          ? 'Personvern: Vi bruker kun opplysningene du sender inn via contact@getontechs.com til å svare på henvendelsen din.'
                          : 'Privacy: Information submitted is delivered to contact@getontechs.com and used strictly to respond to your inquiry.'}
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>{language === 'no' ? 'Sender...' : 'Sending...'}</span>
                          </>
                        ) : (
                          <>
                            <span>{language === 'no' ? 'Send henvendelse' : 'Send inquiry'}</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: GOOGLE MAPS, GOOGLE REVIEWS & COLLABORATION */}
        <section className="py-14 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-white/10 bg-[#060c1d]">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
              {/* Interactive Google Maps Embed */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-slate-950">
                  <div className="w-full h-[280px] sm:h-[440px] relative">
                    <iframe
                      title="Geton AS kontoradresse på Google Maps"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'contrast(1.05)' }}
                      loading="lazy"
                      allowFullScreen
                      src="https://maps.google.com/maps?q=Trollhaugmyra%2015,%205353%20Straume,%20Norway&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    />

                    <div
                      className={`absolute top-4 left-4 p-3.5 rounded-2xl backdrop-blur-md border shadow-xl flex items-center gap-3 pointer-events-none ${
                        isLight
                          ? 'bg-white/95 border-emerald-500/35'
                          : 'bg-slate-950/90 border-emerald-400/40'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 shadow-md">
                        <MapPin className="w-5 h-5 fill-slate-950" />
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${isLight ? 'text-slate-950' : 'text-white'}`}>
                          Geton AS
                        </div>
                        <div className={`text-[11px] ${isLight ? 'text-emerald-700' : 'text-emerald-300'}`}>
                          Trollhaugmyra 15, 5353 Straume
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-4">
                      <a
                        href="https://maps.google.com/?q=Trollhaugmyra+15,+5353+Straume,+Norway"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-3.5 py-2 rounded-xl border text-xs font-semibold shadow-lg flex items-center gap-1.5 transition-colors ${
                          isLight
                            ? 'bg-white/95 hover:bg-white border-slate-200 text-slate-900'
                            : 'bg-slate-950/90 hover:bg-slate-900 border-white/20 text-white'
                        }`}
                      >
                        <span>{language === 'no' ? 'Åpne i Google Maps' : 'Open in Google Maps'}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
                  {language === 'no'
                    ? 'Lokal teknologipartner på Vestland og for hele Norge'
                    : 'Local Technology Partner in Western Norway'}
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {language === 'no'
                    ? 'Hos Geton AS i Straume (rett utenfor Bergen) hjelper vi bedrifter i hele regionen og resten av landet med nettsider, mobilapper og skreddersydde systemer.'
                    : 'At Geton AS in Straume (near Bergen), we partner with ambitious companies across Western Norway and nationwide to build websites, mobile apps, and custom systems.'}
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {language === 'no'
                    ? 'Ta kontakt gjennom skjemaet over eller avtal et møte – vi gir deg ærlige råd om arkitektur, teknologi og gjennomføring.'
                    : 'Reach out using the form above or book a coffee at our office for straightforward engineering advice on scope, architecture, and execution.'}
                </p>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      {language === 'no' ? 'Verifisert adresse · Bergen / Øygarden' : 'Verified Office · Bergen / Øygarden'}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Trollhaugmyra 15, 5353 Straume · {language === 'no' ? 'Man-Fre 08.00 - 16.00' : 'Mon-Fri 08:00 - 16:00'}
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Trollhaugmyra+15,+5353+Straume,+Norway"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-all shrink-0"
                  >
                    <span>{language === 'no' ? 'Veibeskrivelse' : 'Get Directions'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Verified Google Business Profile & Live Reviews */}
            <div className="mb-14">
              <GoogleReviewsSection onLiveRatingLoaded={handleLiveRatingLoaded} />
            </div>

            {/* 4 INTERACTIVE INFORMATION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {infoCards.map((card) => (
                <button
                  type="button"
                  key={card.id}
                  onClick={() =>
                    setActiveInfoCard({
                      title: card.title,
                      description: card.desc,
                      details: card.fullDetails,
                      actionLabel: card.actionLabel,
                      actionType: card.actionType,
                    })
                  }
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left"
                >
                  <div>
                    <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 w-full">
                    <span>{language === 'no' ? 'Mer informasjon' : 'More information'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {activeInfoCard && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-lg rounded-3xl bg-[#081220] border border-emerald-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(16,185,129,0.3)]">
            <button
              type="button"
              onClick={() => setActiveInfoCard(null)}
              aria-label={language === 'no' ? 'Lukk' : 'Close'}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                GETON AS · INFORMASJON
              </span>
            </div>

            <h3 className="text-2xl font-bold font-display text-white mb-3">
              {activeInfoCard.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {activeInfoCard.description}
            </p>

            <div className="space-y-2.5 p-4 rounded-xl bg-white/[0.04] border border-white/10 mb-6">
              {activeInfoCard.details.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setActiveInfoCard(null)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                {language === 'no' ? 'Lukk' : 'Close'}
              </button>

              {activeInfoCard.actionType === 'call' && (
                <a
                  href="https://maps.google.com/?q=Trollhaugmyra+15,+5353+Straume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-all inline-flex items-center gap-1.5"
                >
                  <span>{activeInfoCard.actionLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {activeInfoCard.actionType === 'email' && (
                <a
                  href="mailto:contact@getontechs.com"
                  onClick={() => trackEvent('email_link_click', { location: 'contact_info_modal' })}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-all inline-flex items-center gap-1.5"
                >
                  <span>{activeInfoCard.actionLabel}</span>
                  <Mail className="w-3.5 h-3.5" />
                </a>
              )}

              {activeInfoCard.actionType === 'form' && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveInfoCard(null);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  {activeInfoCard.actionLabel}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer
        onSelectTab={onNavigateToTab}
        onGetStarted={() => window.scrollTo({ top: 300, behavior: 'smooth' })}
      />
    </div>
  );
};
