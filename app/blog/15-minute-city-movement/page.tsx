import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FifteenMinuteCityMovement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main className="pt-20">
        <article className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/asia-lens">
              <Button variant="ghost" className="mb-6 text-purple-600 hover:text-purple-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to AsiaLens
              </Button>
            </Link>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="text-sm text-violet-500 font-medium mb-2">Asia Microseries</div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  The 15-Minute City Movement: How Asian Urban Planners Are Leading Global Change
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Visual Stories Team</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>January 2024</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-xl text-slate-600 mb-6 font-light">
                  A visual journey through Singapore's smart city initiatives, Seoul's digital governance, and Bangkok's
                  green urban planning that's inspiring cities worldwide.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Singapore: The Smart Nation Blueprint</h2>
                <p className="text-slate-700 mb-6">
                  Singapore's Punggol district has become the world's first fully integrated smart town, where residents
                  can access healthcare, education, shopping, and work within a 15-minute walk or bike ride. The
                  district uses AI-powered traffic management, automated waste collection, and predictive maintenance
                  systems that are now being studied by urban planners from Barcelona to Boston.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Seoul: Digital Democracy in Action</h2>
                <p className="text-slate-700 mb-6">
                  Seoul's Digital Mayor Office allows citizens to participate in city planning through virtual reality
                  consultations and AI-powered feedback systems. Residents can propose neighborhood improvements, vote
                  on local projects, and track implementation progress in real-time. This model of digital civic
                  engagement is being adopted by cities across Europe and North America.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Bangkok: Green Corridors Revolution</h2>
                <p className="text-slate-700 mb-6">
                  Bangkok's Sky Garden network connects neighborhoods through elevated green walkways that provide
                  shade, air purification, and community spaces. These corridors have reduced urban heat by 3°C in
                  surrounding areas and created micro-ecosystems that support local biodiversity. The concept is now
                  being implemented in Jakarta, Manila, and Mexico City.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Asian Advantage</h2>
                <p className="text-slate-700 mb-6">
                  Asian cities have several advantages in implementing 15-minute city concepts: high population density
                  that supports local businesses, strong public transportation networks, and cultural acceptance of
                  mixed-use development. These factors allow Asian urban planners to create more integrated, walkable
                  communities than their Western counterparts.
                </p>

                <div className="bg-green-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Global Influence</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>• 50+ cities worldwide studying Asian 15-minute city models</li>
                    <li>• 30% reduction in car usage in implemented districts</li>
                    <li>• 25% increase in local business revenue in 15-minute neighborhoods</li>
                    <li>• 40% improvement in air quality in green corridor areas</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
