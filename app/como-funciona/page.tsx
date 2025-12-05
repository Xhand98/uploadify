"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SplitText } from "@/components/reactbits/split-text"
import { BlurText } from "@/components/reactbits/blur-text"
import { FadeContent } from "@/components/reactbits/fade-content"
import { Upload, MessageSquare, Rocket, CreditCard, CheckCircle } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Envía tu Proyecto",
    description:
      "Completa el formulario de solicitud con los detalles de tu proyecto. Puedes enviar tu código via GitHub, archivo ZIP, o cualquier método que prefieras.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Revisión y Cotización",
    description:
      "Revisamos tu proyecto y te contactamos para confirmar los requisitos técnicos. Te enviamos la cotización según el plan que mejor se adapte.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Despliegue",
    description:
      "Configuramos tu servidor, desplegamos tu aplicación y realizamos las pruebas necesarias. Todo listo en menos de 24 horas.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Tu Sitio en Línea",
    description:
      "Te enviamos las credenciales de acceso y tu URL. Tu proyecto ahora está disponible para todo el mundo.",
  },
  {
    number: "05",
    icon: CreditCard,
    title: "Pago Semanal",
    description:
      "Realiza tu pago semanal para mantener tu servicio activo. Aceptamos transferencias bancarias y pagos móviles.",
  },
]

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeContent blur delay={100}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Proceso Simple
              </span>
            </FadeContent>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <SplitText text="Cómo Funciona Uploadify" className="text-foreground" />
            </h1>

            <BlurText
              text="De tu computadora al mundo en 5 simples pasos. Sin complicaciones, sin conocimientos técnicos necesarios."
              className="text-lg text-muted-foreground"
              delay={50}
            />
          </div>

          {/* Steps */}
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <FadeContent key={step.number} blur delay={200 + index * 100}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Line connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[39px] top-20 w-0.5 h-[calc(100%-5rem)] bg-border" />
                  )}

                  {/* Number circle */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <span className="text-sm font-bold text-primary mb-1 block">Paso {step.number}</span>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </FadeContent>
            ))}
          </div>

          {/* CTA */}
          <FadeContent blur delay={800}>
            <div className="text-center mt-16">
              <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h2>
              <p className="text-muted-foreground mb-6">Envía tu proyecto hoy y tenlo en línea mañana.</p>
              <Button size="lg" asChild>
                <Link href="/solicitar">Solicitar Hosting</Link>
              </Button>
            </div>
          </FadeContent>
        </div>
      </main>

      <Footer />
    </div>
  )
}
