"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Volume2, Share, Download, Calendar, User, Clock } from "lucide-react"

type SermonPlayerProps = {
  sermon: {
    title: string
    speaker: string
    series: string
    date: string
    duration: string
    videoUrl: string
    audioUrl: string
    description: string
  }
}

export function SermonPlayer({ sermon }: SermonPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [mediaType, setMediaType] = useState<"video" | "audio">("video")

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <Badge className="mb-3">{sermon.series}</Badge>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">{sermon.title}</h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {sermon.speaker}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(sermon.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {sermon.duration}
              </div>
            </div>
          </div>

          {/* Media Player */}
          <Card className="mb-6">
            <CardContent className="p-0">
              {mediaType === "video" ? (
                <div className="aspect-video">
                  <iframe
                    src={sermon.videoUrl}
                    title={sermon.title}
                    className="w-full h-full rounded-t-lg"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-8 mb-4 inline-block">
                      <Volume2 className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">Audio Player</h3>
                    <p className="text-muted-foreground mb-4">Listen to the sermon audio</p>
                    <Button onClick={() => setIsPlaying(!isPlaying)} className="gap-2">
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      {isPlaying ? "Pause" : "Play"}
                    </Button>
                  </div>
                </div>
              )}

              {/* Media Controls */}
              <div className="p-4 border-t">
                <div className="flex flex-wrap gap-2 justify-between items-center">
                  <div className="flex gap-2">
                    <Button
                      variant={mediaType === "video" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setMediaType("video")}
                    >
                      Video
                    </Button>
                    <Button
                      variant={mediaType === "audio" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setMediaType("audio")}
                    >
                      Audio Only
                    </Button>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Share className="h-4 w-4" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
