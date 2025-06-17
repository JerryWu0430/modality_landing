import { HeroSection } from '@/components/sections/hero-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { PricingCardsSection } from '@/components/sections/pricing-cards-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PricingCardsSection />
    </main>
  )
}
