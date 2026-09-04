import { useState } from 'react';
import { ArrowRight, Check, Home, Building2, ChevronRight, X, Phone } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/roofingData';

interface ServicesSplitProps {
  onOpenQuoteModal?: (data?: { service?: string }) => void;
}

export default function ServicesSplit({ onOpenQuoteModal }: ServicesSplitProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="bg-[#f8f9fa] text-stone-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quality Above All Section matching screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-100">
            <span>Our Core Standard</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-normal text-stone-900">
            Quality{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Above All</span>
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-red-600/20 -z-0 rounded-sm"></span>
            </span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Safe Hire Metal Roofing is a trusted local business in St. Albans with extensive experience in Colorbond® reroofing (tiles to metal), new roofs, fascia &amp; gutters, box gutters with rain heads &amp; sumps, downpipes, and architectural wall cladding.
          </p>
        </div>

        {/* Split Cards: Residential & Commercial matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Residential Card */}
          <div
            id="card-residential"
            className="group relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
              alt="Residential metal roofing in St Albans"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />

            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
              {/* Top pill */}
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wide border border-white/10">
                  <Home className="w-3.5 h-3.5 text-red-500" />
                  Domestic Specialists
                </span>
                <span className="text-white/80 text-xs font-mono bg-black/40 px-2 py-0.5 rounded">
                  Tile-to-Tin &amp; Colorbond®
                </span>
              </div>

              {/* Bottom Content */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Residential
                </h3>
                <p className="text-stone-300 text-sm sm:text-base line-clamp-3 leading-relaxed">
                  Reroofing (tiles to metal), new Colorbond® roofs, fascia and gutters, high-flow downpipes, and insulation &amp; sike underlays engineered for Australian homes.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedService('residential')}
                    className="inline-flex items-center gap-2 text-red-400 font-bold text-sm tracking-wider uppercase group-hover:text-red-300 transition-colors"
                  >
                    <span className="border-b-2 border-red-500 pb-0.5">LEARN MORE</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Commercial Card */}
          <div
            id="card-commercial"
            className="group relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <img
              src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80"
              alt="Commercial metal roofing and wall cladding in Melbourne"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />

            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
              {/* Top pill */}
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wide border border-white/10">
                  <Building2 className="w-3.5 h-3.5 text-red-500" />
                  Industrial &amp; Builders
                </span>
                <span className="text-white/80 text-xs font-mono bg-black/40 px-2 py-0.5 rounded">
                  Klip-Lok &amp; Cladding
                </span>
              </div>

              {/* Bottom Content */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Commercial
                </h3>
                <p className="text-stone-300 text-sm sm:text-base line-clamp-3 leading-relaxed">
                  Specialist roofing, architectural standing seam wall cladding, factory reroofing, and compliance works for builders, property managers, and body corporates.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedService('commercial')}
                    className="inline-flex items-center gap-2 text-red-400 font-bold text-sm tracking-wide uppercase group-hover:text-red-300 transition-colors"
                  >
                    <span className="border-b-2 border-red-500 pb-0.5">LEARN MORE</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Service Grid */}
        <div className="border-t border-stone-200 pt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wide">
                Our Complete Scope of Works
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Full Victorian Metal Roofing Services
              </h3>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-stone-900 hover:text-red-600 transition-colors"
              title="Call to request custom quote"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>Call for custom quote ({BUSINESS_INFO.phone})</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm hover:border-red-500/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-stone-900 text-red-500 flex items-center justify-center font-bold text-base mb-4">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-stone-900 mb-2">
                    {srv.title}
                  </h4>
                  <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                    {srv.shortDesc}
                  </p>
                  <ul className="space-y-1.5 mb-6 text-xs text-stone-700">
                    {srv.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full py-2.5 px-3 rounded bg-stone-100 hover:bg-[#C81D25] hover:text-white text-stone-900 text-xs font-bold transition-colors text-center inline-flex items-center justify-center gap-2"
                  title={`Call to request quote for ${srv.title}`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call to Request Quote</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Service Deep Dive */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-stone-900 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-stone-500"
            >
              <X className="w-5 h-5" />
            </button>

            {selectedService === 'residential' ? (
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-full border border-red-100">
                  RESIDENTIAL DIVISION
                </div>
                <h3 className="text-2xl font-bold">
                  Residential Metal Roofing in St. Albans &amp; Melbourne
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Australian homes face harsh UV extremes, sudden freezing hail, and torrential downpours. Our residential roofing team specialises in stripping old brittle tiles and replacing them with premium 0.42 BMT or 0.48 BMT Colorbond® steel.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm">
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <strong className="block text-stone-900">Reroofing (Tiles to Metal)</strong>
                    <span className="text-xs text-stone-600">Old tile removal, steel battens &amp; lightweight Colorbond Custom Orb.</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <strong className="block text-stone-900">New Roof Colorbond®</strong>
                    <span className="text-xs text-stone-600">Complete new architectural steel roofing with precision battens.</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <strong className="block text-stone-900">Fascia and Gutters</strong>
                    <span className="text-xs text-stone-600">Colorbond fascia covers and high-capacity quad/half-round gutters.</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <strong className="block text-stone-900">Downpipes &amp; Stormwater</strong>
                    <span className="text-xs text-stone-600">High-volume round and rectangular downpipes for heavy storm drainage.</span>
                  </div>
                </div>
                <div className="pt-4 flex gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex-1 py-3 rounded-lg bg-[#C81D25] hover:bg-[#A8151D] text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {BUSINESS_INFO.phone} For Quote</span>
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-stone-900 text-red-400 text-xs font-bold rounded-full border border-stone-700">
                  COMMERCIAL DIVISION
                </div>
                <h3 className="text-2xl font-bold">
                  Commercial Metal Roofing &amp; Architectural Cladding
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  We partner with Victoria's builders, commercial landlords, and strata corporations for complex large-scale roofing solutions. From Klip-Lok warehouse decks to standing seam wall claddings and massive stormwater box gutters.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm">
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <strong className="block text-stone-900">Architectural Wall Cladding</strong>
                    <span className="text-xs text-stone-600">Interlocking panels &amp; standing seam facades for modern developments.</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <strong className="block text-stone-900">Box Gutters, Rain Heads &amp; Sumps</strong>
                    <span className="text-xs text-stone-600">Custom welded stainless sumps, rain heads &amp; high-flow box gutters.</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <strong className="block text-stone-900">Metal Battens &amp; Reroofing</strong>
                    <span className="text-xs text-stone-600">Heavy gauge steel battens with structural leveling and compliance.</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <strong className="block text-stone-900">Insulation &amp; Sike (Sarking)</strong>
                    <span className="text-xs text-stone-600">Thermal insulation blankets and condensation vapour barriers.</span>
                  </div>
                </div>
                <div className="pt-4 flex gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex-1 py-3 rounded-lg bg-[#C81D25] hover:bg-[#A8151D] text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {BUSINESS_INFO.phone} For Tender / Quote</span>
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
