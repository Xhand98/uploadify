import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { i18n } from "./config"

export function getLocale(request: Request): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  return match(languages, i18n.locales, i18n.defaultLocale)
}
