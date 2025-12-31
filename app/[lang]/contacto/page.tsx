import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"
import SplitText from "@/components/reactbits/split-text"
import FadeContent from "@/components/reactbits/fade-content"

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const pageTitle = lang === "es" ? "Contacto" : lang === "en" ? "Contact" : lang === "fr" ? "Contact" : "Contato"
  const pageDescription =
    lang === "es"
      ? "¿Tienes preguntas? Estamos aquí para ayudarte"
      : lang === "en"
        ? "Have questions? We're here to help"
        : lang === "fr"
          ? "Des questions? Nous sommes là pour vous aider"
          : "Tem perguntas? Estamos aqui para ajudar"

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hendrickherrera9@gmail.com",
      href: "mailto:hendrickherrera9@gmail.com",
    },
    {
      icon: Phone,
      label: lang === "es" ? "Teléfono" : lang === "en" ? "Phone" : lang === "fr" ? "Téléphone" : "Telefone",
      value: "+1 829-598-1500",
      href: "tel:+18295981500",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@hendrick.german",
      href: "https://instagram.com/hendrick.german",
    },
    {
      icon: MapPin,
      label: lang === "es" ? "Ubicación" : lang === "en" ? "Location" : lang === "fr" ? "Emplacement" : "Localização",
      value:
        lang === "es"
          ? "República Dominicana"
          : lang === "en"
            ? "Dominican Republic"
            : lang === "fr"
              ? "République Dominicaine"
              : "República Dominicana",
      href: null,
    },
  ]

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

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <FadeContent blur duration={600} delay={100}>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6">
                  {lang === "es"
                    ? "Información de contacto"
                    : lang === "en"
                      ? "Contact Information"
                      : lang === "fr"
                        ? "Informations de contact"
                        : "Informações de contato"}
                </h2>
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FadeContent>

            <FadeContent blur duration={600} delay={300}>
              <ContactForm />
            </FadeContent>
          </div>
        </div>
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </div>
  )
}
