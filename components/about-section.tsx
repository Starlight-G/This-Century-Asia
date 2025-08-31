import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, User, Target } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About This Century Asia</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A platform born from the belief that Asia's diverse voices, ideas, and innovations deserve to be heard,
            celebrated, and amplified on the global stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-amber-200/50 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <Target className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <CardTitle className="text-xl text-slate-900">Manifesto</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 mb-4">
                Our bold statement of intent: to create a world where Asian voices lead, Asian ideas flourish, and Asian
                futures are shaped by Asians themselves.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
              >
                Read Our Manifesto
              </Button>
            </CardContent>
          </Card>

          <Card className="border-rose-200/50 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <User className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <CardTitle className="text-xl text-slate-900">About the Founder</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 mb-4">
                Gauri's journey from village to visionary - a story of determination, cultural pride, and the unwavering
                belief in Asia's potential.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-rose-300 text-rose-700 hover:bg-rose-50 bg-transparent"
              >
                Gauri's Story
              </Button>
            </CardContent>
          </Card>

          <Card className="border-orange-200/50 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-xl text-slate-900">Vision Deck</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 mb-4">
                Dive deeper into our comprehensive vision for Asia's future with our detailed presentation and strategic
                roadmap.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent"
              >
                Download Deck
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
