import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IITDelhiAIEthicsLab() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main className="pt-20">
        <article className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/genasia">
              <Button variant="ghost" className="mb-6 text-purple-600 hover:text-purple-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to GenAsia
              </Button>
            </Link>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="text-sm text-indigo-600 font-medium mb-2">Campus Dispatches</div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Inside IIT Delhi's AI Ethics Lab: Where Students Debate Technology's Future
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Campus Correspondent</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>January 2024</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-xl text-slate-600 mb-6 font-light">
                  A behind-the-scenes look at how computer science students at India's premier tech institute are
                  grappling with questions of AI bias, privacy, and social responsibility.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Lab That Questions Everything</h2>
                <p className="text-slate-700 mb-6">
                  Every Tuesday evening, Room 301 in IIT Delhi's computer science building transforms into a
                  philosophical battleground. The AI Ethics Lab, started by Professor Ananya Sharma and run largely by
                  students, tackles questions that most engineering programs avoid: Should AI systems be designed to
                  reflect Indian cultural values? How do we prevent algorithmic bias in a diverse society like India's?
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Real-World Impact</h2>
                <p className="text-slate-700 mb-6">
                  The lab isn't just theoretical. Students have identified bias in facial recognition systems used by
                  Indian police, developed guidelines for AI in healthcare that account for India's linguistic
                  diversity, and created tools to detect deepfakes in regional languages. Their work has influenced
                  policy discussions at the national level.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Caste Algorithm Debate</h2>
                <p className="text-slate-700 mb-6">
                  One of the lab's most controversial projects examines how AI systems might perpetuate caste
                  discrimination. Student researcher Priya Patel discovered that resume-screening algorithms showed bias
                  against candidates with names associated with lower castes. Her findings sparked campus-wide
                  discussions about technology's role in social justice.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Building Ethical Engineers</h2>
                <p className="text-slate-700 mb-6">
                  "We're not just training programmers," explains lab coordinator Rahul Singh, a final-year student.
                  "We're training engineers who understand that every line of code has social implications." The lab's
                  approach is now being replicated at IITs across India and has inspired similar programs at
                  universities in Southeast Asia.
                </p>

                <div className="bg-indigo-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Lab Achievements</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>• 3 policy recommendations adopted by Indian government</li>
                    <li>• 50+ students trained in AI ethics over 2 years</li>
                    <li>• 12 research papers published in international journals</li>
                    <li>• 8 IITs now have similar ethics programs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
