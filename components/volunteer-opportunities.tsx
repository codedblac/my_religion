import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, CheckCircle } from "lucide-react"

const opportunities = [
  {
    title: "Sunday Service Volunteer",
    category: "Weekly",
    timeCommitment: "2-3 hours/week",
    peopleNeeded: 8,
    description: "Help with greeting, ushering, communion preparation, and general service support.",
    requirements: ["Friendly demeanor", "Punctuality", "Heart for service"],
    urgent: true,
  },
  {
    title: "Children's Ministry Helper",
    category: "Weekly",
    timeCommitment: "1-2 hours/week",
    peopleNeeded: 5,
    description: "Assist with Sunday school classes, crafts, and activities for children ages 3-12.",
    requirements: ["Background check", "Love for children", "Patience"],
    urgent: true,
  },
  {
    title: "Community Garden Coordinator",
    category: "Seasonal",
    timeCommitment: "3-4 hours/week",
    peopleNeeded: 2,
    description: "Manage our community garden that provides fresh produce for local food banks.",
    requirements: ["Gardening experience", "Leadership skills", "Physical ability"],
    urgent: false,
  },
  {
    title: "Tech Support Team",
    category: "As Needed",
    timeCommitment: "2-3 hours/month",
    peopleNeeded: 3,
    description: "Help with livestream setup, sound system, and general technology needs.",
    requirements: ["Technical skills", "Problem-solving ability", "Flexibility"],
    urgent: false,
  },
  {
    title: "Meal Ministry Coordinator",
    category: "Monthly",
    timeCommitment: "4-5 hours/month",
    peopleNeeded: 2,
    description: "Organize meal delivery for families in need, new parents, and those recovering from illness.",
    requirements: ["Organizational skills", "Cooking ability", "Reliable transportation"],
    urgent: false,
  },
  {
    title: "Youth Event Chaperone",
    category: "Occasional",
    timeCommitment: "Varies by event",
    peopleNeeded: 6,
    description: "Supervise and support youth activities, trips, and special events throughout the year.",
    requirements: ["Background check", "Experience with teens", "Flexibility"],
    urgent: true,
  },
]

export function VolunteerOpportunities() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Current Volunteer Opportunities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our team of dedicated volunteers and make a meaningful impact in our church and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg mb-2">{opportunity.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{opportunity.category}</Badge>
                      {opportunity.urgent && <Badge className="bg-orange-500 hover:bg-orange-600">Urgent Need</Badge>}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{opportunity.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{opportunity.timeCommitment}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{opportunity.peopleNeeded} needed</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {opportunity.requirements.map((req) => (
                      <li key={req} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full">Apply to Volunteer</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Not sure where to begin? We'd love to help you find the perfect volunteer opportunity that matches your
                gifts, interests, and availability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Take Our Volunteer Quiz</Button>
                <Button variant="outline" size="lg">
                  Speak with a Ministry Leader
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
