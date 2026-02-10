import Link from "next/link"
import Image from 'next/image'

export default function Philosophy() {
    
    {/* Philosophy */ }
    return (
    <section className="py-20 sm:py-28 md:py-40 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20">
            <div className="grid md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-32 items-center">
                <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] order-2 md:order-1">
                    <Image
                        src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop"
                        alt="Architectural discipline and material integrity"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="order-1 md:order-2">
                    <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">DESIGN PHILOSOPHY</div>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-10 md:mb-12 tracking-tight leading-tight">
                        Built for<br />Permanence
                    </h2>
                    <div className="space-y-6 sm:space-y-8 text-[#a8a8a8] text-base sm:text-lg leading-[1.8]">
                        <p>
                            Institutional architecture demands a different design discipline. Projects are not stylistic exercises—they are built systems that must perform operationally, acoustically, and spatially for decades.
                        </p>
                        <p>
                            Our methodology rejects trend-driven aesthetics in favor of material honesty, spatial coherence, and long-term resilience. Every detail is engineered for maintainability, every finish for durability.
                        </p>
                        <p>
                            We design spaces that communicate organizational identity through architectural restraint, not decorative excess. The goal is not recognition, but institutional permanence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}