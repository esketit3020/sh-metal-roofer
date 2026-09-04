import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Layers, Eye, CheckCircle2, Phone } from 'lucide-react';
import { PROJECTS, BUSINESS_INFO } from '../data/roofingData';

interface ProjectShowcaseProps {
  onOpenQuoteModal?: () => void;
}

export default function ProjectShowcase({ onOpenQuoteModal }: ProjectShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(false);
  const [showAllModal, setShowAllModal] = useState(false);

  const activeProject = PROJECTS[currentIndex];

  const handleNext = () => {
    setShowBefore(false);
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setShowBefore(false);
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <section id="projects" className="bg-[#181a1f] text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background Stylized Architectural Wireframe Graphic */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-red-600" fill="currentColor">
          <path d="M10 100 L100 20 L190 100 L100 180 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading, project details, dot indicators matching screenshot */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-normal leading-snug">
              <span className="text-red-500">Trusted by</span> Homeowners &amp; Builders
            </h2>

            <div className="space-y-3 pt-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded bg-stone-800 text-stone-300 border border-stone-700">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeProject.colourHex }}></span>
                <span>Colorbond® {activeProject.colorbondColour}</span>
                <span>•</span>
                <span className="text-red-400">{activeProject.suburb}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {activeProject.title}
              </h3>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                {activeProject.description}
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold text-stone-400 uppercase tracking-wide mb-2">
                  Scope of works:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-300">
                  {activeProject.scope.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Slider Dots matching screenshot */}
            <div className="flex items-center gap-2 pt-2">
              {PROJECTS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setShowBefore(false);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-[#C81D25]' : 'w-2.5 bg-stone-700 hover:bg-stone-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Project Gallery Button */}
            <div className="pt-2 flex items-center gap-4">
              <button
                id="see-project-gallery-btn"
                onClick={() => setShowAllModal(true)}
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-bold text-xs tracking-wide uppercase transition-colors group"
              >
                <span className="border-b border-red-500 pb-0.5">SEE PROJECT GALLERY</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-1.5 ml-auto">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Project Photo with Before/After toggle */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-800 aspect-[16/10] group">
              <img
                src={showBefore && activeProject.beforeImage ? activeProject.beforeImage : activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="bg-stone-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-stone-700 text-xs font-semibold text-white">
                  {showBefore ? 'Previous Leaking Roof Condition' : `${activeProject.suburb} • Finished Project`}
                </div>

                {activeProject.beforeImage && (
                  <button
                    onClick={() => setShowBefore(!showBefore)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C81D25] hover:bg-[#A8151D] text-white font-bold text-xs shadow-lg transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{showBefore ? 'View Finished Colorbond' : 'View Before Condition'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-4xl w-full p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold">
                  Recent Melbourne Roofing Projects
                </h3>
                <p className="text-xs text-stone-400">
                  Real Victorian homes and commercial premises reroofed by Safe Hire Metal Roofing.
                </p>
              </div>
              <button
                onClick={() => setShowAllModal(false)}
                className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="bg-stone-950 rounded-xl overflow-hidden border border-stone-800 flex flex-col">
                  <div className="h-48 relative">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                    <span className="absolute top-2 right-2 px-2 py-1 rounded bg-black/70 text-[10px] font-mono text-red-400">
                      {proj.category}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-white mb-1">{proj.title}</h4>
                      <p className="text-xs text-stone-400 line-clamp-2 mb-3">{proj.description}</p>
                    </div>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="w-full py-2 bg-stone-800 hover:bg-[#C81D25] hover:text-white text-stone-200 text-xs font-bold rounded transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call to Request Quote</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
