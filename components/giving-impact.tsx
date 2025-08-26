import { Card, CardContent } from "@/components/ui/card"
import { Users, Home, Globe, Heart } from "lucide-react"

const impactStats = [
  {
    icon: Users,
    number: "150+",
    label: "Families Supported",
    description: "Through our food bank and assistance programs",
  },
  {
    icon: Home,
    number: "12",
    label: "Community Programs",
    description: "Active outreach initiatives in our neighborhood",
  },
  {
    icon: Globe,
    number: "8",
    label: "Mission Partners",
    description: "Supporting global ministry and church planting",
  },
  {
    icon: Heart,
    number: "$125K",
    label: "Annual Giving",
    description: "Total community support in the past year",
  },
]

export function GivingImpact() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Your Impact</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how your generous giving is making a real difference in our community and around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">Transparency & Accountability</h3>
            <p className="text-muted-foreground mb-6">
              We believe in being good stewards of your gifts. Every dollar is carefully managed and directed toward
              ministry that makes an eternal impact. Our financial records are reviewed annually by independent
              auditors, and we're happy to share our annual report with anyone who requests it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/annual-report.pdf"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
              >
                View Annual Report
              </a>
              <a
                href="/financial-transparency"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
              >
                Financial Transparency
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
