import type { Metadata } from "next"
import { HeroSection } from "@/components/about/hero-section"
import { MissionStatement } from "@/components/about/mission-statement"
import { ChurchHistory } from "@/components/about/church-history"
import { LeadershipTeam } from "@/components/about/leadership-team"
import { StatementOfFaith } from "@/components/about/statement-of-faith"

export const metadata: Metadata = {
  title: "About Us | Grace Community Church",
  description: "Learn about our mission, history, leadership team, and beliefs at Grace Community Church.",
}


export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <MissionStatement />
      <ChurchHistory />
      <LeadershipTeam />
      <StatementOfFaith />
    </div>
  )
}
