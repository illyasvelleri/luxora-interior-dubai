import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "Dubai International Airport Terminal Expansion",
            category: "Commercial Aviation Infrastructure",
            year: "2024",
            location: "Dubai, United Arab Emirates",
            area: "48,000 sqm",
            image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2400&auto=format&fit=crop",
            description: "A terminal expansion project integrating passenger flow optimization with architectural monumentality. The interior design prioritizes operational clarity, wayfinding legibility, and spatial sequences that reinforce institutional scale. MEP coordination ensured uninterrupted operations during phased construction.",
            scope: "Interior Architecture, Authority Approvals, MEP Coordination, Wayfinding, Turnkey Fit-Out"
        },
        {
            id: 2,
            title: "Sheikh Mohammed Mosque Prayer Hall & Annex",
            category: "Sacred Architecture",
            year: "2023",
            location: "Abu Dhabi, United Arab Emirates",
            area: "3,200 sqm",
            image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=2400&auto=format&fit=crop",
            description: "An intimate prayer hall designed for 2,400 worshippers, integrating traditional Islamic geometric principles with contemporary material expression. The project balances spiritual function with acoustic performance, climate control, and long-term material durability in a high-use institutional context.",
            scope: "Islamic Geometric Design, Acoustic Engineering, Custom Millwork, Marble & Stone Detailing"
        },
        {
            id: 3,
            title: "Emirates Towers Executive Office Floors",
            category: "Corporate Interior Architecture",
            year: "2023",
            location: "Dubai, United Arab Emirates",
            area: "12,000 sqm",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop",
            description: "Complete reimagining of four executive floors within an occupied high-rise tower. The design emphasizes material restraint, spatial flexibility, and operational continuity throughout phased construction. Smart building systems integration and acoustic zoning ensure performance beyond aesthetic intent.",
            scope: "Phased Occupied Delivery, Smart Systems Integration, Custom Executive Furniture, AV Infrastructure"
        },
        {
            id: 4,
            title: "Dubai Opera House VIP Lounges & Foyers",
            category: "Cultural & Hospitality",
            year: "2023",
            location: "Dubai, United Arab Emirates",
            area: "5,800 sqm",
            image: "https://images.unsplash.com/photo-1519167758481-83f29da8ace8?q=80&w=2400&auto=format&fit=crop",
            description: "Pre-performance lounges, VIP hospitality spaces, and public foyers designed to extend the cultural experience beyond the auditorium. Rich material palettes, controlled lighting sequences, and acoustic isolation create an atmosphere of sophisticated anticipation while managing high-volume patron circulation.",
            scope: "Hospitality Interior Design, Acoustic Isolation, Custom Lighting, High-End Millwork"
        },
        {
            id: 5,
            title: "University of Dubai Central Campus Building",
            category: "Institutional Education",
            year: "2022",
            location: "Dubai, United Arab Emirates",
            area: "22,000 sqm",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2400&auto=format&fit=crop",
            description: "A multi-story student hub combining dining halls, collaborative study zones, administrative offices, and faculty facilities. The design fosters informal learning through carefully calibrated spatial relationships, acoustic zoning, and material differentiation that supports diverse programmatic requirements across a unified architectural language.",
            scope: "Educational Space Planning, Acoustic Design, Multi-Use Furniture Systems, Authority Coordination"
        },
        {
            id: 6,
            title: "Central Bank of UAE Executive Dining Facility",
            category: "Institutional Hospitality",
            year: "2022",
            location: "Abu Dhabi, United Arab Emirates",
            area: "1,800 sqm",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2400&auto=format&fit=crop",
            description: "An exclusive dining environment for senior banking officials and visiting dignitaries. The design projects institutional stability and discretion through material restraint, impeccable detailing, and spatial sequences that balance formality with comfort. Service circulation is separated from guest experience zones.",
            scope: "Executive Dining Design, Custom Furniture, Service Zone Planning, Stone & Wood Detailing"
        },
        {
            id: 7,
            title: "Al Maktoum International Airport Retail Concourse",
            category: "Commercial Aviation Retail",
            year: "2022",
            location: "Dubai, United Arab Emirates",
            area: "15,000 sqm",
            image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2400&auto=format&fit=crop",
            description: "A duty-free retail concourse integrating luxury retail, F&B outlets, and passenger circulation within a cohesive architectural framework. The design balances commercial visibility with wayfinding clarity, ensuring retail performance while maintaining terminal operational efficiency and fire life safety compliance.",
            scope: "Retail Planning, Brand Integration, MEP Coordination, Authority Approvals"
        },
        {
            id: 8,
            title: "Ministry of Foreign Affairs Reception Halls",
            category: "Government Institutional",
            year: "2021",
            location: "Abu Dhabi, United Arab Emirates",
            area: "6,500 sqm",
            image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2400&auto=format&fit=crop",
            description: "Formal reception halls, protocol spaces, and ministerial offices designed for diplomatic functions and state-level meetings. The interior architecture communicates national identity through material selection, spatial proportion, and controlled ceremonial sequences while integrating advanced security and communication systems.",
            scope: "Protocol Space Design, Security Integration, Ceremonial Sequences, Stone & Metalwork"
        }
    ];

    return (

        <div>


            <section className="pt-40 pb-32">
                <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
                    <div className="text-xs tracking-[0.3em] text-[#888] mb-6">PORTFOLIO</div>
                    <h1 className="font-serif text-6xl md:text-8xl mb-12 tracking-tight leading-[0.95]">Complete Works</h1>
                    <p className="text-[#a8a8a8] text-lg max-w-2xl leading-relaxed">
                        A curated selection of institutional, commercial, and sacred architecture projects delivered across the United Arab Emirates over fifteen years of regional practice.
                    </p>
                </div>
            </section>


            <div className="pb-40">
                {projects.map((project, index) => (
                    <section key={project.id} className={`${index > 0 ? 'mt-56' : ''}`}>
                        <div className="max-w-[1800px] mx-auto px-8 lg:px-20">

                            <div className="relative h-[80vh] mb-16 group overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-[1.01] transition-transform duration-1500 ease-out"
                                />
                            </div>


                            <div className="max-w-[1600px] mx-auto">
                                <div className="grid md:grid-cols-12 gap-12 mb-16">
                                    <div className="md:col-span-8">
                                        <h2 className="font-serif text-4xl md:text-6xl mb-8 tracking-tight leading-[1.1]">
                                            {project.title}
                                        </h2>
                                        <p className="text-[#a8a8a8] text-lg leading-[1.8] mb-8">
                                            {project.description}
                                        </p>
                                        <div className="pt-6 border-t border-[#1a1a1a]">
                                            <div className="text-xs tracking-[0.25em] text-[#707070] mb-2">PROJECT SCOPE</div>
                                            <div className="text-[#a8a8a8] text-sm">{project.scope}</div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-4 space-y-8 text-sm">
                                        <div>
                                            <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">TYPOLOGY</div>
                                            <div className="text-[#d0d0d0]">{project.category}</div>
                                        </div>
                                        <div>
                                            <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">LOCATION</div>
                                            <div className="text-[#d0d0d0]">{project.location}</div>
                                        </div>
                                        <div>
                                            <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">AREA</div>
                                            <div className="text-[#d0d0d0]">{project.area}</div>
                                        </div>
                                        <div>
                                            <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">COMPLETION</div>
                                            <div className="text-[#d4af37]">{project.year}</div>
                                        </div>
                                    </div>
                                </div>


                                {index < projects.length - 1 && (
                                    <div className="border-b border-[#1a1a1a] mt-24"></div>
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            <section className="py-40 bg-[#0a0a0a] border-y border-[#1a1a1a]">
                <div className="max-w-[1000px] mx-auto px-8 lg:px-20 text-center">
                    <div className="text-xs tracking-[0.3em] text-[#888] mb-6">PROJECT ENQUIRIES</div>
                    <h2 className="font-serif text-4xl md:text-6xl mb-10 tracking-tight">Commission LUXORA</h2>
                    <p className="text-[#a8a8a8] text-lg mb-16 leading-relaxed max-w-2xl mx-auto">
                        Every institutional project represents a unique partnership between design discipline and organizational vision. We invite enquiries from organizations seeking permanent architectural solutions.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-block px-14 py-5 border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-700 text-xs tracking-[0.3em]"
                    >
                        REQUEST CONSULTATION
                    </Link>
                </div>
            </section>
        </div>
    )
}