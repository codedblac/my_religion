import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Sunday Morning Worship",
    category: "Worship Services",
    date: "2024-01-21",
    time: "9:00 AM & 11:00 AM",
    location: "Main Sanctuary",
    description: "Join us for inspiring worship, biblical teaching, and community fellowship.",
    image: "/church-worship-service.png",
    recurring: "Weekly",
    registrationRequired: false,
    capacity: 300,
    registered: 0,
  },
  {
    id: 2,
    title: "Community Food Drive",
    category: "Outreach",
    date: "2024-01-27",
    time: "10:00 AM - 2:00 PM",
    location: "Church Parking Lot",
    description: "Help us collect non-perishable food items for local families in need.",
    image: "/community-food-drive.png",
    recurring: null,
    registrationRequired: true,
    capacity: 50,
    registered: 23,
  },
  {
    id: 3,
    title: "Youth Winter Retreat",
    category: "Youth Events",
    date: "2024-02-02",
    time: "Friday 6:00 PM - Sunday 4:00 PM",
    location: "Mountain View Retreat Center",
    description: "A weekend of fun, fellowship, and spiritual growth for teens ages 13-18.",
    image: "/youth-winter-retreat.png",
    recurring: null,
    registrationRequired: true,
    capacity: 40,
    registered: 32,
  },
  {
    id: 4,
    title: "Marriage Enrichment Workshop",
    category: "Education",
    date: "2024-02-10",
    time: "9:00 AM - 3:00 PM",
    location: "Fellowship Hall",
    description: "Strengthen your marriage with practical tools and biblical principles.",
    image: "/marriage-workshop.png",
    recurring: null,
    registrationRequired: true,
    capacity: 25,
    registered: 18,
  },
  {
    id: 5,
    title: "Ash Wednesday Service",
    category: "Special Services",
    date: "2024-02-14",
    time: "7:00 PM",
    location: "Main Sanctuary",
    description: "Begin the Lenten season with prayer, reflection, and the imposition of ashes.",
    image: "/ash-wednesday-service.png",
    recurring: null,
    registrationRequired: false,
    capacity: 200,
    registered: 0,
  },
  {
    id: 6,
    title: "Women's Bible Study",
    category: "Education",
    date: "2024-02-15",
    time: "10:00 AM - 11:30 AM",
    location: "Room 201",
    description: "Weekly study exploring the book of Philippians with discussion and fellowship.",
    image: "/womens-bible-study.png",
    recurring: "Weekly",
    registrationRequired: false,
    capacity: 30,
    registered: 0,
  },
]

export function UpcomingEvents() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground">Don't miss these opportunities to connect, grow, and serve together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <img
                  src={event.image || "/placeholder.svg?height=200&width=400"}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary/90">{event.category}</Badge>
                </div>
                {event.recurring && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary">{event.recurring}</Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{event.description}</p>

                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                  {event.registrationRequired && (
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {event.registered}/{event.capacity} registered
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    {event.registrationRequired ? "Register" : "Learn More"}
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline">Load More Events</Button>
        </div>
      </div>
    </section>
  )
}
