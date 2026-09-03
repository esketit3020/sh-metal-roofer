import { useState, FormEvent } from 'react';
import { X, Star, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Review } from '../types';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: Review) => void;
}

export default function WriteReviewModal({ isOpen, onClose, onSubmitReview }: WriteReviewModalProps) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('St Albans, VIC');
  const [serviceType, setServiceType] = useState('Tile to Tin Conversion');
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      author: author.trim(),
      rating,
      date: 'Just now',
      text: text.trim(),
      verified: true,
      serviceType,
      location: location.trim() || 'St Albans, VIC',
    };

    onSubmitReview(newReview);
    setSubmitted(true);
  };

  const handleDone = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 text-stone-900 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors"
          aria-label="Close review modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold">
              Review Submitted!
            </h3>
            <p className="text-stone-600 text-sm">
              Thank you for reviewing Safe Hire Metal Roofing! Your feedback has been posted and will help fellow Victorian homeowners choose reliable metal roofing.
            </p>
            <button
              onClick={handleDone}
              className="mt-4 px-6 py-2.5 rounded-lg bg-[#C81D25] hover:bg-[#A8151D] text-white font-bold text-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-full bg-stone-100 border border-stone-200 font-bold text-blue-600 text-xs flex items-center justify-center">
                G
              </span>
              <span className="text-xs uppercase font-bold text-stone-500 tracking-wide">
                Google Reviews • Safe Hire Metal Roofing
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-stone-950">
              Write a Review
            </h3>
            <p className="text-xs text-stone-500 mb-5">
              Share your experience with our roofing team in St. Albans and Victoria.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Selector */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1.5">
                  Rating (Select Stars)
                </label>
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          (hoverRating || rating) >= star ? 'fill-current' : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-stone-600 font-bold text-sm ml-2">
                    {rating} out of 5 stars
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rachel Adams"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Suburb / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. St Albans, VIC"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Service Completed
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-red-500"
                >
                  <option value="Tile to Tin Conversion">Tile to Tin Conversion</option>
                  <option value="Colorbond Reroofing">Colorbond Reroofing</option>
                  <option value="Gutters & Downpipes">Gutters &amp; Downpipes</option>
                  <option value="Skylight Installation">Skylight Installation</option>
                  <option value="Emergency Leak Repair">Emergency Leak Repair</option>
                  <option value="Commercial Roofing">Commercial Roofing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Your Review *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe the punctuality, roof quality, cleanup, and communication..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-[#C81D25] hover:bg-[#A8151D] text-white font-extrabold text-sm tracking-wide transition-all shadow-sm"
                >
                  POST REVIEW
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
