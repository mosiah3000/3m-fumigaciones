import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, getWhatsAppUrl } from '../data/siteData';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { CTASection } from '../components/CTASection';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { useSEO } from '../utils/seo';

export const ServicesPage: React.FC = () => {
  useSEO({
    title: 'Servicios de Fumigación, Desinfección y Extintores en Bogotá | 3M Fumigaciones',
    description:
      'Portafolio de servicios de 3M Fumigaciones S.A.S. en Bogotá: Control Integrado de Plagas (MIP), Limpieza y Desinfección de instalaciones, Lavado de Tanques de Agua Potable y Venta y Recarga de Extintores.',
    canonicalPath: '/servicios',
  });

  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 relative overflow-hidden border-b-4 border-brand-cyan">
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-cyan/20 blur-2xl"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs sm:text-sm font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Portafolio Oficial de Servicios</span>
          </span>
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Nuestros Servicios Especializados
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Soluciones integrales en control de plagas, limpieza y desinfección de espacios y
            tanques de agua potable, y seguridad contra incendios para hogares, empresas e
            instituciones en Bogotá.
          </p>
        </div>
      </section>

      {/* 4 Main Cards Grid */}
      <ServicesSection showHeader={false} />

      {/* Detailed Breakdown of All 4 Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SERVICES_DATA.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-6 border-t border-slate-100 first:border-t-0 first:pt-0"
              >
                <div className={`lg:col-span-6 space-y-4 ${isEven ? '' : 'lg:order-2'}`}>
                  <div className="rounded-2xl overflow-hidden shadow-corporate-lg border-b-4 border-brand-cyan bg-brand-dark">
                    <ResponsiveImage
                      basePath={service.image}
                      alt={service.title}
                      width={500}
                      height={410}
                      className="w-full h-72 sm:h-80 object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {service.secondaryImages.slice(0, 2).map((img, i) => (
                      <div
                        key={i}
                        className="rounded-xl overflow-hidden shadow-corporate border border-slate-200 bg-brand-dark"
                      >
                        <ResponsiveImage
                          basePath={img}
                          alt={`${service.title} vista ${i + 2}`}
                          width={400}
                          height={240}
                          className="w-full h-36 sm:h-40 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-5 ${isEven ? '' : 'lg:order-1'}`}>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-extrabold uppercase tracking-wider">
                    {service.badge}
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-dark">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {service.stages && (
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-brand-primary">
                        Etapas del Servicio:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.stages.map((st) => (
                          <div
                            key={st.number}
                            className="bg-brand-light rounded-xl p-3.5 border-l-4 border-brand-cyan"
                          >
                            <p className="font-heading font-bold text-brand-dark text-sm">
                              {st.number} · {st.title}
                            </p>
                            <p className="text-xs text-slate-600 mt-1">{st.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.catalogItems && (
                    <div className="bg-brand-light rounded-2xl p-5 border border-slate-200/80">
                      <h3 className="font-heading font-bold text-brand-dark text-sm uppercase tracking-wider mb-3">
                        Información contemplada en el catálogo:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.catalogItems.map((cat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                            <span>{cat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.importantNote && (
                    <p className="text-xs sm:text-sm text-slate-600 bg-amber-50/80 border-l-4 border-brand-primary p-3.5 rounded-r-xl">
                      {service.importantNote}
                    </p>
                  )}

                  <div className="pt-3 flex flex-wrap items-center gap-3.5">
                    <a
                      href={getWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Cotizar {service.shortTitle}</span>
                    </a>

                    <Link
                      to={`/servicios/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-brand-dark hover:bg-brand-primary text-white font-bold text-sm transition-colors"
                    >
                      <span>Ver ficha del servicio</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ProcessSection />
      <CTASection />
    </>
  );
};
