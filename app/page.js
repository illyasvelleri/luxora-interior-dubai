
import Navigation from "./components/Navbar"
import Hero from "./components/Hero"
import AboutStudio from "./components/About"
import TrustIndicators from "./components/Trust"
import SelectedWorks from "./components/SelectedWorks"
import Specializations from "./components/Specializations"
import Methodology from "./components/Methodology"
import Philosophy from "./components/Philosophy"
import ContactForm from "./components/ContactForm"
import Subscription from "./components/Subscription"
import Footer from "./components/Footer"

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
      <ContactForm />
      <Subscription />
    </main>
  )
}


// import Image from 'next/image'
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <main className="bg-[#0d0d0d] text-[#e8e8e8]">
//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
//         <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20 py-6 sm:py-8 flex items-center justify-between">
//           <Link href="/" className="text-lg sm:text-xl tracking-[0.4em] font-light text-[#e8e8e8]">
//             LUMINA
//           </Link>
//           <div className="hidden md:flex items-center gap-10 lg:gap-16 text-xs tracking-[0.25em] text-[#d0d0d0]">
//             <Link href="#about" className="hover:text-[#d4af37] transition-colors duration-400">STUDIO</Link>
//             <Link href="#projects" className="hover:text-[#d4af37] transition-colors duration-400">WORKS</Link>
//             <Link href="#services" className="hover:text-[#d4af37] transition-colors duration-400">SPECIALIZATIONS</Link>
//             <Link href="#contact" className="hover:text-[#d4af37] transition-colors duration-400">ENQUIRE</Link>
//           </div>
//           {/* Mobile menu button - simple vertical lines */}
//           <button className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center">
//             <span className="w-full h-px bg-[#d0d0d0]"></span>
//             <span className="w-full h-px bg-[#d0d0d0]"></span>
//             <span className="w-full h-px bg-[#d0d0d0]"></span>
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative min-h-screen h-screen flex items-center justify-center">
//         <div className="absolute inset-0 bg-[#000000]">
//           <Image
//             src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop"
//             alt="Institutional architectural interior"
//             fill
//             className="object-cover opacity-35"
//             priority
//           />
//         </div>
//         <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-20 text-center">
//           <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-6 sm:mb-8 md:mb-10 leading-[0.95] tracking-tighter text-[#f5f5f5]">
//             Architecture<br />for Institutions
//           </h1>
//           <p className="text-sm sm:text-base md:text-lg mb-10 sm:mb-12 md:mb-16 text-[#b8b8b8] max-w-xl mx-auto font-light tracking-wide leading-relaxed px-4">
//             Interior design and fit-out execution for commercial, sacred, and institutional environments across the United Arab Emirates
//           </p>
//           <Link
//             href="#contact"
//             className="inline-block px-8 sm:px-12 md:px-14 py-4 sm:py-5 border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-700 text-xs tracking-[0.3em] font-light"
//           >
//             REQUEST CONSULTATION
//           </Link>
//         </div>
//       </section>

//       {/* About Studio - Authority Section */}
//       <section id="about" className="py-20 sm:py-28 md:py-40 border-t border-[#1a1a1a]">
//         <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-20">
//           <div className="grid md:grid-cols-12 gap-12 sm:gap-16 lg:gap-20 xl:gap-32">
//             <div className="md:col-span-7">
//               <div className="mb-10 sm:mb-12">
//                 <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">ESTABLISHED 2009</div>
//                 <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 sm:mb-10 md:mb-12 tracking-tight leading-[1.05]">
//                   Execution<br />Discipline
//                 </h2>
//               </div>
//               <div className="space-y-6 sm:space-y-8 text-[#a8a8a8] text-base sm:text-lg leading-[1.8] font-light">
//                 <p>
//                   LUMINA operates as an integrated interior architecture and fit-out studio, delivering turnkey solutions for high-value institutional environments across the UAE.
//                 </p>
//                 <p>
//                   Our practice synthesizes architectural design, regulatory coordination, engineering integration, and construction oversight within a unified governance framework.
//                 </p>
//                 <p>
//                   With fifteen years of regional execution, we specialize in complex projects requiring authority approvals, stakeholder alignment, and operational continuity during delivery.
//                 </p>
//                 <p>
//                   Every commission is approached as a permanent institutional asset—designed for longevity, operational resilience, and architectural coherence.
//                 </p>
//               </div>

//               <div className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-[#1a1a1a]">
//                 <div className="grid grid-cols-2 gap-8 sm:gap-10 md:gap-12">
//                   <div>
//                     <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#d4af37] mb-2 sm:mb-3">150+</div>
//                     <div className="text-xs sm:text-sm tracking-wider text-[#888]">INSTITUTIONAL PROJECTS</div>
//                   </div>
//                   <div>
//                     <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#d4af37] mb-2 sm:mb-3">15</div>
//                     <div className="text-xs sm:text-sm tracking-wider text-[#888]">YEARS REGIONAL PRACTICE</div>
//                   </div>
//                   <div>
//                     <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#d4af37] mb-2 sm:mb-3">100%</div>
//                     <div className="text-xs sm:text-sm tracking-wider text-[#888]">AUTHORITY COMPLIANCE</div>
//                   </div>
//                   <div>
//                     <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#d4af37] mb-2 sm:mb-3">UAE</div>
//                     <div className="text-xs sm:text-sm tracking-wider text-[#888]">LICENSED & INSURED</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="md:col-span-5 mt-8 md:mt-0">
//               <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] md:h-full md:min-h-[600px]">
//                 <Image
//                   src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
//                   alt="Studio execution and leadership"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Trust Indicators */}
//       <section className="py-12 sm:py-16 md:py-20 border-y border-[#1a1a1a]">
//         <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-20">
//           <div className="flex flex-wrap items-center justify-center sm:justify-around gap-6 sm:gap-8 md:gap-12 opacity-20 grayscale">
//             <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em]">EMAAR</div>
//             <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em]">DUBAI HOLDING</div>
//             <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em]">MERAAS</div>
//             <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em]">DAMAC</div>
//             <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em]">NAKHEEL</div>
//           </div>
//         </div>
//       </section>

//       {/* Selected Works - Monastery Presentation */}
//       <section id="projects" className="py-20 sm:py-28 md:py-40">
//         <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
//           <div className="mb-20 sm:mb-24 md:mb-32">
//             <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">PORTFOLIO</div>
//             <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">Selected Works</h2>
//           </div>
          
//           {/* Project 1 */}
//           <div className="mb-24 sm:mb-32 md:mb-40 lg:mb-48">
//             <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] mb-8 sm:mb-10 md:mb-12 overflow-hidden group">
//               <Image
//                 src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2400&auto=format&fit=crop"
//                 alt="Dubai International Airport Terminal"
//                 fill
//                 className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
//               />
//             </div>
//             <div className="max-w-[1400px] grid md:grid-cols-12 gap-6 sm:gap-8 mt-6 sm:mt-8">
//               <div className="md:col-span-8">
//                 <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight leading-tight">
//                   Dubai International Airport<br />Terminal Expansion
//                 </h3>
//                 <p className="text-[#a8a8a8] text-base sm:text-lg leading-relaxed">
//                   A 48,000 square meter terminal expansion integrating passenger flow optimization with architectural monumentality. The interior prioritizes operational clarity while creating spatial sequences that reinforce institutional scale and traveler orientation.
//                 </p>
//               </div>
//               <div className="md:col-span-4 text-sm space-y-4 sm:space-y-6 mt-6 md:mt-0">
//                 <div>
//                   <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">TYPOLOGY</div>
//                   <div className="text-[#d0d0d0]">Commercial Aviation Infrastructure</div>
//                 </div>
//                 <div>
//                   <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">LOCATION</div>
//                   <div className="text-[#d0d0d0]">Dubai, United Arab Emirates</div>
//                 </div>
//                 <div>
//                   <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">COMPLETION</div>
//                   <div className="text-[#d4af37]">2024</div>
//                 </div>
//                 <div>
//                   <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">SCOPE</div>
//                   <div className="text-[#d0d0d0]">Interior Architecture, MEP Coordination, Authority Approvals, Turnkey Fit-Out</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Project 2 */}
//           <div className="mb-24 sm:mb-32 md:mb-40 lg:mb-48">
//             <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] mb-8 sm:mb-10 md:mb-12 overflow-hidden group">
//               <Image
//                 src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=2400&auto=format&fit=crop"
//                 alt="Sheikh Mohammed Mosque Interior"
//                 fill
//                 className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
//               />
//             </div>
//             <div className="max-w-[1400px] grid md:grid-cols-12 gap-6 sm:gap-8 mt-6 sm:mt-8">
//               <div className="md:col-span-8">
//                 <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight leading-tight">
//                   Sheikh Mohammed Mosque<br />Prayer Hall & Annex
//                 </h3>
//                 <p className="text-[#a8a8a8] text-base sm:text-lg leading-relaxed">
//                   An intimate prayer hall designed for 2,400 worshippers, integrating traditional Islamic geometric principles with contemporary material expression. The design balances spiritual reverence with acoustic performance and spatial legibility.
//                 </p>
//               </div>
//               <div className="md:col-span-4 text-sm space-y-4 sm:space-y-6 mt-6 md:mt-0">
//                 <div>
//                   <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">TYPOLOGY</div>
//                   <div className="text-[#d0d0d0]">Sacred Architecture</div>
//                 </div>
//                 <div>
//                   <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">LOCATION</div>
//                   <div className="text-[#d0d0d0]">Abu Dhabi, United Arab Emirates</div>
//                 </div>
//                 <div>
//                   <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">COMPLETION</div>
//                   <div className="text-[#d4af37]">2023</div>
//                 </div>
//                 <div>
//                   <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">SCOPE</div>
//                   <div className="text-[#d0d0d0]">Interior Design, Islamic Geometric Detailing, Acoustic Engineering, Custom Millwork</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Project 3 */}
//           <div className="mb-24 sm:mb-32 md:mb-40 lg:mb-48">
//             <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] mb-8 sm:mb-10 md:mb-12 overflow-hidden group">
//               <Image
//                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop"
//                 alt="Emirates Towers Executive Floors"
//                 fill
//                 className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
//               />
//             </div>
//             <div className="max-w-[1400px] grid md:grid-cols-12 gap-6 sm:gap-8 mt-6 sm:mt-8">
//               <div className="md:col-span-8">
//                 <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight leading-tight">
//                   Emirates Towers<br />Executive Office Floors
//                 </h3>
//                 <p className="text-[#a8a8a8] text-base sm:text-lg leading-relaxed">
//                   Complete reimagining of four executive floors within an occupied high-rise tower. The design emphasizes material restraint, spatial flexibility, and operational continuity throughout phased construction. Integration of smart building systems and acoustic zoning ensures performance beyond aesthetic intent.
//                 </p>
//               </div>
//               <div className="md:col-span-4 text-sm space-y-4 sm:space-y-6 mt-6 md:mt-0">
//                 <div>
//                   <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">TYPOLOGY</div>
//                   <div className="text-[#d0d0d0]">Corporate Interior Architecture</div>
//                 </div>
//                 <div>
//                   <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">LOCATION</div>
//                   <div className="text-[#d0d0d0]">Dubai, United Arab Emirates</div>
//                 </div>
//                 <div>
//                   <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">COMPLETION</div>
//                   <div className="text-[#d4af37]">2023</div>
//                 </div>
//                 <div>
//                   <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">SCOPE</div>
//                   <div className="text-[#d0d0d0]">Occupied Phased Delivery, Smart Systems Integration, Custom Executive Furniture</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="text-center pt-8 sm:pt-12 md:pt-16">
//             <Link
//               href="/portfolio"
//               className="inline-block px-10 sm:px-12 md:px-14 py-4 sm:py-5 border border-[#404040] hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-700 text-xs tracking-[0.3em]"
//             >
//               COMPLETE PORTFOLIO
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Specializations */}
//       <section id="services" className="py-20 sm:py-28 md:py-40 bg-[#0a0a0a] border-y border-[#1a1a1a]">
//         <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-20">
//           <div className="mb-20 sm:mb-24 md:mb-32">
//             <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">CAPABILITIES</div>
//             <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">Specializations</h2>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-32">
//             <div className="border-l-2 border-[#d4af37]/30 pl-6 sm:pl-8 md:pl-10">
//               <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 tracking-tight">Commercial Infrastructure</h3>
//               <p className="text-[#a8a8a8] leading-[1.8] mb-6 sm:mb-8 text-base sm:text-lg">
//                 Aviation terminals, corporate headquarters, banking institutions, and retail environments engineered for operational clarity and institutional permanence.
//               </p>
//               <div className="text-xs tracking-[0.25em] text-[#707070]">
//                 AVIATION • CORPORATE OFFICE • BANKING • RETAIL
//               </div>
//             </div>

//             <div className="border-l-2 border-[#d4af37]/30 pl-6 sm:pl-8 md:pl-10">
//               <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 tracking-tight">Sacred Environments</h3>
//               <p className="text-[#a8a8a8] leading-[1.8] mb-6 sm:mb-8 text-base sm:text-lg">
//                 Mosque interiors, prayer halls, and ablution facilities that integrate spiritual function with acoustic discipline and material durability.
//               </p>
//               <div className="text-xs tracking-[0.25em] text-[#707070]">
//                 GRAND MOSQUES • COMMUNITY PRAYER HALLS • ABLUTION FACILITIES
//               </div>
//             </div>

//             <div className="border-l-2 border-[#d4af37]/30 pl-6 sm:pl-8 md:pl-10">
//               <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 tracking-tight">Institutional Architecture</h3>
//               <p className="text-[#a8a8a8] leading-[1.8] mb-6 sm:mb-8 text-base sm:text-lg">
//                 Educational campuses, government facilities, and cultural institutions designed for multi-decade service life and evolving operational requirements.
//               </p>
//               <div className="text-xs tracking-[0.25em] text-[#707070]">
//                 UNIVERSITIES • GOVERNMENT • CULTURAL CENTERS • LIBRARIES
//               </div>
//             </div>

//             <div className="border-l-2 border-[#d4af37]/30 pl-6 sm:pl-8 md:pl-10">
//               <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 tracking-tight">Hospitality & Dining</h3>
//               <p className="text-[#a8a8a8] leading-[1.8] mb-6 sm:mb-8 text-base sm:text-lg">
//                 Executive dining rooms, institutional cafeterias, and hospitality environments balancing service efficiency with experiential quality.
//               </p>
//               <div className="text-xs tracking-[0.25em] text-[#707070]">
//                 EXECUTIVE DINING • CAFETERIAS • LOUNGES • VIP HOSPITALITY
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Methodology */}
//       <section className="py-20 sm:py-28 md:py-40">
//         <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20">
//           <div className="mb-20 sm:mb-24 md:mb-32">
//             <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">PROCESS</div>
//             <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight mb-6 sm:mb-8">Execution Framework</h2>
//             <p className="text-[#a8a8a8] text-base sm:text-lg max-w-3xl leading-relaxed">
//               Every project follows a disciplined methodology integrating design, regulatory compliance, stakeholder coordination, and construction oversight.
//             </p>
//           </div>
          
//           <div className="space-y-0">
//             {[
//               { 
//                 number: "01", 
//                 title: "Institutional Analysis & Brief Refinement", 
//                 desc: "Organizational study, stakeholder interviews, operational workflow mapping, spatial programming, and project charter development." 
//               },
//               { 
//                 number: "02", 
//                 title: "Conceptual Design & Authority Coordination", 
//                 desc: "Spatial strategies, material frameworks, preliminary authority submissions, fire life safety planning, and stakeholder alignment workshops." 
//               },
//               { 
//                 number: "03", 
//                 title: "Detailed Design & Technical Integration", 
//                 desc: "Construction documentation, MEP coordination, material specifications, custom millwork design, authority approvals, and tender preparation." 
//               },
//               { 
//                 number: "04", 
//                 title: "Construction Administration & QA/QC", 
//                 desc: "On-site supervision, contractor coordination, material inspections, progress reporting, change order management, and defect resolution." 
//               },
//               { 
//                 number: "05", 
//                 title: "Commissioning & Post-Occupancy Support", 
//                 desc: "Systems testing, staff training, O&M documentation, defects liability management, and long-term maintenance planning." 
//               }
//             ].map((step, index) => (
//               <div 
//                 key={step.number} 
//                 className={`grid md:grid-cols-12 gap-6 sm:gap-8 py-8 sm:py-10 md:py-12 ${index !== 4 ? 'border-b border-[#1a1a1a]' : ''}`}
//               >
//                 <div className="md:col-span-2">
//                   <div className="text-5xl sm:text-6xl md:text-7xl font-serif text-[#d4af37] opacity-20">{step.number}</div>
//                 </div>
//                 <div className="md:col-span-10">
//                   <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-3 sm:mb-4 tracking-tight">{step.title}</h3>
//                   <p className="text-[#a8a8a8] text-base sm:text-lg leading-relaxed">{step.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Philosophy */}
//       <section className="py-20 sm:py-28 md:py-40 bg-[#0a0a0a] border-y border-[#1a1a1a]">
//         <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20">
//           <div className="grid md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-32 items-center">
//             <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] order-2 md:order-1">
//               <Image
//                 src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop"
//                 alt="Architectural discipline and material integrity"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="order-1 md:order-2">
//               <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">DESIGN PHILOSOPHY</div>
//               <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-10 md:mb-12 tracking-tight leading-tight">
//                 Built for<br />Permanence
//               </h2>
//               <div className="space-y-6 sm:space-y-8 text-[#a8a8a8] text-base sm:text-lg leading-[1.8]">
//                 <p>
//                   Institutional architecture demands a different design discipline. Projects are not stylistic exercises—they are built systems that must perform operationally, acoustically, and spatially for decades.
//                 </p>
//                 <p>
//                   Our methodology rejects trend-driven aesthetics in favor of material honesty, spatial coherence, and long-term resilience. Every detail is engineered for maintainability, every finish for durability.
//                 </p>
//                 <p>
//                   We design spaces that communicate organizational identity through architectural restraint, not decorative excess. The goal is not recognition, but institutional permanence.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* High-Friction Consultation Form */}
//       <section id="contact" className="py-20 sm:py-28 md:py-40">
//         <div className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-20">
//           <div className="text-center mb-16 sm:mb-20">
//             <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">PROJECT ENQUIRIES</div>
//             <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 tracking-tight">Request Consultation</h2>
//             <p className="text-[#a8a8a8] text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 px-4">
//               LUMINA undertakes a limited number of commissions annually to ensure execution discipline and design integrity across all active projects.
//             </p>
//             <p className="text-[#888] text-sm sm:text-base">
//               Minimum project value: <span className="text-[#d4af37]">AED 2,500,000</span><br />
//               Consultations by referral or formal request only.
//             </p>
//           </div>

//           <form className="space-y-8 sm:space-y-10">
//             <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
//               <div>
//                 <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
//                   ORGANIZATION NAME *
//                 </label>
//                 <input 
//                   type="text"
//                   required
//                   className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
//                   CONTACT PERSON *
//                 </label>
//                 <input 
//                   type="text"
//                   required
//                   className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
//                 />
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
//               <div>
//                 <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
//                   EMAIL ADDRESS *
//                 </label>
//                 <input 
//                   type="email"
//                   required
//                   className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
//                   TELEPHONE *
//                 </label>
//                 <input 
//                   type="tel"
//                   required
//                   className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
//                 PROJECT TYPOLOGY *
//               </label>
//               <select 
//                 required
//                 className="w-full bg-[#0d0d0d] border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
//               >
//                 <option value="">Select project type</option>
//                 <option>Commercial Infrastructure</option>
//                 <option>Sacred Architecture (Mosque / Prayer Hall)</option>
//                 <option>Institutional (Education / Government / Cultural)</option>
//                 <option>Hospitality & Dining</option>
//                 <option>Mixed-Use / Other</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
//                 ESTIMATED PROJECT BUDGET (AED) *
//               </label>
//               <select 
//                 required
//                 className="w-full bg-[#0d0d0d] border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
//               >
//                 <option value="">Select budget range</option>
//                 <option>AED 2.5M – 5M</option>
//                 <option>AED 5M – 10M</option>
//                 <option>AED 10M – 20M</option>
//                 <option>AED 20M+</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
//                 PROJECT LOCATION & SITE CONTEXT
//               </label>
//               <input 
//                 type="text"
//                 className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
//               />
//             </div>

//             <div>
//               <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
//                 PROJECT BRIEF & SCOPE DESCRIPTION *
//               </label>
//               <textarea 
//                 required
//                 rows={6}
//                 className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors resize-none text-sm sm:text-base"
//               />
//             </div>

//             <div>
//               <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
//                 TARGET COMPLETION TIMELINE
//               </label>
//               <input 
//                 type="text"
//                 placeholder="e.g., Q4 2025"
//                 className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base placeholder:text-[#404040]"
//               />
//             </div>

//             <div className="pt-6 sm:pt-10">
//               <button 
//                 type="submit"
//                 className="w-full sm:w-auto px-12 sm:px-14 md:px-16 py-4 sm:py-5 border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-700 text-xs tracking-[0.3em]"
//               >
//                 SUBMIT ENQUIRY
//               </button>
//             </div>

//             <p className="text-xs text-[#707070] leading-relaxed pt-4 sm:pt-6">
//               All enquiries are reviewed by senior leadership. Response time: 3–5 business days. Submissions below minimum project threshold will not receive a response.
//             </p>
//           </form>
//         </div>
//       </section>

//       {/* Studio Updates Subscription */}
//       <section className="py-20 sm:py-24 md:py-32 bg-[#0a0a0a] border-t border-[#1a1a1a]">
//         <div className="max-w-[800px] mx-auto px-6 sm:px-8 text-center">
//           <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">STUDIO COMMUNICATIONS</div>
//           <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 tracking-tight">Institutional Insights</h3>
//           <p className="text-[#888] mb-10 sm:mb-12 leading-relaxed text-sm sm:text-base">
//             Quarterly updates on completed projects, material research, and institutional design thinking. Delivered selectively.
//           </p>
//           <div className="flex flex-col md:flex-row gap-4 sm:gap-6 justify-center max-w-[600px] mx-auto">
//             <input
//               type="email"
//               placeholder="Email address"
//               className="bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 flex-1 text-center md:text-left focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base placeholder:text-[#404040]"
//             />
//             <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 border border-[#404040] hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-700 text-xs tracking-[0.25em] whitespace-nowrap">
//               SUBSCRIBE
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-[#1a1a1a] py-12 sm:py-16 bg-[#0d0d0d]">
//         <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
//           <div className="grid md:grid-cols-3 gap-10 sm:gap-12 mb-12 sm:mb-16">
//             <div>
//               <div className="text-lg sm:text-xl tracking-[0.4em] font-light mb-4 sm:mb-6">LUMINA</div>
//               <p className="text-[#707070] text-sm leading-relaxed">
//                 Interior architecture and fit-out execution for institutional environments.
//               </p>
//             </div>
//             <div>
//               <div className="text-xs tracking-[0.25em] text-[#888] mb-3 sm:mb-4">CONTACT</div>
//               <div className="space-y-2 text-sm text-[#a8a8a8]">
//                 <div>studio@luminainteriors.ae</div>
//                 <div>+971 4 XXX XXXX</div>
//                 <div>Dubai Design District, UAE</div>
//               </div>
//             </div>
//             <div>
//               <div className="text-xs tracking-[0.25em] text-[#888] mb-3 sm:mb-4">NAVIGATE</div>
//               <div className="space-y-2 text-sm">
//                 <div><Link href="#about" className="text-[#a8a8a8] hover:text-[#d4af37] transition-colors">Studio</Link></div>
//                 <div><Link href="#projects" className="text-[#a8a8a8] hover:text-[#d4af37] transition-colors">Works</Link></div>
//                 <div><Link href="#services" className="text-[#a8a8a8] hover:text-[#d4af37] transition-colors">Specializations</Link></div>
//                 <div><Link href="/portfolio" className="text-[#a8a8a8] hover:text-[#d4af37] transition-colors">Portfolio</Link></div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 pt-10 sm:pt-12 border-t border-[#1a1a1a] text-xs text-[#707070]">
//             <div className="tracking-[0.3em]">© 2024 LUMINA INTERIORS</div>
//             <div className="flex gap-6 sm:gap-8 md:gap-10 tracking-[0.2em]">
//               <Link href="#" className="hover:text-[#d4af37] transition-colors">PRIVACY POLICY</Link>
//               <Link href="#" className="hover:text-[#d4af37] transition-colors">TERMS OF SERVICE</Link>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </main>
//   )
// }
