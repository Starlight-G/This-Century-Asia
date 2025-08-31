import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText } from "lucide-react"

export default function PrivacyTermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Privacy Policy & Terms of Service</h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our commitment to protecting your privacy and ensuring transparent platform usage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-purple-200/50 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-slate-900">Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      <strong>Data Collection:</strong> We collect only essential information needed to provide our
                      services, including name, email, and content submissions.
                    </p>
                    <p>
                      <strong>Data Usage:</strong> Your information is used solely for platform functionality,
                      newsletter delivery, and community engagement. We never sell personal data.
                    </p>
                    <p>
                      <strong>Data Protection:</strong> We implement industry-standard security measures to protect your
                      personal information and content.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-violet-200/50 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <FileText className="h-12 w-12 text-violet-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-slate-900">Terms of Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      <strong>Content Usage:</strong> All content follows fair-use practices. Contributors retain rights
                      to their original work while granting us publication rights.
                    </p>
                    <p>
                      <strong>Community Guidelines:</strong> We maintain a respectful, inclusive environment focused on
                      constructive dialogue about Asia's future.
                    </p>
                    <p>
                      <strong>Platform Access:</strong> Services are provided as-is, with continuous improvements and
                      updates to enhance user experience.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment</h2>
                <p className="text-slate-700 mb-6">
                  This platform respects your privacy and adheres to basic data ethics. No information is sold, and
                  content usage follows fair-use practices. We believe in transparency, community-driven growth, and
                  responsible platform governance.
                </p>

                <div className="space-y-4 text-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900">Key Principles:</h3>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Privacy First:</strong> Minimal data collection, maximum protection
                    </li>
                    <li>
                      • <strong>Community Owned:</strong> Content creators retain ownership of their work
                    </li>
                    <li>
                      • <strong>Transparent Operations:</strong> Clear policies, open communication
                    </li>
                    <li>
                      • <strong>Inclusive Platform:</strong> Welcoming diverse voices across Asia
                    </li>
                    <li>
                      • <strong>Responsible Growth:</strong> Sustainable, community-focused development
                    </li>
                  </ul>
                </div>

                <div className="mt-8 p-4 bg-white rounded-lg">
                  <p className="text-slate-600 text-center">
                    <strong>Questions or Concerns?</strong>
                    <br />
                    Contact us at{" "}
                    <a
                      href="mailto:thiscenturybelongstoasia@gmail.com"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      thiscenturybelongstoasia@gmail.com
                    </a>
                  </p>
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
