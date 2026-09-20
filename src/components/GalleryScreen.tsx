import React, { useState } from 'react';
import { GalleryProject } from '../types';
import { openWhatsAppChat } from '../utils/whatsapp';
import { 
  Image as GalleryIcon, 
  MapPin, 
  Calendar, 
  MessageCircle, 
  Eye, 
  Wrench, 
  Video, 
  Radio, 
  Wifi, 
  ArrowLeftRight, 
  Sparkles
} from 'lucide-react';

interface GalleryScreenProps {
  gallery: GalleryProject[];
}

export const GalleryScreen: React.FC<GalleryScreenProps> = ({ gallery }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeBeforeAfterView, setActiveBeforeAfterView] = useState<{ [key: string]: 'before' | 'after' }>({
    'gal-1': 'after',
    'gal-3': 'after',
    'gal-6': 'after'
  });

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'repair', label: 'Repair Before/After' },
    { id: 'cctv', label: 'CCTV Installations' },
    { id: 'dish', label: 'Dish Antennas' },
    { id: 'installation', label: 'Networking & WiFi' },
  ];

  const filteredGallery = gallery.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const toggleBeforeAfter = (id: string, view: 'before' | 'after') => {
    setActiveBeforeAfterView(prev => ({ ...prev, [id]: view }));
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#7c9cff]"></span>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#eef1f8]">
            Work Gallery & Projects
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#8b93a9] max-w-2xl">
          Real before/after repairs from our Abbottabad electronics workshop and on-site CCTV, dish antenna, and networking setups completed across Hazara.
        </p>
      </div>

      {/* Categories Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
              selectedCategory === cat.id
                ? 'bg-[#3b82f6] text-white shadow-md shadow-blue-500/20'
                : 'bg-[#101524] text-[#8b93a9] hover:text-[#eef1f8] hover:bg-[#162038] border border-[#1a2238]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredGallery.map((item) => {
          const currentView = activeBeforeAfterView[item.id] || 'after';
          const displayedImage = item.type === 'before_after' 
            ? (currentView === 'before' ? item.beforeImage || item.image : item.afterImage || item.image)
            : item.image;

          return (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              className="rounded-2xl bg-[#101524] border border-[#1a2238] overflow-hidden flex flex-col justify-between hover:border-[#3b82f6]/40 transition-all shadow-lg"
            >
              {/* Media Section */}
              <div className="relative aspect-[16/10] bg-[#0a0f1d] overflow-hidden">
                <img
                  src={displayedImage}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                />

                {/* Tag pill */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-sm text-white text-[11px] font-semibold border border-white/10">
                  {item.tag}
                </span>

                {/* If Before / After, show interactive toggle switch */}
                {item.type === 'before_after' && (
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
                    <span className="text-[11px] font-bold text-[#7c9cff] flex items-center gap-1">
                      <ArrowLeftRight className="w-3.5 h-3.5" />
                      <span>Comparison</span>
                    </span>
                    <div className="flex items-center gap-1 bg-[#101524] p-0.5 rounded-lg border border-[#1a2238]">
                      <button
                        onClick={() => toggleBeforeAfter(item.id, 'before')}
                        className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-all ${
                          currentView === 'before'
                            ? 'bg-amber-500 text-black shadow'
                            : 'text-[#8b93a9] hover:text-[#eef1f8]'
                        }`}
                      >
                        Before (Damaged)
                      </button>
                      <button
                        onClick={() => toggleBeforeAfter(item.id, 'after')}
                        className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-all ${
                          currentView === 'after'
                            ? 'bg-[#25d366] text-black shadow'
                            : 'text-[#8b93a9] hover:text-[#eef1f8]'
                        }`}
                      >
                        After (Repaired)
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Text info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-[#8b93a9]">
                    <span className="flex items-center gap-1 text-[#7c9cff]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </span>
                    <span className="text-[11px]">{item.date}</span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#eef1f8]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#8b93a9] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1a2238] flex items-center justify-between">
                  <span className="text-[11px] text-[#25d366] font-medium">
                    Verified Abbottabad Job
                  </span>
                  <button
                    onClick={() => openWhatsAppChat(`Assalam-o-Alaikum! I saw your gallery project "${item.title}" and would like a similar service in Abbottabad.`)}
                    className="px-3 py-1.5 rounded-xl bg-[#25d366] hover:bg-[#20b859] text-black text-xs font-bold transition-colors flex items-center gap-1.5 shadow-md shadow-green-500/10"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire Similar Job</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
