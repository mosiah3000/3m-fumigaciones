import React from 'react';
import { Camera } from 'lucide-react';
import { GallerySection } from '../components/GallerySection';
import { CTASection } from '../components/CTASection';
import { useSEO } from '../utils/seo';

export const GalleryPage: React.FC = () => {
  useSEO({
    title: 'Galería de Operaciones | 3M Fumigaciones S.A.S. en Bogotá',
    description:
      'Fotografías reales de 3M Fumigaciones S.A.S.: técnicos realizando fumigación, control integrado de plagas, desinfección, limpieza de tanques de agua potable y venta y recarga de extintores.',
    canonicalPath: '/galeria',
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
            <Camera className="w-4 h-4" />
            <span>Registro Fotográfico Real</span>
          </span>
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Galería Corporativa de Operaciones
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Conoce nuestro trabajo en terreno, vehículos corporativos, equipos de aplicación
            motorizados, procesos de lavado de tanques y equipos contra incendios.
          </p>
        </div>
      </section>

      <GallerySection />
      <CTASection />
    </>
  );
};
