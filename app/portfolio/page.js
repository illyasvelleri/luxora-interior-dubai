// import Image from "next/image";
// import Link from "next/link";

// export default function Portfolio() {
//   const projects = [
//     {
//         id: 1,
//         title: "Dubai International Airport Terminal Expansion",
//         category: "Commercial Aviation Infrastructure",
//         year: "2024",
//         location: "Dubai, United Arab Emirates",
//         area: "48,000 sqm",
//         image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2400&auto=format&fit=crop",
//         description: "A terminal expansion project integrating passenger flow optimization with architectural monumentality. The interior design prioritizes operational clarity, wayfinding legibility, and spatial sequences that reinforce institutional scale. MEP coordination ensured uninterrupted operations during phased construction.",
//         scope: "Interior Architecture, Authority Approvals, MEP Coordination, Wayfinding, Turnkey Fit-Out",
//         heightClass: "row-span-2"
//     },
//     {
//         id: 2,
//         title: "Sheikh Mohammed Mosque Prayer Hall & Annex",
//         category: "Sacred Architecture",
//         year: "2023",
//         location: "Abu Dhabi, United Arab Emirates",
//         area: "3,200 sqm",
//         image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=2400&auto=format&fit=crop",
//         description: "An intimate prayer hall designed for 2,400 worshippers, integrating traditional Islamic geometric principles with contemporary material expression. The project balances spiritual function with acoustic performance, climate control, and long-term material durability in a high-use institutional context.",
//         scope: "Islamic Geometric Design, Acoustic Engineering, Custom Millwork, Marble & Stone Detailing",
//         heightClass: "row-span-1"
//     },
//     {
//         id: 3,
//         title: "Emirates Towers Executive Office Floors",
//         category: "Corporate Interior Architecture",
//         year: "2023",
//         location: "Dubai, United Arab Emirates",
//         area: "12,000 sqm",
//         image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop",
//         description: "Complete reimagining of four executive floors within an occupied high-rise tower. The design emphasizes material restraint, spatial flexibility, and operational continuity throughout phased construction. Smart building systems integration and acoustic zoning ensure performance beyond aesthetic intent.",
//         scope: "Phased Occupied Delivery, Smart Systems Integration, Custom Executive Furniture, AV Infrastructure",
//         heightClass: "row-span-3"
//     },
//     {
//         id: 4,
//         title: "Dubai Opera House VIP Lounges & Foyers",
//         category: "Cultural & Hospitality",
//         year: "2023",
//         location: "Dubai, United Arab Emirates",
//         area: "5,800 sqm",
//         image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop",
//         description: "Pre-performance lounges, VIP hospitality spaces, and public foyers designed to extend the cultural experience beyond the auditorium. Rich material palettes, controlled lighting sequences, and acoustic isolation create an atmosphere of sophisticated anticipation while managing high-volume patron circulation.",
//         scope: "Hospitality Interior Design, Acoustic Isolation, Custom Lighting, High-End Millwork",
//         heightClass: "row-span-2"
//     },
//     {
//         id: 5,
//         title: "University of Dubai Central Campus Building",
//         category: "Institutional Education",
//         year: "2022",
//         location: "Dubai, United Arab Emirates",
//         area: "22,000 sqm",
//         image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2400&auto=format&fit=crop",
//         description: "A multi-story student hub combining dining halls, collaborative study zones, administrative offices, and faculty facilities. The design fosters informal learning through carefully calibrated spatial relationships, acoustic zoning, and material differentiation that supports diverse programmatic requirements across a unified architectural language.",
//         scope: "Educational Space Planning, Acoustic Design, Multi-Use Furniture Systems, Authority Coordination",
//         heightClass: "row-span-1"
//     },
//     {
//         id: 6,
//         title: "Central Bank of UAE Executive Dining Facility",
//         category: "Institutional Hospitality",
//         year: "2022",
//         location: "Abu Dhabi, United Arab Emirates",
//         area: "1,800 sqm",
//         image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2400&auto=format&fit=crop",
//         description: "An exclusive dining environment for senior banking officials and visiting dignitaries. The design projects institutional stability and discretion through material restraint, impeccable detailing, and spatial sequences that balance formality with comfort. Service circulation is separated from guest experience zones.",
//         scope: "Executive Dining Design, Custom Furniture, Service Zone Planning, Stone & Wood Detailing",
//         heightClass: "row-span-2"
//     },
//     {
//         id: 7,
//         title: "Al Maktoum International Airport Retail Concourse",
//         category: "Commercial Aviation Retail",
//         year: "2022",
//         location: "Dubai, United Arab Emirates",
//         area: "15,000 sqm",
//         image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2400&auto=format&fit=crop",
//         description: "A duty-free retail concourse integrating luxury retail, F&B outlets, and passenger circulation within a cohesive architectural framework. The design balances commercial visibility with wayfinding clarity, ensuring retail performance while maintaining terminal operational efficiency and fire life safety compliance.",
//         scope: "Retail Planning, Brand Integration, MEP Coordination, Authority Approvals",
//         heightClass: "row-span-1"
//     },
//     {
//         id: 8,
//         title: "Ministry of Foreign Affairs Reception Halls",
//         category: "Government Institutional",
//         year: "2021",
//         location: "Abu Dhabi, United Arab Emirates",
//         area: "6,500 sqm",
//         image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2400&auto=format&fit=crop",
//         description: "Formal reception halls, protocol spaces, and ministerial offices designed for diplomatic functions and state-level meetings. The interior architecture communicates national identity through material selection, spatial proportion, and controlled ceremonial sequences while integrating advanced security and communication systems.",
//         scope: "Protocol Space Design, Security Integration, Ceremonial Sequences, Stone & Metalwork",
//         heightClass: "row-span-3"
//     }
// ];

//   return (
//     <main className="bg-[#0d0d0d] text-[#e8e8e8] min-h-screen">
//       {/* Portfolio Header */}
//       <section className="pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24">
//         <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
//           <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">PORTFOLIO</div>
//           <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 sm:mb-10 md:mb-12 tracking-tight leading-[0.95]">Complete Works</h1>
//           <p className="text-[#a8a8a8] text-base sm:text-lg max-w-2xl leading-relaxed">
//             A curated selection of institutional, commercial, and sacred architecture projects delivered across the United Arab Emirates over fifteen years of regional practice.
//           </p>
//         </div>
//       </section>

//       {/* Masonry Grid Portfolio */}
//       <section className="pb-20 sm:pb-28 md:pb-40">
//         <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
//           {/* CSS Grid Masonry Layout */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-3 sm:gap-4 md:gap-6">
//             {projects.map((project) => (
//               <Link
//                 key={project.id}
//                 href={`/portfolio/${project.id}`}
//                 className={`relative group overflow-hidden ${project.heightClass}`}
//               >
//                 {/* Image */}
//                 <div className="absolute inset-0 bg-[#0a0a0a]">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
//                   />
//                 </div>

//                 {/* Overlay - Always visible on mobile, hover on desktop */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/40 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />

//                 {/* Content */}
//                 <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">
//                   <div className="text-xs tracking-[0.2em] text-[#d4af37] mb-2 sm:mb-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 delay-75">
//                     {project.category}
//                   </div>
//                   <h3 className="font-serif text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 tracking-tight leading-tight opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 delay-100">
//                     {project.title}
//                   </h3>
//                   <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#a8a8a8] opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 delay-150">
//                     <span>{project.location.split(',')[0]}</span>
//                     <span>•</span>
//                     <span>{project.year}</span>
//                     <span>•</span>
//                     <span>{project.area}</span>
//                   </div>
//                 </div>

//                 {/* Subtle border on hover */}
//                 <div className="absolute inset-0 border border-[#d4af37]/0 group-hover:border-[#d4af37]/30 transition-colors duration-500 pointer-events-none" />
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

// {/* CTA Section */}
// <section className="py-28 sm:py-32 md:py-40 bg-[#0a0a0a] border-y border-[#1a1a1a]">
//   <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-20 text-center">
//     <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">PROJECT ENQUIRIES</div>
//     <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-10 tracking-tight">Commission LUMINA</h2>
//     <p className="text-[#a8a8a8] text-base sm:text-lg mb-12 sm:mb-16 leading-relaxed max-w-2xl mx-auto px-4">
//       Every institutional project represents a unique partnership between design discipline and organizational vision. We invite enquiries from organizations seeking permanent architectural solutions.
//     </p>
//     <Link
//       href="/contact"
//       className="inline-block px-10 sm:px-12 md:px-14 py-4 sm:py-5 border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-700 text-xs tracking-[0.3em]"
//     >
//       REQUEST CONSULTATION
//     </Link>
//   </div>
// </section>
//     </main>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import connectDB from "@/lib/db";
import Project from "@/models/Project";

export default async function Portfolio() {
  await connectDB();

  const projects = await Project.find({})
    .sort({ createdAt: -1 })
    .lean();

  return (
    <main className="bg-[#0d0d0d] text-[#e8e8e8] min-h-screen">

      {/* Portfolio Header */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">
            PORTFOLIO
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 sm:mb-10 md:mb-12 tracking-tight leading-[0.95]">
            Complete Works
          </h1>

          <p className="text-[#a8a8a8] text-base sm:text-lg max-w-2xl leading-relaxed">
            A curated selection of institutional, commercial, and sacred architecture projects delivered across the United Arab Emirates.
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="pb-20 sm:pb-28 md:pb-40">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-3 sm:gap-4 md:gap-6">

            {projects.map((project) => {

              // ✅ SAFE IMAGE RESOLVER (handles old + new schema)
              const imageUrl =
                typeof project.image === "string"
                  ? project.image
                  : project.image?.url ||
                  project.image?.secure_url ||
                  null;


              return (
                <Link
                  key={project._id}
                  href={`/portfolio/${project._id}`}
                  className={`relative group overflow-hidden ${project.heightClass || "row-span-1"}`}
                >

                  {/* Image */}
                  <div className="absolute inset-0">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={project.title || "Project Image"}
                        fill
                        sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
                        className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
                      />
                    ) : (
                      <div className="w-full h-full bg-neutral-800" />
                    )}
                  </div>


                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/40 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">

                    <div className="text-xs tracking-[0.2em] text-[#d4af37] mb-2 sm:mb-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 delay-75">
                      {project.category}
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 tracking-tight leading-tight opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#a8a8a8] opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      <span>{project.location?.split(",")[0]}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.area}</span>
                    </div>

                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 border border-[#d4af37]/0 group-hover:border-[#d4af37]/30 transition-colors duration-500 pointer-events-none" />

                </Link>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 sm:py-32 md:py-40 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-20 text-center">
          <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">PROJECT ENQUIRIES</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-10 tracking-tight">Commission LUMINA</h2>
          <p className="text-[#a8a8a8] text-base sm:text-lg mb-12 sm:mb-16 leading-relaxed max-w-2xl mx-auto px-4">
            Every institutional project represents a unique partnership between design discipline and organizational vision. We invite enquiries from organizations seeking permanent architectural solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 sm:px-12 md:px-14 py-4 sm:py-5 border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-700 text-xs tracking-[0.3em]"
          >
            REQUEST CONSULTATION
          </Link>
        </div>
      </section>
    </main>
  );
}
