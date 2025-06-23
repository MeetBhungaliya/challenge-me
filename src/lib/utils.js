import { USER_FALLBACK_ICON } from "@/constants/images";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const onImageError = (e) => {
  e.target.src = USER_FALLBACK_ICON
}
