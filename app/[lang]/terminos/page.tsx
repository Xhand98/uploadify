import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import SplitText from "@/components/reactbits/split-text"
import FadeContent from "@/components/reactbits/fade-content"

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const title =
    lang === "es"
      ? "Términos y Condiciones"
      : lang === "en"
        ? "Terms and Conditions"
        : lang === "fr"
          ? "Termes et Conditions"
          : "Termos e Condições"

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
              <h2>1. Aceptación de términos</h2>
              <p>Al usar nuestros servicios, aceptas estos términos y condiciones.</p>
              <h2>2. Servicios</h2>
              <p>Uploadify proporciona servicios de hosting web con pago semanal.</p>
              <h2>3. Pagos</h2>
              <p>Los pagos son semanales. El servicio se suspende si no se recibe el pago a tiempo.</p>
              <h2>4. Uso aceptable</h2>
              <p>No se permite contenido ilegal, malware, phishing o cualquier actividad que viole la ley.</p>
              <h2>5. Terminación</h2>
              <p>Podemos terminar el servicio si se violan estos términos.</p>
            </div>
          </FadeContent>
        </div>
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </div>
  )
}
