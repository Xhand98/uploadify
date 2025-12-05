import { SplitText } from "@/components/reactbits/split-text"
import { FadeContent } from "@/components/reactbits/fade-content"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacidadPage() {
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
          <SplitText text="Política de Privacidad" className="text-foreground" delay={50} />
        </h1>

        <FadeContent blur delay={200}>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">Última actualización: Diciembre 2025</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Información que Recopilamos</h2>
              <p className="text-muted-foreground leading-relaxed">
                En Uploadify recopilamos la siguiente información cuando utilizas nuestros servicios:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Nombre completo y datos de contacto (email, teléfono)</li>
                <li>Información de tu institución educativa</li>
                <li>Archivos y código fuente de tu proyecto web</li>
                <li>Información técnica sobre el uso del servicio</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Uso de la Información</h2>
              <p className="text-muted-foreground leading-relaxed">Utilizamos tu información para:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Proporcionar y mantener el servicio de hosting</li>
                <li>Comunicarnos contigo sobre tu cuenta y proyectos</li>
                <li>Enviar actualizaciones importantes del servicio</li>
                <li>Mejorar nuestros servicios y experiencia de usuario</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Protección de Datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra
                acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Compartir Información</h2>
              <p className="text-muted-foreground leading-relaxed">
                No vendemos ni compartimos tu información personal con terceros, excepto cuando sea necesario para
                proporcionar el servicio o cuando lo exija la ley.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para preguntas sobre esta política, contacta a:{" "}
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
