# 3M Fumigaciones S.A.S. — Sitio Web Corporativo

Sitio web corporativo moderno, responsive y orientado a conversión para **3M Fumigaciones S.A.S.** (Bogotá, Colombia).

## Identidad Visual y Recursos Originales
- **Logotipo original intacto**: Ubicado en `public/images/logo-3m.png` (con variante optimizada WebP), conservando símbolo superior, tipografía y proporciones exactas con fondo transparente.
- **Fotografías reales del brochure**: 14 fotografías reales extraídas del brochure corporativo, mejoradas en iluminación/nitidez y servidas en formatos **AVIF, WebP y PNG** dentro de `public/images/`.
- **Paleta Corporativa**:
  - Azul oscuro: `#063B5B`
  - Azul corporativo: `#087EBA`
  - Azul cian: `#00B5E5`
  - Blanco: `#FFFFFF`
  - Gris claro: `#F4F7FA`
  - Texto oscuro: `#102D43`
  - Verde exclusivo para botones y elementos de WhatsApp: `#25D366`

## Stack Tecnológico
- **React 18** + **TypeScript**
- **Vite 5**
- **Tailwind CSS 3**
- **Lucide React** (Iconografía)
- **Framer Motion** (Animaciones sutiles)
- **React Router v6** (Rutas amigables y páginas individuales por servicio)

## Estructura de Páginas y Rutas
- `/` — Inicio (Hero corporativo, Beneficios, Servicios, Nosotros, Proceso en 4 etapas, Galería destacada, CTA y Contacto)
- `/nosotros` — Presentación corporativa, enfoque en Manejo Integrado de Plagas (MIP) e higiene
- `/servicios` — Portafolio general y desglose detallado de cada servicio
- `/servicios/control-integrado-de-plagas` — Servicio 1: Control Integrado de Plagas (MIP)
- `/servicios/limpieza-y-desinfeccion` — Servicio 2: Limpieza y Desinfección
- `/servicios/limpieza-de-tanques-de-agua-potable` — Servicio 3: Limpieza y Desinfección de Tanques de Agua Potable (3 etapas visuales)
- `/servicios/venta-y-recarga-de-extintores` — Servicio 4: Venta y Recarga de Extintores
- `/galeria` — Galería filtrable por categorías con Lightbox nativo (`<dialog>`)
- `/contacto` — Canales oficiales, mapa de ubicación en Bogotá y formulario validado con envío directo a WhatsApp (`573123705050`) y correo electrónico

## Datos Oficiales de Contacto
- **Empresa**: 3M Fumigaciones S.A.S.
- **Dirección**: Calle 57B # 62-17, Bogotá, Colombia
- **Celular / WhatsApp**: 312 370 5050 (`https://wa.me/573123705050`)
- **Teléfono fijo**: (601) 724 2465
- **Correo electrónico**: info@3mfumigaciones.com
- **Dominio**: www.3mfumigaciones.com

## Comandos de Desarrollo y Producción

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción (ejecuta verificación TypeScript + Vite build)
npm run build

# Previsualizar build de producción
npm run preview
```

## Despliegue en Vercel
El proyecto incluye `vercel.json` preconfigurado con soporte para SPA (`rewrites` hacia `/index.html`) y cabeceras de caché para `public/images/`.
