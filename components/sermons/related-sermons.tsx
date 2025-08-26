import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, User } from "lucide-react"
import Link from "next/link"

const relatedSermons = [
  {
    slug: "love-in-action",
    title: "Love in Action: Serving Others",
    speaker: "Pastor Sarah Johnson",
    series: "Living Hope",
    date: "2024-01-07",
    thumbnail: "/people-serving-in-community.png",
  },
  {
    slug: "psalm-23-comfort",
    title: "Finding Comfort in Psalm 23",
    speaker: "Pastor Mike Wilson",
    series: "Psalms Study",
    date: "2023-12-31",
    thumbnail: "/peaceful-shepherd-with-sheep.png",
  },
  {
    slug: "prayer-power",
    title: "The Power of Persistent Prayer",
    speaker: "Pastor Sarah Johnson",
    series: "Faith Foundations",
    date: "2023-12-17",
    thumbnail: "/hands-in-prayer.png",
  },
]

type RelatedSermonsProps = {
  currentSlug: string
}

export function RelatedSermons({ currentSlug }: RelatedSermonsProps) {
  const filtered = relatedSermons.filter((sermon) => sermon.slug !== currentSlug)

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-8">Related Sermons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((sermon) => (
              <Link key={sermon.slug} href={`/sermons/${sermon.slug}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={sermon.thumbnail || "/placeholder.svg"}
                      alt={sermon.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-2">
                        <Play className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <Badge className="absolute top-2 left-2 text-xs bg-primary/90">{sermon.series}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {sermon.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {sermon.speaker.split(" ")[1]}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(sermon.date).toLocaleDateString()}
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
