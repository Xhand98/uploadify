import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogList } from "@/components/blog/blog-list"

export const metadata = {
  title: "Blog | Uploadify",
  description: "Tutoriales, guías y noticias sobre hosting, desarrollo web y tecnología para estudiantes.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Blog de <span className="text-primary">Uploadify</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Aprende sobre hosting, desarrollo web y las mejores prácticas para desplegar tus proyectos.
            </p>
          </div>
          <BlogList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
