import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Building,
  Briefcase,
  Users,
  Compass,
  Navigation,
  Send,
  X,
  Play,
  Layers,
} from 'lucide-react';
import { GetonLogo } from '../components/Logo.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { LanguageSwitcher } from '../components/LanguageSwitcher.tsx';

interface ContactPageProps {
  onBack: () => void;
  onNavigateToTab: (tab: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBack,
  onNavigateToTab,
}) => {
  const { language } = useLanguage();

  // Form states
  const [selectedBudget, setSelectedBudget] = useState('20K - 30K');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setCompany('');
      setPhone('');
      setDetails('');
    }, 4000);
  };

  const budgetOptions = [
    '10K - 20K',
    '20K - 30K',
    '30K - 40K',
    '40K - 50K',
    'More than 50K',
  ];

  const infoCards = [
    {
      id: 'location',
      title: language === 'no' ? 'Vår beliggenhet' : 'Our Location',
      desc:
        language === 'no'
          ? 'Stikk innom kontoret vårt på Straume eller avtal et møte online. Vi er alltid åpne for samarbeid og nye ideer.'
          : 'Drop by our office at Straume or schedule an online meeting. We are always open to collaboration and new ideas.',
      fullDetails: [
        'Besøksadresse: Trollhaugmyra 15, 5353 Straume (Bergen)',
        'Åpningstider: Mandag – Fredag: 08:30 – 16:30',
        'Gjesteparkering tilgjengelig like utenfor inngangen',
        'Kaffe og uformell teknologiprat med våre utviklere',
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
        'Langsiktige teknologiavtaler og forvaltningsavtaler',
        'Dedikerte utviklingsteam (Frontend, Backend, Mobil, AI)',
        'Garantert SLA og produksjonsoppfølging 24/7',
        'Full overlevering av kildekode og immaterielle rettigheter (IP)',
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
        'Rask responstid: Vi svarer normalt innen 2 timer i åpningstiden',
        'E-post: post@geton.no / info@getons.no',
        'Telefon: +47 412 34 567',
        'Uforpliktende arkitektur- og løsningsgjennomgang',
      ],
      actionLabel: language === 'no' ? 'Send henvendelse' : 'Send Message',
      actionType: 'form' as const,
    },
    {
      id: 'careers',
      title: language === 'no' ? 'Karrieremuligheter' : 'Career Opportunities',
      desc:
        language === 'no'
          ? 'Bli med i teamet vårt av utviklere, designere og innovatører for å forme fremtiden for digital teknologi.'
          : 'Join our team of developers, designers and technologists shaping the future of digital software.',
      fullDetails: [
        'Ledige stillinger: Senior React / React Native utvikler',
        'Ledige stillinger: Full-stack Node.js / .NET 9 arkitekt',
        'Kultur: Fleksibel arbeidshverdag, moderne lokaler på Straume/Bergen',
        'Send søknad og portfolio direkte til karriere@geton.no',
      ],
      actionLabel: language === 'no' ? 'Se ledige stillinger' : 'Explore Careers',
      actionType: 'email' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-emerald-500 selection:text-black">
      {/* 
        STICKY TOP NAVIGATION BAR
      */}
      <header className="sticky top-0 z-50 w-full bg-[#030712]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 transition-all">
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
            <a
              href="tel:+4741234567"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+47 412 34 567</span>
            </a>
          </div>
        </div>
      </header>

      {/* 
        HERO & FORM SECTION (Inspired by Screenshot 1: Skjermbilde_2026-11-03_130249_e0fb3551.png)
      */}
      <section className="relative pt-12 pb-20 sm:py-24 px-4 sm:px-8 border-b border-white/10 overflow-hidden">
        {/* Subtle emerald ambient gradients matching reference */}
        <div className="absolute top-10 left-1/4 w-[600px] h-[500px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Main Title & Subtitle */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white mb-6">
              {language === 'no' ? 'Ta kontakt med oss' : 'Get in Touch With Us'}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {language === 'no'
                ? 'Geton AS ble grunnlagt som et lite team av teknologi-entusiaster med en visjon om å redefinere digitale opplevelser gjennom innovasjon, samarbeid og pålitelig utviklingsekspertise.'
                : 'Geton AS was founded by passionate technology innovators committed to redefining digital experiences through engineering craftsmanship, partnership, and reliable execution.'}
            </p>
          </div>

          {/* Two-column layout matching reference */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
            
            {/* Left Column: Visual Photos & Direct Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Primary Photo */}
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group relative">
                <img
                  src="/src/assets/images/contact_team_consultation_1793711783282.jpg"
                  alt="Geton AS Tech Entrepreneur talking on phone"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-xs text-slate-200 flex items-center justify-between">
                  <span className="font-semibold text-emerald-400">Direkte rådgivning</span>
                  <span className="text-slate-300">Geton AS Ledelse</span>
                </div>
              </div>

              {/* Two smaller video preview cards matching screenshot */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 aspect-video flex items-center justify-center group cursor-pointer">
                  <img
                    src="/src/assets/images/about_geton_studio_1793711805670.jpg"
                    alt="Geton AS team session"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all"
                  />
                  <div className="absolute w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 aspect-video flex items-center justify-center group cursor-pointer">
                  <img
                    src="/src/assets/images/contact_developer_laptop_1793711783791.jpg"
                    alt="Geton AS developer at work"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all"
                  />
                  <div className="absolute w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Contact Info List with Circular Green Icons */}
              <div className="space-y-4 pt-2">
                
                {/* Phone */}
                <a
                  href="tel:+4741234567"
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
                      +47 412 34 567 / +47 (405) 84817
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:post@geton.no"
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
                      post@geton.no / info@getons.no
                    </div>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      {language === 'no' ? 'Besøksadresse' : 'Physical address'}
                    </div>
                    <div className="text-base font-bold text-white">
                      Trollhaugmyra 15, 5353 Straume (Bergen)
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Nordre Arefjordsvegen 14 · Org. nr. 926117076
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Interactive Budget & Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#081220]/90 border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                
                {isSubmitted ? (
                  <div className="py-16 text-center animate-in fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 mx-auto mb-5 shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
                      {language === 'no' ? 'Takk for din henvendelse!' : 'Thank you for reaching out!'}
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      {language === 'no'
                        ? 'En av våre seniorutviklere eller prosjektledere i Geton AS tar kontakt med deg innen kort tid.'
                        : 'A lead architect from Geton AS will review your project brief and get in touch shortly.'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Budget selector */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                        {language === 'no' ? 'Ditt estimerte budsjett' : 'Your budget'}
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {budgetOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setSelectedBudget(opt)}
                            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                              selectedBudget === opt
                                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/30 border border-emerald-400'
                                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          {language === 'no' ? 'Ditt navn' : 'Your name'}
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={language === 'no' ? 'Ola Nordmann' : 'John Doe'}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          {language === 'no' ? 'Din e-post *' : 'Your email *'}
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="navn@bedrift.no"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Company & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          {language === 'no' ? 'Firmanavn *' : 'Company name *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Bedrift AS"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          {language === 'no' ? 'Telefonnummer *' : 'Phone number *'}
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+47 000 00 000"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {language === 'no' ? 'Prosjektdetaljer (valgfritt) *' : 'Project details (optional) *'}
                      </label>
                      <textarea
                        rows={4}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder={
                          language === 'no'
                            ? 'Fortell oss kort om hva du ønsker å bygge – nettside, mobilapp, skyplattform eller AI-løsning...'
                            : 'Tell us briefly about what you want to build – website, mobile app, cloud system, or AI platform...'
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button (Green matching reference) */}
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>{language === 'no' ? 'Send inn skjema' : 'Submit Form'}</span>
                      <Send className="w-4 h-4" />
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 
        SECTION 2: GOOGLE MAPS & COLLABORATION
        (Inspired by Screenshot 2: Skjermbilde_2026-11-03_130302_96e774d6.png)
      */}
      <section className="py-24 px-4 sm:px-8 border-b border-white/10 bg-[#060c1d]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            {/* Interactive Google Maps Embed with Pin */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-slate-950">
                
                {/* Real interactive Google Map iframe centered on Trollhaugmyra 15, Straume / Bergen */}
                <div className="w-full h-[380px] sm:h-[440px] relative">
                  <iframe
                    title="Geton AS Office Location Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'contrast(1.05)' }}
                    loading="lazy"
                    allowFullScreen
                    src="https://maps.google.com/maps?q=Trollhaugmyra%2015,%205353%20Straume,%20Norway&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  />

                  {/* Custom Pin Floating Overlay Badge */}
                  <div className="absolute top-4 left-4 p-3.5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-emerald-400/40 shadow-xl flex items-center gap-3 pointer-events-none">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 shadow-md">
                      <MapPin className="w-5 h-5 fill-slate-950" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Geton AS Hovedkontor</div>
                      <div className="text-[11px] text-emerald-300">Trollhaugmyra 15, 5353 Straume</div>
                    </div>
                  </div>

                  {/* Directions Button */}
                  <div className="absolute bottom-4 right-4">
                    <a
                      href="https://maps.google.com/?q=Trollhaugmyra+15,+5353+Straume"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-slate-950/90 hover:bg-slate-900 border border-white/20 text-xs font-semibold text-white shadow-lg flex items-center gap-1.5 transition-colors"
                    >
                      <span>{language === 'no' ? 'Åpne i Google Maps' : 'Open in Google Maps'}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right text & photo */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
                {language === 'no'
                  ? 'La oss koble oss sammen og bygge noe stort'
                  : 'Let’s Connect and Build Something Great'}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {language === 'no'
                  ? 'Hos Geton AS er vi alltid glade for å høre fra deg. Enten du har et prosjekt i tankene, trenger ekspertråd, eller bare ønsker å diskutere muligheter – er teamet vårt her for å hjelpe.'
                  : 'At Geton AS, we always welcome new conversations. Whether you have an ambitious platform in mind, need architecture advisory, or want to explore digital capabilities – our senior engineers are here to assist.'}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {language === 'no'
                  ? 'Ta kontakt gjennom skjemaet eller besøk oss for en prat om hvordan vi kan gjøre ideene dine til virkelighet. Vi verdsetter åpen kommunikasjon, raske svar og langsiktige partnerskap bygget på tillit og resultater.'
                  : 'Reach out via the form or visit our Straume headquarters for a cup of coffee. We prioritize rapid turnaround, transparent communication, and enduring relationships built on measurable delivery.'}
              </p>

              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg max-h-56">
                <img
                  src="/src/assets/images/contact_developer_laptop_1793711783791.jpg"
                  alt="Geton AS team member working in Bergen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* 
            4 INTERACTIVE INFORMATION CARDS
            (Matching Screenshot 2: Vår beliggenhet, Støtte & partnerskap, Generelle henvendelser, Karrieremuligheter)
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCards.map((card) => (
              <div
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
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                  <span>More Information</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        MODAL FOR CLICKABLE CARDS (User requirement: "every where we have clickable button/card or anything make itas a page and show information")
      */}
      {activeInfoCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#081220] border border-emerald-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(16,185,129,0.3)]">
            <button
              onClick={() => setActiveInfoCard(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                GETON AS // INFORMASJON
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
                  href="mailto:post@geton.no"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-all inline-flex items-center gap-1.5"
                >
                  <span>{activeInfoCard.actionLabel}</span>
                  <Mail className="w-3.5 h-3.5" />
                </a>
              )}

              {activeInfoCard.actionType === 'form' && (
                <button
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

      {/* FOOTER */}
      <Footer onSelectTab={onNavigateToTab} onGetStarted={() => window.scrollTo({ top: 300, behavior: 'smooth' })} />
    </div>
  );
};
