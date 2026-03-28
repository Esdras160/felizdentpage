import { SiteFooter, SiteNav } from "../components/shared/SiteChrome";

type DentistProfile = {
  name: string;
  role: string;
  education: string[];
  detailsTitle?: string;
  details?: string[];
  image: string;
  specialty?: string;
};

const DENTISTS: DentistProfile[] = [
  {
    name: "Dra. Blanca Rodriguez Cortez",
    role: "Cirujano Dentista",
    specialty: "Cirugía Maxilofacial",
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
    image: "/images/especialistas/fotodefecto.png",
  },
  {
    name: "Dra. Maria Elena Rodriguez Alvarez",
    role: "Estomatología",
    specialty: "Estomatología Pediátrica",
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
    image: "/images/especialistas/fotodefecto.png",
  },
  {
    name: "Dra. Isabel Chavez",
    role: "Estomatología",
    specialty: "Estomatología Pediátrica",
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
    image: "/images/especialistas/dentistaIsabel.jpg",
  },
  {
    name: "Dra. Yazmin Tellez Bautista",
    role: "Estomatología",
    specialty: "Endodoncia",
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
    image: "/images/especialistas/dentistaYazmin.jpg",
  },
  {
    name: "Dra. Bricia Pascuala Lopez Lopez",
    role: "Estomatología",
    specialty: "Biocosmetica Dental",
    education: [
      "Lic. en Estomatologia, Benemerita Universidad Autonoma de Puebla (2008-2013).",
    ],
    detailsTitle: "Diplomados",
    details: [
      "Diplomado de Medicina Interna en Estomatologia, avalada por BUAP (2019-2020).",
      "Diplomado de Biocosmetica Dental, Colegio de Actualizacion de Tepeaca (octubre 2021-septiembre 2022).",
      "Diplomado en Prostodoncia Total, Colegio de Actualizacion de Tepeaca (noviembre 2022-junio 2023).",
    ],
    image: "/images/especialistas/dentistaBricia.jpg",
  },
  {
    name: "Dr. Elio Federico Monterrosas Fuentes",
    role: "Estomatología",
    specialty: "Ortopedia Maxilar",
    education: [
      "Lic. en Estomatologia, Benemerita Universidad Autonoma de Puebla (1998-2003).",
      "Especialidad en Ortopedia, Universidad Nacional Autonoma de Mexico (2009-2011).",
    ],
    image: "/images/especialistas/dentistaElio.jpg",
  },
  {
    name: "Dr. Jose Angel Perez Benitez",
    role: "Estomatología",
    specialty: "Ortodoncia y Endodoncia",
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
    image: "/images/especialistas/dentistajoseAngel.jpg",
  },
  {
    name: "Dra. Vianey Joaquina Mateo Barrales",
    role: "Estomatología",
    specialty: "Estomatología",
    education: [
      "Lic. en Estomatologia y Salud, Centro de Investigacion y Estudios Superiores.",
    ],
    detailsTitle: "Experiencia",
    details: [
      "Servicio social en Clinica Particular Dental Dorada como auxiliar dental en diversas areas (2022-2023).",
      "Trabajo en Dental Dorada como auxiliar en endodoncia, ortodoncia, rehabilitacion, cirugia bucal y recepcion (2023-2024).",
    ],
    image: "/images/especialistas/dentistaVianey.jpg",
  },
  {
    name: "Dra. Maria Guadalupe Perez Ponce",
    role: "Odontología",
    specialty: "Odontología General",
    education: [
      "Lic. en Odontologia, Centro de Estudios Superiores de Tepeaca (2018-2023).",
    ],
    detailsTitle: "Experiencia",
    details: [
      "OPPSS en Centro de Estudios Superiores de Tepeaca.",
      "Uso de aparatologia de rayos X, profilaxis, educacion de higiene oral y restauraciones esteticas.",
    ],
    image: "/images/especialistas/dentistaMariaGuadalupe.jpg",
  },
  {
    name: "Dra. Aylin Zayagos Fernandez",
    role: "Estomatología",
    specialty: "Estomatología",
    education: [
      "Facultad de Estomatologia, Benemerita Universidad Autonoma de Puebla (2018-2024).",
    ],
    detailsTitle: "Experiencia",
    details: [
      "Servicio social culminado en el periodo enero 2024-febrero 2025 en area de practica profesional con jornadas en diferentes comunidades.",
    ],
    image: "/images/especialistas/dentistaAylin.jpg",
  },
  {
    name: "Dra. Salma Yenifer Rodriguez Camarillo",
    role: "Estomatología",
    specialty: "Estomatología",
    education: [
      "Lic. en Estomatologia, Benemerita Universidad Autonoma de Puebla (2018-2023).",
    ],
    detailsTitle: "Experiencia",
    details: [
      "Servicio social en Clinica de Estomatologia del CRS.",
      "Experiencia en cirugias periodontales y alargamiento de corona (2023-2024).",
    ],
    image: "/images/especialistas/dentistaSalma.jpg",
  },
  {
    name: "Dra. Sandra Velazquez",
    role: "Estomatología",
    specialty: "Estomatología Pediátrica",
    education: [
      "Lic. en Estomatologia, Benemerita Universidad Autonoma de Puebla (2013-2019).",
      "Especialidad en Estomatologia Pediatrica, Hospital para el Nino Poblano (2023-2025).",
    ],
    detailsTitle: "Experiencia",
    details: [
      "Consultorio | Asistente dental (febrero 2019, 3 meses): asistir en consulta, toma de radiografias periapicales, lavado y esterilizado de instrumental.",
      "Consultorio | Asistente dental (mayo 2019, 1 mes): asistir en consulta, lavado y esterilizado de instrumental, toma de impresiones y vaciado de modelos.",
    ],
    image: "/images/especialistas/dentistaSandra.jpg",
  },
];

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

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
              {DENTISTS.map((dentist, index) => (
                <article key={dentist.name} className={`dentist-card reveal ${index % 2 === 0 ? "reveal-d1" : "reveal-d2"}`}>
                  <div className="dentist-image-wrap">
                    <img src={dentist.image} alt={`Imagen de ${dentist.name}`} className="h-full w-full object-cover" />
                  </div>

                  <div className="dentist-content">
                    <h2 className="font-headline text-xl font-light text-on-background mb-1">{dentist.name}</h2>
                    <p className="text-accent-purple text-xs font-semibold tracking-widest uppercase mb-4">{dentist.specialty || dentist.role}</p>

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
