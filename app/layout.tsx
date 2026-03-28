import type { Metadata } from "next";
import { Montserrat, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import ScrollAnimations from "./components/ScrollAnimations";

const montserrat = Montserrat({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Felizdent | Clínica Dental en Puebla",
  description: "Clínica dental con enfoque humano y tecnología de vanguardia. Más de 20 años transformando sonrisas en Puebla.",
  keywords: [
    "clínica dental en Puebla",
    "dentista en Puebla",
    "endodoncia en Puebla",
    "odontopediatría en Puebla",
    "ortodoncia en Puebla",
    "Felizdent",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Felizdent | Clínica Dental en Puebla",
    description: "Clínica dental con enfoque humano y tecnología de vanguardia. Más de 20 años transformando sonrisas en Puebla.",
    siteName: "Felizdent",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felizdent | Clínica Dental en Puebla",
    description: "Clínica dental con enfoque humano y tecnología de vanguardia. Más de 20 años transformando sonrisas en Puebla.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${sourceSerif.variable} antialiased`}
      >
        <ScrollAnimations />
        {children}
        {/* Phone floating button */}
        <a
          href="tel:+5212221526613"
          className="call-float"
          aria-label="Llamar a la clínica"
          title="Llamar: +52 1 222 152 6613"
        >
          <span className="call-float-label">Llámanos</span>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </svg>
        </a>
        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/5212221526613?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Contactar por WhatsApp"
          title="Agendar cita por WhatsApp"
        >
          <span className="whatsapp-float-label">Agendar cita</span>
        </a>
      </body>
    </html>
  );
}
