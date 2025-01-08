export function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">1</div>
            <h3 className="text-xl font-bold text-dark-blue mb-2">Connect</h3>
            <p className="text-charcoal-gray">Authorize your data sources</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">2</div>
            <h3 className="text-xl font-bold text-dark-blue mb-2">Configure</h3>
            <p className="text-charcoal-gray">Set up your data mappings</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">3</div>
            <h3 className="text-xl font-bold text-dark-blue mb-2">Sync</h3>
            <p className="text-charcoal-gray">Automate data synchronization</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">4</div>
            <h3 className="text-xl font-bold text-dark-blue mb-2">Analyze</h3>
            <p className="text-charcoal-gray">Use data in Google Sheets</p>
          </div>
        </div>
      </div>
    </section>
  )
}
