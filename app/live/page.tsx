import type { Metadata } from "next"
import { LiveStream } from "@/components/live/live-stream"
import { ServiceTimes } from "@/components/live/service-times"
import { LiveChat } from "@/components/live/live-chat"

export const metadata: Metadata = {
  title: "Live Stream | Grace Community Church",
  description: "Join us for live worship services and special events. Watch online from anywhere in the world.",
}

export default function LivePage() {
  return (
    <main>
      <LiveStream />
      <ServiceTimes />
      <LiveChat />
    </main>
  )
}
