import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, PenTool, GraduationCap, Plane, Lightbulb, MapPin } from "lucide-react"

export default function GenAsia() {
  const genAsiaFeatures = [
    {
      title: "Youth Voices",
      description: "Amplifying the next generation of Asian thought leaders",
      icon: Users,
      color: "text-rose-600",
    },
    {
      title: "Student Essays",
      description: "Academic insights and perspectives from campuses across Asia",
      icon: PenTool,
      color: "text-amber-600",
    },
    {
      title: "Campus Dispatches",
      description: "Real-time reports from universities and educational institutions",
      icon: GraduationCap,
      color: "text-blue-600",
    },
    {
      title: "Study Abroad Stories",
      description: "Cross-cultural experiences and international perspectives",
      icon: Plane,
      color: "text-green-600",
    },
    {
      title: "Gen Z Visionaries",
      description: "Profiles of young changemakers shaping Asia's future",
      icon: Lightbulb,
      color: "text-purple-600",
    },
    {
      title: "Underrepresented Voices",
      description: "Stories from overlooked Asian geographies and communities",
      icon: MapPin,
      color: "text-orange-600",
    },
  ]

  return (
    <section id="genasia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">GenAsia</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Formerly "Youth Lens" - A platform dedicated to amplifying youth voices, student perspectives, and the next
            generation of Asian visionaries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {genAsiaFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-slate-200/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                    <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
