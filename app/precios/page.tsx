"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SplitText } from "@/components/reactbits/split-text"
import { BlurText } from "@/components/reactbits/blur-text"
import { FadeContent } from "@/components/reactbits/fade-content"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Básico",
    price: "50",
    specs: "250MB • 0.5C • 1T",
    description: "Ideal para proyectos pequeños y páginas estáticas.",
    features: ["Subdominio gratuito", "SSL incluido", "Soporte por email", "1 sitio web", "Backups semanales"],
    popular: false,
  },
  {
    name: "Medio",
    price: "100",
    specs: "500MB • 1C • 2T",
    description: "Para proyectos con más tráfico y funcionalidades.",
    features: [
      "Dominio personalizado",
      "SSL incluido",
      "Soporte prioritario",
      "2 sitios web",
      "Backups diarios",
      "CDN incluido",
    ],
    popular: true,
  },
  {
    name: "Avanzado",
    price: "200",
    specs: "1GB • 2C • 4T",
    description: "Para aplicaciones web y proyectos exigentes.",
    features: [
      "Dominio personalizado",
      "SSL incluido",
      "Soporte 24/7",
      "5 sitios web",
      "Backups en tiempo real",
      "CDN premium",
      "Base de datos",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Cotizar",
    specs: "Recursos ilimitados",
    description: "Soluciones personalizadas para grandes proyectos.",
    features: [
      "Recursos dedicados",
      "SSL avanzado",
      "Soporte dedicado",
      "Sitios ilimitados",
      "Backups personalizados",
      "SLA garantizado",
      "Consultoría incluida",
    ],
    popular: false,
  },
]

export default function PreciosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeContent blur delay={100}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Precios Simples
              </span>
            </FadeContent>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <SplitText text="Planes para Todos" className="text-foreground" />
            </h1>

            <BlurText
              text="Sin contratos largos, sin costos ocultos. Paga semanalmente y cancela cuando quieras."
              className="text-lg text-muted-foreground"
              delay={50}
            />
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <FadeContent key={plan.name} blur delay={200 + index * 100}>
                <div
                  className={`relative p-6 rounded-2xl border ${
                    plan.popular ? "border-primary bg-primary/5" : "border-border bg-card"
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                    <Badge variant="secondary" className="text-xs mb-3">
                      {plan.specs}
                    </Badge>
                    <div className="flex items-baseline justify-center gap-1">
                      {plan.price === "Cotizar" ? (
                        <span className="text-2xl font-bold">Cotizar</span>
                      ) : (
                        <>
                          <span className="text-sm text-muted-foreground">RD$</span>
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-sm text-muted-foreground">/sem</span>
                        </>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link href={`/solicitar?plan=${plan.name.toLowerCase()}`}>
                      {plan.price === "Cotizar" ? "Contactar" : "Elegir Plan"}
                    </Link>
                  </Button>
                </div>
              </FadeContent>
            ))}
          </div>

          {/* FAQ */}
          <FadeContent blur delay={700}>
            <div className="max-w-2xl mx-auto mt-20">
              <h2 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h2>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-border">
                  <h4 className="font-semibold mb-2">¿Cómo realizo el pago semanal?</h4>
                  <p className="text-sm text-muted-foreground">
                    Aceptamos transferencias bancarias y pagos móviles. Te enviamos un recordatorio cada semana.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border">
                  <h4 className="font-semibold mb-2">¿Puedo cambiar de plan?</h4>
                  <p className="text-sm text-muted-foreground">
                    Sí, puedes subir o bajar de plan en cualquier momento. El cambio se aplica en tu próximo ciclo.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border">
                  <h4 className="font-semibold mb-2">¿Qué pasa si no pago a tiempo?</h4>
                  <p className="text-sm text-muted-foreground">
                    Tienes 3 días de gracia. Después, tu sitio se suspende temporalmente hasta que regularices el pago.
                  </p>
                </div>
              </div>
            </div>
          </FadeContent>
        </div>
      </main>

      <Footer />
    </div>
  )
}
