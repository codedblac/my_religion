import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"
import Link from "next/link"

const relatedPosts = [
  {
    slug: "power-of-community-prayer",
    title: "The Power of Community Prayer",
    author: "Pastor Sarah Johnson",
    date: "2024-01-12",
    category: "Faith & Life",
    image: "/blog-community-prayer.png",
  },
  {
    slug: "understanding-grace",
    title: "Understanding Grace: More Than We Deserve",
    author: "Pastor John Smith",
    date: "2024-01-08",
    category: "Biblical Insights",
    image: "/blog-understanding-grace.png",
  },
  {
    slug: "advent-reflections",
    title: "Advent Reflections: Preparing Our Hearts",
    author: "Pastor Sarah Johnson",
    date: "2024-01-03",
    category: "Faith & Life",
    image: "/blog-advent-reflections.png",
  },
]

type RelatedPostsProps = {
  currentSlug: string
}

export function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  const filtered = relatedPosts.filter((post) => post.slug !== currentSlug)

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image || "/placeholder.svg?height=150&width=300"}
                      alt={post.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 text-xs bg-primary/90">{post.category}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author.split(" ")[1]}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
