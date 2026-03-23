import Link from "next/link";
import { SiteFooter, SiteNav } from "../../components/shared/SiteChrome";

const BENEFITS = [
  {
    title: "Alivio del dolor",
    text: "El tratamiento de conducto elimina la infeccion interna del diente y reduce molestias agudas causadas por inflamacion pulpar.",
    image: "/images/endodoncia.jpg",
  },
  {
    title: "Conservacion dental",
    text: "Siempre que es posible, priorizamos salvar la pieza natural para mantener funcion masticatoria y estabilidad oclusal.",
    image: "/images/doctor-alejandro.jpg",
  },
  {
    title: "Recuperacion funcional",
    text: "Despues del sellado del conducto, planificamos la reconstruccion para devolver resistencia y comodidad al diente tratado.",
    image: "/images/hero-room.jpg",
  },
];

const ALERT_SIGNS = [
  "Dolor intenso al masticar o sensibilidad prolongada al frio y calor.",
  "Inflamacion de encia cercana al diente y cambios en coloracion de la pieza.",
  "Infecciones recurrentes o abscesos en la zona dental comprometida.",
];

export default function EndodonciaPage() {
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
                Endodoncia
              </h1>
              <p className="text-on-surface-variant mb-5 text-base leading-relaxed font-light">
                La Endodoncia trata el interior del diente cuando la pulpa se inflama o infecta. Nuestro objetivo es conservar tu pieza dental natural con procedimientos precisos y seguros.
              </p>
              <p className="text-on-surface-variant mb-5 text-base leading-relaxed font-light">
                Un diagnostico temprano evita complicaciones mayores y permite recuperar funcion, estetica y confort en menos tiempo.
              </p>
              <p className="text-on-surface-variant text-base leading-relaxed font-light">
                En Felizdent usamos protocolos clinicos actualizados para controlar el dolor, limpiar los conductos y sellar adecuadamente cada caso.
              </p>
            </div>
            <div className="hero-image-wrap reveal reveal-d2 aspect-[4/5] overflow-hidden bg-surface-container">
              <img src="/images/endodoncia.jpg" alt="Procedimiento de endodoncia" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="section-frame bg-white/75 py-18 md:py-22">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-10">
              <h2 className="font-headline mb-3 text-3xl font-light text-on-background">Beneficios del tratamiento</h2>
              <div className="h-px w-12 bg-primary" />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {BENEFITS.map((item, index) => (
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
              <h2 className="font-headline mb-4 text-3xl font-light text-on-background">Senales para valorar una endodoncia</h2>
              <div className="space-y-3">
                {ALERT_SIGNS.map((signal) => (
                  <p key={signal} className="text-on-surface-variant text-sm leading-relaxed font-light">
                    {signal}
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
