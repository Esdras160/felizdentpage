import Link from "next/link";
import { SiteFooter, SiteNav } from "../../components/shared/SiteChrome";

const TREATMENTS = [
  {
    title: "Apicoformación",
    text: "Se realiza cuando la raíz de un diente no ha terminado de desarrollarse, lo que puede ocurrir en dientes jóvenes o inmaduros. La apicoformación estimula el desarrollo de la raíz y su cierre.",
    image: "/images/especialidades/endodoncia/endoncia1.jpg",
    imageLeft: false,
  },
  {
    title: "Unirradiculares y multirradiculares",
    text: "Los dientes pueden tener uno o varios conductos radiculares. Los tratamientos endodónticos se clasifican según la cantidad de raíces y conductos: unirradiculares para dientes con un solo conducto (como los dientes anteriores) y multirradiculares para dientes con múltiples conductos (como los molares).",
    image: "/images/especialidades/endodoncia/endodoncia2.png",
    imageLeft: true,
  },
  {
    title: "Apicectomías",
    text: "Es una cirugía que se realiza cuando el tratamiento de conductos convencional no ha sido suficiente para eliminar la infección. Se extirpa la punta de la raíz y el tejido circundante para eliminar la fuente de la infección.",
    image: "/images/endodoncia.jpg",
    imageLeft: false,
  },
];

const CAUSES = [
  "Caries profundas.",
  "Traumatismos o fracturas del diente.",
  "Procedimientos dentales repetidos en el mismo diente.",
  "Grietas o fisuras.",
];

const SYMPTOMS = [
  "Dolor intenso al masticar o al presionar el diente.",
  "Sensibilidad prolongada al calor o al frío.",
  "Decoloración del diente.",
  "Hinchazón en las encías cercanas al diente afectado.",
  "Presencia de una fístula (pequeña lesión en las encías por donde drena pus).",
];

export default function EndodonciaPage() {
  return (
    <>
      <SiteNav activePath="/especialidades" />

      <main className="editorial-surface">
        <section className="section-frame relative pt-36 pb-16 md:pt-44 md:pb-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-2">
            <div className="reveal">
              <div className="eyebrow mb-4 text-[11px] font-semibold uppercase">Especialidad</div>
              <div className="mb-8 h-px w-12 bg-accent-purple/50" />
              <h1 className="font-headline mb-6 text-4xl leading-tight font-light text-on-background md:text-5xl">
                Endodoncia
              </h1>
              <p className="text-on-surface-variant mb-5 text-base leading-relaxed font-light">
                Recuperar la salud dental y eliminar el dolor es posible gracias al tratamiento de endodoncia.
              </p>
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                Tener dientes dañados o con infección no solo genera molestias, sino que puede afectar gravemente nuestra calidad de vida. El dolor constante, la dificultad para masticar o hablar, y la preocupación por perder un diente pueden impactar en nuestra seguridad y autoestima. Una endodoncia permite salvar un diente natural, eliminando el dolor y la infección desde la raíz.
              </p>
            </div>
            <div className="hero-image-wrap reveal reveal-d2 aspect-[5/4] overflow-hidden bg-surface-container">
              <img
                src="/images/especialidades/endodoncia/endodoncia2.png"
                alt="Procedimiento de endodoncia"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section-frame bg-white/75 py-16 md:py-22">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div className="reveal order-2 lg:order-1">
                <h2 className="font-headline mb-4 text-3xl font-light text-on-background">¿Qué es la endodoncia?</h2>
                <div className="mb-6 h-px w-12 bg-primary" />
                <p className="text-on-surface-variant mb-6 text-base leading-relaxed font-light">
                  La endodoncia se ocupa de preservar un diente que ha sido gravemente dañado o infectado. La pulpa dental puede inflamarse o infectarse debido a varias razones:
                </p>
                <ul className="space-y-3">
                  {CAUSES.map((cause) => (
                    <li key={cause} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-on-surface-variant text-sm leading-relaxed font-light">{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reveal reveal-d2 order-1 lg:order-2">
                <div className="hero-image-wrap aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    src="/images/especialidades/endodoncia/endoncia1.jpg"
                    alt="Imagen clínica de endodoncia"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-frame py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal rounded-2xl border border-primary/20 bg-surface-container px-8 py-10 text-center">
              <p className="font-headline text-2xl font-light text-on-background md:text-3xl">
                ¡Tu salud dental es nuestra prioridad en Felizdent!
              </p>
            </div>
          </div>
        </section>

        <section className="section-frame bg-surface-container/40 py-16 md:py-22">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-10">
              <h2 className="font-headline mb-3 text-3xl font-light text-on-background">
                ¿Cuándo es necesaria una endodoncia?
              </h2>
              <div className="h-px w-12 bg-primary" />
            </div>

            <div className="reveal reveal-d1 faq-card">
              <details open>
                <summary className="faq-summary py-2">
                  Síntomas que pueden indicar la necesidad de una endodoncia
                  <span className="material-symbols-outlined text-primary text-base">Conocer más</span>
                </summary>
                <div className="details-body mt-4 border-t border-outline/40 pt-4">
                  <ul className="space-y-3">
                    {SYMPTOMS.map((symptom) => (
                      <li key={symptom} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-on-surface-variant text-sm leading-relaxed font-light">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="section-frame bg-white/75 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-12">
              <div className="eyebrow mb-3 text-[11px] font-semibold uppercase">Felizdent</div>
              <h2 className="font-headline mb-3 text-3xl font-light text-on-background">Tratamientos dentales de FelizDent</h2>
              <div className="h-px w-12 bg-primary" />
            </div>

            <div className="space-y-16">
              {TREATMENTS.map((item, index) => (
                <article
                  key={item.title}
                  className={`reveal ${index === 0 ? "reveal-d1" : index === 1 ? "reveal-d2" : "reveal-d3"} grid grid-cols-1 items-center gap-8 lg:grid-cols-2`}
                >
                  <div className={item.imageLeft ? "order-1 lg:order-2" : "order-1"}>
                    <h3 className="font-headline mb-4 text-2xl font-light text-on-background">{item.title}</h3>
                    <div className="mb-5 h-px w-10 bg-accent-purple/50" />
                    <p className="text-on-surface-variant text-base leading-relaxed font-light">{item.text}</p>
                  </div>
                  <div className={item.imageLeft ? "order-2 lg:order-1" : "order-2"}>
                    <div className="hero-image-wrap aspect-[4/3] overflow-hidden bg-surface-container">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame bg-surface-container/40 py-14 md:py-18">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <Link href="/especialidades" className="text-primary text-xs font-semibold tracking-[0.18em] uppercase hover:opacity-80">
              Volver a especialidades
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
