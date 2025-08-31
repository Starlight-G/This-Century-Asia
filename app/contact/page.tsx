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
import { Mail, Users, Edit, MapPin } from "lucide-react"

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<"contact" | "partner" | "write" | null>(null)
  const [submissions, setSubmissions] = useState<Record<string, boolean>>({})

  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log("Contact form submission:", formData)
      setSubmissions((prev) => ({ ...prev, contact: true }))
    }

    if (submissions.contact) {
      return (
        <div className="text-center py-8">
          <div className="text-green-600 text-4xl mb-4">✓</div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
          <p className="text-slate-600">We'll get back to you within 24-48 hours.</p>
        </div>
      )
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Subject *</label>
          <Input
            required
            value={formData.subject}
            onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
            placeholder="What's this about?"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
          <Textarea
            required
            value={formData.message}
            onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
            placeholder="Tell us more..."
            rows={4}
          />
        </div>
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          Send Message
        </Button>
      </form>
    )
  }

  const PartnerForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      organization: "",
      partnershipType: "",
      description: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log("Partnership form submission:", formData)
      setSubmissions((prev) => ({ ...prev, partner: true }))
    }

    if (submissions.partner) {
      return (
        <div className="text-center py-8">
          <div className="text-green-600 text-4xl mb-4">✓</div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Partnership Inquiry Received!</h3>
          <p className="text-slate-600">We'll review your proposal and respond within 3-5 business days.</p>
        </div>
      )
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Organization *</label>
          <Input
            required
            value={formData.organization}
            onChange={(e) => setFormData((prev) => ({ ...prev, organization: e.target.value }))}
            placeholder="Your company/organization"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Partnership Type *</label>
          <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, partnershipType: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select partnership type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="content">Content Collaboration</SelectItem>
              <SelectItem value="sponsorship">Sponsorship</SelectItem>
              <SelectItem value="strategic">Strategic Partnership</SelectItem>
              <SelectItem value="media">Media Partnership</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Partnership Description *</label>
          <Textarea
            required
            value={formData.description}
            onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
            placeholder="Describe your partnership proposal..."
            rows={4}
          />
        </div>
        <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white">
          Submit Partnership Inquiry
        </Button>
      </form>
    )
  }

  const WriteForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      expertise: "",
      experience: "",
      samples: "",
      pitch: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log("Write for us submission:", formData)
      setSubmissions((prev) => ({ ...prev, write: true }))
    }

    if (submissions.write) {
      return (
        <div className="text-center py-8">
          <div className="text-green-600 text-4xl mb-4">✓</div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Application Submitted!</h3>
          <p className="text-slate-600">We'll review your application and get back to you within 1-2 weeks.</p>
        </div>
      )
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Area of Expertise *</label>
          <Input
            required
            value={formData.expertise}
            onChange={(e) => setFormData((prev) => ({ ...prev, expertise: e.target.value }))}
            placeholder="e.g., Technology, Politics, Culture, Business"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Writing Experience *</label>
          <Textarea
            required
            value={formData.experience}
            onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
            placeholder="Describe your writing background and experience..."
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Writing Samples</label>
          <Textarea
            value={formData.samples}
            onChange={(e) => setFormData((prev) => ({ ...prev, samples: e.target.value }))}
            placeholder="Share links to your published work or attach samples..."
            rows={2}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Article Pitch *</label>
          <Textarea
            required
            value={formData.pitch}
            onChange={(e) => setFormData((prev) => ({ ...prev, pitch: e.target.value }))}
            placeholder="What would you like to write about for our platform?"
            rows={3}
          />
        </div>
        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
          Submit Application
        </Button>
      </form>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get In Touch</h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Ready to be part of Asia's future? Whether you want to contribute content, explore partnerships, or
                simply connect with our community, we'd love to hear from you.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Contact Us */}
              <Card className="border-purple-200/50 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-slate-900">Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 text-center">
                    Have questions, feedback, or want to learn more about our platform? We're here to help.
                  </p>
                  {activeForm === "contact" ? (
                    <ContactForm />
                  ) : (
                    <Button
                      onClick={() => setActiveForm("contact")}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Open Contact Form
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Partner With Us */}
              <Card className="border-violet-200/50 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-violet-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-slate-900">Partner With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 text-center">
                    Interested in collaborating, sponsoring content, or building strategic partnerships?
                  </p>
                  {activeForm === "partner" ? (
                    <PartnerForm />
                  ) : (
                    <Button
                      onClick={() => setActiveForm("partner")}
                      className="w-full bg-violet-600 hover:bg-violet-700 text-white"
                    >
                      Open Partnership Form
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Write For Us */}
              <Card className="border-indigo-200/50 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <Edit className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-slate-900">Write For Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 text-center">
                    Share your expertise, insights, and stories with our growing community of readers.
                  </p>
                  {activeForm === "write" ? (
                    <WriteForm />
                  ) : (
                    <Button
                      onClick={() => setActiveForm("write")}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                      Open Writer Application
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Direct Contact Information */}
            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Direct Contact</h2>
                  <p className="text-slate-600">
                    Prefer to reach out directly? Here are additional ways to connect with us.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <Mail className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                    <a
                      href="mailto:thiscenturybelongstoasia@gmail.com"
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      thiscenturybelongstoasia@gmail.com
                    </a>
                  </div>

                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-violet-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Based In</h3>
                    <p className="text-slate-600">Asia-Pacific Region</p>
                    <p className="text-sm text-slate-500">Serving the global Asian community</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Response Time</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-purple-600">General Inquiries:</strong>
                      <p className="text-slate-600">24-48 hours</p>
                    </div>
                    <div>
                      <strong className="text-violet-600">Partnership Requests:</strong>
                      <p className="text-slate-600">3-5 business days</p>
                    </div>
                    <div>
                      <strong className="text-indigo-600">Content Submissions:</strong>
                      <p className="text-slate-600">1-2 weeks</p>
                    </div>
                  </div>
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
