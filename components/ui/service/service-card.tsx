import Link from "next/link";
import { formatPrice } from "@/lib/format";
import { ServiceCard as IServiceCard } from "@/interfaces/home";

export interface ServiceCardProps extends IServiceCard {}

export default function ServiceCard({
  title,
  subtitle,
  price,
  linkTo,
}: ServiceCardProps) {
  const precio = price !== 0 ? formatPrice(price) : "Cotizar";

  return (
    <div className="card-hover w-full h-auto flex flex-col justify-between items-center p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
      <p className="font-medium text-gray-500 uppercase dark:text-gray-300">
        {title}
      </p>

      <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
        {precio}
      </h2>

      <p className="font-medium text-gray-500 dark:text-gray-300">{subtitle}</p>

      <Link href={`/servicios/#${linkTo}`}>
        <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-accent-500 rounded-md hover:bg-accent-600 focus:outline-none focus:bg-secondary-700 focus:ring focus:ring-secondary-300 focus:ring-opacity-80">
          Mas información...
        </button>
      </Link>
    </div>
  );
}
