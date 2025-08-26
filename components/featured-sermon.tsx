import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Calendar, User } from "lucide-react"

export function FeaturedSermon() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Latest Message</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Catch up on our most recent sermon and be encouraged in your faith journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2 relative">
                <img
                  src="/pastor-preaching-at-church-pulpit-with-warm-lighti.png"
                  alt="Latest sermon"
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full p-4">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardContent className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>December 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Pastor John Smith</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Walking in Faith: Trusting God's Plan</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Discover how to trust God's perfect timing and plan for your life, even when the path ahead seems
                  uncertain. This powerful message will strengthen your faith and encourage your heart.
                </p>
                <div className="flex gap-3">
                  <Button asChild>
                    <Link href="/sermons/walking-in-faith">Watch Full Message</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/sermons">All Sermons</Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
