export function ROICalculatorSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-blue to-dark-blue">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Calculate Your ROI</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-dark-blue font-medium mb-2">Employees</label>
              <input type="number" className="w-full p-2 border rounded" placeholder="10" />
            </div>
            <div>
              <label className="block text-dark-blue font-medium mb-2">Hours Saved/Week</label>
              <input type="number" className="w-full p-2 border rounded" placeholder="5" />
            </div>
          </div>
          <button className="btn-primary bg-primary-yellow text-dark-blue hover:bg-soft-yellow">
            Calculate ROI
          </button>
        </div>
      </div>
    </section>
  )
}
