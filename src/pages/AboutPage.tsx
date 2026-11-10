import React from 'react';
import { ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { AboutSection } from '../components/AboutSection';
import { ProcessSection } from '../components/ProcessSection';
import { CTASection } from '../components/CTASection';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/siteData';
import { useSEO } from '../utils/seo';

export const AboutPage: React.FC = () => {
  useSEO({
    title: 'Nosotros | 3M Fumigaciones S.A.S. · Bogotá, Colombia',
    description:
      'Conoce a 3M Fumigaciones S.A.S., nuestro enfoque en Manejo Integrado de Plagas (MIP), limpieza y desinfección de espacios y tanques de agua potable, y seguridad contra incendios en Bogotá.',
    canonicalPath: '/nosotros',
  });

  return (
    <>
      {/* Corporate Banner */}
      <section className="bg-brand-dark text-white py-14 sm:py-20 relative overflow-hidden border-b-4 border-brand-cyan">
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-cyan/20 blur-2xl"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs sm:text-sm font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Presentación Corporativa</span>
          </span>
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Sobre {COMPANY_INFO.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Cuidamos tus espacios y protegemos tu tranquilidad con servicios técnicos de control
            integrado de plagas, higienización ambiental, lavado de tanques de almacenamiento de
            agua potable y seguridad contra incendios en Bogotá.
          </p>
        </div>
      </section>

      <AboutSection />

      {/* Importance of Integrated Pest Management (MIP) & Hygiene */}
      <section className="py-16 sm:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-primary">
                Enfoque Preventivo y Correctivo
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-dark">
                La importancia del Manejo Integrado de Plagas (MIP) y la Higiene Ambiental
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                El Manejo Integrado de Plagas (MIP) no se limita a la aplicación aislada de
                productos: articula la inspección técnica de las instalaciones, el reconocimiento
                de la plaga y sus evidencias de actividad, la definición de un plan de manejo
                acorde con las necesidades del lugar y la evaluación periódica de resultados.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                De igual manera, la limpieza y desinfección periódica de tanques de almacenamiento
                de agua potable —recomendada como mínimo cada seis meses o tras reparaciones e
                infiltraciones— resulta fundamental para preservar las condiciones del agua en
                edificios, hogares, empresas e instituciones.
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200/80 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-brand-dark text-sm sm:text-base">
                      Atención Personalizada según el Tipo de Espacio
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Adaptamos nuestros equipos de nebulización, aspersión y lavado a las
                      condiciones operativas de residencias, zonas comunes, bodegas, oficinas y
                      parques.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200/80 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-brand-dark text-sm sm:text-base">
                      Compromiso con la Seguridad y Protección Personal
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Nuestros técnicos operan con equipos de protección personal (respiradores,
                      cascos, protección auditiva, guantes y trajes de bioseguridad) en cada
                      servicio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-bold text-sm shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hablar con nuestro equipo en WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-corporate bg-white p-2 border border-slate-200">
                <ResponsiveImage
                  basePath="/images/control-plagas-interior"
                  alt="Técnico de 3M Fumigaciones en áreas interiores"
                  width={490}
                  height={410}
                  className="w-full h-56 object-cover rounded-xl"
                />
                <p className="text-xs font-bold text-brand-dark px-2 py-2.5">
                  Control Integrado en Instalaciones Interiores
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-corporate bg-white p-2 border border-slate-200">
                <ResponsiveImage
                  basePath="/images/desinfeccion-fachada-entrada"
                  alt="Desinfección de entradas y zonas residenciales"
                  width={500}
                  height={410}
                  className="w-full h-56 object-cover rounded-xl"
                />
                <p className="text-xs font-bold text-brand-dark px-2 py-2.5">
                  Higienización de Fachadas y Zonas Comunes
                </p>
              </div>

              <div className="sm:col-span-2 rounded-2xl overflow-hidden shadow-corporate bg-white p-2 border border-slate-200">
                <ResponsiveImage
                  basePath="/images/desinfeccion-parques-recreativos"
                  alt="Fumigación y desinfección de parques y zonas recreativas"
                  width={514}
                  height={196}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <p className="text-xs font-bold text-brand-dark px-2 py-2.5">
                  Intervención en Zonas Verdes, Parques y Espacios Abiertos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />
      <CTASection />
    </>
  );
};
