import { SiteFooter, SiteNav } from "../components/shared/SiteChrome";

type VideoTestimonial = {
  id: number;
  title: string;
  embedUrl: string;
};

const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 1,
    title: "Testimonio de resinas",
    embedUrl: "https://www.youtube.com/embed/z-O0b0Xy99Y?start=29",
  },
  {
    id: 2,
    title: "Testimonio de coronas Esteticas",
    embedUrl: "https://www.youtube.com/embed/TLzreW_1fPA",
  },
  {
    id: 3,
    title: "Testimonio Ortodoncia",
    embedUrl: "https://www.youtube.com/embed/L5wEmiVXXUU",
  },
  {
    id: 4,
    title: "Testimonio coronas Dentales",
    embedUrl: "https://www.youtube.com/embed/E4YlZXQGIRU",
  },
  {
    id: 5,
    title: "Testimonio puente fijo 3 unidades",
    embedUrl: "https://www.youtube.com/embed/i8vcT5DTn6M",
  },
];

export default function TestimoniosPage() {
  return (
    <>
      <SiteNav activePath="/testimonios" />

      <main className="editorial-surface">
        <section className="section-frame relative pt-36 pb-20 md:pt-44 md:pb-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-16 md:mb-20">
              <div className="eyebrow mb-4 text-[11px] font-semibold uppercase">Experiencias Reales</div>
              <div className="mb-8 flex gap-3">
                <div className="h-px w-12 bg-primary" />
                <div className="h-px w-6 bg-accent-purple/40" />
              </div>
              <h1 className="font-headline mb-5 text-4xl leading-tight font-light text-on-background md:text-5xl">
                Testimonios
              </h1>
              <p className="text-on-surface-variant max-w-2xl text-base leading-relaxed font-light">
                Conoce la experiencia de nuestros pacientes en diferentes tratamientos. Cada video refleja historias
                reales, resultados visibles y confianza en nuestro equipo.
              </p>
            </div>

            <div className="space-y-6">
              {VIDEO_TESTIMONIALS.map((item, index) => {
                const videoBlock = (
                  <div className="editorial-row-image">
                    <iframe
                      src={item.embedUrl}
                      title={item.title}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                );

                const contentBlock = (
                  <div className="editorial-row-content">
                    <span className="editorial-seq">0{item.id}</span>
                    <div className="mb-3 h-px w-8 bg-primary" />
                    <h2 className="font-headline mb-4 text-2xl font-light text-on-background md:text-3xl">
                      {item.title}
                    </h2>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light max-w-prose">
                      Mira este testimonio para conocer el proceso, el antes y despues, y como mejoro la calidad de
                      vida del paciente.
                    </p>
                  </div>
                );

                return (
                  <article key={item.id} className={`editorial-row reveal ${index % 2 === 0 ? "reveal-d1" : "reveal-d2"}`}>
                    {index % 2 === 0 ? (
                      <>
                        {videoBlock}
                        {contentBlock}
                      </>
                    ) : (
                      <>
                        {contentBlock}
                        {videoBlock}
                      </>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
