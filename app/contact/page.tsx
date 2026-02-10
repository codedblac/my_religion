


import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { PrayerRequestForm } from "@/components/contact/prayer-request-form"

export const metadata: Metadata = {
  title: "Contact Us | Grace Community Church",
  description:
    "Get in touch with Grace Community Church. Send us a message, submit a prayer request, or find our contact information.",
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <PrayerRequestForm />
    </main>
  )
}
