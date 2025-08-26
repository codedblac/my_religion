import { Heart, Users, Globe } from "lucide-react"

export function MissionStatement() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            To love God, love people, and make disciples who transform our community and the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Love God</h3>
            <p className="text-muted-foreground leading-relaxed">
              We are passionate about worshiping God with all our heart, soul, mind, and strength, growing in our
              relationship with Him through prayer, worship, and His Word.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Love People</h3>
            <p className="text-muted-foreground leading-relaxed">
              We believe in building authentic relationships, serving one another, and creating a welcoming community
              where everyone can belong and grow.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Make Disciples</h3>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to sharing the Gospel, making disciples, and equipping believers to transform their
              communities and reach the world for Christ.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
