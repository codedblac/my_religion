"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    category: "Visiting Our Church",
    questions: [
      {
        question: "What should I expect on my first visit?",
        answer:
          "We're excited to welcome you! Our services are casual and friendly. You can expect contemporary worship music, a practical message from the Bible, and a warm community. Services last about 75 minutes, and we have greeters to help you find your way.",
      },
      {
        question: "What should I wear?",
        answer:
          "Come as you are! We believe that God cares more about your heart than your clothes. You'll see people in everything from jeans to suits, so wear whatever makes you comfortable.",
      },
      {
        question: "Is childcare available?",
        answer:
          "Yes! We provide safe, fun childcare for infants through 5th grade during all services. Our children's ministry team is background-checked and trained to provide a great experience for your kids.",
      },
    ],
  },
  {
    category: "Our Services",
    questions: [
      {
        question: "What are your service times?",
        answer:
          "We have Sunday morning services at 9:00 AM and 11:00 AM, and a Wednesday evening service at 7:00 PM. All services are also available online via live stream.",
      },
      {
        question: "How long are the services?",
        answer:
          "Sunday services are typically 75 minutes, including worship music and the message. Wednesday evening services are about 60 minutes.",
      },
      {
        question: "Do you offer communion?",
        answer:
          "Yes, we celebrate communion monthly during our Sunday services. All who have accepted Jesus Christ as their Savior are welcome to participate.",
      },
    ],
  },
  {
    category: "Getting Involved",
    questions: [
      {
        question: "How can I get involved in the church?",
        answer:
          "There are many ways to get involved! You can join a small group, volunteer in a ministry, attend our newcomer's class, or participate in church events. Visit our Ministries page to explore opportunities.",
      },
      {
        question: "Do you have small groups?",
        answer:
          "Yes! Small groups are a great way to build relationships and grow in faith. We have groups for all ages and life stages that meet throughout the week in various locations.",
      },
      {
        question: "How can I volunteer?",
        answer:
          "We'd love to have you serve with us! Check out our volunteer opportunities on the Ministries page, or speak with one of our ministry leaders after a service.",
      },
    ],
  },
  {
    category: "Beliefs & Practices",
    questions: [
      {
        question: "What do you believe?",
        answer:
          "We are a Bible-believing church that holds to historic Christian doctrine. You can read our full statement of faith on our About page, but in summary, we believe in the Trinity, salvation by grace through faith, and the authority of Scripture.",
      },
      {
        question: "Do you baptize people?",
        answer:
          "Yes! We practice baptism by immersion for those who have made a personal decision to follow Jesus Christ. Baptism classes are offered regularly, and baptisms take place during Sunday services.",
      },
      {
        question: "What Bible translation do you use?",
        answer:
          "We primarily use the NIV (New International Version) in our services, but we encourage people to use whatever translation helps them understand God's Word best.",
      },
    ],
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const itemId = `${categoryIndex}-${questionIndex}`
                  const isOpen = openItems.includes(itemId)

                  return (
                    <Card key={questionIndex}>
                      <CardContent className="p-0">
                        <Button
                          variant="ghost"
                          onClick={() => toggleItem(itemId)}
                          className="w-full justify-between p-6 h-auto text-left font-semibold hover:bg-muted/50"
                        >
                          {faq.question}
                          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </Button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}

          <Card className="mt-12">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                We'd love to help! Feel free to reach out to us with any questions not covered here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Contact Us</Button>
                <Button variant="outline">Schedule a Visit</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
