import React from 'react';
import { ActiveTab } from '../types';
import { BUSINESS_INFO, openWhatsAppChat } from '../utils/whatsapp';
import { 
  Tv, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Heart,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleNav = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#05070d] border-t border-[#1a2238] pt-12 pb-24 md:pb-12 text-xs text-[#8b93a9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#3b82f6] to-[#6d5ce8] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#080b13] rounded-[10px] flex items-center justify-center">
                  <Tv className="w-4 h-4 text-[#3b82f6]" />
                </div>
              </div>
              <span className="font-heading font-bold text-base text-[#eef1f8]">
                Top Tune Electronics
              </span>
            </div>

            <p className="text-[#8b93a9] leading-relaxed">
              {BUSINESS_INFO.tagline}. Abbottabad's leading center for LED/LCD TV sales, micro-electronics board repair, CCTV security systems, and Japanese 110V winter heaters.
            </p>

            <div className="pt-1 flex items-center gap-2">
              <button
                onClick={() => openWhatsAppChat()}
                className="px-3 py-1.5 rounded-lg bg-[#25d366]/15 hover:bg-[#25d366]/25 text-[#25d366] border border-[#25d366]/30 font-medium flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Active</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-[#eef1f8] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { id: 'home' as ActiveTab, label: 'Home Page' },
                { id: 'products' as ActiveTab, label: 'Browse Products' },
                { id: 'services' as ActiveTab, label: 'Workshop & Services' },
                { id: 'brands' as ActiveTab, label: 'Trusted Brands' },
                { id: 'gallery' as ActiveTab, label: 'Repair & CCTV Gallery' },
                { id: 'contact' as ActiveTab, label: 'Location & Contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="hover:text-[#7c9cff] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#3b82f6]" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-[#eef1f8] uppercase tracking-wider">
              Services We Provide
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li className="flex items-center gap-1.5 text-[#eef1f8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
                <span>LED & LCD Screen Backlight Replacement</span>
              </li>
              <li className="flex items-center gap-1.5 text-[#eef1f8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
                <span>Microwave Oven Magnetron & Spark Fixes</span>
              </li>
              <li className="flex items-center gap-1.5 text-[#eef1f8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
                <span>Solar Hybrid Inverter & UPS Repair</span>
              </li>
              <li className="flex items-center gap-1.5 text-[#eef1f8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
                <span>Hikvision & Dahua 5MP CCTV Installations</span>
              </li>
              <li className="flex items-center gap-1.5 text-[#eef1f8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
                <span>Multi-LNB Dish Antenna Alignment</span>
              </li>
              <li className="flex items-center gap-1.5 text-[#eef1f8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
                <span>Japanese 110V Gas Fan Heater Servicing</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-[#eef1f8] uppercase tracking-wider">
              Abbottabad Store
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#7c9cff] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`} className="hover:text-[#eef1f8]">
                  {BUSINESS_INFO.primaryPhoneFormatted} / {BUSINESS_INFO.secondaryPhoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#25d366] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#eef1f8] break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#8b93a9] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1a2238] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {new Date().getFullYear()} Top Tune Electronics Abbottabad. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[#8b93a9]">
            <span>100% Genuine Products</span>
            <span>•</span>
            <span>Abbottabad Workshop</span>
            <span>•</span>
            <span>Hazara Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
