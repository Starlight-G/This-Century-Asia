import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Trophy } from "lucide-react"

export default function MirrorProject() {
  return (
    <section id="mirror-project" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Mirror Project</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Spotlighting powerful stories of first-gen, underrepresented, barrier-breaking Asians who are reshaping the
            world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-amber-200/50 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <Star className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-slate-900">Future Mirrors</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 mb-6">
                Young changemakers, underdog students, and early-career builders who are just beginning to make their
                mark on the world.
              </p>
              <div className="space-y-2 text-sm text-slate-500">
                <p>• Rising entrepreneurs and innovators</p>
                <p>• Student activists and leaders</p>
                <p>• First-generation professionals</p>
                <p>• Community organizers and builders</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-rose-200/50 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <Trophy className="h-16 w-16 text-rose-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-slate-900">Legacy Mirrors</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 mb-6">
                Visionaries, founders, and global icons like Sundar Pichai and Satya Nadella who have already reshaped
                industries and societies.
              </p>
              <div className="space-y-2 text-sm text-slate-500">
                <p>• Tech industry leaders and CEOs</p>
                <p>• Global policy makers and diplomats</p>
                <p>• Cultural icons and artists</p>
                <p>• Social impact pioneers</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our goal is to showcase both rising voices and those who've already transformed the world, creating a
            complete picture of Asian leadership and innovation.
          </p>
        </div>
      </div>
    </section>
  )
}
