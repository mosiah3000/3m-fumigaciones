import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/siteData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white text-xs sm:text-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <span className="inline-flex items-center gap-1.5 text-white/90">
            <MapPin className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
            <span>{COMPANY_INFO.address}</span>
          </span>
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="hidden md:inline-flex items-center gap-1.5 text-white/90 hover:text-brand-cyan transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
            <span>{COMPANY_INFO.email}</span>
          </a>
        </div>

        <div className="flex items-center gap-x-4 sm:gap-x-6 ml-auto sm:ml-0">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-1.5 text-white/90 hover:text-brand-cyan transition-colors font-medium whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white hover:text-brand-whatsapp transition-colors font-semibold whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 text-brand-whatsapp shrink-0" />
            <span>WhatsApp: {COMPANY_INFO.mobile}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
