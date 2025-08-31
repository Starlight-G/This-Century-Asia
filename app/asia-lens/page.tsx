"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, TrendingUp, Globe, MapPin, Film, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function AsiaLensPage() {
  const lensCategories = [
    {
      title: "AsiaPulse",
      description: "Monthly analysis of Asia's socio-political, cultural, and economic landscape",
      icon: TrendingUp,
      color: "text-purple-600",
      content: [
        {
          title: "Asia's Digital Payment Revolution: Beyond China's Success",
          summary:
            "How Southeast Asia and India are creating their own fintech ecosystems, from GrabPay to UPI, reshaping how a billion people transact daily.",
          author: "Research Team",
          date: "January 2024",
          slug: "asias-digital-payment-revolution",
        },
      ],
    },
    {
      title: "ChinaCross",
      description: "Bridging China with the rest of Asia through deep cultural and economic insights",
      icon: Globe,
      color: "text-violet-600",
      content: [
        {
          title: "Belt and Road 2.0: How ASEAN Nations Are Reshaping China's Infrastructure Vision",
          summary:
            "From Malaysia's East Coast Rail Link to Indonesia's high-speed rail, examining how Southeast Asian countries are negotiating better terms in China's connectivity projects.",
          author: "Policy Analysis Team",
          date: "December 2023",
          slug: "belt-and-road-2-0",
        },
      ],
    },
    {
      title: "IndiaInside",
      description: "India's grassroots-to-global ideas, innovations, and cultural movements",
      icon: MapPin,
      color: "text-indigo-600",
      content: [
        {
          title: "From Jugaad to Global Innovation: How Indian Startups Are Solving World Problems",
          summary:
            "Exploring how Indian entrepreneurs are taking frugal innovation principles global, from healthcare solutions in rural Africa to fintech in Latin America.",
          author: "Innovation Desk",
          date: "January 2024",
          slug: "jugaad-to-global-innovation",
        },
      ],
    },
    {
      title: "Southeast Spotlight",
      description: "Illuminating the diverse voices and stories across Southeast Asia",
      icon: Eye,
      color: "text-purple-500",
      content: [
        {
          title: "The New Silk Road of Ideas: How Vietnamese Creatives Are Influencing Global Culture",
          summary:
            "From TikTok trends to fashion weeks, Vietnamese artists and creators are quietly becoming cultural ambassadors, influencing global aesthetics and narratives.",
          author: "Culture Team",
          date: "December 2023",
          slug: "vietnamese-creatives-global-culture",
        },
      ],
    },
    {
      title: "Asia Microseries",
      description: "Visual and written mini-stories capturing emerging trends and movements",
      icon: Film,
      color: "text-violet-500",
      content: [
        {
          title: "The 15-Minute City Movement: How Asian Urban Planners Are Leading Global Change",
          summary:
            "A visual journey through Singapore's smart city initiatives, Seoul's digital governance, and Bangkok's green urban planning that's inspiring cities worldwide.",
          author: "Visual Stories Team",
          date: "January 2024",
          slug: "15-minute-city-movement",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">AsiaLens</h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Deep-dive essays, analysis, micro-series, and interviews that capture the pulse of a continent in
                transformation.
              </p>
            </div>

            <div className="space-y-12">
              {lensCategories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <div key={index} className="border-b border-slate-200 pb-12 last:border-b-0">
                    <div className="flex items-center space-x-3 mb-6">
                      <IconComponent className={`h-8 w-8 ${category.color}`} />
                      <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                    </div>
                    <p className="text-slate-600 mb-6 max-w-3xl">{category.description}</p>

                    <div className="grid md:grid-cols-1 gap-6">
                      {category.content.map((item, itemIndex) => (
                        <Card
                          key={itemIndex}
                          className="hover:shadow-lg transition-shadow duration-300 border-slate-200/50"
                        >
                          <CardHeader>
                            <CardTitle className="text-xl text-slate-900 mb-2">{item.title}</CardTitle>
                            <div className="flex items-center space-x-4 text-sm text-slate-500">
                              <div className="flex items-center space-x-1">
                                <User className="h-4 w-4" />
                                <span>{item.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{item.date}</span>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-slate-600 mb-4">{item.summary}</p>
                            <Link href={`/blog/${item.slug}`}>
                              <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white">
                                Read More
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
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
