import { Card, CardContent } from "@/components/ui/card"

const timeline = [
  {
    year: "1985",
    title: "Humble Beginnings",
    description:
      "Grace Community Church was founded by Pastor Robert and Mary Johnson in their living room with just 12 members, united by a vision to serve God and their community.",
  },
  {
    year: "1990",
    title: "First Building",
    description:
      "After five years of meeting in homes and rented spaces, we purchased our first church building on Elm Street, accommodating our growing congregation of 150 members.",
  },
  {
    year: "2000",
    title: "Community Expansion",
    description:
      "We launched our first community outreach programs, including a food bank and after-school tutoring, serving over 500 families in our first year.",
  },
  {
    year: "2010",
    title: "New Sanctuary",
    description:
      "With God's blessing and the generosity of our members, we built our current sanctuary and expanded our facilities to accommodate 800 worshipers.",
  },
  {
    year: "2020",
    title: "Digital Ministry",
    description:
      "We embraced technology to continue serving our community during challenging times, launching online services and virtual small groups that reached people worldwide.",
  },
  {
    year: "2024",
    title: "Growing Forward",
    description:
      "Today, we're a thriving community of over 1,200 members, continuing to grow in faith, love, and service to our community and beyond.",
  },
]

export function ChurchHistory() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From humble beginnings to a thriving community, see how God has been faithful throughout our journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {item.year}
                  </div>
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
