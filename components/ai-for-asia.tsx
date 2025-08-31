import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Building, TrendingUp, Users } from "lucide-react"

export default function AIForAsia() {
  const aiFeatures = [
    {
      title: "Asian AI Founders",
      description: "Profiles and interviews with leading AI entrepreneurs across Asia",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Startup Case Studies",
      description: "Deep dives into successful AI startups and their impact",
      icon: Building,
      color: "text-green-600",
    },
    {
      title: "Regional AI Trends",
      description: "Analysis of how different Asian markets are adopting AI",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "AI Shaping Asia",
      description: "How artificial intelligence is transforming Asian societies",
      icon: Bot,
      color: "text-orange-600",
    },
  ]

  return (
    <section id="ai-for-asia" className="py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI for Asia</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Featuring Asian AI founders, startups, and exploring how Asia is shaping—and being shaped by—artificial
            intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-slate-200/50 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <IconComponent className={`h-12 w-12 ${feature.color} mx-auto mb-2`} />
                  <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
