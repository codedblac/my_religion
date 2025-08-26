"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Church Member",
    content:
      "Grace Community has been such a blessing to our family. The love and support we've received here has strengthened our faith and helped us through difficult times.",
    image: "/smiling-brown-haired-woman.png",
  },
  {
    name: "Michael Chen",
    role: "Youth Leader",
    content:
      "I've grown so much in my faith since joining this church. The youth ministry has given me opportunities to serve and lead that I never thought possible.",
    image: "/young-asian-man-smiling.png",
  },
  {
    name: "Maria Rodriguez",
    role: "Small Group Leader",
    content:
      "The community here is incredible. Through small groups and ministries, I've found lifelong friendships and a deeper relationship with God.",
    image: "/hispanic-woman-with-warm-smile.png",
  },
  {
    name: "David Thompson",
    role: "New Member",
    content:
      "As someone new to the area, Grace Community welcomed me with open arms. I immediately felt at home and found my place in God's family.",
    image: "/middle-aged-man-with-friendly-expression.png",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">What People Are Saying</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from our community members about how God is working in their lives.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <Quote className="h-12 w-12 text-primary/30" />
              </div>

              <blockquote className="text-center">
                <p className="text-lg md:text-xl text-foreground/90 italic leading-relaxed mb-6">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <cite className="font-semibold text-foreground not-italic">{testimonials[currentIndex].name}</cite>
                    <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-2 mt-6">
            <Button variant="outline" size="icon" onClick={goToPrevious} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={goToNext} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
