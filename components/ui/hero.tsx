import dynamic from "next/dynamic";
import { ShimmerButton } from "./magic-ui/shimmer-button";

const DynamicFlipWords = dynamic(() => import('./aceternity/flip-words'), {
  loading: () => <FlipWordLoader />,
});

interface HeroProps {
  title: string;
  subtitle: string;
  isHome?: boolean;
}

function FlipWordLoader() {
  return <div className="w-[20rem] h-12 bg-primary-100 dark:bg-primary-900 animate-pulse rounded-xl"></div>
}

export default function Hero({ title, subtitle, isHome }: HeroProps) {
  const services = ["Mantenimiento", "Instalación", "Actualización", "Armado", "Reparación"];

  return (
    <section className="w-full h-auto py-20 bg-transparent">
      <div className="max-w-4xl mx-auto text-center px-4 md:px-0 sm:px-2 transition-all duration-1000">
        <h1 className="font-display text-5xl font-bold text-primary-900 dark:text-primary-100 mb-6 text-balance">
          {isHome && <DynamicFlipWords words={services} />}
          {title}
        </h1>
        <p className="text-xl mb-8 text-secondary-500 dark:text-secondary-300 text-pretty">
          {subtitle}
        </p>
        {isHome && (
          <div className="flex items-center justify-center">
            <a href="#servicios">
              <ShimmerButton
                background="#1f7d51"
                shimmerSize="0.1rem"
                shimmerDuration="2.5s"
                borderRadius="0.7rem"
                className="text-zinc-50 dark:text-zinc-50 shimmer-button"
              >
                Ver servicios
              </ShimmerButton>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
