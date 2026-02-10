// import Link from "next/link"
// import Image from 'next/image'

// export default function Hero() {
//     {/* Hero Section */ }
//     return (
//     <section className="relative min-h-screen h-screen flex items-center justify-center">
//         <div className="absolute inset-0 bg-[#000000]">
//             <Image
//                 src="/hero-01.png"
//                 alt="Institutional architectural interior"
//                 fill
//                 className="object-cover opacity-35"
//                 priority
//             />
//         </div>
//         <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-20 text-center">
//             <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-6 sm:mb-8 md:mb-10 leading-[0.95] tracking-tighter text-[#f5f5f5]">
//                 Architecture<br />for Institutions
//             </h1>
//             <p className="text-sm sm:text-base md:text-lg mb-10 sm:mb-12 md:mb-16 text-[#b8b8b8] max-w-xl mx-auto font-light tracking-wide leading-relaxed px-4">
//                 Interior design and fit-out execution for commercial, sacred, and institutional environments across the United Arab Emirates
//             </p>
//             <Link
//                 href="/contact"
//                 className="inline-block px-8 sm:px-12 md:px-14 py-4 sm:py-5 border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-700 text-xs tracking-[0.3em] font-light"
//             >
//                 REQUEST CONSULTATION
//             </Link>
//         </div>
//     </section>
//     );
// }


import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-01.png"   // ✅ correct path (NO /public)
          alt="Luxury airport interior architecture in Dubai"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Subtle gold-tinted vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-20 text-center">
        <h1 className="font-serif text-[clamp(2.8rem,6vw,6.5rem)] leading-[0.95] tracking-tight text-[#f5f5f5] mb-8">
          Architecture<br />for Institutions
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#b8b8b8] max-w-2xl mx-auto mb-14 leading-relaxed tracking-wide">
          Interior architecture and execution for aviation, institutional,
          sacred, and commercial environments across the United Arab Emirates.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center px-14 py-5 border border-[#d4af37]/60 text-[#d4af37] text-xs tracking-[0.35em] hover:bg-[#d4af37]/10 transition-all duration-700"
        >
          REQUEST CONSULTATION
        </Link>
      </div>
    </section>
  );
}
