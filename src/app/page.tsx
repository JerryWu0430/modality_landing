import { HeroSection } from '@/app/sections/hero-section'
import { FeatureSection } from '@/app/sections/feature-section'
import { PricingCardsSection } from '@/app/sections/pricing-cards-section'
import { AboutSection } from '@/app/sections/about-section'
import { FAQSection } from '@/app/sections/faq-section'
import { FooterSection } from '@/app/sections/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <PricingCardsSection />
      <FAQSection />
      <FooterSection />
    </main>
  )
}
