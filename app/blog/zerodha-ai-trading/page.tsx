import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ZerodhaAITrading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main className="pt-20">
        <article className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/ai-for-asia">
              <Button variant="ghost" className="mb-6 text-purple-600 hover:text-purple-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to AI for Asia
              </Button>
            </Link>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="text-sm text-purple-600 font-medium mb-2">Asian AI Founders</div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  From Bangalore to Global: How Zerodha's Nithin Kamath is Democratizing AI Trading
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>AI Founders Series</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>January 2024</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-xl text-slate-600 mb-6 font-light">
                  An exclusive interview with India's fintech pioneer on how AI is making stock trading accessible to
                  millions of first-time investors across Asia, and his vision for financial inclusion.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Accidental AI Pioneer</h2>
                <p className="text-slate-700 mb-6">
                  Nithin Kamath didn't set out to revolutionize trading with AI. When he founded Zerodha in 2010, the
                  goal was simple: make stock trading affordable for ordinary Indians. But as the platform grew to serve
                  over 6 million users, AI became essential for everything from fraud detection to personalized
                  investment advice.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">AI for the Masses, Not the Elite</h2>
                <p className="text-slate-700 mb-6">
                  "Traditional wealth management uses AI to help rich people get richer," Kamath explains. "We use AI to
                  help a vegetable vendor in Pune understand mutual funds." Zerodha's AI systems analyze user behavior
                  to provide contextual education, detect risky trading patterns, and suggest appropriate investment
                  products based on individual financial situations.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Regional Expansion Strategy</h2>
                <p className="text-slate-700 mb-6">
                  Zerodha's AI-powered approach is now expanding across Asia. The company is working with regulators in
                  Bangladesh, Sri Lanka, and Nepal to adapt their technology for local markets. Each market requires
                  different AI models—what works for Indian retail investors may not work for Bangladeshi small business
                  owners.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Building Responsible AI</h2>
                <p className="text-slate-700 mb-6">
                  Kamath is particularly focused on responsible AI development. Zerodha's algorithms are designed to
                  discourage excessive trading and promote long-term wealth building. "AI should make people better
                  investors, not better gamblers," he emphasizes. The platform's AI actively warns users about risky
                  behaviors and suggests educational content instead of pushing more trades.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Zerodha's AI Impact</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>• 6+ million users across India with AI-powered trading assistance</li>
                    <li>• 40% reduction in risky trading behaviors through AI interventions</li>
                    <li>• 300% increase in long-term investment adoption via personalized AI recommendations</li>
                    <li>• Expanding to 4 Asian markets with localized AI models</li>
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
