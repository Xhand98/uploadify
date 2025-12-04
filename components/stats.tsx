"use client"

import FadeContent from "@/components/reactbits/fade-content"
import Counter from "@/components/reactbits/counter"

export function Stats() {
  const stats = [
    {
      value: 99.9,
      suffix: "%",
      label: "Uptime garantizado",
      subtext: "SLA incluido",
    },
    {
      value: 100,
      prefix: "<",
      suffix: "ms",
      label: "Tiempo de respuesta",
      subtext: "Servidores en RD",
    },
    {
      value: 24,
      suffix: "/7",
      label: "Soporte técnico",
      subtext: "En español",
    },
    {
      value: 5000,
      suffix: "+",
      label: "Clientes activos",
      subtext: "Y creciendo",
    },
  ]

  return (
    <section className="py-20 px-4 bg-secondary/30">
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
