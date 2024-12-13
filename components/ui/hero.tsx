interface HeroProps {
  title: string;
  subtitle: string;
  isHome?: boolean;
}

export default function Hero({ title, subtitle, isHome }: HeroProps) {
  return (
    <section className="w-full h-auto py-20 bg-transparent">
      <div className="max-w-4xl mx-auto text-center px-4 md:px-0 sm:px-2">
        <h1 className="font-display text-5xl font-bold text-primary-900 dark:text-primary-100 mb-6 text-pretty">
          {title}
        </h1>
        <p className="text-xl mb-8 text-secondary-500 dark:text-secondary-300 text-pretty">
          {subtitle}
        </p>
        {isHome ? (
          <div className="flex items-center justify-center">
            <a
              href="#"
              className="bg-accent-500 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
            >
              Ver servicios
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
