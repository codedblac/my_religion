import { HeroSection } from "@/components/hero-section"
import { FeaturedSermon } from "@/components/featured-sermon"
import { MinistriesOverview } from "@/components/ministries-overview"
import { GivingBanner } from "@/components/giving-banner"
import { EventHighlights } from "@/components/event-highlights"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ScriptureBlock } from "@/components/scripture-block"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ScriptureBlock />
      <FeaturedSermon />
      <MinistriesOverview />
      <EventHighlights />
      <GivingBanner />
      <TestimonialCarousel />
    </div>
  )
}
