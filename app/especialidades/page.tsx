import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter, SiteNav } from "../components/shared/SiteChrome";

type Specialty = {
  title: string;
  description: string;
  href?: string;
  image: string;
  icon: ReactNode;
};

const SPECIALTIES: Specialty[] = [
  {
    title: "Especialidad Odontopediatría",
    description:
      "Prevención, diagnóstico y tratamiento dental infantil para construir sonrisas sanas desde etapas tempranas.",
    href: "/especialidades/odontopediatria",
    image: "/images/especialidades/odontopediatria/odontopediatria2.jpg",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4c3.3 0 6 2.6 6 6v1.5c0 3.2-2.2 6-5.2 6.8L12 21l-.8-2.7C8.2 17.5 6 14.7 6 11.5V10c0-3.4 2.7-6 6-6Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 10.5h5M9.5 13.5h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Especialidad Endodoncia",
    description:
      "Tratamientos de conducto con enfoque conservador para salvar piezas dentales y eliminar dolor e infección.",
    href: "/especialidades/endodoncia",
    image: "/images/especialidades/endodoncia/endodoncia1.jpg",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v6M12 15v6M9 9h6v6H9z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 9v-2M12 17v-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Especialidad Cirugías",
    description:
      "Cirugía oral con planeación personalizada y tecnología para procedimientos más precisos y seguros.",
    href: "/especialidades/cirugias",
    image: "/images/especialidades/cirugias/cirugias1.jpg",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 7l10 10M17 7l-4.5 4.5M10 14l-3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: "Especialidad Ortodoncia",
    description:
      "Corrección de alineación y mordida en niños, adolescentes y adultos con protocolos actuales.",
    href: "/especialidades/ortodoncia",
    image: "/images/especialidades/ortodoncia/ortodoncia.jpg",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 12h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M7 9v6M12 9v6M17 9v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Especialidad Estética Dental",
    description:
      "Diseño de sonrisa, blanqueamientos y tratamientos estéticos para armonía dental y facial.",
    href: "/especialidades/estetica-dental",
    image: "/images/especialidades/estetica/estetica1.jpg",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: "Especialidad Periodoncia",
    description:
      "Cuidado especializado de encías para prevenir gingivitis y periodontitis y mantener soporte dental saludable.",
    href: "/especialidades/periodoncia",
    image: "/images/especialidades/periodoncia/periodoncia1.png",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 12.5c0-3 2.4-5.5 5.5-5.5 3 0 5.5 2.4 5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M8 13.5c0 2.2 1.8 4 4 4s4-1.8 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function EspecialidadesPage() {
  return (
    <>
      <SiteNav activePath="/especialidades" />

      <main className="editorial-surface">
        <section className="section-frame relative pt-36 pb-20 md:pt-44 md:pb-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-16 md:mb-20">
              <div className="eyebrow mb-4 text-[11px] font-semibold uppercase">Servicios de alta especialidad</div>
              <div className="mb-8 h-px w-12 bg-accent-purple/50" />
              <h1 className="font-headline mb-6 text-4xl leading-tight font-light tracking-tight text-on-background md:text-5xl">
                Especialidades
              </h1>
              <p className="text-on-surface-variant max-w-2xl text-base leading-relaxed font-light">
                Explora nuestras áreas clínicas. Selecciona una especialidad para conocer información detallada sobre procedimientos, beneficios y enfoque de atención.
              </p>
            </div>

            <div className="space-y-6">
              {SPECIALTIES.map((specialty, index) => {
                const imageBlock = (
                  <div className="editorial-row-image">
                    <img src={specialty.image} alt={specialty.title} className="h-full w-full object-cover" />
                  </div>
                );

                const contentBlock = (
                  <div className="editorial-row-content">
                    <span className="editorial-icon-chip text-primary">{specialty.icon}</span>
                    <div className="mb-3 h-px w-8 bg-primary" />
                    <h2 className="font-headline mb-4 text-2xl font-light text-on-background md:text-3xl">
                      {specialty.title}
                    </h2>
                    <p className="text-on-surface-variant mb-6 text-sm leading-relaxed font-light max-w-prose">
                      {specialty.description}
                    </p>
                    {specialty.href ? (
                      <Link
                        href={specialty.href}
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary hover:opacity-70 transition-opacity"
                      >
                        Explorar especialidad
                        <svg className="size-4" fill="none" viewBox="0 0 24 24">
                          <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                        </svg>
                      </Link>
                    ) : (
                      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-on-surface-variant/60">
                        Disponible en consulta
                      </span>
                    )}
                  </div>
                );

                return (
                  <article key={specialty.title} className={`editorial-row reveal ${index === 0 ? "reveal-d1" : index === 1 ? "reveal-d2" : index === 2 ? "reveal-d3" : ""}`}>
                    {index % 2 === 0 ? (
                      <>{imageBlock}{contentBlock}</>
                    ) : (
                      <>{contentBlock}{imageBlock}</>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-frame border-outline/30 border-t bg-white/75 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal text-center">
              <h2 className="font-headline mb-4 text-2xl font-light text-on-background md:text-3xl">¿Tienes dudas sobre una especialidad?</h2>
              <p className="text-on-surface-variant mx-auto mb-8 max-w-md text-sm font-light leading-relaxed">
                Nuestro equipo puede orientarte sobre el tratamiento ideal para tu caso.
              </p>
              <a
                href="https://wa.me/5212221526613?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20una%20especialidad"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
