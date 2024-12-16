import Hero from "@/components/ui/hero";
import { cardContent, servicios } from "@/content/home";
import HorizontalCard from "@/components/ui/horizontal-card";
import ServiceCard from "@/components/ui/service/service-card";
import HorariosServicios from "@/components/ui/horarios-servicios";
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

      <section
        className="h-auto py-16 w-full flex flex-col items-center justify-center"
        id="servicios"
      >
        <ServicesContainer>
          {servicios.map((servicio, i) => (
            <ServiceCard
              key={i}
              linkTo={servicio.linkTo}
              title={servicio.title}
              subtitle={servicio.subtitle}
              price={servicio.price}
            />
          ))}
        </ServicesContainer>
      </section>

      <section className="h-auto w-full py-10">
        <HorariosServicios />
      </section>
    </>
  );
}
