import { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, Shield, Calendar, CreditCard, ChevronRight } from 'lucide-react';
import { COLORBOND_SWATCHES } from '../data/roofingData';
import { ColorbondSwatch } from '../types';

interface RoofEstimatorProps {
  onOpenQuoteModal: (initialData?: { service?: string; size?: number; colour?: string }) => void;
}

export default function RoofEstimator({ onOpenQuoteModal }: RoofEstimatorProps) {
  const [serviceType, setServiceType] = useState<'tile-to-tin' | 'reroof' | 'gutters' | 'commercial'>('tile-to-tin');
  const [roofSize, setRoofSize] = useState<number>(180);
  const [selectedColour, setSelectedColour] = useState<ColorbondSwatch>(COLORBOND_SWATCHES[0]);
  const [showFinanceModal, setShowFinanceModal] = useState(false);

  // Price calculations based on Victorian market rates
  const getEstimate = () => {
    let ratePerSqm = 100;
    if (serviceType === 'tile-to-tin') ratePerSqm = 125; // includes tile strip, battens, insulation
    if (serviceType === 'reroof') ratePerSqm = 95;
    if (serviceType === 'gutters') ratePerSqm = 45; // linear approx
    if (serviceType === 'commercial') ratePerSqm = 85;

    const baseMin = Math.round(roofSize * ratePerSqm * 0.95);
    const baseMax = Math.round(roofSize * ratePerSqm * 1.15);

    return { min: baseMin, max: baseMax };
  };

  const estimate = getEstimate();

  const handleBookWithDetails = () => {
    let serviceLabel = 'Tile to Tin Conversion';
    if (serviceType === 'reroof') serviceLabel = 'Residential Metal Reroof';
    if (serviceType === 'gutters') serviceLabel = 'Gutters & Downpipes';
    if (serviceType === 'commercial') serviceLabel = 'Commercial Metal Roofing';

    onOpenQuoteModal({
      service: serviceLabel,
      size: roofSize,
      colour: selectedColour.name,
    });
  };

  return (
    <section id="calculator" className="bg-[#f4f5f7] text-stone-900 py-16 lg:py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 text-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-lime-600" />
            Transparent Victorian Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 font-['Syne',sans-serif]">
            Instant Roof Cost Estimator &amp; Colorbond® Visualizer
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Calculate a realistic ballpark estimate for your St. Albans or Melbourne home in under 30 seconds.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-sm font-bold text-stone-800 uppercase tracking-wide mb-2">
                1. Select Roofing Project Type
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'tile-to-tin', label: 'Tile to Tin Conversion', tag: 'Most Popular' },
                  { id: 'reroof', label: 'Colorbond® Reroof', tag: 'Metal Replacement' },
                  { id: 'gutters', label: 'Gutters & Downpipes', tag: 'Continuous Quad' },
                  { id: 'commercial', label: 'Commercial Metal Deck', tag: 'Industrial/Builder' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setServiceType(item.id as any)}
                    className={`p-3 text-left rounded-xl border transition-all text-xs sm:text-sm font-semibold flex flex-col justify-between ${
                      serviceType === item.id
                        ? 'border-stone-900 bg-stone-950 text-white shadow-md'
                        : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-800'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`text-[10px] font-normal mt-1 ${
                        serviceType === item.id ? 'text-lime-400' : 'text-stone-500'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Roof Size */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-stone-800 uppercase tracking-wide">
                  2. Approximate Roof Size
                </label>
                <span className="text-sm font-bold text-stone-950 bg-stone-100 px-3 py-1 rounded-md font-mono">
                  {roofSize} m²
                </span>
              </div>
              <input
                type="range"
                min="80"
                max="450"
                step="10"
                value={roofSize}
                onChange={(e) => setRoofSize(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-lime-500"
              />
              <div className="flex justify-between text-xs text-stone-400 mt-1 font-mono">
                <span>Unit/Townhouse (80m²)</span>
                <span>Average House (180m²)</span>
                <span>Large Multi-level (450m²)</span>
              </div>
            </div>

            {/* Step 3: Colorbond Swatch Selection */}
            <div id="colorbond-colours">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-stone-800 uppercase tracking-wide">
                  3. Colorbond® Colour Selection
                </label>
                <span className="text-xs font-semibold text-stone-600">
                  Selected: <strong className="text-stone-900">{selectedColour.name}</strong>
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {COLORBOND_SWATCHES.map((swatch) => (
                  <button
                    key={swatch.name}
                    onClick={() => setSelectedColour(swatch)}
                    className={`group relative p-2 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                      selectedColour.name === swatch.name
                        ? 'border-stone-900 ring-2 ring-lime-400 bg-stone-50'
                        : 'border-stone-200 hover:border-stone-400 bg-white'
                    }`}
                    title={`${swatch.name}: ${swatch.description}`}
                  >
                    <div
                      className="w-7 h-7 sm:w-9 sm:h-9 rounded-full shadow-inner border border-black/10"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <span className="text-[10px] sm:text-[11px] font-semibold text-stone-800 text-center leading-tight truncate w-full">
                      {swatch.name.replace('®', '')}
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-xs text-stone-500 mt-2 italic">
                *Genuine BlueScope® steel with Thermatech® solar reflectance technology.
              </p>
            </div>
          </div>

          {/* Result Estimate Column */}
          <div className="lg:col-span-5 bg-stone-950 text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-inner">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <span className="text-xs uppercase tracking-widest text-lime-400 font-bold">
                  Ballpark Estimate
                </span>
                <span className="text-xs text-stone-400">Melbourne VIC</span>
              </div>

              <div className="my-6">
                <div className="text-xs text-stone-400 mb-1">Estimated Project Range:</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne',sans-serif] tracking-tight">
                  ${estimate.min.toLocaleString()} – ${estimate.max.toLocaleString()}
                </div>
                <div className="text-xs text-stone-400 mt-1">
                  Inclusive of GST, tile removal, steel battens, insulation, &amp; VBA compliance.
                </div>
              </div>

              {/* Specs Breakdown */}
              <div className="space-y-2.5 text-xs text-stone-300 bg-stone-900/90 p-4 rounded-lg border border-stone-800 mb-6">
                <div className="flex justify-between">
                  <span className="text-stone-400">Selected Service:</span>
                  <span className="font-semibold text-white capitalize">{serviceType.replace(/-/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Roof Area:</span>
                  <span className="font-semibold text-white">{roofSize} m²</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Colorbond Shade:</span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-white">
                    <span
                      className="w-3 h-3 rounded-full border border-white/20"
                      style={{ backgroundColor: selectedColour.hex }}
                    />
                    {selectedColour.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Estimated Duration:</span>
                  <span className="font-semibold text-lime-400">3 – 5 Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">BlueScope Warranty:</span>
                  <span className="font-semibold text-white">Up to 36 Years</span>
                </div>
              </div>
            </div>

            {/* Book Inspection with estimate */}
            <div className="space-y-3">
              <button
                id="estimator-book-btn"
                onClick={handleBookWithDetails}
                className="w-full py-3.5 px-4 rounded-md bg-lime-400 hover:bg-lime-300 text-stone-950 font-extrabold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] flex items-center justify-center gap-2"
              >
                <span>BOOK FREE ON-SITE INSPECTION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-stone-400">
                Exact fixed price guaranteed in writing after complimentary drone/ladder inspection.
              </div>
            </div>
          </div>
        </div>

        {/* Flexible Payment Options Banner (Matching Handypay block from the user's screenshot!) */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-10 shadow-sm overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Graphic: Handypay Style Finance Graphic */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-100/80 flex flex-col items-center text-center max-w-sm w-full shadow-inner">
                {/* Visual handshake / hand icon */}
                <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center mb-4 shadow-md">
                  <CreditCard className="w-8 h-8" />
                </div>
                <div className="text-2xl font-extrabold tracking-tight text-stone-900 font-['Syne',sans-serif]">
                  handypay
                </div>
                <span className="text-[11px] uppercase tracking-widest text-orange-600 font-bold mt-0.5">
                  Roofing Finance Partner
                </span>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-stone-700 bg-white px-3 py-1.5 rounded-full border border-stone-200">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Plans from $45/week • 0% Interest Options</span>
                </div>
              </div>
            </div>

            {/* Right Copy: Flexible Payment Options with Handypay */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950 font-['Syne',sans-serif]">
                Flexible Payment Options with Handypay
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Don’t put off urgent roof leaks or tile-to-tin conversions. Spread the cost of your roofing project with Handypay's simple, flexible payment plans. Fast digital approval and manageable weekly or fortnightly installments.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  id="handypay-learn-btn"
                  onClick={() => setShowFinanceModal(true)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-lime-400 hover:bg-lime-300 text-stone-950 font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenQuoteModal({ service: 'Flexible Finance Reroof' })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs sm:text-sm transition-colors"
                >
                  Apply with Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Finance Modal */}
      {showFinanceModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 text-stone-900 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-2xl font-bold font-['Syne',sans-serif]">
              Roofing Finance with Handypay
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              SH Metal Roofers partners with Handypay to provide Australian homeowners with stress-free financing for new roofs, guttering, and storm repairs.
            </p>

            <ul className="space-y-2.5 text-sm text-stone-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                <span>Borrow from $2,000 up to $75,000 for residential roofing</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                <span>Terms from 1 to 7 years with no early exit penalties</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                <span>100% online application with fast same-day approval</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                <span>No home equity or property valuation needed</span>
              </li>
            </ul>

            <div className="pt-2 flex gap-3">
              <button
                onClick={() => {
                  setShowFinanceModal(false);
                  onOpenQuoteModal({ service: 'Finance Application' });
                }}
                className="flex-1 py-3 rounded-lg bg-lime-400 hover:bg-lime-300 text-stone-950 font-bold text-sm"
              >
                Inquire About Finance Quote
              </button>
              <button
                onClick={() => setShowFinanceModal(false)}
                className="px-5 py-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
