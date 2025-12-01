import { Server, Shield, Zap, HeadphonesIcon, Database, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Velocidad extrema",
      description: "Servidores SSD NVMe y CDN global para cargar tu sitio en milisegundos.",
    },
    {
      icon: Shield,
      title: "Seguridad avanzada",
      description: "Protección DDoS, firewall de aplicaciones y backups automáticos diarios.",
    },
    {
      icon: Server,
      title: "Infraestructura escalable",
      description: "Crece sin límites. Escala recursos según las necesidades de tu negocio.",
    },
    {
      icon: HeadphonesIcon,
      title: "Soporte 24/7",
      description: "Equipo técnico disponible en español, listo para ayudarte cuando lo necesites.",
    },
    {
      icon: Database,
      title: "Bases de datos ilimitadas",
      description: "MySQL, PostgreSQL y MongoDB. Sin límites de bases de datos en planes Pro.",
    },
    {
      icon: Lock,
      title: "SSL gratis",
      description: "Certificados SSL Let's Encrypt incluidos y renovación automática.",
    },
  ]

  return (
    <section id="features" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Todo lo que necesitas para triunfar</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tecnología de punta y herramientas profesionales para llevar tu proyecto al siguiente nivel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
