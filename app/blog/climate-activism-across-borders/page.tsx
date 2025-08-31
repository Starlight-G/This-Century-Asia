import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ClimateActivismAcrossBorders() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main className="pt-20">
        <article className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/genasia">
              <Button variant="ghost" className="mb-6 text-purple-600 hover:text-purple-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to GenAsia
              </Button>
            </Link>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="text-sm text-purple-600 font-medium mb-2">Youth Voices</div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Climate Activism Across Borders: Young Asians Leading Global Environmental Change
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Youth Editorial Team</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>January 2024</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-xl text-slate-600 mb-6 font-light">
                  Meet the 22-year-old from Bangladesh fighting sea-level rise, the Thai student revolutionizing urban
                  farming, and the Filipino activist making waves at COP28.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                  Sohanur Rahman: Bangladesh's Sea Wall Builder
                </h2>
                <p className="text-slate-700 mb-6">
                  At 22, Sohanur Rahman has already built 15 kilometers of community-designed sea walls along
                  Bangladesh's coast. Using traditional bamboo techniques combined with modern engineering, his low-cost
                  barriers have protected over 3,000 families from cyclone surges. "We can't wait for international
                  funding," Rahman explains. "Climate change is happening now, in our villages, to our families."
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                  Ploy Achakulwisut: Thailand's Urban Farm Revolutionary
                </h2>
                <p className="text-slate-700 mb-6">
                  In Bangkok's concrete jungle, 20-year-old Ploy Achakulwisut has transformed rooftops into productive
                  farms. Her startup, GreenSpace Bangkok, has created over 200 urban farms that produce 40% more food
                  per square meter than traditional farming while using 90% less water. Her model is now being
                  replicated across Southeast Asia's megacities.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                  Mitzi Jonelle Tan: The Philippines' Global Voice
                </h2>
                <p className="text-slate-700 mb-6">
                  Mitzi Jonelle Tan didn't just attend COP28—she helped shape its agenda. The 25-year-old climate
                  activist from the Philippines has become one of the most influential voices in international climate
                  negotiations, consistently pushing for loss and damage funding for vulnerable nations. Her approach
                  combines grassroots organizing with high-level diplomacy.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Asian Climate Network</h2>
                <p className="text-slate-700 mb-6">
                  What makes these activists unique is their collaborative approach. Through digital platforms and
                  regional exchanges, young Asian climate leaders share strategies, resources, and moral support across
                  borders. They're creating a new model of climate activism that's both locally rooted and globally
                  connected.
                </p>

                <div className="bg-green-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Impact by Numbers</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>• 15 km of sea walls protecting 3,000+ families in Bangladesh</li>
                    <li>• 200+ urban farms across Bangkok producing 40% more food per sq meter</li>
                    <li>• $100 billion loss and damage fund secured at COP28 with Asian youth advocacy</li>
                    <li>• 50+ cities across Asia now implementing youth-led climate solutions</li>
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
