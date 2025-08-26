import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, MapPin } from "lucide-react"

const ministryStats = [
  { label: "Active Ministries", value: "25+", icon: Users },
  { label: "Weekly Programs", value: "40+", icon: Calendar },
  { label: "Volunteers Serving", value: "200+", icon: Users },
  { label: "Community Events", value: "50+", icon: MapPin },
]

export function MinistriesOverview() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ministry Impact</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how God is working through our community to transform lives and strengthen faith.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {ministryStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">Our Ministry Philosophy</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe every person has unique gifts and a calling to serve. Our ministries are designed to help you
            discover your purpose, develop your talents, and deploy them for God's kingdom. Whether you're new to faith
            or have been walking with Jesus for years, there's a place for you to grow and contribute.
          </p>
        </div>
      </div>
    </section>
  )
}
