export const i18n = {
  defaultLocale: "es",
  locales: ["es", "en", "fr", "pt"],
} as const

export type Locale = (typeof i18n)["locales"][number]

export const localeLabels: Record<Locale, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
  pt: "Português",
}
