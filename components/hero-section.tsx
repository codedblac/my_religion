import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/beautiful-church-sanctuary-with-warm-lighting-and-.png" alt="Church sanctuary" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-primary">Grace Community</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            A place where faith grows, relationships flourish, and lives are transformed by God's grace.
          </p>

          {/* Service Times */}
          <div className="mb-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg inline-block">
            <p className="text-lg font-medium mb-2">Join us for worship</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Sundays 9:00 AM & 11:00 AM</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/30" />
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Wednesdays 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3" asChild>
              <Link href="/live" className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Watch Live
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="/visit">Plan Your Visit</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
