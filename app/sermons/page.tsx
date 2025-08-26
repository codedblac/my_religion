import type { Metadata } from "next"
import { SermonsHero } from "@/components/sermons/sermons-hero"
import { SermonsFilter } from "@/components/sermons/sermons-filter"
import { SermonsGrid } from "@/components/sermons/sermons-grid"

export const metadata: Metadata = {
  title: "Sermons | Grace Community Church",
  description:
    "Listen to inspiring sermons and biblical teachings from our pastoral team. Search by series, speaker, or topic.",
}

export default function SermonsPage() {
  return (
    <main>
      <SermonsHero />
      <SermonsFilter />
      <SermonsGrid />
    </main>
  )
}
