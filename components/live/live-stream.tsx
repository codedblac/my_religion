"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Radio, Users, Clock, Calendar } from "lucide-react"

export function LiveStream() {
  const [isLive, setIsLive] = useState(false)
  const [viewerCount, setViewerCount] = useState(0)

  // Simulate live status (in real app, this would come from your streaming service)
  useEffect(() => {
    const now = new Date()
    const day = now.getDay() // 0 = Sunday
    const hour = now.getHours()
    const minute = now.getMinutes()

    // Check if it's Sunday between 8:45-12:15 or 10:45-12:15, or Wednesday 6:45-8:15
    const isSundayMorning =
      day === 0 && ((hour === 8 && minute >= 45) || (hour >= 9 && hour < 12) || (hour === 12 && minute <= 15))
    const isSundayEvening = day === 0 && ((hour === 10 && minute >= 45) || hour === 11 || (hour === 12 && minute <= 15))
    const isWednesdayEvening =
      day === 3 && ((hour === 18 && minute >= 45) || hour === 19 || (hour === 20 && minute <= 15))

    setIsLive(isSundayMorning || isSundayEvening || isWednesdayEvening)
    setViewerCount(isLive ? Math.floor(Math.random() * 200) + 50 : 0)
  }, [isLive])

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <h1 className="font-serif text-3xl md:text-4xl font-bold">Live Stream</h1>
              {isLive && (
                <Badge className="bg-red-500 hover:bg-red-600 animate-pulse">
                  <Radio className="h-3 w-3 mr-1" />
                  LIVE
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground text-lg">
              {isLive
                ? "Join us for live worship and teaching from Grace Community Church"
                : "Join us for our next live service"}
            </p>
          </div>

          {/* Stream Player */}
          <Card className="mb-8">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-t-lg">
                {isLive ? (
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Grace Community Church Live Stream"
                    className="w-full h-full rounded-t-lg"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="bg-primary/10 rounded-full p-8 mb-6 inline-block">
                        <Radio className="h-16 w-16 text-primary" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold mb-4">Stream Offline</h3>
                      <p className="text-muted-foreground mb-6 max-w-md">
                        We're not currently live, but join us for our next service!
                      </p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Sunday: 9:00 AM & 11:00 AM
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="h-4 w-4" />
                          Wednesday: 7:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Stream Info */}
              <div className="p-4 border-t">
                <div className="flex flex-wrap gap-4 justify-between items-center">
                  <div className="flex items-center gap-4">
                    {isLive && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {viewerCount} watching
                      </div>
                    )}
                    <div className="text-sm text-muted-foreground">
                      {isLive ? "Live from Grace Community Church" : "Next service in progress"}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Share Stream
                    </Button>
                    <Button size="sm">Get Notifications</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex-col gap-2 bg-transparent">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Service Times</span>
              <span className="text-xs text-muted-foreground">View schedule</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col gap-2 bg-transparent">
              <Users className="h-5 w-5" />
              <span className="font-medium">Plan Your Visit</span>
              <span className="text-xs text-muted-foreground">First time?</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col gap-2 bg-transparent">
              <Radio className="h-5 w-5" />
              <span className="font-medium">Past Services</span>
              <span className="text-xs text-muted-foreground">Watch sermons</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
