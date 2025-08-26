import { Button } from "@/components/ui/button"
import { Calendar, Users, MapPin } from "lucide-react"

export function EventsHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Church Events</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for worship services, community gatherings, special events, and opportunities to grow in faith
            together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Regular Services</h3>
              <p className="text-sm text-muted-foreground">Weekly worship and Bible study opportunities</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Community Events</h3>
              <p className="text-sm text-muted-foreground">Fellowship, outreach, and social gatherings</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Special Services</h3>
              <p className="text-sm text-muted-foreground">Holiday celebrations and milestone events</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">View Calendar</Button>
            <Button variant="outline" size="lg">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
