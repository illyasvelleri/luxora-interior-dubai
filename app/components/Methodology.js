import Link from "next/link"
import Image from 'next/image'

export default function Methodology() {
    {/* Methodology */ }
    return (
        <section className="py-20 sm:py-28 md:py-40">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20">
                <div className="mb-20 sm:mb-24 md:mb-32 lg:mb-40 relative pl-8 md:pl-10 lg:pl-12 border-l border-[#1f1f1f]">
                    {/* Golden vertical accent line */}
                    <div className="absolute -left-[1px] top-0 h-14 md:h-16 lg:h-20 w-[2px] bg-[#d4af37]" />

                    <div className="relative">
                        {/* Optional small label (uncomment if you want it back) */}
                        {/* <p className="text-xs md:text-sm tracking-[0.35em] text-[#888888] uppercase mb-5 md:mb-6 font-light">
      Execution Framework
    </p> */}

                        {/* Main heading with better responsive sizing & tight tracking */}
                        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.92] tracking-[-0.01em] text-[#f5f5f5] mb-6 sm:mb-8 md:mb-10">
                            OUR PROCESS
                        </h2>

                        {/* Optional description (uncomment if you want to bring it back) */}
                        {/* <p className="text-[#a8a8a8] text-base sm:text-lg md:text-xl max-w-3xl lg:max-w-4xl leading-relaxed">
      Every project follows a disciplined methodology integrating design, regulatory compliance, stakeholder coordination, and construction oversight.
    </p> */}
                    </div>
                </div>

                <div className="space-y-0">
                    {[
                        {
                            number: "01",
                            title: "Initial Consultation & Brief Development",
                            desc: "We begin by understanding the client’s vision, functional requirements, budget parameters, and project objectives. This stage establishes the foundation for a strategically aligned design approach."
                        },
                        {
                            number: "02",
                            title: "Concept Design",
                            desc: "Our team develops space planning, mood boards, material palettes, and conceptual layouts that translate the brief into a refined architectural vision."
                        },
                        {
                            number: "03",
                            title: "3D Visualization & Design Development",
                            desc: "Detailed 3D renderings and technical drawings are prepared to finalize aesthetics, materials, and spatial coordination, ensuring clarity before execution."
                        },
                        {
                            number: "04",
                            title: "Authority Approvals & Technical Coordination",
                            desc: "We manage all required authority submissions and approvals while coordinating MEP, structural, and specialist requirements to ensure compliance and smooth project progression."
                        },
                        {
                            number: "05",
                            title: "Detailed Engineering & Procurement",
                            desc: "Comprehensive shop drawings are produced, materials are finalized, and procurement planning is executed to maintain quality, timeline, and cost control."
                        },
                        {
                            number: "06",
                            title: "Fit-Out Execution",
                            desc: "Our site team oversees construction, installation, and finishing works with strict quality control and safety standards, ensuring precision at every stage."
                        },
                        {
                            number: "07",
                            title: "Quality Assurance & Handover",
                            desc: "Final inspections, snag rectification, and testing are conducted before formal handover, delivering a fully completed and performance-ready environment."
                        },
                        {
                            number: "08",
                            title: "Post-Handover Support",
                            desc: "We remain available for maintenance coordination and ongoing support, ensuring long-term client satisfaction."
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