import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, Share, Bookmark } from "lucide-react"

type BlogPostProps = {
  post: {
    title: string
    author: string
    date: string
    category: string
    readTime: string
    image: string
    content: string
    tags: string[]
  }
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Share className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Bookmark className="h-4 w-4" />
                Save
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={post.image || "/placeholder.svg?height=400&width=800"}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none mb-8">
            <div className="whitespace-pre-wrap leading-relaxed">{post.content}</div>
          </div>

          {/* Tags */}
          <div className="border-t pt-6">
            <h4 className="font-semibold mb-3">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
