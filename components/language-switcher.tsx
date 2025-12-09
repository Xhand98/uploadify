"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface LanguageSwitcherProps {
  lang: Locale
}

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const pathname = usePathname()

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return `/${locale}`
    const segments = pathname.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={redirectedPathname("es")} className={lang === "es" ? "font-bold" : ""}>
            Español
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={redirectedPathname("en")} className={lang === "en" ? "font-bold" : ""}>
            English
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
