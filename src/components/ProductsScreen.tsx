import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { inquireProductWhatsApp } from '../utils/whatsapp';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  ChevronDown, 
  ChevronUp, 
  ShoppingBag, 
  MessageCircle, 
  Star, 
  ShieldCheck, 
  Check, 
  Plus, 
  SlidersHorizontal,
  X
} from 'lucide-react';

interface ProductsScreenProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  cartProductIds: string[];
}

export const ProductsScreen: React.FC<ProductsScreenProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  cartProductIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: 'All Products' },
    { id: 'leds', label: 'LED TVs' },
    { id: 'lcds', label: 'LCD TVs' },
    { id: 'cctv', label: 'CCTV Cameras' },
    { id: 'appliances', label: 'Heaters & Appliances' },
    { id: 'android_boxes', label: 'Android Boxes' },
    { id: 'receivers', label: 'Receivers / Decoders' },
    { id: 'remotes', label: 'Remotes' },
    { id: 'networking', label: 'Networking' },
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
        }
        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = product.name.toLowerCase().includes(q);
          const matchBrand = product.brand.toLowerCase().includes(q);
          const matchTagline = product.tagline.toLowerCase().includes(q);
          const matchFeatures = product.features.some(f => f.toLowerCase().includes(q));
          if (!matchName && !matchBrand && !matchTagline && !matchFeatures) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  const toggleExpandCard = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCardId(prev => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header & Title */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#eef1f8]">
            Electronics Catalog
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#8b93a9]">
          Explore authentic LED/LCD TVs, CCTV kits, Japanese 110V heaters, Android TV boxes, and satellite decoders.
        </p>
      </div>

      {/* Search & Controls Bar */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8b93a9]" />
            <input
              type="text"
              placeholder="Search by product name, brand, or specs (e.g. 55 Inch, Hikvision, Rinnai)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#101524] border border-[#1a2238] text-xs sm:text-sm text-[#eef1f8] placeholder-[#8b93a9] focus:border-[#3b82f6] outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8b93a9] hover:text-[#eef1f8] p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="relative flex-1 sm:w-44">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl bg-[#101524] border border-[#1a2238] text-xs text-[#eef1f8] focus:border-[#3b82f6] outline-none appearance-none"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8b93a9] pointer-events-none" />
            </div>

            {/* Grid / List view toggle */}
            <div className="flex items-center bg-[#101524] p-1 rounded-xl border border-[#1a2238]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-[#3b82f6] text-white' : 'text-[#8b93a9] hover:text-[#eef1f8]'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-[#3b82f6] text-white' : 'text-[#8b93a9] hover:text-[#eef1f8]'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Scrollable Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-cat-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                  isSelected
                    ? 'bg-[#3b82f6] text-white shadow-md shadow-blue-500/20'
                    : 'bg-[#101524] text-[#8b93a9] hover:text-[#eef1f8] hover:bg-[#162038] border border-[#1a2238]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-[#8b93a9]">
        <span>
          Showing <span className="font-semibold text-[#eef1f8]">{filteredProducts.length}</span> products
          {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
        </span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-[#7c9cff] hover:underline"
          >
            Clear search
          </button>
        )}
      </div>

      {/* Product List/Grid View */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-[#101524] rounded-2xl border border-[#1a2238] space-y-3">
          <ShoppingBag className="w-10 h-10 mx-auto text-[#8b93a9]" />
          <p className="text-base font-semibold text-[#eef1f8]">No products found</p>
          <p className="text-xs text-[#8b93a9] max-w-sm mx-auto">
            Try adjusting your search keywords or select a different category filter above.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-[#3b82f6] text-white text-xs font-semibold hover:bg-blue-600 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        /* GRID VIEW */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => {
            const isExpanded = expandedCardId === product.id;
            const isInCart = cartProductIds.includes(product.id);

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group rounded-2xl bg-[#101524] border border-[#1a2238] hover:border-[#3b82f6]/50 overflow-hidden flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-blue-500/5"
              >
                {/* Media Container */}
                <div 
                  onClick={() => onSelectProduct(product)}
                  className="relative aspect-[16/10] bg-[#0a0f1d] overflow-hidden cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#3b82f6] text-white text-[10px] font-bold shadow-md">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-sm text-[#eef1f8] text-[10px] font-medium border border-white/10">
                    {product.brand}
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/75 text-[10px] text-[#25d366] font-medium">
                    {product.inStock ? '● In Stock Abbottabad' : 'Pre-order'}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-semibold text-[#eef1f8]">{product.rating}</span>
                      <span className="text-[#8b93a9] text-[10px]">({product.reviewsCount} reviews)</span>
                    </div>

                    <h3 
                      onClick={() => onSelectProduct(product)}
                      className="font-medium text-sm sm:text-base text-[#eef1f8] group-hover:text-[#7c9cff] transition-colors line-clamp-2 cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#8b93a9] line-clamp-1 mt-1">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Pricing and warranty info */}
                  <div className="pt-2 border-t border-[#1a2238]/80">
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading font-bold text-lg text-[#eef1f8]">
                        Rs. {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#8b93a9] line-through">
                          Rs. {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-[#7c9cff] mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{product.warranty}</span>
                    </div>
                  </div>

                  {/* EXPANDABLE ACCORDION SECTION (Requested) */}
                  <div className="border-t border-[#1a2238] pt-2">
                    <button
                      type="button"
                      onClick={(e) => toggleExpandCard(product.id, e)}
                      className="w-full flex items-center justify-between text-xs text-[#8b93a9] hover:text-[#eef1f8] py-1 transition-colors"
                    >
                      <span className="font-medium">
                        {isExpanded ? 'Hide Specifications' : 'View Specifications & Features'}
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-2 space-y-2 text-xs bg-[#080b13] p-3 rounded-xl border border-[#1a2238] animate-in fade-in duration-200">
                        <div className="space-y-1">
                          <p className="font-semibold text-[#7c9cff] text-[11px] uppercase tracking-wider">Specifications:</p>
                          {product.specifications.slice(0, 4).map((spec, i) => (
                            <div key={i} className="flex justify-between py-0.5 border-b border-[#162038] last:border-none text-[11px]">
                              <span className="text-[#8b93a9]">{spec.label}</span>
                              <span className="text-[#eef1f8] font-medium text-right max-w-[60%]">{spec.value}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2">
                          <p className="font-semibold text-[#7c9cff] text-[11px] uppercase tracking-wider mb-1">Key Highlights:</p>
                          <ul className="space-y-1">
                            {product.features.slice(0, 3).map((feat, i) => (
                              <li key={i} className="text-[11px] text-[#8b93a9] flex items-start gap-1.5">
                                <span className="text-[#3b82f6] font-bold">•</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => onAddToCart(product)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-1.5 ${
                        isInCart
                          ? 'bg-[#162038] border-[#3b82f6] text-[#7c9cff]'
                          : 'bg-[#101524] hover:bg-[#162038] border-[#1a2238] text-[#eef1f8]'
                      }`}
                    >
                      {isInCart ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#25d366]" />
                          <span>In List</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Inquiry</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => inquireProductWhatsApp(product)}
                      className="py-2 px-2.5 rounded-xl bg-[#25d366] hover:bg-[#20b859] text-black text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-md shadow-green-500/10"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire Now</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* LIST VIEW */
        <div className="space-y-3">
          {filteredProducts.map((product) => {
            const isExpanded = expandedCardId === product.id;
            const isInCart = cartProductIds.includes(product.id);

            return (
              <div
                key={product.id}
                id={`product-list-${product.id}`}
                className="rounded-2xl bg-[#101524] border border-[#1a2238] hover:border-[#3b82f6]/40 p-4 transition-all"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full sm:w-28 h-32 sm:h-24 object-cover rounded-xl bg-[#0a0f1d] shrink-0 cursor-pointer"
                    onClick={() => onSelectProduct(product)}
                  />

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#162038] text-[#7c9cff]">
                        {product.brand}
                      </span>
                      <span className="text-[10px] text-[#25d366]">
                        {product.warranty}
                      </span>
                    </div>

                    <h3 
                      onClick={() => onSelectProduct(product)}
                      className="font-medium text-sm sm:text-base text-[#eef1f8] hover:text-[#7c9cff] cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#8b93a9] line-clamp-1">
                      {product.tagline}
                    </p>

                    <div className="flex items-center gap-2 pt-1">
                      <span className="font-heading font-bold text-base text-[#eef1f8]">
                        Rs. {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#8b93a9] line-through">
                          Rs. {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col items-center gap-2 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#1a2238]">
                    <button
                      onClick={() => onAddToCart(product)}
                      className={`flex-1 sm:flex-initial w-full py-2 px-3 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-1 ${
                        isInCart
                          ? 'bg-[#162038] border-[#3b82f6] text-[#7c9cff]'
                          : 'bg-[#101524] hover:bg-[#162038] border-[#1a2238] text-[#eef1f8]'
                      }`}
                    >
                      {isInCart ? <Check className="w-3.5 h-3.5 text-[#25d366]" /> : <Plus className="w-3.5 h-3.5" />}
                      <span>{isInCart ? 'In List' : 'Add to Inquiry'}</span>
                    </button>

                    <button
                      onClick={() => inquireProductWhatsApp(product)}
                      className="flex-1 sm:flex-initial w-full py-2 px-3 rounded-xl bg-[#25d366] hover:bg-[#20b859] text-black text-xs font-bold transition-colors flex items-center justify-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire Now</span>
                    </button>
                  </div>
                </div>

                {/* Expand Specs button */}
                <div className="mt-3 pt-2 border-t border-[#1a2238]/60 flex items-center justify-between">
                  <button
                    onClick={(e) => toggleExpandCard(product.id, e)}
                    className="text-xs text-[#8b93a9] hover:text-[#7c9cff] flex items-center gap-1"
                  >
                    <span>{isExpanded ? 'Hide Details' : 'Show Specifications'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="text-xs text-[#7c9cff] hover:underline"
                  >
                    Full View Modal →
                  </button>
                </div>

                {isExpanded && (
                  <div className="mt-2 p-3 bg-[#080b13] rounded-xl border border-[#1a2238] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {product.specifications.map((spec, i) => (
                      <div key={i} className="flex justify-between py-1 border-b border-[#162038] last:border-none">
                        <span className="text-[#8b93a9]">{spec.label}:</span>
                        <span className="text-[#eef1f8] font-medium text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
