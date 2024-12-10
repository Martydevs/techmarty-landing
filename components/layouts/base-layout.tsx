import Navbar from "../ui/navbar";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen mx-auto container">
        {children}
      </main>
    </>
  );
}
