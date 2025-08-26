import { Button } from "@/components/ui/button"
import { Users, Heart, Hand as Hands } from "lucide-react"

export function MinistriesHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ministries & Programs</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find your place to grow in faith, build community, and make a difference. We have ministries for every age,
            interest, and season of life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <p className="text-sm text-muted-foreground">Build meaningful relationships with fellow believers</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Grow</h3>
              <p className="text-sm text-muted-foreground">Deepen your faith through study and fellowship</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Hands className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Serve</h3>
              <p className="text-sm text-muted-foreground">Use your gifts to serve others and make an impact</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Find Your Ministry</Button>
            <Button variant="outline" size="lg">
              Volunteer Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
