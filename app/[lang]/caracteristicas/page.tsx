import { getDictionary } from "@/lib/i18n/get-dictionary"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import {
  Server,
  Shield,
  Zap,
  HeadphonesIcon,
  Database,
  Lock,
  Globe,
  BarChart3,
  RefreshCw,
  Clock,
  Users,
  Cpu,
} from "lucide-react"
import SplitText from "@/components/reactbits/split-text"
import FadeContent from "@/components/reactbits/fade-content"

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const features = [
    { icon: Zap, ...dict.features.deploy },
    { icon: Shield, ...dict.features.ssl },
    { icon: Server, ...dict.features.uptime },
    { icon: HeadphonesIcon, ...dict.features.support },
    { icon: Database, ...dict.features.backup },
    { icon: Lock, ...dict.features.domain },
    {
      icon: Globe,
      title: lang === "es" ? "CDN Global" : lang === "en" ? "Global CDN" : lang === "fr" ? "CDN Mondial" : "CDN Global",
      description:
        lang === "es"
          ? "Contenido entregado desde servidores cercanos a tus usuarios"
          : lang === "en"
            ? "Content delivered from servers close to your users"
            : lang === "fr"
              ? "Contenu livré depuis des serveurs proches de vos utilisateurs"
              : "Conteúdo entregue de servidores próximos aos seus usuários",
    },
    {
      icon: BarChart3,
      title: lang === "es" ? "Analíticas" : lang === "en" ? "Analytics" : lang === "fr" ? "Analytiques" : "Análises",
      description:
        lang === "es"
          ? "Estadísticas de visitas y rendimiento de tu sitio"
          : lang === "en"
            ? "Visit statistics and site performance"
            : lang === "fr"
              ? "Statistiques de visites et performance du site"
              : "Estatísticas de visitas e desempenho do site",
    },
    {
      icon: RefreshCw,
      title:
        lang === "es"
          ? "Auto-deploy"
          : lang === "en"
            ? "Auto-deploy"
            : lang === "fr"
              ? "Auto-déploiement"
              : "Auto-deploy",
      description:
        lang === "es"
          ? "Actualizaciones automáticas desde tu repositorio"
          : lang === "en"
            ? "Automatic updates from your repository"
            : lang === "fr"
              ? "Mises à jour automatiques depuis votre dépôt"
              : "Atualizações automáticas do seu repositório",
    },
    {
      icon: Clock,
      title:
        lang === "es"
          ? "Despliegue Rápido"
          : lang === "en"
            ? "Fast Deployment"
            : lang === "fr"
              ? "Déploiement Rapide"
              : "Implantação Rápida",
      description:
        lang === "es"
          ? "Tu proyecto online en minutos, no en días"
          : lang === "en"
            ? "Your project online in minutes, not days"
            : lang === "fr"
              ? "Votre projet en ligne en minutes, pas en jours"
              : "Seu projeto online em minutos, não em dias",
    },
    {
      icon: Users,
      title:
        lang === "es"
          ? "Soporte Estudiantes"
          : lang === "en"
            ? "Student Support"
            : lang === "fr"
              ? "Support Étudiants"
              : "Suporte Estudantes",
      description:
        lang === "es"
          ? "Ayuda especializada para proyectos académicos"
          : lang === "en"
            ? "Specialized help for academic projects"
            : lang === "fr"
              ? "Aide spécialisée pour les projets académiques"
              : "Ajuda especializada para projetos acadêmicos",
    },
    {
      icon: Cpu,
      title:
        lang === "es"
          ? "Recursos Escalables"
          : lang === "en"
            ? "Scalable Resources"
            : lang === "fr"
              ? "Ressources Évolutives"
              : "Recursos Escaláveis",
      description:
        lang === "es"
          ? "Aumenta tus recursos cuando tu proyecto crezca"
          : lang === "en"
            ? "Increase resources as your project grows"
            : lang === "fr"
              ? "Augmentez vos ressources à mesure que votre projet grandit"
              : "Aumente recursos conforme seu projeto cresce",
    },
  ]

  const pageTitle =
    lang === "es"
      ? "Características"
      : lang === "en"
        ? "Features"
        : lang === "fr"
          ? "Fonctionnalités"
          : "Características"

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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{dict.features.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeContent key={index} blur duration={600} delay={index * 80}>
                <Card className="border-border/50 hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </FadeContent>
            ))}
          </div>
        </div>
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </div>
  )
}
