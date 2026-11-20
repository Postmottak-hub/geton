import React from 'react';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { ServiceSlug } from '../data/services.ts';

interface NotFoundPageProps {
  onBack: () => void;
  onNavigateToTab: (tab: string) => void;
  onNavigateToService?: (slug: ServiceSlug) => void;
  onStartProject: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onBack,
  onNavigateToTab,
  onNavigateToService,
  onStartProject,
}) => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#040816] text-white flex flex-col justify-between overflow-x-hidden">
      <div className="sticky top-0 z-50 w-full bg-[#040816]/90 backdrop-blur-xl border-b border-white/10">
        <Navbar
          activeTab="home"
          onSelectTab={onNavigateToTab}
          onSelectServiceSlug={onNavigateToService}
          onGetStarted={onStartProject}
        />
      </div>

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-xl w-full text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mx-auto">
            <Compass className="w-7 h-7" />
          </div>
          <div className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">404</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            {language === 'no' ? 'Siden ble ikke funnet' : 'Page not found'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'no'
              ? 'Beklager, lenken du fulgte finnes ikke lenger eller har blitt flyttet. Bruk snarveiene under for å finne frem.'
              : 'Sorry, the page you requested does not exist or has been moved. Use the shortcuts below to continue.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
              className="px-6 py-3 rounded-full text-sm font-semibold text-white btn-cyan-gradient inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'no' ? 'Til forsiden' : 'Go Home'}</span>
            </a>
            <a
              href="/kontakt"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToTab('contact');
              }}
              className="px-6 py-3 rounded-full text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 inline-flex items-center gap-2"
            >
              <span>{language === 'no' ? 'Kontakt oss' : 'Contact Us'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <Footer onSelectTab={onNavigateToTab} onGetStarted={onStartProject} />
    </div>
  );
};
