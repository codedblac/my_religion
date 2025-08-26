import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Repeat, Calendar, DollarSign } from "lucide-react"

const givingOptions = [
  {
    title: "One-Time Gift",
    icon: DollarSign,
    description: "Make a single donation to support our ministry and community outreach programs.",
    features: ["Immediate impact", "Tax-deductible receipt", "Multiple payment methods", "Secure processing"],
    buttonText: "Give Now",
  },
  {
    title: "Recurring Giving",
    icon: Repeat,
    description: "Set up automatic monthly or weekly donations to provide consistent support.",
    features: ["Convenient automation", "Easy to modify", "Consistent support", "Annual giving statements"],
    buttonText: "Set Up Recurring",
    popular: true,
  },
  {
    title: "Planned Giving",
    icon: Calendar,
    description: "Include the church in your estate planning or make a significant future commitment.",
    features: ["Legacy impact", "Tax benefits", "Professional guidance", "Flexible options"],
    buttonText: "Learn More",
  },
  {
    title: "Special Offerings",
    icon: CreditCard,
    description: "Contribute to specific campaigns, missions, or building projects throughout the year.",
    features: ["Targeted impact", "Project updates", "Community involvement", "Transparent reporting"],
    buttonText: "View Campaigns",
  },
]

export function GivingOptions() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ways to Give</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the giving method that works best for you and your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {givingOptions.map((option, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-shadow ${option.popular ? "ring-2 ring-primary" : ""}`}
            >
              {option.popular && (
                <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-b-lg text-center">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center">
                <div className="bg-primary/10 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <option.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{option.description}</p>

                <ul className="space-y-2">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={option.popular ? "default" : "outline"}>
                  {option.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
