import Link from "next/link"

export default function ServicesPage() {
  return (
    <section className="bg-[#0a0a0a] text-[#e5e5e5]">

      {/* HERO */}
      <div className="pt-40 pb-32 border-b border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-20">
          <div className="text-xs tracking-[0.35em] text-[#888] mb-6">
            SERVICES
          </div>
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-[0.95] mb-10">
            Institutional Interior<br />Architecture & Fit-Out
          </h1>
          <p className="text-[#a8a8a8] text-lg max-w-3xl leading-relaxed">
            LUXORA provides end-to-end interior architecture, authority-compliant
            design development, and turnkey fit-out delivery for institutional,
            commercial, and sacred environments across the United Arab Emirates.
          </p>
        </div>
      </div>

      {/* CORE SERVICES */}
      <div className="py-32">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-20 space-y-32">

          {/* SERVICE BLOCK */}
          <Service
            title="Interior Architecture & Design Development"
            description="Comprehensive interior architecture services developed to align spatial planning, material strategy, building systems, and regulatory compliance. Our design methodology prioritizes longevity, operational clarity, and institutional identity."
            bullets={[
              "Concept & schematic interior design",
              "Authority-compliant design development",
              "Material strategy & lifecycle durability planning",
              "Acoustic, lighting & spatial performance coordination",
              "Detailed construction documentation"
            ]}
          />

          <Service
            title="Authority Approvals & Regulatory Coordination"
            description="LUXORA manages the full approval lifecycle with aviation authorities, municipalities, civil defense, and institutional stakeholders to ensure uninterrupted project progression."
            bullets={[
              "Dubai Municipality & local authority approvals",
              "Civil Defense & fire-life-safety coordination",
              "Aviation & government authority submissions",
              "MEP, accessibility & code compliance reviews",
              "Stakeholder and consultant coordination"
            ]}
          />

          <Service
            title="Turnkey Interior Fit-Out Execution"
            description="End-to-end fit-out delivery executed through disciplined project management, vetted subcontractors, and strict quality control protocols suited for operational environments."
            bullets={[
              "Phased construction in live environments",
              "MEP installation & systems integration",
              "Custom joinery, stone, and metal works",
              "FF&E procurement & installation",
              "Testing, commissioning & handover"
            ]}
          />

          <Service
            title="Institutional Project Management"
            description="Strategic oversight from project inception through handover, ensuring cost discipline, schedule certainty, and execution accountability across all stakeholders."
            bullets={[
              "Programme & milestone management",
              "Cost planning & procurement strategy",
              "Consultant & contractor coordination",
              "Quality audits & site supervision",
              "Final documentation & asset handover"
            ]}
          />

          {/*newly added*/}

          {/* SERVICE BLOCK */}
          <Service
            title="Interior Design Consultancy"
            description="Refined interior environments shaped through disciplined spatial planning, material intelligence, and contextual sensitivity. Our consultancy model blends aesthetic clarity with technical precision to ensure longevity and architectural coherence."
            bullets={[
              "Bespoke residential & commercial interior design",
              "Concept creation & intelligent space planning",
              "Advanced 3D visualization & immersive presentations",
              "Curated material, lighting & color strategy",
              "Technical detailing & construction documentation"
            ]}
          />

          <Service
            title="Turnkey Design & Build Solutions"
            description="Integrated design-to-delivery model structured for execution certainty. Luxora manages the complete lifecycle — from authority approvals to final commissioning — under one accountable framework."
            bullets={[
              "Complete design & build execution",
              "Authority approvals & regulatory coordination",
              "Dedicated institutional-grade project management",
              "Budget discipline & procurement control",
              "Testing, commissioning & structured handover"
            ]}
          />

          <Service
            title="Residential & Commercial Interior Architecture"
            description="Spatial environments tailored to brand identity, lifestyle narrative, and operational performance. Each project is structured around functional logic and material integrity."
            bullets={[
              "Luxury villas & high-end apartments",
              "Corporate offices & executive workspaces",
              "Retail boutiques & premium showrooms",
              "Restaurants, cafés & healthcare interiors",
              "Renovation & bespoke refurbishments"
            ]}
          />

          <Service
            title="Custom Joinery & Bespoke Furniture"
            description="Precision-engineered joinery and custom furniture crafted to elevate architectural intent. Our fabrication approach integrates craftsmanship with production discipline."
            bullets={[
              "Tailor-made furniture & built-in systems",
              "Designer modular kitchens & wardrobes",
              "Statement reception counters & feature installations",
              "Premium woodwork, veneers & upholstery",
              "Custom architectural millwork packages"
            ]}
          />

          <Service
            title="Ceilings, Partitions & Finishing Works"
            description="Architectural finishing systems executed with detailing precision. Surface articulation, material alignment, and system coordination are handled within controlled site protocols."
            bullets={[
              "Luxury gypsum & designer false ceilings",
              "Glass & aluminum partition systems",
              "High-end wall finishes & textured surfaces",
              "Marble, porcelain, vinyl & timber flooring",
              "Bespoke curtains, blinds & soft furnishings"
            ]}
          />

          <Service
            title="Architectural Cladding & Surface Applications"
            description="Structural enhancement through high-performance cladding solutions designed to elevate both aesthetic presence and functional durability."
            bullets={[
              "Elevator cabin enhancements & refinements",
              "Elevator & escalator cladding systems",
              "Glass & metal architectural cladding",
              "Decorative & custom surface applications",
              "Integrated façade-level detailing"
            ]}
          />

          <Service
            title="Indoor & Outdoor Event Environments"
            description="Temporary and semi-permanent spatial installations engineered for impact, brand immersion, and experiential depth."
            bullets={[
              "Luxury exhibition stands & installations",
              "Corporate event environments",
              "Wedding & stage design concepts",
              "Bespoke themed & outdoor event structures",
              "Modular structural & lighting integration"
            ]}
          />

        </div>
      </div>

      {/* WHY LUXORA */}
      <div className="py-32 bg-[#0e0e0e] border-y border-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-20 text-center">
          <div className="text-xs tracking-[0.3em] text-[#888] mb-6">
            WHY LUXORA
          </div>
          <h2 className="font-serif text-4xl md:text-6xl mb-10 tracking-tight">
            Designed for Institutions.<br />Executed for Permanence.
          </h2>
          <p className="text-[#a8a8a8] text-lg leading-relaxed max-w-3xl mx-auto">
            Our practice is structured around institutional accountability,
            regulatory rigor, and execution certainty. We do not pursue volume.
            We pursue projects where architectural discipline matters.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="py-40 text-center">
        <div className="max-w-[900px] mx-auto px-8">
          <div className="text-xs tracking-[0.3em] text-[#888] mb-6">
            PROJECT ENQUIRIES
          </div>
          <h3 className="font-serif text-4xl md:text-6xl mb-10 tracking-tight">
            Commission LUXORA
          </h3>
          <p className="text-[#a8a8a8] text-lg mb-16 leading-relaxed">
            We accept a limited number of institutional commissions annually.
            Enquiries are reviewed directly by senior leadership.
          </p>
          <Link
            href="/contact"
            className="inline-block px-16 py-5 border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-700 text-xs tracking-[0.35em]"
          >
            REQUEST CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  )
}

/* SERVICE COMPONENT */
function Service({ title, description, bullets }) {
  return (
    <div className="grid md:grid-cols-12 gap-12 items-start">
      <div className="md:col-span-5">
        <h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-6">
          {title}
        </h3>
        <p className="text-[#a8a8a8] text-lg leading-relaxed">
          {description}
        </p>
      </div>
      <div className="md:col-span-7">
        <ul className="space-y-4 border-l border-[#1f1f1f] pl-8">
          {bullets.map((item, i) => (
            <li
              key={i}
              className="text-sm tracking-wide text-[#d0d0d0]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
