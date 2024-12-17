import { serviceDetails } from "@/content/services";

import Hero from "@/components/ui/hero";
import BaseLayout from "@/components/layouts/base-layout";
import VerticalCard from "@/components/ui/vertical-card";

export default function Servicios() {
  return (
    <BaseLayout>
      <Hero
        title="Servicios"
        subtitle="Nuestros servicios de reparación y mantenimiento de PCs"
      />

      <section className="h-auto py-16 w-full grid grid-cols-1 xl:grid-cols-3 gap-3 px-4">
        {serviceDetails.map((detail, i) => (
          <VerticalCard key={i}>
            <header className="h-2/5">
              <h2 className="text-4xl text-balance font-extrabold">
                {detail.title}
              </h2>
              <p className="mt-4 text-pretty">{detail.description}</p>
            </header>

            <ul className="h-3/5">
              {detail.features.map((feature, j) => (
                <li key={j}>{feature}</li>
              ))}
            </ul>
          </VerticalCard>
        ))}
      </section>
    </BaseLayout>
  );
}
