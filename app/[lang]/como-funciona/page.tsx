import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Send, CheckCircle, Rocket, CreditCard } from "lucide-react"
import SplitText from "@/components/reactbits/split-text"
import FadeContent from "@/components/reactbits/fade-content"

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const steps = [
    {
      icon: FileText,
      title:
        lang === "es"
          ? "Completa el formulario"
          : lang === "en"
            ? "Complete the form"
            : lang === "fr"
              ? "Remplissez le formulaire"
              : "Preencha o formulário",
      description:
        lang === "es"
          ? "Cuéntanos sobre tu proyecto, qué tecnologías usa y qué necesitas."
          : lang === "en"
            ? "Tell us about your project, technologies used, and what you need."
            : lang === "fr"
              ? "Parlez-nous de votre projet, des technologies utilisées et de vos besoins."
              : "Conte-nos sobre seu projeto, tecnologias usadas e o que você precisa.",
    },
    {
      icon: Send,
      title:
        lang === "es"
          ? "Envía tu código"
          : lang === "en"
            ? "Send your code"
            : lang === "fr"
              ? "Envoyez votre code"
              : "Envie seu código",
      description:
        lang === "es"
          ? "Comparte tu repositorio de GitHub, un ZIP o un link de Drive con tu proyecto."
          : lang === "en"
            ? "Share your GitHub repository, ZIP file, or Drive link with your project."
            : lang === "fr"
              ? "Partagez votre dépôt GitHub, fichier ZIP ou lien Drive avec votre projet."
              : "Compartilhe seu repositório GitHub, arquivo ZIP ou link do Drive com seu projeto.",
    },
    {
      icon: CheckCircle,
      title:
        lang === "es"
          ? "Revisamos tu proyecto"
          : lang === "en"
            ? "We review your project"
            : lang === "fr"
              ? "Nous examinons votre projet"
              : "Revisamos seu projeto",
      description:
        lang === "es"
          ? "Verificamos que todo esté en orden y te contactamos si tenemos dudas."
          : lang === "en"
            ? "We verify everything is in order and contact you if we have questions."
            : lang === "fr"
              ? "Nous vérifions que tout est en ordre et vous contactons si nous avons des questions."
              : "Verificamos que tudo está em ordem e entramos em contato se tivermos dúvidas.",
    },
    {
      icon: Rocket,
      title:
        lang === "es"
          ? "¡Desplegamos!"
          : lang === "en"
            ? "We deploy!"
            : lang === "fr"
              ? "Nous déployons!"
              : "Implantamos!",
      description:
        lang === "es"
          ? "Tu proyecto estará online en minutos. Te enviamos las credenciales de acceso."
          : lang === "en"
            ? "Your project will be online in minutes. We send you the access credentials."
            : lang === "fr"
              ? "Votre projet sera en ligne en quelques minutes. Nous vous envoyons les identifiants."
              : "Seu projeto estará online em minutos. Enviamos suas credenciais de acesso.",
    },
    {
      icon: CreditCard,
      title:
        lang === "es"
          ? "Pago semanal"
          : lang === "en"
            ? "Weekly payment"
            : lang === "fr"
              ? "Paiement hebdomadaire"
              : "Pagamento semanal",
      description:
        lang === "es"
          ? "Paga semanalmente por transferencia, PayPal o efectivo. Sin contratos largos."
          : lang === "en"
            ? "Pay weekly by transfer, PayPal, or cash. No long contracts."
            : lang === "fr"
              ? "Payez chaque semaine par virement, PayPal ou espèces. Pas de contrats longs."
              : "Pague semanalmente por transferência, PayPal ou dinheiro. Sem contratos longos.",
    },
  ]

  const pageTitle =
    lang === "es"
      ? "Cómo Funciona"
      : lang === "en"
        ? "How It Works"
        : lang === "fr"
          ? "Comment ça marche"
          : "Como Funciona"
  const pageDescription =
    lang === "es"
      ? "De tu computadora al mundo en 5 simples pasos"
      : lang === "en"
        ? "From your computer to the world in 5 simple steps"
        : lang === "fr"
          ? "De votre ordinateur au monde en 5 étapes simples"
          : "Do seu computador para o mundo em 5 passos simples"

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header lang={lang} dict={dict.nav} />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <SplitText
                text={pageTitle}
                className="text-4xl md:text-5xl font-bold"
                delay={60}
                duration={0.5}
                splitType="words"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
              />
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{pageDescription}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <FadeContent key={index} blur duration={600} delay={index * 150}>
                <div className="flex gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                  </div>
                  <Card className="flex-1 border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </FadeContent>
            ))}
          </div>

          <FadeContent blur duration={600} delay={800}>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href={`/${lang}/solicitar`}>
                  {lang === "es"
                    ? "Comenzar ahora"
                    : lang === "en"
                      ? "Get started"
                      : lang === "fr"
                        ? "Commencer"
                        : "Começar agora"}
                </Link>
              </Button>
            </div>
          </FadeContent>
        </div>
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </div>
  )
}
