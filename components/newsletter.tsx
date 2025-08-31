"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Send } from "lucide-react"

export default function Newsletter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", formData)
    setIsSubscribed(true)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 to-rose-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center">
            <Mail className="h-16 w-16 text-amber-600 mx-auto mb-4" />
            <CardTitle className="text-3xl text-slate-900 mb-2">Dispatches from Asia</CardTitle>
            <p className="text-lg text-slate-600">
              Subscribe to monthly insights, ideas, and inspiration across the Asian continent.
            </p>
          </CardHeader>
          <CardContent>
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white"
                >
                  Subscribe
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            ) : (
              <div className="text-center">
                <div className="text-green-600 text-lg font-semibold mb-2">🎉 Welcome to the movement!</div>
                <p className="text-slate-600">Thank you for subscribing. You'll receive your first dispatch soon.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
