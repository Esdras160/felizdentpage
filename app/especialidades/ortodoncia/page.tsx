import Link from "next/link";
import { SiteFooter, SiteNav } from "../../components/shared/SiteChrome";

const TREATMENT_OPTIONS = [
  {
    title: "Ortodoncia preventiva",
    text: "Evaluacion temprana para guiar crecimiento maxilar y detectar habitos que puedan afectar alineacion y mordida en niños.",
    image: "/images/pediatria.jpg",
  },
  {
    title: "Brackets convencionales",
    text: "Sistema eficaz para corregir apiñamiento, espacios y maloclusiones complejas con control biomecanico continuo.",
    image: "/images/ortodoncia.jpg",
  },
  {
    title: "Alineadores esteticos",
    text: "Alternativa discreta y removible para casos seleccionados, con planificacion digital y seguimiento profesional.",
    image: "/images/smile-design.jpg",
  },
];

const WHY_IT_MATTERS = [
  "Una mordida equilibrada facilita higiene bucal y reduce riesgo de desgaste prematuro dental.",
  "La correccion de posicion dental mejora funcion al masticar, hablar y distribuir fuerzas oclusales.",
  "Un tratamiento ortodontico planificado favorece estabilidad a largo plazo y armonia facial.",
];

export default function OrtodonciaPage() {
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
                Ortodoncia
              </h1>
              <p className="text-on-surface-variant mb-5 text-base leading-relaxed font-light">
                La Ortodoncia corrige la posicion de dientes y mordida para mejorar funcion, salud oral y estetica de manera integral.
              </p>
              <p className="text-on-surface-variant mb-5 text-base leading-relaxed font-light">
                Atendemos niños, adolescentes y adultos con diagnóstico personalizado para definir el plan más adecuado en cada etapa.
              </p>
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                El seguimiento periódico permite ajustar el tratamiento y asegurar resultados estables con una sonrisa funcional y armónica.
              </p>
            </div>
            <div className="hero-image-wrap reveal reveal-d2 aspect-[4/5] overflow-hidden bg-surface-container">
              <img src="/images/ortodoncia.jpg" alt="Tratamiento de ortodoncia" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="section-frame bg-white/75 py-18 md:py-22">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-10">
              <h2 className="font-headline mb-3 text-3xl font-light text-on-background">Opciones de tratamiento</h2>
              <div className="h-px w-12 bg-primary" />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {TREATMENT_OPTIONS.map((item, index) => (
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
              <h2 className="font-headline mb-4 text-3xl font-light text-on-background">Por que iniciar un tratamiento ortodontico?</h2>
              <div className="space-y-3">
                {WHY_IT_MATTERS.map((item) => (
                  <p key={item} className="text-on-surface-variant text-sm leading-relaxed font-light">
                    {item}
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
