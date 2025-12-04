import { BlogCard } from "./blog-card"

const posts = [
  {
    slug: "como-subir-tu-primer-proyecto",
    title: "Cómo subir tu primer proyecto a Uploadify",
    excerpt: "Guía paso a paso para estudiantes que quieren desplegar su primer proyecto web en minutos.",
    date: "2025-01-10",
    category: "Tutorial",
    image: "/student-deploying-web-project-laptop-code.jpg",
    readTime: "5 min",
  },
  {
    slug: "optimizar-rendimiento-web",
    title: "5 tips para optimizar el rendimiento de tu sitio",
    excerpt: "Aprende técnicas esenciales para que tu sitio cargue más rápido y ofrezca mejor experiencia.",
    date: "2025-01-08",
    category: "Guía",
    image: "/website-performance-optimization-speed-metrics.jpg",
    readTime: "7 min",
  },
  {
    slug: "que-es-un-dominio",
    title: "¿Qué es un dominio y cómo elegir el tuyo?",
    excerpt: "Entiende qué son los dominios, cómo funcionan y consejos para elegir el nombre perfecto.",
    date: "2025-01-05",
    category: "Conceptos",
    image: "/domain-name-www-address-internet.jpg",
    readTime: "4 min",
  },
  {
    slug: "diferencias-hosting-compartido-vps",
    title: "Hosting compartido vs VPS: ¿Cuál necesitas?",
    excerpt: "Comparamos ambas opciones para que elijas la mejor según tus necesidades y presupuesto.",
    date: "2025-01-02",
    category: "Comparativa",
    image: "/server-room-data-center-cloud-hosting.jpg",
    readTime: "6 min",
  },
]

export function BlogList() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
  )
}
