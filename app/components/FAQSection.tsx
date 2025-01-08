export function FAQSection() {
  return (
    <section className="py-20 bg-neutral-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-dark-blue">What platforms do you support?</h3>
              <p className="text-charcoal-gray mt-2">We support Tableau, Salesforce, QuickBooks, NetSuite, Shopify, and more.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-dark-blue">Is my data secure?</h3>
              <p className="text-charcoal-gray mt-2">Yes, we use enterprise-grade security with end-to-end encryption.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
