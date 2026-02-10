
import Link from "next/link"
import Image from 'next/image'

export default function ContactForm() {

    {/* High-Friction Consultation Form */ }
    return (
    <section id="contact" className="py-20 sm:py-28 md:py-40">
        <div className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-20">
            <div className="text-center mb-16 sm:mb-20">
                <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">PROJECT ENQUIRIES</div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 tracking-tight">Request Consultation</h2>
                <p className="text-[#a8a8a8] text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 px-4">
                    LUXORA undertakes a limited number of commissions annually to ensure execution discipline and design integrity across all active projects.
                </p>
                <p className="text-[#888] text-sm sm:text-base">
                    Minimum project value: <span className="text-[#d4af37]">AED 2,500,000</span><br />
                    Consultations by referral or formal request only.
                </p>
            </div>

            <form className="space-y-8 sm:space-y-10">
                <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
                    <div>
                        <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
                            ORGANIZATION NAME *
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
                        />
                    </div>

                    <div>
                        <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
                            CONTACT PERSON *
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
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

                    <div>
                        <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
                            TELEPHONE *
                        </label>
                        <input
                            type="tel"
                            required
                            className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
                        PROJECT TYPOLOGY *
                    </label>
                    <select
                        required
                        className="w-full bg-[#0d0d0d] border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
                    >
                        <option value="">Select project type</option>
                        <option>Commercial Infrastructure</option>
                        <option>Sacred Architecture (Mosque / Prayer Hall)</option>
                        <option>Institutional (Education / Government / Cultural)</option>
                        <option>Hospitality & Dining</option>
                        <option>Mixed-Use / Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
                        ESTIMATED PROJECT BUDGET (AED) *
                    </label>
                    <select
                        required
                        className="w-full bg-[#0d0d0d] border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
                    >
                        <option value="">Select budget range</option>
                        <option>AED 2.5M – 5M</option>
                        <option>AED 5M – 10M</option>
                        <option>AED 10M – 20M</option>
                        <option>AED 20M+</option>
                    </select>
                </div>

                <div>
                    <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
                        PROJECT LOCATION & SITE CONTEXT
                    </label>
                    <input
                        type="text"
                        className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base"
                    />
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

                <div>
                    <label className="block text-xs tracking-[0.25em] text-[#707070] mb-3">
                        TARGET COMPLETION TIMELINE
                    </label>
                    <input
                        type="text"
                        placeholder="e.g., Q4 2025"
                        className="w-full bg-transparent border-b border-[#2a2a2a] py-3 sm:py-4 text-[#e8e8e8] focus:outline-none focus:border-[#d4af37] transition-colors text-sm sm:text-base placeholder:text-[#404040]"
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