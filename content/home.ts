import type { CardContent, ServiceCard } from "@/interfaces/home";

import Building from "@/app/assets/static/building-tech.webp";
import Delivery from "@/app/assets/static/delivery-tech.webp";
import Repair from "@/app/assets/static/repair-tech.webp";

const cardContent: CardContent[] = [
  {
    title: "Servicio de calidad y confianza",
    subtitle:
      "Contamos con experiencia y profesionalismo para brindar un servicio de calidad y confianza.",
    image: Repair,
  },
  {
    title: "Entrega rápida y eficiente",
    subtitle:
      "Nuestro equipo de trabajo está dedicado a brindar una entrega rápida y eficiente de nuestros servicios.",
    image: Delivery,
  },
  {
    title: "Componentes de alta calidad",
    subtitle:
      "Contamos con una amplia gama de componentes y selección confiable de proveedores para asegurar la calidad de nuestros servicios.",
    image: Building,
  },
];

const servicios: ServiceCard[] = [
  {
    linkTo: "hardware",
    title: "Plan Hardware",
    subtitle: "Servicio de mantenimiento correctivo y preventivo para tu PC o laptop.",
    price: 500,
  },
  {
    linkTo: "software",
    title: "Plan Software",
    subtitle: "Servicio de instalación, optimización y reparación de software para tu PC o laptop.",
    price: 600,
  },
  {
    linkTo: "armado",
    title: "Plan ármalo",
    subtitle: "Servicio de cotización y armado de Workstations y PC gamers a tu medida",
    price: 0,
  }
]

export { cardContent, servicios };
