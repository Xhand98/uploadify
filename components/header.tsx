import { Button } from "@/components/ui/button"
import { HostingLogo } from "@/components/hosting-logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"

interface HeaderProps {
  lang: Locale
  dict: {
    howItWorks: string
    features: string
    pricing: string
    blog: string
    contact: string
    getStarted: string
  }
}

export function Header({ lang, dict }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <HostingLogo className="h-9 w-9" />
            <span className="text-xl font-bold">Uploadify</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href={`/${lang}/como-funciona`}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {dict.howItWorks}
            </Link>
            <Link
              href={`/${lang}/caracteristicas`}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {dict.features}
            </Link>
            <Link
              href={`/${lang}/precios`}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {dict.pricing}
            </Link>
            <Link
              href={`/${lang}/blog`}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {dict.blog}
            </Link>
            <Link
              href={`/${lang}/contacto`}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {dict.contact}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher lang={lang} />
            <Button asChild>
              <Link href={`/${lang}/solicitar`}>{dict.getStarted}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
