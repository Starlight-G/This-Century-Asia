"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function DispatchesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription here
    console.log("Newsletter subscription:", formData)
    setIsSubscribed(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="text-center">
                <Mail className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-3xl text-slate-900 mb-2">Subscribe to Our Newsletter</CardTitle>
                <p className="text-lg text-slate-600">
                  Stay updated with monthly insights, ideas, and inspiration from across the Asian continent. Get
                  exclusive access to our latest stories, research, and community updates.
                </p>
              </CardHeader>
              <CardContent>
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white py-3"
                    >
                      Subscribe to Dispatches
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-green-600 text-6xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Welcome to the Community!</h3>
                    <p className="text-slate-600 mb-4">
                      Thank you for subscribing to our newsletter. You'll receive your first dispatch soon with the
                      latest insights from across Asia.
                    </p>
                    <p className="text-sm text-slate-500">
                      Check your email for a confirmation message and add us to your contacts to ensure delivery.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
