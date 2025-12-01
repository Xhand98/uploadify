import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "99",
      description: "Para empezar con tu primer proyecto",
      popular: false,
      specs: "250MB RAM • 0.5 Core • 1 Thread",
      features: [
        "250 MB de RAM",
        "0.5 Core + 1 Thread",
        "Dominio aleatorio incluido",
        "SSL gratis",
        "Panel de control básico",
        "Soporte por email",
      ],
    },
    {
      name: "Intermedio",
      price: "199",
      description: "Ideal para proyectos en crecimiento",
      popular: true,
      specs: "1GB RAM • 1 Core • 2 Threads",
      features: [
        "1 GB de RAM",
        "1 Core + 2 Threads",
        "Dominio relacionado con tu web",
        "SSL gratis",
        "Panel de control completo",
        "Soporte básico incluido",
        "Backups semanales",
      ],
    },
    {
      name: "Avanzado",
      price: "349",
      description: "Para proyectos que necesitan potencia",
      popular: false,
      specs: "2GB RAM • 2 Cores • 4 Threads",
      features: [
        "2 GB de RAM",
        "2 Cores + 4 Threads",
        "Dominio relacionado con tu web",
        "SSL gratis",
        "Panel de control avanzado",
        "Soporte preferencial",
        "Backups diarios",
        "Monitoreo 24/7",
      ],
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      description: "Recursos a tu medida",
      popular: false,
      specs: "RAM y CPU personalizados",
      features: [
        "RAM personalizada",
        "CPU personalizado",
        "Dominio personalizado",
        "SSL avanzado",
        "Todo personalizado",
        "Contacto directo con administradores",
        "Backups en tiempo real",
        "Prioridad máxima",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Planes semanales accesibles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Precios pensados para estudiantes. Paga semanalmente y escala cuando lo necesites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : "border-border/50"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <Badge className="bg-primary text-primary-foreground">Más popular</Badge>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-2">
                  <Badge variant="secondary" className="text-xs font-mono">
                    {plan.specs}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  {plan.price === "Personalizado" ? (
                    <div className="text-3xl font-bold">Contactar</div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-medium text-muted-foreground">RD$</span>
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/semana</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  {plan.price === "Personalizado" ? "Contactar" : "Comenzar ahora"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          Todos los planes incluyen despliegue asistido y soporte para estudiantes
        </div>
      </div>
    </section>
  )
}
