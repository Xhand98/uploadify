import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import SplitText from "@/components/reactbits/split-text"
import FadeContent from "@/components/reactbits/fade-content"

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const title =
    lang === "es"
      ? "Política de Cookies"
      : lang === "en"
        ? "Cookie Policy"
        : lang === "fr"
          ? "Politique de Cookies"
          : "Política de Cookies"

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header lang={lang} dict={dict.nav} />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">
            <SplitText
              text={title}
              className="text-4xl font-bold"
              delay={60}
              duration={0.5}
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h1>
          <FadeContent blur duration={600} delay={200}>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2>¿Qué son las cookies?</h2>
              <p>Las cookies son pequeños archivos que se almacenan en tu dispositivo para mejorar tu experiencia.</p>
              <h2>Cookies que utilizamos</h2>
              <ul>
                <li>
                  <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio
                </li>
                <li>
                  <strong>Cookies de preferencias:</strong> Guardan tu idioma y preferencias
                </li>
                <li>
                  <strong>Cookies analíticas:</strong> Nos ayudan a mejorar el sitio
                </li>
              </ul>
              <h2>Gestión de cookies</h2>
              <p>Puedes gestionar tus preferencias de cookies desde la configuración de tu navegador.</p>
            </div>
          </FadeContent>
        </div>
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </div>
  )
}
