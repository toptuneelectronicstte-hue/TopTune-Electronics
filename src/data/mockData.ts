import { Product, ServiceItem, Brand, GalleryProject } from '../types';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'tv-sam-55',
    name: 'Samsung 55" Crystal UHD 4K Smart LED TV',
    category: 'leds',
    brand: 'Samsung',
    price: 138500,
    originalPrice: 148000,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    tagline: 'Ultra-crisp 4K HDR display with Tizen OS & AirPlay 2',
    rating: 4.9,
    reviewsCount: 38,
    inStock: true,
    warranty: '1 Year Official Warranty',
    isFeatured: true,
    badge: 'Best Seller',
    deliveryInfo: 'Same-day delivery in Abbottabad & Havelian',
    specifications: [
      { label: 'Screen Size', value: '55 Inch 4K UHD (3840 x 2160)' },
      { label: 'Display Engine', value: 'Crystal Processor 4K' },
      { label: 'HDR Support', value: 'HDR 10+, HLG' },
      { label: 'Smart OS', value: 'Samsung Tizen OS' },
      { label: 'Connectivity', value: '3x HDMI, 2x USB, Optical, Bluetooth 5.2, Dual WiFi' },
      { label: 'Audio', value: '20W 2CH with Q-Symphony & Object Tracking Sound Lite' }
    ],
    features: [
      'Pure Color tuning for vibrant realistic picture',
      'AirSlim seamless wall-mounting profile',
      'SolarCell one-remote control included',
      'Pre-installed YouTube, Netflix, Prime Video & IPTV support'
    ]
  },
  {
    id: 'tv-tcl-43',
    name: 'TCL 43" 4K HDR Google TV (Bezel-Less)',
    category: 'leds',
    brand: 'TCL',
    price: 84500,
    originalPrice: 89900,
    image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80',
    tagline: 'Dolby Vision & Atmos with Google TV smart voice control',
    rating: 4.8,
    reviewsCount: 44,
    inStock: true,
    warranty: '2 Years Manufacturer Warranty',
    isFeatured: true,
    badge: 'Popular',
    deliveryInfo: 'Free delivery & unboxing in Abbottabad city',
    specifications: [
      { label: 'Screen Size', value: '43 Inch 4K Ultra HD' },
      { label: 'Operating System', value: 'Google TV with Google Assistant' },
      { label: 'Sound', value: '24W Dolby Atmos Stereo' },
      { label: 'RAM / Storage', value: '2GB RAM + 16GB Internal' },
      { label: 'Panel Type', value: 'A+ Grade Metallic Bezel-less IPS' }
    ],
    features: [
      'Direct Google Play Store access for Pakistani news & entertainment apps',
      'Micro Dimming technology for deep dark blacks in night viewing',
      'Chromecast built-in for seamless phone mirroring',
      'Game Master low input latency mode'
    ]
  },
  {
    id: 'tv-eco-32',
    name: 'EcoStar 32" HD Ready Slim LED TV',
    category: 'leds',
    brand: 'EcoStar',
    price: 36500,
    originalPrice: 39500,
    image: 'https://images.unsplash.com/photo-1577975882846-431adc8c2009?auto=format&fit=crop&w=800&q=80',
    tagline: 'Budget-friendly, energy-efficient TV ideal for bedrooms and shops',
    rating: 4.7,
    reviewsCount: 52,
    inStock: true,
    warranty: '1 Year Local Warranty',
    isFeatured: false,
    badge: 'Budget Pick',
    deliveryInfo: 'Available in shop or Abbottabad delivery',
    specifications: [
      { label: 'Screen Size', value: '32 Inch HD Ready (1366 x 768)' },
      { label: 'Ports', value: '2x HDMI, 2x USB, AV In, Earphone Out' },
      { label: 'Power Consumption', value: 'Ultra Low 45W (Ideal for UPS/Solar)' },
      { label: 'Audio', value: '16W Dual Down-firing Speakers' }
    ],
    features: [
      'Instant USB movie and picture playback',
      'High surge protection against Abbottabad power fluctuations',
      'Lightweight and compact wall-mount ready'
    ]
  },
  {
    id: 'tv-sony-65',
    name: 'Sony Bravia 65" 4K UHD Smart LED TV',
    category: 'leds',
    brand: 'Sony',
    price: 345000,
    originalPrice: 365000,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    tagline: 'Sony 4K HDR Processor X1 with Triluminos Pro LED Display & Google TV',
    rating: 5.0,
    reviewsCount: 28,
    inStock: true,
    warranty: '1 Year Comprehensive Warranty',
    isFeatured: true,
    badge: 'Sony LED Flagship',
    deliveryInfo: 'Safe white-glove delivery across Hazara & Islamabad',
    specifications: [
      { label: 'Display Technology', value: 'Sony 4K HDR Triluminos Pro LED Panel' },
      { label: 'Screen Size', value: '65 Inch (164 cm) 4K Ultra HD (3840 x 2160)' },
      { label: 'Image Processor', value: 'Sony 4K HDR Processor X1' },
      { label: 'Motion Enhancer', value: 'Motionflow XR 200 (Smooth Action Clarity)' },
      { label: 'Smart Platform', value: 'Google TV with Hands-Free Voice Search' },
      { label: 'Audio Engine', value: '20W Bass Reflex X-Balanced Speakers with Dolby Atmos' },
      { label: 'Connectivity', value: '4x HDMI 2.1, 2x USB, Optical, Bluetooth 5.0, Dual WiFi' }
    ],
    features: [
      'Triluminos Pro algorithm reproduces over 1 billion rich, natural colors',
      '4K X-Reality PRO upscales lower-resolution TV broadcasts and cable channels',
      'X-Balanced speaker design delivers clear vocals and punchy bass for movies and music',
      'Seamless integration with Apple AirPlay, Chromecast, and Google Assistant'
    ]
  },
  {
    id: 'lcd-refurb-42',
    name: 'Commercial Grade 42" Full HD LCD Monitor TV',
    category: 'lcds',
    brand: 'LG',
    price: 32000,
    originalPrice: 36000,
    image: 'https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?auto=format&fit=crop&w=800&q=80',
    tagline: 'Heavy-duty 24/7 continuous operation LCD for CCTV monitoring and shops',
    rating: 4.6,
    reviewsCount: 27,
    inStock: true,
    warranty: '6 Months Replacement Warranty',
    isFeatured: false,
    badge: 'CCTV Ready',
    deliveryInfo: 'In-store pickup or Abbottabad dispatch',
    specifications: [
      { label: 'Display Panel', value: '42 Inch IPS Hard Glass LCD Panel' },
      { label: 'Resolution', value: 'Full HD 1080p (1920 x 1080)' },
      { label: 'Inputs', value: 'HDMI, VGA, DVI, BNC Component, Audio' },
      { label: 'Duty Cycle', value: '24/7 Commercial Continuous Rated' }
    ],
    features: [
      'Heavy-duty cooling chassis suitable for surveillance DVR/NVRs',
      'Anti-glare matte coating protects against shop lights',
      'Solid metal chassis with VESA standard mount'
    ]
  },
  {
    id: 'cctv-hik-kit',
    name: 'Hikvision 5MP ColorVu 4-Camera Surveillance Kit',
    category: 'cctv',
    brand: 'Hikvision',
    price: 46500,
    originalPrice: 51000,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    tagline: '24/7 Full Color night vision with built-in audio mic & mobile viewing',
    rating: 5.0,
    reviewsCount: 65,
    inStock: true,
    warranty: '1 Year Replacement Warranty',
    isFeatured: true,
    badge: 'Top Seller',
    deliveryInfo: 'Professional installation available anywhere in Abbottabad',
    specifications: [
      { label: 'Resolution', value: '5 Megapixel 3K High Definition' },
      { label: 'Night Vision', value: 'ColorVu 24/7 Full Color with Warm Light' },
      { label: 'Cameras Included', value: '2x Outdoor Weatherproof Bullets + 2x Indoor Domes' },
      { label: 'DVR Included', value: '4-Channel AcuSense AI Human/Vehicle Filter DVR' },
      { label: 'Hard Drive', value: '1TB Surveillance Grade WD Purple HDD' }
    ],
    features: [
      'Live mobile monitoring on Hik-Connect app for Android & iPhone',
      'Built-in audio microphone on all 4 cameras for crystal clear sound recording',
      'AI false alarm filter (ignores pets, leaves, and rain)',
      'IP67 certified rain and Abbottabad winter frost proof'
    ]
  },
  {
    id: 'cctv-dahua-ptz',
    name: 'Dahua 4MP Wi-Fi 360° Outdoor PTZ Smart Camera',
    category: 'cctv',
    brand: 'Dahua',
    price: 18500,
    originalPrice: 21000,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    tagline: 'Motorized pan/tilt rotation with auto tracking, siren & 2-way talk',
    rating: 4.8,
    reviewsCount: 31,
    inStock: true,
    warranty: '1 Year Warranty',
    isFeatured: false,
    badge: 'Smart WiFi',
    deliveryInfo: 'Fast dispatch or technician setup available',
    specifications: [
      { label: 'Coverage', value: '355° Pan & 90° Tilt Motorized Rotation' },
      { label: 'Audio', value: 'Two-Way Intercom (Speak & Listen via Phone)' },
      { label: 'Storage', value: 'MicroSD Card slot up to 256GB + Cloud option' },
      { label: 'Connectivity', value: 'Dual 2.4GHz WiFi + RJ45 Ethernet Port' }
    ],
    features: [
      'Smart human tracking automatically follows visitors or intruders',
      'Active deterrent flashing blue/red lights and loud siren',
      'No complex DVR needed — works directly with home WiFi router'
    ]
  },
  {
    id: 'heater-rinnai-110v',
    name: 'Japanese Rinnai 110V Gas Fan Blore Heater (Original)',
    category: 'appliances',
    brand: 'Rinnai Japan',
    price: 24500,
    originalPrice: 27000,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    tagline: 'High efficiency Japanese winter heater with digital climate control',
    rating: 4.9,
    reviewsCount: 78,
    inStock: true,
    warranty: '6 Months Repair & Replacement Guarantee',
    isFeatured: true,
    badge: 'Winter Essential',
    deliveryInfo: 'Free 220V to 110V heavy transformer & gas pipe included',
    specifications: [
      { label: 'Origin', value: 'Direct Japanese Import (Grade A Condition)' },
      { label: 'Power Source', value: 'Dual: Natural Gas / LPG + 110V Electric Fan' },
      { label: 'Accessories', value: 'Heavy Duty 220V to 110V Converter Transformer Included' },
      { label: 'Safety', value: 'Tilt Shut-off, Oxygen Depletion Sensor, Child Lock' }
    ],
    features: [
      'Warms large room in less than 5 minutes during freezing Abbottabad winter',
      'Consumes 90% less gas compared to traditional local gas heaters',
      'No smell, no smoke — built-in clean combustion blower fan',
      'Digital LED thermostat with timer setting and eco energy mode'
    ]
  },
  {
    id: 'heater-osaka-110v',
    name: 'Osaka Gas 110V Japanese Fan Blore Heater',
    category: 'appliances',
    brand: 'Osaka Gas',
    price: 22000,
    originalPrice: 24500,
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80',
    tagline: 'Compact high-thrust blower heater with safety auto-cut sensors',
    rating: 4.8,
    reviewsCount: 42,
    inStock: true,
    warranty: '6 Months Warranty + Free Stepdown Transformer',
    isFeatured: false,
    badge: 'Japanese Original',
    deliveryInfo: 'Tested with gas & electric in front of customer',
    specifications: [
      { label: 'Capacity', value: 'Heats up to 20 x 20 ft Room Space' },
      { label: 'Controls', value: 'Touch Button Digital Panel with Temp Presets' },
      { label: 'Air Filter', value: 'Washable Anti-Dust Rear Filter' }
    ],
    features: [
      'Instant electronic ignition at the touch of a button',
      'Safe for kids: outer metallic body remains cool to the touch',
      'Low electricity draw (only 25W for the blower fan)'
    ]
  },
  {
    id: 'box-xiaomi-s2',
    name: 'Xiaomi Mi TV Box S (2nd Gen) 4K Google TV',
    category: 'android_boxes',
    brand: 'Xiaomi',
    price: 15500,
    originalPrice: 17000,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
    tagline: 'Certified Google TV with Dolby Vision, Atmos & 4K Ultra HD',
    rating: 4.9,
    reviewsCount: 56,
    inStock: true,
    warranty: '1 Year Warranty',
    isFeatured: true,
    badge: 'Certified',
    deliveryInfo: 'Turn any standard LED/LCD into a superfast Smart TV',
    specifications: [
      { label: 'Operating System', value: 'Google TV (Android 11)' },
      { label: 'Memory', value: '2GB RAM + 8GB High Speed eMMC Storage' },
      { label: 'Video Output', value: '4K @ 60fps with HDR10+ and Dolby Vision' },
      { label: 'Wireless', value: 'Dual-Band WiFi 2.4/5GHz + Bluetooth 5.2' }
    ],
    features: [
      'Official Netflix 4K, YouTube 4K, Amazon Prime, and Disney+ certified',
      'Bluetooth 360° voice remote with dedicated shortcut buttons',
      'Full Pakistani live channels and sports apps support'
    ]
  },
  {
    id: 'box-tx9-pro',
    name: 'TX9 Pro 8K Ultra Android TV Box (4GB / 64GB)',
    category: 'android_boxes',
    brand: 'TX Tech',
    price: 9500,
    originalPrice: 11500,
    image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80',
    tagline: 'Massive 64GB storage with pre-installed live TV and movie apps',
    rating: 4.7,
    reviewsCount: 68,
    inStock: true,
    warranty: '6 Months Warranty',
    isFeatured: false,
    badge: 'High Value',
    deliveryInfo: 'Fully configured and ready to plug and play',
    specifications: [
      { label: 'RAM / ROM', value: '4GB High Speed RAM + 64GB Storage' },
      { label: 'Processor', value: 'Amlogic S905 Quad-Core 64-Bit' },
      { label: 'Interfaces', value: 'HDMI, 2x USB, AV for older TVs, MicroSD, Optical' }
    ],
    features: [
      'Pre-configured with free live sports, drama, and Pakistani news apps',
      'Connects effortlessly to old CRT or modern LED TVs via HDMI or AV cable',
      'Supports wireless mouse and keyboard for easy browsing'
    ]
  },
  {
    id: 'rec-mediastar-z2',
    name: 'Mediastar MS-Diamond Z2 4K Satellite Receiver',
    category: 'receivers',
    brand: 'Mediastar',
    price: 24000,
    originalPrice: 26500,
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    tagline: 'Dual Tuner 4K Android 9.0 receiver with Forever VIP Server',
    rating: 5.0,
    reviewsCount: 33,
    inStock: true,
    warranty: '1 Year Warranty + Server Support',
    isFeatured: true,
    badge: 'Enthusiast Choice',
    deliveryInfo: 'Latest channel list for Abbottabad / Hazara dish setups preloaded',
    specifications: [
      { label: 'Tuner Type', value: 'Dual Tuner DVB-S2X Multi-stream + Android OS' },
      { label: 'Server Service', value: '15 Months Forever VIP Pro + Apollo IPTV' },
      { label: 'Display Resolution', value: 'Real 4K 2160p 60fps HDR' },
      { label: 'Connectivity', value: 'LAN Port, WiFi Antenna, USB 3.0, Optical Audio' }
    ],
    features: [
      'Opens all premium sports and movie satellite packages worldwide',
      'Dual tuner allows recording one channel while watching another',
      'Install Android apps directly on the receiver'
    ]
  },
  {
    id: 'rec-starsat-200',
    name: 'Starsat SR-200HD Extreme Satellite Receiver',
    category: 'receivers',
    brand: 'Starsat',
    price: 13500,
    originalPrice: 15000,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    tagline: 'Full HD Multi-stream receiver with 15-month Forever server',
    rating: 4.8,
    reviewsCount: 47,
    inStock: true,
    warranty: '1 Year Warranty',
    isFeatured: false,
    badge: 'Popular',
    deliveryInfo: 'Includes WiFi Dongle and remote control in box',
    specifications: [
      { label: 'Resolution', value: 'Full HD 1080p 60fps' },
      { label: 'Server Included', value: '15 Months Forever Server + Free IPTV' },
      { label: 'Ports', value: '2x USB 2.0, HDMI, RS232, LNB In' }
    ],
    features: [
      'High sensitivity tuner captures weak satellite signals in hilly areas',
      'Fast channel switching with zero lag',
      'Includes USB WiFi antenna inside the box'
    ]
  },
  {
    id: 'dish-solid-2ft',
    name: 'Solid Ku-Band 2-Foot Heavy Gauge Dish Antenna Kit',
    category: 'dish' as any,
    brand: 'Solid',
    price: 3800,
    originalPrice: 4400,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    tagline: 'High gain offset dish with heavy mount and Single Ku LNBF',
    rating: 4.8,
    reviewsCount: 51,
    inStock: true,
    warranty: 'Rust-resistant Powder Coated Sheet',
    isFeatured: false,
    badge: 'Dish Kit',
    deliveryInfo: 'Professional roof alignment available in Abbottabad',
    specifications: [
      { label: 'Diameter', value: '60cm (2 Feet) Offset Reflector' },
      { label: 'Material', value: 'Galvanized Steel with Anti-Rust Polyester Coating' },
      { label: 'Includes', value: 'Dish Plate, LNB Arm, Wall/Roof Stand, Ku LNBF' }
    ],
    features: [
      'Designed to resist mountain winds and snowfall in Abbottabad and Galyat',
      'Perfect for DD Free Dish, NSS6, Yahsat, and Videocon reception',
      'Clean signal reception with 0.1dB low noise LNB'
    ]
  },
  {
    id: 'remote-universal-smart',
    name: 'Universal Multi-Brand Smart LED Voice Remote',
    category: 'remotes',
    brand: 'Top Tune Choice',
    price: 1800,
    originalPrice: 2200,
    image: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&w=800&q=80',
    tagline: 'Compatible with Samsung, LG, Sony, TCL, Orient, EcoStar & Haier',
    rating: 4.7,
    reviewsCount: 89,
    inStock: true,
    warranty: 'Checking Warranty',
    isFeatured: false,
    badge: 'Essential',
    deliveryInfo: 'Immediate availability in our Abbottabad shop',
    specifications: [
      { label: 'Compatibility', value: 'Samsung, LG, TCL, Sony, Haier, Orient, Android Boxes' },
      { label: 'Features', value: 'Learning button, Netflix & YouTube dedicated keys' },
      { label: 'Range', value: 'Over 10 Meters with broad infrared angle' }
    ],
    features: [
      'Pre-programmed codes: no complicated setup required',
      'Durable ABS shockproof rubberized buttons',
      'Also available: specific original remotes for receivers & dish boxes'
    ]
  },
  {
    id: 'micro-dawlance-20l',
    name: 'Dawlance 20L Solo Microwave Oven (DW-MD7)',
    category: 'appliances',
    brand: 'Dawlance',
    price: 26500,
    originalPrice: 29000,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    tagline: 'Reliable Pakistani recipe presets with express defrost',
    rating: 4.8,
    reviewsCount: 35,
    inStock: true,
    warranty: '1 Year Warranty + 10 Years Magnetron Warranty',
    isFeatured: true,
    badge: 'Best Warranty',
    deliveryInfo: 'Same day home delivery in Abbottabad',
    specifications: [
      { label: 'Capacity', value: '20 Litres Cooking Cavity' },
      { label: 'Power Output', value: '700W Magnetron' },
      { label: 'Defrost', value: 'Weight & Time Express Defrost' },
      { label: 'Timer', value: '35 Minutes Mechanical Rotary Dial' }
    ],
    features: [
      '10 Years official Dawlance magnetron replacement warranty',
      'Specially designed to handle local village/town voltage swings',
      'Easy wipe-clean interior cavity'
    ]
  },
  {
    id: 'net-tplink-c6',
    name: 'TP-Link Archer C6 AC1200 Gigabit Dual Band WiFi Router',
    category: 'networking',
    brand: 'TP-Link',
    price: 11200,
    originalPrice: 12500,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    tagline: 'Full Gigabit ports, 4 external antennas with MU-MIMO technology',
    rating: 4.9,
    reviewsCount: 41,
    inStock: true,
    warranty: '1 Year TP-Link Pakistan Warranty',
    isFeatured: false,
    badge: 'Gigabit WiFi',
    deliveryInfo: 'Includes free setup guidance or technician visit',
    specifications: [
      { label: 'Speeds', value: '867 Mbps on 5GHz + 300 Mbps on 2.4GHz' },
      { label: 'Ports', value: '1x Gigabit WAN + 4x Gigabit LAN' },
      { label: 'Antennas', value: '4 High Performance Beamforming Antennas' },
      { label: 'Mesh Support', value: 'OneMesh compatible for whole-home coverage' }
    ],
    features: [
      'Penetrates thick brick and concrete walls common in Abbottabad homes',
      'Supports 30+ devices smoothly for streaming and online classes',
      'Access Point mode to upgrade existing PTCL/StormFiber modem'
    ]
  },
  {
    id: 'net-mercusys-ext',
    name: 'Mercusys ME30 AC1200 Wall-Plug WiFi Range Extender',
    category: 'networking',
    brand: 'Mercusys',
    price: 5800,
    originalPrice: 6500,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    tagline: 'Eliminate WiFi dead zones across upstairs rooms and basements',
    rating: 4.7,
    reviewsCount: 39,
    inStock: true,
    warranty: '1 Year Warranty',
    isFeatured: false,
    badge: 'Range Booster',
    deliveryInfo: 'Plug and play in any wall socket',
    specifications: [
      { label: 'Coverage', value: 'Up to 1,500 sq.ft Range Boost' },
      { label: 'Smart Signal Indicator', value: 'LED shows best location for socket' },
      { label: 'Speed', value: 'Dual Band 1200 Mbps (300 + 867 Mbps)' }
    ],
    features: [
      'One-touch WPS push button pairing with your main router',
      'Ethernet port for connecting Smart TV or CCTV DVR directly',
      'Compact wall plug footprint'
    ]
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'service-sales',
    title: 'Electronics Sales & Home Delivery',
    category: 'sales',
    shortDesc: 'Brand new TVs, CCTV kits, Japanese heaters, Android boxes with safe delivery.',
    fullDesc: 'We supply brand-new, authentic home entertainment and security equipment across Abbottabad, Haripur, Mansehra, and Hazara division. We offer genuine manufacturer warranties, doorstep unboxing, and pre-testing before dispatch.',
    priceRange: 'Wholesale & Retail Market Rates',
    turnaroundTime: 'Same-Day Abbottabad / 24-48h Region',
    warranty: 'Official Brand Warranties (1-2 Years)',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Direct sourcing from official distributors in Pakistan',
      'Doorstep unboxing and live display verification',
      'Special discounted combo packages for newly constructed homes & shops',
      'Cash on Delivery or Bank Transfer payment options'
    ],
    supportedItems: [
      'Smart 4K LED/LCD TVs (32" to 75")',
      'Hikvision & Dahua 5MP CCTV surveillance kits',
      'Japanese 110V Gas Fan Heaters (Rinnai, Osaka Gas)',
      'Android 4K TV Boxes & Google TV dongles',
      'Satellite Dish Receivers & universal remotes',
      'Microwave Ovens & home appliances'
    ],
    features: [
      'Genuine sealed pack products',
      'Bulk wholesale prices for commercial buyers',
      'Free technical guidance for choosing the right size'
    ]
  },
  {
    id: 'service-repair',
    title: 'Master Repair Services & Workshop',
    category: 'repair',
    shortDesc: 'Component-level repair for LED/LCD screens, microwave ovens, UPS, inverters & sound systems.',
    fullDesc: 'Our dedicated workshop in Abbottabad features skilled micro-electronics technicians equipped with digital oscilloscopes, BGA rework stations, backlight testing meters, and genuine replacement spare parts.',
    priceRange: 'Inspection Rs. 500 | Repairs from Rs. 1,500',
    turnaroundTime: '24 to 72 Hours (Fast-track emergency available)',
    warranty: '30 to 90 Days Repair Guarantee',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Specialist in LED/LCD backlight strip replacements & panel bonded T-Con repairs',
      'Component-level motherboard repair rather than costly whole-board replacement',
      'Microwave oven magnetron, high-voltage diode, and touch keypad repair',
      'Solar hybrid inverter & UPS MOSFETs and driver circuit repair'
    ],
    supportedItems: [
      'LED & LCD TVs (Sound present but no display, blue screen, power dead)',
      'Microwave Ovens (Not heating, spark inside, dead keypad, turntable stuck)',
      'UPS & Solar Hybrid Inverters (Overload trip, charging fault, fan error)',
      'Sound Systems, Amplifiers, Subwoofers & Stage Speakers',
      'Electric Automatic Dry Irons & Garment Steamers',
      'Japanese 110V Heaters (Ignition fault, E1/E2 code clear, valve cleaning)'
    ],
    features: [
      'Transparent estimates provided before commencing repair',
      'Original brand capacitors, LEDs, and power ICs used',
      'Free testing after reassembly'
    ]
  },
  {
    id: 'service-cctv',
    title: 'CCTV Camera Installation & Maintenance',
    category: 'cctv',
    shortDesc: 'Turnkey security camera setup for homes, plazas, hotels, and schools with mobile viewing.',
    fullDesc: 'End-to-end security design and cabling for Abbottabad villas, commercial markets, guest houses, and hotels along the Karakoram Highway route. We ensure clean concealed piping, weatherproof junction boxes, and mobile app integration.',
    priceRange: 'Installation from Rs. 1,200 per point',
    turnaroundTime: '1 - 2 Days for Complete Setup',
    warranty: '1 Year Installation & Wiring Guarantee',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Setup Hik-Connect / DMSS on all family or staff smartphones',
      'AI AcuSense human/vehicle detection configuration to stop false alarms',
      'Night-time ColorVu calibration for maximum night clarity in pitch darkness',
      'Annual maintenance contracts (AMC) for schools, clinics & shops'
    ],
    supportedItems: [
      'Hikvision, Dahua, Uniview HD Analog & IP PoE Systems',
      'PTZ 360-degree motorized cameras with auto tracking',
      'Surveillance Hard Drives, Power Supplies & Metal Enclosures',
      'BNC / Cat6 pure copper shielded cable runs'
    ],
    features: [
      'Free on-site security survey in Abbottabad city',
      'Neat cable clipping and conduit installation',
      'Offline backup and UPS power integration'
    ]
  },
  {
    id: 'service-dish',
    title: 'Dish Antenna Setup & Multi-LNB Alignment',
    category: 'dish',
    shortDesc: 'High-precision satellite alignment for Asiasat, Paksat, Nilesat, Hotbird & Yahsat.',
    fullDesc: 'Expert rooftop satellite installation using professional digital RF spectrum meters. We guarantee maximum signal quality even during heavy mountain clouds and rain in Abbottabad and surrounding hills.',
    priceRange: 'Alignment from Rs. 1,000 | New Setup from Rs. 2,500',
    turnaroundTime: '2 to 4 Hours On-Site',
    warranty: 'Signal Lock Guarantee',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Multi-LNB side brackets: catch up to 4 satellites on a single dish',
      'DiSEqC switch configuration for multi-room satellite distribution',
      'Forever server renewal and receiver channel software flashing',
      'Sturdy wind-resistant bracket bolting for Abbottabad mountain weather'
    ],
    supportedItems: [
      'Ku-Band Dishes (2ft, 3ft) & C-Band Heavy Mesh Dishes (6ft, 8ft)',
      'Paksat 38E, Asiasat 7 105E, Yahsat 52E, NSS6 95E, Hotbird 13E',
      'Mediastar, Starsat, Tiger, and EcoStar digital decoders'
    ],
    features: [
      'Digital spectrum analyzer alignment for maximum dB signal',
      'Heavy weather sealing on all RF F-connectors',
      'Latest 2025/2026 satellite frequency updates'
    ]
  },
  {
    id: 'service-networking',
    title: 'Network Setup & WiFi Troubleshooting',
    category: 'networking',
    shortDesc: 'Whole-home WiFi mesh, Cat6 cabling, multi-floor router bridging, and speed optimization.',
    fullDesc: 'Solve weak internet signal and dropped calls in multi-story brick and RCC homes in Abbottabad. We configure gigabit access points, ethernet jacks, guest networks, and reliable router bridges.',
    priceRange: 'Starting from Rs. 1,500',
    turnaroundTime: 'Same-Day Service',
    warranty: 'Stability Guarantee',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Eliminate WiFi dead zones in bedrooms, basements, and guest quarters',
      'Seamless roaming mesh so your device never drops signal walking between floors',
      'LAN cabling for Smart TVs and gaming consoles for buffer-free 4K streaming',
      'PTCL / StormFiber / Local Optical Fiber gateway optimization'
    ],
    supportedItems: [
      'TP-Link, Mercusys, Tenda, D-Link Routers & Mesh Pods',
      'Cat6 RJ45 termination, patch panels, and gigabit switches',
      'Wireless point-to-point bridge links between separate buildings'
    ],
    features: [
      'Speed and latency diagnostics before and after setup',
      'Secure WPA3 encryption configuration',
      'Parental control and bandwidth limiter settings'
    ]
  }
];

export const BRANDS_DATA: Brand[] = [
  {
    id: 'b-samsung',
    name: 'Samsung',
    category: 'Smart TVs & Electronics',
    country: 'South Korea',
    description: 'World leader in Crystal UHD and QLED smart displays with official warranty support.',
    popularProducts: ['Crystal UHD 55"', 'QLED 4K TVs', 'Soundbars'],
    isAuthorized: true
  },
  {
    id: 'b-sony',
    name: 'Sony',
    category: 'Premium OLED & Audio',
    country: 'Japan',
    description: 'Renowned for XR processor picture processing and legendary high-fidelity audio systems.',
    popularProducts: ['Bravia OLED Series', 'Home Theaters', 'Hi-Res Audio'],
    isAuthorized: true
  },
  {
    id: 'b-tcl',
    name: 'TCL',
    category: '4K Google TVs',
    country: 'Global Leader',
    description: 'Leading global TV manufacturer offering bezel-less design with Dolby Atmos at competitive prices.',
    popularProducts: ['43" 4K Google TV', '50" QLED Series', 'Bezel-less TVs'],
    isAuthorized: true
  },
  {
    id: 'b-hikvision',
    name: 'Hikvision',
    category: 'Surveillance & CCTV',
    country: 'Global Security',
    description: '#1 video surveillance brand globally. AcuSense AI DVRs and 24/7 ColorVu night vision cameras.',
    popularProducts: ['5MP ColorVu Kits', 'AcuSense AI DVR', 'IP Cameras'],
    isAuthorized: true
  },
  {
    id: 'b-dahua',
    name: 'Dahua Technology',
    category: 'Smart Cameras & Security',
    country: 'Global Security',
    description: 'Pioneers in high-resolution video surveillance, full-color night vision, and outdoor PTZ Wi-Fi cameras.',
    popularProducts: ['Full-Color Bullet', '360 PTZ Cameras', 'PoE Switches'],
    isAuthorized: true
  },
  {
    id: 'b-rinnai',
    name: 'Rinnai Japan',
    category: 'Japanese Heaters',
    country: 'Japan',
    description: 'Authentic imported Japanese 110V gas fan heaters. Known for extreme fuel efficiency and zero emissions.',
    popularProducts: ['Digital Gas Fan Heater', 'Blower Heaters', 'Stepdown Transformers'],
    isAuthorized: true
  },
  {
    id: 'b-osaka',
    name: 'Osaka Gas',
    category: 'Japanese Heaters',
    country: 'Japan',
    description: 'Top-tier Japanese domestic market gas heaters featuring digital thermostat controls and child lock sensors.',
    popularProducts: ['110V Electric Blower Heaters', 'Compact Room Heaters'],
    isAuthorized: true
  },
  {
    id: 'b-tplink',
    name: 'TP-Link',
    category: 'Networking & Routers',
    country: 'Global Networking',
    description: 'Pakistan’s top choice for reliable dual-band WiFi routers, Gigabit switches, and high-gain range extenders.',
    popularProducts: ['Archer C6 Gigabit', 'Deco Mesh WiFi', 'Range Extenders'],
    isAuthorized: true
  },
  {
    id: 'b-xiaomi',
    name: 'Xiaomi',
    category: 'Android Smart Devices',
    country: 'Global Tech',
    description: 'Official Google TV certified streaming boxes that transform any regular TV into a 4K powerhouse.',
    popularProducts: ['Mi TV Box S (2nd Gen)', 'Smart Remotes', 'Mi TV Stick'],
    isAuthorized: true
  },
  {
    id: 'b-mediastar',
    name: 'Mediastar',
    category: 'Satellite Receivers',
    country: 'Middle East / Asia',
    description: 'The preferred satellite decoder brand for 4K broadcast enthusiasts, multi-satellite setups, and VIP servers.',
    popularProducts: ['Diamond Z2 4K', 'Forever Server Models', 'IPTV Decoders'],
    isAuthorized: true
  },
  {
    id: 'b-dawlance',
    name: 'Dawlance',
    category: 'Microwaves & Appliances',
    country: 'Pakistan / Arçelik',
    description: 'Pakistan’s most trusted household appliance manufacturer with 10-year magnetron guarantees.',
    popularProducts: ['Solo Microwaves', 'Grill Ovens', 'Inverter Microwaves'],
    isAuthorized: true
  },
  {
    id: 'b-ecostar',
    name: 'EcoStar',
    category: 'LED TVs & Remotes',
    country: 'Pakistan',
    description: 'Affordable, robust LED televisions engineered to operate smoothly on local power conditions.',
    popularProducts: ['32" HD LED TV', '40" Smart LED', 'Surge Protected Units'],
    isAuthorized: true
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'gal-1',
    title: '55" Samsung LED Backlight Strip Overhaul',
    category: 'repair',
    type: 'before_after',
    beforeImage: 'https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Customer brought in a TV with sound working but completely dark screen. We disassembled the optical diffuser stack and replaced all LED backlight strips with original factory-spec copper core arrays.',
    location: 'Supply, Abbottabad',
    date: 'Recent Workshop Case',
    tag: 'LED TV Repair'
  },
  {
    id: 'gal-2',
    title: '16-Camera ColorVu CCTV Setup for Commercial Plaza',
    category: 'cctv',
    type: 'showcase',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    description: 'Complete 16-channel Hikvision ColorVu surveillance with concealed PVC conduit piping across 3 shopping floors and basement parking. Mobile viewing configured for management.',
    location: 'Mandian Market, Abbottabad',
    date: 'Commercial Project',
    tag: 'CCTV Installation'
  },
  {
    id: 'gal-3',
    title: 'Dawlance Microwave Magnetron & Diode Replacement',
    category: 'repair',
    type: 'before_after',
    beforeImage: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    description: 'Unit was spinning and counting down but food remained cold due to a blown high-voltage diode and degraded magnetron. Repaired and safety tested with zero RF radiation leakage.',
    location: 'Jinnahabad, Abbottabad',
    date: 'Customer Service Case',
    tag: 'Microwave Repair'
  },
  {
    id: 'gal-4',
    title: 'Multi-Satellite Roof Setup (Asiasat 7 + Paksat + Yahsat)',
    category: 'dish',
    type: 'showcase',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    description: 'Engineered a multi-LNB dish rig anchored against high Abbottabad ridge winds. Connected through a 4x1 DiSEqC switch giving 800+ crystal clear free-to-air Pakistani and international channels.',
    location: 'Murree Road Heights, Abbottabad',
    date: 'Satellite Installation',
    tag: 'Dish Antenna'
  },
  {
    id: 'gal-5',
    title: '3-Story Villa Gigabit WiFi Mesh Network',
    category: 'installation',
    type: 'showcase',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    description: 'Thick stone and RCC walls were cutting off internet on upper floors. We deployed a wired ethernet backhaul with TP-Link gigabit mesh routers for seamless 100Mbps coverage everywhere.',
    location: 'Kakool Road, Abbottabad',
    date: 'Home Networking',
    tag: 'Mesh WiFi'
  },
  {
    id: 'gal-6',
    title: 'Japanese Rinnai 110V Gas Fan Heater Servicing',
    category: 'repair',
    type: 'before_after',
    beforeImage: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    description: 'Deep ultrasonic solenoid valve decarbonization, burner nozzle alignment, and safety sensor diagnostic. Restored to 100% factory heating performance.',
    location: 'Kaghan Colony, Abbottabad',
    date: 'Winter Service',
    tag: 'Japanese Heater'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Engr. Tariq Khan',
    location: 'Mandian, Abbottabad',
    rating: 5,
    text: 'Top Tune Electronics repaired my Samsung 55" LED when two other shops told me to throw away the screen. They replaced the backlight in 24 hours at a very fair rate. Super trustworthy team!',
    service: 'LED TV Backlight Repair'
  },
  {
    name: 'Malik Sohail',
    location: 'Main Bazar, Havelian',
    rating: 5,
    text: 'Ordered 8 Hikvision 5MP cameras for my department store. They came to Havelian, did complete concealed piping, and configured mobile live streaming on 3 phones. Professional work.',
    service: 'CCTV Camera Setup'
  },
  {
    name: 'Dr. Ayesha Rehman',
    location: 'Supply Area, Abbottabad',
    rating: 5,
    text: 'Bought an authentic Japanese Rinnai 110V gas blower heater with stepdown transformer. In freezing Abbottabad winter it heats our drawing room in 4 minutes with zero gas smell. 10/10 service!',
    service: 'Japanese 110V Heater'
  }
];
