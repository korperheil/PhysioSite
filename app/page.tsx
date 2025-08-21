import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { QuickLinks } from "@/components/quick-links"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import { StructuredData } from "@/components/structured-data"

export default function HomePage() {
  return (
    <>
      <StructuredData type="organization" />
      <Hero />
      <Philosophy />
      <QuickLinks />
      <Testimonials />
      <FaqSection />
    </>
  )
}