import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/siteData';
import { ResponsiveImage } from './ResponsiveImage';
import { TrustBenefits } from './TrustBenefits';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {/* Corporate decorative curves & diagonal geometry inspired by original brochure */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] rounded-full bg-brand-cyan/20 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 rounded-bl-full bg-gradient-to-bl from-brand-cyan/30 via-brand-primary/20 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#04283F] to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: High-conversion Corporate Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-brand-cyan/40 text-brand-cyan text-xs sm:text-sm font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{COMPANY_INFO.name} · {COMPANY_INFO.city}</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-extrabold leading-[1.12] tracking-tight text-white">
              Protegemos tus espacios,{' '}
              <span className="text-brand-cyan">cuidamos tu tranquilidad</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl">
              Soluciones profesionales en control de plagas, limpieza y desinfección, y venta y
              recarga de extintores para hogares, empresas e instituciones.
            </p>

            {/* Primary & Secondary Conversion Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-bold text-base shadow-lg shadow-brand-whatsapp/25 hover:shadow-xl transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Solicitar cotización</span>
              </a>

              <Link
                to="/servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-brand-cyan hover:bg-brand-primary text-brand-dark hover:text-white font-bold text-base shadow-md transition-all duration-200"
              >
                <span>Conocer nuestros servicios</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Link>
            </div>

            {/* Brochure Sub-strip */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300 border-t border-white/10">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                Control de plagas (MIP)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                Limpieza y desinfección
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                Seguridad contra incendios
              </span>
            </div>
          </motion.div>

          {/* Right Column: Real Photograph of 3M Technician & Corporate Vehicle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-6 relative"
          >
            {/* Cyan diagonal/curved frame accent */}
            <div
              className="absolute -inset-2 sm:-inset-3 bg-gradient-to-tr from-brand-cyan via-brand-primary to-brand-cyan/40 rounded-3xl transform rotate-1 opacity-80"
              aria-hidden="true"
            />

            <div className="relative rounded-2xl overflow-hidden bg-brand-dark shadow-2xl border-2 border-white/15">
              <ResponsiveImage
                basePath="/images/hero-tecnico-camioneta"
                alt="Técnico de 3M Fumigaciones S.A.S. con equipo de fumigación frente a camioneta corporativa en Bogotá"
                width={1078}
                height={700}
                priority="high"
                className="w-full h-[300px] sm:h-[400px] lg:h-[440px] object-cover object-center"
              />

              {/* Bottom caption card matching brochure page 1 style */}
              <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 border-t-4 border-brand-cyan">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-brand-primary">
                      Soluciones Profesionales en:
                    </p>
                    <p className="text-sm sm:text-base font-bold text-brand-dark mt-0.5">
                      Control de plagas · Limpieza y desinfección · Extintores
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-text bg-brand-light px-3 py-1.5 rounded-lg shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Bogotá, Colombia</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Key Benefits directly below hero */}
        <div className="mt-12 lg:mt-16">
          <TrustBenefits />
        </div>
      </div>

      {/* Diagonal / Curved Cyan Divider at Bottom */}
      <div className="relative h-3 bg-gradient-to-r from-brand-cyan via-brand-primary to-brand-cyan" />
    </section>
  );
};
