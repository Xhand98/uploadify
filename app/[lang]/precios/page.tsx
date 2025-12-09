import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Pricing } from "@/components/pricing"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SplitText from "@/components/reactbits/split-text"
import FadeContent from "@/components/reactbits/fade-content"

export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const faqs =
    lang === "es"
      ? [
          {
            q: "¿Cómo funciona el pago semanal?",
            a: "Pagas cada semana por transferencia bancaria, PayPal o efectivo. Te enviamos un recordatorio antes de cada pago.",
          },
          {
            q: "¿Puedo cambiar de plan?",
            a: "Sí, puedes subir o bajar de plan en cualquier momento. El cambio se aplica en tu próximo ciclo de pago.",
          },
          {
            q: "¿Qué pasa si no pago a tiempo?",
            a: "Tu sitio se suspende temporalmente. Una vez realices el pago, lo reactivamos inmediatamente.",
          },
          {
            q: "¿Incluyen base de datos?",
            a: "Sí, todos los planes incluyen soporte para bases de datos MySQL, PostgreSQL o MongoDB según tu necesidad.",
          },
          {
            q: "¿Puedo usar mi propio dominio?",
            a: "Sí, en los planes Medio y superiores puedes conectar tu dominio personalizado sin costo adicional.",
          },
        ]
      : lang === "en"
        ? [
            {
              q: "How does weekly payment work?",
              a: "You pay each week via bank transfer, PayPal, or cash. We send you a reminder before each payment.",
            },
            {
              q: "Can I change my plan?",
              a: "Yes, you can upgrade or downgrade at any time. The change applies to your next billing cycle.",
            },
            {
              q: "What happens if I don't pay on time?",
              a: "Your site is temporarily suspended. Once you make the payment, we reactivate it immediately.",
            },
            {
              q: "Do you include databases?",
              a: "Yes, all plans include support for MySQL, PostgreSQL, or MongoDB databases as needed.",
            },
            {
              q: "Can I use my own domain?",
              a: "Yes, with Medium and higher plans you can connect your custom domain at no extra cost.",
            },
          ]
        : lang === "fr"
          ? [
              {
                q: "Comment fonctionne le paiement hebdomadaire?",
                a: "Vous payez chaque semaine par virement, PayPal ou espèces. Nous vous envoyons un rappel avant chaque paiement.",
              },
              {
                q: "Puis-je changer de forfait?",
                a: "Oui, vous pouvez passer à un forfait supérieur ou inférieur à tout moment. Le changement s'applique à votre prochain cycle.",
              },
              {
                q: "Que se passe-t-il si je ne paie pas à temps?",
                a: "Votre site est temporairement suspendu. Une fois le paiement effectué, nous le réactivons immédiatement.",
              },
              {
                q: "Les bases de données sont-elles incluses?",
                a: "Oui, tous les forfaits incluent MySQL, PostgreSQL ou MongoDB selon vos besoins.",
              },
              {
                q: "Puis-je utiliser mon propre domaine?",
                a: "Oui, avec les forfaits Moyen et supérieurs, vous pouvez connecter votre domaine personnalisé sans frais supplémentaires.",
              },
            ]
          : [
              {
                q: "Como funciona o pagamento semanal?",
                a: "Você paga semanalmente via transferência, PayPal ou dinheiro. Enviamos um lembrete antes de cada pagamento.",
              },
              {
                q: "Posso mudar de plano?",
                a: "Sim, você pode fazer upgrade ou downgrade a qualquer momento. A mudança se aplica ao próximo ciclo.",
              },
              {
                q: "O que acontece se eu não pagar a tempo?",
                a: "Seu site é suspenso temporariamente. Assim que você fizer o pagamento, reativamos imediatamente.",
              },
              {
                q: "Vocês incluem banco de dados?",
                a: "Sim, todos os planos incluem suporte para MySQL, PostgreSQL ou MongoDB conforme necessário.",
              },
              {
                q: "Posso usar meu próprio domínio?",
                a: "Sim, com planos Médio e superiores você pode conectar seu domínio personalizado sem custo extra.",
              },
            ]

  const faqTitle =
    lang === "es"
      ? "Preguntas Frecuentes"
      : lang === "en"
        ? "Frequently Asked Questions"
        : lang === "fr"
          ? "Questions Fréquentes"
          : "Perguntas Frequentes"

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header lang={lang} dict={dict.nav} />
      <main className="flex-1 pt-24 pb-16">
        <Pricing dict={dict.pricing} lang={lang} />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              <SplitText
                text={faqTitle}
                className="text-3xl font-bold"
                delay={60}
                duration={0.5}
                splitType="words"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
              />
            </h2>
            <FadeContent blur duration={600} delay={200}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeContent>
          </div>
        </div>
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </div>
  )
}
