import { SiteNav, SiteFooter, Icon, type IconName } from "./components/shared/SiteChrome";

export default function Home() {
  return (
    <>
      <SiteNav activePath="/" />

      <main className="editorial-surface">
        <section className="section-frame relative pt-36 pb-20 md:pt-44 md:pb-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:px-8 lg:grid-cols-2 lg:gap-20">
            <div className="animate-in-up">
              <div className="eyebrow mb-4 text-[11px] font-semibold uppercase">Clínica Dental</div>
              <div className="mb-8 h-px w-12 bg-primary" />
              <h1 className="font-headline mb-8 text-4xl leading-tight font-light tracking-tight text-on-background md:text-5xl">
                <span className="text-primary">Felizdent:</span> <br />
                <span className="font-normal text-accent-purple">Por el gusto de verte sonreir</span>
              </h1>
              <p className="text-on-surface-variant mb-12 max-w-md text-base leading-relaxed font-light">
                Mas de 20 años transformando sonrisas. En Felizdent fusionamos tecnologia de vanguardia con un trato humano excepcional para ofrecerte el cuidado dental que mereces.
              </p>
              <div className="text-secondary flex flex-wrap items-center gap-8 text-xs font-medium tracking-[0.15em] uppercase">
                <span className="flex items-center gap-2">
                  <Icon className="size-5 text-primary" name="verified" />
                  20 Anos de Experiencia
                </span>
                <span className="flex items-center gap-2">
                  <Icon className="size-5 text-accent-purple" name="technology" />
                  Tecnologia Laser
                </span>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/5212221526613?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  Agendar Cita
                </a>
                <a href="/consultorios" className="cta-button-outline">
                  Nuestras Sedes
                </a>
              </div>
            </div>
            <div className="relative animate-in-up-delay">
              <div className="hero-image-wrap bg-surface-container aspect-[4/5] overflow-hidden">
                <img
                  className="h-full w-full object-cover opacity-95"
                  alt="Sala de tratamiento dental moderna"
                  src="/images/mision.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4 md:px-8">
            {[
              { value: "+20", label: "Años de experiencia" },
              { value: "3", label: "Sucursales en Puebla" },
              { value: "+10", label: "Especialistas activos" },
              { value: "+15k", label: "Pacientes atendidos" },
            ].map((stat) => (
              <div key={stat.label} className="reveal text-center">
                <div className="font-headline text-3xl font-light text-primary md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-on-surface-variant">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-frame bg-white/75 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-14 md:mb-16">
              <h2 className="font-headline mb-4 text-3xl font-light text-on-background">Especialidades</h2>
              <p className="text-on-surface-variant max-w-xl font-light">
                Nuestro equipo multidisciplinario utiliza la precision clinica para cada aspecto de su salud bucal.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-5">
              {[
                { id: "pediatria", name: "Odontopediatría", desc: "Cuidado dental especializado para niños en un ambiente seguro y amigable.", image: "/images/pediatria.jpg" },
                { id: "endodoncia", name: "Endodoncia", desc: "Tratamientos de conducto precisos para salvar y restaurar piezas dentales.", image: "/images/endodoncia.jpg" },
                { id: "cirugia", name: "Cirugías", desc: "Procedimientos quirúrgicos orales con tecnología avanzada y experiencia clínica.", image: "/images/cirugia.jpg" },
                { id: "ortodoncia", name: "Ortodoncia", desc: "Alineación perfecta de dientes con sistemas invisibles y tradicionales.", image: "/images/ortodoncia.jpg" },
                { id: "estetica", name: "Estética Dental", desc: "Diseño de sonrisa personalizado con carillas y blanqueamiento avanzado.", image: "/images/smile-design.jpg" },
              ].map((specialty, index) => (
                <div
                  key={specialty.id}
                  className={`specialty-card reveal group relative cursor-pointer overflow-hidden rounded-2xl bg-white h-56 border border-outline/40 transition-all duration-500 ${
                    index === 0 ? "reveal-d1" : 
                    index === 1 ? "reveal-d2" : 
                    index === 2 ? "reveal-d3" : 
                    index === 3 ? "reveal-d4" : 
                    "reveal-d5"
                  }`}
                >
                  {/* Image layer - visible on mobile, fades on desktop hover */}
                  <img
                    src={specialty.image}
                    alt={specialty.name}
                    className="absolute inset-0 h-full w-full object-cover md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100"
                  />

                  {/* Text layer - hidden on mobile, visible on desktop default, hides on hover */}
                  <div className="absolute inset-0 z-20 hidden flex-col items-center justify-center bg-white px-4 py-6 transition-opacity duration-500 group-hover:opacity-0 md:flex">
                    <h3 className="text-center text-lg font-semibold text-primary mb-3">
                      {specialty.name}
                    </h3>
                    <p className="text-center text-sm text-on-surface-variant font-light leading-relaxed">
                      {specialty.desc}
                    </p>
                  </div>

                  {/* Gradient overlay - always visible on mobile, hover-only on desktop */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 py-4 md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100">
                    <h3 className="text-white font-semibold text-base mb-1">
                      {specialty.name}
                    </h3>
                    <p className="text-white/90 text-xs font-light leading-relaxed">
                      {specialty.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame bg-surface-container/40 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-14 text-center md:mb-16">
              <span className="text-accent-purple mb-3 block text-xs font-semibold tracking-[0.3em] uppercase">Equipo Clinico</span>
              <div className="mx-auto mb-6 h-px w-12 bg-accent-purple/40" />
              <h2 className="font-headline mb-3 text-3xl font-light text-on-background">Nuestros Especialistas</h2>
              <p className="text-on-surface-variant mx-auto max-w-md font-light text-sm">Dentistas certificados con formacion de alto nivel y amplia experiencia clinica.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Dra. Yazmin Téllez Bautista",
                  area: "Estomatología y Especialista en Endodoncia",
                  text: "Especialista en alineacion dental avanzada y sistemas invisibles con mas de 15 años de trayectoria.",
                  image: "/images/DoctoraYazInicio.jpg",
                },
                {
                  name: "Dra. Isabel Chávez",
                  area: "Estomatología Pediátrica",
                  text: "Experta en el cuidado dental infantil, creando experiencias positivas y educativas para los mas pequenos.",
                  image: "/images/DoctoraIsabelInicio.jpg",
                },
                {
                  name: "Dra. Bricia Pascuala López López",
                  area: "Estomatología",
                  text: "Rehabilitacion oral compleja y cirugia de implantes con un enfoque en estetica funcional y natural.",
                  image: "/images/DoctoraBrizInicio.jpg",
                },
              ].map((doctor, index) => (
                <article key={doctor.name} className={`specialist-card reveal ${index === 0 ? "reveal-d1" : index === 1 ? "reveal-d2" : "reveal-d3"}`}>
                  <div className="specialist-card-photo-wrap">
                    <div className="specialist-card-photo">
                      <img alt={doctor.name} className="h-full w-full object-cover" src={doctor.image} />
                    </div>
                  </div>
                  <div className="specialist-card-body">
                    <h4 className="font-headline text-lg font-medium text-on-background">{doctor.name}</h4>
                    <span className="specialist-card-area">{doctor.area}</span>
                    <p className="text-on-surface-variant mt-3 text-sm font-light leading-relaxed text-center">{doctor.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame border-outline/30 overflow-hidden border-y py-20 md:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:px-8 lg:grid-cols-2 lg:gap-20">
            <div className="reveal order-2 lg:order-1">
              <h2 className="font-headline mb-8 text-3xl font-light text-on-background">Nuestra Misión</h2>
              <p className="border-primary mb-12 border-l-2 py-2 pl-8 text-xl leading-relaxed font-light text-on-surface italic">
                "Transformar vidas a través de sonrisas saludables y estéticas; mejorando su autoestima, concientizando la importancia de la salud bucal, apoyados de un equipo de especialistas altamente calificados, aplicando innovación tecnológica, trato humano, para ofrecer soluciones integrales, personalizadas y con la confianza de estar en las mejores manos."
              </p>
              <div className="space-y-6">
                <div className="text-on-surface-variant flex items-center gap-4 text-sm font-light">
                  <span className="bg-accent-purple/60 size-2 rounded-full" />
                  Especialistas altamente calificados
                </div>
                <div className="text-on-surface-variant flex items-center gap-4 text-sm font-light">
                  <span className="bg-accent-purple/60 size-2 rounded-full" />
                  Innovación tecnológica y trato humano
                </div>
                <div className="text-on-surface-variant flex items-center gap-4 text-sm font-light">
                  <span className="bg-accent-purple/60 size-2 rounded-full" />
                  Soluciones integrales y personalizadas
                </div>
              </div>
            </div>
            <div className="reveal reveal-d2 order-1 lg:order-2">
              <h2 className="font-headline mb-8 text-3xl font-light text-on-background">Vision 2030</h2>
              <p className="text-on-surface-variant mb-12 text-base leading-relaxed font-light">
                Aspiramos a consolidarnos como lideres en servicios odontologicos integrales y personalizados. Nuestra ruta esta marcada por la innovacion constante y un firme compromiso con la comunidad.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="mb-2 text-xs font-bold tracking-widest text-primary uppercase">Liderazgo</div>
                  <p className="text-on-surface-variant text-sm font-light">Referente nacional en salud integral.</p>
                </div>
                <div>
                  <div className="mb-2 text-xs font-bold tracking-widest text-primary uppercase">Innovacion</div>
                  <p className="text-on-surface-variant text-sm font-light">Pioneros en biotecnologia dental.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-frame bg-white/80 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-14 text-center md:mb-16">
              <span className="text-accent-purple mb-4 block text-xs font-semibold tracking-[0.3em] uppercase">Valores que nos Definen</span>
              <div className="bg-accent-purple/30 mx-auto h-px w-12" />
            </div>
            <div className="grid grid-cols-2 gap-5 text-center md:grid-cols-3 md:gap-8 lg:grid-cols-5">
              {[
                ["ethics", "Etica", "Tratamientos basados en necesidades reales."],
                ["honesty", "Honestidad", "Informacion transparente y diagnosticos claros."],
                ["team", "Equipo", "Comunicacion abierta entre especialistas."],
                ["respect", "Respeto", "Atencion individualizada y tolerante."],
                ["vocation", "Vocacion", "Compromiso activo con el bienestar."],
              ].map(([icon, title, text], index) => (
                <article
                  key={title}
                  className={`value-card reveal rounded-2xl p-5 md:p-6 ${index === 0 ? "reveal-d1" : index === 1 ? "reveal-d2" : index === 2 ? "reveal-d3" : index === 3 ? "reveal-d4" : "reveal-d5"}`}
                >
                  <span className="value-icon-chip mb-4">
                    <Icon className="value-icon size-6 text-accent-purple" name={icon as IconName} />
                  </span>
                  <h4 className="mb-2 text-sm font-semibold tracking-widest uppercase">{title}</h4>
                  <p className="text-on-surface-variant text-[11px] leading-relaxed font-light tracking-wider uppercase">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
