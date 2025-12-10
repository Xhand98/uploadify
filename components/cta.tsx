"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import FadeContent from "@/components/reactbits/fade-content"
import SplitText from "@/components/reactbits/split-text"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"

interface CTAProps {
  dict: {
    title: string
    description: string
    button: string
  }
  lang: Locale
}

export function CTA({ dict, lang }: CTAProps) {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <FadeContent blur duration={800}>
          <div className="relative overflow-hidden rounded-2xl bg-primary p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
                <SplitText
                  text={dict.title}
                  className="text-4xl md:text-5xl font-bold text-primary-foreground"
                  delay={50}
                  duration={0.5}
                  splitType="words"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">{dict.description}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="text-base px-8 group" asChild>
                  <Link href={`/${lang}/solicitar`}>
                    {dict.button}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  )
}
