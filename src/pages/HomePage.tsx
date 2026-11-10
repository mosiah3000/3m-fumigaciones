import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { ProcessSection } from '../components/ProcessSection';
import { GallerySection } from '../components/GallerySection';
import { CTASection } from '../components/CTASection';
import { ContactSection } from '../components/ContactSection';
import { useSEO } from '../utils/seo';

export const HomePage: React.FC = () => {
  useSEO({
    title: '3M Fumigaciones S.A.S. | Control de Plagas, Desinfección y Extintores en Bogotá',
    description:
      'Protegemos tus espacios, cuidamos tu tranquilidad. Soluciones profesionales en control integrado de plagas (MIP), limpieza y desinfección de instalaciones y tanques de agua potable, y venta y recarga de extintores en Bogotá.',
    canonicalPath: '/',
  });

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection compact />
      <ProcessSection />
      <GallerySection limit={6} showViewAllButton />
      <CTASection />
      <ContactSection />
    </>
  );
};
