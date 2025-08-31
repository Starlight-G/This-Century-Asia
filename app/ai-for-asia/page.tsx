"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, Building, TrendingUp, Users, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function AIForAsiaPage() {
  const aiFeatures = [
    {
      title: "Asian AI Founders",
      description: "Profiles and interviews with leading AI entrepreneurs across Asia",
      icon: Users,
      color: "text-purple-600",
      content: {
        title: "From Bangalore to Global: How Zerodha's Nithin Kamath is Democratizing AI Trading",
        summary:
          "An exclusive interview with India's fintech pioneer on how AI is making stock trading accessible to millions of first-time investors across Asia, and his vision for financial inclusion.",
        author: "AI Founders Series",
        date: "January 2024",
        slug: "zerodha-ai-trading",
      },
    },
    {
      title: "Startup Case Studies",
      description: "Deep dives into successful AI startups and their impact",
      icon: Building,
      color: "text-violet-600",
      content: {
        title: "Gojek's AI Revolution: How Indonesia's Super-App Uses Machine Learning for 50 Million Users",
        summary:
          "Inside look at how Gojek's AI algorithms optimize everything from driver routes to food delivery times, and what this means for Southeast Asia's digital economy.",
        author: "Startup Analysis Team",
        date: "December 2023",
        slug: "gojek-ai-revolution",
      },
    },
    {
      title: "Regional AI Trends",
      description: "Analysis of how different Asian markets are adopting AI",
      icon: TrendingUp,
      color: "text-indigo-600",
      content: {
        title: "The Great AI Divide: Why Japan Leads in Robotics While India Dominates Software",
        summary:
          "Analyzing how different Asian countries are specializing in different AI sectors - from Japan's humanoid robots to India's AI services and China's surveillance tech.",
        author: "Regional Trends Team",
        date: "January 2024",
        slug: "great-ai-divide",
      },
    },
    {
      title: "AI Shaping Asia",
      description: "How artificial intelligence is transforming Asian societies",
      icon: Bot,
      color: "text-purple-500",
      content: {
        title: "Smart Cities, Smarter Citizens: How Singapore's AI Governance is Setting Global Standards",
        summary:
          "Exploring Singapore's comprehensive AI governance framework and how it's balancing innovation with privacy, setting a model for other Asian nations.",
        author: "AI Policy Team",
        date: "December 2023",
        slug: "singapore-ai-governance",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-purple-50/50 to-violet-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">AI for Asia</h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Featuring Asian AI founders, startups, and exploring how Asia is shaping—and being shaped by—artificial
                intelligence.
              </p>
            </div>

            <div className="space-y-12">
              {aiFeatures.map((feature, index) => {
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
                            Read Analysis
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
