import Link from "next/link";
import { SiteFooter, SiteNav } from "../../components/shared/SiteChrome";

const TREATMENTS = [
  {
    title: "Blanqueamiento Dental",
    text: "Procedimiento estético para aclarar el color de los dientes y reducir manchas por café, vino, té, tabaco o envejecimiento natural.",
    image: "/images/smile-design.jpg",
  },
  {
    title: "Diseño de Sonrisa Digital",
    text: "Técnica avanzada que planifica y visualiza resultados antes del tratamiento, considerando forma, tamaño, posición dental y armonía facial.",
    image: "/images/ortodoncia.jpg",
  },
  {
    title: "Carillas",
    text: "Láminas finas de porcelana o resina que se adhieren al frente del diente para mejorar color, forma y proporción de la sonrisa.",
    image: "/images/pediatria.jpg",
  },
];

const VENEER_CASES = [
  "Manchas o decoloraciones que no responden al blanqueamiento.",
  "Dientes desgastados por el paso del tiempo o por uso.",
  "Dientes desiguales o desalineados cuando se busca una solución estética conservadora.",
];

export default function EsteticaDentalPage() {
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
                Estética Dental
              </h1>
              <p className="text-on-surface-variant mb-5 text-base leading-relaxed font-light">
                Combinamos ciencia clínica y diseño para armonizar tu sonrisa. Nuestros protocolos estéticos buscan resultados naturales, funcionales y personalizados.
              </p>
              <p className="text-on-surface-variant mb-5 text-base leading-relaxed font-light">
                El 48% de las personas considera que la sonrisa es la característica más memorable al conocer a alguien, según la Academia Americana de Odontología Cosmética.
              </p>
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                Una sonrisa saludable no solo impacta la apariencia: la mala salud bucal puede relacionarse con afecciones sistémicas y disminuir la calidad de vida.
              </p>
            </div>
            <div className="hero-image-wrap reveal reveal-d2 aspect-[4/5] overflow-hidden bg-surface-container">
              <img src="/images/smile-design.jpg" alt="Sonrisa" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="section-frame bg-white/75 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-12 md:mb-14">
              <h2 className="font-headline mb-3 text-3xl font-light text-on-background">Tratamientos dentales de Felizdent</h2>
              <div className="h-px w-12 bg-primary" />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {TREATMENTS.map((item, index) => (
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
              <h2 className="font-headline mb-4 text-3xl font-light text-on-background">¿Cuándo son necesarias las carillas dentales?</h2>
              <div className="space-y-3">
                {VENEER_CASES.map((caseItem) => (
                  <p key={caseItem} className="text-on-surface-variant text-sm leading-relaxed font-light">
                    {caseItem}
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
