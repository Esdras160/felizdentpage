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
          className="whatsapp-float animate-pulse-soft"
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
            <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16.002c0 3.5 1.128 6.744 3.046 9.378L1.06 31.29l6.196-1.964A15.89 15.89 0 0 0 16.004 32C24.83 32 32 24.826 32 16.002 32 7.174 24.83 0 16.004 0Zm9.31 22.614c-.39 1.098-2.282 2.1-3.17 2.166-.8.06-1.544.374-5.198-1.112-4.402-1.79-7.196-6.3-7.414-6.59-.218-.292-1.782-2.376-1.782-4.53s1.128-3.214 1.53-3.654c.4-.44.874-.55 1.166-.55.292 0 .584.002.838.016.27.014.63-.102.984.75.39.93 1.312 3.214 1.424 3.448.112.234.188.508.038.8-.15.292-.224.474-.444.73-.22.256-.462.572-.662.768-.22.218-.448.454-.192.89.256.438 1.14 1.876 2.446 3.04 1.68 1.496 3.094 1.96 3.532 2.18.44.218.694.184.95-.112.256-.294 1.098-1.278 1.39-1.718.292-.44.584-.366.984-.22.4.148 2.534 1.196 2.97 1.414.438.218.728.33.838.51.112.184.112 1.048-.278 2.148Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
