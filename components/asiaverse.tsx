import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Leaf, Bot, Brain, Database, Tv, Map, Rocket } from "lucide-react"

export default function Asiaverse() {
  const asiaverseProjects = [
    {
      title: "Digital Dharma",
      description: "Exploring spirituality and technology in the digital age",
      icon: Zap,
      color: "text-purple-600",
    },
    {
      title: "Green Archipelago",
      description: "Sustainable futures across Asia's island nations",
      icon: Leaf,
      color: "text-green-600",
    },
    {
      title: "AI Civil Service",
      description: "Reimagining governance through artificial intelligence",
      icon: Bot,
      color: "text-blue-600",
    },
    {
      title: "Borderless Minds",
      description: "Education and knowledge sharing without boundaries",
      icon: Brain,
      color: "text-indigo-600",
    },
    {
      title: "Asia Stack & Regional Digital Identity",
      description: "Building unified digital infrastructure across Asia",
      icon: Database,
      color: "text-cyan-600",
    },
    {
      title: "AsiaFlix & Culturverse",
      description: "Pan-Asian entertainment and cultural research",
      icon: Tv,
      color: "text-pink-600",
    },
    {
      title: "Geohacks",
      description: "Geographic innovation and spatial technology",
      icon: Map,
      color: "text-teal-600",
    },
    {
      title: "Youth-led Micro Startups",
      description: "Supporting the next generation of Asian entrepreneurs",
      icon: Rocket,
      color: "text-orange-600",
    },
  ]

  return (
    <section id="asiaverse" className="py-20 bg-gradient-to-br from-slate-50 to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Asiaverse</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-2">What could Asia look like in 50–100 years?</p>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Futuristic, speculative research meets storytelling to envision Asia's tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {asiaverseProjects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-slate-200/50 hover:scale-105"
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <IconComponent className={`h-10 w-10 ${project.color}`} />
                    <CardTitle className="text-lg text-slate-900">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-slate-600 text-center">{project.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
