import { Heart, Users, Globe } from "lucide-react"

export function GivingHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Give</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your generous giving helps us share God's love, support our community, and make a lasting impact in our city
            and around the world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Local Ministry</h3>
              <p className="text-sm text-muted-foreground">Supporting our community programs and outreach</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Church Operations</h3>
              <p className="text-sm text-muted-foreground">Maintaining our facilities and staff</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Global Missions</h3>
              <p className="text-sm text-muted-foreground">Spreading the gospel worldwide</p>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground italic">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
              for God loves a cheerful giver."
            </p>
            <p className="text-sm text-muted-foreground mt-2">- 2 Corinthians 9:7</p>
          </div>
        </div>
      </div>
    </section>
  )
}
