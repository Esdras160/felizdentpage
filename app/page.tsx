import Image from "next/image";
import Link from "next/link";
import { SiteNav, SiteFooter, Icon } from "./components/shared/SiteChrome";

const specialties = [
  {
    id: "odontopediatria",
    href: "/especialidades/odontopediatria",
    name: "Odontopediatría",
    desc: "Cuidado dental especializado para niños en un ambiente seguro y amigable.",
    image: "/images/especialidades/odontopediatria/odontopediatria1.jpg",
  },
  {
    id: "endodoncia",
    href: "/especialidades/endodoncia",
    name: "Endodoncia",
    desc: "Tratamientos de conducto precisos para salvar y restaurar piezas dentales.",
    image: "/images/especialidades/endodoncia/endodoncia1.jpg",
  },
  {
    id: "cirugias",
    href: "/especialidades/cirugias",
    name: "Cirugías",
    desc: "Procedimientos quirúrgicos orales con tecnología avanzada y experiencia clínica.",
    image: "/images/especialidades/cirugias/cirugias1.jpg",
  },
  {
    id: "ortodoncia",
    href: "/especialidades/ortodoncia",
    name: "Ortodoncia",
    desc: "Alineación perfecta de dientes con sistemas invisibles y tradicionales.",
    image: "/images/especialidades/ortodoncia/ortodoncia.jpg",
  },
  {
    id: "estetica",
    href: "/especialidades/estetica-dental",
    name: "Estética Dental",
    desc: "Diseño de sonrisa personalizado con carillas y blanqueamiento avanzado.",
    image: "/images/especialidades/estetica/estetica1.jpg",
  },
];

const treatments = [
  {
    number: "01",
    title: "Limpiezas dentales",
    tag: "Prevención",
    image: "/images/tratamientos/limpieza.png",
    desc: "Removemos placa, sarro y manchas superficiales para ayudar a prevenir caries y enfermedades periodontales.",
  },
  {
    number: "02",
    title: "Resinas dentales",
    tag: "Restauración",
    image: "/images/tratamientos/resina.png",
    desc: "Restauraciones estéticas del color del diente para caries, fracturas y correcciones funcionales de tamaño medio.",
  },
  {
    number: "03",
    title: "Extracciones dentales",
    tag: "Cirugía menor",
    image: "/images/tratamientos/extraccion.png",
    desc: "Procedimientos seguros para piezas no restaurables, dientes retenidos o casos con dolor e infección.",
  },
  {
    number: "04",
    title: "Prótesis fijas",
    tag: "Rehabilitación",
    image: "/images/tratamientos/limpieza.png",
    desc: "Soluciones permanentes para recuperar estabilidad, estética y función al reemplazar dientes perdidos.",
  },
];

const faqs = [
  {
    question: "¿Aceptan seguros dentales?",
    answer: "Podemos orientarte durante el proceso de valoración para revisar si tu seguro o esquema de reembolso aplica según el tratamiento requerido.",
  },
  {
    question: "¿Tienen facilidades de pago?",
    answer: "Sí, te ayudamos a revisar opciones y planes según el tratamiento indicado para que puedas organizar tu atención con mayor comodidad.",
  },
  {
    question: "¿La primera cita es gratis?",
    answer: "La disponibilidad de valoraciones iniciales o promociones puede variar. Escríbenos por WhatsApp y te confirmamos la opción vigente para tu caso.",
  },
  {
    question: "¿Atienden urgencias dentales?",
    answer: "Si presentas dolor, inflamación o una fractura dental, contáctanos de inmediato para orientarte y canalizar tu atención lo antes posible.",
  },
];

export default function Home() {
  return (
    <>
      <SiteNav activePath="/" />

      <main className="editorial-surface">
        <section className="section-frame relative pt-36 pb-20 md:pt-44 md:pb-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:px-8 lg:grid-cols-2 lg:gap-20">
            <div className="animate-in-up">
              <div className="eyebrow mb-4 text-[11px] font-semibold uppercase">Clínica Dental</div>
              <div className="mb-8 h-px w-12 bg-primary" />
              <h1 className="font-headline mb-8 text-4xl leading-tight font-light tracking-tight text-on-background md:text-5xl">
                <span className="text-primary">Felizdent:</span> <br />
                <span className="font-normal text-accent-purple">Por el gusto de verte sonreír</span>
              </h1>
              <p className="text-on-surface-variant mb-12 max-w-md text-base leading-relaxed font-light">
                Más de 20 años transformando sonrisas. En Felizdent fusionamos tecnología de vanguardia con un trato humano excepcional para ofrecerte el cuidado dental que mereces.
              </p>
              <div className="text-secondary flex flex-wrap items-center gap-8 text-xs font-medium tracking-[0.15em] uppercase">
                <span className="flex items-center gap-2">
                  <Icon className="size-5 text-primary" name="verified" />
                  20 Años de Experiencia
                </span>
                <span className="flex items-center gap-2">
                  <Icon className="size-5 text-accent-purple" name="technology" />
                  Materiales de última generación
                </span>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/5212221526613?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  Agendar cita
                </a>
                <a href="/consultorios" className="cta-button-outline">
                  Nuestras sedes
                </a>
              </div>
              <div className="mt-8 max-w-xl overflow-hidden rounded-2xl border border-outline/30 bg-white shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-stretch">
                  {/* Bloque horario */}
                  <div className="flex flex-1 items-center gap-3 px-5 py-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="size-5 text-primary" name="clock" />
                    </div>
                    <div>
                      <p className="mb-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-primary">
                        Horarios de atención
                      </p>
                      <p className="text-xs leading-relaxed text-on-surface-variant">Lunes a viernes: 9am – 7pm</p>
                      <p className="text-xs leading-relaxed text-on-surface-variant">Sábados: 9am – 2pm</p>
                    </div>
                  </div>
                  {/* Separador */}
                  <div className="mx-5 h-px bg-outline/20 sm:mx-0 sm:my-3 sm:h-auto sm:w-px" />
                  {/* Bloque redes sociales */}
                  <div className="flex flex-1 items-center justify-between gap-4 px-5 py-4">
                    <div>
                      <p className="mb-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-accent-purple">
                        Encuéntranos como
                      </p>
                      <p className="text-sm font-medium text-on-background">Felizdent</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://www.instagram.com/clinicadentalfelizdent?igsh=MTJiNzMya2VwaWpscQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram de Felizdent"
                        className="flex size-9 items-center justify-center rounded-full bg-primary transition-opacity hover:opacity-80"
                      >
                        <Icon className="size-4 text-white" name="instagram" />
                      </a>
                      <a
                        href="https://www.facebook.com/share/17tgSemThC/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook de Felizdent"
                        className="flex size-9 items-center justify-center rounded-full bg-accent-purple transition-opacity hover:opacity-80"
                      >
                        <Icon className="size-4 text-white" name="facebook" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-in-up-delay">
              <div className="hero-image-wrap bg-surface-container aspect-[4/5] overflow-hidden">
                <Image
                  alt="Sala de tratamiento dental moderna"
                  src="/images/mision.jpg"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-full w-full object-cover opacity-95"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4 md:px-8">
            {[
              { id: "experience", value: "+20", label: "Años de experiencia" },
              { id: "branches", value: "3", label: "Sucursales " },
              { id: "specialists", value: "+10", label: "Especialistas activos" },
              { id: "patients", value: "+15 mil", label: "Pacientes atendidos" },
            ].map((stat) => (
              <div key={stat.id} className="reveal reveal-scale text-center">
                <div className="font-headline text-3xl font-light text-primary md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-on-surface-variant">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-frame border-outline/30 border-y bg-surface-container/20 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal reveal-blur mb-14 md:mb-16">
              <span className="text-accent-purple mb-3 block text-xs font-semibold tracking-[0.3em] uppercase">Tratamientos</span>
              <div className="mb-6 h-px w-12 bg-accent-purple/40" />
              <h2 className="font-headline mb-3 text-3xl font-light text-on-background">Procedimientos destacados</h2>
              <p className="text-on-surface-variant max-w-2xl font-light">
                Tratamientos clínicos enfocados en prevención, restauración y funcionalidad para cuidar tu salud bucal en cada etapa.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {treatments.map((item, index) => (
                <article key={item.title} className={`treatment-card reveal ${index % 2 === 0 ? "reveal-d1" : "reveal-d2"}`}>
                  <div className="treatment-card-image-wrap">
                    <Image
                      alt={item.title}
                      src={item.image}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="treatment-card-image"
                    />
                  </div>
                  <div className="treatment-card-body">
                    <div className="flex items-center justify-between gap-4">
                      <span className="treatment-chip">{item.tag}</span>
                      <span className="treatment-seq">{item.number}</span>
                    </div>
                    <h3 className="treatment-card-title">{item.title}</h3>
                    <p className="treatment-card-copy">{item.desc}</p>
                    <a
                      href={`https://wa.me/5212221526613?text=${encodeURIComponent(`Hola, me interesa recibir información sobre ${item.title.toLowerCase()}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="treatment-card-link"
                    >
                      Solicitar información
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame bg-white/75 py-10 md:py-12">
          <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
            <div className="reveal">
              <a
                href="https://wa.me/5212221526613?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Agendar una cita hoy
              </a>
            </div>
          </div>
        </section>

        <section className="section-frame bg-white/75 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal reveal-blur mb-14 md:mb-16">
              <h2 className="font-headline mb-4 text-3xl font-light text-on-background">Especialidades</h2>
              <p className="text-on-surface-variant max-w-xl font-light">
                Nuestro equipo multidisciplinario utiliza la precisión clínica para cada aspecto de tu salud bucal.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-5">
              {specialties.map((specialty, index) => (
                <Link
                  key={specialty.id}
                  href={specialty.href}
                  className={`specialty-card reveal group relative h-60 overflow-hidden border-b border-outline/60 transition-all duration-500 md:h-64 ${
                    index === 0 ? "reveal-d1" :
                    index === 1 ? "reveal-d2" :
                    index === 2 ? "reveal-d3" :
                    index === 3 ? "reveal-d4" :
                    "reveal-d5"
                  }`}
                >
                  <div className="specialty-base absolute inset-0 z-20 hidden flex-col justify-center bg-transparent px-3 py-6 transition-opacity duration-500 md:flex md:group-hover:opacity-0">
                    <h3 className="text-on-background text-xl font-medium tracking-tight">
                      {specialty.name}
                    </h3>
                    <p className="text-on-surface-variant mt-3 text-sm leading-relaxed font-light">
                      {specialty.desc}
                    </p>
                    <span className="specialty-base-line mt-6 h-px w-8" />
                  </div>

                  <Image
                    alt={specialty.name}
                    src={specialty.image}
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 768px) 30vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100"
                  />

                  <div className="specialty-overlay absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-4 py-4 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
                    <h3 className="mb-1 text-base font-semibold text-white">
                      {specialty.name}
                    </h3>
                    <p className="text-xs leading-relaxed font-light text-white/90">
                      {specialty.desc}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                      Ver especialidad
                      <Icon className="size-4" name="arrow" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame bg-surface-container/40 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal reveal-blur mb-14 text-center md:mb-16">
              <span className="text-accent-purple mb-3 block text-xs font-semibold tracking-[0.3em] uppercase">Equipo Clínico</span>
              <div className="mx-auto mb-6 h-px w-12 bg-accent-purple/40" />
              <h2 className="font-headline mb-3 text-3xl font-light text-on-background">Nuestros Especialistas</h2>
              <p className="text-on-surface-variant mx-auto max-w-md text-sm font-light">Dentistas certificados con formación de alto nivel y amplia experiencia clínica.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Dra. Yazmin Téllez Bautista",
                  area: "Estomatología y Especialista en Endodoncia",
                  text: "Especialista en diagnóstico pulpar y tratamientos de conducto enfocados en conservar piezas dentales y aliviar dolor con precisión clínica.",
                  image: "/images/especialistas/DoctoraYazInicio.jpg",
                },
                {
                  name: "Dra. Isabel Chávez",
                  area: "Estomatología Pediátrica",
                  text: "Experta en el cuidado dental infantil, creando experiencias positivas y educativas para los más pequeños.",
                  image: "/images/especialistas/DoctoraIsabelInicio.jpg",
                },
                {
                  name: "Dra. Bricia López López",
                  area: "Estomatología",
                  text: "Rehabilitación oral compleja y cirugía de implantes con un enfoque en estética funcional y natural.",
                  image: "/images/especialistas/DoctoraBrizInicio.jpg",
                },
              ].map((doctor, index) => (
                <article key={doctor.name} className={`specialist-card reveal ${index === 0 ? "reveal-d1" : index === 1 ? "reveal-d2" : "reveal-d3"}`}>
                  <div className="specialist-card-photo-wrap">
                    <div className="specialist-card-photo">
                      <Image alt={doctor.name} className="h-full w-full object-cover" src={doctor.image} fill sizes="110px" />
                    </div>
                  </div>
                  <div className="specialist-card-body">
                    <h4 className="font-headline text-lg font-medium text-on-background">{doctor.name}</h4>
                    <span className="specialist-card-area">{doctor.area}</span>
                    <p className="text-on-surface-variant mt-3 text-sm font-light leading-relaxed text-center">{doctor.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame border-outline/30 border-t bg-white/80 py-20 md:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="reveal reveal-left">
              <span className="text-primary mb-3 block text-xs font-semibold tracking-[0.3em] uppercase">Sucursal San Lorenzo</span>
              <div className="mb-6 h-px w-12 bg-primary/40" />
              <h2 className="font-headline mb-4 text-3xl font-light text-on-background md:text-4xl">San Lorenzo Ometepec</h2>
              <p className="text-on-surface-variant mb-4 max-w-xl text-base leading-relaxed font-light">
                Av. Reforma 153, Barrio de Jesús, 75615 San Lorenzo Ometepec, Pue.
              </p>
              <p className="text-on-surface-variant mb-8 max-w-xl text-sm leading-relaxed font-light">
                Visítanos en nuestra sucursal de San Lorenzo y conoce también el resto de nuestras ubicaciones.
              </p>
              <div className="mb-8 grid max-w-xl gap-4 sm:grid-cols-2">
                <div className="info-chip-card">
                  <div className="info-chip-head">
                    <Icon className="size-4 text-primary" name="clock" />
                    Horario
                  </div>
                  <p className="info-chip-copy">Lunes a Viernes : 9am a 7pm</p>
                  <p className="info-chip-copy">Sábados: 9am a 2pm</p>
                </div>
          
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/5212221526613?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  Agendar en San Lorenzo
                </a>
                <a href="/consultorios" className="cta-button-outline">
                Ver más sucursales
                </a>
              </div>
            </div>
            <div className="reveal reveal-right reveal-d2 space-y-5">
              <div className="hero-image-wrap bg-surface-container aspect-[4/3] overflow-hidden">
                <Image
                  alt="Sucursal Felizdent San Lorenzo Ometepec"
                  src="/images/consultorios/consultorioSanLorenzo.jpg"
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="map-embed-card overflow-hidden rounded-[1.5rem] border border-outline/50 bg-white shadow-[0_16px_40px_rgba(12,19,17,0.08)]">
                <iframe
                  title="Mapa de Felizdent San Lorenzo Ometepec"
                  src="https://maps.google.com/maps?q=Av.%20Reforma%20153,%20Barrio%20de%20Jes%C3%BAs,%2075615%20San%20Lorenzo%20Ometepec,%20Puebla&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-[280px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-frame bg-surface-container/35 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal reveal-blur mb-14 md:mb-16">
              <span className="text-primary mb-3 block text-xs font-semibold tracking-[0.3em] uppercase">Preguntas frecuentes</span>
              <div className="mb-6 h-px w-12 bg-primary/40" />
              <h2 className="font-headline mb-3 text-3xl font-light text-on-background">Resolvemos tus dudas antes de agendar</h2>
              <p className="text-on-surface-variant max-w-2xl font-light">
                Si necesitas orientación rápida, aquí tienes respuestas iniciales. Para un caso específico, nuestro equipo te atiende por WhatsApp o teléfono.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <details key={faq.question} className={`faq-card reveal ${index % 2 === 0 ? "reveal-d1" : "reveal-d2"}`}>
                  <summary className="faq-summary">
                    <span>{faq.question}</span>
                    <Icon className="size-4 text-primary" name="plus" />
                  </summary>
                  <p className="faq-answer">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
