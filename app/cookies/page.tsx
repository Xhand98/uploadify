import { SplitText } from "@/components/reactbits/split-text"
import { FadeContent } from "@/components/reactbits/fade-content"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CookiesPage() {
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
          <SplitText text="Política de Cookies" className="text-foreground" delay={50} />
        </h1>

        <FadeContent blur delay={200}>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">Última actualización: Diciembre 2025</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. ¿Qué son las Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio
                web. Nos ayudan a recordar tus preferencias y mejorar tu experiencia.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Cookies que Utilizamos</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted/30">
                  <h3 className="font-semibold mb-2">Cookies Esenciales</h3>
                  <p className="text-muted-foreground text-sm">
                    Necesarias para el funcionamiento básico del sitio. No pueden ser desactivadas.
                  </p>
                </div>
                <div className="border rounded-lg p-4 bg-muted/30">
                  <h3 className="font-semibold mb-2">Cookies de Preferencias</h3>
                  <p className="text-muted-foreground text-sm">
                    Recuerdan tus preferencias como el tema oscuro/claro y configuración de idioma.
                  </p>
                </div>
                <div className="border rounded-lg p-4 bg-muted/30">
                  <h3 className="font-semibold mb-2">Cookies Analíticas</h3>
                  <p className="text-muted-foreground text-sm">
                    Nos ayudan a entender cómo los visitantes interactúan con el sitio para mejorarlo.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Gestionar Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Puedes controlar y eliminar cookies a través de la configuración de tu navegador. Ten en cuenta que
                desactivar ciertas cookies puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Cookies de Terceros</h2>
              <p className="text-muted-foreground leading-relaxed">
                No utilizamos cookies de terceros para publicidad. Solo utilizamos servicios analíticos básicos para
                mejorar nuestro servicio.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para preguntas sobre nuestra política de cookies:{" "}
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
