import { StaticImageData } from "next/image";

export interface CardContent {
    title: string;
    subtitle: string;
    image: string | StaticImageData;
}