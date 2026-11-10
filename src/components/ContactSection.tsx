import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Globe } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/siteData';
import { ContactForm } from './ContactForm';

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs sm:text-sm font-bold uppercase tracking-wider">
            Canales Oficiales de Atención
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Hablemos de tu Próximo Servicio
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Cuéntanos qué necesitas y solicita una cotización para tu hogar, empresa o institución
            en Bogotá.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Verified Company Information & Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            {/* Dark corporate card matching brochure page 5 */}
            <div className="bg-brand-dark text-white rounded-2xl p-6 sm:p-8 shadow-corporate-lg relative overflow-hidden">
              <div
                className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-brand-cyan/20"
                aria-hidden="true"
              />
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-cyan">
                Estamos para ayudarte
              </span>
              <h3 className="font-heading text-2xl font-extrabold text-white mt-1">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                Atención directa por WhatsApp y línea fija en Bogotá, Colombia.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Dirección
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-white mt-0.5">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-whatsapp/20 border border-brand-whatsapp/40 flex items-center justify-center text-brand-whatsapp shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Celular y WhatsApp
                    </p>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-extrabold text-white hover:text-brand-cyan transition-colors block mt-0.5"
                    >
                      +57 {COMPANY_INFO.mobile}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Teléfono Fijo Bogotá
                    </p>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-brand-cyan transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Correo Electrónico
                    </p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-brand-cyan transition-colors break-all block mt-0.5"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Sitio Web Oficial
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-white mt-0.5">
                      {COMPANY_INFO.domain}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 pt-6 border-t border-white/15">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-bold text-sm shadow-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>ESCRÍBENOS POR WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map for Calle 57B # 62-17, Bogotá */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-corporate border border-slate-200/80">
              <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                  Ubicación en Bogotá
                </span>
                <span className="text-xs text-slate-600">{COMPANY_INFO.address}</span>
              </div>
              <div className="h-64 w-full bg-slate-100">
                <iframe
                  title="Mapa de ubicación 3M Fumigaciones S.A.S. - Calle 57B # 62-17, Bogotá"
                  src={COMPANY_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact & Quote Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
