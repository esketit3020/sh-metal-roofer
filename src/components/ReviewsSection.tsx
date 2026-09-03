import { useState } from 'react';
import { Star, CheckCircle2, Edit3, ShieldCheck, Sparkles } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/roofingData';
import { Review } from '../types';

interface ReviewsSectionProps {
  onOpenWriteReview: () => void;
  customReviews: Review[];
}

export default function ReviewsSection({ onOpenWriteReview, customReviews }: ReviewsSectionProps) {
  const [filter, setFilter] = useState<string>('all');

  const allReviews = [...customReviews, ...REVIEWS];

  const filteredReviews = filter === 'all'
    ? allReviews
    : allReviews.filter((r) => {
        if (filter === 'local-guide') {
          return r.badge?.toLowerCase().includes('local guide');
        }
        return (
          r.serviceType.toLowerCase().includes(filter.toLowerCase()) ||
          r.text.toLowerCase().includes(filter.toLowerCase())
        );
      });

  const total = allReviews.length || 1;
  const count5 = allReviews.filter((r) => r.rating === 5).length;
  const count4 = allReviews.filter((r) => r.rating === 4).length;
  const count3 = allReviews.filter((r) => r.rating === 3).length;
  const count2 = allReviews.filter((r) => r.rating === 2).length;
  const count1 = allReviews.filter((r) => r.rating === 1).length;

  const pct5 = Math.round((count5 / total) * 100);
  const pct4 = Math.round((count4 / total) * 100);
  const pct3 = Math.round((count3 / total) * 100);
  const pct2 = Math.round((count2 / total) * 100);
  const pct1 = Math.round((count1 / total) * 100);

  return (
    <section id="reviews" className="bg-white text-stone-900 py-16 lg:py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Google Summary */}
        <div className="bg-[#f8f9fa] rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Rating Big Number */}
            <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-stone-200 pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center font-black text-blue-600 border border-stone-200 text-sm">
                  G
                </span>
                <span className="text-xs uppercase tracking-widest font-bold text-stone-500">
                  Google Verified Rating
                </span>
              </div>

              <div className="text-5xl sm:text-6xl font-black text-stone-950 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                {BUSINESS_INFO.rating.toFixed(1)}
              </div>

              <div className="flex items-center justify-center lg:justify-start text-amber-400 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <div className="text-xs text-stone-500">
                Based on <strong className="text-stone-800">{allReviews.length} client reviews</strong> for metal roofing in St. Albans &amp; Greater Melbourne.
              </div>
            </div>

            {/* Middle: Rating breakdown */}
            <div className="lg:col-span-5 space-y-1.5 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <span className="w-12 font-semibold">5 Stars</span>
                <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full transition-all duration-500" style={{ width: `${pct5}%` }}></div>
                </div>
                <span className="w-8 text-right font-mono">{pct5}%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 font-semibold">4 Stars</span>
                <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full transition-all duration-500" style={{ width: `${pct4}%` }}></div>
                </div>
                <span className="w-8 text-right font-mono">{pct4}%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 font-semibold">3 Stars</span>
                <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full transition-all duration-500" style={{ width: `${pct3}%` }}></div>
                </div>
                <span className="w-8 text-right font-mono">{pct3}%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 font-semibold">2 Stars</span>
                <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full transition-all duration-500" style={{ width: `${pct2}%` }}></div>
                </div>
                <span className="w-8 text-right font-mono">{pct2}%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 font-semibold">1 Star</span>
                <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full transition-all duration-500" style={{ width: `${pct1}%` }}></div>
                </div>
                <span className="w-8 text-right font-mono">{pct1}%</span>
              </div>
            </div>

            {/* Right Action: Write a review */}
            <div className="lg:col-span-3 flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
              <span className="text-xs text-stone-500 mb-2">
                Had your roof worked on by Mehari &amp; the SH team?
              </span>
              <button
                id="review-section-write-btn"
                onClick={onOpenWriteReview}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm"
              >
                <Edit3 className="w-4 h-4 text-lime-400" />
                <span>WRITE A REVIEW</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 text-xs font-semibold">
          {[
            { id: 'all', label: `All Reviews (${allReviews.length})` },
            { id: 'local-guide', label: 'Local Guides' },
            { id: 'Pergola', label: 'Pergola Roofing' },
            { id: 'Insulation', label: 'Leaks & Insulation' },
            { id: 'Plumbing', label: 'Roofing & Plumbing' },
            { id: 'Repairs', label: 'Repairs & Inspection' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-3.5 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                filter === item.id
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-50 rounded-xl p-6 border border-stone-200/80 shadow-sm flex flex-col justify-between hover:border-stone-300 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-start gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-stone-900 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-stone-900 flex items-center gap-1.5">
                        <span>{rev.author}</span>
                        {rev.isNew && (
                          <span className="inline-flex items-center px-1.5 py-0.2 text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded">
                            NEW
                          </span>
                        )}
                      </div>
                      {rev.badge ? (
                        <div className="text-[11px] text-amber-700 font-medium flex items-center gap-1 mt-0.5">
                          {rev.badge.includes('Local Guide') && (
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block shrink-0" />
                          )}
                          <span>{rev.badge}</span>
                        </div>
                      ) : (
                        <div className="text-[11px] text-stone-400">{rev.location}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex text-amber-400 shrink-0">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded bg-white text-stone-700 text-[10px] font-semibold border border-stone-200 mb-3 shadow-2xs">
                  {rev.serviceType}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/70 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Google Review
                </span>
                <span className="font-medium text-stone-500">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
