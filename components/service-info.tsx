import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Music, Coffee, Car, Shirt } from "lucide-react"

const serviceDetails = [
  {
    title: "Service Times",
    icon: Clock,
    content: [
      "Sunday Morning: 9:00 AM & 11:00 AM",
      "Wednesday Evening: 7:00 PM",
      "Services typically last 75-90 minutes",
      "Both Sunday services have the same message",
    ],
  },
  {
    title: "What to Expect",
    icon: Music,
    content: [
      "Welcoming atmosphere with friendly greeters",
      "Contemporary worship music (20-25 minutes)",
      "Practical, Bible-based teaching (30-35 minutes)",
      "Time for prayer and community connection",
    ],
  },
  {
    title: "Dress Code",
    icon: Shirt,
    content: [
      "Come as you are – no dress code required",
      "You'll see everything from jeans to suits",
      "Comfort is more important than fashion",
      "Focus on your heart, not your wardrobe",
    ],
  },
  {
    title: "Parking & Arrival",
    icon: Car,
    content: [
      "Free parking available in our main lot",
      "Additional street parking on Church Street",
      "Arrive 10-15 minutes early for best seating",
      "Handicap accessible parking near main entrance",
    ],
  },
  {
    title: "Coffee & Connection",
    icon: Coffee,
    content: [
      "Free coffee and pastries before each service",
      "Fellowship time after services in the lobby",
      "Connect with our welcome team for questions",
      "Information table with church resources",
    ],
  },
  {
    title: "Accessibility",
    icon: Users,
    content: [
      "Wheelchair accessible throughout the building",
      "Hearing assistance devices available",
      "Large print bulletins and Bibles",
      "Reserved seating for mobility needs",
    ],
  },
]

export function ServiceInfo() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">What to Expect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here's everything you need to know to feel comfortable and prepared for your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceDetails.map((detail) => {
            const IconComponent = detail.icon
            return (
              <Card key={detail.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">{detail.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {detail.content.map((item, index) => (
                      <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
