"use client"

import { Twitter, Instagram, Linkedin, Mail, Edit, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const socialLinks = [
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      disabled: true,
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/thiscenturybelongstoasia/",
      label: "Instagram",
      disabled: false,
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/thiscenturyasia",
      label: "LinkedIn",
      disabled: false,
    },
  ]

  const pageLinks = [
    { name: "Home", href: "/" },
    { name: "AsiaLens", href: "/asia-lens" },
    { name: "Asiaverse", href: "/asia-verse" },
    { name: "GenAsia", href: "/genasia" },
    { name: "AI for Asia", href: "/ai-for-asia" },
    { name: "The Mirror Project", href: "/mirror-project" },
    { name: "Future Voices of Asia", href: "/future-voices" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Dispatches", href: "/dispatches" },
  ]

  const footerLinks = [
    { title: "Contact Us", href: "/contact", icon: Mail },
    { title: "Partner with Us", href: "/contact", icon: Users },
    { title: "Write for Us", href: "/contact", icon: Edit },
  ]

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/logo.png" alt="This Century Asia Logo" width={32} height={32} className="rounded-lg" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                This Century Asia
              </h3>
            </div>
            <p className="text-slate-300 mb-4">
              Amplifying diverse voices, ideas, and futures shaping the Asian century.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`transition-colors duration-200 ${
                      social.disabled ? "text-slate-500 cursor-not-allowed" : "text-slate-400 hover:text-purple-400"
                    }`}
                    aria-label={social.label}
                    {...(social.disabled ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    onClick={social.disabled ? (e) => e.preventDefault() : undefined}
                  >
                    <IconComponent className="h-6 w-6" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <div className="space-y-2">
              {pageLinks.slice(0, 5).map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-slate-300 hover:text-purple-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">More</h4>
            <div className="space-y-2">
              {pageLinks.slice(5).map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-slate-300 hover:text-purple-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-2 mb-6">
              {footerLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-2 text-slate-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{link.title}</span>
                  </a>
                )
              })}
            </div>
            <div className="space-y-2">
              <Link
                href="/privacy-terms"
                className="block text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/privacy-terms"
                className="block text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 This Century Asia. All rights reserved. Built with ❤️ for Asia's future.
          </p>
        </div>
      </div>
    </footer>
  )
}
