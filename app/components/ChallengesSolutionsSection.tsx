import { ChevronRight, Check } from 'lucide-react'

export function ChallengesSolutionsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Challenges vs Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-soft-yellow p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-dark-blue mb-4">Challenges</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ChevronRight className="w-6 h-6 text-primary-blue mr-2 flex-shrink-0" />
                <span>Manual data entry and updates</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-6 h-6 text-primary-blue mr-2 flex-shrink-0" />
                <span>Data silos across different platforms</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-6 h-6 text-primary-blue mr-2 flex-shrink-0" />
                <span>Time-consuming reporting processes</span>
              </li>
            </ul>
          </div>
          <div className="bg-light-blue p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-dark-blue mb-4">Solutions</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="w-6 h-6 text-primary-blue mr-2 flex-shrink-0" />
                <span>Automated data synchronization</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-primary-blue mr-2 flex-shrink-0" />
                <span>Unified data access in Google Sheets</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-primary-blue mr-2 flex-shrink-0" />
                <span>Real-time reporting and analytics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
