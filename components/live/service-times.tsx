import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar, MapPin, Users } from "lucide-react"

export function ServiceTimes() {
  const services = [
    {
      name: "Sunday Morning Worship",
      times: ["9:00 AM", "11:00 AM"],
      description: "Join us for inspiring worship, biblical teaching, and community fellowship.",
      duration: "75 minutes",
      childcare: true,
    },
    {
      name: "Wednesday Evening",
      times: ["7:00 PM"],
      description: "Midweek Bible study and prayer time for spiritual growth and connection.",
      duration: "60 minutes",
      childcare: true,
    },
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold mb-4">Service Times</h2>
            <p className="text-muted-foreground">Join us in person or online for worship and biblical teaching</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.times.map((time) => (
                      <span
                        key={time}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {time}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground">{service.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </div>
                    {service.childcare && (
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        Childcare available
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      In-person & online
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
