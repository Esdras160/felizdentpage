import Image from "next/image";
import { Icon, type IconName, SiteFooter, SiteNav } from "../components/shared/SiteChrome";

export default function AcercaPage() {
  return (
    <>
      <SiteNav activePath="/acerca" />

      <main className="editorial-surface">
        <section className="section-frame relative pt-32 pb-10 md:pt-40 md:pb-12">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-8 md:mb-10">
              <div className="eyebrow mb-4 text-[11px] font-semibold uppercase">Acerca de Nosotros</div>
              <div className="mb-8 h-px w-12 bg-primary" />
              <h1 className="font-headline mb-5 text-4xl leading-tight font-light text-on-background md:text-5xl">
                Conocenos 
              </h1>
              <p className="text-on-surface-variant max-w-2xl text-base leading-relaxed font-light">
                Trabajamos para que cada paciente reciba un tratamiento preciso, cómodo y con resultados visibles, respaldado por tecnología avanzada y un equipo humano que te acompaña en todo momento.
              </p>
            </div>
          </div>
        </section>

        <section className="section-frame border-outline/30 overflow-hidden border-y py-14 md:py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:px-8 lg:grid-cols-2 lg:gap-16">
            <div className="reveal reveal-left order-2 lg:order-1">
              <span className="text-primary mb-3 block text-xs font-semibold tracking-[0.3em] uppercase">Nuestra Misión</span>
              <div className="mx-auto mb-6 h-px w-12 bg-primary/40" />
              <p className="border-primary mb-10 border-l-2 py-2 pl-6 text-base leading-relaxed font-light text-on-surface italic">
                "Transformar vidas a través de sonrisas saludables y estéticas; mejorando su autoestima, concientizando la importancia de la salud bucal, apoyados de un equipo de especialistas altamente calificados, aplicando innovación tecnológica y trato humano para ofrecer soluciones integrales, personalizadas y con la confianza de estar en las mejores manos."
              </p>
              <div className="space-y-4">
                <div className="text-on-surface-variant flex items-center gap-4 text-sm font-light">
                  <span className="bg-primary/60 size-2 shrink-0 rounded-full" />
                  Especialistas altamente calificados
                </div>
                <div className="text-on-surface-variant flex items-center gap-4 text-sm font-light">
                  <span className="bg-primary/60 size-2 shrink-0 rounded-full" />
                  Innovación tecnológica y trato humano
                </div>
                <div className="text-on-surface-variant flex items-center gap-4 text-sm font-light">
                  <span className="bg-primary/60 size-2 shrink-0 rounded-full" />
                  Soluciones integrales y personalizadas
                </div>
              </div>
            </div>
            <div className="reveal reveal-right reveal-d2 order-1 lg:order-2">
              <span className="text-primary mb-3 block text-xs font-semibold tracking-[0.3em] uppercase">Visión 2030</span>
              <div className="mx-auto mb-6 h-px w-12 bg-primary/40" />
              <p className="border-primary mb-10 border-l-2 py-2 pl-6 text-base leading-relaxed font-light text-on-surface italic">
                "Para el 2030 ser una clínica dental líder en la región, reconocida por brindar servicios dentales integrales, personalizados y de excelencia, con un firme compromiso social con la comunidad."
              </p>
              <div className="space-y-4">
                <div className="text-on-surface-variant flex items-center gap-4 text-sm font-light">
                  <span className="bg-primary/60 size-2 shrink-0 rounded-full" />
                  Liderazgo regional en servicios dentales de excelencia
                </div>
                <div className="text-on-surface-variant flex items-center gap-4 text-sm font-light">
                  <span className="bg-primary/60 size-2 shrink-0 rounded-full" />
                  Servicios integrales y personalizados
                </div>
                <div className="text-on-surface-variant flex items-center gap-4 text-sm font-light">
                  <span className="bg-primary/60 size-2 shrink-0 rounded-full" />
                  Compromiso permanente con la comunidad
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-frame bg-surface-container/30 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal reveal-blur mb-10 md:mb-12">
              <span className="text-primary mb-3 block text-xs font-semibold tracking-[0.3em] uppercase">Nuestra clínica</span>
              <div className="mb-6 h-px w-12 bg-primary/40" />
              <h2 className="font-headline mb-3 text-3xl font-light text-on-background">Instalaciones, atención humana y equipo clínico</h2>
              <p className="text-on-surface-variant max-w-2xl font-light">
                Cada visita combina espacios cómodos, tecnología clínica y un equipo que acompaña tu tratamiento con cercanía y profesionalismo.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.15fr_0.85fr]">
              <article className="about-gallery-card reveal reveal-d1">
                <div className="about-gallery-media relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/consultorios/consultorioSanLorenzo.jpg"
                    alt="Instalaciones de Felizdent en San Lorenzo"
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="about-gallery-body">
                  <span className="about-gallery-kicker">Instalaciones</span>
                  <h3 className="about-gallery-title">Espacios pensados para una experiencia tranquila</h3>
                  <p className="about-gallery-copy">Consultorios funcionales, ambiente limpio y una atención enfocada en seguridad, claridad y comodidad durante cada consulta.</p>
                </div>
              </article>
              <div className="grid gap-6">
                <article className="about-gallery-card reveal reveal-d2">
                  <div className="about-gallery-media relative aspect-[16/10] overflow-hidden">
                    <Image
                      src="/images/consultorios/consultorioLosReyes.jpg"
                      alt="Momento de atención en Felizdent"
                      fill
                      sizes="(min-width: 768px) 35vw, 100vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="about-gallery-body">
                    <span className="about-gallery-kicker">Atención</span>
                    <h3 className="about-gallery-title">Un servicio más claro, cálido y profesional</h3>
                  </div>
                </article>
              </div>
            </div>
            <article className="about-gallery-card reveal reveal-d3 mt-5">
              <div className="about-gallery-media relative aspect-[21/9] overflow-hidden">
                <Image
                  src="/images/fotogrupal2.jpg"
                  alt="Equipo de especialistas de Felizdent"
                  fill
                  sizes="100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="about-gallery-body">
                <span className="about-gallery-kicker">Equipo</span>
                <h3 className="about-gallery-title">Especialistas con criterio clínico y una visión integral de tu sonrisa</h3>
                <p className="about-gallery-copy">Nuestro personal clínico trabaja de forma coordinada para brindarte diagnósticos claros, tratamientos personalizados y una experiencia cálida en cada visita.</p>
                <div className="mt-6">
                  <a
                    href="https://wa.me/5212221526613?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button"
                  >
                    Agendar una cita
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section-frame bg-white/80 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal reveal-blur mb-14 text-center md:mb-16">
              <span className="text-accent-purple mb-4 block text-xs font-semibold tracking-[0.3em] uppercase">Valores que nos Definen</span>
              <div className="bg-accent-purple/30 mx-auto h-px w-12" />
            </div>
            <div className="grid grid-cols-2 gap-5 text-center md:grid-cols-3 md:gap-8 lg:grid-cols-5">
              {[
                ["ethics", "Ética", "Ser firmes y honestos con los pacientes sobre el tratamiento que se les va a realizar."],
                ["honesty", "Honestidad", "Tenemos el compromiso con nuestros pacientes de brindar información transparente."],
                ["team", "Trabajo en equipo", "Colaboramos con comunicación abierta, combinando diferentes perspectivas, habilidades, experiencias y conocimientos."],
                ["respect", "Tolerancia", "Capacidad de aceptar y respetar las diferencias de culto, religión e idioma de nuestros pacientes y del equipo de trabajo."],
                ["vocation", "Responsabilidad social", "Nos involucramos activamente en campañas, actividades y proyectos que beneficien a la comunidad y promuevan la salud bucal."],
              ].map(([icon, title, text], index) => (
                <article
                  key={title}
                  className={`value-card reveal rounded-2xl p-5 md:p-6 ${index === 0 ? "reveal-d1" : index === 1 ? "reveal-d2" : index === 2 ? "reveal-d3" : index === 3 ? "reveal-d4" : "reveal-d5"}`}
                >
                  <span className="value-icon-chip mb-4">
                    <Icon className="value-icon size-6 text-accent-purple" name={icon as IconName} />
                  </span>
                  <h4 className="mb-2 text-sm font-semibold tracking-widest uppercase">{title}</h4>
                  <p className="text-on-surface-variant text-[11px] leading-relaxed font-light tracking-wider uppercase">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
