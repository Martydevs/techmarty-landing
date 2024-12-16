import { ToolsIcon } from "@/components/icons/lib";

export default function ServicesContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <ToolsIcon className="size-12" />
        <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Servicios
        </h2>
      </div>

      <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
        Ofrecemos una amplia gama de servicios de reparación y mantenimiento de
        computadoras para mantener tus sistemas funcionando al máximo
        rendimiento.
      </p>

      <div className="grid grid-cols-1 align-center gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3 w-full">
        {children}
      </div>
    </>
  );
}
