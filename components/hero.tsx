"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import SplitText from "@/components/reactbits/split-text"
import BlurText from "@/components/reactbits/blur-text"
import FadeContent from "@/components/reactbits/fade-content"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"

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

export function Hero({ dict, lang }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <FadeContent blur duration={600} delay={100}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
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
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="relative rounded-xl border border-border bg-card overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
              <div className="relative p-8">
                <img
                  src="/modern-hosting-control-panel-dashboard-with-server.jpg"
                  alt="Uploadify Dashboard"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  )
}
