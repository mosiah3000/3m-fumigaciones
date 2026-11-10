import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, ChevronRight } from 'lucide-react';
import {
  COMPANY_INFO,
  NAVIGATION_LINKS,
  SERVICES_DATA,
  getWhatsAppUrl,
} from '../data/siteData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white border-t-4 border-brand-cyan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Original Logo on White Card (matching brochure page 1 & 5) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block bg-white rounded-2xl p-4 shadow-md">
              <picture>
                <source srcSet="/images/logo-3m.webp" type="image/webp" />
                <img
                  src="/images/logo-3m.png"
                  alt="Logotipo 3M Fumigaciones S.A.S."
                  width={220}
                  height={109}
                  loading="lazy"
                  className="h-16 w-auto object-contain"
                />
              </picture>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">{COMPANY_INFO.name}</strong> · Soluciones
              profesionales en control integrado de plagas, limpieza y desinfección de
              instalaciones y tanques de agua potable, y venta y recarga de extintores para
              hogares, empresas e instituciones.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-brand-cyan">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-1.5 text-slate-300 hover:text-brand-cyan transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-brand-cyan">
              Nuestros Servicios
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/servicios/${service.slug}`}
                    className="inline-flex items-start gap-1.5 text-slate-300 hover:text-brand-cyan transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-1" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official Contact Data */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-brand-cyan">
              Contacto Oficial
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-1" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-brand-whatsapp shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors font-semibold text-white"
                >
                  Celular / WhatsApp: {COMPANY_INFO.mobile}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="hover:text-brand-cyan transition-colors"
                >
                  Teléfono: {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-brand-cyan transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Contact Strip matching brochure footer */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pb-12 sm:pb-0">
          <p>
            © {currentYear} {COMPANY_INFO.name}. Todos los derechos reservados. Bogotá, Colombia.
          </p>
          <p className="text-slate-300 font-medium">
            {COMPANY_INFO.mobile} | {COMPANY_INFO.phone} | {COMPANY_INFO.email}
          </p>
        </div>
      </div>
    </footer>
  );
};
