import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSplit from './components/ServicesSplit';
import TrustedExperts from './components/TrustedExperts';
import ProjectShowcase from './components/ProjectShowcase';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import WriteReviewModal from './components/WriteReviewModal';
import { Review } from './types';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from './data/roofingData';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [writeReviewModalOpen, setWriteReviewModalOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState<{
    service?: string;
    size?: number;
    colour?: string;
  } | undefined>(undefined);

  const [customReviews, setCustomReviews] = useState<Review[]>([]);

  const handleOpenQuoteWithData = (data?: { service?: string; size?: number; colour?: string }) => {
    setQuoteInitialData(data);
    setQuoteModalOpen(true);
  };

  const handleAddReview = (newReview: Review) => {
    setCustomReviews((prev) => [newReview, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-stone-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Main Header matching screenshot */}
      <Header onOpenQuoteModal={() => handleOpenQuoteWithData()} />

      <main className="flex-1">
        {/* 3. Hero Section (Melbourne's Metal Roofing Experts - Quality Above All) */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteWithData()}
          onOpenReviewModal={() => {
            const reviewsEl = document.getElementById('reviews');
            if (reviewsEl) reviewsEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. "Quality Above All" & Split Cards (Residential & Commercial) matching screenshot */}
        <ServicesSplit onOpenQuoteModal={(data) => handleOpenQuoteWithData(data)} />

        {/* 5. "Trusted Roofing Experts for Over 15 Years" with checkmarks & badge grid */}
        <TrustedExperts onOpenQuoteModal={() => handleOpenQuoteWithData()} />

        {/* 6. "Trusted by Homeowners & Builders" dark project showcase matching screenshot */}
        <ProjectShowcase onOpenQuoteModal={() => handleOpenQuoteWithData()} />

        {/* 7. Google Reviews & Testimonials (4.4 Rating) */}
        <ReviewsSection
          onOpenWriteReview={() => setWriteReviewModalOpen(true)}
          customReviews={customReviews}
        />
      </main>

      {/* 9. "Make It Happen With Us!" CTA Banner, Newsletter, and Footer matching screenshot */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteWithData()} />

      {/* Floating Mobile Sticky Bar for quick emergency call or quote */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#111317]/95 backdrop-blur-md border-t border-stone-800 p-2.5 flex sm:hidden items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 py-2.5 px-3 rounded bg-stone-800 text-white font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-red-500" />
          <span>Call 0403 652 357</span>
        </a>
        <button
          onClick={() => handleOpenQuoteWithData()}
          className="flex-1 py-2.5 px-3 rounded bg-[#C81D25] hover:bg-[#A8151D] text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md"
        >
          <span>Free Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialData={quoteInitialData}
      />

      <WriteReviewModal
        isOpen={writeReviewModalOpen}
        onClose={() => setWriteReviewModalOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </div>
  );
}
