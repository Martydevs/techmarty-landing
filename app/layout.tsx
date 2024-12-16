import type { Metadata } from "next";
import { Inter, Open_Sans, Roboto_Mono } from "next/font/google";

import Providers from "./providers";
import BaseLayout from "@/components/layouts/base-layout";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "TechMarty - Servicio Técnico de Computadoras",
  description: "Servicio profesional de reparación y mantenimiento de computadoras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.className} ${openSans.className} ${robotoMono.className} antialiased`}
      >
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
