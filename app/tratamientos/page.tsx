import { Icon, IconName, SiteFooter, SiteNav } from "../components/shared/SiteChrome";

type Treatment = {
  title: string;
  subtitle: string;
  description: string;
  icon: IconName;
  indication: string;
  benefits: string[];
  sessions: string;
};

const TREATMENTS: Treatment[] = [
  {
    title: "Limpiezas Dentales",
    subtitle: "Limpiezas Dentales",
    description:
      "Procedimiento preventivo que elimina placa bacteriana, sarro y manchas superficiales para conservar una salud oral estable.",
    icon: "sparkle",
    indication: "Para adolescentes y adultos con acumulacion de placa",
    benefits: [
      "Reduce riesgo de caries y gingivitis",
      "Mejora el aliento y la higiene diaria",
      "Permite detectar problemas en etapa temprana",
    ],
    sessions: "1 sesion cada 6 meses",
  },
  {
    title: "Resinas Dentales",
    subtitle: "Resinas",
    description:
      "Restauraciones esteticas del color del diente para tratar caries, fracturas pequenas y desgaste en zonas visibles.",
    icon: "technology",
    indication: "Para pacientes con caries pequenas o fracturas leves",
    benefits: [
      "Recupera forma y funcion del diente",
      "Resultado natural y discreto",
      "Procedimiento conservador y rapido",
    ],
    sessions: "1 sesion",
  },
  {
    title: "Extracciones Dentales",
    subtitle: "Extracciones",
    description:
      "Remocion segura de piezas no restaurables por caries avanzada, fractura o infeccion, con enfoque en recuperacion controlada.",
    icon: "plus",
    indication: "Para dientes comprometidos o retenidos",
    benefits: [
      "Alivia dolor e inflamacion persistente",
      "Previene infecciones mayores",
      "Facilita tratamientos de rehabilitacion posteriores",
    ],
    sessions: "1 sesion + control",
  },
  {
    title: "Protesis Fijas",
    subtitle: "Protesis",
    description:
      "Rehabilitaciones permanentes para reemplazar uno o varios dientes con estructuras estables, funcionales y de apariencia natural.",
    icon: "verified",
    indication: "Para pacientes que buscan solucion estable a largo plazo",
    benefits: [
      "Mayor comodidad al masticar y hablar",
      "Ajuste firme sin retiro diario",
      "Mejora la armonia de la sonrisa",
    ],
    sessions: "2 a 4 sesiones",
  },
  {
    title: "Protesis Removibles",
    subtitle: "Protesis Removibles",
    description:
      "Dispositivos removibles para reemplazar dientes ausentes en perdidas parciales o totales, adaptados a cada paciente.",
    icon: "shield",
    indication: "Para pacientes que requieren una alternativa flexible",
    benefits: [
      "Recupera funcion masticatoria diaria",
      "Solucion accesible y adaptable",
      "Permite ajustes conforme cambian las necesidades",
    ],
    sessions: "2 a 3 sesiones",
  },
  {
    title: "Placas Totales",
    subtitle: "Placas totales",
    description:
      "Dentaduras completas removibles para reemplazar toda una arcada, elaboradas con ajuste personalizado para confort y estabilidad.",
    icon: "smile",
    indication: "Para personas con perdida total de dientes en una arcada",
    benefits: [
      "Mejora la estetica facial y la sonrisa",
      "Facilita masticacion y fonacion",
      "Aporta soporte y confianza al hablar",
    ],
    sessions: "3 a 5 sesiones",
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
                  <div className="treatment-icon-wrap" aria-hidden="true">
                    <Icon className="size-4" name={item.icon} />
                  </div>
                  <div className="treatment-body">
                    <p className="treatment-indication">{item.indication}</p>
                    <h2 className="treatment-title">{item.title}</h2>
                    <p className="treatment-desc">{item.description}</p>
                    <ul className="treatment-benefits">
                      {item.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="treatment-tag">{item.subtitle}</div>
                    <div className="treatment-session-chip">{item.sessions}</div>
                  </div>
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
