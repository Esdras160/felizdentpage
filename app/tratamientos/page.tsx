import { SiteFooter, SiteNav } from "../components/shared/SiteChrome";

type Treatment = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

const TREATMENTS: Treatment[] = [
  {
    title: "Limpiezas Dentales",
    subtitle: "Limpiezas Dentales",
    description:
      "Procedimiento preventivo que elimina placa bacteriana, sarro y manchas superficiales. Ayuda a prevenir caries y enfermedades periodontales.",
    image: "/images/periodoncia.jpg",
  },
  {
    title: "Resinas Dentales",
    subtitle: "Resinas",
    description:
      "Materiales del color del diente natural para restaurar caries, fracturas o mejorar estetica en cavidades pequenas y medianas.",
    image: "/images/endodoncia.jpg",
  },
  {
    title: "Extracciones Dentales",
    subtitle: "Extracciones",
    description:
      "Remocion de dientes no restaurables por caries extensa, fractura o infeccion. Tambien se indica en casos de dientes retenidos o apinamiento.",
    image: "/images/cirugia.jpg",
  },
  {
    title: "Protesis Fijas",
    subtitle: "Protesis",
    description:
      "Restauraciones permanentes para reemplazar dientes perdidos, cementadas o fijadas de forma segura para estabilidad funcional.",
    image: "/images/smile-design.jpg",
  },
  {
    title: "Protesis Removibles",
    subtitle: "Protesis Removibles",
    description:
      "Dispositivos que pueden retirarse y colocarse a voluntad para recuperar funcion masticatoria y mejorar estetica en perdida parcial o total de dientes.",
    image: "/images/ortodoncia.jpg",
  },
  {
    title: "Placas Totales",
    subtitle: "Placas totales",
    description:
      "Dentaduras completas removibles para reemplazar todos los dientes de una arcada. Elaboradas en acrilico y ajustadas a la encia del paciente.",
    image: "/images/hero-room.jpg",
  },
];

export default function TratamientosPage() {
  return (
    <>
      <SiteNav activePath="/tratamientos" />

      <main className="editorial-surface">
        <section className="section-frame relative pt-36 pb-20 md:pt-44 md:pb-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-16 md:mb-20">
              <div className="eyebrow mb-4 text-[11px] font-semibold uppercase">Tratamientos Generales</div>
              <div className="mb-8 h-px w-12 bg-accent-purple/50" />
              <h1 className="font-headline mb-5 text-4xl leading-tight font-light text-on-background md:text-5xl">
                Contamos con diferentes procedimientos
              </h1>
              <p className="text-on-surface-variant max-w-2xl text-base leading-relaxed font-light">
                Aplicamos protocolos clinicos personalizados para restauracion, prevencion y rehabilitacion oral en cada etapa de tratamiento.
              </p>
            </div>

            <div className="divide-y divide-outline/40">
              {TREATMENTS.map((item, index) => (
                <div key={item.title} className={`treatment-row reveal ${index % 2 === 0 ? "reveal-d1" : "reveal-d2"}`}>
                  <div className="treatment-num"><span className="text-accent-purple">0{index + 1}</span></div>
                  <div className="treatment-body">
                    <h2 className="treatment-title">{item.title}</h2>
                    <p className="treatment-desc">{item.description}</p>
                  </div>
                  <div className="treatment-tag">{item.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame border-outline/30 border-t bg-white/75 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <blockquote className="reveal mb-16">
              <p className="font-headline text-center text-2xl font-light text-on-background md:text-3xl">
                &ldquo;Cuidar tu sonrisa hoy, es garantizar tu salud mañana.&rdquo;
              </p>
              <div className="mx-auto mt-6 h-px w-12 bg-accent-purple/40" />
            </blockquote>
            <div className="reveal text-center">
              <p className="text-on-surface-variant mx-auto mb-6 max-w-lg text-sm font-light leading-relaxed">
                Agenda tu cita para una valoracion personalizada y conoce cual es el tratamiento ideal para ti.
              </p>
              <a
                href="https://wa.me/5212221526613?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Agendar Cita
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
