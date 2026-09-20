import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { inquireServiceWhatsApp, openWhatsAppChat, BUSINESS_INFO } from '../utils/whatsapp';
import { 
  Wrench, 
  Video, 
  Radio, 
  Wifi, 
  Tv, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Phone, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Send,
  Sparkles,
  Layers
} from 'lucide-react';

interface ServicesScreenProps {
  services: ServiceItem[];
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({ services }) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(services[1]?.id || null);
  const [quickServiceIssue, setQuickServiceIssue] = useState<{ [key: string]: string }>({});

  const toggleExpand = (id: string) => {
    setExpandedServiceId(prev => (prev === id ? null : id));
  };

  const handleIssueChange = (serviceId: string, text: string) => {
    setQuickServiceIssue(prev => ({ ...prev, [serviceId]: text }));
  };

  const handleBookService = (service: ServiceItem) => {
    const issue = quickServiceIssue[service.id];
    inquireServiceWhatsApp(service, issue);
  };

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'repair': return Wrench;
      case 'cctv': return Video;
      case 'dish': return Radio;
      case 'networking': return Wifi;
      default: return Tv;
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#6d5ce8]"></span>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#eef1f8]">
            Expert Services & Workshop
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#8b93a9] max-w-2xl">
          Complete sales, chip-level component repair, CCTV security setup, satellite dish alignment, and whole-building WiFi networking in Abbottabad.
        </p>
      </div>

      {/* Services List with Expandable Cards */}
      <div className="space-y-4">
        {services.map((service) => {
          const Icon = getServiceIcon(service.category);
          const isExpanded = expandedServiceId === service.id;

          return (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`rounded-2xl bg-[#101524] border transition-all overflow-hidden ${
                isExpanded ? 'border-[#6d5ce8] shadow-xl shadow-purple-500/5' : 'border-[#1a2238] hover:border-[#1a2238]/80'
              }`}
            >
              {/* Card Summary Header */}
              <div 
                onClick={() => toggleExpand(service.id)}
                className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer select-none bg-gradient-to-r from-[#101524] to-[#121829]"
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#162038] border border-[#1a2238] flex items-center justify-center text-[#7c9cff] shrink-0">
                    <Icon className="w-6 h-6 text-[#7c9cff]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-bold text-base sm:text-lg text-[#eef1f8]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#8b93a9] mt-0.5 line-clamp-1 sm:line-clamp-none">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-[#1a2238]">
                  <div className="text-left sm:text-right">
                    <span className="text-[10px] text-[#8b93a9] block">Estimated Cost</span>
                    <span className="text-xs font-bold text-[#7c9cff]">{service.priceRange}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#8b93a9] hidden sm:inline">
                      {isExpanded ? 'Less' : 'Details'}
                    </span>
                    <div className="p-2 rounded-lg bg-[#162038] text-[#8b93a9]">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Expandable Body */}
              {isExpanded && (
                <div className="p-4 sm:p-6 border-t border-[#1a2238] bg-[#0c101c] space-y-5 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Left: Description & Highlights */}
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7c9cff] mb-1">
                          Service Scope & Process
                        </h4>
                        <p className="text-xs sm:text-sm text-[#8b93a9] leading-relaxed">
                          {service.fullDesc}
                        </p>
                      </div>

                      {/* Supported Items */}
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#eef1f8] mb-2 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-[#3b82f6]" />
                          <span>Devices & Equipment Covered:</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.supportedItems.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-[#eef1f8] bg-[#101524] p-2.5 rounded-xl border border-[#1a2238]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#25d366] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical Highlights */}
                      <div className="space-y-1.5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#eef1f8] mb-1">
                          Service Guarantees:
                        </h4>
                        {service.highlights.map((hl, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-[#8b93a9]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6d5ce8]"></span>
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Timing, Warranty & Quick Booking Card */}
                    <div className="space-y-4 bg-[#101524] p-4 rounded-xl border border-[#1a2238] flex flex-col justify-between">
                      <div className="space-y-3 text-xs">
                        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#080b13] border border-[#1a2238]">
                          <Clock className="w-4 h-4 text-[#7c9cff] shrink-0" />
                          <div>
                            <span className="text-[10px] text-[#8b93a9] block">Turnaround Time</span>
                            <span className="font-semibold text-[#eef1f8]">{service.turnaroundTime}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#080b13] border border-[#1a2238]">
                          <ShieldCheck className="w-4 h-4 text-[#25d366] shrink-0" />
                          <div>
                            <span className="text-[10px] text-[#8b93a9] block">Service Warranty</span>
                            <span className="font-semibold text-[#eef1f8]">{service.warranty}</span>
                          </div>
                        </div>

                        {/* Quick issue description box */}
                        <div>
                          <label className="text-[10px] text-[#8b93a9] block mb-1 font-medium">
                            Describe your issue or model (optional):
                          </label>
                          <textarea
                            rows={2}
                            placeholder="e.g. Samsung 43 TV sound coming but no screen, or need 8 cameras installed..."
                            value={quickServiceIssue[service.id] || ''}
                            onChange={(e) => handleIssueChange(service.id, e.target.value)}
                            className="w-full p-2 rounded-lg bg-[#080b13] border border-[#1a2238] text-xs text-[#eef1f8] placeholder-[#8b93a9] focus:border-[#6d5ce8] outline-none resize-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <button
                          id={`book-service-${service.id}-btn`}
                          onClick={() => handleBookService(service)}
                          className="w-full py-2.5 px-3 rounded-xl bg-[#25d366] hover:bg-[#20b859] text-black font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-green-500/10"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Book / Inquire on WhatsApp</span>
                        </button>

                        <a
                          href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`}
                          className="w-full py-2 px-3 rounded-xl bg-[#162038] hover:bg-[#1e2a4a] text-[#7c9cff] font-semibold text-xs transition-colors flex items-center justify-center gap-2 border border-[#1a2238]"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call Technician ({BUSINESS_INFO.primaryPhoneFormatted})</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Workshop Address & Emergency Repair Note */}
      <div className="rounded-2xl bg-gradient-to-r from-[#101524] to-[#141d33] border border-[#1a2238] p-5 sm:p-6 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#7c9cff] uppercase tracking-wider">
          <Wrench className="w-4 h-4" />
          <span>Abbottabad Workshop Information</span>
        </div>
        <h3 className="font-heading text-lg font-bold text-[#eef1f8]">
          Doorstep Pickup & Emergency Fast-Track Repairs
        </h3>
        <p className="text-xs sm:text-sm text-[#8b93a9] leading-relaxed">
          Can't bring a large 55-65 inch TV or heavy microwave to the shop? Our technician van can pick up and deliver your unit safely across Abbottabad city, Mandian, Supply, and Havelian.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            onClick={() => openWhatsAppChat('Assalam-o-Alaikum! I need a doorstep pickup for my electronics in Abbottabad.')}
            className="px-4 py-2 rounded-xl bg-[#6d5ce8] hover:bg-[#5b49d4] text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Request Doorstep Pickup</span>
          </button>
        </div>
      </div>
    </div>
  );
};
