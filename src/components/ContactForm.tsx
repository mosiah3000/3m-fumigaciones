import React, { useState } from 'react';
import { MessageCircle, Mail, AlertCircle, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/siteData';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyOrSector: 'Hogar / Residencial',
    phone: '',
    email: '',
    service: SERVICES_DATA[0].title,
    addressOrZone: '',
    message: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string): string => {
    const trimmed = value.trim();
    if (name === 'fullName') {
      if (!trimmed || trimmed.length < 3) {
        return 'Por favor ingresa tu nombre completo (mínimo 3 caracteres).';
      }
    }
    if (name === 'phone') {
      const digits = trimmed.replace(/\D/g, '');
      if (digits.length < 7) {
        return 'Por favor ingresa un número de teléfono o celular válido (mínimo 7 dígitos).';
      }
    }
    if (name === 'email' && trimmed.length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) {
        return 'Ingresa un correo electrónico con formato válido (ej. nombre@empresa.com).';
      }
    }
    if (name === 'message') {
      if (!trimmed || trimmed.length < 10) {
        return 'Cuéntanos brevemente tu requerimiento (mínimo 10 caracteres).';
      }
    }
    return '';
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const validateAll = (): boolean => {
    const fieldsToValidate = ['fullName', 'phone', 'email', 'message'];
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};

    for (const field of fieldsToValidate) {
      newTouched[field] = true;
      const err = validateField(field, formData[field as keyof typeof formData]);
      if (err) {
        newErrors[field] = err;
      }
    }

    setTouched((prev) => ({ ...prev, ...newTouched }));
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildStructuredMessage = (): string => {
    const lines = [
      'Hola, equipo de *3M Fumigaciones S.A.S.*',
      'Deseo solicitar una cotización con los siguientes datos:',
      '',
      `• *Nombre:* ${formData.fullName.trim()}`,
      `• *Tipo de espacio:* ${formData.companyOrSector}`,
      `• *Teléfono / WhatsApp:* ${formData.phone.trim()}`,
      formData.email.trim() ? `• *Correo:* ${formData.email.trim()}` : '',
      `• *Servicio de interés:* ${formData.service}`,
      formData.addressOrZone.trim() ? `• *Ubicación / Barrio:* ${formData.addressOrZone.trim()}` : '',
      `• *Detalle de la solicitud:* ${formData.message.trim()}`,
    ].filter(Boolean);

    return lines.join('\n');
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;

    const text = buildStructuredMessage();
    const whatsappUrl = `${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSubmit = () => {
    if (!validateAll()) return;

    const subject = `Solicitud de Cotización - ${formData.service} (${formData.fullName.trim()})`;
    const body = buildStructuredMessage().replace(/\*/g, '');
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={handleWhatsAppSubmit}
      noValidate
      className="bg-white rounded-2xl shadow-corporate-lg border border-slate-200/80 p-6 sm:p-8 lg:p-10 space-y-5"
    >
      <div className="border-b border-slate-100 pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
          Atención Directa e Inmediata
        </span>
        <h3 className="font-heading text-2xl font-extrabold text-brand-dark mt-1">
          Solicita tu Cotización
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Completa los datos de tu requerimiento y envíalos directamente al WhatsApp oficial de 3M
          Fumigaciones S.A.S.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nombre completo */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-bold text-brand-dark mb-1">
            Nombre completo o Contacto <span className="text-red-600">*</span>
          </label>
          <span id="fullName-hint" className="block text-xs text-slate-500 mb-1.5">
            Ej: Carlos Rodríguez / Administración Conjunto
          </span>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            minLength={3}
            autoComplete="name"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby="fullName-hint"
            aria-invalid={touched.fullName && !!errors.fullName}
            aria-errormessage="fullName-error"
            placeholder="Tu nombre completo"
            className={`form-field-interactive w-full rounded-xl border px-4 py-3 text-sm text-brand-text placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors ${
              touched.fullName && errors.fullName
                ? 'border-red-600 bg-red-50/50'
                : touched.fullName && !errors.fullName
                ? 'border-emerald-600'
                : 'border-slate-300 bg-brand-light/50'
            }`}
          />
          {touched.fullName && errors.fullName && (
            <p id="fullName-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Teléfono / Celular */}
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-brand-dark mb-1">
            Teléfono o Celular <span className="text-red-600">*</span>
          </label>
          <span id="phone-hint" className="block text-xs text-slate-500 mb-1.5">
            Ej: 312 370 5050 o (601) 724 2465
          </span>
          <input
            type="tel"
            id="phone"
            name="phone"
            inputMode="tel"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby="phone-hint"
            aria-invalid={touched.phone && !!errors.phone}
            aria-errormessage="phone-error"
            placeholder="Número de contacto"
            className={`form-field-interactive w-full rounded-xl border px-4 py-3 text-sm text-brand-text placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors ${
              touched.phone && errors.phone
                ? 'border-red-600 bg-red-50/50'
                : touched.phone && !errors.phone
                ? 'border-emerald-600'
                : 'border-slate-300 bg-brand-light/50'
            }`}
          />
          {touched.phone && errors.phone && (
            <p id="phone-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Correo electrónico */}
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-brand-dark mb-1">
            Correo electrónico (Opcional)
          </label>
          <span id="email-hint" className="block text-xs text-slate-500 mb-1.5">
            Formato: correo@empresa.com
          </span>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby="email-hint"
            aria-invalid={touched.email && !!errors.email}
            aria-errormessage="email-error"
            placeholder="tu@correo.com"
            className={`form-field-interactive w-full rounded-xl border px-4 py-3 text-sm text-brand-text placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors ${
              touched.email && errors.email
                ? 'border-red-600 bg-red-50/50'
                : 'border-slate-300 bg-brand-light/50'
            }`}
          />
          {touched.email && errors.email && (
            <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Tipo de Espacio */}
        <div>
          <label htmlFor="companyOrSector" className="block text-sm font-bold text-brand-dark mb-1">
            Tipo de Espacio
          </label>
          <span id="sector-hint" className="block text-xs text-slate-500 mb-1.5">
            Selecciona el tipo de inmueble
          </span>
          <select
            id="companyOrSector"
            name="companyOrSector"
            value={formData.companyOrSector}
            onChange={handleChange}
            aria-describedby="sector-hint"
            className="w-full rounded-xl border border-slate-300 bg-brand-light/50 px-4 py-3 text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors"
          >
            <option value="Hogar / Residencial">Hogar / Residencial</option>
            <option value="Conjunto Residencial / Copropiedad">Conjunto Residencial / Copropiedad</option>
            <option value="Empresa / Oficina / Comercio">Empresa / Oficina / Comercio</option>
            <option value="Bodega / Planta Industrial">Bodega / Planta Industrial</option>
            <option value="Institución Educativa / Entidad">Institución Educativa / Entidad</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Servicio Requerido */}
        <div>
          <label htmlFor="service" className="block text-sm font-bold text-brand-dark mb-1">
            Servicio Requerido <span className="text-red-600">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 bg-brand-light/50 px-4 py-3 text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors"
          >
            {SERVICES_DATA.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Asesoría Integral (Varios Servicios)">
              Asesoría Integral (Varios Servicios)
            </option>
          </select>
        </div>

        {/* Dirección / Localidad en Bogotá */}
        <div>
          <label htmlFor="addressOrZone" className="block text-sm font-bold text-brand-dark mb-1">
            Barrio o Localidad en Bogotá
          </label>
          <input
            type="text"
            id="addressOrZone"
            name="addressOrZone"
            value={formData.addressOrZone}
            onChange={handleChange}
            placeholder="Ej: Chapinero, Normandía, Puente Aranda..."
            className="w-full rounded-xl border border-slate-300 bg-brand-light/50 px-4 py-3 text-sm text-brand-text placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors"
          />
        </div>
      </div>

      {/* Mensaje o Detalle */}
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-brand-dark mb-1">
          Detalles de tu necesidad <span className="text-red-600">*</span>
        </label>
        <span id="message-hint" className="block text-xs text-slate-500 mb-1.5">
          Indica área aproximada, tipo de plaga, cantidad de tanques o extintores a cotizar.
        </span>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          minLength={10}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-describedby="message-hint"
          aria-invalid={touched.message && !!errors.message}
          aria-errormessage="message-error"
          placeholder="Hola, necesito cotizar un servicio para..."
          className={`form-field-interactive w-full rounded-xl border px-4 py-3 text-sm text-brand-text placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors ${
            touched.message && errors.message
              ? 'border-red-600 bg-red-50/50'
              : touched.message && !errors.message
              ? 'border-emerald-600'
              : 'border-slate-300 bg-brand-light/50'
          }`}
        />
        {touched.message && errors.message && (
          <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 font-medium">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Action Buttons: Real delivery via WhatsApp + Email */}
      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <button
          type="submit"
          className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsappDark text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-whatsapp/20 transition-all duration-200"
        >
          <MessageCircle className="w-5 h-5 shrink-0" />
          <span>Enviar solicitud por WhatsApp</span>
        </button>

        <button
          type="button"
          onClick={handleEmailSubmit}
          className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-brand-dark hover:bg-brand-primary text-white font-bold text-sm transition-colors"
        >
          <Mail className="w-4 h-4 shrink-0" />
          <span>Enviar por Correo</span>
        </button>
      </div>

      <p className="flex items-center gap-2 text-xs text-slate-500 pt-1">
        <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
        <span>
          Al hacer clic se abrirá conversación directa con {COMPANY_INFO.name} (+57 {COMPANY_INFO.mobile}) con tu solicitud lista para enviar.
        </span>
      </p>
    </form>
  );
};
