// import Link from "next/link"
// import Image from 'next/image'

// export default function Trust() {
//     {/* Trust Indicators */ }
//     return (
//         <section className="py-12 sm:py-16 md:py-20 border-y border-[#1a1a1a]">
//             <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-20">
//                 <div className="flex flex-wrap items-center justify-center sm:justify-around gap-6 sm:gap-8 md:gap-12 opacity-20 grayscale">
//                     <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em]">KHORFUKHAN UNIVERSITY</div>
//                     <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em]">KALBA SPORTS CLUB</div>
//                     <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em]">ARAB MARITIME ACADEMY</div>
//                     <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em]">NAKHEEL</div>
//                     <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em]">DAMAC HILLS</div>
//                 </div>
//             </div>
//         </section>
//     );
// }

export default function Trust() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 border-y border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-20 relative pl-8 md:pl-10 lg:pl-12 border-l border-[#1f1f1f]">
        {/* Golden vertical accent line */}
        <div className="absolute" />

        <div className="relative">
          {/* Title – matched exactly to About section style */}
          <header className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <div className="relative pl-8 md:pl-10 lg:pl-12 border-l border-[#1f1f1f]">
              {/* Gold accent vertical line – same as About */}
              <div className="absolute -left-[1px] top-0 h-12 md:h-14 lg:h-16 w-[2px] bg-[#d4af37]" />

              <div className="relative">
                {/* Small uppercase label – same style */}
                <p className="text-xs md:text-sm tracking-[0.35em] text-[#888888] uppercase mb-5 md:mb-6 lg:mb-8 font-light">
                  OUR ESTEEMED CLIENTS
                </p>

                {/* Main headline – identical sizing & styling to About */}
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] md:leading-[0.92] tracking-[-0.015em] text-[#f5f5f5]">
                  Trusted by Leading 
                  <br className="" />
                  Institutions & Brands
                </h2>
              </div>
            </div>
          </header>

          {/* Clients – kept exactly as you had it */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 opacity-40 hover:opacity-70 transition-opacity duration-500">
            {[
              "KHORFUKHAN UNIVERSITY",
              "KALBA SPORTS CLUB",
              "ARAB MARITIME ACADEMY",
              "NAKHEEL",
              "DAMAC HILLS",
            ].map((client, index) => (
              <div
                key={index}
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.18em] text-center whitespace-nowrap text-[#d0d0d0] hover:text-[#d4af37] transition-colors duration-300"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}