import { Locale } from "./i18n-config";

export function getFlagImageLink(
  countryCode: Locale | "us",
  style: "flat" | "shiny" = "flat",
  size: 16 | 24 | 32 | 48 | 64 = 64
): string {
  if (countryCode === "en") countryCode = "us";
  return `https://flagsapi.com/${countryCode.toUpperCase()}/${style}/${size}.png`;
}
