import Hero from "@/components/ui/hero";
import HorizontalCard from "@/components/ui/horizontal-card";
import { cardContent } from "@/content/home";

export default function Home() {
  return (
    <>
      <Hero
        isHome
        title="Servicio experto en reparación y mantenimiento de PCs"
        subtitle="Reparación y mantenimiento de computadoras para mantener tus sistemas funcionando al máximo rendimiento."
      />

      <section className="h-[75dvh] w-full flex flex-col items-center space-y-8">
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
    </>
  );
}
