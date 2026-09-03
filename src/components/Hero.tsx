import { ArrowRight, Phone, ShieldCheck, Award, Wrench, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onOpenReviewModal: () => void;
}

export default function Hero({ onOpenQuoteModal, onOpenReviewModal }: HeroProps) {
  return (
    <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Hero Image - High-end modern metal roof home matching screenshot */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Modern architectural house with dark Colorbond metal roof in Melbourne"
          className="w-full h-full object-cover object-center"
        />
        {/* Cinematic dark gradient overlays to match Roofrite screenshot */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-stone-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Tagline / Subheading matching screenshot */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C81D25]/15 border border-[#C81D25]/30 text-red-300 text-xs sm:text-sm font-semibold tracking-normal uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C81D25] animate-pulse"></span>
              St. Albans, Victoria • 78 Perrett Ave
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-normal text-white leading-[1.2]">
              Melbourne’s Roof Plumbing Experts –{' '}
              <span className="text-stone-200">Trusted in St. Albans</span>
            </h1>

            <p className="text-base sm:text-lg font-semibold text-red-400 tracking-normal">
              {BUSINESS_INFO.tagline}
            </p>

            <p className="text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed">
              Specialising in premium Colorbond® metal reroofing, tile-to-tin conversions, continuous guttering, and architectural cladding. Built to withstand Melbourne’s severe four-seasons-in-one-day storms.
            </p>

            {/* CTAs matching brand */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-book-quote-btn"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md bg-[#C81D25] hover:bg-[#A8151D] text-white font-extrabold text-sm sm:text-base tracking-wide transition-all shadow-[0_0_25px_rgba(200,29,37,0.35)] hover:shadow-[0_0_35px_rgba(200,29,37,0.5)] transform hover:-translate-y-0.5"
              >
                <span>BOOK A FREE QUOTE</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                id="hero-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-stone-900/80 hover:bg-stone-800 text-white font-bold text-sm sm:text-base border border-stone-700 hover:border-red-500/50 transition-all backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 text-red-500" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-stone-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>VBA Licensed Plumbers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>100% BlueScope® Steel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Free On-Site Inspections</span>
              </div>
            </div>
          </div>

          {/* Right Floating Badge (Exact Match to Roofrite screenshot's Google Reviews Card) */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              id="hero-google-review-badge"
              onClick={onOpenReviewModal}
              className="group bg-white text-stone-900 rounded-xl p-5 sm:p-6 shadow-2xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)] transition-all transform hover:-translate-y-1 text-left w-full max-w-sm border border-stone-200 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center font-black text-blue-600 text-sm border border-stone-200">
                    G
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      Google Rating
                    </div>
                    <div className="font-bold text-stone-900 text-sm">
                      {BUSINESS_INFO.name}
                    </div>
                  </div>
                </div>

                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Verified
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-extrabold text-stone-950 font-['Plus_Jakarta_Sans',sans-serif]">
                  {BUSINESS_INFO.rating}
                </span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="text-xs text-stone-600 font-medium">
                Based on {BUSINESS_INFO.reviewCount} customer reviews in St. Albans &amp; Victoria
              </div>

              <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 group-hover:text-stone-900 transition-colors">
                <span className="underline decoration-stone-300">Click to read customer reviews</span>
                <span className="text-red-600 font-bold">→</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
