import { useState } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Wrench, Sparkles, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#111315] text-white border-b border-stone-800/80 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo matching Roofrite style in screenshot */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Geometric Roof Icon */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-10 h-10 text-lime-400" fill="none">
                {/* Pitched metal roof silhouette */}
                <path
                  d="M4 26L20 9L36 26"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 26L20 17.5L28 26"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="20" cy="7" r="2.5" fill="#a3e635" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white font-['Syne',sans-serif] uppercase">
                  SH Metal
                </span>
                <span className="text-xl font-extrabold tracking-tight text-lime-400 font-['Syne',sans-serif] uppercase">
                  Roofers
                </span>
              </div>
              <span className="text-[10px] tracking-widest text-stone-400 uppercase font-semibold">
                St. Albans, Victoria • Quality Above All
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
            <a href="#why-us" className="hover:text-lime-400 transition-colors">
              Why SH Metal
            </a>

            {/* Dropdown for services */}
            <div className="relative group">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-1 hover:text-lime-400 transition-colors py-2"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-stone-400 group-hover:text-lime-400 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 w-64 pt-2 hidden group-hover:block transition-all">
                <div className="bg-[#181a1f] border border-stone-800 rounded-xl p-2 shadow-2xl space-y-1">
                  <a
                    href="#tile-to-tin"
                    className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-stone-800/80 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">Tile to Tin Conversion</div>
                      <div className="text-xs text-stone-400">Replace old tiles with Colorbond</div>
                    </div>
                  </a>
                  <a
                    href="#residential"
                    className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-stone-800/80 transition-colors"
                  >
                    <Wrench className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">Residential Metal Reroofs</div>
                      <div className="text-xs text-stone-400">Corrugated &amp; standing seam</div>
                    </div>
                  </a>
                  <a
                    href="#commercial"
                    className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-stone-800/80 transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">Commercial &amp; Cladding</div>
                      <div className="text-xs text-stone-400">Box gutters, factories &amp; wall cladding</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a href="#projects" className="hover:text-lime-400 transition-colors">
              Projects
            </a>
            <a href="#reviews" className="hover:text-lime-400 transition-colors">
              Google Reviews
            </a>
            <a href="#contact" className="hover:text-lime-400 transition-colors">
              Directions &amp; Contact
            </a>
          </nav>

          {/* Right Action: Phone + Lime Green Button matching screenshot */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              id="header-phone-link"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-white hover:text-lime-400 transition-colors font-semibold text-base"
              title="Call contractor"
            >
              <Phone className="w-4 h-4 text-lime-400 fill-lime-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="header-quote-btn"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-lime-400 hover:bg-lime-300 text-stone-950 font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)] transform hover:-translate-y-0.5"
            >
              <span>BOOK A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 rounded bg-lime-400 text-stone-950 font-bold text-xs"
            >
              FREE QUOTE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#16181d] border-b border-stone-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2.5 text-base font-medium">
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-800 text-stone-200"
            >
              Why SH Metal Roofers
            </a>
            <a
              href="#tile-to-tin"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-800 text-stone-200"
            >
              Tile to Tin Conversions
            </a>
            <a
              href="#residential"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-800 text-stone-200"
            >
              Residential Metal Reroofing
            </a>
            <a
              href="#commercial"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-800 text-stone-200"
            >
              Commercial Roofing &amp; Cladding
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-800 text-stone-200"
            >
              Completed Projects
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-800 text-stone-200"
            >
              Google Reviews (4.4 ★)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-800 text-stone-200"
            >
              Directions (78 Perrett Ave, St Albans)
            </a>
          </div>

          <div className="pt-4 border-t border-stone-800 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 rounded-md bg-stone-800 text-white font-semibold"
            >
              <Phone className="w-4 h-4 text-lime-400" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="flex items-center justify-center gap-2 py-3 rounded-md bg-lime-400 text-stone-950 font-bold"
            >
              <span>BOOK A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
