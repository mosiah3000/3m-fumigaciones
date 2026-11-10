import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, Phone, Mail, MapPin, MessageCircle, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION_LINKS, SERVICES_DATA, getWhatsAppUrl } from '../data/siteData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-dark/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div className="p-5">
          {/* Header with original logo and close button */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <Link to="/" onClick={onClose} className="inline-flex items-center">
              <img
                src="/images/logo-3m.png"
                alt="Logotipo 3M Fumigaciones S.A.S."
                width={179}
                height={89}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-brand-text hover:bg-brand-light transition-colors"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Primary Navigation */}
          <nav className="mt-5 space-y-1" aria-label="Menú móvil">
            {NAVIGATION_LINKS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-primary text-white'
                      : 'text-brand-text hover:bg-brand-light'
                  }`
                }
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </NavLink>
            ))}
          </nav>

          {/* Direct Services Sublinks */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <p className="px-4 text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">
              Nuestros Servicios Principales
            </p>
            <div className="space-y-1">
              {SERVICES_DATA.map((service) => (
                <Link
                  key={service.id}
                  to={`/servicios/${service.slug}`}
                  onClick={onClose}
                  className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-brand-primary hover:bg-brand-light rounded-lg transition-colors"
                >
                  • {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA & Contact info */}
        <div className="p-5 bg-brand-light border-t border-slate-200/80 space-y-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-bold text-sm shadow-md transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Solicita tu cotización por WhatsApp</span>
          </a>

          <div className="space-y-2 text-xs text-slate-700">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
              <span>{COMPANY_INFO.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-primary shrink-0" />
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:underline">
                {COMPANY_INFO.phone} / {COMPANY_INFO.mobile}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-primary shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                {COMPANY_INFO.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
