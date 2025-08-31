"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Globe, Heart } from "lucide-react"

export default function FutureVoicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    region: "",
    ageGroup: "",
    profession: "",
    bio: "",
    project: "",
    vision: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Future Voices submission:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Future Voices of Asia</h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                This space invites young changemakers, creators, and cultural leaders across Asia to share their voice,
                vision, and story with the world.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-purple-200/50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Share Your Vision</h3>
                  <p className="text-slate-600 text-sm">
                    Tell us about your ideas, projects, and dreams for Asia's future
                  </p>
                </CardContent>
              </Card>
              <Card className="border-violet-200/50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-violet-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Connect Globally</h3>
                  <p className="text-slate-600 text-sm">Join a network of young leaders from across the continent</p>
                </CardContent>
              </Card>
              <Card className="border-indigo-200/50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Make Impact</h3>
                  <p className="text-slate-600 text-sm">Get featured and inspire others with your story</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200/50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-slate-900 mb-4">Submit Your Voice</CardTitle>
                <p className="text-slate-600">
                  Ready to share your story? Fill out the form below and become part of Asia's future narrative.
                </p>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
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
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="region" className="block text-sm font-medium text-slate-700 mb-2">
                          Region/Country *
                        </label>
                        <Input
                          id="region"
                          type="text"
                          required
                          value={formData.region}
                          onChange={(e) => handleInputChange("region", e.target.value)}
                          placeholder="e.g., Singapore, India, Philippines"
                        />
                      </div>
                      <div>
                        <label htmlFor="ageGroup" className="block text-sm font-medium text-slate-700 mb-2">
                          Age Group *
                        </label>
                        <Select onValueChange={(value) => handleInputChange("ageGroup", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select age group" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="below-18">Below 18</SelectItem>
                            <SelectItem value="18-25">18-25</SelectItem>
                            <SelectItem value="25-35">25-35</SelectItem>
                            <SelectItem value="35-50">35-50</SelectItem>
                            <SelectItem value="50+">50+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="profession" className="block text-sm font-medium text-slate-700 mb-2">
                        Profession/Designation *
                      </label>
                      <Input
                        id="profession"
                        type="text"
                        required
                        value={formData.profession}
                        onChange={(e) => handleInputChange("profession", e.target.value)}
                        placeholder="e.g., Student, Entrepreneur, Artist, Activist"
                      />
                    </div>

                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-slate-700 mb-2">
                        Brief Bio *
                      </label>
                      <Textarea
                        id="bio"
                        required
                        value={formData.bio}
                        onChange={(e) => handleInputChange("bio", e.target.value)}
                        placeholder="Tell us about yourself, your background, and what drives you (200-300 words)"
                        rows={4}
                      />
                    </div>

                    <div>
                      <label htmlFor="project" className="block text-sm font-medium text-slate-700 mb-2">
                        Current Project/Initiative
                      </label>
                      <Textarea
                        id="project"
                        value={formData.project}
                        onChange={(e) => handleInputChange("project", e.target.value)}
                        placeholder="Describe any current projects, initiatives, or work you're involved in"
                        rows={3}
                      />
                    </div>

                    <div>
                      <label htmlFor="vision" className="block text-sm font-medium text-slate-700 mb-2">
                        Your Vision for Asia's Future *
                      </label>
                      <Textarea
                        id="vision"
                        required
                        value={formData.vision}
                        onChange={(e) => handleInputChange("vision", e.target.value)}
                        placeholder="Share your thoughts on where Asia is heading and how you want to contribute to that future"
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white py-3"
                    >
                      Submit Your Voice
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-green-600 text-6xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                    <p className="text-slate-600 mb-4">
                      Your submission has been received. We'll review your story and get back to you within 1-2 weeks.
                    </p>
                    <p className="text-sm text-slate-500">
                      Follow us on social media to stay updated on when your story might be featured.
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
