import Hero from "./components/Hero"
import AboutStudio from "./components/About"
import TrustIndicators from "./components/Trust"
import SelectedWorks from "./components/SelectedWorks"
import Specializations from "./components/Specializations"
import Methodology from "./components/Methodology"
import Philosophy from "./components/Philosophy"
import TestimonialSection from "./components/TestimonialSection"
import ContactForm from "./components/ContactForm"
import Subscription from "./components/Subscription"

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] text-[#e8e8e8]">
      <Hero />
      <AboutStudio />
      <TrustIndicators />
      <SelectedWorks />
      <Specializations />
      <Methodology />
      <Philosophy />
      <TestimonialSection />
      <ContactForm />
      <Subscription />
    </main>
  )
}