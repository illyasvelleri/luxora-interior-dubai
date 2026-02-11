// 'use client'

// import Image from "next/image";
// import Link from "next/link";
// import { useParams } from "next/navigation";

// export default function ProjectDetail() {
//   const params = useParams();
//   const projectId = parseInt(params.id);

//   // Project data (in production, this would come from a database or API)
//   const projects = [
//     {
//         id: 1,
//         title: "Dubai International Airport Terminal Expansion",
//         category: "Commercial Aviation Infrastructure",
//         year: "2024",
//         location: "Dubai, United Arab Emirates",
//         area: "48,000 sqm",
//         client: "Dubai Airports Authority",
//         duration: "18 months",
//         image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2400&auto=format&fit=crop",
//         images: [
//           "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2400&auto=format&fit=crop",
//         ],
//         description: "A terminal expansion project integrating passenger flow optimization with architectural monumentality. The interior design prioritizes operational clarity, wayfinding legibility, and spatial sequences that reinforce institutional scale. MEP coordination ensured uninterrupted operations during phased construction.",
//         challenge: "The primary challenge was executing a major interior expansion within an operational airport terminal, requiring precise coordination of construction activities around 24/7 flight operations. The design needed to accommodate future passenger growth while maintaining current service levels and meeting stringent aviation authority requirements.",
//         solution: "We developed a phased delivery strategy that compartmentalized construction zones, allowing continuous passenger flow through adjacent areas. Advanced BIM coordination eliminated conflicts between architectural, MEP, and security systems. A modular ceiling and partition system enabled rapid installation during off-peak hours.",
//         outcome: "The completed expansion increased terminal capacity by 40% while improving passenger satisfaction scores by 23%. Wayfinding clarity reduced average transit times by 15%. The project was delivered on schedule with zero operational disruptions, earning recognition from the Dubai Civil Aviation Authority.",
//         scope: "Interior Architecture, Authority Approvals, MEP Coordination, Wayfinding, Turnkey Fit-Out",
//         services: [
//           "Concept Design & Space Planning",
//           "Authority Approvals & Compliance",
//           "MEP Systems Coordination",
//           "Wayfinding & Signage Strategy",
//           "Material Specification & Procurement",
//           "Construction Administration",
//           "Phased Handover & Commissioning"
//         ],
//         materials: [
//           "Terrazzo flooring with brass inlays",
//           "Acoustic ceiling panels with integrated lighting",
//           "Tempered glass partitions with privacy film",
//           "Custom millwork in walnut veneer",
//           "Brushed stainless steel detailing"
//         ]
//     },
//     {
//         id: 2,
//         title: "Sheikh Mohammed Mosque Prayer Hall & Annex",
//         category: "Sacred Architecture",
//         year: "2023",
//         location: "Abu Dhabi, United Arab Emirates",
//         area: "3,200 sqm",
//         client: "Islamic Affairs Authority",
//         duration: "14 months",
//         image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=2400&auto=format&fit=crop",
//         images: [
//           "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=2400&auto=format&fit=crop",
//         ],
//         description: "An intimate prayer hall designed for 2,400 worshippers, integrating traditional Islamic geometric principles with contemporary material expression. The project balances spiritual reverence with acoustic performance, climate control, and long-term material durability in a high-use institutional context.",
//         challenge: "Creating a sacred space that honors Islamic architectural traditions while incorporating modern building systems and meeting accessibility requirements. The design needed to achieve exceptional acoustic clarity for prayer recitation while managing the environmental demands of Abu Dhabi's climate.",
//         solution: "We employed traditional Islamic geometric patterns reinterpreted through contemporary fabrication methods. A custom acoustic system was integrated invisibly within decorative ceiling coffers. Climate control was achieved through underfloor displacement ventilation that eliminated visible ductwork while maintaining thermal comfort.",
//         outcome: "The completed mosque received the Islamic Architecture Award for Interior Excellence. Acoustic measurements confirmed RT60 values ideal for Quranic recitation. Energy consumption is 35% below comparable facilities through passive design strategies integrated with high-efficiency MEP systems.",
//         scope: "Islamic Geometric Design, Acoustic Engineering, Custom Millwork, Marble & Stone Detailing",
//         services: [
//           "Islamic Architectural Detailing",
//           "Acoustic Engineering & Testing",
//           "Traditional Craft Coordination",
//           "Stone Selection & Procurement",
//           "Custom Lighting Design",
//           "Climate Control Integration",
//           "Long-term Maintenance Planning"
//         ],
//         materials: [
//           "Carrara marble flooring with mosaic inlays",
//           "Hand-carved Islamic geometric screens",
//           "Gold leaf detailing on dome interior",
//           "Custom-woven prayer carpets",
//           "Calligraphy in hand-painted ceramic tiles"
//         ]
//     },
//     {
//         id: 3,
//         title: "Emirates Towers Executive Office Floors",
//         category: "Corporate Interior Architecture",
//         year: "2023",
//         location: "Dubai, United Arab Emirates",
//         area: "12,000 sqm",
//         client: "Private Holding Group",
//         duration: "16 months",
//         image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop",
//         images: [
//           "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop",
//         ],
//         description: "Complete reimagining of four executive floors within an occupied high-rise tower. The design emphasizes material restraint, spatial flexibility, and operational continuity throughout phased construction. Smart building systems integration and acoustic zoning ensure performance beyond aesthetic intent.",
//         challenge: "Executing a comprehensive interior renovation across four floors of an occupied corporate tower without disrupting business operations. The design needed to accommodate diverse work modes while projecting institutional permanence and integrating advanced building management systems.",
//         solution: "We implemented a floor-by-floor phased approach with temporary relocations. A raised access floor system concealed comprehensive power, data, and HVAC distribution while enabling future reconfiguration. Acoustic design included floating floor slabs and full-height demountable partitions for maximum flexibility.",
//         outcome: "The renovation achieved LEED Platinum certification with 45% energy reduction versus baseline. Employee satisfaction scores increased 38% post-occupancy. The flexible infrastructure has accommodated three organizational restructures without additional construction, validating the long-term value approach.",
//         scope: "Phased Occupied Delivery, Smart Systems Integration, Custom Executive Furniture, AV Infrastructure",
//         services: [
//           "Occupied Building Renovation",
//           "Smart Building Systems Integration",
//           "Executive Furniture Design",
//           "Acoustic & Vibration Control",
//           "LEED Certification Management",
//           "Technology Infrastructure Planning",
//           "Post-Occupancy Evaluation"
//         ],
//         materials: [
//           "Engineered stone feature walls",
//           "Acoustic fabric wall panels",
//           "Demountable glass partitions",
//           "Solid oak executive desks",
//           "Leather seating with smart sensors"
//         ]
//     },
//     {
//         id: 4,
//         title: "Dubai Opera House VIP Lounges & Foyers",
//         category: "Cultural & Hospitality",
//         year: "2023",
//         location: "Dubai, United Arab Emirates",
//         area: "5,800 sqm",
//         client: "Dubai Culture & Arts Authority",
//         duration: "12 months",
//         image: "https://images.unsplash.com/photo-1519167758481-83f29da8ace8?q=80&w=2400&auto=format&fit=crop",
//         images: [
//           "https://images.unsplash.com/photo-1519167758481-83f29da8ace8?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1519167758481-83f29da8ace8?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1519167758481-83f29da8ace8?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1519167758481-83f29da8ace8?q=80&w=2400&auto=format&fit=crop",
//         ],
//         description: "Pre-performance lounges, VIP hospitality spaces, and public foyers designed to extend the cultural experience beyond the auditorium. Rich material palettes, controlled lighting sequences, and acoustic isolation create an atmosphere of sophisticated anticipation while managing high-volume patron circulation.",
//         challenge: "Designing hospitality spaces that complement world-class performances while managing complex patron circulation patterns. The spaces needed to transition smoothly between pre-show reception, intermission service, and post-performance gatherings while maintaining acoustic separation from performance halls.",
//         solution: "We created a choreographed sequence of spaces with varying scales and intimacy levels. Acoustic isolation was achieved through structurally isolated wall assemblies and carefully detailed door systems. Dynamic lighting allows staff to subtly signal performance timing through gradual dimming sequences.",
//         outcome: "The spaces have hosted over 200 performances and state functions with consistent praise for ambiance and operational efficiency. Patron dwell times increased 40%, supporting ancillary F&B revenue growth. The design received the Middle East Hospitality Design Award for Cultural Spaces.",
//         scope: "Hospitality Interior Design, Acoustic Isolation, Custom Lighting, High-End Millwork",
//         services: [
//           "Hospitality Space Planning",
//           "Acoustic Isolation Design",
//           "Custom Lighting Programming",
//           "High-End Millwork Detailing",
//           "Art Installation Coordination",
//           "F&B Service Zone Design",
//           "Operational Flow Planning"
//         ],
//         materials: [
//           "Venetian plaster feature walls",
//           "Custom bronze light fixtures",
//           "Hand-tufted wool carpets",
//           "Leather-upholstered banquettes",
//           "Marble bar counters with backlit onyx"
//         ]
//     },
//     {
//         id: 5,
//         title: "University of Dubai Central Campus Building",
//         category: "Institutional Education",
//         year: "2022",
//         location: "Dubai, United Arab Emirates",
//         area: "22,000 sqm",
//         client: "University of Dubai",
//         duration: "20 months",
//         image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2400&auto=format&fit=crop",
//         images: [
//           "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2400&auto=format&fit=crop",
//         ],
//         description: "A multi-story student hub combining dining halls, collaborative study zones, administrative offices, and faculty facilities. The design fosters informal learning through carefully calibrated spatial relationships, acoustic zoning, and material differentiation that supports diverse programmatic requirements across a unified architectural language.",
//         challenge: "Creating a vibrant student center that supports diverse activities from quiet study to social dining while maintaining acoustic separation and operational efficiency. The design needed to accommodate 3,000 daily users with flexible spaces adaptable to evolving pedagogical approaches.",
//         solution: "We organized program elements around a central atrium that provides orientation and natural light penetration. Acoustic zoning separated active social areas from focused study zones through strategic placement and sound-absorbing materials. Modular furniture systems enable rapid reconfiguration for events and examinations.",
//         outcome: "Student utilization rates exceed projections by 60%, with the building becoming the campus social heart. Academic performance studies show 15% improvement in group project outcomes attributed to enhanced collaborative spaces. The building achieved 3 Pearl Estidama rating for sustainability.",
//         scope: "Educational Space Planning, Acoustic Design, Multi-Use Furniture Systems, Authority Coordination",
//         services: [
//           "Educational Programming Analysis",
//           "Multi-Use Space Design",
//           "Acoustic Zoning Strategy",
//           "Furniture Systems Specification",
//           "Food Service Design",
//           "Student Accessibility Planning",
//           "University Authority Coordination"
//         ],
//         materials: [
//           "Polished concrete floors with radiant cooling",
//           "Acoustic wood slat ceilings",
//           "Modular table systems with power/data",
//           "Writable wall surfaces throughout",
//           "Recycled content carpet tiles"
//         ]
//     },
//     {
//         id: 6,
//         title: "Central Bank of UAE Executive Dining Facility",
//         category: "Institutional Hospitality",
//         year: "2022",
//         location: "Abu Dhabi, United Arab Emirates",
//         area: "1,800 sqm",
//         client: "Central Bank of UAE",
//         duration: "10 months",
//         image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2400&auto=format&fit=crop",
//         images: [
//           "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2400&auto=format&fit=crop",
//         ],
//         description: "An exclusive dining environment for senior banking officials and visiting dignitaries. The design projects institutional stability and discretion through material restraint, impeccable detailing, and spatial sequences that balance formality with comfort. Service circulation is separated from guest experience zones.",
//         challenge: "Designing a formal dining facility within a secure government institution that maintains protocol standards while creating a welcoming atmosphere. The space needed to accommodate state-level functions and intimate executive meetings with seamless service delivery and absolute discretion.",
//         solution: "We created distinct service and guest circulation paths with dedicated back-of-house zones. Acoustic privacy was achieved through ceiling treatments and spatial separation. A neutral material palette with subtle luxury detailing projects institutional gravitas without ostentation, appropriate for diplomatic functions.",
//         outcome: "The facility has hosted over 150 ministerial meetings and state functions with consistently positive feedback on ambiance and service flow. Security protocols integrate seamlessly with hospitality operations. The restrained design language has become a reference for other government hospitality projects.",
//         scope: "Executive Dining Design, Custom Furniture, Service Zone Planning, Stone & Wood Detailing",
//         services: [
//           "Protocol Space Planning",
//           "Service Flow Optimization",
//           "Security Integration Design",
//           "Custom Furniture & Millwork",
//           "China & Tableware Specification",
//           "Kitchen Equipment Planning",
//           "Staff Training Coordination"
//         ],
//         materials: [
//           "Book-matched marble feature walls",
//           "Custom walnut dining tables",
//           "Leather dining chairs with discreet controls",
//           "Handwoven silk wall panels",
//           "Polished brass hardware throughout"
//         ]
//     },
//     {
//         id: 7,
//         title: "Al Maktoum International Airport Retail Concourse",
//         category: "Commercial Aviation Retail",
//         year: "2022",
//         location: "Dubai, United Arab Emirates",
//         area: "15,000 sqm",
//         client: "Dubai Airports & Retail Partners",
//         duration: "15 months",
//         image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2400&auto=format&fit=crop",
//         images: [
//           "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2400&auto=format&fit=crop",
//         ],
//         description: "A duty-free retail concourse integrating luxury retail, F&B outlets, and passenger circulation within a cohesive architectural framework. The design balances commercial visibility with wayfinding clarity, ensuring retail performance while maintaining terminal operational efficiency and fire life safety compliance.",
//         challenge: "Creating a high-performance retail environment within an airport terminal that maximizes commercial revenue while maintaining clear passenger circulation and meeting stringent aviation safety codes. The design needed to accommodate diverse retail brands within a unified architectural language.",
//         solution: "We developed a modular storefront system that provides brand flexibility within controlled parameters. Circulation was designed with clear sightlines and integrated wayfinding. A central boulevard concept encourages browsing while maintaining direct gate access. All materials and layouts meet aviation fire safety standards.",
//         outcome: "Retail performance exceeds industry benchmarks with sales per square meter 25% above comparable airport retail. Passenger satisfaction scores for wayfinding clarity improved 30%. The design accommodates seasonal campaigns and temporary activations without architectural modifications, reducing operational costs.",
//         scope: "Retail Planning, Brand Integration, MEP Coordination, Authority Approvals",
//         services: [
//           "Retail Planning & Merchandising Strategy",
//           "Brand Integration Guidelines",
//           "Passenger Flow Simulation",
//           "Aviation Authority Approvals",
//           "MEP Infrastructure Coordination",
//           "Fire Life Safety Engineering",
//           "Retail Tenant Coordination"
//         ],
//         materials: [
//           "Large-format porcelain tile flooring",
//           "Modular storefront system in anodized aluminum",
//           "Backlit translucent ceiling panels",
//           "Digital wayfinding integration",
//           "Durable stone accents at high-touch zones"
//         ]
//     },
//     {
//         id: 8,
//         title: "Ministry of Foreign Affairs Reception Halls",
//         category: "Government Institutional",
//         year: "2021",
//         location: "Abu Dhabi, United Arab Emirates",
//         area: "6,500 sqm",
//         client: "UAE Ministry of Foreign Affairs",
//         duration: "18 months",
//         image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2400&auto=format&fit=crop",
//         images: [
//           "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2400&auto=format&fit=crop",
//         ],
//         description: "Formal reception halls, protocol spaces, and ministerial offices designed for diplomatic functions and state-level meetings. The interior architecture communicates national identity through material selection, spatial proportion, and controlled ceremonial sequences while integrating advanced security and communication systems.",
//         challenge: "Designing formal diplomatic spaces that represent national identity and facilitate state protocol while integrating comprehensive security systems and advanced communications infrastructure. The design needed to project permanence and authority while accommodating evolving security requirements and technology.",
//         solution: "We developed a design language referencing traditional UAE architectural elements reinterpreted through contemporary materials and proportions. Security systems were integrated invisibly within architectural elements. Flexible AV infrastructure supports bilateral and multilateral meetings with seamless technology operation managed from centralized control rooms.",
//         outcome: "The facility has hosted over 100 state visits and ministerial meetings with consistent recognition for its representation of UAE architectural heritage. Security integration achieved classification-level approval while maintaining architectural integrity. The design has influenced subsequent government building standards.",
//         scope: "Protocol Space Design, Security Integration, Ceremonial Sequences, Stone & Metalwork",
//         services: [
//           "Diplomatic Protocol Space Planning",
//           "National Identity Design Expression",
//           "Security Systems Integration",
//           "Advanced AV Infrastructure",
//           "Ceremonial Flow Planning",
//           "Stone & Metal Craft Coordination",
//           "Government Authority Coordination"
//         ],
//         materials: [
//           "Local stone with traditional patterns",
//           "Custom bronze doors with security features",
//           "Hand-knotted carpets with national motifs",
//           "Mashrabiya screens in contemporary materials",
//           "Integrated technology within traditional detailing"
//         ]
//     }
//   ];

//   const project = projects.find(p => p.id === projectId);

//   if (!project) {
//     return (
//       <main className="bg-[#0d0d0d] min-h-screen flex items-center justify-center">
       
//       </main>
//     );
//   }

//   return (
//     <main className="bg-[#0d0d0d] text-[#e8e8e8] min-h-screen">
      
//       {/* Hero Image */}
//       <section className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] mt-20 sm:mt-24">
//         <Image
//           src={project.image}
//           alt={project.title}
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
//       </section>

//       {/* Project Header */}
//       <section className="py-16 sm:py-20 md:py-24 border-b border-[#1a1a1a]">
//         <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20">
//           <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
//             <div className="md:col-span-8">
//               <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">{project.category}</div>
//               <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 tracking-tight leading-[1.05]">
//                 {project.title}
//               </h1>
//               <p className="text-[#a8a8a8] text-base sm:text-lg leading-[1.8]">
//                 {project.description}
//               </p>
//             </div>
//             <div className="md:col-span-4 space-y-6 sm:space-y-8 text-sm">
//               <div>
//                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">CLIENT</div>
//                 <div className="text-[#d0d0d0]">{project.client}</div>
//               </div>
//               <div>
//                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">LOCATION</div>
//                 <div className="text-[#d0d0d0]">{project.location}</div>
//               </div>
//               <div>
//                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">AREA</div>
//                 <div className="text-[#d0d0d0]">{project.area}</div>
//               </div>
//               <div>
//                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">DURATION</div>
//                 <div className="text-[#d0d0d0]">{project.duration}</div>
//               </div>
//               <div>
//                 <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">COMPLETION</div>
//                 <div className="text-[#d4af37]">{project.year}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Challenge, Solution, Outcome */}
//       <section className="py-20 sm:py-28 md:py-32 bg-[#0a0a0a]">
//         <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-20">
//           <div className="space-y-16 sm:space-y-20 md:space-y-24">
//             {/* Challenge */}
//             <div>
//               <div className="text-xs tracking-[0.3em] text-[#888] mb-6">THE CHALLENGE</div>
//               <p className="text-[#a8a8a8] text-base sm:text-lg leading-[1.8] max-w-4xl">
//                 {project.challenge}
//               </p>
//             </div>

//             {/* Solution */}
//             <div>
//               <div className="text-xs tracking-[0.3em] text-[#888] mb-6">OUR SOLUTION</div>
//               <p className="text-[#a8a8a8] text-base sm:text-lg leading-[1.8] max-w-4xl">
//                 {project.solution}
//               </p>
//             </div>

//             {/* Outcome */}
//             <div>
//               <div className="text-xs tracking-[0.3em] text-[#888] mb-6">THE OUTCOME</div>
//               <p className="text-[#a8a8a8] text-base sm:text-lg leading-[1.8] max-w-4xl">
//                 {project.outcome}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Project Images Gallery */}
//       <section className="py-20 sm:py-28 md:py-32">
//         <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
//             {project.images.slice(1).map((img, index) => (
//               <div key={index} className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden group">
//                 <Image
//                   src={img}
//                   alt={`${project.title} - Image ${index + 2}`}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-700"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

      // {/* Services & Materials */}
      // <section className="py-20 sm:py-28 md:py-32 bg-[#0a0a0a] border-y border-[#1a1a1a]">
      //   <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20">
      //     <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
      //       {/* Services */}
      //       <div>
      //         <div className="text-xs tracking-[0.3em] text-[#888] mb-8">SERVICES PROVIDED</div>
      //         <ul className="space-y-4">
      //           {project.services.map((service, index) => (
      //             <li key={index} className="flex items-start gap-4">
      //               <span className="text-[#d4af37] mt-1">—</span>
      //               <span className="text-[#a8a8a8] text-base sm:text-lg">{service}</span>
      //             </li>
      //           ))}
      //         </ul>
      //       </div>

      //       {/* Materials */}
      //       <div>
      //         <div className="text-xs tracking-[0.3em] text-[#888] mb-8">KEY MATERIALS</div>
      //         <ul className="space-y-4">
      //           {project.materials.map((material, index) => (
      //             <li key={index} className="flex items-start gap-4">
      //               <span className="text-[#d4af37] mt-1">—</span>
      //               <span className="text-[#a8a8a8] text-base sm:text-lg">{material}</span>
      //             </li>
      //           ))}
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      // </section>

//       {/* Next Project */}
//       <section className="py-20 sm:py-28 md:py-32">
//         <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20">
//           <div className="text-center mb-12">
//             <div className="text-xs tracking-[0.3em] text-[#888] mb-4">NEXT PROJECT</div>
//             {(() => {
//               const nextProject = projects.find(p => p.id === (projectId === 8 ? 1 : projectId + 1));
//               return nextProject ? (
//                 <Link href={`/portfolio/${nextProject.id}`}>
//                   <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden group mb-8">
//                     <Image
//                       src={nextProject.image}
//                       alt={nextProject.title}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 to-transparent flex items-end justify-center pb-12">
//                       <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center px-6">
//                         {nextProject.title}
//                       </h2>
//                     </div>
//                   </div>
//                 </Link>
//               ) : null;
//             })()}
//           </div>
//           <div className="text-center">
//             <Link
//               href="/portfolio"
//               className="inline-block px-10 sm:px-12 md:px-14 py-4 sm:py-5 border border-[#404040] hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-700 text-xs tracking-[0.3em]"
//             >
//               VIEW ALL PROJECTS
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import connectDB from "@/lib/db";
import Project from "@/models/Project";

/* ---------------------------------- */
/* VIEWPORT (Required in Next 15)     */
/* ---------------------------------- */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
};

/* ---------------------------------- */
/* SEO METADATA                       */
/* ---------------------------------- */
export async function generateMetadata({ params }) {
  await connectDB();

  const { id } = await params; // 🔥 required in Next 15

  const project = await Project.findById(id).lean();

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description || "",
    openGraph: {
      title: project.title,
      description: project.description || "",
      images: project.image?.url ? [project.image.url] : [],
    },
  };
}

/* ---------------------------------- */
/* PAGE                               */
/* ---------------------------------- */
export default async function ProjectDetail({ params }) {
  await connectDB();

  const { id } = await params; // 🔥 required

  const project = await Project.findById(id).lean();

  if (!project) return notFound();

  /* ------------------------------- */
  /* Get NEXT project efficiently    */
  /* Instead of fetching everything  */
  /* ------------------------------- */
  // Proper next project logic
let nextProject = await Project.findOne({
  createdAt: { $lt: project.createdAt },
})
.sort({ createdAt: -1 })
.lean();

if (!nextProject) {
  nextProject = await Project.findOne()
    .sort({ createdAt: -1 })
    .lean();
}


  const heroImage = project.image?.url || null;

  const galleryImages =
    project.gallery?.length > 0
      ? project.gallery.map((img) => img.url).filter(Boolean)
      : [];

  return (
    <main className="bg-[#0d0d0d] text-[#e8e8e8] min-h-screen">

      {/* HERO */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] mt-20 sm:mt-24">
        {heroImage && (
          <Image
            src={heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
      </section>

      {/* HEADER */}
      <section className="py-16 sm:py-20 md:py-24 border-b border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16">

            <div className="md:col-span-8">
              <div className="text-xs tracking-[0.3em] text-[#888] mb-4">
                {project.category}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight leading-[1.05]">
                {project.title}
              </h1>

              <p className="text-[#a8a8a8] text-base sm:text-lg leading-[1.8]">
                {project.description}
              </p>
            </div>

            <div className="md:col-span-4 space-y-6 text-sm">
              <Detail label="CLIENT" value={project.client} />
              <Detail label="LOCATION" value={project.location} />
              <Detail label="AREA" value={project.area} />
              <Detail label="DURATION" value={project.duration} />
              <Detail label="COMPLETION" value={project.year} highlight />
            </div>

          </div>
        </div>
      </section>

      {/* CHALLENGE / SOLUTION / OUTCOME */}
      <section className="py-20 sm:py-28 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-20 space-y-20">
          <SectionBlock title="THE CHALLENGE" text={project.challenge} />
          <SectionBlock title="OUR SOLUTION" text={project.solution} />
          <SectionBlock title="THE OUTCOME" text={project.outcome} />
        </div>
      </section>

      {/* GALLERY */}
      {galleryImages.length > 0 && (
        <section className="py-20 sm:py-28 md:py-32">
          <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="relative h-[60vh] overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt={`${project.title} ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
 {/* Services & Materials */}
      <section className="py-20 sm:py-28 md:py-32 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Services */}
            <div>
              <div className="text-xs tracking-[0.3em] text-[#888] mb-8">SERVICES PROVIDED</div>
              <ul className="space-y-4">
                {project.services.map((service, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-[#d4af37] mt-1">—</span>
                    <span className="text-[#a8a8a8] text-base sm:text-lg">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials */}
            <div>
              <div className="text-xs tracking-[0.3em] text-[#888] mb-8">KEY MATERIALS</div>
              <ul className="space-y-4">
                {project.materials.map((material, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-[#d4af37] mt-1">—</span>
                    <span className="text-[#a8a8a8] text-base sm:text-lg">{material}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* NEXT PROJECT */}
      {nextProject && (
        <section className="py-20 sm:py-28 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20 text-center">

            <div className="text-xs tracking-[0.3em] text-[#888] mb-4">
              NEXT PROJECT
            </div>

            <Link href={`/portfolio/${nextProject._id}`}>
              <div className="relative h-[60vh] overflow-hidden group mb-8">

                {nextProject.image?.url && (
                  <Image
                    src={nextProject.image.url}
                    alt={nextProject.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 to-transparent flex items-end justify-center pb-12">
                  <h2 className="font-serif text-3xl md:text-4xl">
                    {nextProject.title}
                  </h2>
                </div>

              </div>
            </Link>

            <Link
              href="/portfolio"
              className="inline-block px-12 py-5 border border-[#404040] hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-700 text-xs tracking-[0.3em]"
            >
              VIEW ALL PROJECTS
            </Link>

          </div>
        </section>
      )}

    </main>
  );
}

/* ------------------------------ */
/* Reusable Components            */
/* ------------------------------ */

function Detail({ label, value, highlight }) {
  if (!value) return null;

  return (
    <div>
      <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">
        {label}
      </div>
      <div className={highlight ? "text-[#d4af37]" : "text-[#d0d0d0]"}>
        {value}
      </div>
    </div>
  );
}

function SectionBlock({ title, text }) {
  if (!text) return null;

  return (
    <div>
      <div className="text-xs tracking-[0.3em] text-[#888] mb-6">
        {title}
      </div>
      <p className="text-[#a8a8a8] text-base sm:text-lg leading-[1.8]">
        {text}
      </p>
    </div>
  );
}
