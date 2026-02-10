import Link from "next/link"
import Image from 'next/image'

export default function Subscription() {
    {/* Studio Updates Subscription */ }
    return (
        <section className="py-20 sm:py-24 md:py-32 bg-[#0a0a0a] border-t border-[#1a1a1a]">
            <div className="max-w-[800px] mx-auto px-6 sm:px-8 text-center">
                <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">STUDIO COMMUNICATIONS</div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 tracking-tight">Institutional Insights</h3>
                <p className="text-[#888] mb-10 sm:mb-12 leading-relaxed text-sm sm:text-base">
                    Quarterly updates on completed projects, material research, and institutional design thinking. Delivered selectively.
                </p>
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6 justify-center max-w-[600px] mx-auto">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 flex-1 text-center md:text-left focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base placeholder:text-[#404040]"
                    />
                    <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 border border-[#404040] hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-700 text-xs tracking-[0.25em] whitespace-nowrap">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </section>
    );

}