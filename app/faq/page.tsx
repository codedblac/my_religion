import type { Metadata } from "next"
import { FAQSection } from "@/components/faq/faq-section"

export const metadata: Metadata = {
  title: "FAQ | Grace Community Church",
  description: "Find answers to frequently asked questions about Grace Community Church, our services, and programs.",
}

export default function FAQPage() {
  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our church, services, and community.
            </p>
          </div>
        </div>
      </section>
      <FAQSection />
    </main>
  )
}
