import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy | Grace Community Church",
  description: "Learn how Grace Community Church protects your privacy and handles your personal information.",
}

export default function PrivacyPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 1, 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  Grace Community Church collects information to provide better services to our members and visitors. We
                  collect information in the following ways:
                </p>
                <ul>
                  <li>Information you give us directly (contact forms, event registrations, donations)</li>
                  <li>Information we get from your use of our website (analytics, cookies)</li>
                  <li>Information from third-party services (payment processors, email services)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and maintain our services</li>
                  <li>Process donations and event registrations</li>
                  <li>Send you updates about church activities and events</li>
                  <li>Respond to your inquiries and prayer requests</li>
                  <li>Improve our website and services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the
                  following circumstances:
                </p>
                <ul>
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist in operating our website</li>
                  <li>When required by law or to protect our rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                  is 100% secure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2">
                  <p>Email: privacy@gracecommunity.org</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Address: 123 Church Street, Your City, ST 12345</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
