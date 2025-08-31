import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DecolonizingAsianStudies() {
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
                <div className="text-sm text-violet-600 font-medium mb-2">Student Essays</div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Decolonizing Asian Studies: A Student's Perspective from NUS Singapore
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Sarah Chen, NUS Singapore</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>December 2023</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-xl text-slate-600 mb-6 font-light">
                  A thought-provoking essay by a political science student examining how Asian universities are
                  rewriting curricula to center Asian perspectives rather than Western frameworks.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Problem with Western Lenses</h2>
                <p className="text-slate-700 mb-6">
                  When I started studying political science at NUS, I noticed something troubling: we were learning
                  about Asian politics through Western theoretical frameworks. Concepts like "democracy," "development,"
                  and "modernization" were presented as universal truths, with Asian experiences measured against
                  Western standards. This approach not only misrepresents Asian realities but also perpetuates
                  intellectual colonialism.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Reclaiming Our Narratives</h2>
                <p className="text-slate-700 mb-6">
                  The decolonization movement in Asian universities isn't about rejecting all Western knowledge—it's
                  about centering Asian experiences and developing theoretical frameworks that emerge from our own
                  contexts. For example, instead of viewing Singapore's governance through the lens of Western liberal
                  democracy, we're exploring concepts like "pragmatic authoritarianism" and "developmental state theory"
                  that better capture our unique political evolution.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Student-Led Change</h2>
                <p className="text-slate-700 mb-6">
                  Students across Asian universities are driving this change. At NUS, we've formed the Asian
                  Perspectives Collective, which organizes seminars featuring Asian scholars and practitioners. We're
                  also pushing for curriculum reforms that include more Asian authors, case studies, and theoretical
                  frameworks. Similar movements are emerging at universities in India, Japan, and South Korea.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Path Forward</h2>
                <p className="text-slate-700 mb-6">
                  Decolonizing Asian studies doesn't mean isolating ourselves from global scholarship. Instead, it means
                  engaging with the world from a position of intellectual confidence and cultural authenticity. We're
                  creating knowledge that serves Asian societies while contributing to global understanding. This is how
                  we build a truly multipolar intellectual world.
                </p>

                <div className="bg-violet-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Student Movement Impact</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>• 15+ Asian universities now have decolonization student groups</li>
                    <li>• 40% increase in Asian authors in political science curricula</li>
                    <li>• 200+ student-organized seminars on Asian perspectives (2023)</li>
                    <li>• 12 new courses developed with Asia-centered frameworks</li>
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
