import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { ServiceItem, getWhatsAppUrl } from '../data/siteData';
import { ResponsiveImage } from './ResponsiveImage';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const isTankService = service.id === 'limpieza-tanques-agua';

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-corporate hover:shadow-corporate-lg border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
      <div>
        {/* Top Real Photograph with corporate diagonal/cyan badge */}
        <div className="relative h-60 sm:h-64 overflow-hidden bg-brand-dark">
          <ResponsiveImage
            basePath={service.image}
            alt={`${service.title} - 3M Fumigaciones S.A.S.`}
            width={500}
            height={410}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-cyan to-brand-primary" />

          <span className="absolute bottom-3 left-4 inline-block px-3 py-1 rounded-full bg-brand-dark/90 backdrop-blur-sm border border-brand-cyan/50 text-brand-cyan text-xs font-bold tracking-wider uppercase">
            {service.badge}
          </span>
        </div>

        {/* Card Content */}
        <div className="p-6 sm:p-7">
          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-brand-dark group-hover:text-brand-primary transition-colors">
            {service.title}
          </h3>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Visual 3 stages specifically required for Service 3 (Tanques de Agua Potable) */}
          {isTankService && service.stages && (
            <div className="mt-5 pt-4 border-t border-slate-100">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-3">
                Etapas del Proceso Técnico:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {service.stages.map((stage) => (
                  <div
                    key={stage.number}
                    className="bg-brand-light rounded-xl p-3 border-t-2 border-brand-cyan"
                  >
                    <span className="text-xs font-extrabold text-brand-primary block">
                      {stage.number} · {stage.title}
                    </span>
                    <p className="text-xs text-slate-600 mt-1 leading-snug">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key highlights for the other services */}
          {!isTankService && (
            <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
              {service.highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <Link
          to={`/servicios/${service.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-dark hover:bg-brand-primary text-white font-bold text-sm transition-colors"
        >
          <span>Ver más</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href={getWhatsAppUrl(service.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-bold text-sm transition-colors"
          aria-label={`Cotizar ${service.shortTitle} por WhatsApp`}
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>Cotizar</span>
        </a>
      </div>
    </article>
  );
};
