import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const slideIn = {
  left: "animate-in slide-in-from-left",
  right: "animate-in slide-in-from-right",
  bottom: "animate-in slide-in-from-botom",
  top: "animate-in slide-in-from-top",
};
