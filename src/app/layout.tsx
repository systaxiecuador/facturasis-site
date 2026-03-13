import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://facturasis.shop"),
  title: "Facturasis | Software, facturación electrónica y soluciones POS",
  description:
    "Facturasis impulsa la transformación digital de restaurantes, cafeterias, comercios y empresas con software empresarial, facturación electrónica y sistemas POS.",
  keywords: [
    "Facturasis",
    "software empresarial",
    "facturacion electronica Ecuador",
    "sistema POS",
    "inventario",
    "transformacion digital",
    "Cuenca Ecuador",
  ],
  openGraph: {
    title: "Facturasis | Transformamos negocios con tecnología",
    description:
      "Software empresarial, POS, inventario y facturación electrónica para negocios modernos en Ecuador.",
    url: "https://facturasis.shop",
    siteName: "Facturasis",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facturasis",
    description:
      "Soluciones tecnológicas para digitalizar empresas, comercios y restaurantes.",
  },
  alternates: {
    canonical: "https://facturasis.shop",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
