import type { Metadata } from "next"
import { MinistriesHero } from "@/components/ministries/ministries-hero"
import { MinistriesOverview } from "@/components/ministries/ministries-overview"
import { AgeGroupMinistries } from "@/components/ministries/age-group-ministries"
import { SpecialMinistries } from "@/components/ministries/special-ministries"
import { VolunteerOpportunities } from "@/components/ministries/volunteer-opportunities"

export const metadata: Metadata = {
  title: "Ministries | Grace Community Church",
  description:
    "Discover meaningful ways to grow in faith and serve others through our diverse ministry programs for all ages and interests.",
}

export default function MinistriesPage() {
  return (
    <main>
      <MinistriesHero />
      <MinistriesOverview />
      <AgeGroupMinistries />
      <SpecialMinistries />
      <VolunteerOpportunities />
    </main>
  )
}
