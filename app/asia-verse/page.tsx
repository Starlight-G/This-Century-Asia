"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Leaf, Bot, Brain, Database, Tv, Map, Rocket, Calendar, User } from "lucide-react"

export default function AsiaversePage() {
  const asiaverseProjects = [
    {
      title: "Digital Dharma",
      description: "Exploring spirituality and technology in the digital age",
      icon: Zap,
      color: "text-purple-600",
      content: {
        title: "Virtual Temples and AI Monks: How Buddhism is Adapting to the Metaverse",
        summary:
          "Examining how Buddhist temples in Japan and Thailand are creating virtual meditation spaces, AI-powered spiritual guidance, and digital pilgrimage experiences for the next generation.",
        author: "Spirituality & Tech Team",
        date: "January 2024",
      },
    },
    {
      title: "Green Archipelago",
      description: "Sustainable futures across Asia's island nations",
      icon: Leaf,
      color: "text-violet-600",
      content: {
        title: "Floating Cities of 2070: Indonesia's Climate Adaptation Masterplan",
        summary:
          "A speculative look at how Indonesia plans to build floating urban centers as sea levels rise, combining traditional maritime knowledge with cutting-edge sustainable technology.",
        author: "Climate Futures Lab",
        date: "December 2023",
      },
    },
    {
      title: "AI Civil Service",
      description: "Reimagining governance through artificial intelligence",
      icon: Bot,
      color: "text-indigo-600",
      content: {
        title: "Singapore 2050: When AI Becomes Your City Councilor",
        summary:
          "Exploring Singapore's roadmap to AI-assisted governance, from automated policy drafting to AI mediators for citizen disputes, and what this means for democracy in Asia.",
        author: "Governance Innovation Team",
        date: "January 2024",
      },
    },
    {
      title: "Borderless Minds",
      description: "Education and knowledge sharing without boundaries",
      icon: Brain,
      color: "text-purple-500",
      content: {
        title: "The Pan-Asian University: Learning Without Borders in 2040",
        summary:
          "Imagining a future where students seamlessly study across Asian universities through VR classrooms, AI translators, and shared digital campuses spanning from Tokyo to Mumbai.",
        author: "Education Futures Team",
        date: "December 2023",
      },
    },
    {
      title: "Asia Stack & Regional Digital Identity",
      description: "Building unified digital infrastructure across Asia",
      icon: Database,
      color: "text-violet-500",
      content: {
        title: "One Asia, One Digital ID: The 2035 Vision for Regional Integration",
        summary:
          "How ASEAN's digital identity project could evolve into a continent-wide system, enabling seamless travel, work, and commerce from Seoul to Jakarta with a single digital passport.",
        author: "Digital Infrastructure Team",
        date: "January 2024",
      },
    },
    {
      title: "AsiaFlix & Culturverse",
      description: "Pan-Asian entertainment and cultural research",
      icon: Tv,
      color: "text-purple-700",
      content: {
        title: "Beyond K-Pop: The Rise of Pan-Asian Cultural Fusion by 2030",
        summary:
          "Predicting how Vietnamese indie music, Indonesian gaming, and Indian web series will blend into new hybrid entertainment forms that define global pop culture.",
        author: "Cultural Trends Lab",
        date: "December 2023",
      },
    },
    {
      title: "Geohacks",
      description: "Geographic innovation and spatial technology",
      icon: Map,
      color: "text-indigo-500",
      content: {
        title: "Mapping the Unmappable: How Asian Geohackers Are Redefining Borders",
        summary:
          "From disputed territories to climate migration routes, exploring how young Asian technologists are using satellite data and AI to create new ways of understanding space and place.",
        author: "Geospatial Innovation Team",
        date: "January 2024",
      },
    },
    {
      title: "Youth-led Micro Startups",
      description: "Supporting the next generation of Asian entrepreneurs",
      icon: Rocket,
      color: "text-violet-700",
      content: {
        title: "The $100 Startup Revolution: How Asian Gen-Z is Building Businesses on TikTok",
        summary:
          "Profiling young entrepreneurs across Asia who are building million-dollar businesses with minimal capital, using social media, AI tools, and community-driven growth strategies.",
        author: "Entrepreneurship Lab",
        date: "December 2023",
      },
    },
  ]

  const handleExplore = (title: string) => {
    alert(`"${title}" - Full speculative research coming soon. Stay tuned for deep-dive analysis!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Asiaverse</h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-2">
                What could Asia look like in 50–100 years?
              </p>
              <p className="text-base text-slate-500 max-w-2xl mx-auto">
                Futuristic, speculative research meets storytelling to envision Asia's tomorrow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {asiaverseProjects.map((project, index) => {
                const IconComponent = project.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 border-slate-200/50">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        <IconComponent className={`h-8 w-8 ${project.color}`} />
                        <CardTitle className="text-xl text-slate-900">{project.title}</CardTitle>
                      </div>
                      <p className="text-sm text-slate-500 mb-4">{project.description}</p>
                      <CardTitle className="text-lg text-slate-900">{project.content.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{project.content.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.content.date}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">{project.content.summary}</p>
                      <Button
                        onClick={() => handleExplore(project.content.title)}
                        className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
                      >
                        Explore Research
                      </Button>
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
