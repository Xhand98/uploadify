import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import SplitText from "@/components/reactbits/split-text"
import FadeContent from "@/components/reactbits/fade-content"

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const title =
    lang === "es"
      ? "Política de Privacidad"
      : lang === "en"
        ? "Privacy Policy"
        : lang === "fr"
          ? "Politique de Confidentialité"
          : "Política de Privacidade"

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
              <p className="text-muted-foreground mb-6">Última actualización: Diciembre 2024</p>
              <h2>1. Información que recopilamos</h2>
              <p>
                Recopilamos información que nos proporcionas directamente, como nombre, email, teléfono y detalles de tu
                proyecto cuando solicitas nuestros servicios.
              </p>
              <h2>2. Uso de la información</h2>
              <p>
                Utilizamos tu información para proporcionar y mejorar nuestros servicios, comunicarnos contigo y
                procesar pagos.
              </p>
              <h2>3. Compartir información</h2>
              <p>
                No vendemos ni compartimos tu información personal con terceros, excepto cuando sea necesario para
                proporcionar nuestros servicios.
              </p>
              <h2>4. Seguridad</h2>
              <p>Implementamos medidas de seguridad para proteger tu información personal.</p>
              <h2>5. Contacto</h2>
              <p>Para preguntas sobre esta política, contáctanos en hendrickherrera9@gmail.com</p>
            </div>
          </FadeContent>
        </div>
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </div>
  )
}
