import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MessageCircle } from 'lucide-react';
import { TopBar } from './TopBar';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { getWhatsAppUrl } from '../data/siteData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <TopBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 gap-4">
          {/* Original Logo without modification */}
          <Link
            to="/"
            className="inline-flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg py-1"
            aria-label="3M Fumigaciones S.A.S. - Ir al inicio"
          >
            <picture>
              <source srcSet="/images/logo-3m.webp" type="image/webp" />
              <img
                src="/images/logo-3m.png"
                alt="3M Fumigaciones S.A.S."
                width={220}
                height={109}
                className="h-14 sm:h-16 md:h-[72px] w-auto object-contain"
              />
            </picture>
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Highlighted CTA Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicita tu cotización</span>
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-bold text-xs shadow-sm transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Cotizar</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl text-brand-dark hover:bg-brand-light border border-slate-200 transition-colors"
              aria-label="Abrir menú de navegación"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};
