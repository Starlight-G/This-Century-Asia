import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AsiaDigitalPaymentRevolution() {
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
                <div className="text-sm text-purple-600 font-medium mb-2">AsiaPulse</div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Asia's Digital Payment Revolution: Beyond China's Success
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Research Team</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>January 2024</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-xl text-slate-600 mb-6 font-light">
                  How Southeast Asia and India are creating their own fintech ecosystems, from GrabPay to UPI, reshaping
                  how a billion people transact daily.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The New Payment Landscape</h2>
                <p className="text-slate-700 mb-6">
                  While China's WeChat Pay and Alipay dominated headlines for years, a quiet revolution has been
                  unfolding across the rest of Asia. From Singapore's PayNow to India's UPI, from Indonesia's GoPay to
                  Thailand's PromptPay, each nation is crafting its own digital payment ecosystem that reflects local
                  needs, regulations, and cultural preferences.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">India's UPI: The Democratic Revolution</h2>
                <p className="text-slate-700 mb-6">
                  India's Unified Payments Interface (UPI) has processed over 100 billion transactions, making it the
                  world's largest real-time payment system. Unlike China's corporate-controlled systems, UPI is built on
                  open architecture, allowing any bank or fintech to participate. This democratic approach has enabled
                  innovations like voice-based payments in local languages and QR codes that work across all platforms.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Southeast Asia's Super-App Strategy</h2>
                <p className="text-slate-700 mb-6">
                  Southeast Asian companies like Grab, Gojek, and Sea have taken a different approach, embedding
                  payments within super-apps that handle everything from ride-hailing to food delivery. This strategy
                  has proven particularly effective in markets where smartphone adoption outpaced traditional banking
                  infrastructure.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Road Ahead</h2>
                <p className="text-slate-700 mb-6">
                  As these systems mature, we're seeing increasing cross-border integration. Singapore and Thailand's
                  recent payment corridor, India's international UPI expansion, and ASEAN's push for regional payment
                  interoperability suggest that Asia's next chapter will be about connecting these diverse ecosystems
                  into a truly pan-Asian payment network.
                </p>

                <div className="bg-purple-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Key Takeaways</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>• Asia's payment systems are more diverse and innovative than China's model suggests</li>
                    <li>• Open architecture (like UPI) enables broader innovation than closed systems</li>
                    <li>• Super-apps work well in markets with leapfrog technology adoption</li>
                    <li>• Cross-border integration is the next frontier for Asian fintech</li>
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
