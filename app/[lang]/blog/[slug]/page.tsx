import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { i18n, type Locale } from "@/lib/i18n/config"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SplitText } from "@/components/reactbits/split-text"
import { FadeContent } from "@/components/reactbits/fade-content"
import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale, slug: "" }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: Locale; slug: string }> }) {
  const { lang, slug } = await params
  const dict = await getDictionary(lang)
  const supabase = await createClient()

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("lang", lang)
    .eq("published", true)
    .single()

  if (error || !post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} dict={dict.nav} />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          <FadeContent>
            <Button variant="ghost" asChild className="mb-6">
              <Link href={`/${lang}/blog`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {lang === "es" ? "Volver al blog" : "Back to blog"}
              </Link>
            </Button>
          </FadeContent>

          <FadeContent delay={100}>
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
          </FadeContent>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <SplitText text={post.title} />
          </h1>

          <FadeContent delay={200}>
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.created_at).toLocaleDateString(lang === "es" ? "es-DO" : "en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </FadeContent>

          {post.cover_image && (
            <FadeContent delay={300}>
              <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
                <Image src={post.cover_image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
            </FadeContent>
          )}

          <FadeContent delay={400}>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Simple markdown-like rendering */}
              {post.content.split("\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                      {paragraph.replace("### ", "")}
                    </h3>
                  )
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <li key={index} className="ml-6">
                      {paragraph.replace("- ", "")}
                    </li>
                  )
                }
                if (paragraph.trim() === "") {
                  return <br key={index} />
                }
                return (
                  <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </FadeContent>

          <FadeContent delay={500}>
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <Button variant="outline" asChild>
                  <Link href={`/${lang}/blog`}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {lang === "es" ? "Ver más artículos" : "View more articles"}
                  </Link>
                </Button>
                <Button asChild>
                  <Link href={`/${lang}/solicitar`}>{lang === "es" ? "Comenzar ahora" : "Get started"}</Link>
                </Button>
              </div>
            </div>
          </FadeContent>
        </article>
      </main>

      <Footer dict={dict.footer} lang={lang} />
    </div>
  )
}
