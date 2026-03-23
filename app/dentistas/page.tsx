import { SiteFooter, SiteNav } from "../components/shared/SiteChrome";

type DentistProfile = {
  name: string;
  role: string;
  education: string[];
  detailsTitle?: string;
  details?: string[];
  image: string;
  specialty?: string;
  hospital?: string;
  tower?: string;
  consultorio?: string;
  address?: string;
};

const DENTISTS: DentistProfile[] = [
  {
    name: "Dra. Blanca Rodriguez Cortez",
    role: "Cirujano Dentista",
    specialty: "Cirugía Maxilofacial",
    hospital: "Hospital Ángeles Puebla",
    tower: "Torre de Consultorios",
    consultorio: "745",
    address: "Av. Campos Eliseos 3371, México",
    education: [
      "Lic. en Cirujano Dentista, Facultad de Estomatologia, Benemerita Universidad Autonoma de Puebla (1995).",
      "Especialidad en Cirugia Maxilofacial, Hospital Universitario de Puebla, Benemerita Universidad Autonoma de Puebla (1999).",
    ],
    detailsTitle: "Nivel academico",
    details: [
      "Lic. en Cirujano Dentista, Facultad de Estomatologia, Benemerita Universidad Autonoma de Puebla (1995).",
      "Especialidad en Cirugia Maxilofacial, Hospital Universitario de Puebla, Benemerita Universidad Autonoma de Puebla (1999).",
      "Maestria en Ciencias de la Educacion, Instituto de Estudios Universitarios (2020).",
      "Doctorado en Ciencias de la Educacion, Centro de Investigacion Cientifica, Academica y de Postgrado (2024).",
      "Doctorado en Salud Publica, Universidad Contemporanea de las Americas (Acta de examen en proceso de titulacion).",
    ],
    image: "/images/doctor-elena.jpg",
  },
  {
    name: "Dra. Maria Elena Rodriguez Alvarez",
    role: "Estomatología",
    specialty: "Estomatología Pediátrica",
    hospital: "Hospital Ángeles Lindavista",
    tower: "Torre de consultorios",
    consultorio: "330",
    address: "Av. Rio Bamba 939, CDMX",
    education: [
      "Lic. en Estomatologia, Benemerita Universidad Autonoma de Puebla (1998-2002).",
      "Especialidad en Estomatologia Pediatrica, Instituto Nacional de Pediatria, Mexico D.F. (2008-2010).",
    ],
    detailsTitle: "Experiencia",
    details: [
      "2010 a la fecha: Estomatologa Pediatra Clinico en Risu Clinica Dental.",
      "Enero 2011 - Junio 2014: Estomatologa Pediatra Clinico en Hospital Universitario de Puebla.",
      "Junio 2015 - Diciembre 2019: Gestora de Seguro Popular, Regimen Estatal de Proteccion Social en Salud.",
      "Agosto 2021 - Junio 2022: Profesora en CESES (modalidad en linea).",
    ],
    image: "/images/doctor-alejandro.jpg",
  },
  {
    name: "Dra. Isabel Chavez",
    role: "Estomatología",
    specialty: "Estomatología Pediátrica",
    hospital: "Hospital Ángeles Ciudad Juárez",
    tower: "Torre de Consultorios",
    consultorio: "520",
    address: "Av. Campos Eliseos 3371, México",
    education: [
      "Lic. en Estomatologia, Benemerita Universidad Autonoma de Puebla (2002-2006).",
      "Especialidad en Estomatologia Pediatrica, Hospital para el Nino Poblano (2009-2011).",
    ],
    detailsTitle: "Diplomados",
    details: [
      "Diplomado en Investigacion Clinica, Benemerita Universidad Autonoma de Puebla (2009-2010, 240 horas).",
      "Diplomado de Ortopedia Maxilar con Aplicacion Clinica, BUAP Campus Tehuacan (2019-2021).",
      "Diplomado de Actualizacion en Ortopedia y Odontopediatria, Desarrollo Especializado con Nuevas Tecnicas (2021-2022).",
    ],
    image: "/images/doctor-roberto.jpg",
  },
  {
    name: "Dra. Yazmin Tellez Bautista",
    role: "Estomatología",
    specialty: "Endodoncia",
    hospital: "Hospital Ángeles Clínica Londres",
    tower: "Torre Frontera 74",
    consultorio: "720",
    address: "Durango 50, Roma Nte., CDMX",
    education: [
      "Lic. en Estomatologia, Benemerita Universidad Autonoma de Puebla (1998-2003).",
      "Especialidad en Endodoncia, Centro Mexicano en Estomatologia (2009-2011).",
    ],
    detailsTitle: "Diplomados",
    details: [
      "Diplomado de Medicina Interna en Estomatologia, BUAP (2012-2013).",
      "Diplomado en Diagnostico y Tratamientos Basicos Periodontales, BUAP (abril 2015-febrero 2016).",
      "Diplomado en Odontologia Estetica y Restauradora, Colegio Dental del Estado de Mexico (2022).",
      "Diplomado en Cirugia Plastica Periodontal, Colegio de Actualizacion Profesional Tepeaca (2024).",
    ],
    image: "/images/doctor-elena.jpg",
  },
  {
    name: "Dra. Bricia Pascuala Lopez Lopez",
    role: "Estomatología",
    specialty: "Biocosmetica Dental",
    hospital: "Hospital Ángeles Puebla",
    tower: "Torre de Consultorios",
    consultorio: "450",
    address: "Av. Campos Eliseos, México",
    education: [
      "Lic. en Estomatologia, Benemerita Universidad Autonoma de Puebla (2008-2013).",
    ],
    detailsTitle: "Diplomados",
    details: [
      "Diplomado de Medicina Interna en Estomatologia, avalada por BUAP (2019-2020).",
      "Diplomado de Biocosmetica Dental, Colegio de Actualizacion de Tepeaca (octubre 2021-septiembre 2022).",
      "Diplomado en Prostodoncia Total, Colegio de Actualizacion de Tepeaca (noviembre 2022-junio 2023).",
    ],
    image: "/images/doctor-alejandro.jpg",
  },
  {
    name: "Dr. Elio Federico Monterrosas Fuentes",
    role: "Estomatología",
    specialty: "Ortodoncia",
    hospital: "Hospital Ángeles Puebla",
    tower: "Torre de Consultorios",
    consultorio: "280",
    address: "Av. Campos Eliseos, México",
    education: [
      "Lic. en Estomatologia, Benemerita Universidad Autonoma de Puebla (1998-2003).",
      "Especialidad en Ortopedia, Universidad Nacional Autonoma de Mexico (2009-2011).",
    ],
    image: "/images/doctor-roberto.jpg",
  },
  {
    name: "Dr. Jose Angel Perez Benitez",
    role: "Estomatología",
    specialty: "Ortodoncia y Endodoncia",
    hospital: "Hospital Ángeles Puebla",
    tower: "Torre de Consultorios",
    consultorio: "640",
    address: "Av. Campos Eliseos, México",
    education: [
      "Lic. en Estomatologia, Universidad Mexico Americana del Golfo, Puebla (2011-2015).",
      "Especialidad en Endodoncia, Centro Mexicano en Estomatologia (2016-2018).",
    ],
    detailsTitle: "Nivel academico",
    details: [
      "Lic. en Estomatologia, Universidad Mexico Americana del Golfo, Puebla (2011-2015).",
      "Especialidad en Endodoncia, Centro Mexicano en Estomatologia (2016-2018).",
      "Especialidad en Ortodoncia, Centro Universitario Interamericano del Pacifico (2019-2021).",
    ],
    image: "/images/doctor-elena.jpg",
  },
  {
    name: "Dra. Vianey Joaquina Mateo Barrales",
    role: "Estomatología",
    specialty: "Auxiliar Dental",
    hospital: "Hospital Ángeles Puebla",
    tower: "Torre de Consultorios",
    consultorio: "310",
    address: "Av. Campos Eliseos, México",
    education: [
      "Lic. en Estomatologia y Salud, Centro de Investigacion y Estudios Superiores.",
    ],
    detailsTitle: "Experiencia",
    details: [
      "Servicio social en Clinica Particular Dental Dorada como auxiliar dental en diversas areas (2022-2023).",
      "Trabajo en Dental Dorada como auxiliar en endodoncia, ortodoncia, rehabilitacion, cirugia bucal y recepcion (2023-2024).",
    ],
    image: "/images/doctor-alejandro.jpg",
  },
  {
    name: "Dra. Maria Guadalupe Perez Ponce",
    role: "Odontología",
    specialty: "Odontología General",
    hospital: "Hospital Ángeles Puebla",
    tower: "Torre de Consultorios",
    consultorio: "400",
    address: "Av. Campos Eliseos, México",
    education: [
      "Lic. en Odontologia, Centro de Estudios Superiores de Tepeaca (2018-2023).",
    ],
    detailsTitle: "Experiencia",
    details: [
      "OPPSS en Centro de Estudios Superiores de Tepeaca.",
      "Uso de aparatologia de rayos X, profilaxis, educacion de higiene oral y restauraciones esteticas.",
    ],
    image: "/images/doctor-roberto.jpg",
  },
  {
    name: "Dra. Aylin Zayagos Fernandez",
    role: "Estomatología",
    specialty: "Odontología General",
    hospital: "Hospital Ángeles Puebla",
    tower: "Torre de Consultorios",
    consultorio: "550",
    address: "Av. Campos Eliseos, México",
    education: [
      "Facultad de Estomatologia, Benemerita Universidad Autonoma de Puebla (2018-2024).",
    ],
    detailsTitle: "Experiencia",
    details: [
      "Servicio social culminado en el periodo enero 2024-febrero 2025 en area de practica profesional con jornadas en diferentes comunidades.",
    ],
    image: "/images/doctor-elena.jpg",
  },
  {
    name: "Dra. Salma Yenifer Rodriguez Camarillo",
    role: "Estomatología",
    specialty: "Odontología General",
    hospital: "Hospital Ángeles Puebla",
    tower: "Torre de Consultorios",
    consultorio: "620",
    address: "Av. Campos Eliseos, México",
    education: [
      "Lic. en Estomatologia, Benemerita Universidad Autonoma de Puebla (2018-2023).",
    ],
    detailsTitle: "Experiencia",
    details: [
      "Servicio social en Clinica de Estomatologia del CRS.",
      "Experiencia en cirugias periodontales y alargamiento de corona (2023-2024).",
    ],
    image: "/images/doctor-alejandro.jpg",
  },
  {
    name: "Dra. Sandra Velazquez",
    role: "Estomatología",
    specialty: "Estomatología Pediátrica",
    hospital: "Hospital Ángeles Puebla",
    tower: "Torre de Consultorios",
    consultorio: "510",
    address: "Av. Campos Eliseos, México",
    education: [
      "Lic. en Estomatologia, Benemerita Universidad Autonoma de Puebla (2013-2019).",
      "Especialidad en Estomatologia Pediatrica, Hospital para el Nino Poblano (2023-2025).",
    ],
    image: "/images/doctor-roberto.jpg",
  },
];

function DentistMetaIcon({ type }: { type: "hospital" | "tower" | "room" | "address" }) {
  if (type === "hospital") {
    return (
      <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
        <path d="M6 21V7.5A1.5 1.5 0 0 1 7.5 6H14v15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="M14 21V4.5A1.5 1.5 0 0 1 15.5 3h2A1.5 1.5 0 0 1 19 4.5V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="M9 10h2M9 13h2M16 8h1.5M16 11h1.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
        <path d="M3.5 21h17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      </svg>
    );
  }

  if (type === "tower") {
    return (
      <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
        <path d="M5 21V6.5A1.5 1.5 0 0 1 6.5 5h11A1.5 1.5 0 0 1 19 6.5V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="M8 9h2M8 12h2M8 15h2M14 9h2M14 12h2M14 15h2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
        <path d="M3.5 21h17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      </svg>
    );
  }

  if (type === "room") {
    return (
      <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
        <path d="M7 21V5.5A1.5 1.5 0 0 1 8.5 4h6A1.5 1.5 0 0 1 16 5.5V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="M9.5 12.5h4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
        <circle cx="13.25" cy="9.5" r="0.85" fill="currentColor" />
        <path d="M4 21h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
      <path d="M12 20.5s5-5.2 5-9a5 5 0 1 0-10 0c0 3.8 5 9 5 9Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      <circle cx="12" cy="11.5" r="1.8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function DentistasPage() {
  return (
    <>
      <SiteNav activePath="/dentistas" />

      <main className="editorial-surface" id="dentistas-top">
        <section className="section-frame relative pt-36 pb-20 md:pt-44 md:pb-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal mb-10">
              <div className="eyebrow mb-4 text-[11px] font-semibold uppercase">Equipo clinico</div>
              <div className="mb-8 h-px w-12 bg-accent-purple/50" />
              <h1 className="font-headline mb-6 text-4xl leading-tight font-light tracking-tight text-on-background md:text-5xl">
                Dentistas
              </h1>
              <p className="text-on-surface-variant max-w-3xl text-base leading-relaxed font-light">
                Conoce al equipo de Felizdent. Cada especialista aporta experiencia clinica, formacion continua y atencion centrada en la persona.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {DENTISTS.map((dentist, index) => (
                <article key={dentist.name} className={`dentist-card reveal ${index % 2 === 0 ? "reveal-d1" : "reveal-d2"}`}>
                  <div className="dentist-image-wrap">
                    <img src={dentist.image} alt={`Imagen de ${dentist.name}`} className="h-full w-full object-cover" />
                  </div>

                  <div className="dentist-content">
                    <h2 className="font-headline text-xl font-light text-on-background mb-1">{dentist.name}</h2>
                    <p className="text-accent-purple text-xs font-semibold tracking-widest uppercase mb-4">{dentist.specialty || dentist.role}</p>

                    <div className="space-y-2.5 mb-4">
                      {dentist.hospital && (
                        <div className="dentist-info-row">
                          <span className="dentist-icon" aria-hidden="true"><DentistMetaIcon type="hospital" /></span>
                          <p className="text-on-surface-variant text-xs font-light">{dentist.hospital}</p>
                        </div>
                      )}
                      {dentist.tower && (
                        <div className="dentist-info-row">
                          <span className="dentist-icon" aria-hidden="true"><DentistMetaIcon type="tower" /></span>
                          <p className="text-on-surface-variant text-xs font-light">{dentist.tower}</p>
                        </div>
                      )}
                      {dentist.consultorio && (
                        <div className="dentist-info-row">
                          <span className="dentist-icon" aria-hidden="true"><DentistMetaIcon type="room" /></span>
                          <p className="text-on-surface-variant text-xs font-light">Consultorio: {dentist.consultorio}</p>
                        </div>
                      )}
                      {dentist.address && (
                        <div className="dentist-info-row">
                          <span className="dentist-icon" aria-hidden="true"><DentistMetaIcon type="address" /></span>
                          <p className="text-on-surface-variant text-xs font-light">{dentist.address}</p>
                        </div>
                      )}
                    </div>

                    {dentist.education && dentist.education.length > 0 && (
                      <details className="dentist-details">
                        <summary className="dentist-summary">Ver más</summary>
                        <div className="dentist-details-body">
                          <h3 className="text-on-background mb-3 text-xs font-semibold tracking-widest uppercase">{dentist.detailsTitle || "Educación"}</h3>
                          <div className="space-y-2">
                            {(dentist.details || dentist.education).map((item) => (
                              <p key={item} className="text-on-surface-variant text-xs leading-relaxed font-light">• {item}</p>
                            ))}
                          </div>
                        </div>
                      </details>
                    )}
                  </div>
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
