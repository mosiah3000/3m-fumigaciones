import React from 'react';
import { ShieldCheck, Building2, CheckCircle2, ClipboardCheck } from 'lucide-react';
import { TRUST_BENEFITS } from '../data/siteData';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  seguro: ShieldCheck,
  cobertura: Building2,
  enfoque: CheckCircle2,
  cumplimiento: ClipboardCheck,
};

export const TrustBenefits: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {TRUST_BENEFITS.map((benefit) => {
        const IconComponent = ICON_MAP[benefit.id] || ShieldCheck;
        return (
          <div
            key={benefit.id}
            className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 text-white hover:bg-white/15 hover:border-brand-cyan/50 transition-all duration-200"
          >
            <div className="w-11 h-11 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan mb-3.5">
              <IconComponent className="w-6 h-6" />
            </div>
            <h2 className="font-heading text-base sm:text-lg font-bold text-white leading-snug">
              {benefit.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
