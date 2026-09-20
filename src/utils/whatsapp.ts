import { Product, InquiryCartItem, ServiceItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Top Tune Electronics',
  tagline: 'Your Complete Electronics Solution',
  city: 'Abbottabad',
  province: 'Khyber Pakhtunkhwa, Pakistan',
  address: 'Main Mansehra Road, Supply / Mandian Area, Abbottabad, Pakistan',
  primaryPhoneFormatted: '+92 325 9838228',
  primaryPhoneDigits: '923259838228',
  secondaryPhoneFormatted: '0318-5533078',
  secondaryPhoneDigits: '923185533078',
  email: 'toptuneelectronicstte@gmail.com',
  hours: 'Mon - Sat: 9:00 AM - 9:00 PM (Fri Prayer Break 1:00 PM - 2:30 PM)',
  sundayHours: 'Sunday: On-call emergency repair & booking available',
  mapQueryUrl: 'https://www.google.com/maps/search/?api=1&query=Abbottabad+Khyber+Pakhtunkhwa+Pakistan+Electronics',
  mapEmbedUrl: 'https://maps.google.com/maps?q=Abbottabad%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed',
  serviceCoverage: ['Abbottabad City', 'Mandian', 'Supply', 'Jinnahabad', 'Havelian', 'Haripur', 'Mansehra', 'Nathiagali', 'Islamabad to Naran Route']
};

export function createWhatsAppUrl(phoneDigits: string, text: string): string {
  const encoded = encodeURIComponent(text.trim());
  return `https://wa.me/${phoneDigits}?text=${encoded}`;
}

export function openWhatsAppChat(text?: string, useSecondary = false) {
  const phone = useSecondary ? BUSINESS_INFO.secondaryPhoneDigits : BUSINESS_INFO.primaryPhoneDigits;
  const defaultText = `Assalam-o-Alaikum Top Tune Electronics! I am contacting you regarding your electronics sales & repair services in Abbottabad.`;
  const url = createWhatsAppUrl(phone, text || defaultText);
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function inquireProductWhatsApp(product: Product, useSecondary = false) {
  const text = `Assalam-o-Alaikum Top Tune Electronics Abbottabad! 📺⚡
I want to inquire about this product:

📦 *Product:* ${product.name}
🏷️ *Brand:* ${product.brand}
💰 *Price:* Rs. ${product.price.toLocaleString()}
🛡️ *Warranty:* ${product.warranty}
🏷️ *Code:* TTE-${product.id}

Could you please confirm availability, current discount, and delivery details in Abbottabad/Hazara region?`;

  const phone = useSecondary ? BUSINESS_INFO.secondaryPhoneDigits : BUSINESS_INFO.primaryPhoneDigits;
  window.open(createWhatsAppUrl(phone, text), '_blank', 'noopener,noreferrer');
}

export function inquireCartWhatsApp(items: InquiryCartItem[], customerName?: string, customerCity?: string) {
  let itemList = items
    .map((item, idx) => `${idx + 1}. *${item.product.name}* (Qty: ${item.quantity}) - Rs. ${(item.product.price * item.quantity).toLocaleString()}`)
    .join('\n');

  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const text = `Assalam-o-Alaikum Top Tune Electronics Abbottabad! 🛒
I would like to place an inquiry for the following items:

${itemList}

💵 *Estimated Total:* Rs. ${total.toLocaleString()}
${customerName ? `👤 *Name:* ${customerName}` : ''}
${customerCity ? `📍 *Location:* ${customerCity}` : '📍 *Location:* Abbottabad'}

Please provide me with final price, stock confirmation, and delivery/pickup schedule.`;

  window.open(createWhatsAppUrl(BUSINESS_INFO.primaryPhoneDigits, text), '_blank', 'noopener,noreferrer');
}

export function inquireServiceWhatsApp(service: ServiceItem, issueDetails?: string, useSecondary = false) {
  const text = `Assalam-o-Alaikum Top Tune Electronics! 🔧🛠️
I need assistance with your service:

⚙️ *Service:* ${service.title}
💼 *Category:* ${service.category.toUpperCase()}
💰 *Estimated Range:* ${service.priceRange}
${issueDetails ? `📝 *Problem/Requirement Description:* ${issueDetails}` : ''}

Please let me know when your technician is available or if I should bring my unit to your Abbottabad workshop.`;

  const phone = useSecondary ? BUSINESS_INFO.secondaryPhoneDigits : BUSINESS_INFO.primaryPhoneDigits;
  window.open(createWhatsAppUrl(phone, text), '_blank', 'noopener,noreferrer');
}

export function sendContactInquiryWhatsApp(formData: {
  name: string;
  phone?: string;
  serviceType: string;
  message: string;
  deviceModel?: string;
}) {
  const text = `Assalam-o-Alaikum Top Tune Electronics Abbottabad! 📩

👤 *Customer Name:* ${formData.name}
${formData.phone ? `📞 *Customer Phone:* ${formData.phone}` : ''}
🛠️ *Inquiry Type:* ${formData.serviceType}
${formData.deviceModel ? `📱 *Device/Model:* ${formData.deviceModel}` : ''}
💬 *Message:*
${formData.message}

Looking forward to your quick response. Thank you!`;

  window.open(createWhatsAppUrl(BUSINESS_INFO.primaryPhoneDigits, text), '_blank', 'noopener,noreferrer');
}
