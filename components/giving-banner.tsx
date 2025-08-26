import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Gift } from "lucide-react"

export function GivingBanner() {
  return (
    <section className="py-16 bg-primary/5 border-y">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Heart className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Your Generosity Makes a Difference</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Every gift, no matter the size, helps us serve our community, support missions, and spread God's love. Thank
            you for partnering with us in ministry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" asChild>
              <Link href="/give" className="flex items-center gap-2">
                <Gift className="h-5 w-5" />
                Give Online
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/give#ways-to-give">Other Ways to Give</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">Community Outreach</h3>
              <p className="text-muted-foreground text-sm">Supporting local families and food banks</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Global Missions</h3>
              <p className="text-muted-foreground text-sm">Spreading the Gospel worldwide</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Ministry Programs</h3>
              <p className="text-muted-foreground text-sm">Youth, children, and adult ministries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
