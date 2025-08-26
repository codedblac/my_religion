"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FileText, MessageSquare } from "lucide-react"

type SermonDetailsProps = {
  sermon: {
    description: string
    scripture: string
    notes: string
    tags: string[]
  }
}

export function SermonDetails({ sermon }: SermonDetailsProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "notes" | "discussion">("overview")

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex border-b mb-8">
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              onClick={() => setActiveTab("overview")}
              className="rounded-b-none gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Overview
            </Button>
            <Button
              variant={activeTab === "notes" ? "default" : "ghost"}
              onClick={() => setActiveTab("notes")}
              className="rounded-b-none gap-2"
            >
              <FileText className="h-4 w-4" />
              Sermon Notes
            </Button>
            <Button
              variant={activeTab === "discussion" ? "default" : "ghost"}
              onClick={() => setActiveTab("discussion")}
              className="rounded-b-none gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              Discussion
            </Button>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About This Sermon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">{sermon.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Key Scripture</h4>
                      <p className="text-muted-foreground">{sermon.scripture}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Topics</h4>
                      <div className="flex flex-wrap gap-2">
                        {sermon.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "notes" && (
            <Card>
              <CardHeader>
                <CardTitle>Sermon Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-slate max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{sermon.notes}</pre>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "discussion" && (
            <Card>
              <CardHeader>
                <CardTitle>Discussion & Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Join the Conversation</h3>
                  <p className="text-muted-foreground mb-6">
                    Discussion features coming soon! In the meantime, feel free to reach out to our pastoral team with
                    any questions.
                  </p>
                  <Button>Contact Pastor</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
