import React, { useState, useEffect } from 'react';
import { ActiveTab, Product, InquiryCartItem } from './types';
import { PRODUCTS_DATA, SERVICES_DATA, BRANDS_DATA, GALLERY_PROJECTS } from './data/mockData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { ProductsScreen } from './components/ProductsScreen';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ServicesScreen } from './components/ServicesScreen';
import { BrandsScreen } from './components/BrandsScreen';
import { GalleryScreen } from './components/GalleryScreen';
import { ContactScreen } from './components/ContactScreen';
import { InquiryCartModal } from './components/InquiryCartModal';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart state persisted in localStorage for offline reliability
  const [cart, setCart] = useState<InquiryCartItem[]>(() => {
    try {
      const saved = localStorage.getItem('tte_inquiry_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('tte_inquiry_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to persist inquiry cart', e);
    }
  }, [cart]);

  // Cart Management
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as InquiryCartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleSelectBrandFilter = (brandName: string) => {
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cartProductIds = cart.map((item) => item.product.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#080b13] text-[#eef1f8]">
      {/* Sticky App Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cart={cart}
        setIsCartOpen={setIsCartOpen}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-5 sm:pt-7">
        {activeTab === 'home' && (
          <HomeScreen
            products={PRODUCTS_DATA}
            services={SERVICES_DATA}
            setActiveTab={setActiveTab}
            onSelectProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
          />
        )}

        {activeTab === 'products' && (
          <ProductsScreen
            products={PRODUCTS_DATA}
            onSelectProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
            cartProductIds={cartProductIds}
          />
        )}

        {activeTab === 'services' && (
          <ServicesScreen services={SERVICES_DATA} />
        )}

        {activeTab === 'brands' && (
          <BrandsScreen
            brands={BRANDS_DATA}
            onSelectBrandFilter={handleSelectBrandFilter}
          />
        )}

        {activeTab === 'gallery' && (
          <GalleryScreen gallery={GALLERY_PROJECTS} />
        )}

        {activeTab === 'contact' && (
          <ContactScreen />
        )}
      </main>

      {/* Global Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Mobile Bottom Navigation (fixed at bottom for small screens) */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Floating Persistent WhatsApp Chat Widget */}
      <WhatsAppFloating />

      {/* Full Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isInCart={selectedProduct ? cartProductIds.includes(selectedProduct.id) : false}
      />

      {/* Inquiry Cart Drawer / Modal */}
      <InquiryCartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onNavigateToProducts={() => {
          setIsCartOpen(false);
          setActiveTab('products');
        }}
      />
    </div>
  );
}
