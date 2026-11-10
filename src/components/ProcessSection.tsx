import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bug, ClipboardList, Activity } from 'lucide-react';
import { WORK_PROCESS_STEPS } from '../data/siteData';
import { ResponsiveImage } from './ResponsiveImage';

const STEP_ICONS = [Search, Bug, ClipboardList, Activity];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative diagonal/curved shapes */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-bl-full bg-brand-cyan/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-tr-full bg-brand-primary/15"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs sm:text-sm font-bold uppercase tracking-wider">
            Metodología Técnica
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Ejecutamos cada servicio siguiendo cuatro etapas estructuradas para garantizar un
            diagnóstico claro, un tratamiento oportuno y un control sostenible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WORK_PROCESS_STEPS.map((item, idx) => {
            const Icon = STEP_ICONS[idx] || Search;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-brand-cyan/60 transition-all duration-300"
              >
                <div>
                  <div className="relative h-40 overflow-hidden bg-brand-dark">
                    <ResponsiveImage
                      basePath={item.image}
                      alt={`${item.step} - ${item.title}`}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-brand-cyan text-brand-dark font-heading font-extrabold text-base flex items-center justify-center shadow-md">
                      {item.step}
                    </div>
                    <div className="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-brand-dark/80 border border-white/20 flex items-center justify-center text-brand-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-5">
                  <div className="h-1 w-12 rounded-full bg-brand-cyan" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
