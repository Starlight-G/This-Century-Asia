import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function VietnameseCreativesGlobalCulture() {
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
                <div className="text-sm text-purple-500 font-medium mb-2">Southeast Spotlight</div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  The New Silk Road of Ideas: How Vietnamese Creatives Are Influencing Global Culture
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Culture Team</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>December 2023</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-xl text-slate-600 mb-6 font-light">
                  From TikTok trends to fashion weeks, Vietnamese artists and creators are quietly becoming cultural
                  ambassadors, influencing global aesthetics and narratives.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The TikTok Generation</h2>
                <p className="text-slate-700 mb-6">
                  Vietnamese creators like Khánh Vy and Quang Linh have amassed millions of international followers, not
                  just for entertainment but for showcasing Vietnamese culture, food, and lifestyle. Their content has
                  sparked global interest in Vietnamese coffee culture, street food, and traditional crafts.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Fashion's New Voice</h2>
                <p className="text-slate-700 mb-6">
                  Designer Công Trí has become the first Vietnamese designer to show at New York Fashion Week, bringing
                  áo dài-inspired silhouettes to international runways. His work represents a new wave of Asian
                  designers who are redefining global fashion by centering their cultural heritage rather than adapting
                  to Western aesthetics.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Digital Art Renaissance</h2>
                <p className="text-slate-700 mb-6">
                  Vietnamese digital artists are gaining recognition in international galleries and NFT markets. Artists
                  like Lê Thiết Cương are creating works that blend traditional Vietnamese motifs with contemporary
                  digital techniques, influencing a new generation of Asian digital artists worldwide.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Cinema's Quiet Revolution</h2>
                <p className="text-slate-700 mb-6">
                  Vietnamese films are increasingly featured at international film festivals, with directors like Phan
                  Đăng Di and Ash Mayfair bringing Vietnamese stories to global audiences. Their work is contributing to
                  a broader Asian cinema renaissance that's reshaping how the world sees Southeast Asian narratives.
                </p>

                <div className="bg-purple-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Cultural Impact Metrics</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>• 500M+ views on Vietnamese cultural content across social platforms</li>
                    <li>• 25% increase in Vietnam tourism attributed to creator content</li>
                    <li>• 12 Vietnamese designers now showing at international fashion weeks</li>
                    <li>• $50M+ in Vietnamese art sales in international markets (2023)</li>
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
