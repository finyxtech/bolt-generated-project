import { ChevronRight, Check } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-light-blue to-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-dark-blue mb-6">
          Connect Your Business Data <br />
          <span className="text-primary-blue">Seamlessly</span>
        </h1>
        <p className="text-xl text-charcoal-gray mb-8 max-w-2xl mx-auto">
          Finyx Connector bridges the gap between your favorite platforms and Google Sheets. 
          Automate data flows from Tableau, Salesforce, QuickBooks, and more.
        </p>
        <div className="space-x-4">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  )
}
