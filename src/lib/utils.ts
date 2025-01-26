import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import gta6 from "../assets/gta6.jpg";
import outroJogo from "../assets/outrojogo.png";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const games = [
  {
    id: 1,
    name: "GTA 6",
    image: gta6,
    price: 60,
  },
  {
    id: 2,
    name: "GTA 5",
    image: outroJogo,
    price: 30,
  },
];
