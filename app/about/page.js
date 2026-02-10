"use client";
import Link from "next/link";
export default function ContactPage() {
    return (
        <div>
            {/*HERO / AUTHORITY STATEMENT*/}
            <section className="pt-40 pb-28 bg-[#0b0b0b]">
                <div className="max-w-[1500px] mx-auto px-8 lg:px-20">
                    <div className="text-xs tracking-[0.35em] text-[#888] mb-6">
                        ABOUT LUXORA
                    </div>

                    <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight mb-10">
                        Institutional Architecture<br />Executed with Precision
                    </h1>

                    <p className="text-[#a8a8a8] text-lg max-w-3xl leading-relaxed">
                        LUXORA is a UAE-based interior architecture and fit-out consultancy
                        specializing in high-complexity institutional, commercial, and sacred
                        environments. Our work operates at the intersection of architectural
                        rigor, operational performance, and long-term asset value.
                    </p>
                </div>
            </section>

            {/*WHO WE ARE*/}
            <section className="py-32 border-t border-[#1a1a1a]">
                <div className="max-w-[1400px] mx-auto px-8 lg:px-20 grid md:grid-cols-12 gap-16">
                    <div className="md:col-span-5">
                        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                            A Practice Built<br />for Institutions
                        </h2>
                    </div>

                    <div className="md:col-span-7 text-[#a8a8a8] text-lg leading-[1.9] space-y-6">
                        <p>
                            LUXORA was established to serve organizations that require more than
                            aesthetic interiors. Our clients operate airports, government
                            facilities, religious institutions, educational campuses, and
                            large-scale commercial environments where performance, compliance, and
                            durability are critical.
                        </p>

                        <p>
                            We do not operate as a volume-driven studio. Each commission is
                            undertaken with direct senior oversight, ensuring design intent is
                            preserved from concept through execution.
                        </p>
                    </div>
                </div>
            </section>
            {/*WHAT LUXORA DOES (SEO GOLD)*/}

            <section className="py-32 bg-[#0a0a0a]">
                <div className="max-w-[1400px] mx-auto px-8 lg:px-20">
                    <h2 className="font-serif text-4xl md:text-5xl mb-16">
                        Scope of Services
                    </h2>

                    <div className="grid md:grid-cols-2 gap-16 text-[#a8a8a8] text-lg leading-relaxed">
                        <ul className="space-y-4">
                            <li>• Institutional Interior Architecture</li>
                            <li>• Airport & Aviation Facility Interiors</li>
                            <li>• Government & Civic Buildings</li>
                            <li>• Sacred Architecture & Religious Facilities</li>
                            <li>• Educational & Campus Environments</li>
                        </ul>

                        <ul className="space-y-4">
                            <li>• Authority Approvals & Compliance</li>
                            <li>• MEP & Systems Coordination</li>
                            <li>• Wayfinding & Passenger Flow Strategy</li>
                            <li>• Phased & Occupied Site Delivery</li>
                            <li>• Turnkey Interior Fit-Out</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/*WHY INSTITUTIONS CHOOSE LUXORA*/}
            <section className="py-32 border-t border-[#1a1a1a]">
                <div className="max-w-[1400px] mx-auto px-8 lg:px-20">
                    <h2 className="font-serif text-4xl md:text-5xl mb-20">
                        Why Institutions Choose LUXORA
                    </h2>

                    <div className="grid md:grid-cols-3 gap-16 text-[#a8a8a8]">
                        <div>
                            <h3 className="text-[#d4af37] mb-4 tracking-wide">
                                Operational Intelligence
                            </h3>
                            <p>
                                Our designs are informed by real-world operational constraints,
                                security protocols, passenger flows, and maintenance realities.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#d4af37] mb-4 tracking-wide">
                                Authority-Led Experience
                            </h3>
                            <p>
                                We navigate UAE authority requirements efficiently, reducing approval
                                risk and delivery delays.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#d4af37] mb-4 tracking-wide">
                                Senior Accountability
                            </h3>
                            <p>
                                Every project receives direct leadership involvement — not delegated
                                production teams.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*PROCESS (CRITICAL FOR TRUST)*/}
            <section className="py-32 bg-[#0b0b0b]">
                <div className="max-w-[1400px] mx-auto px-8 lg:px-20">
                    <h2 className="font-serif text-4xl md:text-5xl mb-16">
                        Our Delivery Process
                    </h2>

                    <ol className="space-y-6 text-[#a8a8a8] text-lg leading-relaxed">
                        <li>1. Strategic Briefing & Feasibility Analysis</li>
                        <li>2. Concept Architecture & Spatial Planning</li>
                        <li>3. Authority Coordination & Technical Design</li>
                        <li>4. Detailed Fit-Out Documentation</li>
                        <li>5. Execution Oversight & Quality Control</li>
                    </ol>
                </div>
            </section>

            {/*FINAL CTA (DO NOT SKIP)*/}
            <section className="py-40 border-t border-[#1a1a1a] text-center">
                <div className="max-w-[900px] mx-auto px-8">
                    <h2 className="font-serif text-4xl md:text-6xl mb-10">
                        Engage LUXORA
                    </h2>

                    <p className="text-[#a8a8a8] text-lg mb-16 leading-relaxed">
                        We invite enquiries from institutions and organizations seeking permanent,
                        performance-driven architectural solutions across the United Arab Emirates.
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
