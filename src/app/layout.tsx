import type { Metadata } from "next";

import "./globals.css";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

export const metadata: Metadata = {
  title: {
    default: "Un Avertissement pour notre Planète",
    template: "%s | Groupe EKANG",
  },
  description:
    "Du passé préindustriel aux futurs possibles : l'histoire de nos choix climatiques, racontée à partir des données de la NASA et de la NOAA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // data-scroll-behavior : avec scroll-behavior:smooth global, Next 16 ne
  // neutralise plus le defilement pendant un changement de page sans cet
  // attribut. La navigation redeviendrait un long scroll anime.
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
