import { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, ExternalLink, Check, Copy } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

export default function MapAndDirections() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-[#111317] text-white py-16 lg:py-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-red-500 uppercase tracking-normal">
            Local St. Albans Headquarters
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-normal mt-1">
            Find Us &amp; Get Directions
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm mt-2">
            Centrally based in Melbourne’s West to provide rapid on-site roof inspections and emergency storm tarping.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Info Card */}
          <div className="lg:col-span-5 bg-stone-900/90 rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address card */}
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-stone-400 uppercase tracking-wider font-semibold">
                        Workshop &amp; Office
                      </div>
                      <div className="font-bold text-base sm:text-lg text-white mt-0.5">
                        {BUSINESS_INFO.address}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={copyAddress}
                    className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs flex items-center gap-1 shrink-0"
                    title="Copy address"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-red-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Phone & Direct Contact */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-stone-950/60 border border-stone-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-red-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-stone-400">Direct Roofer Hotline</div>
                      <div className="font-bold text-white text-sm sm:text-base font-mono">
                        {BUSINESS_INFO.phone}
                      </div>
                    </div>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="px-3 py-1.5 rounded bg-[#C81D25] hover:bg-[#A8151D] text-white font-bold text-xs"
                  >
                    Call Now
                  </a>
                </div>

                {/* Operating Hours */}
                <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-300">
                    <Clock className="w-3.5 h-3.5 text-red-500" />
                    <span>Operating Hours</span>
                  </div>
                  <div className="space-y-1 text-xs text-stone-400">
                    {BUSINESS_INFO.hours.map((h, i) => (
                      <div key={i} className="flex justify-between">
                        <span>{h.days}</span>
                        <span className="text-stone-200 font-medium">{h.times}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Direction button */}
            <div className="pt-6">
              <a
                id="open-google-maps-btn"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-md bg-[#C81D25] hover:bg-[#A8151D] text-white font-extrabold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(200,29,37,0.3)]"
              >
                <Navigation className="w-4 h-4 fill-white" />
                <span>OPEN IN GOOGLE MAPS / GET DIRECTIONS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Simulated Interactive Victorian Map Visual */}
          <div className="lg:col-span-7 bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden relative shadow-2xl min-h-[380px] flex flex-col">
            {/* Visual map interface with satellite-like dark style */}
            <div className="relative flex-1 bg-[#1a202c] overflow-hidden flex items-center justify-center p-6">
              {/* Map background grid pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(#C81D25 1px, transparent 1px), radial-gradient(#ffffff 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                  backgroundPosition: '0 0, 15px 15px',
                }}
              />

              {/* Road lines simulation */}
              <svg className="absolute inset-0 w-full h-full stroke-stone-700/60" fill="none">
                <path d="M-50 150 Q 200 80, 500 220 T 900 120" strokeWidth="6" />
                <path d="M250 -50 L 280 450" strokeWidth="4" />
                <path d="M0 320 L 700 80" strokeWidth="3" strokeDasharray="6 4" stroke="#C81D25" opacity="0.4" />
              </svg>

              {/* Central Map Marker Pin */}
              <div className="relative z-10 flex flex-col items-center animate-bounce">
                <div className="bg-stone-950 text-white px-3.5 py-1.5 rounded-lg border border-red-500/80 shadow-2xl text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span>78 Perrett Ave, St Albans</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#C81D25] text-white flex items-center justify-center shadow-[0_0_25px_rgba(200,29,37,0.8)] mt-1 border-2 border-white">
                  <MapPin className="w-5 h-5 fill-white" />
                </div>
                <div className="w-3 h-1.5 bg-black/50 rounded-full blur-xs mt-1"></div>
              </div>

              {/* Service Suburbs Chips Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-stone-950/85 backdrop-blur-md p-3 rounded-xl border border-stone-800 text-xs">
                <div className="text-[11px] font-semibold text-red-400 uppercase tracking-wider mb-1.5">
                  Suburbs We Service Daily (Within 30 mins):
                </div>
                <div className="flex flex-wrap gap-1.5 text-stone-300 text-[11px]">
                  {['St Albans', 'Keilor East', 'Sunshine', 'Taylors Lakes', 'Deer Park', 'Cairnlea', 'Footscray', 'Essendon', 'Sydenham', 'Melbourne Western Metro'].map((suburb, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-stone-900 border border-stone-800">
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
