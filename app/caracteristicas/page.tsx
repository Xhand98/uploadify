"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SplitText } from "@/components/reactbits/split-text"
import { BlurText } from "@/components/reactbits/blur-text"
import { FadeContent } from "@/components/reactbits/fade-content"
import {
  Zap,
  Shield,
  Clock,
  Headphones,
  Globe,
  Server,
  RefreshCw,
  Lock,
  BarChart,
  Cpu,
  HardDrive,
  Wifi,
} from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Zap,
    title: "Despliegue Rápido",
    description: "Tu proyecto en línea en menos de 24 horas. Sin esperas, sin complicaciones.",
  },
  {
    icon: Shield,
    title: "SSL Gratuito",
    description: "Certificado SSL incluido para todas las webs. Conexiones seguras sin costo adicional.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Garantizamos disponibilidad casi total. Tu sitio siempre accesible.",
  },
  {
    icon: Headphones,
    title: "Soporte Dedicado",
    description: "Atención personalizada via WhatsApp. Respuestas rápidas a tus consultas.",
  },
  {
    icon: Globe,
    title: "Dominio Personalizado",
    description: "Conecta tu propio dominio o usa nuestros subdominios gratuitos.",
  },
  {
    icon: Server,
    title: "Servidores Optimizados",
    description: "Infraestructura moderna con SSD y última tecnología para máximo rendimiento.",
  },
  {
    icon: RefreshCw,
    title: "Backups Automáticos",
    description: "Copias de seguridad periódicas para proteger tu información.",
  },
  {
    icon: Lock,
    title: "Seguridad Avanzada",
    description: "Firewall, protección DDoS y monitoreo constante de amenazas.",
  },
  {
    icon: BarChart,
    title: "Panel de Control",
    description: "Accede a estadísticas y métricas de tu sitio web en tiempo real.",
  },
  {
    icon: Cpu,
    title: "Recursos Dedicados",
    description: "RAM y CPU garantizados según tu plan. Sin compartir con otros usuarios.",
  },
  {
    icon: HardDrive,
    title: "Almacenamiento SSD",
    description: "Discos de estado sólido para carga ultrarrápida de tu contenido.",
  },
  {
    icon: Wifi,
    title: "CDN Incluido",
    description: "Red de distribución de contenido para velocidad global.",
  },
]

export default function CaracteristicasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeContent blur delay={100}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Todo Incluido
              </span>
            </FadeContent>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <SplitText text="Características del Servicio" className="text-foreground" />
            </h1>

            <BlurText
              text="Todo lo que necesitas para tener tu proyecto en línea. Sin costos ocultos, sin sorpresas."
              className="text-lg text-muted-foreground"
              delay={50}
            />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FadeContent key={feature.title} blur delay={200 + index * 50}>
                <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </FadeContent>
            ))}
          </div>

          {/* CTA */}
          <FadeContent blur delay={800}>
            <div className="text-center mt-16">
              <h2 className="text-2xl font-bold mb-4">¿Convencido?</h2>
              <p className="text-muted-foreground mb-6">Empieza desde RD$ 50/semana con todas estas características.</p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/solicitar">Comenzar Ahora</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/precios">Ver Precios</Link>
                </Button>
              </div>
            </div>
          </FadeContent>
        </div>
      </main>

      <Footer />
    </div>
  )
}
