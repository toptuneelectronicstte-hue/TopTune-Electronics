import React from 'react';
import { Product } from '../types';
import { inquireProductWhatsApp } from '../utils/whatsapp';
import { 
  X, 
  Star, 
  ShieldCheck, 
  Truck, 
  MessageCircle, 
  Plus, 
  Check, 
  Sparkles, 
  CheckCircle2,
  PackageCheck
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  isInCart: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isInCart
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        id="product-detail-modal"
        className="w-full max-w-2xl bg-[#101524] border border-[#1a2238] rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#1a2238] bg-[#0a0f1d]">
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#3b82f6]/20 text-[#7c9cff] font-medium border border-[#3b82f6]/30">
              {product.brand}
            </span>
            <span className="text-xs text-[#8b93a9]">TTE-{product.id}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-[#8b93a9] hover:text-[#eef1f8] hover:bg-[#162038] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Main Product Image Container */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#080b13] border border-[#1a2238]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#3b82f6] text-white text-xs font-bold shadow-md">
                {product.badge}
              </span>
            )}
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-sm text-xs text-[#25d366] font-semibold border border-white/10">
              {product.inStock ? 'In Stock in Abbottabad' : 'Available by Order'}
            </div>
          </div>

          {/* Title & Ratings */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-[#eef1f8]">{product.rating}</span>
              </div>
              <span className="text-xs text-[#8b93a9]">({product.reviewsCount} customer reviews)</span>
            </div>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#eef1f8]">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#8b93a9] mt-1">
              {product.tagline}
            </p>
          </div>

          {/* Pricing Box */}
          <div className="p-4 rounded-xl bg-[#080b13] border border-[#1a2238] flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[11px] text-[#8b93a9] block">Price in Pakistan</span>
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-bold text-2xl text-[#eef1f8]">
                  Rs. {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-[#8b93a9] line-through">
                    Rs. {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-1 text-right">
              <div className="flex items-center gap-1.5 text-xs text-[#25d366] justify-end">
                <ShieldCheck className="w-4 h-4" />
                <span>{product.warranty}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#7c9cff] justify-end">
                <Truck className="w-3.5 h-3.5" />
                <span>Abbottabad & Hazara Delivery</span>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-[#eef1f8] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#7c9cff]" />
              <span>Key Features & Benefits</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#8b93a9] bg-[#0a0f1d] p-2.5 rounded-lg border border-[#162038]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25d366] shrink-0 mt-0.5" />
                  <span className="text-[#eef1f8]">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Specifications Table */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-[#eef1f8] mb-2 flex items-center gap-1.5">
              <PackageCheck className="w-4 h-4 text-[#3b82f6]" />
              <span>Technical Specifications</span>
            </h4>
            <div className="rounded-xl border border-[#1a2238] bg-[#080b13] divide-y divide-[#162038] overflow-hidden text-xs">
              {product.specifications.map((spec, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 gap-1">
                  <span className="text-[#8b93a9] sm:w-1/3">{spec.label}</span>
                  <span className="text-[#eef1f8] font-medium sm:w-2/3">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-5 py-4 border-t border-[#1a2238] bg-[#0a0f1d] flex items-center gap-3">
          <button
            onClick={() => onAddToCart(product)}
            className={`py-3 px-4 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-2 ${
              isInCart
                ? 'bg-[#162038] border-[#3b82f6] text-[#7c9cff]'
                : 'bg-[#101524] hover:bg-[#162038] border-[#1a2238] text-[#eef1f8]'
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-4 h-4 text-[#25d366]" />
                <span>In Inquiry List</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add to Inquiry</span>
              </>
            )}
          </button>

          <button
            id="modal-wa-inquire-btn"
            onClick={() => inquireProductWhatsApp(product)}
            className="flex-1 py-3 px-4 rounded-xl bg-[#25d366] hover:bg-[#20b859] text-black text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
          >
            <MessageCircle className="w-4 h-4 text-black" />
            <span>Inquire on WhatsApp Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
