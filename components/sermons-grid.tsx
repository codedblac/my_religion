import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"

const sermons = [
  {
    id: 1,
    slug: "walking-in-faith",
    title: "Walking in Faith Through Uncertainty",
    speaker: "Pastor John Smith",
    series: "Faith Foundations",
    date: "2024-01-14",
    duration: "42 min",
    thumbnail: "/church-sanctuary-with-cross.png",
    description: "Discover how to maintain unwavering faith even in life's most challenging moments.",
    views: 1250,
  },
  {
    id: 2,
    slug: "love-in-action",
    title: "Love in Action: Serving Others",
    speaker: "Pastor Sarah Johnson",
    series: "Living Hope",
    date: "2024-01-07",
    duration: "38 min",
    thumbnail: "/people-serving-in-community.png",
    description: "Learn practical ways to demonstrate Christ's love through service to others.",
    views: 980,
  },
  {
    id: 3,
    slug: "psalm-23-comfort",
    title: "Finding Comfort in Psalm 23",
    speaker: "Pastor Mike Wilson",
    series: "Psalms Study",
    date: "2023-12-31",
    duration: "45 min",
    thumbnail: "/peaceful-shepherd-with-sheep.png",
    description: "Explore the timeless comfort and guidance found in the beloved Psalm 23.",
    views: 1580,
  },
  {
    id: 4,
    slug: "advent-hope",
    title: "The Hope of Advent",
    speaker: "Pastor John Smith",
    series: "Advent 2024",
    date: "2023-12-24",
    duration: "35 min",
    thumbnail: "/christmas-nativity-scene.png",
    description: "Celebrate the hope that came into the world through the birth of Jesus Christ.",
    views: 2100,
  },
  {
    id: 5,
    slug: "prayer-power",
    title: "The Power of Persistent Prayer",
    speaker: "Pastor Sarah Johnson",
    series: "Faith Foundations",
    date: "2023-12-17",
    duration: "40 min",
    thumbnail: "/hands-in-prayer.png",
    description: "Understand the importance and impact of consistent, persistent prayer in our lives.",
    views: 890,
  },
  {
    id: 6,
    slug: "grace-sufficient",
    title: "His Grace is Sufficient",
    speaker: "Pastor Mike Wilson",
    series: "Living Hope",
    date: "2023-12-10",
    duration: "43 min",
    thumbnail: "/sunrise-over-mountains-with-cross.png",
    description: "Discover how God's grace is more than enough for every situation we face.",
    views: 1340,
  },
]

export function SermonsGrid() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermons.map((sermon) => (
            <Link key={sermon.id} href={`/sermons/${sermon.slug}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={sermon.thumbnail || "/placeholder.svg"}
                    alt={sermon.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3">
                      <Play className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-primary/90">{sermon.series}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {sermon.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{sermon.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {sermon.speaker}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(sermon.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {sermon.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <button className="px-4 py-2 border rounded-lg hover:bg-muted transition-colors">Previous</button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">1</button>
            <button className="px-4 py-2 border rounded-lg hover:bg-muted transition-colors">2</button>
            <button className="px-4 py-2 border rounded-lg hover:bg-muted transition-colors">3</button>
            <button className="px-4 py-2 border rounded-lg hover:bg-muted transition-colors">Next</button>
          </div>
        </div>
      </div>
    </section>
  )
}
