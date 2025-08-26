"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send, Heart, Play as Pray } from "lucide-react"

export function LiveChat() {
  const [message, setMessage] = useState("")
  const [messages] = useState([
    { id: 1, user: "Sarah M.", message: "Praying for everyone today! 🙏", time: "2 min ago" },
    { id: 2, user: "John D.", message: "Great message Pastor! Really needed to hear this.", time: "5 min ago" },
    {
      id: 3,
      user: "Grace Community",
      message: "Welcome everyone to our live service!",
      time: "10 min ago",
      isAdmin: true,
    },
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message to your chat service
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Live Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Chat Messages */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {messages.map((msg) => (
                  <div key={msg.id} className="flex gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-medium text-sm ${msg.isAdmin ? "text-primary" : ""}`}>{msg.user}</span>
                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                      </div>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Share your thoughts or prayer requests..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage} size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Reactions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                    <Heart className="h-4 w-4" />
                    Amen
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                    <Pray className="h-4 w-4" />
                    Praying
                  </Button>
                  <Button variant="outline" size="sm">
                    🙏
                  </Button>
                  <Button variant="outline" size="sm">
                    ❤️
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground">
                  Chat is moderated. Please be respectful and encouraging in your messages.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
