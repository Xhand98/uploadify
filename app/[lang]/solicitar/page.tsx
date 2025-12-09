import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OrderForm } from "@/components/order-form"
import { Suspense } from "react"

export default async function OrderPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header lang={lang} dict={dict.nav} />
      <main className="flex-1 pt-24 pb-16">
        <Suspense fallback={<div className="container mx-auto px-4 py-8 text-center">Cargando...</div>}>
          <OrderForm />
        </Suspense>
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </div>
  )
}
