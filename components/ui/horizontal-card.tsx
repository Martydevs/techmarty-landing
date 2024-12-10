import Image, { StaticImageData } from "next/image";

interface HorizontalCardProps {
  direction: "left" | "right";
  title: string;
  subtitle: string;
  image: string | StaticImageData;
}

export default function HorizontalCard({
  direction,
  title,
  subtitle,
  image,
}: HorizontalCardProps) {
  return (
    <section
      className={`w-full max-w-[70%] h-auto bg-zinc-900 rounded-md shadow-xl flex items-center gap-8 p-6 hover:scale-105 transition-all ${
        direction === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className={`flex flex-col justify-between`}>
        <h1 className={`font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-6 text-balance ${direction === "left" ? "text-start" : "text-end"}`}>
          {title}
        </h1>
        <p className={`text-md md:text-lg lg:text-xl text-secondary-700 dark:text-secondary-300 text-pretty ${direction === "left" ? "text-start" : "text-end"}`}>
          {subtitle}
        </p>
      </div>
      <div className={"w-1/2 h-full flex items-center justify-center"}>
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="object-cover rounded-md"
        />
      </div>
    </section>
  );
}
