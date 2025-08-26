import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Music, Utensils, Briefcase, Globe, BookOpen, Headphones } from "lucide-react"

const specialMinistries = [
  {
    title: "Worship Ministry",
    icon: Music,
    description: "Use your musical gifts to lead others in worship and praise.",
    opportunities: ["Choir", "Worship Band", "Sound/Tech", "Song Leading"],
    commitment: "Weekly rehearsals + Sunday services",
  },
  {
    title: "Hospitality Ministry",
    icon: Utensils,
    description: "Welcome guests and create a warm, inviting atmosphere for all who visit.",
    opportunities: ["Greeting Team", "Coffee Ministry", "Event Catering", "Guest Follow-up"],
    commitment: "Monthly rotation schedule",
  },
  {
    title: "Missions & Outreach",
    icon: Globe,
    description: "Share God's love locally and globally through service and evangelism.",
    opportunities: ["Local Outreach", "Mission Trips", "Community Service", "Evangelism Training"],
    commitment: "Flexible based on involvement level",
  },
  {
    title: "Teaching Ministry",
    icon: BookOpen,
    description: "Help others grow in their faith through biblical education and discipleship.",
    opportunities: ["Sunday School", "Small Group Leadership", "Bible Study", "Mentoring"],
    commitment: "Weekly or bi-weekly commitment",
  },
  {
    title: "Counseling & Care",
    icon: Headphones,
    description: "Provide emotional and spiritual support to those going through difficult times.",
    opportunities: ["Prayer Ministry", "Grief Support", "Marriage Counseling", "Crisis Care"],
    commitment: "Training required + ongoing availability",
  },
  {
    title: "Business & Finance",
    icon: Briefcase,
    description: "Use your professional skills to support the church's operations and growth.",
    opportunities: ["Finance Committee", "Facility Management", "IT Support", "Strategic Planning"],
    commitment: "Monthly meetings + project-based work",
  },
]

export function SpecialMinistries() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Special Interest Ministries</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover unique ways to serve using your specific talents, interests, and professional skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialMinistries.map((ministry, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <ministry.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{ministry.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{ministry.description}</p>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Opportunities:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {ministry.opportunities.map((opportunity) => (
                      <li key={opportunity} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {opportunity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm">
                  <span className="font-medium">Time Commitment:</span>
                  <p className="text-muted-foreground">{ministry.commitment}</p>
                </div>

                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Get Involved
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
