import { HeroSection } from '@/app/sections/hero-section'
import { PricingCardsSection } from '@/app/sections/pricing-cards-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PricingCardsSection />
    </main>
  )
}
