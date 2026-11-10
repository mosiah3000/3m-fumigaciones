import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/siteData';

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Contactar a ${COMPANY_INFO.name} por WhatsApp al ${COMPANY_INFO.mobile}`}
        className="group flex items-center gap-2.5 bg-brand-whatsapp hover:bg-brand-whatsappDark text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl border-2 border-white transition-all duration-200 hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 shrink-0 fill-white/15" />
        <span className="text-xs sm:text-sm font-extrabold tracking-wide pr-0.5">
          Cotiza por WhatsApp
        </span>
      </a>
    </div>
  );
};
