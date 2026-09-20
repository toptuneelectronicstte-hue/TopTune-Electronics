import React, { useState } from 'react';
import { ActiveTab, InquiryCartItem } from '../types';
import { BUSINESS_INFO, openWhatsAppChat } from '../utils/whatsapp';
import { 
  Tv, 
  Menu, 
  X, 
  Phone, 
  ShoppingBag, 
  Wrench, 
  ShieldCheck, 
  MapPin, 
  Image as GalleryIcon,
  MessageCircle
} from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  cart: InquiryCartItem[];
  setIsCartOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cart,
  setIsCartOpen
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as ActiveTab, label: 'Home', icon: Tv },
    { id: 'products' as ActiveTab, label: 'Products', icon: ShoppingBag },
    { id: 'services' as ActiveTab, label: 'Services', icon: Wrench },
    { id: 'brands' as ActiveTab, label: 'Brands', icon: ShieldCheck },
    { id: 'gallery' as ActiveTab, label: 'Gallery', icon: GalleryIcon },
    { id: 'contact' as ActiveTab, label: 'Contact', icon: MapPin },
  ];

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header id="main-header" className="sticky top-0 z-40 w-full bg-[#080b13]/95 backdrop-blur-md border-b border-[#1a2238] transition-colors">
        {/* Top Mini Banner for local Abbottabad info */}
        <div className="bg-gradient-to-r from-[#10172a] via-[#162038] to-[#10172a] px-3 py-1 text-xs border-b border-[#1a2238] flex items-center justify-between text-[#8b93a9]">
          <div className="flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse shrink-0"></span>
            <span className="font-medium text-[#eef1f8]">Abbottabad, Pakistan:</span>
            <span className="truncate">Open Today • Delivery Across Hazara & Islamabad-Naran</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a 
              href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`}
              className="flex items-center gap-1 text-[#7c9cff] hover:text-[#3b82f6] transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_INFO.primaryPhoneFormatted}</span>
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
          {/* Logo & Brand */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3b82f6] to-[#6d5ce8] p-0.5 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <div className="w-full h-full bg-[#080b13] rounded-[10px] flex items-center justify-center group-hover:bg-[#101524] transition-colors">
                <Tv className="w-5 h-5 text-[#3b82f6] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-lg text-[#eef1f8] tracking-tight group-hover:text-[#7c9cff] transition-colors">
                  Top Tune
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-[#3b82f6]/20 text-[#7c9cff] font-medium border border-[#3b82f6]/30">
                  Electronics
                </span>
              </div>
              <p className="text-[11px] text-[#8b93a9] leading-none hidden xs:block">
                Abbottabad • Sales & Repair
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#101524] px-2 py-1.5 rounded-full border border-[#1a2238]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#3b82f6] text-white shadow-md shadow-blue-600/30'
                      : 'text-[#8b93a9] hover:text-[#eef1f8] hover:bg-[#162038]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            {/* Direct Call Button */}
            <a
              id="header-call-btn"
              href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`}
              className="p-2.5 rounded-xl bg-[#101524] text-[#7c9cff] hover:bg-[#1a2238] border border-[#1a2238] hover:border-[#3b82f6]/40 transition-colors flex items-center justify-center"
              title="Call Us Now"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Quick WhatsApp Chat */}
            <button
              id="header-wa-btn"
              onClick={() => openWhatsAppChat()}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#25d366]/15 hover:bg-[#25d366]/25 text-[#25d366] border border-[#25d366]/30 text-xs font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>

            {/* Inquiry Cart / Bag */}
            <button
              id="header-inquiry-cart-btn"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-[#101524] text-[#eef1f8] hover:bg-[#1a2238] border border-[#1a2238] hover:border-[#3b82f6]/40 transition-colors flex items-center justify-center"
              title="View Inquiries"
            >
              <ShoppingBag className="w-4 h-4 text-[#7c9cff]" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#3b82f6] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-[#101524] text-[#eef1f8] hover:bg-[#1a2238] border border-[#1a2238] transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f1d] border-b border-[#1a2238] px-4 py-4 space-y-2 animate-fadeIn">
            <div className="text-xs font-semibold text-[#8b93a9] uppercase tracking-wider px-2 mb-1">
              Navigation Menu
            </div>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2.5 px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#3b82f6] text-white shadow-md'
                        : 'bg-[#101524] text-[#eef1f8] hover:bg-[#162038] border border-[#1a2238]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Contact Box in Mobile Menu */}
            <div className="pt-3 mt-2 border-t border-[#1a2238] flex flex-col gap-2">
              <button
                onClick={() => {
                  openWhatsAppChat();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25d366] text-black font-semibold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+92 325 9838228)</span>
              </button>
              <a
                href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#162038] text-[#eef1f8] font-medium text-sm border border-[#1a2238]"
              >
                <Phone className="w-4 h-4 text-[#7c9cff]" />
                <span>Call Shop ({BUSINESS_INFO.primaryPhoneFormatted})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
