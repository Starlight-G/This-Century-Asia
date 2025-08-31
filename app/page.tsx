import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import BootcampTeaser from "@/components/bootcamp-teaser"
import FutureVoicesSection from "@/components/future-voices-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main>
        <HeroSection />
        <BootcampTeaser />
        <FutureVoicesSection />
      </main>
      <Footer />
    </div>
  )
}
