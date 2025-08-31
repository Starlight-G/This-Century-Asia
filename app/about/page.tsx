"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, User, Target } from "lucide-react"

export default function AboutPage() {
  const handleManifestoClick = () => {
    alert("More coming soon – stay tuned.")
  }

  const handleFounderClick = () => {
    alert("More coming soon – stay tuned.")
  }

  const handleVisionDeckClick = () => {
    alert("More coming soon – stay tuned.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About This Century Asia</h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                A platform born from the belief that Asia's diverse voices, ideas, and innovations deserve to be heard,
                celebrated, and amplified on the global stage.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-purple-200/50 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-slate-900">Manifesto</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4">
                    Our bold statement of intent: to create a world where Asian voices lead, Asian ideas flourish, and
                    Asian futures are shaped by Asians themselves.
                  </p>
                  <Button
                    onClick={handleManifestoClick}
                    variant="outline"
                    size="sm"
                    className="border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
                  >
                    Read Our Manifesto
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-violet-200/50 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <User className="h-12 w-12 text-violet-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-slate-900">About the Founder</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4">
                    A journey from village to visionary - a story of determination, cultural pride, and the unwavering
                    belief in Asia's potential to lead the world.
                  </p>
                  <Button
                    onClick={handleFounderClick}
                    variant="outline"
                    size="sm"
                    className="border-violet-300 text-violet-700 hover:bg-violet-50 bg-transparent"
                  >
                    Founder's Story
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-indigo-200/50 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <FileText className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-slate-900">Vision Deck</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4">
                    Dive deeper into our comprehensive vision for Asia's future with our detailed presentation and
                    strategic roadmap.
                  </p>
                  <Button
                    onClick={handleVisionDeckClick}
                    variant="outline"
                    size="sm"
                    className="border-indigo-300 text-indigo-700 hover:bg-indigo-50 bg-transparent"
                  >
                    Download Deck
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
