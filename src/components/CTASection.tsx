import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/siteData';
import { ResponsiveImage } from './ResponsiveImage';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = '¿Necesitas un servicio de control de plagas, desinfección o recarga de extintores?',
  subtitle = 'Contáctanos hoy mismo y recibe atención oportuna para tu hogar, empresa, bodega o institución en Bogotá.',
  whatsappMessage,
}) => {
  return (
    <section className="py-14 sm:py-18 bg-brand-dark relative overflow-hidden">
      {/* Curved and diagonal cyan shapes */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-cyan/20 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-tr-full bg-brand-primary/25"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-r from-[#04283F] via-brand-dark to-[#08537C] rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/15 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-white">
              <span className="inline-block px-3.5 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs font-bold uppercase tracking-wider">
                 Estamos para ayudarte · {COMPANY_INFO.name}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                {title}
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                {subtitle}
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={getWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-bold text-sm sm:text-base shadow-lg transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Cotizar por WhatsApp ({COMPANY_INFO.mobile})</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm sm:text-base transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Llamar al {COMPANY_INFO.phone}</span>
                </a>

                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-4 rounded-xl text-brand-cyan hover:text-white font-bold text-sm transition-colors"
                >
                  <span>Formulario</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-brand-cyan/40 shadow-xl bg-brand-dark">
                <ResponsiveImage
                  basePath="/images/fumigacion-bodega-industrial"
                  alt="Operación técnica de fumigación 3M Fumigaciones S.A.S."
                  width={1038}
                  height={230}
                  className="w-full h-48 sm:h-56 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
