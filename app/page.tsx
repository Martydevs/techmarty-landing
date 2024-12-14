import Hero from "@/components/ui/hero";
import { cardContent, servicios } from "@/content/home";

import { ClockIcon } from "@/components/icons/lib";
import HorizontalCard from "@/components/ui/horizontal-card";
import ServiceCard from "@/components/ui/service/service-card";
import ServicesContainer from "@/components/ui/service/service-container";

export default function Home() {
  return (
    <>
      <Hero
        isHome
        title="profesional de computadoras"
        subtitle="Mantén tus sistemas funcionando al máximo rendimiento con nuestros servicios."
      />

      <section className="h-auto w-full flex flex-col items-center space-y-8">
        {cardContent.map((card, index) => (
          <HorizontalCard
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
            title={card.title}
            subtitle={card.subtitle}
            image={card.image}
          />
        ))}
      </section>

      <section className="h-auto py-16 w-full flex flex-col items-center justify-center" id="servicios">
        <ServicesContainer>
          {servicios.map((servicio, i) => (
            <ServiceCard
              key={i}
              title={servicio.title}
              subtitle={servicio.subtitle}
              price={servicio.price}
            />
          ))}
        </ServicesContainer>
      </section>

      <section className="h-auto w-full py-10">
        <div className="flex flex-col items-center justify-center">
          <ClockIcon size={58} />
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
      </section>
    </>
  );
}
