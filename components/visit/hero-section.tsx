import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Plan Your Visit</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
          We can't wait to meet you! Here's everything you need to know for your first visit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2 text-lg">
            <Calendar className="h-5 w-5 text-primary" />
            <span>Sundays 9:00 AM & 11:00 AM</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-border" />
          <div className="flex items-center gap-2 text-lg">
            <MapPin className="h-5 w-5 text-primary" />
            <span>123 Church Street, Your City</span>
          </div>
        </div>

        <Button size="lg" asChild>
          <Link href="#connect">Let Us Know You're Coming</Link>
        </Button>
      </div>
    </section>
  )
}
