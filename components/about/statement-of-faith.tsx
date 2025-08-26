import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Cross, Users, Globe2, Heart, Crown } from "lucide-react"

const beliefs = [
  {
    title: "The Bible",
    icon: Book,
    description:
      "We believe the Bible is the inspired, infallible Word of God and our ultimate authority for faith and practice.",
  },
  {
    title: "The Trinity",
    icon: Crown,
    description:
      "We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit, each fully God yet distinct.",
  },
  {
    title: "Salvation",
    icon: Cross,
    description:
      "We believe salvation is by grace alone through faith alone in Christ alone, not by works or human effort.",
  },
  {
    title: "The Church",
    icon: Users,
    description:
      "We believe the church is the body of Christ, called to worship, fellowship, discipleship, and mission.",
  },
  {
    title: "The Great Commission",
    icon: Globe2,
    description:
      "We believe we are called to make disciples of all nations, baptizing and teaching them to obey Christ.",
  },
  {
    title: "Christian Living",
    icon: Heart,
    description:
      "We believe Christians are called to live holy lives, guided by the Holy Spirit and empowered for service.",
  },
]

export function StatementOfFaith() {
  return (
    <section className="py-16 bg-muted/30" id="beliefs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">What We Believe</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our core beliefs are rooted in Scripture and guide everything we do as a church community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beliefs.map((belief) => {
            const IconComponent = belief.icon
            return (
              <Card key={belief.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">{belief.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">{belief.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For a complete statement of our beliefs and doctrinal positions, please contact our church office or speak
            with one of our pastors. We're always happy to discuss matters of faith and answer any questions you may
            have.
          </p>
        </div>
      </div>
    </section>
  )
}
