import { useState } from 'react';
import { Star, CheckCircle2, MessageSquare, ThumbsUp, Edit3 } from 'lucide-react';
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
    : allReviews.filter((r) => r.serviceType.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="reviews" className="bg-white text-stone-900 py-16 lg:py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Google Summary */}
        <div className="bg-[#f8f9fa] rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Rating Big Number */}
            <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-stone-200 pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center font-black text-blue-600 border border-stone-200">
                  G
                </span>
                <span className="text-xs uppercase tracking-widest font-bold text-stone-500">
                  Google Verified Rating
                </span>
              </div>

              <div className="text-5xl sm:text-6xl font-black text-stone-950 font-['Syne',sans-serif]">
                {BUSINESS_INFO.rating}
              </div>

              <div className="flex items-center justify-center lg:justify-start text-amber-400 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <div className="text-xs text-stone-500">
                Based on <strong className="text-stone-800">{allReviews.length} client reviews</strong> for metal roofing in St. Albans &amp; Melbourne.
              </div>
            </div>

            {/* Middle: Rating breakdown */}
            <div className="lg:col-span-5 space-y-1.5 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <span className="w-12 font-semibold">5 Stars</span>
                <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[90%]"></div>
                </div>
                <span className="w-8 text-right font-mono">90%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 font-semibold">4 Stars</span>
                <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[10%]"></div>
                </div>
                <span className="w-8 text-right font-mono">10%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 font-semibold">3 Stars</span>
                <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[0%]"></div>
                </div>
                <span className="w-8 text-right font-mono">0%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 font-semibold">2 Stars</span>
                <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[0%]"></div>
                </div>
                <span className="w-8 text-right font-mono">0%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 font-semibold">1 Star</span>
                <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[0%]"></div>
                </div>
                <span className="w-8 text-right font-mono">0%</span>
              </div>
            </div>

            {/* Right Action: Write a review */}
            <div className="lg:col-span-3 flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
              <span className="text-xs text-stone-500 mb-2">
                Had your roof worked on by Steve &amp; the SH team?
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
            { id: 'all', label: 'All Reviews' },
            { id: 'tile', label: 'Tile to Tin Conversions' },
            { id: 'colorbond', label: 'Colorbond Reroofing' },
            { id: 'gutters', label: 'Gutters & Plumbing' },
            { id: 'leak', label: 'Emergency Repairs' },
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
              className="bg-stone-50 rounded-xl p-6 border border-stone-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-lime-400/30 text-lime-900 font-bold text-xs flex items-center justify-center border border-lime-400/40">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-stone-900">{rev.author}</div>
                      <div className="text-[11px] text-stone-400">{rev.location}</div>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="inline-block px-2 py-0.5 rounded bg-white text-stone-700 text-[10px] font-semibold border border-stone-200 mb-3">
                  {rev.serviceType}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Local Customer
                </span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
