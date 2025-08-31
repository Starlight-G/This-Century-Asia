import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function JugaadToGlobalInnovation() {
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
                <div className="text-sm text-indigo-600 font-medium mb-2">IndiaInside</div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  From Jugaad to Global Innovation: How Indian Startups Are Solving World Problems
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Innovation Desk</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>January 2024</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-xl text-slate-600 mb-6 font-light">
                  Exploring how Indian entrepreneurs are taking frugal innovation principles global, from healthcare
                  solutions in rural Africa to fintech in Latin America.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Jugaad Philosophy Goes Global</h2>
                <p className="text-slate-700 mb-6">
                  Jugaad—the Hindi word for frugal innovation—has evolved from a survival mechanism in
                  resource-constrained India to a global business philosophy. Indian startups are now exporting this
                  mindset, creating affordable solutions for emerging markets worldwide.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Healthcare Without Borders</h2>
                <p className="text-slate-700 mb-6">
                  Bangalore-based HealthCube has developed portable diagnostic devices that cost 90% less than
                  traditional equipment. Originally designed for rural Indian clinics, these devices are now being
                  deployed in 15 African countries, bringing advanced medical diagnostics to remote communities that
                  previously had no access to such technology.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Fintech for the Unbanked</h2>
                <p className="text-slate-700 mb-6">
                  Mumbai's Paymi has adapted India's UPI success for Latin American markets, creating payment solutions
                  that work on basic smartphones with intermittent internet connectivity. Their approach—born from
                  serving India's rural population—is now helping financial inclusion efforts in Brazil, Colombia, and
                  Mexico.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Education Technology Revolution</h2>
                <p className="text-slate-700 mb-6">
                  BYJU'S may have faced challenges at home, but smaller Indian edtech companies are thriving globally by
                  focusing on affordable, offline-capable learning solutions. Companies like Mindspark are now operating
                  in Kenya, Nigeria, and Bangladesh, proving that Indian educational innovation can scale across diverse
                  markets.
                </p>

                <div className="bg-indigo-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Global Impact</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>• 50+ Indian startups now operating in African markets</li>
                    <li>• $2.3 billion in cross-border investments from Indian companies in 2023</li>
                    <li>• 15 million people served by Indian healthcare innovations globally</li>
                    <li>• 200+ partnerships between Indian and international development organizations</li>
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
