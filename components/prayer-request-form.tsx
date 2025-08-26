"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Heart, CheckCircle } from "lucide-react"

export function PrayerRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    request: "",
    isPublic: false,
    allowFollowUp: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("[v0] Prayer request submitted:", formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold mb-4">Prayer Request Received</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for sharing your prayer request with us. Our prayer team will be lifting you up in prayer.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="bg-primary/10 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Submit a Prayer Request</CardTitle>
              <p className="text-muted-foreground">
                We believe in the power of prayer. Share your request and let our community pray with you.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="prayer-name">Your Name</Label>
                    <Input
                      id="prayer-name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Optional - you can remain anonymous"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prayer-email">Email Address</Label>
                    <Input
                      id="prayer-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="For follow-up (optional)"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prayer-category">Prayer Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healing">Healing & Health</SelectItem>
                      <SelectItem value="family">Family & Relationships</SelectItem>
                      <SelectItem value="work">Work & Finances</SelectItem>
                      <SelectItem value="guidance">Guidance & Decisions</SelectItem>
                      <SelectItem value="salvation">Salvation</SelectItem>
                      <SelectItem value="thanksgiving">Thanksgiving & Praise</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prayer-request">Prayer Request *</Label>
                  <Textarea
                    id="prayer-request"
                    required
                    rows={6}
                    value={formData.request}
                    onChange={(e) => handleInputChange("request", e.target.value)}
                    placeholder="Please share your prayer request. Be as specific or general as you'd like..."
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="public"
                      checked={formData.isPublic}
                      onCheckedChange={(checked) => handleInputChange("isPublic", checked as boolean)}
                    />
                    <Label htmlFor="public" className="text-sm">
                      I'm comfortable sharing this request publicly for others to pray
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="followup"
                      checked={formData.allowFollowUp}
                      onCheckedChange={(checked) => handleInputChange("allowFollowUp", checked as boolean)}
                    />
                    <Label htmlFor="followup" className="text-sm">
                      I'd like someone from the pastoral team to follow up with me
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Prayer Request"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  All prayer requests are treated with confidentiality and respect. Public requests will only be shared
                  with your permission.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
