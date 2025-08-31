import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Eye, Globe, Users, Bot, Star, ArrowRight } from "lucide-react"

export default function ExplorePage() {
  const platforms = [
    {
      title: "AsiaLens",
      description: "Deep-dive essays, analysis, and interviews capturing Asia's transformation",
      icon: Eye,
      color: "text-purple-600",
      href: "/asia-lens",
    },
    {
      title: "Asiaverse",
      description: "Futuristic research and storytelling about Asia's next 50-100 years",
      icon: Globe,
      color: "text-violet-600",
      href: "/asia-verse",
    },
    {
      title: "GenAsia",
      description: "Youth voices, student perspectives, and next-gen Asian visionaries",
      icon: Users,
      color: "text-indigo-600",
      href: "/genasia",
    },
    {
      title: "AI for Asia",
      description: "Asian AI founders, startups, and how AI is shaping the continent",
      icon: Bot,
      color: "text-purple-500",
      href: "/ai-for-asia",
    },
    {
      title: "The Mirror Project",
      description: "Stories of barrier-breaking Asians reshaping the world",
      icon: Star,
      color: "text-violet-500",
      href: "/mirror-project",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Explore the Platform</h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Discover our diverse range of content platforms, each designed to amplify different aspects of Asia's
                rich tapestry of voices, ideas, and innovations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platforms.map((platform, index) => {
                const IconComponent = platform.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-slate-200/50">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <IconComponent className={`h-8 w-8 ${platform.color}`} />
                        <CardTitle className="text-xl text-slate-900">{platform.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">{platform.description}</p>
                      <Link href={platform.href}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent group"
                        >
                          Explore {platform.title}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
