import { SplitText } from "@/components/reactbits/split-text"
import { FadeContent } from "@/components/reactbits/fade-content"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function SLAPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <FadeContent blur delay={100}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </FadeContent>

        <h1 className="text-4xl font-bold mb-8">
          <SplitText text="Acuerdo de Nivel de Servicio (SLA)" className="text-foreground" delay={50} />
        </h1>

        <FadeContent blur delay={200}>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">Última actualización: Diciembre 2025</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Garantía de Disponibilidad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Uploadify se compromete a mantener una disponibilidad del servicio de al menos 99.9% mensual. Esto
                significa que tu sitio web estará accesible prácticamente todo el tiempo.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Compromisos por Plan</h2>
              <div className="grid gap-4 mt-4">
                <div className="border rounded-lg p-4 bg-muted/30">
                  <h3 className="font-semibold mb-2">Plan Básico</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Uptime 99.5%
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Soporte por email (48h respuesta)
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-muted/30">
                  <h3 className="font-semibold mb-2">Plan Medio</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Uptime 99.7%
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Soporte por email (24h respuesta)
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-muted/30">
                  <h3 className="font-semibold mb-2">Plan Avanzado</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Uptime 99.9%
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Soporte prioritario (12h respuesta)
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-primary/10 border-primary/30">
                  <h3 className="font-semibold mb-2">Plan Enterprise</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Uptime 99.99%
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Soporte dedicado 24/7
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Gestor de cuenta asignado
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Mantenimiento Programado</h2>
              <p className="text-muted-foreground leading-relaxed">
                El mantenimiento programado se realizará fuera de horas pico y se notificará con al menos 24 horas de
                anticipación. Este tiempo no cuenta contra la garantía de disponibilidad.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Compensación</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si no cumplimos con la garantía de disponibilidad mensual, recibirás crédito proporcional en tu próxima
                factura según el tiempo de inactividad experimentado.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para reportar problemas de disponibilidad:{" "}
                <a href="mailto:hendrickherrera9@gmail.com" className="text-primary hover:underline">
                  hendrickherrera9@gmail.com
                </a>
              </p>
            </section>
          </div>
        </FadeContent>
      </div>
    </main>
  )
}
