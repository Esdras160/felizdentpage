import Link from "next/link";
import { SiteFooter, SiteNav } from "../../components/shared/SiteChrome";

const PROCEDURES = [
  {
    title: "Extracciones complejas",
    text: "Realizamos extracciones de piezas con dano severo o posicion comprometida, priorizando una tecnica cuidadosa y minima molestia postoperatoria.",
    image: "/images/cirugia.jpg",
  },
  {
    title: "Cirugia de terceros molares",
    text: "Valoramos posicion y riesgo de las muelas del juicio para planificar su retiro con enfoque preventivo y recuperacion controlada.",
    image: "/images/doctor-roberto.jpg",
  },
  {
    title: "Manejo de tejidos",
    text: "Procedimientos de encia y tejido blando orientados a salud periodontal, estabilidad y mejor pronostico funcional.",
    image: "/images/hero-room.jpg",
  },
];

const POST_OP_TIPS = [
  "Aplicar frio local intermitente durante las primeras horas para reducir inflamacion.",
  "Evitar alimentos duros y bebidas muy calientes durante la fase inicial de recuperacion.",
  "Seguir de forma estricta la medicacion y controles indicados por el especialista.",
];

export default function CirugiasPage() {
  return (
    <>
      <SiteNav activePath="/especialidades" />

      <main className="editorial-surface">
        <section className="section-frame relative pt-36 pb-18 md:pt-44 md:pb-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-2">
            <div className="reveal">
              <div className="eyebrow mb-4 text-[11px] font-semibold uppercase">Especialidad</div>
              <div className="mb-8 h-px w-12 bg-accent-purple/50" />
              <h1 className="font-headline mb-6 text-4xl leading-tight font-light text-on-background md:text-5xl">
                Cirugias
              </h1>
              <p className="text-on-surface-variant mb-5 text-base leading-relaxed font-light">
                En cirugia oral resolvemos casos que requieren intervencion especializada para recuperar salud, funcion y confort del sistema bucal.
              </p>
              <p className="text-on-surface-variant mb-5 text-base leading-relaxed font-light">
                Cada procedimiento se planifica con evaluacion clinica y radiografica para actuar con precision, seguridad y minimo trauma.
              </p>
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                Nuestro equipo te acompana antes, durante y despues de la cirugia para asegurar una recuperacion estable y controlada.
              </p>
            </div>
            <div className="hero-image-wrap reveal reveal-d2 aspect-[4/5] overflow-hidden bg-surface-container">
              <img src="/images/cirugia.jpg" alt="Procedimiento de cirugia oral" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="section-frame bg-white/75 py-18 md:py-22">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-10">
              <h2 className="font-headline mb-3 text-3xl font-light text-on-background">Procedimientos frecuentes</h2>
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

        <section className="section-frame bg-surface-container/40 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <article className="reveal rounded-2xl border border-outline/60 bg-white p-7 md:p-9">
              <h2 className="font-headline mb-4 text-3xl font-light text-on-background">Cuidados despues de una cirugia oral</h2>
              <div className="space-y-3">
                {POST_OP_TIPS.map((tip) => (
                  <p key={tip} className="text-on-surface-variant text-sm leading-relaxed font-light">
                    {tip}
                  </p>
                ))}
              </div>
            </article>

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
