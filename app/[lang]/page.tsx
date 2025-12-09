import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen">
      <Header lang={lang} dict={dict.nav} />
      <Hero dict={dict.hero} />
      <Stats dict={dict.stats} />
      <Features dict={dict.features} />
      <Pricing dict={dict.pricing} lang={lang} />
      <CTA dict={dict.cta} />
      <Footer dict={dict.footer} lang={lang} />
    </main>
  )
}
