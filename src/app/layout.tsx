import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alpha Builders | Software House Premium",
  description:
    "Do MVP à plataforma enterprise, projetamos, desenvolvemos e entregamos produtos digitais que geram resultados reais para o seu negócio.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
