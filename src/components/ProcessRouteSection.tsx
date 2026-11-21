import React from 'react';
import { Compass, Layout, Code2, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';

interface ProcessRouteSectionProps {
  onScheduleReview?: () => void;
}

export const ProcessRouteSection: React.FC<ProcessRouteSectionProps> = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const steps =
    language === 'no'
      ? [
          {
            step: '01',
            icon: Compass,
            title: 'Idé og rådgivning',
            desc: 'Vi avklarer mål, brukerbehov, omfang og riktig teknologivalg før utviklingen starter.',
          },
          {
            step: '02',
            icon: Layout,
            title: 'Design og planlegging',
            desc: 'Klikkbare skisser, tydelig brukerreise og skalerbar arkitektur gir trygghet tidlig.',
          },
          {
            step: '03',
            icon: Code2,
            title: 'Utvikling og testing',
            desc: 'Smidige leveranser med jevnlige demoer, ren kode og grundig kvalitetssikring underveis.',
          },
          {
            step: '04',
            icon: Rocket,
            title: 'Lansering og videreutvikling',
            desc: 'Trygg produksjonssetting, sikker overvåking og videre forbedringer i takt med veksten.',
          },
        ]
      : [
          {
            step: '01',
            icon: Compass,
            title: 'Discovery & Strategy',
            desc: 'We align on business goals, scope, user flows, and the optimal technical architecture.',
          },
          {
            step: '02',
            icon: Layout,
            title: 'Design & Planning',
            desc: 'Interactive prototypes, clean UI systems, and clear sprint roadmaps before coding starts.',
          },
          {
            step: '03',
            icon: Code2,
            title: 'Engineering & Testing',
            desc: 'Iterative builds with regular live demos, clean codebases, and thorough automated testing.',
          },
          {
            step: '04',
            icon: Rocket,
            title: 'Launch & Growth',
            desc: 'Smooth production deployment, proactive monitoring, and ongoing feature improvements.',
          },
        ];

  return (
    <section
      id="development-route"
      aria-labelledby="process-heading"
      className={`relative z-20 w-full py-16 sm:py-24 lg:py-28 transition-colors duration-300 border-b ${
        isLight
          ? 'bg-[#f4f3f0] text-neutral-900 border-neutral-200/80'
          : 'bg-[#050b1d] text-white border-white/10'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span
            className={`text-xs font-semibold tracking-[0.2em] uppercase block mb-3 ${
              isLight ? 'text-sky-700' : 'text-cyan-300'
            }`}
          >
            {language === 'no' ? 'VÅR UTVIKLINGSPROSESS' : 'OUR DEVELOPMENT PROCESS'}
          </span>
          <h2
            id="process-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-[1.12] [text-wrap:balance] ${
              isLight ? 'text-neutral-900' : 'text-white'
            }`}
          >
            {language === 'no'
              ? 'Slik gjør vi ideer til virkelighet'
              : 'How we turn ideas into reality'}
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg leading-relaxed max-w-xl ${
              isLight ? 'text-neutral-600' : 'text-slate-300'
            }`}
          >
            {language === 'no'
              ? 'En ryddig og forutsigbar prosess i fire klare steg – fra første samtale til et ferdig digitalt produkt.'
              : 'A clear, predictable four-step workflow from your initial brief to a live, scaling product.'}
          </p>
        </div>

        {/* Clean Horizontal Timeline (Desktop) / Animated Vertical Rail (Mobile) */}
        <div className="relative">
          {/* Desktop Horizontal Connector Track + Flowing Light Pulse */}
          <div
            className={`hidden lg:block absolute top-[48px] left-12 right-12 h-[2px] overflow-hidden rounded-full ${
              isLight ? 'bg-neutral-300/80' : 'bg-cyan-500/20'
            }`}
            aria-hidden="true"
          >
            <div
              className={`h-full w-1/4 rounded-full animate-line-beam-x ${
                isLight
                  ? 'bg-gradient-to-r from-transparent via-sky-500 to-transparent shadow-[0_0_14px_rgba(14,165,233,0.7)]'
                  : 'bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_16px_rgba(34,211,238,0.85)]'
              }`}
            />
          </div>

          {/* Mobile Vertical Connector Track + Flowing Light Pulse (Single-Column Mobile) */}
          <div
            className={`sm:hidden absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-[2px] overflow-hidden rounded-full pointer-events-none ${
              isLight ? 'bg-neutral-300/80' : 'bg-cyan-500/20'
            }`}
            aria-hidden="true"
          >
            <div
              className={`w-full h-1/4 rounded-full animate-line-beam-y ${
                isLight
                  ? 'bg-gradient-to-b from-transparent via-sky-500 to-transparent shadow-[0_0_14px_rgba(14,165,233,0.7)]'
                  : 'bg-gradient-to-b from-transparent via-cyan-300 to-transparent shadow-[0_0_16px_rgba(34,211,238,0.85)]'
              }`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 relative z-10">
            {steps.map((item, idx) => {
              const IconComp = item.icon;
              const pulseClass = `animate-step-icon-${idx}`;
              return (
                <div
                  key={item.step}
                  className={`relative rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 ${
                    isLight
                      ? 'bg-white border-[#e7e7e5] hover:border-sky-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
                      : 'bg-[#081026]/95 border-white/10 hover:border-cyan-400/40 shadow-[0_6px_26px_rgba(0,0,0,0.3)]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative">
                        <div
                          className={`w-11 h-11 rounded-xl border flex items-center justify-center relative z-10 ${pulseClass} ${
                            isLight
                              ? 'bg-neutral-900 border-sky-400/70 text-cyan-300'
                              : 'bg-cyan-950/90 border-cyan-300/70 text-cyan-200'
                          }`}
                        >
                          <IconComp className="w-5 h-5" aria-hidden="true" />
                        </div>
                      </div>
                      <span
                        className={`text-sm font-extrabold font-display tracking-wider tabular-nums ${
                          isLight ? 'text-neutral-500' : 'text-cyan-400/80'
                        }`}
                      >
                        {item.step}
                      </span>
                    </div>

                    <h3
                      className={`text-lg font-display font-bold mb-2 ${
                        isLight ? 'text-neutral-900' : 'text-white'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed ${
                        isLight ? 'text-neutral-600' : 'text-slate-300'
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
