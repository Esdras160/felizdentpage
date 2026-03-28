import Link from "next/link";
import { SiteFooter, SiteNav } from "../../components/shared/SiteChrome";

const FACTS = [
  "Las visitas tempranas al odontopediatra permiten educar a niños y padres sobre higiene bucal correcta.",
  "Acostumbrar a los niños a consulta desde pequenos reduce ansiedad y miedo al dentista en etapas posteriores.",
  "Los dientes de leche mantienen espacio para la erupcion correcta de dientes permanentes y favorecen la alineacion futura.",
];

export default function OdontopediatriaPage() {
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
                Odontopediatria
              </h1>
              <p className="text-on-surface-variant mb-6 text-base leading-relaxed font-light">
                Cuida la salud dental de tus hijos con tratamientos especializados en odontopediatria, enfocados en prevenir y tratar problemas dentales desde temprana edad para asegurar sonrisas saludables en el futuro.
              </p>
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                Las visitas tempranas ayudan a detectar y prevenir caries en dientes de leche, piezas fundamentales para guiar la erupcion correcta de los dientes permanentes.
              </p>
            </div>
            <div className="hero-image-wrap reveal reveal-d2 aspect-[4/5] overflow-hidden bg-surface-container">
              <img src="/images/especialidades/odontopediatria/odonto3.png" alt="Odontopediatria" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="section-frame bg-white/75 py-18 md:py-22">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:px-8 lg:grid-cols-3">
            <article className="specialty-panel reveal">
              <div className="specialty-panel-image">
                <img src="/images/especialidades/odontopediatria/odontopediatria2.jpg" alt="Dentista trabajando" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="font-headline mb-3 text-2xl font-light text-on-background">¿Qué es la Odontopediatria?</h2>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                  La Odontopediatria es una rama que cuida la salud bucodental durante infancia y adolescencia. El cuidado inicia desde la lactancia materna y la erupcion dental.
                </p>
              </div>
            </article>

            <article className="specialty-panel reveal reveal-d2">
              <div className="specialty-panel-image">
                <img src="/images/especialidades/odontopediatria/ondontopediatria1.jpg" alt="Papa con su hijo" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="font-headline mb-3 text-2xl font-light text-on-background">Prevención de caries</h2>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                  Entre el 60% y 90% de niños en edad escolar presentan caries, según la OMS. Las revisiones periódicas ayudan a prevenir caries, maloclusiones y enfermedades de encías.
                </p>
              </div>
            </article>

            <article className="specialty-panel reveal reveal-d3">
              <div className="specialty-panel-image">
                <img src="/images/especialidades/odontopediatria/odonto3.png" alt="Consultorio dental" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="font-headline mb-3 text-2xl font-light text-on-background">Importancia de las citas tempranas</h2>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                  Cada cita temprana fortalece hábitos de higiene oral, mejora la relación del niño con el consultorio y crea bases para una salud bucal estable a largo plazo.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section-frame bg-surface-container/40 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-10">
              <h2 className="font-headline mb-3 text-3xl font-light text-on-background">3 Datos Felizdent</h2>
              <div className="h-px w-12 bg-primary" />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {FACTS.map((fact, index) => (
                <article key={fact} className={`fact-chip reveal ${index === 0 ? "reveal-d1" : index === 1 ? "reveal-d2" : "reveal-d3"}`}>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-light">{fact}</p>
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
