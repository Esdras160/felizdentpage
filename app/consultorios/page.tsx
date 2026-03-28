import { SiteFooter, SiteNav } from "../components/shared/SiteChrome";

type Clinic = {
  name: string;
  address: string;
  phone: string;
  mapsUrl: string;
  mapEmbed: string;
  isAppointmentOnly?: boolean;
  note?: string;
  image: string;
};

const CLINICS: Clinic[] = [
  {
    name: "Felizdent clínica dental San Lorenzo Ometepec",
    address: "Av. Reforma 153, Barrio de Jesus, 75615 San Lorenzo Ometepec, Pue.",
    phone: "+52 1 222 152 6613",
    mapsUrl:
      "https://maps.google.com/?q=Av.+Reforma+153,+Barrio+de+Jesús,+75615+San+Lorenzo+Ometepec,+Pue.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17961.06298242009!2d-97.86873282089783!3d18.84940874728674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cf88b8922ed7d7%3A0xc2f1398865f4100f!2sFelizdent%20Clinica%20Dental!5e0!3m2!1ses!2smx!4v1725846544334!5m2!1ses!2smx",
    image: "/images/consultorios/consultorioSanLorenzo.jpg",
  },
  {
    name: "Felizdent clínica dental Tecamachalco",
    address: "C. 13 Ote. 206, San Nicolas, 75486 Tecamachalco, Pue.",
    phone: "+52 1 249 243 6544",
    mapsUrl:
      "https://maps.google.com/?q=C.+13+Ote.+206,+San+Nicolás,+75486+Tecamachalco,+Pue.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120833.94912126148!2d-97.87868337598827!3d18.8399593403952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c5635ba176a8e7%3A0xa72fb7d005818733!2sClinica%20Dental%20Felizdent!5e0!3m2!1ses!2smx!4v1725917672340!5m2!1ses!2smx",
    image: "/images/consultorios/consultorioTecamachalco.jpg",
  },
  {
    name: "Felizdent clínica dental Los Reyes de Juarez",
    address: "Leona Vicario 60, El Alto, 75400 Los Reyes de Juarez, Pue.",
    phone: "+52 1 222 139 7322",
    mapsUrl:
      "https://maps.google.com/?q=Leona+Vicario+60,+El+Alto,+75400+Los+Reyes+de+Juárez,+Pue.",
    mapEmbed:
      "https://www.google.com/maps?q=Avenida+Hidalgo+210,+Los+Reyes+de+Juárez,+Puebla&output=embed",
    image: "/images/consultorios/consultorioLosReyes.jpg",
  },
  {
    name: "Consulta a Previa Cita en Puebla",
    address: "Leona Vicario 60, El Alto, 75400 Los Reyes de Juarez, Pue.",
    phone: "+52 1 249 112 9401",
    mapsUrl: "https://maps.google.com/?q=Leona+Vicario+60,+El+Alto,+75400+Los+Reyes+de+Juárez,+Pue.",
    mapEmbed:
      "https://www.google.com/maps?q=Avenida+Hidalgo+210,+Los+Reyes+de+Juárez,+Puebla&output=embed",
    isAppointmentOnly: true,
    note: "Comunicate:",
    image: "/images/consultorios/consultorioLosReyes.jpg",
  },
];

function MapPinIcon() {
  return (
    <svg className="inline-block shrink-0" fill="none" viewBox="0 0 24 24" width="18" height="18">
      <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
      <circle cx="12" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="inline-block shrink-0" fill="none" viewBox="0 0 24 24" width="18" height="18">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="inline-block shrink-0" fill="none" viewBox="0 0 24 24" width="14" height="14">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export default function ConsultoriosPage() {
  return (
    <>
      <SiteNav activePath="/consultorios" />

      <main className="editorial-surface">
        <section className="section-frame relative pt-36 pb-20 md:pt-44 md:pb-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-16 md:mb-20">
              <div className="eyebrow mb-4 text-[11px] font-semibold uppercase">Ubicaciones</div>
              <div className="mb-8 h-px w-12 bg-accent-purple/50" />
              <h1 className="font-headline mb-5 text-4xl leading-tight font-light tracking-tight text-on-background md:text-5xl">
                Consultorios
              </h1>
              <p className="text-on-surface-variant max-w-2xl text-base leading-relaxed font-light">
                Encuentra el consultorio Felizdent más cercano a ti. Contamos con tres sucursales y servicio en la ciudad de Puebla solicitando tu cita previa.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {CLINICS.map((clinic, index) => (
                <article
                  key={clinic.name}
                  className={`clinic-card reveal ${index === 0 ? "reveal-d1" : index === 1 ? "reveal-d2" : index === 2 ? "reveal-d3" : "reveal-d4"} ${clinic.isAppointmentOnly ? "clinic-card--accent" : ""}`}
                >
                  {clinic.isAppointmentOnly ? (
                    <div className="clinic-promo-body">
                      <div className="clinic-badge clinic-badge--inline">Previa Cita</div>
                      <h2 className="clinic-name">Ciudad de Puebla "Cita previa"</h2>

                      <div className="clinic-detail">
                      </div>

                      <div className="clinic-detail">
                        <span className="clinic-icon text-primary">
                          <PhoneIcon />
                        </span>
                        <a
                          href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                          className="text-on-surface text-sm font-medium hover:text-primary transition-colors"
                        >
                          {clinic.phone}
                        </a>
                      </div>

                      <a
                        href="https://wa.me/5212491129401?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20en%20Puebla"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clinic-whatsapp-link"
                      >
                        Agendar por WhatsApp
                      </a>
                    </div>
                  ) : (
                    <div className="clinic-layout">
                      <div className="clinic-main">
                        <div className="clinic-image-wrap">
                          <img
                            src={clinic.image}
                            alt={`Imagen de la clinica ${clinic.name}`}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="clinic-body">
                          <h2 className="clinic-name">{clinic.name}</h2>

                          <div className="clinic-detail">
                            <span className="clinic-icon text-primary">
                              <MapPinIcon />
                            </span>
                            <span className="text-on-surface-variant text-sm leading-relaxed font-light">
                              {clinic.address}
                            </span>
                          </div>

                          <div className="clinic-detail">
                            <span className="clinic-icon text-primary">
                              <PhoneIcon />
                            </span>
                            <a
                              href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                              className="text-on-surface text-sm font-medium hover:text-primary transition-colors"
                            >
                              {clinic.phone}
                            </a>
                          </div>

                          <a
                            href={clinic.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="clinic-maps-link"
                          >
                            <span>Ver en Google Maps</span>
                            <ExternalLinkIcon />
                          </a>
                        </div>
                      </div>

                      <div className="clinic-map-embed clinic-map-embed--side">
                        <iframe
                          src={clinic.mapEmbed}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Mapa de ${clinic.name}`}
                        />
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame border-outline/30 border-t bg-white/75 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal text-center">
              <h2 className="font-headline mb-4 text-2xl font-light text-on-background md:text-3xl">¿Necesitas una cita?</h2>
              <p className="text-on-surface-variant mx-auto mb-8 max-w-md text-sm font-light leading-relaxed">
                Comunicate con nosotros por WhatsApp y agenda tu consulta en la sucursal más cercana.
              </p>
              <a
                href="https://wa.me/5212221526613?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Agendar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
