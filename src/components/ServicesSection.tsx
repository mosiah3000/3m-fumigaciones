import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../data/siteData';
import { ServiceCard } from './ServiceCard';

interface ServicesSectionProps {
  showHeader?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ showHeader = true }) => {
  return (
    <section id="servicios" className="py-16 sm:py-20 lg:py-24 bg-brand-light relative overflow-hidden">
      {/* Subtle geometric background accent */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-48 bg-gradient-to-r from-brand-primary/5 via-brand-cyan/10 to-brand-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs sm:text-sm font-bold uppercase tracking-wider">
              Portafolio Corporativo
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Soluciones Especializadas en Saneamiento e Higiene
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Atendemos hogares, empresas, bodegas, conjuntos residenciales e instituciones en
              Bogotá con personal técnico equipado y protocolos verificables.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
