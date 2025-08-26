import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, Music, BookOpen, Baby, Handshake } from "lucide-react"

const ministries = [
  {
    title: "Youth Ministry",
    description: "Empowering the next generation through faith, fellowship, and fun activities.",
    icon: Users,
    href: "/ministries#youth",
  },
  {
    title: "Women's Ministry",
    description: "Building sisterhood and spiritual growth through Bible study and community.",
    icon: Heart,
    href: "/ministries#women",
  },
  {
    title: "Worship Team",
    description: "Leading our congregation in heartfelt worship and praise to God.",
    icon: Music,
    href: "/ministries#worship",
  },
  {
    title: "Bible Study",
    description: "Deepening our understanding of God's Word through group study and discussion.",
    icon: BookOpen,
    href: "/ministries#bible-study",
  },
  {
    title: "Children's Ministry",
    description: "Nurturing young hearts with age-appropriate lessons and activities.",
    icon: Baby,
    href: "/ministries#children",
  },
  {
    title: "Outreach",
    description: "Serving our community and sharing God's love through action.",
    icon: Handshake,
    href: "/ministries#outreach",
  },
]

export function MinistriesOverview() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Get Connected</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find your place in our community through our various ministries and small groups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {ministries.map((ministry) => {
            const IconComponent = ministry.icon
            return (
              <Card key={ministry.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">{ministry.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{ministry.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={ministry.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/ministries">Explore All Ministries</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
