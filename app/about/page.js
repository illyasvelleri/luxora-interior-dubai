import Link from "next/link";

export const metadata = {
    title: "Luxury Interior Design & Fit-Out Company in UAE | Luxora Design & Fitout",
    description:
        "Luxora Design & Fitout is a Dubai-based luxury interior design and turnkey fit-out company specializing in residential, commercial, retail, and hospitality interiors across the UAE.",
};

export default function ContactPage() {
    return (
        <div>
            {/*HERO / AUTHORITY STATEMENT*/}
            <section className="pt-40 pb-28 bg-[#0b0b0b]">
                <div className="max-w-[1500px] mx-auto px-8 lg:px-20 relative pl-8 md:pl-10 lg:pl-12 border-l border-[#1f1f1f]">
                    {/* Golden vertical accent line */}
                    <div className="absolute -left-[1px] top-0 h-16 md:h-20 lg:h-24 w-[2px] bg-[#d4af37]" />

                    <div className="relative">
                        <div className="text-xs tracking-[0.35em] text-[#888] mb-6">
                            ABOUT LUXORA
                        </div>

                        <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight mb-10">
                            Luxury Interior Design &<br />Turnkey Fit-Out in UAE
                        </h1>

                        <p className="text-[#a8a8a8] text-lg max-w-3xl leading-relaxed">
                            Luxora Design & Fitout is a Dubai-based luxury interior design and
                            turnkey fit-out company delivering refined residential, commercial,
                            retail, and hospitality environments across the UAE. We combine
                            architectural discipline, premium material selection, and structured
                            project execution to transform vision into exceptional built reality.
                        </p>
                    </div>
                </div>
            </section>

            {/*WHO WE ARE*/}
            <section className="py-32 border-t border-[#1a1a1a]">
                <div className="max-w-[1400px] mx-auto px-8 lg:px-20 grid md:grid-cols-12 gap-16">
                    <div className="md:col-span-5">
                        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                            A Premium Interior Design<br />Studio in the UAE
                        </h2>
                    </div>

                    <div className="md:col-span-7 text-[#a8a8a8] text-lg leading-[1.9] space-y-6">
                        <p>
                            Established with a commitment to excellence, Luxora Design & Fitout
                            specializes in high-end interior design and complete fit-out
                            solutions in Dubai and across the United Arab Emirates. Our
                            portfolio includes luxury villas, executive offices, retail
                            boutiques, restaurants, cafés, and bespoke commercial interiors.
                        </p>

                        <p>
                            We are not a volume-driven contractor. Every project is handled
                            with direct senior oversight, ensuring precision in design
                            development, regulatory coordination, and construction delivery.
                            Our approach balances aesthetic sophistication with operational
                            performance and long-term durability.
                        </p>
                    </div>
                </div>
            </section>

            {/*WHAT LUXORA DOES*/}
            <section className="py-32 bg-[#0a0a0a]">
                <div className="max-w-[1400px] mx-auto px-8 lg:px-20">
                    <h2 className="font-serif text-4xl md:text-5xl mb-16">
                        Scope of Services
                    </h2>

                    <div className="grid md:grid-cols-2 gap-16 text-[#a8a8a8] text-lg leading-relaxed">
                        <ul className="space-y-4">
                            <li>• Luxury Residential Interior Design in Dubai</li>
                            <li>• Corporate & Executive Office Fit-Out</li>
                            <li>• Retail & Premium Showroom Interiors</li>
                            <li>• Hospitality, Restaurant & Café Design</li>
                            <li>• Villa Renovations & Bespoke Refurbishments</li>
                        </ul>

                        <ul className="space-y-4">
                            <li>• Turnkey Design & Build Solutions</li>
                            <li>• Authority Approvals & Regulatory Coordination (UAE)</li>
                            <li>• Custom Joinery & Bespoke Furniture Manufacturing</li>
                            <li>• Ceiling, Partition & Architectural Finishes</li>
                            <li>• Project Management & Quality Supervision</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/*WHY CLIENTS CHOOSE LUXORA*/}
            <section className="py-32 border-t border-[#1a1a1a]">
                <div className="max-w-[1400px] mx-auto px-8 lg:px-20">
                    <h2 className="font-serif text-4xl md:text-5xl mb-20">
                        Why Clients Choose Luxora
                    </h2>

                    <div className="grid md:grid-cols-3 gap-16 text-[#a8a8a8]">
                        <div>
                            <h3 className="text-[#d4af37] mb-4 tracking-wide">
                                Design Intelligence
                            </h3>
                            <p>
                                Every project begins with strategic spatial planning,
                                ensuring form, function, lighting, and materiality are
                                aligned to deliver refined yet practical interiors.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#d4af37] mb-4 tracking-wide">
                                Execution Precision
                            </h3>
                            <p>
                                From UAE authority approvals to final detailing,
                                we implement structured coordination, disciplined
                                timelines, and uncompromising quality control.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#d4af37] mb-4 tracking-wide">
                                Long-Term Value
                            </h3>
                            <p>
                                Our interiors are engineered for durability,
                                maintainability, and lasting visual impact —
                                protecting both investment and brand identity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*PROCESS*/}
            <section className="py-32 bg-[#0b0b0b]">
                <div className="max-w-[1400px] mx-auto px-8 lg:px-20">
                    <h2 className="font-serif text-4xl md:text-5xl mb-16">
                        Our Delivery Process
                    </h2>

                    <ol className="space-y-6 text-[#a8a8a8] text-lg leading-relaxed">
                        <li>1. Initial Consultation & Brief Development</li>
                        <li>2. Concept Design</li>
                        <li>3. 3D Visualization & Design Development</li>
                        <li>4. Authority Approvals & Technical Coordination</li>
                        <li>5. Detailed Engineering & Procurement</li>
                        <li>6. Fit-Out Execution</li>
                        <li>7. Quality Assurance & Handover</li>
                        <li>8. Post-Handover Support</li>
                    </ol>
                </div>
            </section>

            {/*FINAL CTA*/}
            <section className="py-40 border-t border-[#1a1a1a] text-center">
                <div className="max-w-[900px] mx-auto px-8">
                    <h2 className="font-serif text-4xl md:text-6xl mb-10">
                        Start Your Interior Project in UAE
                    </h2>

                    <p className="text-[#a8a8a8] text-lg mb-16 leading-relaxed">
                        We welcome enquiries from clients seeking luxury interior
                        design and turnkey fit-out solutions in Dubai and across
                        the UAE — delivered with precision, discipline, and distinction.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block px-16 py-5 border border-[#d4af37]/60 text-[#d4af37] tracking-[0.3em] text-xs hover:bg-[#d4af37]/10 transition-all duration-700"
                    >
                        REQUEST CONSULTATION
                    </Link>
                </div>
            </section>
        </div>
    )
}
