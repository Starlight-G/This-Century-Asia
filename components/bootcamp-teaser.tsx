"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Users, Lightbulb } from "lucide-react"

export default function BootcampTeaser() {
  const handleComingSoonClick = () => {
    alert("Coming Soon – Get Involved")
  }

  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Future-Builders Wanted</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Join our upcoming youth bootcamps and fellowships focused on policy, tech, culture, and entrepreneurship.
            Shape the future of Asia with like-minded visionaries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-purple-200/50 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <Rocket className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Policy Innovation</h3>
              <p className="text-slate-600">Shape governance and policy frameworks for Asia's future</p>
            </CardContent>
          </Card>

          <Card className="border-violet-200/50 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <Lightbulb className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Tech & Culture</h3>
              <p className="text-slate-600">Bridge technology with cultural heritage and values</p>
            </CardContent>
          </Card>

          <Card className="border-indigo-200/50 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Entrepreneurship</h3>
              <p className="text-slate-600">Build micro-startups that solve real Asian challenges</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            onClick={handleComingSoonClick}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
          >
            Coming Soon
          </Button>
        </div>
      </div>
    </section>
  )
}
