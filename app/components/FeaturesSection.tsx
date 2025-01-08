export function FeaturesSection() {
  return (
    <section className="py-20 bg-neutral-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold text-dark-blue mb-4">Multi-Platform Integration</h3>
            <p className="text-charcoal-gray">
              Connect to Tableau, Salesforce, QuickBooks, NetSuite, Shopify, and more.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="text-xl font-bold text-dark-blue mb-4">Real-Time Data Sync</h3>
            <p className="text-charcoal-gray">
              Keep your Google Sheets updated with live data from all your sources.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="text-xl font-bold text-dark-blue mb-4">Secure & Reliable</h3>
            <p className="text-charcoal-gray">
              Enterprise-grade security with end-to-end encryption and OAuth2 authentication.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
