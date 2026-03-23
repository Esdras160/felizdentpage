import Link from "next/link";
import { Icon, SiteFooter, SiteNav } from "../../components/shared/SiteChrome";

const FAQ = [
  {
    question: "Que es la periodoncia?",
    answer:
      "Es la especialidad odontologica dedicada a prevenir, diagnosticar y tratar enfermedades que afectan encias y tejidos de soporte de los dientes.",
  },
  {
    question: "Que es la gingivitis?",
    answer:
      "Es una inflamacion inicial de las encias causada por acumulacion de placa bacteriana. Puede ser reversible si se trata de forma oportuna.",
  },
  {
    question: "Que es la periodontitis?",
    answer:
      "Es la fase avanzada de enfermedad periodontal. Si no se controla, puede causar dano en hueso y perdida de piezas dentales.",
  },
];

export default function PeriodonciaPage() {
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
                Periodoncia
              </h1>
              <p className="text-on-surface-variant mb-5 text-base leading-relaxed font-light">
                Cuida la salud de tus encias con tratamientos especializados enfocados en prevenir y tratar enfermedades periodontales para mantener una sonrisa saludable.
              </p>
              <p className="text-on-surface-variant mb-5 text-base leading-relaxed font-light">
                En Felizdent contamos con especialistas altamente capacitados para periodontitis y gingivitis. Segun estudios, mas del 80% de personas mayores de 35 años presenta algun problema gingival.
              </p>
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                Si no se trata a tiempo, la enfermedad periodontal puede avanzar hasta la perdida de dientes. Actuar en etapas tempranas marca la diferencia.
              </p>
            </div>
            <div className="hero-image-wrap reveal reveal-d2 aspect-[4/5] overflow-hidden bg-surface-container">
              <img src="/images/periodoncia.jpg" alt="Dentista trabajando" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="section-frame bg-white/75 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-10">
              <h2 className="font-headline mb-3 text-3xl font-light text-on-background">Tu salud dental es nuestra prioridad en Felizdent</h2>
              <div className="h-px w-12 bg-primary" />
            </div>

            <div className="space-y-4">
              {FAQ.map((item, index) => (
                <details key={item.question} className={`faq-card reveal ${index === 0 ? "reveal-d1" : index === 1 ? "reveal-d2" : "reveal-d3"}`}>
                  <summary className="faq-summary">
                    <span>{item.question}</span>
                    <Icon name="plus" className="size-4 text-primary" />
                  </summary>
                  <p className="faq-answer">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame bg-surface-container/40 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <article className="reveal rounded-2xl border border-outline/60 bg-white p-7 md:p-9">
              <h2 className="font-headline mb-4 text-3xl font-light text-on-background">Como tener las encias siempre sanas?</h2>
              <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                Mantener una higiene bucodental diaria correcta es clave. La tecnica de cepillado es importante, pero no suficiente por si sola para controlar la acumulacion bacteriana. Por ello se recomienda acudir periodicamente a revision profesional para valorar dientes y encias y realizar tratamientos preventivos o terapeuticos cuando se requiera.
              </p>
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
