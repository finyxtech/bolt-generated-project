import { HeroSection } from './components/HeroSection'
import { ChallengesSolutionsSection } from './components/ChallengesSolutionsSection'
import { FeaturesSection } from './components/FeaturesSection'
import { HowItWorksSection } from './components/HowItWorksSection'
import { ROICalculatorSection } from './components/ROICalculatorSection'
import { PricingSection } from './components/PricingSection'
import { FAQSection } from './components/FAQSection'
import { CTASection } from './components/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-gray">
      <HeroSection />
      <ChallengesSolutionsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ROICalculatorSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
