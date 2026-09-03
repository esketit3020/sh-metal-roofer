import { useState } from 'react';
import { ArrowRight, BookOpen, Clock, Calendar, X } from 'lucide-react';
import { ARTICLES } from '../data/roofingData';
import { Article } from '../types';

export default function RoofingInsights() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="insights" className="bg-[#f8f9fa] text-stone-900 py-16 lg:py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 font-['Syne',sans-serif]">
              Roofing Tips &amp; Insights
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1.5 max-w-xl">
              Expert advice, guides, and updates to help you protect and maintain your roof.
            </p>
          </div>

          <button
            onClick={() => setSelectedArticle(ARTICLES[0])}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-lime-400 hover:bg-lime-300 text-stone-950 font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors shrink-0 self-start sm:self-auto"
          >
            <span>SEE ALL ARTICLES</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Articles Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ARTICLES.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-stone-900/80 backdrop-blur-sm text-white text-[10px] font-mono">
                    {art.readTime}
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-2.5">
                  <div className="text-[11px] font-bold text-stone-400 uppercase tracking-widest">
                    {art.category}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 leading-snug group-hover:text-lime-700 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-lime-600 transition-colors"
                >
                  <span className="border-b border-stone-300 pb-0.5 group-hover:border-lime-500">
                    READ MORE
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-stone-900 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-stone-500"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-lime-700 uppercase tracking-wider">
                <span>{selectedArticle.category}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 font-['Syne',sans-serif]">
                {selectedArticle.title}
              </h3>

              <div className="aspect-[16/9] rounded-xl overflow-hidden my-4">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3.5 text-sm text-stone-700 leading-relaxed">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  Written by SH Metal Roofers Technical Division (St Albans, VIC)
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
