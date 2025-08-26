import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    slug: "power-of-community-prayer",
    title: "The Power of Community Prayer",
    excerpt:
      "Discover how praying together strengthens our faith and builds deeper connections within our church family.",
    author: "Pastor Sarah Johnson",
    date: "2024-01-12",
    category: "Faith & Life",
    readTime: "5 min read",
    image: "/blog-community-prayer.png",
  },
  {
    slug: "youth-mission-trip-recap",
    title: "Youth Mission Trip: Serving in Guatemala",
    excerpt: "Our youth group shares their transformative experience serving communities in Guatemala this summer.",
    author: "Mike Wilson",
    date: "2024-01-10",
    category: "Community Stories",
    readTime: "7 min read",
    image: "/blog-mission-trip.png",
  },
  {
    slug: "understanding-grace",
    title: "Understanding Grace: More Than We Deserve",
    excerpt:
      "A deep dive into the biblical concept of grace and how it transforms our relationship with God and others.",
    author: "Pastor John Smith",
    date: "2024-01-08",
    category: "Biblical Insights",
    readTime: "10 min read",
    image: "/blog-understanding-grace.png",
  },
  {
    slug: "new-childrens-ministry-launch",
    title: "Exciting Updates to Our Children's Ministry",
    excerpt: "Learn about the new programs and activities we're launching to help kids grow in their faith journey.",
    author: "Sarah Martinez",
    date: "2024-01-05",
    category: "Ministry Updates",
    readTime: "4 min read",
    image: "/blog-childrens-ministry.png",
  },
  {
    slug: "advent-reflections",
    title: "Advent Reflections: Preparing Our Hearts",
    excerpt: "Meaningful ways to prepare your heart and home for the Christmas season through Advent traditions.",
    author: "Pastor Sarah Johnson",
    date: "2024-01-03",
    category: "Faith & Life",
    readTime: "6 min read",
    image: "/blog-advent-reflections.png",
  },
  {
    slug: "food-drive-success-story",
    title: "Community Food Drive: A Heartwarming Success",
    excerpt: "See how our community came together to support local families in need during the holiday season.",
    author: "Mary Thompson",
    date: "2024-01-01",
    category: "Community Stories",
    readTime: "3 min read",
    image: "/blog-food-drive.png",
  },
]

export function BlogGrid() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg?height=200&width=400"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary/90">{post.category}</Badge>
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog?page=2"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
          >
            Load More Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
