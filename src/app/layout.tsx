import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fredoka'
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Zona Zero Heladería - Los Mejores Helados y Postres",
  description: "Disfruta de los mejores helados de yogurt, obleas, ensaladas de frutas y postres en Zona Zero Heladería. Productos frescos con variedad de toppings y sabores únicos.",
  keywords: [
    "heladería",
    "helados",
    "helado de yogurt", 
    "obleas",
    "ensaladas de frutas",
    "postres",
    "zona zero",
    "toppings",
    "helados cremosos",
    "postres infantiles"
  ],
  authors: [{ name: "Zona Zero Heladería" }],
  creator: "Zona Zero Heladería",
  publisher: "Zona Zero Heladería",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.heladeriazonazero.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zona Zero Heladería - Los Mejores Helados y Postres",
    description: "Disfruta de los mejores helados de yogurt, obleas, ensaladas de frutas y postres en Zona Zero Heladería. Productos frescos con variedad de toppings y sabores únicos.",
    url: "https://www.heladeriazonazero.com",
    siteName: "Zona Zero Heladería",
    images: [
      {
        url: "/icons/Helado.png",
        width: 1200,
        height: 630,
        alt: "Zona Zero Heladería - Los mejores helados",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zona Zero Heladería - Los Mejores Helados y Postres",
    description: "Disfruta de los mejores helados de yogurt, obleas, ensaladas de frutas y postres en Zona Zero Heladería.",
    images: ["/icons/Helado.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "código-de-verificación-google", // Agregar cuando configures Google Search Console
    // yandex: "código-de-verificación-yandex",
    // yahoo: "código-de-verificación-yahoo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-color-scheme="light" className={`${fredoka.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/Helado.png" />
        <meta name="theme-color" content="#54c7ee" />
        <meta name="color-scheme" content="light only" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.className} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
