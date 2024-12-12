import type { Metadata } from "next";

import { ThemeProvider } from "next-themes";
import { Inter, Open_Sans, Roboto_Mono } from "next/font/google";

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import FollowCursor from "@/components/ui/follow-cursor";

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
  description:
    "Servicio profesional de reparación y mantenimiento de computadoras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.className} ${openSans.className} ${robotoMono.className} bg-primary-50 dark:bg-primary-950 antialiased`}
      >
        <ThemeProvider
          defaultTheme="dark"
          attribute="class"
          disableTransitionOnChange
        >
          <Navbar />
          <FollowCursor />
          <main className="w-full min-h-screen mx-auto container">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
