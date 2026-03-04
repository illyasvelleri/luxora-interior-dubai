





// 'use client';

// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"

// /* ---------- CountUp Hook ---------- */
// function useCountUp(target, duration = 1200) {
//   const [value, setValue] = useState(0)
//   const ref = useRef(null)

//   useEffect(() => {
//     const el = ref.current
//     if (!el) return

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting) return
//         observer.disconnect()

//         let start = 0
//         const step = Math.ceil(target / (duration / 16))

//         const counter = setInterval(() => {
//           start += step
//           if (start >= target) {
//             setValue(target)
//             clearInterval(counter)
//           } else {
//             setValue(start)
//           }
//         }, 16)
//       },
//       { threshold: 0.4 }
//     )

//     observer.observe(el)
//     return () => observer.disconnect()
//   }, [target, duration])

//   return { value, ref }
// }

// /* ---------- About Section ---------- */
// export default function About() {
//   const projects = useCountUp(120)
//   const years = useCountUp(12)

//   return (
//     <section
//       id="about"
//       className="py-20 sm:py-28 md:py-36 border-t border-[#1a1a1a]"
//     >
//       <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-20">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 xl:gap-28 items-start">

//           {/* TEXT */}
//           <div className="md:col-span-7">
//             <div className="mb-10">
//               <div className="text-xs tracking-[0.3em] text-[#888] mb-4">
//                 LUXORA DESIGN & FITOUT
//               </div>
//               <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
//                 Refined Design<br />Executed with Precision
//               </h2>

//             </div>

//             <div className="space-y-6 text-[#a8a8a8] text-base sm:text-lg leading-[1.8] font-light">
//               <p>
//                 Luxora Design & Fitout is a premier interior design and turnkey
//                 fit-out company delivering refined residential, commercial, and
//                 hospitality environments across the United Arab Emirates.
//               </p>

//               <p>
//                 We combine architectural discipline, curated material selection,
//                 and technical coordination to create spaces that balance elegance,
//                 functionality, and long-term performance.
//               </p>

//               <p>
//                 From concept development and 3D visualization to authority approvals
//                 and final handover, our integrated team ensures seamless execution
//                 defined by craftsmanship, precision, and distinction.
//               </p>

//             </div>
//           </div>

//           {/* IMAGE */}
//           <div className="md:col-span-5 flex justify-center md:justify-end">
//             <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-full max-h-[550px] aspect-[3/4] overflow-hidden mt-12 md:mt-0 rounded-lg shadow-lg">
//               <Image
//                 src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
//                 alt="Studio execution and leadership"
//                 fill
//                 className="object-cover"
//                 priority={false}
//               />
//             </div>
//           </div>


//         </div>

//         {/* METRICS */}
//         <div
//           ref={projects.ref}
//           className="mt-14 pt-14 border-t border-[#1a1a1a]"
//         >
//           {/* Single row on PC */}
//           <div className="hidden lg:flex justify-between items-center text-center">
//             <Metric value={`${projects.value}+`} label="INSTITUTIONAL PROJECTS" size="lg" />
//             <Metric value={`${years.value}+`} label="YEARS REGIONAL PRACTICE" size="lg" />
//             <Metric value="100%" label="AUTHORITY COMPLIANCE" size="lg" />
//             <Metric value="UAE" label="LICENSED & INSURED" size="lg" />
//           </div>

//           {/* Stacked for smaller screens */}
//           <div className="grid lg:hidden grid-cols-2 gap-8 sm:gap-10 text-center mt-8">
//             <Metric value={`${projects.value}+`} label="INSTITUTIONAL PROJECTS" />
//             <Metric value={`${years.value}+`} label="YEARS REGIONAL PRACTICE" />
//             <Metric value="100%" label="AUTHORITY COMPLIANCE" />
//             <Metric value="UAE" label="LICENSED & INSURED" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// /* ---------- Metric Component ---------- */
// function Metric({ value, label, size }) {
//   return (
//     <div className={`flex flex-col items-center`}>
//       <div
//         className={`font-serif text-[#d4af37] mb-2 ${size === "lg"
//           ? "text-5xl sm:text-6xl md:text-7xl xl:text-8xl"
//           : "text-3xl sm:text-4xl md:text-5xl"
//           }`}
//       >
//         {value}
//       </div>
//       <div className="text-xs sm:text-sm tracking-wider text-[#888]">{label}</div>
//     </div>
//   )
// }


import Image from "next/image"
import CountUpNumber from "./CountUpNumber"

export default function About() {
  const projects = 30
  const startYear = 2024
  const currentYear = new Date().getFullYear()
  const years = currentYear - startYear

  return (
    <section
      id="about"
      className="py-20 sm:py-28 md:py-36 border-t border-[#1a1a1a]"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 xl:gap-28 items-start">

          {/* TEXT */}
          <div className="md:col-span-7">
            <header className="mb-12 md:mb-16 lg:mb-20">
              <div className="relative pl-8 md:pl-10 lg:pl-12 border-l border-[#1f1f1f]">
                {/* Gold accent vertical line */}
                <div className="absolute -left-[1px] top-0 h-12 md:h-14 lg:h-16 w-[2px] bg-[#d4af37]" />

                {/* Content */}
                <div className="relative">
                  {/* Small uppercase label */}
                  <p className="text-xs md:text-sm tracking-[0.35em] text-[#888888] uppercase mb-5 md:mb-6 lg:mb-8 font-light">
                    LUXORA DESIGN & FITOUT
                  </p>

                  {/* Main headline */}
                  <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] md:leading-[0.92] tracking-[-0.015em] text-[#f5f5f5]">
                    Refined Design
                    <br className="sm:hidden" />
                    Executed with Precision
                  </h2>
                </div>
              </div>
            </header>

            <div className="space-y-6 text-[#a8a8a8] text-base sm:text-lg leading-[1.8] font-light">
              <p>
                Luxora Design & Fitout is a luxury interior architecture and turnkey fit-out company delivering high-end residential, commercial, and hospitality environments across the United Arab Emirates.
              </p>

              <p>
                We integrate architectural expertise, curated material selection, and meticulous technical coordination to craft spaces that embody elegance, functionality, and enduring performance.
              </p>

              <p>
                From concept design and advanced 3D visualization to authority approvals, detailed engineering, and final handover, our fully integrated team ensures seamless execution defined by craftsmanship, precision, and uncompromising quality.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[450px] aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/kitchen-view.jpg"
                alt="Luxury interior fit-out project in UAE"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>

        {/* METRICS */}
        <div className="mt-14 pt-14 border-t border-[#1a1a1a]">
          <div className="hidden lg:flex justify-between items-center text-center">
            <Metric value={<CountUpNumber end={projects} suffix="+" />} label="INSTITUTIONAL PROJECTS" size="lg" />
            <Metric value={<CountUpNumber end={years} suffix="+" />} label="YEARS REGIONAL PRACTICE" size="lg" />
            <Metric value="100%" label="AUTHORITY COMPLIANCE" size="lg" />
            <Metric value="UAE" label="LICENSED & INSURED" size="lg" />
          </div>

          <div className="grid lg:hidden grid-cols-2 gap-8 text-center mt-8">
            <Metric value={<CountUpNumber end={projects} suffix="+" />} label="INSTITUTIONAL PROJECTS" />
            <Metric value={<CountUpNumber end={years} suffix="+" />} label="YEARS REGIONAL PRACTICE" />
            <Metric value="100%" label="AUTHORITY COMPLIANCE" />
            <Metric value="UAE" label="LICENSED & INSURED" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric({ value, label, size }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`font-serif text-[#d4af37] mb-2 ${size === "lg"
          ? "text-5xl sm:text-6xl md:text-7xl xl:text-8xl"
          : "text-3xl sm:text-4xl md:text-5xl"
          }`}
      >
        {value}
      </div>
      <div className="text-xs sm:text-sm tracking-wider text-[#888]">
        {label}
      </div>
    </div>
  )
}
