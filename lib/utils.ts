import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function centerText(str: string, length: number, fill: string = ".") {
  const extra = Math.max(length - str.length, 0);
  console.log("exta", extra);

  const text = `${extra % 2 ? fill : ""}${fill.repeat(Math.floor(extra / 2))}${str}${fill.repeat(Math.floor(extra / 2))}`;
  return text;
}

export function trimString(str: string, maxLen: number) {
  if (str.length <= maxLen) {
    return str;
  }
  return str.slice(0, maxLen - 3) + "...";
}

export function formatNumber(num: number) {
  const formatter = Intl.NumberFormat("en", {
    notation: "compact",
  });
  let formatted = formatter.format(num);
  return formatted;
}

export function randomInt(num: number = 100) {
  return parseInt(String((Math.random() + 1) * num));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
