import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { NAVIGATION_LINKS, SERVICES_DATA } from '../data/siteData';

export const Navigation: React.FC = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navegación principal">
      {NAVIGATION_LINKS.map((item) => {
        if (item.name === 'Servicios') {
          return (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-primary bg-brand-light'
                      : 'text-brand-text hover:text-brand-primary hover:bg-brand-light/60'
                  }`
                }
              >
                <span>{item.name}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180 text-brand-cyan' : ''
                  }`}
                />
              </NavLink>

              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-80 z-50">
                  <div className="bg-white rounded-xl shadow-corporate-lg border border-slate-100 p-2 overflow-hidden">
                    <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-brand-primary border-b border-slate-100">
                      Portafolio de Servicios
                    </div>
                    <div className="divide-y divide-slate-100">
                      {SERVICES_DATA.map((service) => (
                        <Link
                          key={service.id}
                          to={`/servicios/${service.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="block px-3 py-2.5 hover:bg-brand-light rounded-lg transition-colors group"
                        >
                          <p className="text-sm font-semibold text-brand-dark group-hover:text-brand-primary">
                            {service.shortTitle}
                          </p>
                          <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">
                            {service.shortDescription}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive
                  ? 'text-brand-primary bg-brand-light'
                  : 'text-brand-text hover:text-brand-primary hover:bg-brand-light/60'
              }`
            }
          >
            {item.name}
          </NavLink>
        );
      })}
    </nav>
  );
};
