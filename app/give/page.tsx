import type { Metadata } from "next"
import { GivingHero } from "@/components/giving/giving-hero"
import { GivingOptions } from "@/components/giving/giving-options"
import { GivingImpact } from "@/components/giving/giving-impact"
import { GivingForm } from "@/components/giving/giving-form"

export const metadata: Metadata = {
  title: "Give | Grace Community Church",
  description:
    "Support the ministry of Grace Community Church through your generous giving. Make a one-time gift or set up recurring donations.",
}

export default function GivePage() {
  return (
    <main>
      <GivingHero />
      <GivingOptions />
      <GivingForm />
      <GivingImpact />
    </main>
  )
}
