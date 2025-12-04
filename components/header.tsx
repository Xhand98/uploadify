import { Button } from "@/components/ui/button"
import { HostingLogo } from "@/components/hosting-logo"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <HostingLogo className="h-9 w-9" />
            <span className="text-xl font-bold">Uploadify</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Características
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Precios
            </a>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild>
              <Link href="/solicitar">Comenzar</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
