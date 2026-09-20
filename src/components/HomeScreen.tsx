import React, { useState } from 'react';
import { Product, ServiceItem, ActiveTab } from '../types';
import { BUSINESS_INFO, openWhatsAppChat, inquireProductWhatsApp } from '../utils/whatsapp';
import { 
  Tv, 
  Wrench, 
  Shield, 
  Video, 
  Radio, 
  Wifi, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Sparkles, 
  Flame, 
  CheckCircle2, 
  Star, 
  ChevronRight,
  Truck,
  Clock,
  Award
} from 'lucide-react';

interface HomeScreenProps {
  products: Product[];
  services: ServiceItem[];
  setActiveTab: (tab: ActiveTab) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  products,
  services,
  setActiveTab,
  onSelectProduct,
  onAddToCart,
}) => {
  const featuredProducts = products.filter(p => p.isFeatured);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('all');

  return (
    <div className="space-y-10 pb-12">
      {/* 1. HERO SECTION */}
      <section id="home-hero" className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#101524] via-[#0d1220] to-[#080b13] border border-[#1a2238] p-5 sm:p-8 lg:p-10 shadow-2xl">
        {/* Background glow accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#3b82f6]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 -mb-20 w-72 h-72 rounded-full bg-[#6d5ce8]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          {/* Abbottabad Local Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162038] border border-[#1a2238] text-xs text-[#7c9cff] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse"></span>
            <span className="font-semibold text-[#eef1f8]">Abbottabad, Pakistan</span>
            <span className="text-[#8b93a9]">| Main Mansehra Rd</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#eef1f8] leading-tight">
            Top Tune Electronics
          </h1>
          <p className="font-heading text-lg sm:text-xl text-[#7c9cff] font-medium mt-1 mb-3">
            "Your Complete Electronics Solution"
          </p>

          <p className="text-sm sm:text-base text-[#8b93a9] leading-relaxed mb-6 max-w-2xl">
            Trusted sales, component-level repair, CCTV security systems, satellite dish setups, and networking across Abbottabad, Hazara, and the Islamabad-to-Naran corridor.
          </p>

          {/* Key Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 text-xs text-[#eef1f8]">
            <div className="flex items-center gap-2 bg-[#101524]/80 px-3 py-2 rounded-xl border border-[#1a2238]">
              <CheckCircle2 className="w-4 h-4 text-[#25d366] shrink-0" />
              <span>100% Genuine</span>
            </div>
            <div className="flex items-center gap-2 bg-[#101524]/80 px-3 py-2 rounded-xl border border-[#1a2238]">
              <Truck className="w-4 h-4 text-[#3b82f6] shrink-0" />
              <span>Home Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-[#101524]/80 px-3 py-2 rounded-xl border border-[#1a2238]">
              <Clock className="w-4 h-4 text-[#7c9cff] shrink-0" />
              <span>Fast Repair</span>
            </div>
            <div className="flex items-center gap-2 bg-[#101524]/80 px-3 py-2 rounded-xl border border-[#1a2238]">
              <Award className="w-4 h-4 text-[#6d5ce8] shrink-0" />
              <span>Verified Techs</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Primary - Accent Blue Browse Products */}
            <button
              id="hero-browse-products-btn"
              onClick={() => setActiveTab('products')}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#3b82f6] hover:bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all transform active:scale-95"
            >
              <Tv className="w-4 h-4" />
              <span>Browse Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Chat on WhatsApp - WhatsApp Green */}
            <button
              id="hero-whatsapp-btn"
              onClick={() => openWhatsAppChat()}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#25d366] hover:bg-[#20b859] text-black font-semibold text-sm shadow-lg shadow-green-500/20 transition-all transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-black" />
              <span>Chat on WhatsApp</span>
            </button>

            {/* Get Free Quote - Violet */}
            <button
              id="hero-quote-btn"
              onClick={() => setActiveTab('contact')}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#6d5ce8] hover:bg-[#5b49d4] text-white font-semibold text-sm shadow-lg shadow-purple-500/20 transition-all transform active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free Quote</span>
            </button>

            {/* Call Us */}
            <a
              id="hero-call-btn"
              href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`}
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#101524] hover:bg-[#162038] text-[#7c9cff] border border-[#1a2238] font-medium text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. SPECIAL ABBOTTABAD WINTER HIGHLIGHT: JAPANESE BLORE HEATERS */}
      <section id="winter-heaters-highlight" className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#141b2e] via-[#101524] to-[#141b2e] border border-[#1a2238] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 flex-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-semibold border border-amber-500/30">
            <Flame className="w-3.5 h-3.5" />
            <span>Abbottabad Winter Special</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#eef1f8]">
            Original Japanese 110V Gas Fan Heaters
          </h3>
          <p className="text-xs sm:text-sm text-[#8b93a9] max-w-xl leading-relaxed">
            Imported Rinnai & Osaka Gas heaters. Warms up freezing Abbottabad rooms in 5 minutes with 90% less gas consumption, zero smoke/smell, and automatic tilt safety sensors. Free stepdown transformer included!
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
          <button
            onClick={() => setActiveTab('products')}
            className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-[#3b82f6] hover:bg-blue-600 text-white font-semibold text-xs transition-colors"
          >
            View Available Models
          </button>
          <button
            onClick={() => openWhatsAppChat('Assalam-o-Alaikum! I want to inquire about Japanese 110V gas fan heaters available in Abbottabad.')}
            className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#20b859] text-black font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire Price</span>
          </button>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS CAROUSEL / GRID */}
      <section id="featured-products-section" className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#eef1f8]">
                Featured Products
              </h2>
            </div>
            <p className="text-xs text-[#8b93a9] mt-0.5">
              Top picks available with immediate delivery in Abbottabad
            </p>
          </div>
          <button
            onClick={() => setActiveTab('products')}
            className="text-xs font-semibold text-[#7c9cff] hover:text-[#3b82f6] flex items-center gap-1 transition-colors"
          >
            <span>See All ({products.length})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              id={`featured-card-${product.id}`}
              className="group relative rounded-2xl bg-[#101524] border border-[#1a2238] hover:border-[#3b82f6]/50 overflow-hidden flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-blue-500/5"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[4/3] bg-[#0a0f1d] overflow-hidden">
                <img
                  id={`featured-img-${product.id}`}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300 contrast-[1.03] brightness-[1.01]"
                  loading="lazy"
                />
                {product.badge && (
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-[#3b82f6] text-white text-[10px] font-bold shadow-md">
                    {product.badge}
                  </span>
                )}
                <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-[#eef1f8] text-[10px] font-medium">
                  {product.brand}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-semibold text-[#eef1f8]">{product.rating}</span>
                    <span className="text-[#8b93a9] text-[10px]">({product.reviewsCount})</span>
                  </div>
                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="font-medium text-sm text-[#eef1f8] group-hover:text-[#7c9cff] transition-colors line-clamp-2 cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#8b93a9] line-clamp-1 mt-1">
                    {product.tagline}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#1a2238]/60">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-bold text-base text-[#eef1f8]">
                      Rs. {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#8b93a9] line-through">
                        Rs. {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#25d366] font-medium mt-0.5">
                    {product.warranty}
                  </p>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="w-full py-2 px-2 rounded-xl bg-[#162038] hover:bg-[#1e2a4a] text-[#7c9cff] text-xs font-semibold border border-[#1a2238] transition-colors text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => inquireProductWhatsApp(product)}
                    className="w-full py-2 px-2 rounded-xl bg-[#25d366] hover:bg-[#20b859] text-black text-xs font-bold transition-colors flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section id="services-overview-section" className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6d5ce8]"></span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#eef1f8]">
                Our Core Services
              </h2>
            </div>
            <p className="text-xs text-[#8b93a9] mt-0.5">
              Comprehensive electronics, security, and networking solutions in Abbottabad
            </p>
          </div>
          <button
            onClick={() => setActiveTab('services')}
            className="text-xs font-semibold text-[#7c9cff] hover:text-[#3b82f6] flex items-center gap-1 transition-colors"
          >
            <span>All Services</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-[#101524] border border-[#1a2238] p-5 flex flex-col justify-between space-y-4 hover:border-[#6d5ce8]/50 transition-all"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#162038] border border-[#1a2238] flex items-center justify-center text-[#7c9cff]">
                  {service.category === 'repair' ? <Wrench className="w-6 h-6 text-[#7c9cff]" /> :
                   service.category === 'cctv' ? <Video className="w-6 h-6 text-[#3b82f6]" /> :
                   <Tv className="w-6 h-6 text-[#6d5ce8]" />}
                </div>
                <h3 className="font-heading text-base font-bold text-[#eef1f8]">
                  {service.title}
                </h3>
                <p className="text-xs text-[#8b93a9] leading-relaxed">
                  {service.shortDesc}
                </p>
                <div className="space-y-1.5 pt-2">
                  {service.highlights.slice(0, 2).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#eef1f8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#25d366] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#1a2238] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#8b93a9] block">Rate Range</span>
                  <span className="text-xs font-semibold text-[#7c9cff]">{service.priceRange}</span>
                </div>
                <button
                  onClick={() => setActiveTab('services')}
                  className="px-3 py-1.5 rounded-xl bg-[#162038] hover:bg-[#202d4e] text-xs font-semibold text-[#eef1f8] transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL-TO-ACTION BANNER */}
      <section id="cta-banner" className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#162038] via-[#101524] to-[#1c183a] border border-[#1a2238] p-6 sm:p-8 text-center space-y-4">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#eef1f8]">
          Have a Broken TV, Need CCTV, or Buying New Electronics?
        </h3>
        <p className="text-xs sm:text-sm text-[#8b93a9] max-w-xl mx-auto leading-relaxed">
          Contact our master technicians directly on WhatsApp. We provide free phone consultation, quick estimates, and fast doorstep pickup/delivery across Abbottabad.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => openWhatsAppChat()}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#25d366] hover:bg-[#20b859] text-black font-bold text-sm shadow-xl shadow-green-500/20 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (+92 325 9838228)</span>
          </button>
          <a
            href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#101524] hover:bg-[#162038] text-[#eef1f8] border border-[#1a2238] font-semibold text-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-[#7c9cff]" />
            <span>Call: {BUSINESS_INFO.secondaryPhoneFormatted}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
