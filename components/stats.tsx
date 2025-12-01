export function Stats() {
  const stats = [
    {
      value: "99.9%",
      label: "Uptime garantizado",
      subtext: "SLA incluido",
    },
    {
      value: "<100ms",
      label: "Tiempo de respuesta",
      subtext: "Servidores en RD",
    },
    {
      value: "24/7",
      label: "Soporte técnico",
      subtext: "En español",
    },
    {
      value: "5,000+",
      label: "Clientes activos",
      subtext: "Y creciendo",
    },
  ]

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
