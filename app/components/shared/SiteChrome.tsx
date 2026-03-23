"use client";

import { useState } from "react";
import Link from "next/link";

export type IconName =
  | "ethics"
  | "honesty"
  | "team"
  | "respect"
  | "vocation"
  | "verified"
  | "technology"
  | "globe"
  | "mail"
  | "arrow"
  | "plus"
  | "sparkle";

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
    case "globe":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.4 2.4 3.8 5.6 3.8 9s-1.4 6.6-3.8 9c-2.4-2.4-3.8-5.6-3.8-9S9.6 5.4 12 3Z" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "mail":
      return (
        <svg aria-hidden="true" className={baseClassName} fill="none" viewBox="0 0 24 24">
          <rect height="14" rx="2" stroke="currentColor" strokeWidth="1.7" width="18" x="3" y="5" />
          <path d="m4 7 8 6 8-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
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
  }
}

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Consultorios", href: "/consultorios" },
  { label: "Dentistas", href: "/dentistas" },
  { label: "Especialidades", href: "/especialidades" },
  { label: "Tratamientos", href: "/tratamientos" },
];

export function SiteNav({ activePath }: { activePath: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="minimal-border fixed top-0 z-50 w-full bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 md:px-8 md:py-4">
        <Link className="h-14 w-auto shrink-0 md:h-16" href="/">
          <img
            src="/images/LogoFelizdent.PNG"
            alt="Felizdent"
            className="h-full w-auto object-contain"
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
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-3 md:gap-16 md:px-8">
        <div className="space-y-6">
          <div className="text-on-background text-lg font-light tracking-[0.2em] uppercase">Felizdent</div>
          <p className="text-on-surface-variant max-w-xs text-sm leading-relaxed font-light">
            Excelencia en salud dental con un enfoque artesanal y humano.
          </p>
          <div className="flex gap-6">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              <Icon className="size-5 text-accent-purple" name="globe" />
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              <Icon className="size-5 text-accent-purple" name="mail" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h5 className="text-on-background text-[10px] font-bold tracking-[0.2em] uppercase">Navegacion</h5>
            <ul className="text-on-surface-variant space-y-3 text-xs tracking-widest uppercase">
              <li>
                <Link className="hover:text-primary transition-colors" href="/dentistas">Dentistas</Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/especialidades">Especialidades</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-on-background text-[10px] font-bold tracking-[0.2em] uppercase">Clinica</h5>
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
          <h5 className="text-on-background text-[10px] font-bold tracking-[0.2em] uppercase">Actualizaciones</h5>
          <p className="text-on-surface-variant text-xs font-light">Recibe consejos de salud dental.</p>
          <div className="border-outline flex gap-0 border-b py-1">
            <input
              className="text-on-surface-variant/50 placeholder:text-on-surface-variant/50 w-full border-none bg-transparent p-0 text-xs tracking-widest uppercase placeholder:tracking-widest focus:ring-0"
              placeholder="EMAIL"
              type="email"
            />
            <button className="text-primary transition-transform hover:scale-110" type="button">
              <Icon className="size-5" name="arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="text-on-surface-variant mx-auto flex max-w-6xl items-center justify-between px-6 pt-14 text-[10px] font-medium tracking-[0.2em] uppercase md:px-8 md:pt-20">
        <span>© 2026 Felizdent</span>
        <span>Salud Dental Integral</span>
      </div>
    </footer>
  );
}
