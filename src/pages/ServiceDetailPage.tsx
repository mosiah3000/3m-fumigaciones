import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CheckCircle2,
  MessageCircle,
  ArrowLeft,
  Phone,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO, getWhatsAppUrl } from '../data/siteData';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { ContactSection } from '../components/ContactSection';
import { useSEO } from '../utils/seo';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  useSEO({
    title: service ? service.seoTitle : 'Servicios | 3M Fumigaciones S.A.S.',
    description: service
      ? service.seoDescription
      : 'Soluciones profesionales en control de plagas, desinfección y extintores en Bogotá.',
    canonicalPath: service ? `/servicios/${service.slug}` : '/servicios',
  });

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  const otherServices = SERVICES_DATA.filter((s) => s.id !== service.id);

  return (
    <>
      {/* Service Hero */}
      <section className="bg-brand-dark text-white py-12 sm:py-18 relative overflow-hidden border-b-4 border-brand-cyan">
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-cyan/20 blur-2xl"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-cyan hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al portafolio de servicios</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3.5 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs font-extrabold uppercase tracking-wider">
                {service.badge}
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                {service.brochureSummary}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={getWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-bold text-base shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Solicitar cotización por WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-cyan" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-cyan/50 bg-brand-dark">
                <ResponsiveImage
                  basePath={service.image}
                  alt={service.title}
                  width={500}
                  height={410}
                  priority="high"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-dark">
                  Descripción del Servicio
                </h2>
                <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Stages (MIP, Limpieza, or 3-stage Water Tank Cleaning) */}
              {service.stages && (
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-brand-dark mb-5">
                    Protocolo y Etapas del Servicio
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {service.stages.map((stage) => (
                      <div
                        key={stage.number}
                        className="bg-brand-light rounded-2xl p-5 border-t-4 border-brand-cyan shadow-sm"
                      >
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-brand-primary text-white font-heading font-extrabold text-xs">
                          Etapa {stage.number}
                        </span>
                        <h4 className="font-heading text-lg font-bold text-brand-dark mt-3">
                          {stage.title}
                        </h4>
                        <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Fire Extinguishers Catalog Items */}
              {service.catalogItems && (
                <div className="bg-brand-light rounded-2xl p-6 sm:p-8 border border-slate-200">
                  <h3 className="font-heading text-xl font-extrabold text-brand-dark mb-4">
                    Información contemplada en el catálogo
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {service.catalogItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-4 border border-slate-200/80 flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                        <span className="text-sm font-semibold text-brand-text">{item}</span>
                      </div>
                    ))}
                  </div>
                  {service.importantNote && (
                    <p className="mt-5 text-sm text-slate-700 bg-white p-4 rounded-xl border-l-4 border-brand-cyan">
                      {service.importantNote}
                    </p>
                  )}
                </div>
              )}

              {/* Highlights */}
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-brand-dark mb-4">
                  Alcance y Beneficios Operativos
                </h3>
                <ul className="space-y-3">
                  {service.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 bg-brand-light/70 p-4 rounded-xl border border-slate-200/60"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-brand-text font-medium">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Real Photos of this service */}
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-brand-dark mb-4">
                  Registro Fotográfico del Servicio
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[service.image, ...service.secondaryImages].map((imgPath, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl overflow-hidden shadow-corporate border border-slate-200 bg-brand-dark"
                    >
                      <ResponsiveImage
                        basePath={imgPath}
                        alt={`${service.title} - Fotografía real ${idx + 1}`}
                        width={500}
                        height={380}
                        className="w-full h-56 sm:h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-brand-dark text-white rounded-2xl p-6 sm:p-7 shadow-corporate-lg border-t-4 border-brand-cyan">
                <div className="flex items-center gap-2 text-brand-cyan text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Cotización Inmediata</span>
                </div>
                <h3 className="font-heading text-xl font-extrabold mt-2">
                  ¿Requieres {service.shortTitle}?
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Escríbenos por WhatsApp para brindarte atención personalizada en Bogotá para tu
                  hogar, comercio, bodega o institución.
                </p>

                <a
                  href={getWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-bold text-sm shadow-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Cotizar por WhatsApp</span>
                </a>

                <div className="mt-5 pt-5 border-t border-white/15 space-y-2 text-xs text-slate-300">
                  <p>
                    <strong className="text-white">WhatsApp:</strong> +57 {COMPANY_INFO.mobile}
                  </p>
                  <p>
                    <strong className="text-white">Teléfono:</strong> {COMPANY_INFO.phone}
                  </p>
                  <p>
                    <strong className="text-white">Dirección:</strong> {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="bg-brand-light rounded-2xl p-6 border border-slate-200/80">
                <h3 className="font-heading text-base font-extrabold text-brand-dark uppercase tracking-wider mb-4">
                  Otros Servicios de 3M Fumigaciones
                </h3>
                <div className="space-y-3">
                  {otherServices.map((other) => (
                    <Link
                      key={other.id}
                      to={`/servicios/${other.slug}`}
                      className="block bg-white p-4 rounded-xl border border-slate-200/80 hover:border-brand-primary shadow-sm transition-all group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-heading font-bold text-sm text-brand-dark group-hover:text-brand-primary">
                          {other.title}
                        </p>
                        <ArrowRight className="w-4 h-4 text-brand-cyan shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
};
