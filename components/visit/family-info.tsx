import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Baby, Users, Gamepad2, GraduationCap } from "lucide-react"

const familyPrograms = [
  {
    title: "Nursery (0-2 years)",
    icon: Baby,
    description: "Safe, loving care for your little ones during both Sunday services.",
    details: [
      "Trained and background-checked volunteers",
      "Clean, secure nursery facilities",
      "Pager system for parent communication",
      "Diaper changing and feeding assistance",
    ],
  },
  {
    title: "Kids Church (3-12 years)",
    icon: Users,
    description: "Age-appropriate lessons, games, and activities that make learning about God fun.",
    details: [
      "Engaging Bible stories and lessons",
      "Interactive games and crafts",
      "Snacks and fellowship time",
      "Safe check-in/check-out system",
    ],
  },
  {
    title: "Youth Group (13-18 years)",
    icon: Gamepad2,
    description: "Dynamic programs designed to help teenagers grow in their faith and friendships.",
    details: [
      "Sunday morning youth service",
      "Wednesday night youth group",
      "Monthly fun activities and outings",
      "Small group Bible studies",
    ],
  },
  {
    title: "Family Resources",
    icon: GraduationCap,
    description: "Tools and support to help families grow together in faith.",
    details: [
      "Family devotional materials",
      "Parenting classes and support groups",
      "Family-friendly events throughout the year",
      "Resources for spiritual conversations at home",
    ],
  },
]

export function FamilyInfo() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Families Are Welcome</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We love families and have programs designed for every age group. Your children will be safe, engaged, and
            loved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {familyPrograms.map((program) => {
            const IconComponent = program.icon
            return (
              <Card key={program.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-xl">{program.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.details.map((detail, index) => (
                      <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
