import React, { useState } from 'react';
import { BUSINESS_INFO, openWhatsAppChat } from '../utils/whatsapp';
import { MessageCircle, Phone, X, Sparkles } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-40 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div 
          id="whatsapp-popover"
          className="mb-3 w-72 bg-[#101524] border border-[#1a2238] rounded-2xl p-4 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#1a2238]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25d366]/20 flex items-center justify-center text-[#25d366]">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#eef1f8]">Top Tune Chat</h4>
                <p className="text-[11px] text-[#25d366] flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] animate-pulse"></span>
                  Online in Abbottabad
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#8b93a9] hover:text-[#eef1f8] rounded-lg hover:bg-[#162038] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#8b93a9] my-3 leading-relaxed">
            Need urgent repair, CCTV pricing, or product availability? Click below to chat directly with our technician on WhatsApp.
          </p>

          <div className="space-y-2">
            <button
              id="wa-popup-primary-btn"
              onClick={() => {
                openWhatsAppChat('Assalam-o-Alaikum Top Tune Electronics! I am inquiring about product sales and availability in Abbottabad.', false);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#20b859] text-black font-semibold text-xs transition-colors shadow-md"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Sales & Inquiry (+92 325...)</span>
              </span>
              <span className="text-[10px] bg-black/15 px-1.5 py-0.5 rounded">Fast</span>
            </button>

            <button
              id="wa-popup-secondary-btn"
              onClick={() => {
                openWhatsAppChat('Assalam-o-Alaikum! I need technical support or repair service for my electronics.', true);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#162038] hover:bg-[#1f2d4e] text-[#eef1f8] border border-[#1a2238] font-medium text-xs transition-colors"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#7c9cff]" />
                <span>Repair & Tech (0318-5533078)</span>
              </span>
            </button>

            <a
              id="wa-popup-call-btn"
              href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#080b13] hover:bg-[#101524] text-[#7c9cff] border border-[#1a2238] font-medium text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Phone Call</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-4 py-3 rounded-full bg-[#25d366] text-black font-bold shadow-xl shadow-green-500/25 hover:bg-[#20b859] hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-black" />
        <span className="text-xs tracking-wide hidden sm:inline">Chat on WhatsApp</span>
        <span className="relative flex h-2 w-2 sm:hidden">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
        </span>
      </button>
    </div>
  );
};
