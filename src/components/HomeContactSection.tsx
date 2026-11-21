import React, { useState, useRef } from 'react';
import { ArrowRight, CheckCircle, AlertCircle, Loader2, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { trackEvent } from '../utils/analytics.ts';
import { submitContactInquiry, formatContactSubmitError } from '../utils/contactSubmit.ts';

interface HomeContactSectionProps {
  onStartProject: () => void;
  onContactPage: () => void;
}

export const HomeContactSection: React.FC<HomeContactSectionProps> = ({
  onStartProject,
  onContactPage,
}) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const mountedAtRef = useRef<number>(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (honeypot.trim() !== '') {
      setSubmitted(true);
      return;
    }

    if (Date.now() - mountedAtRef.current < 800) {
      setErrorMsg(
        language === 'no'
          ? 'Vennligst vent et øyeblikk før du sender.'
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
        language === 'no' ? 'Vennligst oppgi en gyldig e-postadresse.' : 'Please enter a valid email.'
      );
      return;
    }
    if (message.trim().length < 5) {
      setErrorMsg(
        language === 'no'
          ? 'Skriv en kort melding om prosjektet ditt (minst 5 tegn).'
          : 'Please include a brief project note (at least 5 characters).'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitContactInquiry({
        name,
        email,
        message,
        honeypot,
        source: 'home_final_cta',
      });

      if (!result.ok) {
        throw new Error(result.error || 'Failed to send');
      }

      trackEvent('contact_form_submit', { location: 'home_final_cta' });
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      const msg = err instanceof Error ? err.message : undefined;
      setErrorMsg(formatContactSubmitError(msg, language));
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:contact@getontechs.com?subject=${encodeURIComponent(
    `Prosjektforespørsel – ${name || 'Geton AS'}`
  )}&body=${encodeURIComponent(`Navn: ${name}\nE-post: ${email}\n\n${message}`)}`;

  return (
    <section
      id="contact-cta"
      aria-labelledby="final-contact-heading"
      className={`w-full py-14 sm:py-24 lg:py-28 relative z-20 transition-colors duration-300 ${
        isLight ? 'bg-[#f4f3f0] text-neutral-900' : 'bg-[#050b1d] text-white'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div
          className={`rounded-2xl sm:rounded-3xl border p-5 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start ${
            isLight
              ? 'bg-white border-[#e7e7e5] shadow-[0_12px_40px_rgba(0,0,0,0.04)]'
              : 'bg-[#081026] border-cyan-400/25 shadow-[0_16px_50px_rgba(0,0,0,0.45)]'
          }`}
        >
          {/* Left Column: Headline, Description, CTAs & Direct Contact */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span
                className={`text-xs font-semibold tracking-[0.2em] uppercase block mb-3 ${
                  isLight ? 'text-sky-700' : 'text-cyan-300'
                }`}
              >
                {language === 'no' ? 'KOM I GANG' : 'START A CONVERSATION'}
              </span>
              <h2
                id="final-contact-heading"
                className={`text-3xl sm:text-4xl lg:text-[44px] font-display font-extrabold tracking-tight leading-[1.12] [text-wrap:balance] ${
                  isLight ? 'text-neutral-900' : 'text-white'
                }`}
              >
                {language === 'no'
                  ? 'Har du en idé? La oss utvikle den sammen.'
                  : 'Have an idea? Let’s build it together.'}
              </h2>
              <p
                className={`mt-4 text-base sm:text-lg leading-relaxed max-w-xl ${
                  isLight ? 'text-neutral-600' : 'text-slate-300'
                }`}
              >
                {language === 'no'
                  ? 'Enten du trenger en nettside, mobilapp eller skreddersydd programvare, hjelper vi deg å finne riktig løsning.'
                  : 'Whether you need a website, mobile app, or custom software, we help you find the right solution.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => {
                  trackEvent('cta_click', { label: 'final_cta_start_project', location: 'home_footer_cta' });
                  onStartProject();
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold text-white btn-cyan-gradient inline-flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] transition-all"
              >
                <span>{language === 'no' ? 'Start ditt prosjekt' : 'Start your project'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="/kontakt"
                onClick={(e) => {
                  e.preventDefault();
                  onContactPage();
                }}
                className={`w-full sm:w-auto text-center px-6 py-3.5 rounded-full text-sm font-semibold border transition-colors ${
                  isLight
                    ? 'bg-neutral-50 border-neutral-300 text-neutral-900 hover:bg-neutral-100'
                    : 'bg-white/5 border-white/15 text-white hover:bg-white/10'
                }`}
              >
                {language === 'no' ? 'Kontakt oss' : 'Contact us'}
              </a>
            </div>

            <div
              className={`pt-6 border-t grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs ${
                isLight ? 'border-neutral-200 text-neutral-600' : 'border-white/10 text-slate-300'
              }`}
            >
              <a
                href="mailto:contact@getontechs.com"
                className="flex items-center gap-2 hover:underline"
              >
                <Mail className={`w-4 h-4 shrink-0 ${isLight ? 'text-neutral-800' : 'text-cyan-300'}`} />
                <span className="truncate font-medium">contact@getontechs.com</span>
              </a>
              <a href="tel:+4740584817" className="flex items-center gap-2 hover:underline">
                <Phone className={`w-4 h-4 shrink-0 ${isLight ? 'text-neutral-800' : 'text-cyan-300'}`} />
                <span className="font-medium">+47 405 84 817</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className={`w-4 h-4 shrink-0 ${isLight ? 'text-neutral-800' : 'text-cyan-300'}`} />
                <span>Straume · Bergen</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Simple Quick-Inquiry Form */}
          <div
            className={`lg:col-span-6 rounded-2xl border p-4 sm:p-8 ${
              isLight
                ? 'bg-[#fafaf9] border-[#e7e7e5]'
                : 'bg-[#050a18]/90 border-white/10'
            }`}
          >
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto border ${
                    isLight
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      : 'bg-emerald-950/70 border-emerald-400/50 text-emerald-300'
                  }`}
                >
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3
                  className={`text-xl font-display font-bold ${
                    isLight ? 'text-neutral-900' : 'text-white'
                  }`}
                >
                  {language === 'no' ? 'Takk for meldingen!' : 'Message received!'}
                </h3>
                <p className={`text-sm max-w-md mx-auto ${isLight ? 'text-neutral-600' : 'text-slate-300'}`}>
                  {language === 'no'
                    ? 'Henvendelsen er sendt til contact@getontechs.com. Vi svarer deg så snart som mulig.'
                    : 'Your inquiry has been sent to contact@getontechs.com. We will follow up shortly.'}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold border cursor-pointer ${
                    isLight
                      ? 'border-neutral-300 text-neutral-800 hover:bg-neutral-100'
                      : 'border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  {language === 'no' ? 'Send en ny melding' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="home-contact-name"
                      className={`block text-xs font-semibold mb-1.5 ${
                        isLight ? 'text-neutral-700' : 'text-slate-300'
                      }`}
                    >
                      {language === 'no' ? 'Navn *' : 'Name *'}
                    </label>
                    <input
                      id="home-contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={language === 'no' ? 'Ditt navn' : 'Your name'}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors ${
                        isLight
                          ? 'bg-white border-neutral-300 text-neutral-900 focus:border-neutral-900 focus:ring-neutral-900/10'
                          : 'bg-[#081026] border-white/15 text-white focus:border-cyan-400 focus:ring-cyan-400/20'
                      }`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="home-contact-email"
                      className={`block text-xs font-semibold mb-1.5 ${
                        isLight ? 'text-neutral-700' : 'text-slate-300'
                      }`}
                    >
                      {language === 'no' ? 'E-post *' : 'Email *'}
                    </label>
                    <input
                      id="home-contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="navn@bedrift.no"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors ${
                        isLight
                          ? 'bg-white border-neutral-300 text-neutral-900 focus:border-neutral-900 focus:ring-neutral-900/10'
                          : 'bg-[#081026] border-white/15 text-white focus:border-cyan-400 focus:ring-cyan-400/20'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="home-contact-message"
                    className={`block text-xs font-semibold mb-1.5 ${
                      isLight ? 'text-neutral-700' : 'text-slate-300'
                    }`}
                  >
                    {language === 'no' ? 'Hva kan vi hjelpe deg med? *' : 'How can we help? *'}
                  </label>
                  <textarea
                    id="home-contact-message"
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      language === 'no'
                        ? 'Beskriv kort hva du ønsker å utvikle...'
                        : 'Briefly describe your website, app, or software goals...'
                    }
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm resize-none focus:outline-none focus:ring-2 transition-colors ${
                      isLight
                        ? 'bg-white border-neutral-300 text-neutral-900 focus:border-neutral-900 focus:ring-neutral-900/10'
                        : 'bg-[#081026] border-white/15 text-white focus:border-cyan-400 focus:ring-cyan-400/20'
                    }`}
                  />
                </div>

                {errorMsg && (
                  <div
                    role="alert"
                    className={`p-3 rounded-xl border text-xs flex flex-col gap-1.5 ${
                      isLight
                        ? 'bg-rose-50 border-rose-200 text-rose-800'
                        : 'bg-rose-950/50 border-rose-400/40 text-rose-200'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                    <a href={mailtoHref} className="underline font-semibold pl-6">
                      {language === 'no'
                        ? 'Send direkte til contact@getontechs.com'
                        : 'Email contact@getontechs.com directly'}
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold text-white btn-cyan-gradient flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{language === 'no' ? 'Sender...' : 'Sending...'}</span>
                    </>
                  ) : (
                    <>
                      <span>{language === 'no' ? 'Send uforpliktende forespørsel' : 'Send inquiry'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
