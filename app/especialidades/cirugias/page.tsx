import Link from "next/link";
import { SiteFooter, SiteNav } from "../../components/shared/SiteChrome";

const PROCEDURES = [
  {
    title: "Retiro de terceros molares",
    text: "El retiro de terceros molares, comúnmente conocidos como muelas del juicio, es un procedimiento odontológico frecuente. Estas muelas suelen erupcionar entre los 17 y 25 años, pero en muchos casos no cuentan con suficiente espacio en la boca, lo que puede provocar dolor, infecciones, o dañar los dientes adyacentes. En Felizdent realizamos este procedimiento de manera segura y con tecnología avanzada, asegurando una recuperación rápida y sin complicaciones.",
    image: "/images/cirugia.jpg",
  },
  {
    title: "Caninos retenidos",
    text: "Los caninos retenidos son dientes que no logran emerger de manera natural a través de las encías, quedando atrapados parcial o completamente dentro del hueso o tejido blando. Este problema puede causar malposición de otros dientes, dolor o quistes. Nuestros especialistas en cirugía maxilofacial y ortodoncia cuentan con las herramientas para guiar su correcta erupción o, en casos complejos, su extracción.",
    image: "/images/especialidades/cirugias/cirugias1.jpg",
  },
  {
    title: "Extirpación de quistes o tumores bucales",
    text: "La extirpación de quistes o tumores bucales elimina crecimientos anormales en la boca o mandíbula. Aunque suelen ser benignos, si no se tratan pueden crecer, desplazar dientes o dañar huesos y tejidos. Nuestros especialistas realizan este procedimiento de forma segura y precisa, minimizando molestias y garantizando una recuperación rápida. La detección temprana es clave.",
    image: "/images/cirugia.jpg",
  },
];

const AESTHETIC_PROCEDURES = [
  {
    title: "Bichectomía",
    text: "Una cirugía que reduce el volumen de las mejillas, resaltando los pómulos y afinando el rostro.",
  },
  {
    title: "Lipopapada",
    text: "Procedimiento que elimina el exceso de grasa en la zona del cuello y debajo del mentón, proporcionando un contorno más definido.",
  },
];

export default function CirugiasPage() {
  return (
    <>
      <SiteNav activePath="/especialidades" />

      <main className="editorial-surface">
        {/* Hero Section */}
        <section className="section-frame relative pt-36 pb-18 md:pt-44 md:pb-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            {/* Top: título + imagen */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="reveal">
                <div className="eyebrow mb-4 text-[11px] font-semibold uppercase">Especialidad</div>
                <div className="mb-8 h-px w-12 bg-accent-purple/50" />
                <h1 className="font-headline mb-6 text-4xl leading-tight font-light text-on-background md:text-5xl">
                  Cirugías
                </h1>
                <p className="text-on-surface-variant text-base leading-relaxed font-light">
                  Las cirugías dentales son procedimientos especializados que restauran la salud y función de tu sonrisa, brindando soluciones seguras y efectivas para cada necesidad.
                </p>
              </div>
              <div className="hero-image-wrap reveal reveal-d2 aspect-[4/5] overflow-hidden bg-surface-container">
                <img src="/images/cirugia.jpg" alt="Cirugía dental" className="h-full w-full object-cover" />
              </div>
            </div>

            {/* Bottom: párrafo descriptivo a ancho completo */}
            <div className="reveal mt-14 border-t border-outline/30 pt-10">
              <p className="text-on-surface-variant text-base leading-relaxed font-light max-w-3xl">
                En la Clínica Dental Felizdent, contamos con especialistas altamente capacitados para realizar cirugías dentales y maxilofaciales, abarcando desde extracciones complicadas hasta procedimientos reconstructivos avanzados. Las cirugías dentales son clave para tratar infecciones que no pueden resolverse con tratamientos convencionales, asegurando la recuperación de la salud bucal y la estética dental. Estas intervenciones se realizan con la más alta precisión y tecnología, garantizando la seguridad y el confort del paciente en cada paso del proceso.
              </p>
            </div>
          </div>
        </section>

        {/* Procedures Section */}
        <section className="section-frame bg-surface-container/40 py-18 md:py-22">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-10">
              <h2 className="font-headline mb-3 text-3xl font-light text-on-background">Contamos con diferentes procedimientos</h2>
              <div className="h-px w-12 bg-primary" />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {PROCEDURES.map((item, index) => (
                <article key={item.title} className={`specialty-panel reveal ${index === 0 ? "reveal-d1" : index === 1 ? "reveal-d2" : "reveal-d3"}`}>
                  <div className="specialty-panel-image">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-headline mb-3 text-2xl font-light text-on-background">{item.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Aesthetic Surgery Section */}
        <section className="section-frame bg-white/75 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-4">
              <h2 className="font-headline mb-3 text-3xl font-light text-on-background">Cirugía estética</h2>
              <div className="h-px w-12 bg-primary mb-6" />
              <p className="text-on-surface-variant text-base leading-relaxed font-light mb-10">
                En la Clínica Dental Felizdent ofrecemos diversos procedimientos de cirugía estética para mejorar la apariencia facial de nuestros pacientes y ayudarlos a alcanzar sus objetivos estéticos.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {AESTHETIC_PROCEDURES.map((item, index) => (
                <article key={item.title} className={`reveal rounded-2xl border border-outline/60 bg-white p-7 md:p-9 ${index === 0 ? "reveal-d1" : "reveal-d2"}`}>
                  <h3 className="font-headline mb-3 text-2xl font-light text-on-background">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-light">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <Link href="/especialidades" className="text-primary text-xs font-semibold tracking-[0.18em] uppercase hover:opacity-80">
                Volver a especialidades
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
