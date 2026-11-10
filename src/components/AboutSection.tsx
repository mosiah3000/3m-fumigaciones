import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, Building, Home, Factory, ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/siteData';
import { ResponsiveImage } from './ResponsiveImage';

interface AboutSectionProps {
  compact?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ compact = false }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Real Photograph Collage of 3M Operations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-corporate-lg border-b-4 border-brand-cyan">
              <ResponsiveImage
                basePath="/images/hero-tecnico-camioneta"
                alt="Vehículo corporativo y técnico de 3M Fumigaciones S.A.S."
                width={1078}
                height={700}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent p-4 sm:p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                  Operación en terreno · Bogotá, Colombia
                </p>
                <p className="text-sm sm:text-base font-semibold mt-0.5">
                  Unidades móviles y equipamiento técnico para atención oportuna
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-corporate border border-slate-200">
                <ResponsiveImage
                  basePath="/images/control-plagas-instalaciones"
                  alt="Técnico de 3M Fumigaciones realizando control en instalaciones"
                  width={514}
                  height={410}
                  className="w-full h-40 sm:h-48 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-corporate border border-slate-200">
                <ResponsiveImage
                  basePath="/images/limpieza-tanques-agua-potable"
                  alt="Lavado y desinfección de tanques de agua potable"
                  width={260}
                  height={210}
                  className="w-full h-40 sm:h-48 object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Corporate Presentation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>Quiénes Somos · {COMPANY_INFO.name}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
              Compromiso con la higiene, el control integrado de plagas y la seguridad de tus espacios
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              En <strong className="text-brand-dark">{COMPANY_INFO.name}</strong> brindamos
              soluciones técnicas en control integrado de plagas, limpieza y desinfección de
              instalaciones y tanques de almacenamiento de agua potable, así como venta y recarga de
              extintores en Bogotá, Colombia.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Nuestro enfoque de trabajo combina medidas preventivas y correctivas orientadas a
              proteger la salud y el bienestar en los espacios donde las personas viven y trabajan.
              Cada intervención parte de una inspección inicial detallada, la identificación precisa
              del requerimiento y un plan de manejo adaptado a las condiciones del lugar.
            </p>

            {/* Target sectors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="bg-brand-light rounded-xl p-4 border border-slate-200/70">
                <Home className="w-6 h-6 text-brand-primary mb-2" />
                <h3 className="font-heading font-bold text-brand-dark text-sm">Hogares y Copropiedades</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Casas, apartamentos, conjuntos residenciales y zonas comunes.
                </p>
              </div>
              <div className="bg-brand-light rounded-xl p-4 border border-slate-200/70">
                <Building className="w-6 h-6 text-brand-primary mb-2" />
                <h3 className="font-heading font-bold text-brand-dark text-sm">Comercios y Empresas</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Oficinas, locales comerciales, bodegas y áreas operativas.
                </p>
              </div>
              <div className="bg-brand-light rounded-xl p-4 border border-slate-200/70">
                <Factory className="w-6 h-6 text-brand-primary mb-2" />
                <h3 className="font-heading font-bold text-brand-dark text-sm">Instituciones</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Entidades educativas, parques, instalaciones administrativas y servicios.
                </p>
              </div>
            </div>

            {/* Key pillars */}
            <ul className="space-y-2.5 pt-2">
              <li className="flex items-start gap-2.5 text-sm sm:text-base text-brand-text font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span>
                  Importancia del Manejo Integrado de Plagas (MIP) para prevenir daños y controlar focos de actividad.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm sm:text-base text-brand-text font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span>
                  Protocolos rigurosos de higienización y uso de elementos de protección personal (EPP).
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm sm:text-base text-brand-text font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span>
                  Asesoría técnica en selección, mantenimiento y recarga de equipos de extinción de incendios.
                </span>
              </li>
            </ul>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-bold text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar asesoría por WhatsApp</span>
              </a>

              {compact && (
                <Link
                  to="/nosotros"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-dark hover:bg-brand-primary text-white font-bold text-sm transition-colors"
                >
                  <span>Conocer más sobre nosotros</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
