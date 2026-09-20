import React, { useState } from 'react';
import { InquiryCartItem } from '../types';
import { inquireCartWhatsApp } from '../utils/whatsapp';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';

interface InquiryCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: InquiryCartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onNavigateToProducts: () => void;
}

export const InquiryCartModal: React.FC<InquiryCartModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigateToProducts
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('Abbottabad');

  if (!isOpen) return null;

  const totalEstimate = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleSendToWhatsApp = () => {
    if (cart.length === 0) return;
    inquireCartWhatsApp(cart, customerName.trim() || undefined, customerCity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="inquiry-cart-modal"
        className="w-full max-w-lg bg-[#101524] border border-[#1a2238] rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1a2238] bg-[#0a0f1d]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center text-[#7c9cff]">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-base text-[#eef1f8]">
                Product Inquiry List
              </h3>
              <p className="text-xs text-[#8b93a9]">
                {cart.length} {cart.length === 1 ? 'item' : 'items'} selected for WhatsApp inquiry
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#8b93a9] hover:text-[#eef1f8] rounded-xl hover:bg-[#162038] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-[#162038] flex items-center justify-center mx-auto text-[#8b93a9]">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <p className="text-sm font-medium text-[#eef1f8]">Your inquiry list is empty</p>
              <p className="text-xs text-[#8b93a9] max-w-xs mx-auto">
                Explore our LEDs, CCTV cameras, Android boxes, and Japanese heaters to add them here.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onNavigateToProducts();
                }}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3b82f6] text-white text-xs font-semibold hover:bg-blue-600 transition-colors"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#080b13] border border-[#1a2238]"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg bg-[#162038] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-medium text-[#eef1f8] truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#8b93a9] hover:text-red-400 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#7c9cff] font-semibold mt-0.5">
                        Rs. {item.product.price.toLocaleString()}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 bg-[#101524] px-2 py-0.5 rounded-lg border border-[#1a2238]">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="text-[#8b93a9] hover:text-[#eef1f8] p-0.5"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-medium text-[#eef1f8] min-w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="text-[#8b93a9] hover:text-[#eef1f8] p-0.5"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-xs font-semibold text-[#eef1f8]">
                          Rs. {(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer quick contact input */}
              <div className="p-3.5 rounded-xl bg-[#080b13] border border-[#1a2238] space-y-2.5">
                <div className="text-xs font-medium text-[#7c9cff]">
                  Delivery / Inquiry Details (Optional)
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] text-[#8b93a9] block mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Tariq / Ahmed"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#101524] border border-[#1a2238] text-xs text-[#eef1f8] focus:border-[#3b82f6] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-[#8b93a9] block mb-1">City / Area</label>
                    <select
                      value={customerCity}
                      onChange={(e) => setCustomerCity(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#101524] border border-[#1a2238] text-xs text-[#eef1f8] focus:border-[#3b82f6] outline-none"
                    >
                      <option value="Abbottabad City">Abbottabad City</option>
                      <option value="Mandian Abbottabad">Mandian Abbottabad</option>
                      <option value="Supply Abbottabad">Supply Abbottabad</option>
                      <option value="Havelian">Havelian</option>
                      <option value="Mansehra">Mansehra</option>
                      <option value="Haripur">Haripur</option>
                      <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi</option>
                      <option value="Naran / Kaghan Valley">Naran / Kaghan Valley</option>
                      <option value="Other KPK / Pakistan">Other KPK / Pakistan</option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-5 py-4 border-t border-[#1a2238] bg-[#0a0f1d] space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#8b93a9]">Estimated Total:</span>
              <span className="font-heading font-bold text-base text-[#eef1f8]">
                Rs. {totalEstimate.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClearCart}
                className="px-3 py-2.5 rounded-xl border border-[#1a2238] hover:bg-[#162038] text-xs text-[#8b93a9] hover:text-red-400 transition-colors"
                title="Clear all"
              >
                Clear
              </button>
              <button
                id="cart-submit-wa-btn"
                onClick={handleSendToWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25d366] hover:bg-[#20b859] text-black font-semibold text-xs transition-colors shadow-lg shadow-green-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire via WhatsApp</span>
              </button>
            </div>
            <p className="text-[10px] text-center text-[#8b93a9]">
              Instant response from our Abbottabad store staff. No upfront card payment required.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
