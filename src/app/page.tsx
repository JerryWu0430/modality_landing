import { HeroSection } from '@/app/sections/hero-section'
import { PricingCardsSection } from '@/app/sections/pricing-cards-section'
import { FooterSection } from '@/app/sections/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />  
      <PricingCardsSection />
      <FooterSection />
    </main>
  )
}
