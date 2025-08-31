import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BeltAndRoad2() {
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
                <div className="text-sm text-violet-600 font-medium mb-2">ChinaCross</div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Belt and Road 2.0: How ASEAN Nations Are Reshaping China's Infrastructure Vision
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Policy Analysis Team</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>December 2023</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-xl text-slate-600 mb-6 font-light">
                  From Malaysia's East Coast Rail Link to Indonesia's high-speed rail, examining how Southeast Asian
                  countries are negotiating better terms in China's connectivity projects.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Evolution of Belt and Road</h2>
                <p className="text-slate-700 mb-6">
                  When China launched the Belt and Road Initiative (BRI) in 2013, it was largely a top-down vision of
                  connectivity. A decade later, ASEAN nations have fundamentally altered the dynamic, transforming from
                  passive recipients to active negotiators who shape project terms, financing structures, and
                  implementation timelines.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Malaysia's Strategic Renegotiation</h2>
                <p className="text-slate-700 mb-6">
                  Malaysia's handling of the East Coast Rail Link (ECRL) exemplifies this new approach. Initially priced
                  at $20 billion with 85% Chinese financing, Malaysia successfully renegotiated the project down to
                  $10.7 billion while increasing local content requirements and technology transfer provisions. This
                  wasn't confrontation—it was sophisticated diplomacy that preserved relationships while securing better
                  terms.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Indonesia's High-Speed Success</h2>
                <p className="text-slate-700 mb-6">
                  Indonesia's Jakarta-Bandung high-speed railway, completed in 2023, represents a different model of BRI
                  cooperation. By insisting on joint ventures rather than pure Chinese contracting, Indonesia ensured
                  technology transfer and local capacity building. The project has become a template for "BRI 2.0"—more
                  collaborative, more sustainable, and more aligned with recipient country priorities.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The New Negotiation Playbook</h2>
                <p className="text-slate-700 mb-6">
                  ASEAN countries have developed a sophisticated approach to BRI engagement: maintain strategic
                  ambiguity, diversify funding sources, insist on transparency, and leverage regional solidarity. This
                  isn't about rejecting Chinese investment—it's about ensuring it serves national development goals
                  rather than just Chinese strategic interests.
                </p>

                <div className="bg-violet-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Key Insights</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>• ASEAN nations have moved from passive recipients to active shapers of BRI projects</li>
                    <li>• Successful renegotiations focus on mutual benefit rather than confrontation</li>
                    <li>• Technology transfer and local capacity building are now standard requirements</li>
                    <li>• Regional coordination strengthens individual countries' negotiating positions</li>
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
