import { useState, FormEvent } from 'react';
import { ArrowRight, Phone, MapPin, Mail, ShieldCheck, Check, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';
import { SafeHireLogo } from './SafeHireLogo';

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

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-normal">
            Make It Happen With Us!
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Reach out to our friendly team today, and let us bring your next metal roofing, tile conversion, or guttering project to life.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              id="footer-make-it-happen-quote-btn"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#C81D25] hover:bg-[#A8151D] text-white font-extrabold text-sm tracking-wide transition-all shadow-[0_4px_25px_rgba(200,29,37,0.4)] transform hover:-translate-y-0.5"
            >
              <span>BOOK A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="footer-make-it-happen-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-stone-900/90 hover:bg-stone-800 text-white font-bold text-sm border border-stone-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-red-500" />
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
              <h3 className="text-xl font-bold text-white">
                Stay Updated with Safe Hire Metal Roofing
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
                className="flex-1 px-4 py-2.5 rounded-md bg-stone-900 border border-stone-700 text-white text-xs sm:text-sm placeholder-stone-500 focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-md bg-[#C81D25] hover:bg-[#A8151D] text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5"
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
            <div className="flex items-center">
              <SafeHireLogo variant="horizontal" theme="dark" size="md" />
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Melbourne's leading metal roofing specialists. Providing long-lasting Colorbond® roof replacements, tile-to-tin conversions, and roof plumbing to St. Albans and all Western &amp; Northern Melbourne suburbs.
            </p>

            <div className="space-y-1.5 text-xs text-stone-400 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white font-mono">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
                <span>{BUSINESS_INFO.vbaLicense}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Residential Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wide text-white">
              Residential
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#tile-to-tin" className="hover:text-red-400 transition-colors">Tile to Tin Conversion</a></li>
              <li><a href="#residential" className="hover:text-red-400 transition-colors">Colorbond® Reroofing</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Quad &amp; Half-Round Gutters</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Fascia Covers &amp; Downpipes</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Velux Skylights</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Emergency Leak Repair</a></li>
            </ul>
          </div>

          {/* Col 3: Commercial Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wide text-white">
              Commercial
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#commercial" className="hover:text-red-400 transition-colors">Klip-Lok Industrial Roofing</a></li>
              <li><a href="#commercial" className="hover:text-red-400 transition-colors">Architectural Wall Cladding</a></li>
              <li><a href="#commercial" className="hover:text-red-400 transition-colors">Commercial Box Gutters</a></li>
              <li><a href="#commercial" className="hover:text-red-400 transition-colors">Factory Reroofing</a></li>
              <li><a href="#commercial" className="hover:text-red-400 transition-colors">VBA Compliance Works</a></li>
              <li><a href="#commercial" className="hover:text-red-400 transition-colors">Strata &amp; Body Corporate</a></li>
            </ul>
          </div>

          {/* Col 4: Quicklinks */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wide text-white">
              Quicklinks
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#projects" className="hover:text-red-400 transition-colors">Completed Projects</a></li>
              <li><a href="#reviews" className="hover:text-red-400 transition-colors">Google Reviews (4.4 ★)</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Compliance */}
        <div className="mt-12 pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} Safe Hire Metal Roofing. {BUSINESS_INFO.abn}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Victorian Building Authority (VBA) Certified</span>
            <span>•</span>
            <span>BlueScope® Steel Partner</span>
            <span>•</span>
            <span className="text-red-400">Quality Above All</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
