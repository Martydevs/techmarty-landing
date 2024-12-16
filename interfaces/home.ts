import { StaticImageData } from "next/image";

export interface CardContent {
  title: string;
  subtitle: string;
  image: string | StaticImageData;
}

export interface ServiceCard {
  linkTo: "hardware" | "software" | "armado";
  title: string;
  price: number;
  subtitle: string;
}