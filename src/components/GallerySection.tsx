import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ZoomIn, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/siteData';
import { ResponsiveImage } from './ResponsiveImage';

const CATEGORIES = [
  'Todas',
  'Control de plagas',
  'Fumigación',
  'Desinfección',
  'Limpieza de tanques',
  'Equipos',
  'Extintores',
] as const;

interface GallerySectionProps {
  limit?: number;
  showViewAllButton?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  limit,
  showViewAllButton = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const filteredItems =
    selectedCategory === 'Todas'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const openLightbox = (item: GalleryItem) => {
    setActiveItem(item);
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  };

  const closeLightbox = () => {
    const dialog = dialogRef.current;
    if (dialog && dialog.open) {
      dialog.close();
    }
    setActiveItem(null);
  };

  // Fallback for browsers without native closedby="any" support on <dialog>
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      setActiveItem(null);
    };

    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isDialogContent =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isDialogContent) {
        dialog.close();
      }
    };

    dialog.addEventListener('close', handleClose);
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener('click', handleBackdropClick);
    }

    return () => {
      dialog.removeEventListener('close', handleClose);
      dialog.removeEventListener('click', handleBackdropClick);
    };
  }, []);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!activeItem) return;
    const currentIndex = displayedItems.findIndex((i) => i.id === activeItem.id);
    if (currentIndex === -1) return;
    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % displayedItems.length
        : (currentIndex - 1 + displayedItems.length) % displayedItems.length;
    setActiveItem(displayedItems[nextIndex]);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs sm:text-sm font-bold uppercase tracking-wider">
            Evidencia Operativa Real
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Galería de Operaciones y Equipos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Fotografías reales de nuestro personal técnico, unidades móviles, procesos de
            desinfección, lavado de tanques y equipos de extinción.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filtrar galería por categoría"
        >
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isSelected
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'bg-brand-light text-brand-text hover:bg-brand-cyan/20 hover:text-brand-dark'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(item);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Ampliar imagen: ${item.title}`}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-brand-light border border-slate-200/80 shadow-corporate hover:shadow-corporate-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-brand-dark">
                <ResponsiveImage
                  basePath={item.image}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-brand-cyan text-brand-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-200 shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </span>
                </div>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-dark/85 backdrop-blur-sm text-brand-cyan text-xs font-bold">
                  {item.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showViewAllButton && (
          <div className="mt-12 text-center">
            <Link
              to="/galeria"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-brand-dark hover:bg-brand-primary text-white font-bold text-sm sm:text-base shadow-md transition-colors"
            >
              <span>Ver galería completa de operaciones</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>

      {/* Native HTML5 Lightbox Dialog with closedby="any" and JS light-dismiss fallback */}
      <dialog
        ref={dialogRef}
        {...({ closedby: 'any' } as React.DialogHTMLAttributes<HTMLDialogElement>)}
        aria-labelledby="lightbox-title"
        className="backdrop:bg-brand-dark/85 backdrop:backdrop-blur-sm bg-transparent p-0 m-auto max-w-4xl w-[92vw] rounded-2xl overflow-hidden shadow-2xl open:flex flex-col"
      >
        {activeItem && (
          <div className="bg-brand-dark text-white rounded-2xl overflow-hidden border border-white/15">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                  {activeItem.category}
                </span>
                <h3 id="lightbox-title" className="font-heading text-base sm:text-lg font-bold text-white">
                  {activeItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Cerrar vista ampliada"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-black/50 flex items-center justify-center min-h-[280px] sm:min-h-[420px] max-h-[70vh] p-4">
              <ResponsiveImage
                basePath={activeItem.image}
                alt={activeItem.title}
                width={activeItem.width}
                height={activeItem.height}
                priority="low"
                className="max-h-[64vh] w-auto object-contain rounded-lg mx-auto"
              />

              <button
                type="button"
                onClick={() => navigateLightbox('prev')}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-brand-dark/80 hover:bg-brand-primary text-white border border-white/20 transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => navigateLightbox('next')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-brand-dark/80 hover:bg-brand-primary text-white border border-white/20 transition-colors"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="px-5 py-4 bg-brand-dark border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-slate-200">{activeItem.description}</p>
              <span className="text-xs text-slate-400 shrink-0">3M Fumigaciones S.A.S.</span>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
};
