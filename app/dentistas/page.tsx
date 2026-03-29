import { SiteFooter, SiteNav } from "../components/shared/SiteChrome";

type DentistProfile = {
  name: string;
  role: string;
  education: string[];
  detailsTitle?: string;
  details?: string[];
  details2Title?: string;
  details2?: string[];
  image: string;
  specialty?: string;
};

const DENTISTS: DentistProfile[] = [
  {
    name: "Dra. Blanca Rodriguez Cortez",
    role: "Cirujano Dentista",
    specialty: "Cirugía Maxilofacial",
    education: [
      "Lic. en Cirujano Dentista, Facultad de Estomatología, Benemérita Universidad Autónoma de Puebla (1995).",
      "Especialidad en Cirugía Maxilofacial, Hospital Universitario de Puebla, Benemérita Universidad Autónoma de Puebla (1999).",
    ],
    detailsTitle: "Nivel académico",
    details: [
      "Lic. en Cirujano Dentista, Facultad de Estomatología, Benemérita Universidad Autónoma de Puebla (1995).",
      "Especialidad en Cirugía Maxilofacial, Hospital Universitario de Puebla, Benemérita Universidad Autónoma de Puebla (1999).",
      "Maestría en Ciencias de la Educación, Instituto de Estudios Universitarios (2020).",
      "Doctorado en Ciencias de la Educación, Centro de Investigación Científica, Académica y de Postgrado (2024).",
      "Doctorado en Salud Pública, Universidad Contemporánea de las Américas (Acta de examen en proceso de titulación).",
    ],
    image: "/images/especialistas/fotodefecto.png",
  },
  {
    name: "Dra. María Elena Rodríguez Álvarez",
    role: "Estomatología",
    specialty: "Estomatología Pediátrica",
    education: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla (1998-2002).",
      "Especialidad en Estomatología Pediátrica, Instituto Nacional de Pediatría, México D.F. (2008-2010).",
    ],
    detailsTitle: "Nivel académico",
    details: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla (1998-2002).",
      "Especialidad en Estomatología Pediátrica, Instituto Nacional de Pediatría, México D.F. (2008-2010).",
    ],
    details2Title: "Experiencia",
    details2: [
      "2010 a la fecha: Estomatóloga Pediatra · Clínico · Risu Clínica Dental.",
      "Enero 2011 – Junio 2014: Estomatóloga Pediatra · Clínico · Hospital Universitario de Puebla.",
      "Junio 2015 – Diciembre 2019: Gestora de Seguro Popular · Operativo · Régimen Estatal de Protección Social en Salud.",
      "Agosto 2021 – Junio 2022: Profesora en Centro de Investigación y Estudios Superiores en Estomatología y Salud S.C. (CESES), modalidad en línea.",
    ],
    image: "/images/especialistas/fotodefecto.png",
  },
  {
    name: "Dra. Isabel Chávez",
    role: "Estomatología",
    specialty: "Estomatología Pediátrica",
    education: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla (2002-2006).",
      "Especialidad en Estomatología Pediátrica, Hospital para el Niño Poblano (2009-2011).",
    ],
    detailsTitle: "Nivel académico",
    details: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla (2002-2006).",
      "Especialidad en Estomatología Pediátrica, Hospital para el Niño Poblano (2009-2011).",
    ],
    details2Title: "Diplomados",
    details2: [
      "Diplomado en Investigación Clínica, Benemérita Universidad Autónoma de Puebla (2009-2010, 240 horas).",
      "Diplomado de Ortopedia Maxilar con Aplicación Clínica, Benemérita Universidad Autónoma de Puebla, Campus Tehuacán (2019-2021).",
      "Diplomado de Actualización en Ortopedia y Odontopediatría, Desarrollo Especializado con Nuevas Técnicas de Actualización (2021-2022).",
    ],
    image: "/images/especialistas/dentistaIsabel.jpg",
  },
  {
    name: "Dra. Yazmin Téllez Bautista",
    role: "Estomatología",
    specialty: "Endodoncia",
    education: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla (1998-2003).",
      "Especialidad en Endodoncia, Centro Mexicano en Estomatología (2009-2011).",
    ],
    detailsTitle: "Nivel académico",
    details: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla (1998-2003).",
      "Especialidad en Endodoncia, Centro Mexicano en Estomatología (2009-2011).",
    ],
    details2Title: "Diplomados",
    details2: [
      "Diplomado de Medicina Interna en Estomatología, Benemérita Universidad Autónoma de Puebla (2012-2013).",
      "Diplomado en Diagnóstico y Tratamientos Básicos Periodontales, Benemérita Universidad Autónoma de Puebla (abril 2015 – febrero 2016).",
      "Diplomado en Odontología Estética y Restauradora, Colegio Dental del Estado de México, A.C. (2022).",
      "Diplomado en Cirugía Plástica Periodontal, Colegio de Actualización Profesional Tepeaca (2024).",
    ],
    image: "/images/especialistas/dentistaYazmin.jpg",
  },
  {
    name: "Dra. Bricia Pascuala López López",
    role: "Estomatología",
    specialty: "Estomatología",
    education: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla (2008-2013).",
    ],
    detailsTitle: "Nivel académico",
    details: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla (2008-2013).",
    ],
    details2Title: "Diplomados",
    details2: [
      "Diplomado de Medicina Interna en Estomatología, avalado por la Benemérita Universidad Autónoma de Puebla (2019-2020).",
      "Diplomado de Biocosmética Dental, Colegio de Actualización de Tepeaca (octubre 2021 – septiembre 2022).",
      "Diplomado en Prostodoncia Total, Colegio de Actualización de Tepeaca (noviembre 2022 – junio 2023).",
    ],
    image: "/images/especialistas/dentistaBricia.jpg",
  },
  {
    name: "Dr. Elio Federico Monterrosas Fuentes",
    role: "Estomatología",
    specialty: "Ortopedia Maxilar",
    education: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla (1998-2003).",
      "Especialidad en Ortopedia, Universidad Nacional Autónoma de México (UNAM) (2009-2011).",
    ],
    detailsTitle: "Nivel académico",
    details: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla (1998-2003).",
      "Especialidad en Ortopedia, Universidad Nacional Autónoma de México (UNAM) (2009-2011).",
    ],
    image: "/images/especialistas/dentistaElio.jpg",
  },
  {
    name: "Dr. José Ángel Pérez Benítez",
    role: "Estomatología",
    specialty: "Ortodoncia y Endodoncia",
    education: [
      "Lic. en Estomatología, Universidad México Americana del Golfo, Puebla (2011-2015).",
      "Especialidad en Endodoncia, Centro Mexicano en Estomatología (2016-2018).",
      "Especialidad en Ortodoncia, Centro Universitario Interamericano del Pacífico (CEUNI), Plantel Golfo Centro, Heroica Puebla de Zaragoza (2019-2021).",
    ],
    detailsTitle: "Nivel académico",
    details: [
      "Lic. en Estomatología, Universidad México Americana del Golfo, Puebla (2011-2015).",
      "Especialidad en Endodoncia, Centro Mexicano en Estomatología (2016-2018).",
      "Especialidad en Ortodoncia, Centro Universitario Interamericano del Pacífico (CEUNI), Plantel Golfo Centro, Heroica Puebla de Zaragoza (2019-2021).",
    ],
    image: "/images/especialistas/dentistajoseAngel.jpg",
  },
  {
    name: "Dra. Vianey Joaquina Mateo Barrales",
    role: "Estomatología",
    specialty: "Estomatología y Salud",
    education: [
      "Lic. en Estomatología y Salud, Centro de Investigación y Estudios Superiores.",
    ],
    detailsTitle: "Nivel académico",
    details: [
      "Lic. en Estomatología y Salud, Centro de Investigación y Estudios Superiores.",
    ],
    details2Title: "Experiencia",
    details2: [
      "2022-2023: Servicio social en Clínica Particular Dental Dorada como auxiliar dental en diversas áreas odontológicas, incluyendo limpieza y desinfección de instrumental.",
      "2023-2024: Auxiliar en Dental Dorada en áreas de Endodoncia, Ortodoncia, Rehabilitación, Cirugía Bucal y Recepción.",
    ],
    image: "/images/especialistas/dentistaVianey.jpg",
  },
  {
    name: "Dra. María Guadalupe Pérez Ponce",
    role: "Odontología",
    specialty: "Odontología General",
    education: [
      "Lic. en Odontología, Centro de Estudios Superiores de Tepeaca (2018-2023).",
    ],
    detailsTitle: "Nivel académico",
    details: [
      "Lic. en Odontología, Centro de Estudios Superiores de Tepeaca (2018-2023).",
    ],
    details2Title: "Experiencia",
    details2: [
      "OPPSS realizado en Centro de Estudios Superiores de Tepeaca: uso de aparatología de rayos X, profilaxis, educación de higiene oral y restauraciones estéticas.",
    ],
    image: "/images/especialistas/dentistaMariaGuadalupe.jpg",
  },
  {
    name: "Dra. Aylin Zayagos Fernández",
    role: "Estomatología",
    specialty: "Lic. en Estomatología",
    education: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla, Facultad de Estomatología (2018-2024).",
    ],
    detailsTitle: "Nivel académico",
    details: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla, Facultad de Estomatología (2018-2024).",
    ],
    details2Title: "Experiencia",
    details2: [
      "Servicio social culminado en el periodo enero 2024 – febrero 2025, en área de práctica profesional con jornadas en diferentes comunidades.",
    ],
    image: "/images/especialistas/dentistaAylin.jpg",
  },
  {
    name: "Dra. Salma Yenifer Rodríguez Camarillo",
    role: "Estomatología",
    specialty: "Lic. en Estomatología",
    education: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla (2018-2023).",
    ],
    detailsTitle: "Nivel académico",
    details: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla (2018-2023).",
    ],
    details2Title: "Experiencia",
    details2: [
      "Servicio social en Clínica de Estomatología del CRS.",
      "Experiencia en cirugías periodontales: Alargamiento de Corona (2023-2024).",
    ],
    image: "/images/especialistas/dentistaSalma.jpg",
  },
  {
    name: "Dra. Sandra Velázquez",
    role: "Estomatología",
    specialty: "Estomatología Pediátrica",
    education: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla (2013-2019).",
      "Especialidad en Estomatología Pediátrica, Hospital para el Niño Poblano (2023-2025).",
    ],
    detailsTitle: "Nivel académico",
    details: [
      "Lic. en Estomatología, Benemérita Universidad Autónoma de Puebla (2013-2019).",
      "Especialidad en Estomatología Pediátrica, Hospital para el Niño Poblano (2023-2025).",
    ],
    details2Title: "Experiencia",
    details2: [
      "Febrero 2019 (3 meses): Asistente dental – asistencia en consulta, toma de radiografías periapicales, lavado y esterilizado de instrumental.",
      "Mayo 2019 (1 mes): Asistente dental – asistencia en consulta, lavado y esterilizado de instrumental, toma de impresiones y vaciado de modelos.",
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
              <div className="eyebrow mb-4 text-[11px] font-semibold uppercase">Equipo clínico</div>
              <div className="mb-8 h-px w-12 bg-accent-purple/50" />
              <h1 className="font-headline mb-6 text-4xl leading-tight font-light tracking-tight text-on-background md:text-5xl">
                Dentistas
              </h1>
              <p className="text-on-surface-variant max-w-3xl text-base leading-relaxed font-light">
                Conoce al equipo de Felizdent. Cada especialista aporta experiencia clínica, formación continua y atención centrada en la persona.
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
                          {dentist.details2 && dentist.details2.length > 0 && (
                            <>
                              <h3 className="text-on-background mt-4 mb-3 text-xs font-semibold tracking-widest uppercase">{dentist.details2Title || "Experiencia"}</h3>
                              <div className="space-y-2">
                                {dentist.details2.map((item) => (
                                  <p key={item} className="text-on-surface-variant text-xs leading-relaxed font-light">• {item}</p>
                                ))}
                              </div>
                            </>
                          )}
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
