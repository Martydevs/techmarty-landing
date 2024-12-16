import { DetailServiceCard } from "@/interfaces/services";

const serviceDetails: DetailServiceCard[] = [
  {
    title: "Plan hardware",
    description: "Se realiza mantenimiento preventivo y correctivo de computadoras de escritorio y laptops, este incluye lo siguiente:",
    features: [
      "Limpieza de componentes internos y externos",
      "Diagnostico de fallas",
      "Reparacion de componentes",
      "Instalacion de componentes",
      "Actualización de componentes",
    ],
    nota: "Incluye costo de diagnóstico, en caso de ser necesario, se puede solicitar."
  },
  {
    title: "Plan software",
    description: "Se realiza instalación, optimización y actualización de software para computadoras de escritorio y laptops, este incluye lo siguiente:",
    features: [
      "Instalación de paqueterías, licencias, sistemas operativos, etc.",
      "Optimización de sistema operativo para cualquier carga de trabajo o juegos.",
      "Actualización de sistema operativo y software",
    ],
    nota: "Incluye costo de diagnóstico, en caso de ser necesario, se puede solicitar."
  },
  {
    title: 'Plan ármalo',
    description: 'Se realiza cotización, ensamblajes y actualizaciónes de computadoras de escritorio para productividad, creacíon de contenido y gaming, este incluye lo siguiente:',
    features: [
      "Cotización de componentes",
      "Comparativa entre marcas y modelos",
      "Ensambles para todo tipo de oficio",
      "Actualización de computadoras",
    ],
    nota: "*El precio del ensamble varía según la gama del ensamble y los componentes que se requieran para el mismo."
  }
]

export { serviceDetails };