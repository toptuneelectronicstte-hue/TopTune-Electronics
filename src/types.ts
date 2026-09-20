export type ProductCategory =
  | 'all'
  | 'leds'
  | 'lcds'
  | 'cctv'
  | 'networking'
  | 'android_boxes'
  | 'receivers'
  | 'remotes'
  | 'appliances';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  brand: string;
  price: number; // in PKR
  originalPrice?: number;
  image: string;
  gallery?: string[];
  tagline: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  warranty: string;
  specifications: ProductSpec[];
  features: string[];
  isFeatured?: boolean;
  badge?: string;
  deliveryInfo?: string;
}

export type ServiceCategory = 'sales' | 'repair' | 'cctv' | 'dish' | 'networking';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  supportedItems: string[];
  priceRange: string;
  turnaroundTime: string;
  warranty: string;
  image: string;
  highlights: string[];
}

export interface Brand {
  id: string;
  name: string;
  category: string;
  country?: string;
  description: string;
  popularProducts: string[];
  isAuthorized?: boolean;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: 'repair' | 'cctv' | 'dish' | 'installation';
  type: 'before_after' | 'showcase';
  beforeImage?: string;
  afterImage?: string;
  image: string;
  description: string;
  location: string;
  date: string;
  tag: string;
}

export interface InquiryCartItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export type ActiveTab = 'home' | 'products' | 'services' | 'brands' | 'gallery' | 'contact';
