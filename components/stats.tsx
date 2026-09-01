"use client"

import FadeContent from "@/components/reactbits/fade-content"
import Counter from "@/components/reactbits/counter"

interface StatsProps {
  dict: {
    uptime: string
    deployment: string
    students: string
    support: string
  }
}

export function Stats({ dict }: StatsProps) {
  const stats = [
    {
      value: 99.9,
      suffix: "%",
      label: dict.uptime,
      subtext: "SLA incluido",
    },
    {
      value: 5,
      prefix: "<",
      suffix: " min",
      label: dict.deployment,
      subtext: "Promedio",
    },
    {
      value: 24,
      suffix: "/7",
      label: dict.support,
      subtext: "En español",
    },
    {
      value: 500,
      suffix: "+",
      label: dict.students,
      subtext: "Y creciendo",
    },
  ]

  return (
    <section className="border-y border-border py-16 px-4 bg-secondary/40">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeContent key={index} blur duration={600} delay={index * 150}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.prefix}
                  <Counter value={stat.value} direction="up" duration={2} className="inline" />
                  {stat.suffix}
                </div>
                <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.subtext}</div>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  )
}
