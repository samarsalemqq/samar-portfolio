import { cookies } from "next/headers";
import { dictionaries, type Lang, type Theme } from "@/data/i18n";

// The language and theme buttons store the visitor's choice in cookies, so
// the server renders the right version first and nothing flashes on load.
export function getLang(): Lang {
  return cookies().get("lang")?.value === "ar" ? "ar" : "en";
}

export function getTheme(): Theme {
  return cookies().get("theme")?.value === "light" ? "light" : "dark";
}

export function getDictionary() {
  return dictionaries[getLang()];
}
