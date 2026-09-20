import React from 'react';
import { ActiveTab } from '../types';
import { Tv, ShoppingBag, Wrench, Image as GalleryIcon, MapPin } from 'lucide-react';

interface BottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home' as ActiveTab, label: 'Home', icon: Tv },
    { id: 'products' as ActiveTab, label: 'Products', icon: ShoppingBag },
    { id: 'services' as ActiveTab, label: 'Services', icon: Wrench },
    { id: 'gallery' as ActiveTab, label: 'Gallery', icon: GalleryIcon },
    { id: 'contact' as ActiveTab, label: 'Contact', icon: MapPin },
  ];

  const handleTabClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      id="mobile-bottom-navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080b13]/95 backdrop-blur-lg border-t border-[#1a2238] px-2 py-1.5"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`bottom-nav-${tab.id}`}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-col items-center justify-center min-w-[56px] min-h-[46px] rounded-xl py-1 px-1 transition-all ${
                isActive
                  ? 'text-[#7c9cff] font-semibold scale-105'
                  : 'text-[#8b93a9] hover:text-[#eef1f8]'
              }`}
            >
              <div className={`p-1 rounded-lg transition-colors ${isActive ? 'bg-[#3b82f6]/20' : ''}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#3b82f6]' : 'text-[#8b93a9]'}`} />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight leading-none">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
