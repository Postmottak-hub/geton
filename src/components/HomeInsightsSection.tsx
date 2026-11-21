import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { ARTICLES } from '../data/articles.ts';
import { trackEvent } from '../utils/analytics.ts';

interface HomeInsightsSectionProps {
  onSelectArticle: (articleId: string) => void;
  onViewAllArticles: () => void;
}

export const HomeInsightsSection: React.FC<HomeInsightsSectionProps> = ({
  onSelectArticle,
  onViewAllArticles,
}) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const recentArticles = ARTICLES.slice(0, 3);

  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      className={`w-full py-20 sm:py-28 relative z-20 transition-colors duration-300 border-b ${
        isLight
          ? 'bg-[#fafaf9] text-neutral-900 border-neutral-200/80'
          : 'bg-[#040816] text-white border-white/10'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <span
              className={`text-xs font-semibold tracking-[0.2em] uppercase block mb-3 ${
                isLight ? 'text-sky-700' : 'text-cyan-300'
              }`}
            >
              {language === 'no' ? 'INNSIKT & ARTIKLER' : 'INSIGHTS & PERSPECTIVES'}
            </span>
            <h2
              id="insights-heading"
              className={`text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-[1.12] [text-wrap:balance] ${
                isLight ? 'text-neutral-900' : 'text-white'
              }`}
            >
              {language === 'no' ? 'Innsikt og inspirasjon' : 'Insights and inspiration'}
            </h2>
            <p
              className={`mt-4 text-base sm:text-lg leading-relaxed max-w-xl ${
                isLight ? 'text-neutral-600' : 'text-slate-300'
              }`}
            >
              {language === 'no'
                ? 'Praktiske artikler om AI-agenter, moderne systemarkitektur og lynraske webløsninger.'
                : 'Practical engineering perspectives on AI agents, scalable systems, and high-speed web products.'}
            </p>
          </div>

          <a
            href="/artikler"
            onClick={(e) => {
              e.preventDefault();
              trackEvent('cta_click', { label: 'home_view_all_articles', location: 'insights' });
              onViewAllArticles();
            }}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors shrink-0 w-fit ${
              isLight
                ? 'bg-white border-neutral-300 text-neutral-900 hover:bg-neutral-100'
                : 'bg-white/5 border-white/15 text-white hover:bg-white/10 hover:border-cyan-400/50'
            }`}
          >
            <span>{language === 'no' ? 'Se alle artikler' : 'View all articles'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Recent Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {recentArticles.map((article) => {
            const title = language === 'no' ? article.titleNo : article.titleEn;
            const excerpt = language === 'no' ? article.excerptNo : article.excerptEn;
            const category = language === 'no' ? article.categoryLabelNo : article.categoryLabelEn;
            const date = language === 'no' ? article.dateNo : article.dateEn;

            return (
              <a
                key={article.id}
                href={`/artikler/${article.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  trackEvent('article_click', { article: article.id, location: 'home_insights' });
                  onSelectArticle(article.id);
                }}
                className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isLight
                    ? 'bg-white border-[#e7e7e5] hover:border-neutral-400 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1'
                    : 'bg-[#081026]/85 border-white/10 hover:border-cyan-400/50 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:-translate-y-1'
                }`}
              >
                <div>
                  <div
                    className={`aspect-video w-full overflow-hidden ${
                      isLight ? 'bg-neutral-100' : 'bg-slate-900'
                    }`}
                  >
                    <img
                      src={article.imageSrc}
                      alt={title}
                      width={1280}
                      height={720}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div
                      className={`text-xs font-semibold mb-2.5 flex items-center gap-2 ${
                        isLight ? 'text-sky-700' : 'text-cyan-300'
                      }`}
                    >
                      <span>{category}</span>
                      <span aria-hidden="true">·</span>
                      <span className={isLight ? 'text-neutral-500 font-medium' : 'text-slate-400 font-medium'}>
                        {date}
                      </span>
                    </div>

                    <h3
                      className={`text-lg font-display font-bold leading-snug mb-2.5 transition-colors line-clamp-2 ${
                        isLight
                          ? 'text-neutral-900 group-hover:text-black'
                          : 'text-white group-hover:text-cyan-200'
                      }`}
                    >
                      {title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed line-clamp-2 ${
                        isLight ? 'text-neutral-600' : 'text-slate-300'
                      }`}
                    >
                      {excerpt}
                    </p>
                  </div>
                </div>

                <div
                  className={`px-6 pb-5 pt-3 border-t flex items-center justify-between text-xs font-semibold ${
                    isLight
                      ? 'border-neutral-100 text-neutral-900'
                      : 'border-white/10 text-cyan-300'
                  }`}
                >
                  <span>{language === 'no' ? 'Les artikkel' : 'Read article'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
