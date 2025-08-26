import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Baby, Users, GraduationCap, Heart } from "lucide-react"

const ageGroups = [
  {
    title: "Children's Ministry",
    subtitle: "Ages 0-12",
    icon: Baby,
    description:
      "Safe, fun, and engaging programs that help children discover God's love and build a foundation of faith.",
    programs: ["Sunday School", "Kids Church", "VBS", "Children's Choir", "Family Events"],
    meetingTime: "Sundays 9:00 AM & 11:00 AM",
    leader: "Sarah Martinez",
    contact: "children@gracecommunity.org",
    color: "bg-blue-500",
  },
  {
    title: "Youth Ministry",
    subtitle: "Ages 13-18",
    icon: GraduationCap,
    description:
      "Dynamic programs that help teenagers navigate life's challenges while growing in their relationship with Christ.",
    programs: ["Youth Group", "Confirmation", "Mission Trips", "Youth Band", "Mentorship"],
    meetingTime: "Wednesdays 7:00 PM",
    leader: "Mike Johnson",
    contact: "youth@gracecommunity.org",
    color: "bg-green-500",
  },
  {
    title: "Adult Ministry",
    subtitle: "Ages 18+",
    icon: Users,
    description:
      "Opportunities for adults to grow in faith, build community, and serve others through various life stages.",
    programs: ["Small Groups", "Bible Studies", "Marriage Ministry", "Men's/Women's Groups", "Life Groups"],
    meetingTime: "Various times throughout the week",
    leader: "Pastor David Wilson",
    contact: "adults@gracecommunity.org",
    color: "bg-purple-500",
  },
  {
    title: "Senior Ministry",
    subtitle: "Ages 55+",
    icon: Heart,
    description: "Meaningful connections and activities designed specifically for our senior community members.",
    programs: ["Senior Fellowship", "Bible Study", "Outings", "Prayer Ministry", "Wisdom Sharing"],
    meetingTime: "Thursdays 10:00 AM",
    leader: "Mary Thompson",
    contact: "seniors@gracecommunity.org",
    color: "bg-orange-500",
  },
]

export function AgeGroupMinistries() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ministries by Age</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From cradle to grave, we have programs designed to meet you where you are in your faith journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ageGroups.map((group, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`${group.color} rounded-full p-3`}>
                    <group.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{group.title}</CardTitle>
                    <Badge variant="secondary">{group.subtitle}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{group.description}</p>

                <div>
                  <h4 className="font-semibold mb-2">Programs:</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.programs.map((program) => (
                      <Badge key={program} variant="outline">
                        {program}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Meeting Time:</span> {group.meetingTime}
                  </div>
                  <div>
                    <span className="font-medium">Leader:</span> {group.leader}
                  </div>
                  <div>
                    <span className="font-medium">Contact:</span>{" "}
                    <a href={`mailto:${group.contact}`} className="text-primary hover:underline">
                      {group.contact}
                    </a>
                  </div>
                </div>

                <Button className="w-full">Learn More & Get Involved</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
