import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SermonPlayer } from "@/components/sermons/sermon-player"
import { SermonDetails } from "@/components/sermons/sermon-details"
import { RelatedSermons } from "@/components/sermons/related-sermons"

// This would typically come from a database or CMS
const sermons = {
  "walking-in-faith": {
    title: "Walking in Faith Through Uncertainty",
    speaker: "Pastor John Smith",
    series: "Faith Foundations",
    date: "2024-01-14",
    duration: "42 min",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    audioUrl: "/audio/walking-in-faith.mp3",
    description:
      "In this powerful message, Pastor John explores how we can maintain unwavering faith even when life throws us curveballs. Drawing from biblical examples and personal testimonies, this sermon provides practical guidance for navigating uncertainty with confidence in God's plan.",
    scripture: "Hebrews 11:1-6",
    notes: `
# Walking in Faith Through Uncertainty

## Key Points:
1. **Faith is not the absence of doubt** - Even the strongest believers face moments of uncertainty
2. **God's promises remain constant** - His character doesn't change with our circumstances
3. **Faith grows through testing** - Challenges are opportunities for spiritual growth

## Scripture References:
- Hebrews 11:1-6
- Romans 8:28
- Jeremiah 29:11
- Philippians 4:6-7

## Discussion Questions:
1. How do you typically respond when facing uncertainty?
2. What biblical promises bring you comfort during difficult times?
3. Share a time when your faith was tested and how you grew from it.
    `,
    tags: ["faith", "trust", "uncertainty", "hope"],
  },
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sermon = sermons[params.slug as keyof typeof sermons]

  if (!sermon) {
    return {
      title: "Sermon Not Found | Grace Community Church",
    }
  }

  return {
    title: `${sermon.title} | Grace Community Church`,
    description: sermon.description,
  }
}

export default function SermonPage({ params }: Props) {
  const sermon = sermons[params.slug as keyof typeof sermons]

  if (!sermon) {
    notFound()
  }

  return (
    <main>
      <SermonPlayer sermon={sermon} />
      <SermonDetails sermon={sermon} />
      <RelatedSermons currentSlug={params.slug} />
    </main>
  )
}
