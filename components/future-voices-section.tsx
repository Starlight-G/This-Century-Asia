"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FutureVoicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-violet-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Future Voices of Asia</h2>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto">
            This space invites young changemakers, creators, and cultural leaders across Asia to share their voice,
            vision, and story with the world.
          </p>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <Users className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <CardTitle className="text-2xl text-slate-900 mb-2">Share Your Story</CardTitle>
            <p className="text-slate-600">
              Are you a young changemaker, creator, or cultural leader? We want to hear from you.
            </p>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-4 mb-6">
              <div className="text-sm text-slate-600">
                <p>✨ Get featured on our platform</p>
                <p>🌏 Connect with like-minded leaders</p>
                <p>🚀 Amplify your impact across Asia</p>
              </div>
            </div>
            <Link href="/future-voices">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
              >
                Submit Your Voice
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
