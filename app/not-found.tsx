import { ArrowLeftIcon, InfoIcon } from "@/components/icons/lib";

export default function NotFound() {
  return (
    <section className="bg-transparent min-h-screen w-full">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-md mx-auto text-center">
          <p className="p-3 text-sm font-medium rounded-full size-20">
            <InfoIcon className="size-full" />
          </p>
          <h1 className="mt-3 text-2xl font-semibold dark:text-white md:text-3xl text-balance">
            Página no encontrada
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-pretty">
            La pagina que intentaste acceder no existe.
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg shrink-0 sm:w-auto dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100">
              <ArrowLeftIcon />
              <span className="ml-2">Regresar</span>
            </button>

            <button className='w-1/2 px-5 py-2 text-sm tracking-wide text-white font-medium transition-colors duration-200 rounded-lg shrink-0 sm:w-auto bg-primary-600 hover:bg-primary-700 dark:bg-accent-400 dark:hover:bg-accent-500'>
              Ir al inicio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
