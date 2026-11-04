import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Share2,
  Check,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Code2,
  MessageSquare,
  ChevronRight,
} from 'lucide-react';
import { Article, ARTICLES } from '../data/articles.ts';
import { GetonLogo } from '../components/Logo.tsx';
import { Footer } from '../components/Footer.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { LanguageSwitcher } from '../components/LanguageSwitcher.tsx';

interface ArticleDetailPageProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (articleId: string) => void;
  onStartProject: () => void;
  onNavigateToTab: (tab: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  onBack,
  onSelectArticle,
  onStartProject,
  onNavigateToTab,
}) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [article.id]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const title = language === 'no' ? article.titleNo : article.titleEn;
  const excerpt = language === 'no' ? article.excerptNo : article.excerptEn;
  const categoryLabel = language === 'no' ? article.categoryLabelNo : article.categoryLabelEn;
  const date = language === 'no' ? article.dateNo : article.dateEn;
  const authorRole = language === 'no' ? article.authorRoleNo : article.authorRoleEn;
  const subsections = language === 'no' ? article.subsectionsNo : article.subsectionsEn;
  const quoteCallout = language === 'no' ? article.quoteCalloutNo : article.quoteCalloutEn;
  const keyTakeaways = language === 'no' ? article.keyTakeawaysNo : article.keyTakeawaysEn;

  // Other related articles (excluding the active one)
  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

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
              <span>{language === 'no' ? 'Tilbake til artikler' : 'Back to Insights'}</span>
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
        ARTICLE HERO HEADER
      */}
      <section className="relative pt-12 pb-16 sm:py-20 px-4 sm:px-8 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb & Meta */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-400 mb-6">
            <span className="px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-[11px] font-semibold text-cyan-300 uppercase tracking-wider">
              {categoryLabel}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{date}</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold font-display tracking-tight text-white mb-6 leading-[1.15] [text-wrap:balance]">
            {title}
          </h1>

          {/* Excerpt Lead */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8 [text-wrap:balance]">
            {excerpt}
          </p>

          {/* Author Badge & Share Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold text-sm shadow-md shadow-cyan-500/20">
                {article.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{article.author}</div>
                <div className="text-xs text-slate-400">{authorRole} · Geton AS</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">
                      {language === 'no' ? 'Lenke kopiert!' : 'Link Copied!'}
                    </span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-cyan-300" />
                    <span>{language === 'no' ? 'Del artikkel' : 'Share Article'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 
        HERO IMAGE BANNER
      */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 -mt-6 sm:-mt-8 relative z-20 mb-14">
        <div className="rounded-3xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl">
          <img
            src={article.imageSrc}
            alt={title}
            className="w-full h-[280px] sm:h-[420px] object-cover"
          />
        </div>
      </section>

      {/* 
        ARTICLE BODY CONTENT
      */}
      <article className="max-w-3xl mx-auto px-4 sm:px-8 pb-20">
        
        {/* Subsections */}
        <div className="space-y-12">
          {subsections.map((sub, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight leading-snug">
                {sub.heading}
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {sub.text}
              </p>

              {sub.codeSnippet && (
                <div className="my-6 rounded-2xl bg-[#030612] border border-cyan-400/30 p-5 overflow-x-auto shadow-lg shadow-black/40">
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 mb-3 pb-2 border-b border-white/10">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span>Arkitektur- & kodeeksempel</span>
                  </div>
                  <pre className="text-xs sm:text-sm text-cyan-100 font-sans leading-relaxed">
                    <code>{sub.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* High-Impact Quote Callout */}
        <div className="my-14 p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-slate-950 border border-cyan-500/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <p className="text-lg sm:text-xl font-medium text-cyan-200 italic leading-relaxed relative z-10">
            {quoteCallout}
          </p>
          <div className="mt-4 text-xs font-bold text-cyan-400 uppercase tracking-widest relative z-10">
            — {article.author}, Geton AS
          </div>
        </div>

        {/* Key Takeaways Box */}
        <div className="my-12 p-7 sm:p-9 rounded-3xl bg-cyan-950/30 border border-cyan-400/40 shadow-xl">
          <div className="text-xs font-bold text-cyan-300 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>
              {language === 'no' ? 'Hovedlærdommer for teknologiledere' : 'Key Engineering Takeaways'}
            </span>
          </div>
          <div className="space-y-3">
            {keyTakeaways.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-2 mb-12">
          <span className="text-xs text-slate-400 font-semibold mr-1">
            {language === 'no' ? 'Relevante teknologier:' : 'Topics:'}
          </span>
          {article.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Back to all articles button */}
        <div className="pt-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-white transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{language === 'no' ? 'Se alle artikler' : 'Explore All Articles'}</span>
          </button>

          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs sm:text-sm font-bold shadow-md shadow-cyan-500/25 transition-all cursor-pointer"
          >
            <span>{language === 'no' ? 'Diskuter løsning med Geton AS' : 'Discuss Architecture with Us'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </article>

      {/* 
        MORE ARTICLES RECOMMENDATION STRIP
      */}
      <section className="py-20 px-4 sm:px-8 border-t border-white/10 bg-[#060c20]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-1">
                {language === 'no' ? 'VIDERE LESNING' : 'RECOMMENDED READING'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                {language === 'no' ? 'Flere teknologiske dypdykk' : 'More Engineering Deep Dives'}
              </h3>
            </div>
            <button
              onClick={onBack}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white cursor-pointer"
            >
              <span>{language === 'no' ? 'Alle artikler' : 'All Articles'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => {
              const relTitle = language === 'no' ? rel.titleNo : rel.titleEn;
              const relCategory = language === 'no' ? rel.categoryLabelNo : rel.categoryLabelEn;
              const relDate = language === 'no' ? rel.dateNo : rel.dateEn;

              return (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel.id)}
                  className="group rounded-2xl bg-[#080e28] border border-white/10 hover:border-cyan-400/40 p-5 flex flex-col justify-between shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-900 border border-white/10">
                      <img
                        src={rel.imageSrc}
                        alt={relTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-semibold text-cyan-300 border border-white/15">
                        {relCategory}
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 mb-2">
                      {rel.readTime} • {relDate}
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug line-clamp-2 mb-3">
                      {relTitle}
                    </h4>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-300">
                    <span>{language === 'no' ? 'Les artikkel' : 'Read Article'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer onSelectTab={onNavigateToTab} onGetStarted={onStartProject} />
    </div>
  );
};
