"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type IconName =
  | "ethics"
  | "honesty"
  | "team"
  | "respect"
  | "vocation"
  | "verified"
  | "technology"
  | "phone"
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "clock"
  | "location"
  | "arrow"
  | "plus"
  | "sparkle"
  | "shield"
  | "smile";

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const baseClassName = `inline-block shrink-0 ${className}`.trim();

  switch (name) {
    case "ethics":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <path d="M12 4 6 7v5c0 4.2 2.56 7.9 6 9 3.44-1.1 6-4.8 6-9V7l-6-3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          <path d="M9.5 12h5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
          <path d="M12 9.5v5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
        </svg>
      );
    case "honesty":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <path d="M7 4h7l5 5v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
          <path d="M14 4v5h5" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
          <path d="M9 13h6M9 16h4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
        </svg>
      );
    case "team":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3.5 19a4.5 4.5 0 0 1 9 0M13.5 19a3.5 3.5 0 0 1 7 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
        </svg>
      );
    case "respect":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <path d="M12 20s-6.5-3.7-6.5-9.1A3.9 3.9 0 0 1 12 8.2a3.9 3.9 0 0 1 6.5 2.7C18.5 16.3 12 20 12 20Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
          <path d="M9.5 12.2c.7.8 1.3 1.3 2.5 2.2 1.1-.9 1.8-1.4 2.5-2.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
        </svg>
      );
    case "vocation":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="currentColor" viewBox="0 0 24 24">
          <path d="m12 21-1.45-1.32C5.4 15.02 2 11.94 2 8.15 2 5.07 4.42 3 7.3 3c1.72 0 3.38.82 4.7 2.15C13.32 3.82 14.98 3 16.7 3 19.58 3 22 5.07 22 8.15c0 3.79-3.4 6.87-8.55 11.54L12 21Z" />
        </svg>
      );
    case "verified":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <path d="m12 3 2.7 1.5 3.1.3 1.4 2.8 2.3 2-1 3 1 3-2.3 2-1.4 2.8-3.1.3L12 21l-2.7-1.5-3.1-.3-1.4-2.8-2.3-2 1-3-1-3 2.3-2 1.4-2.8 3.1-.3L12 3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="m8.5 12 2.2 2.2 4.8-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
        </svg>
      );
    case "technology":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <path d="M12 3v4M12 17v4M4.93 6.93l2.83 2.83M16.24 14.24l2.83 2.83M3 12h4M17 12h4M4.93 17.07l2.83-2.83M16.24 9.76l2.83-2.83" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "phone":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="currentColor" viewBox="0 0 32 32">
          <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16.002c0 3.5 1.128 6.744 3.046 9.378L1.06 31.29l6.196-1.964A15.89 15.89 0 0 0 16.004 32C24.83 32 32 24.826 32 16.002 32 7.174 24.83 0 16.004 0Zm9.31 22.614c-.39 1.098-2.282 2.1-3.17 2.166-.8.06-1.544.374-5.198-1.112-4.402-1.79-7.196-6.3-7.414-6.59-.218-.292-1.782-2.376-1.782-4.53s1.128-3.214 1.53-3.654c.4-.44.874-.55 1.166-.55.292 0 .584.002.838.016.27.014.63-.102.984.75.39.93 1.312 3.214 1.424 3.448.112.234.188.508.038.8-.15.292-.224.474-.444.73-.22.256-.462.572-.662.768-.22.218-.448.454-.192.89.256.438 1.14 1.876 2.446 3.04 1.68 1.496 3.094 1.96 3.532 2.18.44.218.694.184.95-.112.256-.294 1.098-1.278 1.39-1.718.292-.44.584-.366.984-.22.4.148 2.534 1.196 2.97 1.414.438.218.728.33.838.51.112.184.112 1.048-.278 2.148Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="17.3" cy="6.8" r="1" fill="currentColor" />
        </svg>
      );
    case "facebook":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5H16V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9V11H7.5v3H10V21h3.5Z" />
        </svg>
      );
    case "clock":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 7.5v5l3 1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
        </svg>
      );
    case "location":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <path d="M12 21s6-5.4 6-10.5A6 6 0 0 0 6 10.5C6 15.6 12 21 12 21Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
          <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "arrow":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <path d="M5 12h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
          <path d="m13 6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    case "plus":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      );
    case "sparkle":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <path d="m12 3 1.8 4.3L18 9l-4.2 1.7L12 15l-1.8-4.3L6 9l4.2-1.7L12 3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
          <path d="M19 16v5M16.5 18.5H21.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
        </svg>
      );
    case "shield":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <path d="M12 3 5 6.5v5.8C5 16.6 8.1 20.5 12 21.5c3.9-1 7-4.9 7-9.2V6.5L12 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          <path d="m9 12 2 2 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
        </svg>
      );
    case "smile":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8.5 14.5s1 2 3.5 2 3.5-2 3.5-2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          <circle cx="9.5" cy="10.5" r="0.8" fill="currentColor" />
          <circle cx="14.5" cy="10.5" r="0.8" fill="currentColor" />
        </svg>
      );
  }
}

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Tratamientos", href: "/tratamientos" },
  { label: "Especialidades", href: "/especialidades" },
  { label: "Dentistas", href: "/dentistas" },
  { label: "Testimonios", href: "/testimonios" },
  { label: "Sucursales", href: "/consultorios" },
  { label: "Conócenos", href: "/acerca" },
];

export function SiteNav({ activePath }: { activePath: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [activePath]);

  return (
    <nav className="minimal-border fixed top-0 z-50 w-full bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 md:px-8 md:py-4">
        <Link className="h-14 w-auto shrink-0 md:h-16" href="/">
          <Image
            src="/images/shared/LogoFelizdent.png"
            alt="Felizdent"
            width={0}
            height={0}
            sizes="220px"
            priority
            style={{ height: "100%", width: "auto" }}
          />
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activePath === link.href;
            return (
              <Link
                key={link.href}
                className={isActive
                  ? "nav-link-active text-primary pb-1 text-xs font-semibold tracking-widest uppercase"
                  : "text-on-surface-variant hover:text-primary text-xs tracking-widest uppercase transition-colors"
                }
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span className={`block h-0.5 w-6 bg-on-background transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-on-background transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-on-background transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-outline/30 bg-white px-8 pb-8 md:hidden">
          <div className="flex flex-col gap-5 pt-4">
            {NAV_LINKS.map((link) => {
              const isActive = activePath === link.href;
              return (
                <Link
                  key={link.href}
                  className={isActive
                    ? "text-primary text-sm font-semibold tracking-widest uppercase"
                    : "text-on-surface-variant hover:text-primary text-sm tracking-widest uppercase transition-colors"
                  }
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-outline/50 bg-surface-container/95 border-t py-16 shadow-[0_-12px_30px_rgba(15,28,24,0.04)] md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-[1fr_0.75fr_1fr]">
        <div className="space-y-6">
          <div className="text-on-background text-lg font-light tracking-[0.2em] uppercase">Felizdent</div>
          <p className="text-on-surface-variant max-w-xs text-sm leading-relaxed font-light">
            Cuidar tu sonrisa hoy, es garantizar tu salud mañana.
          </p>
          <div className="space-y-3 text-sm font-light text-on-surface-variant">
            <div className="flex items-center gap-3">
              <Icon className="size-4 text-primary" name="clock" />
              <span>Lunes a viernes: 9am a 7pm</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon className="size-4 text-primary" name="clock" />
              <span>Sábados: 9am a 2pm</span>
            </div>
            <div className="flex items-start gap-3">
              <Icon className="mt-0.5 size-4 text-accent-purple" name="location" />
              <span>Av. Reforma 153, Barrio de Jesús, San Lorenzo Ometepec, Puebla.</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="tel:+5212221526613" aria-label="Llamar a Felizdent">
              <Icon className="size-5 text-accent-purple" name="phone" />
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://wa.me/5212221526613?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer" aria-label="Contactar a Felizdent por WhatsApp">
              <Icon className="size-5 text-accent-purple" name="whatsapp" />
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.instagram.com/clinicadentalfelizdent?igsh=MTJiNzMya2VwaWpscQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Felizdent">
              <Icon className="size-5 text-accent-purple" name="instagram" />
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.facebook.com/share/17tgSemThC/" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Felizdent">
              <Icon className="size-5 text-accent-purple" name="facebook" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h5 className="text-on-background text-[10px] font-bold tracking-[0.2em] uppercase">Navegación</h5>
            <ul className="text-on-surface-variant space-y-3 text-xs tracking-widest uppercase">
              <li>
                <Link className="hover:text-primary transition-colors" href="/acerca">Conócenos</Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/dentistas">Dentistas</Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/especialidades">Especialidades</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-on-background text-[10px] font-bold tracking-[0.2em] uppercase">Clínica</h5>
            <ul className="text-on-surface-variant space-y-3 text-xs tracking-widest uppercase">
              <li>
                <Link className="hover:text-primary transition-colors" href="/tratamientos">Tratamientos</Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/consultorios">Consultorios</Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/">Inicio</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <h5 className="text-on-background text-[10px] font-bold tracking-[0.2em] uppercase">Contacto directo</h5>
          <p className="text-on-surface-variant text-xs font-light">
            Agenda, resuelve dudas o pide indicaciones para llegar a la sucursal.
          </p>
          <div className="footer-map-wrap overflow-hidden rounded-[1.25rem] border border-outline/60 bg-white shadow-[0_16px_35px_rgba(12,19,17,0.08)]">
            <iframe
              title="Mapa de Felizdent San Lorenzo Ometepec en el footer"
              src="https://maps.google.com/maps?q=Av.%20Reforma%20153,%20Barrio%20de%20Jes%C3%BAs,%2075615%20San%20Lorenzo%20Ometepec,%20Puebla&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-[220px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-2 text-xs font-light text-on-surface-variant">
            <p>Tel: +52 1 222 152 6613</p>
            <p>WhatsApp disponible para agendar y resolver dudas.</p>
          </div>
        </div>
      </div>
      <div className="text-on-surface-variant mx-auto flex max-w-6xl items-center justify-between px-6 pt-14 text-[10px] font-medium tracking-[0.2em] uppercase md:px-8 md:pt-20">
        <span>© 2026 Felizdent</span>
        <span>Desarrollado por <a href="https://miztowebsolutions.com" className="text-primary hover:text-primary/80 transition-colors">Mizto Web Solutions</a></span>
      </div>
    </footer>
  );
}
