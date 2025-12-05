import { SplitText } from "@/components/reactbits/split-text"
import { FadeContent } from "@/components/reactbits/fade-content"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TerminosPage() {
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
          <SplitText text="Términos y Condiciones" className="text-foreground" delay={50} />
        </h1>

        <FadeContent blur delay={200}>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">Última actualización: Diciembre 2025</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Aceptación de los Términos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Al utilizar los servicios de Uploadify, aceptas estos términos y condiciones en su totalidad. Si no
                estás de acuerdo, no debes utilizar nuestros servicios.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Descripción del Servicio</h2>
              <p className="text-muted-foreground leading-relaxed">
                Uploadify proporciona servicios de hosting web para estudiantes en República Dominicana. Nos encargamos
                de desplegar y mantener tu sitio web o aplicación disponible al público.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Uso Aceptable</h2>
              <p className="text-muted-foreground leading-relaxed">No está permitido:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Alojar contenido ilegal, ofensivo o que viole derechos de terceros</li>
                <li>Utilizar el servicio para actividades fraudulentas o maliciosas</li>
                <li>Sobrecargar intencionalmente los recursos del servidor</li>
                <li>Compartir credenciales de acceso con terceros</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Pagos y Facturación</h2>
              <p className="text-muted-foreground leading-relaxed">
                Los pagos se realizan semanalmente según el plan seleccionado. El incumplimiento de pago puede resultar
                en la suspensión temporal del servicio hasta regularizar la cuenta.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Propiedad del Contenido</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantienes todos los derechos sobre tu código y contenido. Uploadify solo utiliza tu contenido para
                proporcionar el servicio de hosting contratado.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Terminación</h2>
              <p className="text-muted-foreground leading-relaxed">
                Puedes cancelar el servicio en cualquier momento. Nos reservamos el derecho de terminar cuentas que
                violen estos términos sin previo aviso.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para consultas sobre estos términos:{" "}
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
