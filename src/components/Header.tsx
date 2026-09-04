import { useState } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Wrench, Sparkles, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';
import { SafeHireLogo } from './SafeHireLogo';

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
          {/* Brand Logo with exact uploaded Safe Hire Metal Roofing insignia */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none" aria-label="Safe Hire Metal Roofing Home">
            <SafeHireLogo variant="horizontal" theme="dark" size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
            {/* Dropdown for services */}
            <div className="relative group flex items-center h-10">
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="inline-flex items-center gap-1.5 h-10 hover:text-red-500 transition-colors focus:outline-none cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-stone-400 group-hover:text-red-500 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 w-72 pt-2 hidden group-hover:block transition-all z-50">
                <div className="bg-[#181a1f] border border-stone-800 rounded-xl p-2 shadow-2xl space-y-1">
                  <a
                    href="#services"
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-stone-800/80 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">Reroofing (Tiles to Metal)</div>
                      <div className="text-xs text-stone-400">Old tile removal, steel battens &amp; Colorbond</div>
                    </div>
                  </a>
                  <a
                    href="#services"
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-stone-800/80 transition-colors"
                  >
                    <Wrench className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">New Roof Colorbond®</div>
                      <div className="text-xs text-stone-400">Architectural steel roofing &amp; extensions</div>
                    </div>
                  </a>
                  <a
                    href="#services"
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-stone-800/80 transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">Fascia &amp; Gutters</div>
                      <div className="text-xs text-stone-400">Colorbond fascia covers &amp; quad gutters</div>
                    </div>
                  </a>
                  <a
                    href="#services"
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-stone-800/80 transition-colors"
                  >
                    <Wrench className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">Box Gutters, Rain Heads &amp; Sumps</div>
                      <div className="text-xs text-stone-400">Custom fabrication &amp; overflow compliance</div>
                    </div>
                  </a>
                  <a
                    href="#services"
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-stone-800/80 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">Downpipes</div>
                      <div className="text-xs text-stone-400">High-capacity stormwater drainage</div>
                    </div>
                  </a>
                  <a
                    href="#services"
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-stone-800/80 transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">Wall Cladding</div>
                      <div className="text-xs text-stone-400">Standing seam &amp; architectural facades</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center h-10 hover:text-red-500 transition-colors"
            >
              Projects
            </a>
            <a
              href="#reviews"
              className="inline-flex items-center h-10 hover:text-red-500 transition-colors"
            >
              Google Reviews
            </a>
            <a
              href="#contact"
              className="inline-flex items-center h-10 hover:text-red-500 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Action: Phone + Crimson Red Button matching brand */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              id="header-phone-link"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-white hover:text-red-400 transition-colors font-semibold text-base"
              title="Call contractor"
            >
              <Phone className="w-4 h-4 text-red-500 fill-red-500" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="header-quote-btn"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#C81D25] hover:bg-[#A8151D] text-white font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(200,29,37,0.35)] hover:shadow-[0_0_25px_rgba(200,29,37,0.55)] transform hover:-translate-y-0.5"
            >
              <span>BOOK A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 rounded bg-[#C81D25] text-white font-bold text-xs"
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
          <div className="flex flex-col space-y-1.5 text-base font-medium">
            {/* Mobile Services Section */}
            <div>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-md hover:bg-stone-800 text-stone-200 transition-colors cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-stone-400 transition-transform ${
                    servicesDropdownOpen ? 'rotate-180 text-red-500' : ''
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="pl-4 mt-1 space-y-1 border-l border-stone-700/60 ml-3">
                  <a
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-stone-800 text-stone-300 text-sm"
                  >
                    Reroofing (Tiles to Metal)
                  </a>
                  <a
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-stone-800 text-stone-300 text-sm"
                  >
                    New Roof Colorbond®
                  </a>
                  <a
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-stone-800 text-stone-300 text-sm"
                  >
                    Fascia and Gutters
                  </a>
                  <a
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-stone-800 text-stone-300 text-sm"
                  >
                    Box Gutters (Rain Heads &amp; Sumps)
                  </a>
                  <a
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-stone-800 text-stone-300 text-sm"
                  >
                    Downpipes
                  </a>
                  <a
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-stone-800 text-stone-300 text-sm"
                  >
                    Wall Cladding
                  </a>
                </div>
              )}
            </div>

            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md hover:bg-stone-800 text-stone-200 transition-colors"
            >
              Projects
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md hover:bg-stone-800 text-stone-200 transition-colors"
            >
              Google Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md hover:bg-stone-800 text-stone-200 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="pt-4 border-t border-stone-800 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 rounded-md bg-stone-800 text-white font-semibold"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="flex items-center justify-center gap-2 py-3 rounded-md bg-[#C81D25] hover:bg-[#A8151D] text-white font-bold"
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
