import { Check } from 'lucide-react'

export function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold text-dark-blue mb-4">Starter</h3>
            <p className="text-4xl font-bold text-primary-blue mb-4">$49<span className="text-lg">/mo</span></p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0" />
                <span>2 Data Sources</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0" />
                <span>Daily Sync</span>
              </li>
            </ul>
          </div>
          <div className="feature-card border-2 border-primary-blue">
            <h3 className="text-xl font-bold text-dark-blue mb-4">Professional</h3>
            <p className="text-4xl font-bold text-primary-blue mb-4">$99<span className="text-lg">/mo</span></p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0" />
                <span>5 Data Sources</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0" />
                <span>Hourly Sync</span>
              </li>
            </ul>
          </div>
          <div className="feature-card">
            <h3 className="text-xl font-bold text-dark-blue mb-4">Enterprise</h3>
            <p className="text-4xl font-bold text-primary-blue mb-4">$199<span className="text-lg">/mo</span></p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0" />
                <span>Unlimited Sources</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0" />
                <span>Real-Time Sync</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
