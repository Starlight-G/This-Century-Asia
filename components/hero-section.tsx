"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-violet-200 to-indigo-200"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            This Century
            <span className="block bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Belongs to Asia
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light">A vision. A voice. A movement.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/join">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 text-lg"
              >
                Join the Movement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/explore">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-3 text-lg bg-transparent"
              >
                Explore the Platform
              </Button>
            </Link>
          </div>

          {/* Asia Map Visual */}
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-purple-100/50 to-violet-100/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-200/30">
              <div className="flex items-center justify-center">
                <Globe className="h-32 w-32 text-purple-600/70 animate-pulse" />
              </div>
              <p className="text-sm text-slate-600 mt-4 font-medium">
                Amplifying diverse voices across South, East, and Southeast Asia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
