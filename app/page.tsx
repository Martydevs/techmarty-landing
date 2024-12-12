import Hero from "@/components/ui/hero";
import HorizontalCard from "@/components/ui/horizontal-card";
import ServiceCard from "@/components/ui/servicios/service-card";
import ServicesContainer from "@/components/ui/servicios/service-container";
import { cardContent, servicios } from "@/content/home";
import { formatPrice } from "@/lib/format";

export default function Home() {
  return (
    <>
      <Hero
        isHome
        title="Tu compu también merece chagneada"
        subtitle="Reparación y mantenimiento de computadoras para mantener tus sistemas funcionando al máximo rendimiento."
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

      <section className="h-[75dvh] w-full flex flex-col items-center justify-center">
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
    </>
  );
}
