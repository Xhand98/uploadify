import { HostingLogo } from "@/components/hosting-logo"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"

interface FooterProps {
  dict: {
    description: string
    product: string
    company: string
    aboutUs: string
    plans: string
    legal: string
    privacy: string
    terms: string
    cookies: string
    rights: string
  }
  lang: Locale
}

export function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="border-t border-border/40 bg-muted/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href={`/${lang}`} className="flex items-center gap-3 mb-4">
              <HostingLogo className="h-32 w-32" />
              <span className="text-xl font-bold">Uploadify</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{dict.description}</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:hendrickherrera9@gmail.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                hendrickherrera9@gmail.com
              </a>
              <a href="tel:+18295981500" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                +1 829-598-1500
              </a>
              <span className="flex items-center gap-2 font-medium text-foreground">Hendrick Herrera</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.product}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`/${lang}/caracteristicas`} className="hover:text-foreground transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/precios`} className="hover:text-foreground transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/como-funciona`} className="hover:text-foreground transition-colors">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/solicitar`} className="hover:text-foreground transition-colors">
                  Solicitar Plan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.company}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`/${lang}/como-funciona`} className="hover:text-foreground transition-colors">
                  {dict.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/blog`} className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/precios`} className="hover:text-foreground transition-colors">
                  {dict.plans}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contacto`} className="hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.legal}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`/${lang}/privacidad`} className="hover:text-foreground transition-colors">
                  {dict.privacy}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/terminos`} className="hover:text-foreground transition-colors">
                  {dict.terms}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/sla`} className="hover:text-foreground transition-colors">
                  SLA
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/cookies`} className="hover:text-foreground transition-colors">
                  {dict.cookies}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Uploadify. Hendrick Herrera. {dict.rights}</p>
          <div className="flex gap-6">
            <a
              href="https://instagram.com/hendrick.german"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@xhand98"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
