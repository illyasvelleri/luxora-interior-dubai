import Link from "next/link"
import Image from 'next/image'

export default function Methodology() {
    {/* Methodology */ }
    return (
        <section className="py-20 sm:py-28 md:py-40">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20">
                <div className="mb-20 sm:mb-24 md:mb-32">
                    <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">PROCESS</div>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight mb-6 sm:mb-8">Execution Framework</h2>
                    <p className="text-[#a8a8a8] text-base sm:text-lg max-w-3xl leading-relaxed">
                        Every project follows a disciplined methodology integrating design, regulatory compliance, stakeholder coordination, and construction oversight.
                    </p>
                </div>

                <div className="space-y-0">
                    {[
                        {
                            number: "01",
                            title: "Institutional Analysis & Brief Refinement",
                            desc: "Organizational study, stakeholder interviews, operational workflow mapping, spatial programming, and project charter development."
                        },
                        {
                            number: "02",
                            title: "Conceptual Design & Authority Coordination",
                            desc: "Spatial strategies, material frameworks, preliminary authority submissions, fire life safety planning, and stakeholder alignment workshops."
                        },
                        {
                            number: "03",
                            title: "Detailed Design & Technical Integration",
                            desc: "Construction documentation, MEP coordination, material specifications, custom millwork design, authority approvals, and tender preparation."
                        },
                        {
                            number: "04",
                            title: "Construction Administration & QA/QC",
                            desc: "On-site supervision, contractor coordination, material inspections, progress reporting, change order management, and defect resolution."
                        },
                        {
                            number: "05",
                            title: "Commissioning & Post-Occupancy Support",
                            desc: "Systems testing, staff training, O&M documentation, defects liability management, and long-term maintenance planning."
                        }
                    ].map((step, index) => (
                        <div
                            key={step.number}
                            className={`grid md:grid-cols-12 gap-6 sm:gap-8 py-8 sm:py-10 md:py-12 ${index !== 4 ? 'border-b border-[#1a1a1a]' : ''}`}
                        >
                            <div className="md:col-span-2">
                                <div className="text-5xl sm:text-6xl md:text-7xl font-serif text-[#d4af37] opacity-20">{step.number}</div>
                            </div>
                            <div className="md:col-span-10">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-3 sm:mb-4 tracking-tight">{step.title}</h3>
                                <p className="text-[#a8a8a8] text-base sm:text-lg leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}