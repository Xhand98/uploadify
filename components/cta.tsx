import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-12 md:p-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
              Únete a miles de empresas que confían en Uploadify para su presencia web. Comienza gratis hoy y migra tu
              sitio sin costo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-base px-8 group">
                Crear cuenta gratis
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Hablar con ventas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
