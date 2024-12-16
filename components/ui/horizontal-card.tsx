import Image from "next/image";
import { CardContent } from "@/interfaces/home";

interface HorizontalCardProps extends CardContent {
  direction: "left" | "right";
}

export default function HorizontalCard({
  direction,
  title,
  subtitle,
  image,
}: HorizontalCardProps) {
  return (
    <section
      className={`w-full h-auto bg-zinc-900 rounded-md shadow-xl flex items-center gap-8 p-4 md:flex-row md:gap-12 md:p-6 lg:gap-12 lg:p-8 xl:gap-16 xl:p-12 
        ${direction === "left" ? "flex-col" : "flex-col-reverse md:flex-row-reverse"}`}
    >
      <div className={`flex flex-col justify-between md:w-1/2`}>
        <h1 className={`font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-100 mb-6 md:mb-8 lg:mb-10 xl:mb-12 ${direction === "left" ? "text-start" : "text-end"}`}>
          {title}
        </h1>
        <p className={`text-md md:text-lg lg:text-xl text-secondary-300 text-pretty md:text-start ${direction === "left" ? "md:text-start" : "md:text-end"}`}>
          {subtitle}
        </p>
      </div>
      <div className={`w-full md:w-1/2 h-full flex items-center justify-center md:order-first ${direction === "left" ? "order-last" : "order-first"}`}>
        <Image
          priority
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
