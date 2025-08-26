"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MessageSquare, Heart, Reply } from "lucide-react"

export function BlogComments() {
  const [newComment, setNewComment] = useState("")
  const [commenterName, setCommenterName] = useState("")
  const [commenterEmail, setCommenterEmail] = useState("")

  const comments = [
    {
      id: 1,
      author: "Sarah M.",
      date: "2 days ago",
      content:
        "This article really spoke to my heart. Thank you for the reminder that hope is found in God's character, not our circumstances.",
      likes: 5,
    },
    {
      id: 2,
      author: "David L.",
      date: "3 days ago",
      content:
        "The practical steps section was especially helpful. I'm going to start keeping a gratitude journal as suggested.",
      likes: 3,
    },
  ]

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Comment submitted:", { commenterName, commenterEmail, newComment })
    // Reset form
    setNewComment("")
    setCommenterName("")
    setCommenterEmail("")
  }

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Comments ({comments.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Existing Comments */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-sm text-muted-foreground">{comment.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Heart className="h-3 w-3" />
                          {comment.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Reply className="h-3 w-3" />
                          Reply
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{comment.content}</p>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">Leave a Comment</h4>
                <form onSubmit={handleSubmitComment} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={commenterName}
                        onChange={(e) => setCommenterName(e.target.value)}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={commenterEmail}
                        onChange={(e) => setCommenterEmail(e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="comment">Comment *</Label>
                    <Textarea
                      id="comment"
                      required
                      rows={4}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Share your thoughts..."
                    />
                  </div>
                  <Button type="submit">Post Comment</Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
