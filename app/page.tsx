import Hero from "@/components/ui/hero";
import HorizontalCard from "@/components/ui/horizontal-card";
import { cardContent } from "@/content/home";

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

      <section className="h-[75dvh] w-full">
        <p>Content</p>
      </section>
    </>
  );
}
