import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { GetonLogo } from '../components/Logo.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { LanguageSwitcher } from '../components/LanguageSwitcher.tsx';
import { Article, ARTICLES } from '../data/articles.ts';

interface InsightsPageProps {
  onBack: () => void;
  onNavigateToTab: (tab: string) => void;
  onStartProject: () => void;
  onSelectArticle: (articleId: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onBack,
  onNavigateToTab,
  onStartProject,
  onSelectArticle,
}) => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const categories = [
    { id: 'all', labelNo: 'Alle fagartikler (8)', labelEn: 'All Articles (8)' },
    { id: 'ai', labelNo: 'AI & Automasjon', labelEn: 'AI & Automation' },
    { id: 'architecture', labelNo: 'Arkitektur & System', labelEn: 'Architecture' },
    { id: 'web', labelNo: 'Web & Ytelse', labelEn: 'Web & Performance' },
    { id: 'mobile', labelNo: 'Mobil & Klient', labelEn: 'Mobile Engineering' },
    { id: 'security', labelNo: 'Sikkerhet & Zero Trust', labelEn: 'Security & Trust' },
    { id: 'design', labelNo: 'Design Engineering', labelEn: 'Design Engineering' },
    { id: 'data', labelNo: 'Data & PostgreSQL', labelEn: 'Data & Scaling' },
    { id: 'cloud', labelNo: 'Sky & FinOps', labelEn: 'Cloud & FinOps' },
  ];

  const filteredArticles =
    activeCategory === 'all'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#040816] text-white selection:bg-cyan-500 selection:text-black">
      {/* 
        STICKY NAVIGATION BAR
      */}
      <header className="sticky top-0 z-50 w-full bg-[#040816]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 transition-all">
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
            <button
              onClick={onStartProject}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-cyan-600/30 transition-all cursor-pointer"
            >
              {language === 'no' ? 'Start et prosjekt' : 'Start a Project'}
            </button>
          </div>
        </div>
      </header>

      {/* 
        HERO SECTION: INSIGHTS & ENGINEERING ARTICLES
      */}
      <section className="relative pt-12 pb-16 sm:py-20 px-4 sm:px-8 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-[11px] font-semibold tracking-wider text-cyan-300 uppercase mb-6">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>TEKNOLOGISKE INNSIKTER // GETON AS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6 max-w-4xl mx-auto [text-wrap:balance]">
            {language === 'no'
              ? 'Teknologi, arkitektur og fremtidens programvare'
              : 'Engineering, Architecture and the Future of Software'}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 [text-wrap:balance]">
            {language === 'no'
              ? 'Dypdykk i moderne software engineering, AI-agenter, modulære skysystemer, offline-first mobilarkitektur og design engineering skrevet av ingeniørene i Geton AS.'
              : 'In-depth perspectives on modern software engineering, autonomous AI agents, modular monoliths, offline-first mobile systems, and design engineering.'}
          </p>

          {/* Category Tabs Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {language === 'no' ? cat.labelNo : cat.labelEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ARTICLES GRID (Clicking navigates to dedicated full page)
      */}
      <section className="py-20 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => {
              const title = language === 'no' ? article.titleNo : article.titleEn;
              const excerpt = language === 'no' ? article.excerptNo : article.excerptEn;
              const categoryLabel = language === 'no' ? article.categoryLabelNo : article.categoryLabelEn;
              const date = language === 'no' ? article.dateNo : article.dateEn;

              return (
                <div
                  key={article.id}
                  onClick={() => onSelectArticle(article.id)}
                  className="group relative rounded-3xl bg-[#080d22] border border-white/10 hover:border-cyan-400/50 p-6 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div>
                    {/* Article Thumbnail */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 mb-5">
                      <img
                        src={article.imageSrc}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-cyan-300">
                        {categoryLabel}
                      </div>
                    </div>

                    {/* Meta Bar */}
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </span>
                      <span>•</span>
                      <span>{date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                      {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                      {excerpt}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {article.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Bar */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-300 group-hover:text-cyan-200">
                      <span>{language === 'no' ? 'Les hele artikkelen som side' : 'Read Full Article'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 
        BOTTOM CTA
      */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-[#080f2d] to-[#040816]">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-950/80 via-cyan-950/80 to-blue-950/80 border border-cyan-500/40 text-center shadow-[0_0_60px_rgba(6,182,212,0.25)]">
          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-4">
            {language === 'no'
              ? 'Vil du bygge fremtidens programvare med Geton AS?'
              : 'Want to Engineer Next-Gen Software with Geton AS?'}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {language === 'no'
              ? 'Vi kombinerer banebrytende arkitektur med rask leveringstakt og langsiktig trygghet.'
              : 'We combine battle-tested architecture with rapid agile execution and long-term partnership.'}
          </p>
          <button
            onClick={onStartProject}
            className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/30 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>{language === 'no' ? 'Start et prosjekt' : 'Start a Project'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <Footer onSelectTab={onNavigateToTab} onGetStarted={onStartProject} />
    </div>
  );
};
