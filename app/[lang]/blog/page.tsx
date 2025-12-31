import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { i18n, type Locale } from "@/lib/i18n/config"
import { Badge } from "@/components/ui/badge"
import { SplitText } from "@/components/reactbits/split-text"
import { BlurText } from "@/components/reactbits/blur-text"
import { FadeContent } from "@/components/reactbits/fade-content"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowRight } from "lucide-react"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function BlogPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const supabase = await createClient()

  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .eq("lang", lang)
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} dict={dict.nav} />

      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <SplitText text={lang === "es" ? "Noticias y Tutoriales" : "News and Tutorials"} />
            </h1>
            <div className="max-w-2xl mx-auto">
              <BlurText
                text={
                  lang === "es"
                    ? "Aprende sobre hosting, desarrollo web y las últimas tendencias tecnológicas"
                    : "Learn about hosting, web development and the latest tech trends"
                }
                className="text-lg text-muted-foreground"
              />
            </div>
          </div>

          {!posts || posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {lang === "es" ? "No hay posts disponibles aún." : "No posts available yet."}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <FadeContent key={post.id} delay={index * 100}>
                  <Link href={`/${lang}/blog/${post.slug}`} className="group">
                    <article className="border border-border rounded-xl overflow-hidden bg-card hover:shadow-lg transition-shadow">
                      {post.cover_image && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.cover_image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <Badge variant="outline" className="mb-3">
                          {post.category}
                        </Badge>
                        <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(post.created_at).toLocaleDateString(lang === "es" ? "es-DO" : "en-US")}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </FadeContent>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer dict={dict.footer} lang={lang} />
    </div>
  )
}
