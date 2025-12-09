import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import SplitText from "@/components/reactbits/split-text"
import FadeContent from "@/components/reactbits/fade-content"

export default async function SLAPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const title =
    lang === "es"
      ? "Acuerdo de Nivel de Servicio"
      : lang === "en"
        ? "Service Level Agreement"
        : lang === "fr"
          ? "Accord de Niveau de Service"
          : "Acordo de Nível de Serviço"

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
              <h2>Compromisos de Uptime</h2>
              <ul>
                <li>
                  <strong>Plan Básico:</strong> 99% uptime
                </li>
                <li>
                  <strong>Plan Medio:</strong> 99.5% uptime
                </li>
                <li>
                  <strong>Plan Avanzado:</strong> 99.9% uptime
                </li>
                <li>
                  <strong>Enterprise:</strong> 99.99% uptime con SLA personalizado
                </li>
              </ul>
              <h2>Soporte</h2>
              <ul>
                <li>
                  <strong>Básico:</strong> Email (24-48h respuesta)
                </li>
                <li>
                  <strong>Medio:</strong> Email prioritario (12h respuesta)
                </li>
                <li>
                  <strong>Avanzado:</strong> WhatsApp 24/7
                </li>
                <li>
                  <strong>Enterprise:</strong> Soporte dedicado
                </li>
              </ul>
            </div>
          </FadeContent>
        </div>
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </div>
  )
}
