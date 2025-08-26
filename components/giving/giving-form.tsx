"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { CreditCard, Lock, CheckCircle } from "lucide-react"

export function GivingForm() {
  const [formData, setFormData] = useState({
    amount: "",
    frequency: "one-time",
    fund: "general",
    paymentMethod: "card",
    isRecurring: false,
    coverFees: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const presetAmounts = [25, 50, 100, 250, 500]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    console.log("[v0] Donation submitted:", formData)
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
                <h3 className="font-serif text-2xl font-bold mb-4">Thank You for Your Gift!</h3>
                <p className="text-muted-foreground mb-6">
                  Your generous donation of ${formData.amount} has been processed successfully. You'll receive a
                  confirmation email shortly.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>Make Another Donation</Button>
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
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Make a Donation</CardTitle>
              <p className="text-muted-foreground">Your gift makes a difference in our community and beyond.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Amount Selection */}
                <div className="space-y-3">
                  <Label>Donation Amount *</Label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-3">
                    {presetAmounts.map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={formData.amount === amount.toString() ? "default" : "outline"}
                        onClick={() => handleInputChange("amount", amount.toString())}
                        className="h-12"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      type="number"
                      min="1"
                      step="0.01"
                      required
                      value={formData.amount}
                      onChange={(e) => handleInputChange("amount", e.target.value)}
                      placeholder="Enter custom amount"
                      className="pl-8"
                    />
                  </div>
                </div>

                {/* Frequency */}
                <div className="space-y-2">
                  <Label>Frequency</Label>
                  <Select value={formData.frequency} onValueChange={(value) => handleInputChange("frequency", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One-time gift</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Fund Selection */}
                <div className="space-y-2">
                  <Label>Designation</Label>
                  <Select value={formData.fund} onValueChange={(value) => handleInputChange("fund", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Fund</SelectItem>
                      <SelectItem value="missions">Missions</SelectItem>
                      <SelectItem value="building">Building Fund</SelectItem>
                      <SelectItem value="youth">Youth Ministry</SelectItem>
                      <SelectItem value="outreach">Community Outreach</SelectItem>
                      <SelectItem value="benevolence">Benevolence Fund</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Options */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="cover-fees"
                      checked={formData.coverFees}
                      onCheckedChange={(checked) => handleInputChange("coverFees", checked as boolean)}
                    />
                    <Label htmlFor="cover-fees" className="text-sm">
                      Cover processing fees (adds ~3% to help us receive the full amount)
                    </Label>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                  <Label>Payment Method</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      type="button"
                      variant={formData.paymentMethod === "card" ? "default" : "outline"}
                      onClick={() => handleInputChange("paymentMethod", "card")}
                      className="h-12"
                    >
                      Credit/Debit Card
                    </Button>
                    <Button
                      type="button"
                      variant={formData.paymentMethod === "bank" ? "default" : "outline"}
                      onClick={() => handleInputChange("paymentMethod", "bank")}
                      className="h-12"
                    >
                      Bank Transfer
                    </Button>
                  </div>
                </div>

                {/* Mock Payment Fields */}
                {formData.paymentMethod === "card" && (
                  <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Card Number</Label>
                        <Input placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="space-y-2">
                        <Label>Expiry Date</Label>
                        <Input placeholder="MM/YY" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>CVV</Label>
                        <Input placeholder="123" />
                      </div>
                      <div className="space-y-2">
                        <Label>Cardholder Name</Label>
                        <Input placeholder="John Doe" />
                      </div>
                    </div>
                  </div>
                )}

                <Button type="submit" className="w-full h-12" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Processing..."
                  ) : (
                    <>
                      <Lock className="h-4 w-4 mr-2" />
                      Donate ${formData.amount || "0"}
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your donation is secure and encrypted. You'll receive a tax-deductible receipt via email.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
