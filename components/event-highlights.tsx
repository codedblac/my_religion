import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"

const events = [
  {
    title: "Christmas Eve Service",
    date: "December 24, 2024",
    time: "7:00 PM",
    location: "Main Sanctuary",
    description: "Join us for a special candlelight service celebrating the birth of our Savior.",
    category: "Special Service",
    href: "/events/christmas-eve-service",
  },
  {
    title: "New Year Prayer Night",
    date: "December 31, 2024",
    time: "10:00 PM",
    location: "Fellowship Hall",
    description: "Welcome the new year with prayer, worship, and fellowship.",
    category: "Prayer",
    href: "/events/new-year-prayer",
  },
  {
    title: "Youth Winter Retreat",
    date: "January 12-14, 2025",
    time: "All Day",
    location: "Mountain View Camp",
    description: "A weekend of fun, fellowship, and spiritual growth for our youth.",
    category: "Youth",
    href: "/events/youth-winter-retreat",
  },
]

export function EventHighlights() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join us for these special events and be part of our growing community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {events.map((event) => (
            <Card key={event.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{event.category}</Badge>
                </div>
                <CardTitle className="font-serif text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={event.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
