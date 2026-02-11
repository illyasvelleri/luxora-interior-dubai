// import Link from "next/link"
// import Image from 'next/image'

// export default function SelectedWorks() {
//     {/* Selected Works - Monastery Presentation */ }
//     return (
//         <section id="projects" className="py-20 sm:py-28 md:py-40">
//             <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
//                 <div className="mb-20 sm:mb-24 md:mb-32">
//                     <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">PORTFOLIO</div>
//                     <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">Selected Works</h2>
//                 </div>

//                 {/* Project 1 */}
//                 <div className="mb-24 sm:mb-32 md:mb-40 lg:mb-48">
//                     <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] mb-8 sm:mb-10 md:mb-12 overflow-hidden group">
//                         <Image
//                             src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2400&auto=format&fit=crop"
//                             alt="Dubai International Airport Terminal"
//                             fill
//                             className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
//                         />
//                     </div>
//                     <div className="max-w-[1400px] grid md:grid-cols-12 gap-6 sm:gap-8 mt-6 sm:mt-8">
//                         <div className="md:col-span-8">
//                             <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight leading-tight">
//                                 Dubai International Airport<br />Terminal Expansion
//                             </h3>
//                             <p className="text-[#a8a8a8] text-base sm:text-lg leading-relaxed">
//                                 A 48,000 square meter terminal expansion integrating passenger flow optimization with architectural monumentality. The interior prioritizes operational clarity while creating spatial sequences that reinforce institutional scale and traveler orientation.
//                             </p>
//                         </div>
//                         <div className="md:col-span-4 text-sm space-y-4 sm:space-y-6 mt-6 md:mt-0">
//                             <div>
//                                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">TYPOLOGY</div>
//                                 <div className="text-[#d0d0d0]">Commercial Aviation Infrastructure</div>
//                             </div>
//                             <div>
//                                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">LOCATION</div>
//                                 <div className="text-[#d0d0d0]">Dubai, United Arab Emirates</div>
//                             </div>
//                             <div>
//                                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">COMPLETION</div>
//                                 <div className="text-[#d4af37]">2024</div>
//                             </div>
//                             <div>
//                                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">SCOPE</div>
//                                 <div className="text-[#d0d0d0]">Interior Architecture, MEP Coordination, Authority Approvals, Turnkey Fit-Out</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Project 2 */}
//                 <div className="mb-24 sm:mb-32 md:mb-40 lg:mb-48">
//                     <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] mb-8 sm:mb-10 md:mb-12 overflow-hidden group">
//                         <Image
//                             src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=2400&auto=format&fit=crop"
//                             alt="Sheikh Mohammed Mosque Interior"
//                             fill
//                             className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
//                         />
//                     </div>
//                     <div className="max-w-[1400px] grid md:grid-cols-12 gap-6 sm:gap-8 mt-6 sm:mt-8">
//                         <div className="md:col-span-8">
//                             <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight leading-tight">
//                                 Sheikh Mohammed Mosque<br />Prayer Hall & Annex
//                             </h3>
//                             <p className="text-[#a8a8a8] text-base sm:text-lg leading-relaxed">
//                                 An intimate prayer hall designed for 2,400 worshippers, integrating traditional Islamic geometric principles with contemporary material expression. The design balances spiritual reverence with acoustic performance and spatial legibility.
//                             </p>
//                         </div>
//                         <div className="md:col-span-4 text-sm space-y-4 sm:space-y-6 mt-6 md:mt-0">
//                             <div>
//                                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">TYPOLOGY</div>
//                                 <div className="text-[#d0d0d0]">Sacred Architecture</div>
//                             </div>
//                             <div>
//                                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">LOCATION</div>
//                                 <div className="text-[#d0d0d0]">Abu Dhabi, United Arab Emirates</div>
//                             </div>
//                             <div>
//                                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">COMPLETION</div>
//                                 <div className="text-[#d4af37]">2023</div>
//                             </div>
//                             <div>
//                                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">SCOPE</div>
//                                 <div className="text-[#d0d0d0]">Interior Design, Islamic Geometric Detailing, Acoustic Engineering, Custom Millwork</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Project 3 */}
//                 <div className="mb-24 sm:mb-32 md:mb-40 lg:mb-48">
//                     <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] mb-8 sm:mb-10 md:mb-12 overflow-hidden group">
//                         <Image
//                             src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop"
//                             alt="Emirates Towers Executive Floors"
//                             fill
//                             className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
//                         />
//                     </div>
//                     <div className="max-w-[1400px] grid md:grid-cols-12 gap-6 sm:gap-8 mt-6 sm:mt-8">
//                         <div className="md:col-span-8">
//                             <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight leading-tight">
//                                 Emirates Towers<br />Executive Office Floors
//                             </h3>
//                             <p className="text-[#a8a8a8] text-base sm:text-lg leading-relaxed">
//                                 Complete reimagining of four executive floors within an occupied high-rise tower. The design emphasizes material restraint, spatial flexibility, and operational continuity throughout phased construction. Integration of smart building systems and acoustic zoning ensures performance beyond aesthetic intent.
//                             </p>
//                         </div>
//                         <div className="md:col-span-4 text-sm space-y-4 sm:space-y-6 mt-6 md:mt-0">
//                             <div>
//                                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">TYPOLOGY</div>
//                                 <div className="text-[#d0d0d0]">Corporate Interior Architecture</div>
//                             </div>
//                             <div>
//                                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">LOCATION</div>
//                                 <div className="text-[#d0d0d0]">Dubai, United Arab Emirates</div>
//                             </div>
//                             <div>
//                                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">COMPLETION</div>
//                                 <div className="text-[#d4af37]">2023</div>
//                             </div>
//                             <div>
//                                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">SCOPE</div>
//                                 <div className="text-[#d0d0d0]">Occupied Phased Delivery, Smart Systems Integration, Custom Executive Furniture</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="text-center pt-8 sm:pt-12 md:pt-16">
//                     <Link
//                         href="/portfolio"
//                         className="inline-block px-10 sm:px-12 md:px-14 py-4 sm:py-5 border border-[#404040] hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-700 text-xs tracking-[0.3em]"
//                     >
//                         COMPLETE PORTFOLIO
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     );
// }


import Link from "next/link"
import Image from "next/image"
import connectDB from "@/lib/db"
import Project from "@/models/Project"

export default async function SelectedWorks() {
  await connectDB()

  // Fetch latest 3 projects
  const projects = await Project.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean()

  if (!projects || projects.length === 0) return null

  return (
    <section id="projects" className="py-20 sm:py-28 md:py-40">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
        <div className="mb-20 sm:mb-24 md:mb-32">
          <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">
            PORTFOLIO
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
            Selected Works
          </h2>
        </div>

        {projects.map((project) => (
          <div
            key={project._id}
            className="mb-24 sm:mb-32 md:mb-40 lg:mb-48"
          >
            {/* Image */}
            <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] mb-8 sm:mb-10 md:mb-12 overflow-hidden group">
              {project.image?.url && (
                <Image
                  src={project.image.url}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
                />
              )}
            </div>

            {/* Content */}
            <div className="max-w-[1400px] grid md:grid-cols-12 gap-6 sm:gap-8 mt-6 sm:mt-8">
              <div className="md:col-span-8">
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight leading-tight">
                  {project.title}
                </h3>

                {project.description && (
                  <p className="text-[#a8a8a8] text-base sm:text-lg leading-relaxed">
                    {project.description}
                  </p>
                )}
              </div>

              <div className="md:col-span-4 text-sm space-y-4 sm:space-y-6 mt-6 md:mt-0">
                {project.category && (
                  <div>
                    <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">
                      TYPOLOGY
                    </div>
                    <div className="text-[#d0d0d0]">
                      {project.category}
                    </div>
                  </div>
                )}

                {project.location && (
                  <div>
                    <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">
                      LOCATION
                    </div>
                    <div className="text-[#d0d0d0]">
                      {project.location}
                    </div>
                  </div>
                )}

                {project.year && (
                  <div>
                    <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">
                      COMPLETION
                    </div>
                    <div className="text-[#d4af37]">
                      {project.year}
                    </div>
                  </div>
                )}

                {project.scope && (
                  <div>
                    <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">
                      SCOPE
                    </div>
                    <div className="text-[#d0d0d0]">
                      {project.scope}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="text-center pt-8 sm:pt-12 md:pt-16">
          <Link
            href="/portfolio"
            className="inline-block px-10 sm:px-12 md:px-14 py-4 sm:py-5 border border-[#404040] hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-700 text-xs tracking-[0.3em]"
          >
            COMPLETE PORTFOLIO
          </Link>
        </div>
      </div>
    </section>
  )
}
