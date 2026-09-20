import React, { useState } from 'react';
import { BUSINESS_INFO, sendContactInquiryWhatsApp, openWhatsAppChat } from '../utils/whatsapp';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  ShieldAlert,
  Navigation,
  Sparkles
} from 'lucide-react';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Repair Service (TV, Microwave, Inverter)',
    deviceModel: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const serviceOptions = [
    'Repair Service (TV, Microwave, Inverter, Sound)',
    'Electronics Sales & Price Inquiry',
    'CCTV Camera Installation & Maintenance',
    'Dish Antenna Setup & Alignment',
    'Network Setup & WiFi Troubleshooting',
    'Japanese 110V Gas Fan Heater Inquiry',
    'Other Custom Inquiry'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please describe what you need help with');
      return;
    }

    setErrorMessage('');
    sendContactInquiryWhatsApp(formData);
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#25d366]"></span>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#eef1f8]">
            Contact & Shop Location
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#8b93a9] max-w-2xl">
          Visit our workshop on Main Mansehra Road, Abbottabad, or contact us immediately on WhatsApp for doorstep service and sales inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Quick Contact Cards & Map (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Direct Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* WhatsApp Primary */}
            <div className="p-4 rounded-2xl bg-[#101524] border border-[#1a2238] space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#25d366]/20 flex items-center justify-center text-[#25d366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#eef1f8]">WhatsApp Direct</h4>
                  <p className="text-[11px] text-[#25d366] font-medium">Fastest Response</p>
                </div>
              </div>
              <p className="text-xs text-[#8b93a9]">
                {BUSINESS_INFO.primaryPhoneFormatted} (Sales & Inquiries)
              </p>
              <button
                id="contact-wa-primary-btn"
                onClick={() => openWhatsAppChat(undefined, false)}
                className="w-full py-2 px-3 rounded-xl bg-[#25d366] hover:bg-[#20b859] text-black font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-green-500/10"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            {/* Direct Calling */}
            <div className="p-4 rounded-2xl bg-[#101524] border border-[#1a2238] space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#eef1f8]">Phone Calls</h4>
                  <p className="text-[11px] text-[#7c9cff] font-medium">9 AM - 9 PM</p>
                </div>
              </div>
              <p className="text-xs text-[#8b93a9]">
                {BUSINESS_INFO.secondaryPhoneFormatted} (Tech/Repair)
              </p>
              <a
                id="contact-call-btn"
                href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`}
                className="w-full py-2 px-3 rounded-xl bg-[#162038] hover:bg-[#1e2a4a] text-[#7c9cff] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 border border-[#1a2238]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Shop Now</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map of Abbottabad */}
          <div className="rounded-2xl bg-[#101524] border border-[#1a2238] overflow-hidden">
            <div className="p-4 border-b border-[#1a2238] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#3b82f6]" />
                <span className="font-heading font-semibold text-sm text-[#eef1f8]">
                  Workshop & Store Location
                </span>
              </div>
              <a
                href={BUSINESS_INFO.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#7c9cff] hover:text-[#3b82f6] flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative aspect-[16/9] w-full bg-[#080b13]">
              <iframe
                title="Top Tune Electronics Abbottabad Location"
                src={BUSINESS_INFO.mapEmbedUrl}
                className="w-full h-full border-0 grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-4 bg-[#0a0f1d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#8b93a9]">
              <div className="space-y-0.5">
                <p className="font-medium text-[#eef1f8]">{BUSINESS_INFO.address}</p>
                <p>Abbottabad, Khyber Pakhtunkhwa, Pakistan</p>
              </div>
              <a
                href={BUSINESS_INFO.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-[#162038] hover:bg-[#202d4e] text-[#7c9cff] font-semibold text-xs flex items-center gap-1.5 shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Business Hours & Region Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-[#101524] border border-[#1a2238] space-y-2">
              <div className="flex items-center gap-2 text-[#7c9cff] font-semibold">
                <Clock className="w-4 h-4" />
                <span>Operating Hours</span>
              </div>
              <p className="text-[#eef1f8]">{BUSINESS_INFO.hours}</p>
              <p className="text-[#8b93a9] text-[11px]">{BUSINESS_INFO.sundayHours}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#101524] border border-[#1a2238] space-y-2">
              <div className="flex items-center gap-2 text-[#25d366] font-semibold">
                <Mail className="w-4 h-4" />
                <span>Official Email</span>
              </div>
              <a 
                href={`mailto:${BUSINESS_INFO.email}`}
                className="text-[#eef1f8] hover:text-[#7c9cff] transition-colors break-all block"
              >
                {BUSINESS_INFO.email}
              </a>
              <p className="text-[#8b93a9] text-[11px]">For corporate bids & vendor inquiries</p>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form (5 cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-[#101524] border border-[#1a2238] p-5 sm:p-6 space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6d5ce8]"></span>
                <h3 className="font-heading font-bold text-lg text-[#eef1f8]">
                  Quick WhatsApp Inquiry Form
                </h3>
              </div>
              <p className="text-xs text-[#8b93a9]">
                Fill details below. Submitting immediately prepares a pre-filled WhatsApp message directly to our Abbottabad store staff.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-5 rounded-xl bg-[#080b13] border border-[#25d366]/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#25d366]/20 flex items-center justify-center mx-auto text-[#25d366]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-base text-[#eef1f8]">
                  WhatsApp Opened!
                </h4>
                <p className="text-xs text-[#8b93a9]">
                  Your inquiry has been formatted and transferred to WhatsApp. If the chat window didn't open automatically, click below:
                </p>
                <button
                  onClick={() => sendContactInquiryWhatsApp(formData)}
                  className="px-4 py-2 rounded-xl bg-[#25d366] hover:bg-[#20b859] text-black font-bold text-xs shadow-lg"
                >
                  Re-open WhatsApp Chat
                </button>
                <div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        serviceType: 'Repair Service (TV, Microwave, Inverter)',
                        deviceModel: '',
                        message: ''
                      });
                    }}
                    className="text-xs text-[#7c9cff] hover:underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {errorMessage && (
                  <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="text-xs text-[#8b93a9] block mb-1 font-medium">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Asad Ullah Khan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#080b13] border border-[#1a2238] text-xs text-[#eef1f8] placeholder-[#8b93a9] focus:border-[#3b82f6] outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs text-[#8b93a9] block mb-1 font-medium">
                    Contact Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 0321-1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#080b13] border border-[#1a2238] text-xs text-[#eef1f8] placeholder-[#8b93a9] focus:border-[#3b82f6] outline-none"
                  />
                </div>

                {/* Help Category Dropdown */}
                <div>
                  <label className="text-xs text-[#8b93a9] block mb-1 font-medium">
                    What do you need help with? <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#080b13] border border-[#1a2238] text-xs text-[#eef1f8] focus:border-[#3b82f6] outline-none"
                  >
                    {serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Model or Equipment Details */}
                <div>
                  <label className="text-xs text-[#8b93a9] block mb-1 font-medium">
                    Brand / Model / Screen Size (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Samsung 55 UHD, Hikvision 4CH, Rinnai 110V..."
                    value={formData.deviceModel}
                    onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#080b13] border border-[#1a2238] text-xs text-[#eef1f8] placeholder-[#8b93a9] focus:border-[#3b82f6] outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs text-[#8b93a9] block mb-1 font-medium">
                    Message / Fault Details <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Please explain what is happening with your unit or what you would like to purchase/install..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#080b13] border border-[#1a2238] text-xs text-[#eef1f8] placeholder-[#8b93a9] focus:border-[#3b82f6] outline-none resize-none"
                  />
                </div>

                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#25d366] hover:bg-[#20b859] text-black font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            )}

            {/* Service Coverage List */}
            <div className="pt-3 border-t border-[#1a2238] space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-[#7c9cff] tracking-wider block">
                Doorstep Coverage & Delivery Towns:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {BUSINESS_INFO.serviceCoverage.map((area, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-[#080b13] text-[#8b93a9] border border-[#162038]">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
