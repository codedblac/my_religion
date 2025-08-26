import { Heart } from "lucide-react"

export function WelcomeMessage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Heart className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">You Belong Here</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Whether you're exploring faith for the first time, returning to church after some time away, or looking for
            a new church home, we want you to know that you belong here. Grace Community Church is a place where people
            from all walks of life come together to worship God, grow in faith, and serve our community.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Come as you are – we believe that God meets us wherever we are in our journey, and we're excited to walk
            alongside you as you discover more about His love and grace.
          </p>
        </div>
      </div>
    </section>
  )
}
