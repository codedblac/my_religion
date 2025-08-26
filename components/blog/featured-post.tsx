import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export function FeaturedPost() {
  const featuredPost = {
    slug: "finding-hope-in-difficult-times",
    title: "Finding Hope in Difficult Times: A Biblical Perspective",
    excerpt:
      "Life often presents us with challenges that seem insurmountable. In these moments, where do we turn for hope? This article explores how Scripture provides comfort and guidance when we need it most.",
    author: "Pastor John Smith",
    date: "2024-01-15",
    category: "Biblical Insights",
    readTime: "8 min read",
    image: "/blog-featured-hope.png",
    featured: true,
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-bold mb-4">Featured Article</h2>
          <p className="text-muted-foreground">Don't miss our latest inspiring content</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredPost.image || "/placeholder.svg?height=400&width=600"}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary/90">Featured</Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button className="gap-2">
                      Read Full Article
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
