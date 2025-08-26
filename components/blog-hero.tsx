import { Button } from "@/components/ui/button"
import { BookOpen, Users, Heart } from "lucide-react"

export function BlogHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Church Blog</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover inspiring stories, biblical insights, and community updates that strengthen faith and build
            connections within our church family.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Biblical Insights</h3>
              <p className="text-sm text-muted-foreground">Deep dives into Scripture and practical applications</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Community Stories</h3>
              <p className="text-sm text-muted-foreground">Testimonies and updates from our church family</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Faith & Life</h3>
              <p className="text-sm text-muted-foreground">Practical guidance for living out your faith daily</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Subscribe to Updates</Button>
            <Button variant="outline" size="lg">
              Browse Categories
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
