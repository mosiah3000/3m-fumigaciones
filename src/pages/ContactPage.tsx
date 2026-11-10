import React from 'react';
import { PhoneCall } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { COMPANY_INFO } from '../data/siteData';
import { useSEO } from '../utils/seo';

export const ContactPage: React.FC = () => {
  useSEO({
    title: 'Contacto y Cotizaciones | 3M Fumigaciones S.A.S. · Bogotá',
    description: `Contáctanos en ${COMPANY_INFO.address}. WhatsApp +57 ${COMPANY_INFO.mobile}, Teléfono ${COMPANY_INFO.phone}, Correo ${COMPANY_INFO.email}. Solicita tu cotización en Bogotá.`,
    canonicalPath: '/contacto',
  });

  return (
    <>
      <section className="bg-brand-dark text-white py-14 sm:py-20 relative overflow-hidden border-b-4 border-brand-cyan">
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-cyan/20 blur-2xl"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs sm:text-sm font-bold uppercase tracking-wider">
            <PhoneCall className="w-4 h-4" />
            <span>Atención Comercial en Bogotá</span>
          </span>
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contacto y Solicitud de Cotización
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Estamos listos para atender tus necesidades de control de plagas, limpieza y
            desinfección de instalaciones y tanques de agua potable, y venta y recarga de
            extintores.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
};
