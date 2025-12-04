import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  readTime: string
}

export function BlogCard({ slug, title, excerpt, date, category, image, readTime }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("es-DO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link href={`/blog/${slug}`}>
      <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:border-primary/50 h-full">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{category}</Badge>
        </div>
        <CardContent className="p-5">
          <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {readTime}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
