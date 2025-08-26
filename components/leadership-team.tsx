import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

const leaders = [
  {
    name: "Pastor John Smith",
    role: "Senior Pastor",
    bio: "Pastor John has been leading Grace Community Church since 2015. He holds a Master of Divinity from Seminary and is passionate about expository preaching and discipleship. He and his wife Sarah have three children.",
    image: "/senior-pastor-in-professional-attire.png",
    email: "john@gracecommunity.org",
    phone: "(555) 123-4567",
  },
  {
    name: "Pastor Sarah Williams",
    role: "Associate Pastor",
    bio: "Pastor Sarah oversees our women's ministry and counseling programs. She has a heart for helping people grow in their relationship with God and has been serving in ministry for over 15 years.",
    image: "/female-associate-pastor-smiling.png",
    email: "sarah@gracecommunity.org",
    phone: "(555) 123-4568",
  },
  {
    name: "David Chen",
    role: "Youth Pastor",
    bio: "David leads our vibrant youth ministry and has a passion for reaching the next generation. He brings energy, creativity, and a deep love for students to everything he does.",
    image: "/young-youth-pastor-with-friendly-smile.png",
    email: "david@gracecommunity.org",
    phone: "(555) 123-4569",
  },
  {
    name: "Maria Rodriguez",
    role: "Worship Leader",
    bio: "Maria has been leading worship at Grace Community for over 8 years. She has a heart for creating an atmosphere where people can encounter God through music and worship.",
    image: "/worship-leader-with-guitar.png",
    email: "maria@gracecommunity.org",
    phone: "(555) 123-4570",
  },
  {
    name: "Michael Thompson",
    role: "Children's Pastor",
    bio: "Michael oversees all children's ministries and has a gift for teaching kids about God's love in fun and engaging ways. He and his wife have four children of their own.",
    image: "/childrens-pastor-with-warm-expression.png",
    email: "michael@gracecommunity.org",
    phone: "(555) 123-4571",
  },
  {
    name: "Lisa Johnson",
    role: "Administrative Pastor",
    bio: "Lisa handles the administrative side of church operations and has been with Grace Community for over 12 years. She ensures everything runs smoothly behind the scenes.",
    image: "/administrative-pastor-professional.png",
    email: "lisa@gracecommunity.org",
    phone: "(555) 123-4572",
  },
]

export function LeadershipTeam() {
  return (
    <section className="py-16" id="leadership">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our dedicated team of pastors and leaders are here to serve, guide, and support our church family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <Card key={leader.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-1">{leader.name}</h3>
                <p className="text-primary font-medium mb-3">{leader.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{leader.bio}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${leader.email}`} className="hover:text-primary transition-colors">
                      {leader.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <a href={`tel:${leader.phone}`} className="hover:text-primary transition-colors">
                      {leader.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
