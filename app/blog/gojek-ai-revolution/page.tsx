import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GojekAIRevolution() {
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
                <div className="text-sm text-violet-600 font-medium mb-2">Startup Case Studies</div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Gojek's AI Revolution: How Indonesia's Super-App Uses Machine Learning for 50 Million Users
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Startup Analysis Team</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>December 2023</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-xl text-slate-600 mb-6 font-light">
                  Inside look at how Gojek's AI algorithms optimize everything from driver routes to food delivery
                  times, and what this means for Southeast Asia's digital economy.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The AI-Powered Super-App</h2>
                <p className="text-slate-700 mb-6">
                  Gojek processes over 2 billion transactions annually across 20+ services, from ride-hailing to food
                  delivery to digital payments. Behind this complexity lies one of Asia's most sophisticated AI systems,
                  designed specifically for the unique challenges of Southeast Asian markets: traffic chaos, informal
                  addresses, and diverse payment preferences.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jakarta's Traffic Algorithm</h2>
                <p className="text-slate-700 mb-6">
                  Gojek's routing algorithm doesn't just consider distance and traffic—it factors in Jakarta's unique
                  urban geography, including narrow alleys (gang), flood-prone areas during rainy season, and informal
                  settlements. The AI learns from millions of driver routes to predict the fastest path through the
                  city's complex street network, reducing average trip times by 23%.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Food Delivery Optimization</h2>
                <p className="text-slate-700 mb-6">
                  GoFood's AI predicts demand patterns for thousands of restaurants across Indonesia, accounting for
                  local preferences, weather conditions, and cultural events. During Ramadan, the system automatically
                  adjusts for iftar timing across different time zones, while during rainy season, it prioritizes indoor
                  restaurants and adjusts delivery time estimates.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Financial Inclusion Through AI</h2>
                <p className="text-slate-700 mb-6">
                  GoPay uses machine learning to assess creditworthiness for users without traditional banking history.
                  The AI analyzes transaction patterns, location data, and app usage to provide micro-loans and
                  financial services to Indonesia's unbanked population. This approach has enabled financial inclusion
                  for over 15 million previously unbanked users.
                </p>

                <div className="bg-violet-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Impact Metrics</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>• 50M+ active users served by AI-powered services</li>
                    <li>• 23% reduction in average trip times through smart routing</li>
                    <li>• 15M previously unbanked users now have access to financial services</li>
                    <li>• 40% improvement in food delivery accuracy during peak hours</li>
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
