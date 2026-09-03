import { useState, FormEvent } from 'react';
import { ArrowRight, Phone, MapPin, Mail, ShieldCheck, Check, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export default function Footer({ onOpenQuoteModal }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#0b0c0e] text-stone-300">
      {/* "Make It Happen With Us!" Full Banner matching screenshot */}
      <div className="relative py-16 lg:py-20 overflow-hidden border-b border-stone-800">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
          alt="Metal roof home backdrop"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/80 to-[#0b0c0e]/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Syne',sans-serif] tracking-tight">
            Make It Happen With Us!
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reach out to our friendly team today, and let us bring your next metal roofing, tile conversion, or guttering project to life.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              id="footer-make-it-happen-quote-btn"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-lime-400 hover:bg-lime-300 text-stone-950 font-extrabold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(163,230,53,0.4)] transform hover:-translate-y-0.5"
            >
              <span>BOOK A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="footer-make-it-happen-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-stone-900/90 hover:bg-stone-800 text-white font-bold text-sm border border-stone-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-lime-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Stay Updated Newsletter Strip matching screenshot */}
      <div className="border-b border-stone-800/80 bg-[#101216] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white font-['Syne',sans-serif]">
                Stay Updated with SH Metal Roofers
              </h3>
              <p className="text-xs sm:text-sm text-stone-400">
                Get the latest roofing tips, project updates, and storm season offers straight to your inbox.
              </p>
            </div>

            <form onSubmit={handleNewsletter} className="flex max-w-md w-full gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-md bg-stone-900 border border-stone-700 text-white text-xs sm:text-sm placeholder-stone-500 focus:outline-none focus:border-lime-400"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-md bg-lime-400 hover:bg-lime-300 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5"
              >
                <span>{subscribed ? 'SUBSCRIBED!' : 'SUBSCRIBE'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Compliance Details matching screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="w-9 h-9 text-lime-400" fill="none">
                <path d="M4 26L20 9L36 26" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 26L20 17.5L28 26" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="20" cy="7" r="2.5" fill="#a3e635" />
              </svg>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white font-['Syne',sans-serif] uppercase">
                  SH Metal{' '}
                </span>
                <span className="text-lg font-extrabold tracking-tight text-lime-400 font-['Syne',sans-serif] uppercase">
                  Roofers
                </span>
                <div className="text-[10px] text-stone-500 font-semibold tracking-wider uppercase">
                  St. Albans, Victoria
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Melbourne's leading metal roofing specialists. Providing long-lasting Colorbond® roof replacements, tile-to-tin conversions, and roof plumbing to St. Albans and all Western &amp; Northern Melbourne suburbs.
            </p>

            <div className="space-y-1.5 text-xs text-stone-400 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-lime-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white font-mono">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0" />
                <span>{BUSINESS_INFO.vbaLicense}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Residential Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Residential
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#tile-to-tin" className="hover:text-lime-400 transition-colors">Tile to Tin Conversion</a></li>
              <li><a href="#residential" className="hover:text-lime-400 transition-colors">Colorbond® Reroofing</a></li>
              <li><a href="#services" className="hover:text-lime-400 transition-colors">Quad &amp; Half-Round Gutters</a></li>
              <li><a href="#services" className="hover:text-lime-400 transition-colors">Fascia Covers &amp; Downpipes</a></li>
              <li><a href="#services" className="hover:text-lime-400 transition-colors">Velux Skylights</a></li>
              <li><a href="#services" className="hover:text-lime-400 transition-colors">Emergency Leak Repair</a></li>
            </ul>
          </div>

          {/* Col 3: Commercial Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Commercial
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#commercial" className="hover:text-lime-400 transition-colors">Klip-Lok Industrial Roofing</a></li>
              <li><a href="#commercial" className="hover:text-lime-400 transition-colors">Architectural Wall Cladding</a></li>
              <li><a href="#commercial" className="hover:text-lime-400 transition-colors">Commercial Box Gutters</a></li>
              <li><a href="#commercial" className="hover:text-lime-400 transition-colors">Factory Reroofing</a></li>
              <li><a href="#commercial" className="hover:text-lime-400 transition-colors">VBA Compliance Works</a></li>
              <li><a href="#commercial" className="hover:text-lime-400 transition-colors">Strata &amp; Body Corporate</a></li>
            </ul>
          </div>

          {/* Col 4: Quicklinks */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Quicklinks
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#why-us" className="hover:text-lime-400 transition-colors">Why SH Metal Roofers</a></li>
              <li><a href="#projects" className="hover:text-lime-400 transition-colors">Completed Projects</a></li>
              <li><a href="#reviews" className="hover:text-lime-400 transition-colors">Google Reviews (5.0 ★)</a></li>
              <li><a href="#contact" className="hover:text-lime-400 transition-colors">Get Directions (St Albans)</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Compliance */}
        <div className="mt-12 pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} SH Metal Roofers. {BUSINESS_INFO.abn}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Victorian Building Authority (VBA) Certified</span>
            <span>•</span>
            <span>BlueScope® Steel Partner</span>
            <span>•</span>
            <span className="text-lime-400">Quality Above All</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
