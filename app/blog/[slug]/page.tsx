import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const posts: Record<
  string,
  {
    title: string
    excerpt: string
    date: string
    category: string
    image: string
    readTime: string
    content: string
  }
> = {
  "como-subir-tu-primer-proyecto": {
    title: "Cómo subir tu primer proyecto a Uploadify",
    excerpt: "Guía paso a paso para estudiantes que quieren desplegar su primer proyecto web en minutos.",
    date: "2025-01-10",
    category: "Tutorial",
    image: "/student-deploying-web-project-laptop-code.jpg",
    readTime: "5 min",
    content: `
## Introducción

Subir tu primer proyecto puede parecer intimidante, pero con Uploadify es más fácil que nunca. En esta guía te mostraremos paso a paso cómo hacerlo.

## Paso 1: Prepara tu proyecto

Antes de subir, asegúrate de que tu proyecto esté listo:
- Verifica que todos los archivos estén organizados
- Prueba tu proyecto localmente
- Revisa que no tengas errores en la consola

## Paso 2: Crea tu cuenta en Uploadify

Si aún no tienes cuenta, regístrate en nuestra plataforma. El proceso es simple y solo toma unos segundos.

## Paso 3: Sube tu proyecto

Una vez dentro del panel de control:
1. Haz clic en "Nuevo Proyecto"
2. Arrastra tu carpeta o selecciona los archivos
3. Espera a que se procesen
4. ¡Listo! Tu proyecto está en línea

## Conclusión

Como ves, desplegar tu proyecto es muy sencillo. Si tienes dudas, nuestro equipo de soporte está disponible para ayudarte.
    `,
  },
  "optimizar-rendimiento-web": {
    title: "5 tips para optimizar el rendimiento de tu sitio",
    excerpt: "Aprende técnicas esenciales para que tu sitio cargue más rápido y ofrezca mejor experiencia.",
    date: "2025-01-08",
    category: "Guía",
    image: "/website-performance-optimization-speed-metrics.jpg",
    readTime: "7 min",
    content: `
## Por qué importa el rendimiento

Un sitio rápido mejora la experiencia del usuario y el SEO. Aquí te compartimos 5 tips esenciales.

## 1. Optimiza tus imágenes

Las imágenes suelen ser el contenido más pesado. Usa formatos modernos como WebP y comprime sin perder calidad.

## 2. Minimiza CSS y JavaScript

Elimina código innecesario y minifica tus archivos para reducir el tamaño de descarga.

## 3. Usa caché del navegador

Configura headers de caché para que los recursos se almacenen localmente en el navegador del usuario.

## 4. Carga diferida (Lazy Loading)

No cargues todo de una vez. Implementa lazy loading para imágenes y componentes que no son visibles inicialmente.

## 5. Elige un buen hosting

Un servidor rápido hace toda la diferencia. Con Uploadify tienes infraestructura optimizada para velocidad.
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString("es-DO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <article className="container mx-auto max-w-3xl">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 -ml-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al blog
            </Button>
          </Link>

          <Badge className="mb-4">{post.category}</Badge>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime} de lectura
            </span>
            <Button variant="ghost" size="sm" className="ml-auto">
              <Share2 className="h-4 w-4 mr-2" />
              Compartir
            </Button>
          </div>

          <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {post.content.split("\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.trim() === "") return null
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={i} className="ml-4 text-muted-foreground">
                    {paragraph.replace("- ", "")}
                  </li>
                )
              }
              if (paragraph.match(/^\d\./)) {
                return (
                  <li key={i} className="ml-4 text-muted-foreground list-decimal">
                    {paragraph.replace(/^\d\.\s/, "")}
                  </li>
                )
              }
              return (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              )
            })}
          </div>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl border border-primary/20">
            <h3 className="font-semibold mb-2">¿Listo para empezar?</h3>
            <p className="text-muted-foreground text-sm mb-4">Despliega tu proyecto en minutos con Uploadify.</p>
            <Link href="/#pricing">
              <Button>Ver planes</Button>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
