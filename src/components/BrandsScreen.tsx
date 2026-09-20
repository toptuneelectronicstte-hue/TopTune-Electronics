import React from 'react';
import { Brand } from '../types';
import { openWhatsAppChat } from '../utils/whatsapp';
import { ShieldCheck, CheckCircle2, MessageCircle, ArrowRight, Award } from 'lucide-react';

interface BrandsScreenProps {
  brands: Brand[];
  onSelectBrandFilter: (brandName: string) => void;
}

export const BrandsScreen: React.FC<BrandsScreenProps> = ({
  brands,
  onSelectBrandFilter
}) => {
  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#eef1f8]">
            Trusted Brands & Genuine Partners
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#8b93a9] max-w-2xl">
          Top Tune Electronics stocks and services top-tier global and Pakistani electronics brands with official warranty backing and authentic spare parts.
        </p>
      </div>

      {/* Trust Badges Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-[#101524] border border-[#1a2238] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#25d366]/15 flex items-center justify-center text-[#25d366]">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#eef1f8]">100% Authentic Products</h4>
            <p className="text-[11px] text-[#8b93a9]">No copies, official serial seals</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#101524] border border-[#1a2238] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/15 flex items-center justify-center text-[#3b82f6]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#eef1f8]">Valid Manufacturer Warranties</h4>
            <p className="text-[11px] text-[#8b93a9]">1 to 2 years replacement & parts</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#101524] border border-[#1a2238] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#6d5ce8]/15 flex items-center justify-center text-[#7c9cff]">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#eef1f8]">Original Spare Parts</h4>
            <p className="text-[11px] text-[#8b93a9]">Factory LEDs, magnetrons & power ICs</p>
          </div>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            id={`brand-card-${brand.id}`}
            className="rounded-2xl bg-[#101524] border border-[#1a2238] hover:border-[#3b82f6]/40 p-5 flex flex-col justify-between space-y-4 transition-all hover:shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#080b13] border border-[#1a2238] flex items-center justify-center font-heading font-extrabold text-lg text-[#7c9cff] shadow-inner">
                  {brand.name.slice(0, 2).toUpperCase()}
                </div>
                {brand.isAuthorized && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#25d366]/15 text-[#25d366] border border-[#25d366]/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Authorized Partner</span>
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg text-[#eef1f8]">
                  {brand.name}
                </h3>
                <span className="text-xs text-[#7c9cff] font-medium">
                  {brand.category}
                </span>
                <p className="text-xs text-[#8b93a9] mt-1.5 leading-relaxed">
                  {brand.description}
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase font-semibold text-[#8b93a9] block mb-1.5">
                  Popular in Abbottabad Store:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {brand.popularProducts.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded-lg bg-[#080b13] border border-[#1a2238] text-[#eef1f8]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#1a2238] flex items-center gap-2">
              <button
                onClick={() => onSelectBrandFilter(brand.name)}
                className="flex-1 py-2 px-3 rounded-xl bg-[#162038] hover:bg-[#1e2a4a] text-xs font-semibold text-[#7c9cff] transition-colors flex items-center justify-center gap-1"
              >
                <span>View Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => openWhatsAppChat(`Assalam-o-Alaikum! I want to inquire about genuine ${brand.name} products or repair parts in Abbottabad.`)}
                className="p-2 rounded-xl bg-[#25d366]/15 hover:bg-[#25d366]/25 text-[#25d366] border border-[#25d366]/30 transition-colors"
                title="Inquire on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
