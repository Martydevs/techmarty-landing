import { ClockIcon } from "../icons/lib";

export default function HorariosServicios() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <ClockIcon className="size-12" />
        <h2 className="text-2xl font-bold dark:text-white">
          Horarios de atención
        </h2>
      </div>

      <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 dark:text-gray-300">
        Nuestros horarios de atención son los siguientes:
      </p>

      <article className="w-3/4 mx-auto mt-8 md:mt-10 lg:mt-14 rounded-xl card-hover border border-zinc-200 dark:border-zinc-700">
        <section className="flex items-center justify-evenly p-6 md:p-10 lg:p-12">
          <div className="flex flex-col justify-between items-center gap-3 text-xl text-balance text-center">
            <p>
              Lunes a Viernes de{" "}
              <span className="schedule-hour-tag">18:00 pm</span> a{" "}
              <span className="schedule-hour-tag">21:00 pm</span>
            </p>
            <p>y</p>
            <p>
              Sábados de <span className="schedule-hour-tag">11:00 am</span> a{" "}
              <span className="schedule-hour-tag">21:00 pm</span>
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
