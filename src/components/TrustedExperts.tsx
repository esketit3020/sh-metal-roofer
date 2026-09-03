import { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, Award, Wrench, Sparkles, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

interface TrustedExpertsProps {
  onOpenQuoteModal: () => void;
}

export default function TrustedExperts({ onOpenQuoteModal }: TrustedExpertsProps) {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  return (
    <section id="why-us" className="bg-white text-stone-900 py-16 lg:py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, description, 4 check bullets, button */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 font-['Syne',sans-serif] leading-[1.15]">
              Trusted Roofing Experts for{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Over 15 Years</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-lime-400 -z-0 rounded-sm"></span>
              </span>
            </h2>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Family-owned, VBA-licensed, and BlueScope Colorbond® certified. Based in St. Albans, SH Metal Roofers delivers premium reroofing, tile-to-tin conversions, continuous guttering, and rectification roofing projects that Melbourne homeowners and builders rely on.
            </p>

            {/* 4 Checkmark Cards matching the exact layout in the screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                <div className="w-7 h-7 rounded-full bg-stone-200 text-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">15+ Years of Family Expertise</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Generations of dedicated Australian metal roofing craftsmanship.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                <div className="w-7 h-7 rounded-full bg-stone-200 text-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">VBA Licensed Roof Plumbers</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Full compliance certificates &amp; 6-year structural guarantee.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                <div className="w-7 h-7 rounded-full bg-stone-200 text-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">100% BlueScope® &amp; Colorbond®</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Only genuine Australian steel with up to 36-year manufacturer warranty.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                <div className="w-7 h-7 rounded-full bg-stone-200 text-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Trusted by Homeowners &amp; Builders</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Over 450+ completed roofs and 4.4 star Google feedback.</p>
                </div>
              </div>
            </div>

            {/* About Button */}
            <div className="pt-2">
              <button
                id="about-sh-btn"
                onClick={() => setAboutModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-lime-400 hover:bg-lime-300 text-stone-950 font-extrabold text-sm tracking-wide transition-all shadow-sm transform hover:-translate-y-0.5"
              >
                <span>ABOUT SH METAL ROOFERS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 4-item photo & badge grid matching the screenshot */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Tile 1: Master Plumbers / VBA / Authorised Badges */}
              <div className="bg-[#f2f4f7] rounded-xl p-5 flex flex-col justify-center items-center text-center border border-stone-200 shadow-sm aspect-[4/3]">
                <div className="w-12 h-12 rounded-full bg-stone-900 text-lime-400 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-extrabold text-sm text-stone-900 tracking-tight">VBA LICENSED</span>
                <span className="text-[11px] text-stone-500 font-semibold mt-1">
                  Victorian Building Authority Roof Plumbing
                </span>
                <span className="mt-2 text-[10px] font-mono px-2 py-0.5 bg-white rounded border border-stone-300 text-stone-700">
                  Lic #104829
                </span>
              </div>

              {/* Tile 2: Metal roof profile work in progress */}
              <div className="relative rounded-xl overflow-hidden shadow-sm aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=600&q=80"
                  alt="Metal roof insulation and battens installation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-bold">55mm Anticon Insulation</span>
                </div>
              </div>

              {/* Tile 3: Timber framing & skylight framing */}
              <div className="relative rounded-xl overflow-hidden shadow-sm aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
                  alt="Roof truss and battens carpentry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-bold">Precision Structural Tie-downs</span>
                </div>
              </div>

              {/* Tile 4: Finished pristine Colorbond roof */}
              <div className="relative rounded-xl overflow-hidden shadow-sm aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
                  alt="Completed Colorbond roof in Melbourne"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-bold">Colorbond® Monument Finish</span>
                </div>
              </div>
            </div>

            {/* Micro accreditation footer */}
            <div className="mt-4 p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-center justify-between text-xs text-stone-600">
              <span className="font-semibold text-stone-900">BlueScope® Steel Partner</span>
              <span>•</span>
              <span>Velux Certified Installer</span>
              <span>•</span>
              <span className="text-lime-700 font-bold">$20M Public Liability</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Modal */}
      {aboutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-stone-900 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setAboutModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-stone-500"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-lime-100 text-lime-800 text-xs font-bold rounded-full">
                OUR STORY &amp; STANDARDS
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-['Syne',sans-serif]">
                About SH Metal Roofers – St. Albans, Victoria
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed">
                Operating out of <strong>78 Perrett Ave, St Albans VIC 3021</strong>, SH Metal Roofers was founded with one clear guiding philosophy: <em>Quality Above All</em>. Where big sales franchises subcontract to unverified labourers, our licensed roof plumbers are personally on your roof from start to finish.
              </p>

              <div className="border-l-4 border-lime-400 pl-4 py-2 bg-stone-50 rounded-r-lg text-sm text-stone-700 italic">
                “A roof is the most critical protective barrier of your home. We treat every St. Albans and Melbourne roof as if it were sheltering our own family.”
              </div>

              <div className="space-y-3 pt-2 text-sm text-stone-700">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-lime-400 text-stone-950 font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </div>
                  <div>
                    <strong className="text-stone-900">Genuine Australian Steel Only:</strong>
                    <p className="text-xs text-stone-500">We refuse cheap imported thin-gauge tin. Every sheet we lay is stamped BlueScope Colorbond® with activate® corrosion technology.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-lime-400 text-stone-950 font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </div>
                  <div>
                    <strong className="text-stone-900">VBA Certified Compliance:</strong>
                    <p className="text-xs text-stone-500">We handle all compliance paperwork and issue the official Victorian Building Authority certification for every job over $750.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-lime-400 text-stone-950 font-bold flex items-center justify-center shrink-0 text-xs">
                    3
                  </div>
                  <div>
                    <strong className="text-stone-900">Spotless Clean-Up Guarantee:</strong>
                    <p className="text-xs text-stone-500">We run industrial magnetic sweeps across your driveway, lawns, and gardens to ensure zero metal swarf, nails, or screws are left behind for your tires or pets.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => {
                    setAboutModalOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="flex-1 py-3 rounded-lg bg-lime-400 hover:bg-lime-300 text-stone-950 font-bold text-sm"
                >
                  Book Free On-Site Inspection
                </button>
                <button
                  onClick={() => setAboutModalOpen(false)}
                  className="px-5 py-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
