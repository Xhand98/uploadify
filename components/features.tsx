"use client"

import { Server, Shield, Zap, HeadphonesIcon, Database, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import FadeContent from "@/components/reactbits/fade-content"
import SplitText from "@/components/reactbits/split-text"

interface FeaturesProps {
  dict: {
    title: string
    description: string
    ssl: { title: string; description: string }
    deploy: { title: string; description: string }
    support: { title: string; description: string }
    uptime: { title: string; description: string }
    backup: { title: string; description: string }
    domain: { title: string; description: string }
  }
}

export function Features({ dict }: FeaturesProps) {
  const features = [
    {
      icon: Zap,
      title: dict.deploy.title,
      description: dict.deploy.description,
    },
    {
      icon: Shield,
      title: dict.ssl.title,
      description: dict.ssl.description,
    },
    {
      icon: Server,
      title: dict.uptime.title,
      description: dict.uptime.description,
    },
    {
      icon: HeadphonesIcon,
      title: dict.support.title,
      description: dict.support.description,
    },
    {
      icon: Database,
      title: dict.backup.title,
      description: dict.backup.description,
    },
    {
      icon: Lock,
      title: dict.domain.title,
      description: dict.domain.description,
    },
  ]

  return (
    <section id="features" className="py-24 px-4">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeContent key={index} blur duration={600} delay={index * 100}>
              <Card className="border-border/50 hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  )
}
