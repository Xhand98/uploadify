"use client"

import { Button } from "@/components/ui/button"
import SplitText from "@/components/reactbits/split-text"
import BlurText from "@/components/reactbits/blur-text"
import FadeContent from "@/components/reactbits/fade-content"
import Link from "next/link"
import Image from "next/image"
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
    { label: "Envías tu proyecto", color: "text-blue-400" },
    { label: "Nosotros lo procesamos", color: "text-yellow-400" },
    { label: "Configuramos servidor", color: "text-purple-400" },
    { label: "¡Tu web está online!", color: "text-primary" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full">
      {/* Main visualization card */}
      <div className="rounded-2xl bg-gradient-to-br from-[#0d1117] to-[#161b22] border border-[#30363d] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#30363d] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">U</span>
            </div>
            <span className="text-white font-semibold">Uploadify Flow</span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
        </div>

        {/* Flow visualization */}
        <div className="p-8 md:p-12">
          {/* Steps */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 mb-8">
            {steps.map((step, index) => {
              const isActive = index === activeStep
              const isCompleted = index < activeStep

              return (
                <div key={index} className="flex items-center gap-4 md:flex-col md:gap-3">
                  <div
                    className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "bg-primary/20 scale-110 shadow-lg shadow-primary/20"
                        : isCompleted
                          ? "bg-primary/10"
                          : "bg-[#21262d]"
                    }`}
                  >
                    <span className={`font-mono text-lg font-semibold transition-all duration-500 ${
                      isActive ? step.color : isCompleted ? "text-primary/60" : "text-[#484f58]"
                    }`}>{String(index + 1).padStart(2, "0")}</span>
                    {isActive && (
                      <span className="absolute inset-0 rounded-2xl bg-primary/20 opacity-75"></span>
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium transition-colors duration-300 text-center ${
                      isActive ? "text-white" : "text-[#8b949e]"
                    }`}
                  >
                    {step.label}
                  </span>

                  {/* Connector line (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block w-12 lg:w-20 h-0.5 bg-[#30363d] relative mx-2">
                      <div
                        className={`absolute inset-y-0 left-0 bg-primary transition-all duration-500 ${
                          index < activeStep ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Simulated project cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["mi-portfolio", "tienda-online", "blog-personal", "app-tareas"].map((project, i) => (
              <div
                key={project}
                className={`rounded-lg p-3 border transition-all duration-500 ${
                  i <= activeStep
                    ? "bg-primary/10 border-primary/30 scale-100"
                    : "bg-[#21262d] border-[#30363d] scale-95 opacity-50"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${i <= activeStep ? "bg-primary" : "bg-[#484f58]"}`}></div>
                  <span className="text-xs text-[#8b949e] truncate">{project}</span>
                </div>
                <div className="text-[10px] text-[#6e7681]">
                  {i <= activeStep ? `${project}.uploadify.do` : "Pendiente..."}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer stats */}
        <div className="px-6 py-4 border-t border-[#30363d] flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">99.9%</span>
            <span className="text-[#8b949e]">Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">&lt;24h</span>
            <span className="text-[#8b949e]">Deploy time</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">SSL</span>
            <span className="text-[#8b949e]">Incluido</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero({ dict, lang }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 items-center">
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

          <FadeContent enabled blur duration={800} delay={400}>
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <Button size="lg" className="text-base px-8 group" asChild>
                <Link href={`/${lang}/solicitar`}>
                  {dict.ctaPrimary}
                  <span className="ml-2 text-sm transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
                <Link href={`/${lang}/precios`}>{dict.ctaSecondary}</Link>
              </Button>
            </div>
          </FadeContent>

          <FadeContent enabled blur duration={800} delay={600}>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>{dict.feature1}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>{dict.feature2}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>{dict.feature3}</span>
              </div>
            </div>
          </FadeContent>
        </div>

        <FadeContent enabled blur duration={1000} delay={800}>
          <div className="lg:mt-0 space-y-8">
            <figure className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-primary/5">
              <Image
                src="/modern-hosting-control-panel-dashboard-with-server.jpg"
                alt="Panel de control de Uploadify con métricas y estado del servidor"
                width={1600}
                height={1000}
                className="h-auto w-full object-cover"
                priority
              />
            </figure>
            <AnimatedServiceFlow />
          </div>
        </FadeContent>
      </div>
    </section>
  )
}
