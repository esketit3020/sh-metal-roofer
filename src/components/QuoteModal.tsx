import { useState, FormEvent } from 'react';
import { X, CheckCircle2, Phone, Calendar, ShieldCheck, ArrowRight, Upload } from 'lucide-react';
import { BUSINESS_INFO, COLORBOND_SWATCHES } from '../data/roofingData';
import { SafeHireLogo } from './SafeHireLogo';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    service?: string;
    size?: number;
    colour?: string;
  };
}

export default function QuoteModal({ isOpen, onClose, initialData }: QuoteModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [suburb, setSuburb] = useState('St Albans');
  const [service, setService] = useState(initialData?.service || 'Reroofing (Tiles to Metal)');
  const [colour, setColour] = useState(initialData?.colour || 'Monument®');
  const [urgent, setUrgent] = useState(false);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 text-stone-900 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-stone-900">
              Free Inspection Request Received!
            </h3>
            <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>. Our licensed metal roofing specialist will review your details for <strong>{suburb}</strong> and call you back on <strong>{phone}</strong> within 2 hours to confirm your complimentary on-site inspection.
            </p>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 text-left space-y-1">
              <div><strong>Service:</strong> {service}</div>
              <div><strong>Colorbond Choice:</strong> {colour}</div>
              {urgent && <div className="text-rose-600 font-bold">⚠️ Flagged as urgent active leak</div>}
            </div>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-md bg-[#C81D25] hover:bg-[#A8151D] text-white font-bold text-sm"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wide border border-red-100">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  VBA Licensed • Free Drone &amp; Roof Inspection
                </div>
                <div className="hidden sm:block">
                  <SafeHireLogo variant="mark" theme="light" size="sm" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950">
                Book A Free Quote &amp; Inspection
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-1">
                No obligation. We assess your roof, check trusses &amp; gutters, and provide a fixed written proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0412 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="david@example.com.au"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Property Suburb *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. St Albans, Keilor, Sunshine"
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-red-500"
                  >
                    <option value="Reroofing (Tiles to Metal)">Reroofing (Tiles to Metal)</option>
                    <option value="New Roof Colorbond®">New Roof Colorbond®</option>
                    <option value="Fascia and Gutters">Fascia and Gutters</option>
                    <option value="Box Gutters (Rain Heads & Sumps)">Box Gutters (Rain Heads &amp; Sumps)</option>
                    <option value="Downpipes">Downpipes</option>
                    <option value="Wall Cladding">Wall Cladding</option>
                    <option value="Metal Battens">Metal Battens</option>
                    <option value="Insulation and Sike (Sarking)">Insulation and Sike (Sarking)</option>
                    <option value="Rain Heads & Sumps">Rain Heads &amp; Sumps</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Preferred Colorbond® Colour
                  </label>
                  <select
                    value={colour}
                    onChange={(e) => setColour(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-red-500"
                  >
                    {COLORBOND_SWATCHES.map((sw) => (
                      <option key={sw.name} value={sw.name}>
                        {sw.name} ({sw.category})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Project Notes / Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your roof (e.g. single or double storey, age of roof, current leaks, preferred dates)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="urgent-leak"
                  checked={urgent}
                  onChange={(e) => setUrgent(e.target.checked)}
                  className="w-4 h-4 rounded text-red-600 focus:ring-red-500"
                />
                <label htmlFor="urgent-leak" className="text-xs text-stone-700 cursor-pointer font-medium">
                  <strong>Urgent:</strong> We have an active water leak or recent storm damage.
                </label>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-md bg-[#C81D25] hover:bg-[#A8151D] text-white font-extrabold text-sm tracking-wide transition-all shadow-[0_4px_20px_rgba(200,29,37,0.3)] flex items-center justify-center gap-2"
                >
                  <span>SUBMIT FREE QUOTE REQUEST</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-stone-400">
                Or call our team directly on <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-stone-900 font-bold underline">{BUSINESS_INFO.phone}</a>.
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
