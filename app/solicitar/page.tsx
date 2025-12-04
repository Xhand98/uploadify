import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OrderForm } from "@/components/order-form"

export const metadata = {
  title: "Solicitar Hosting - Uploadify",
  description: "Envía tu proyecto y lo ponemos online",
}

export default function SolicitarPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center">Cargando...</div>}>
          <OrderForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
