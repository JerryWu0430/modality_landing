import { HeroSection } from '@/app/sections/hero-section'
import { FeatureSection } from '@/app/sections/feature-section'
import { VisualDemo } from '@/app/sections/demo-example-section'
import { HowItWorks } from '@/app/sections/how-it-works-sections'
import { PricingCardsSection } from '@/app/sections/pricing-cards-section'
import { FooterSection } from '@/app/sections/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <HowItWorks />
      <VisualDemo />
      <PricingCardsSection />
      <FooterSection />
    </main>
  )
}
