import { Button } from "@/components/ui/button"
import { Cloud } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Cloud className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Uploadify</span>
          </div>

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
            <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Soporte
            </a>
            <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Iniciar sesión
            </Button>
            <Button>Comenzar gratis</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
