

import type { Metadata } from "next"
import { EventsHero } from "@/components/events/events-hero"
import { EventsFilter } from "@/components/events/events-filter"
import { UpcomingEvents } from "@/components/events/upcoming-events"
import { EventsCalendar } from "@/components/events/events-calendar"

export const metadata: Metadata = {
  title: "Events | Grace Community Church",
  description:
    "Stay connected with upcoming church events, community gatherings, and special services. Find something for everyone.",
}


export default function EventsPage() {
  return (
    <main>
      <EventsHero />
      <EventsFilter />
      <UpcomingEvents />
      <EventsCalendar />
    </main>
  )
}



