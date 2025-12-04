import { HostingLogo } from "@/components/hosting-logo"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <HostingLogo className="h-32 w-32" />
              <span className="text-xl font-bold">Uploadify</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Hosting profesional para estudiantes en República Dominicana.
            </p>
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
            <h3 className="font-semibold mb-4">Producto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/#features" className="hover:text-foreground transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-foreground transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  SLA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Uploadify. Hendrick Herrera. Todos los derechos reservados.</p>
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
