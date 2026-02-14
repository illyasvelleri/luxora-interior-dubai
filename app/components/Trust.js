import Link from "next/link"
import Image from 'next/image'

export default function Trust() {
    {/* Trust Indicators */ }
    return (
        <section className="py-12 sm:py-16 md:py-20 border-y border-[#1a1a1a]">
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-20">
                <div className="flex flex-wrap items-center justify-center sm:justify-around gap-6 sm:gap-8 md:gap-12 opacity-20 grayscale">
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em]">KHORFUKHAN UNIVERSITY</div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em]">KALBA SPORTS CLUB</div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em]">ARAB MARITIME ACADEMY</div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em]">NAKHEEL</div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em]">DAMAC HILLS</div>
                </div>
            </div>
        </section>
    );
}