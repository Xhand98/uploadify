"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Upload, Server, Globe, Zap } from "lucide-react"
import SplitText from "@/components/reactbits/split-text"
import BlurText from "@/components/reactbits/blur-text"
import FadeContent from "@/components/reactbits/fade-content"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { useEffect, useState } from "react"

interface HeroProps {
  dict: {
    badge: string
    title: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    feature1: string
    feature2: string
    feature3: string
  }
  lang: Locale
}

function AnimatedServiceFlow() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    { icon: Upload, eyebrow: "01", label: "Sube tu proyecto", detail: "Un archivo .zip es suficiente" },
    { icon: Zap, eyebrow: "02", label: "Revisamos y preparamos", detail: "Detectamos lo que necesita" },
    { icon: Globe, eyebrow: "03", label: "Publica y comparte", detail: "Tu enlace queda listo" },
  ]

  useEffect(() => {
    const interval = setInterval(() => setActiveStep((prev) => (prev + 1) % steps.length), 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full rounded-xl border border-border bg-card p-6 shadow-xl md:p-8" aria-label="Flujo de publicación de Uploadify">
      <div className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Uploadify / deploy</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight">De archivo a web publicada</h2>
        </div>
        <p className="font-mono text-xs text-muted-foreground" aria-live="polite">Paso {activeStep + 1} de {steps.length}</p>
      </div>

      <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start md:gap-0">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = index === activeStep
          const isComplete = index < activeStep
          return (
            <div key={step.label} className="flex flex-1 items-start gap-4 md:block">
              <div className="flex items-center md:items-start">
                <div className={`flex size-12 shrink-0 items-center justify-center rounded-lg border transition-colors duration-500 ${isActive ? "border-primary bg-primary text-primary-foreground" : isComplete ? "border-primary/40 bg-secondary text-foreground" : "border-border bg-secondary text-muted-foreground"}`}>
                  {isComplete ? <CheckCircle className="size-5" aria-hidden="true" /> : <Icon className="size-5" aria-hidden="true" />}
                </div>
                {index < steps.length - 1 && <div className="hidden h-px w-full bg-border md:mx-4 md:mt-6 md:block"><div className={`h-full bg-primary transition-all duration-700 ${index < activeStep ? "w-full" : "w-0"}`} /></div>}
              </div>
              <div className="md:mt-4">
                <p className="font-mono text-xs text-muted-foreground">{step.eyebrow}</p>
                <p className={`mt-1 font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.detail}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 flex flex-col gap-4 rounded-lg border border-border bg-secondary/60 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground"><Globe className="size-4" aria-hidden="true" /></div>
          <div><p className="text-sm font-medium">mi-portfolio.uploadify.do</p><p className="font-mono text-xs text-muted-foreground">HTTPS · listo para compartir</p></div>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground"><span className="size-2 rounded-full bg-primary" aria-hidden="true" />Publicado</span>
      </div>
    </div>
  )
}

export function Hero({ dict, lang }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <FadeContent blur duration={600} delay={100}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true"></span>
              {dict.badge}
            </div>
          </FadeContent>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
            <SplitText
              text={dict.title}
              className="text-5xl md:text-7xl font-bold tracking-tight"
              delay={50}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h1>

          <div className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            <BlurText text={dict.description} delay={150} animateBy="words" direction="top" />
          </div>

          <FadeContent blur duration={800} delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="text-base px-8 group" asChild>
                <Link href={`/${lang}/solicitar`}>
                  {dict.ctaPrimary}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
                <Link href={`/${lang}/precios`}>{dict.ctaSecondary}</Link>
              </Button>
            </div>
          </FadeContent>

          <FadeContent blur duration={800} delay={600}>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>{dict.feature1}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>{dict.feature2}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>{dict.feature3}</span>
              </div>
            </div>
          </FadeContent>
        </div>

        <FadeContent blur duration={1000} delay={800}>
          <div className="mt-20 max-w-4xl mx-auto">
            <AnimatedServiceFlow />
          </div>
        </FadeContent>
      </div>
    </section>
  )
}
