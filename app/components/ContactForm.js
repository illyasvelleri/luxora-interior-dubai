
import Link from "next/link"
import Image from 'next/image'

export default function ContactForm() {

    {/* High-Friction Consultation Form */ }
    return (
    <section id="contact" className="py-20 sm:py-28 md:py-40">
        <div className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-20">
            <div className="text-center mb-16 sm:mb-20">
                <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">PROJECT ENQUIRIES</div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 tracking-tight">Request for Quotations</h2>
                <p className="text-[#a8a8a8] text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 px-4">
                    Luxora is committed to delivering projects defined by precision, execution discipline, and uncompromising design integrity from concept to completion.
                </p>
            </div>

            <form className="space-y-8 sm:space-y-10">
                <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
                    <div>
                        <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
                            NAME *
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
                        />
                    </div>

                    <div>
                        <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
                            CONTACT NUMBER *
                        </label>
                        <input
                            type="number"
                            required
                            className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-1 gap-8 sm:gap-10">
                    <div>
                        <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
                            EMAIL ADDRESS *
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
                        PROJECT BRIEF & SCOPE DESCRIPTION *
                    </label>
                    <textarea
                        required
                        rows={6}
                        className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors resize-none text-sm sm:text-base"
                    />
                </div>

                <div className="pt-6 sm:pt-10">
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-12 sm:px-14 md:px-16 py-4 sm:py-5 border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-700 text-xs tracking-[0.3em]"
                    >
                        SUBMIT ENQUIRY
                    </button>
                </div>

                <p className="text-xs text-[#707070] leading-relaxed pt-4 sm:pt-6">
                    All enquiries are reviewed by senior leadership. Response time: 3–5 business days. Submissions below minimum project threshold will not receive a response.
                </p>
            </form>
        </div>
    </section>
    );

}