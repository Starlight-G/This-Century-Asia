import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, TrendingUp, Globe, MapPin, Film } from "lucide-react"

export default function AsiaLens() {
  const lensCategories = [
    {
      title: "AsiaPulse",
      description: "Monthly analysis of Asia's socio-political, cultural, and economic landscape",
      icon: TrendingUp,
      color: "text-amber-600",
    },
    {
      title: "ChinaCross",
      description: "Bridging China with the rest of Asia through deep cultural and economic insights",
      icon: Globe,
      color: "text-rose-600",
    },
    {
      title: "IndiaInside",
      description: "India's grassroots-to-global ideas, innovations, and cultural movements",
      icon: MapPin,
      color: "text-orange-600",
    },
    {
      title: "Southeast Spotlight",
      description: "Illuminating the diverse voices and stories across Southeast Asia",
      icon: Eye,
      color: "text-yellow-600",
    },
    {
      title: "Asia Microseries",
      description: "Visual and written mini-stories capturing emerging trends and movements",
      icon: Film,
      color: "text-red-600",
    },
  ]

  return (
    <section id="asialens" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AsiaLens</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Deep-dive essays, analysis, micro-series, and interviews that capture the pulse of a continent in
            transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lensCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-slate-200/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                    <CardTitle className="text-xl text-slate-900">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{category.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
