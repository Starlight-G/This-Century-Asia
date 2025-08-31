"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, PenTool, GraduationCap, Plane, Lightbulb, MapPin, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function GenAsiaPage() {
  const genAsiaFeatures = [
    {
      title: "Youth Voices",
      description: "Amplifying the next generation of Asian thought leaders",
      icon: Users,
      color: "text-purple-600",
      content: {
        title: "Climate Activism Across Borders: Young Asians Leading Global Environmental Change",
        summary:
          "Meet the 22-year-old from Bangladesh fighting sea-level rise, the Thai student revolutionizing urban farming, and the Filipino activist making waves at COP28.",
        author: "Youth Editorial Team",
        date: "January 2024",
        slug: "climate-activism-across-borders",
      },
    },
    {
      title: "Student Essays",
      description: "Academic insights and perspectives from campuses across Asia",
      icon: PenTool,
      color: "text-violet-600",
      content: {
        title: "Decolonizing Asian Studies: A Student's Perspective from NUS Singapore",
        summary:
          "A thought-provoking essay by a political science student examining how Asian universities are rewriting curricula to center Asian perspectives rather than Western frameworks.",
        author: "Sarah Chen, NUS Singapore",
        date: "December 2023",
        slug: "decolonizing-asian-studies",
      },
    },
    {
      title: "Campus Dispatches",
      description: "Real-time reports from universities and educational institutions",
      icon: GraduationCap,
      color: "text-indigo-600",
      content: {
        title: "Inside IIT Delhi's AI Ethics Lab: Where Students Debate Technology's Future",
        summary:
          "A behind-the-scenes look at how computer science students at India's premier tech institute are grappling with questions of AI bias, privacy, and social responsibility.",
        author: "Campus Correspondent",
        date: "January 2024",
        slug: "iit-delhi-ai-ethics-lab",
      },
    },
    {
      title: "Study Abroad Stories",
      description: "Cross-cultural experiences and international perspectives",
      icon: Plane,
      color: "text-purple-500",
      content: {
        title: "From Seoul to Silicon Valley: A Korean Student's Journey Through Tech Culture Shock",
        summary:
          "How studying computer science at Stanford opened one student's eyes to different approaches to innovation, work-life balance, and the meaning of success.",
        author: "Min-jun Park, Stanford University",
        date: "December 2023",
        slug: "seoul-to-silicon-valley",
      },
    },
    {
      title: "Gen Z Visionaries",
      description: "Profiles of young changemakers shaping Asia's future",
      icon: Lightbulb,
      color: "text-violet-500",
      content: {
        title: "The 19-Year-Old Building India's Rural Internet: Meet Priya Sharma",
        summary:
          "How a teenager from Rajasthan is using low-cost satellite technology to bring high-speed internet to remote villages, connecting farmers to global markets.",
        author: "Visionaries Team",
        date: "January 2024",
        slug: "priya-sharma-rural-internet",
      },
    },
    {
      title: "Underrepresented Voices",
      description: "Stories from overlooked Asian geographies and communities",
      icon: MapPin,
      color: "text-purple-700",
      content: {
        title: "The Forgotten Islands: Young Leaders from Pacific Asia Speak Out",
        summary:
          "Voices from Palau, Fiji, and Vanuatu on climate change, cultural preservation, and what it means to be Asian in the Pacific century.",
        author: "Pacific Voices Collective",
        date: "December 2023",
        slug: "forgotten-islands-pacific-asia",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">GenAsia</h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                A platform dedicated to amplifying youth voices, student perspectives, and the next generation of Asian
                visionaries.
              </p>
            </div>

            <div className="space-y-12">
              {genAsiaFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="border-b border-slate-200 pb-12 last:border-b-0">
                    <div className="flex items-center space-x-3 mb-6">
                      <IconComponent className={`h-8 w-8 ${feature.color}`} />
                      <h2 className="text-2xl font-bold text-slate-900">{feature.title}</h2>
                    </div>
                    <p className="text-slate-600 mb-6 max-w-3xl">{feature.description}</p>

                    <Card className="hover:shadow-lg transition-shadow duration-300 border-slate-200/50">
                      <CardHeader>
                        <CardTitle className="text-xl text-slate-900 mb-2">{feature.content.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{feature.content.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{feature.content.date}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4">{feature.content.summary}</p>
                        <Link href={`/blog/${feature.content.slug}`}>
                          <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white">
                            Read Full Story
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
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
