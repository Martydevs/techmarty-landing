"use client";

import Footer from "../ui/footer";
import Navbar from "../ui/navbar";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen container">{children}</main>
      <Footer />
    </>
  );
}
