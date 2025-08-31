import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, Globe } from "lucide-react"

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="text-center">
                <Users className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-3xl text-slate-900 mb-2">Join the Movement</CardTitle>
                <p className="text-lg text-slate-600">Coming Soon – Get Involved</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="flex flex-col items-center">
                    <Heart className="h-12 w-12 text-purple-600 mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Share Your Story</h3>
                    <p className="text-slate-600 text-sm">
                      Contribute your unique perspective to our growing community of Asian voices.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Globe className="h-12 w-12 text-violet-600 mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Build Connections</h3>
                    <p className="text-slate-600 text-sm">
                      Connect with like-minded individuals across Asia and the diaspora.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Users className="h-12 w-12 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Shape the Future</h3>
                    <p className="text-slate-600 text-sm">
                      Be part of the movement that's defining Asia's role in the 21st century.
                    </p>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <p className="text-slate-700 text-lg mb-4">
                    We're building something special and we want you to be part of it from the beginning.
                  </p>
                  <p className="text-slate-600">
                    Stay tuned for opportunities to contribute, collaborate, and help shape the future of Asian
                    storytelling and community building.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
