import type { Metadata } from "next"
import { HeroSection } from "@/components/visit/hero-section"
import { WelcomeMessage } from "@/components/visit/welcome-message"
import { ServiceInfo } from "@/components/visit/service-info"
import { FamilyInfo } from "@/components/visit/family-info"
import { LocationMap } from "@/components/visit/location-map"
import { ConnectSection } from "@/components/visit/connect-section"

export const metadata: Metadata = {
  title: "Plan Your Visit | Grace Community Church",
  description:
    "Everything you need to know for your first visit to Grace Community Church. Service times, directions, and what to expect.",
}

export default function VisitPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WelcomeMessage />
      <ServiceInfo />
      <FamilyInfo />
      <LocationMap />
      <ConnectSection />
    </div>
  )
}
