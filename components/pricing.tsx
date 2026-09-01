"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FadeContent from "@/components/reactbits/fade-content"
import SplitText from "@/components/reactbits/split-text"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"

interface PricingProps {
  dict: {
    title: string
    description: string
    weekly: string
    basic: {
      name: string
      price: string
      description: string
      features: string[]
    }
    medium: {
      name: string
      price: string
      description: string
      popular: string
      features: string[]
    }
    advanced: {
      name: string
      price: string
      description: string
      features: string[]
    }
    enterprise: {
      name: string
      price: string
      description: string
      features: string[]
    }
    selectPlan: string
  }
  lang: Locale
}

export function Pricing({ dict, lang }: PricingProps) {
  const plans = [
    {
      id: 1,
      name: dict.basic.name,
      price: dict.basic.price,
      description: dict.basic.description,
      popular: false,
      specs: "250MB • 0.5C • 1T",
      features: dict.basic.features,
    },
    {
      id: 2,
      name: dict.medium.name,
      price: dict.medium.price,
      description: dict.medium.description,
      popular: true,
      popularLabel: dict.medium.popular,
      specs: "1GB • 1C • 2T",
      features: dict.medium.features,
    },
    {
      id: 3,
      name: dict.advanced.name,
      price: dict.advanced.price,
      description: dict.advanced.description,
      popular: false,
      specs: "2GB • 2C • 4T",
      features: dict.advanced.features,
    },
    {
      id: 4,
      name: dict.enterprise.name,
      price: dict.enterprise.price,
      description: dict.enterprise.description,
      popular: false,
      specs: "Custom",
      features: dict.enterprise.features,
    },
  ]

  return (
    <section id="pricing" className="border-y border-border py-24 px-4 bg-secondary/40">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <SplitText
              text={dict.title}
              className="text-4xl md:text-5xl font-bold"
              delay={60}
              duration={0.5}
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{dict.description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <FadeContent key={index} blur duration={700} delay={index * 150}>
              <Card
                className={`relative flex flex-col w-[280px] min-w-[260px] ${plan.popular ? "border-primary shadow-lg scale-105 z-10" : "border-border/50"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-primary text-primary-foreground whitespace-nowrap">{plan.popularLabel}</Badge>
                  </div>
                )}

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{plan.description}</CardDescription>
                  <div className="mt-2">
                    <Badge variant="secondary" className="text-xs font-mono whitespace-nowrap">
                      {plan.specs}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="mb-4">
                    {plan.price === dict.enterprise.price ? (
                      <div className="text-2xl font-bold">Contactar</div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-medium text-muted-foreground">RD$</span>
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-sm text-muted-foreground">/sem</span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-foreground/80 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-4">
                  <Button className="w-full" size="sm" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link
                      href={
                        plan.price === dict.enterprise.price
                          ? `/${lang}/contacto`
                          : `/${lang}/solicitar?plan=${plan.id}`
                      }
                    >
                      {plan.price === dict.enterprise.price ? "Contactar" : dict.selectPlan}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeContent>
          ))}
        </div>

        <FadeContent blur duration={600} delay={700}>
          <div className="mt-12 text-center text-sm text-muted-foreground">
            Todos los planes incluyen despliegue asistido y soporte para estudiantes
          </div>
        </FadeContent>
      </div>
    </section>
  )
}
