import Link from "next/link"
import Image from 'next/image'

export default function Footer() {
    {/* Footer */ }
    return (
        <footer className="border-t border-[#1a1a1a] py-12 sm:py-16 bg-[#0d0d0d]">
            <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
                <div className="grid md:grid-cols-3 gap-10 sm:gap-12 mb-12 sm:mb-16">
                    <div>
                        <div className="text-lg sm:text-xl tracking-[0.4em] font-light mb-4 sm:mb-6">LUXORA</div>
                        <p className="text-[#707070] text-sm leading-relaxed">
                            Interior architecture and fit-out execution for institutional environments.
                        </p>
                    </div>
                    <div>
                        <div className="text-xs tracking-[0.25em] text-[#888] mb-3 sm:mb-4">CONTACT</div>
                        <div className="space-y-2 text-sm text-[#a8a8a8]">
                            <div>studio@luxorainteriors.ae</div>
                            <div>+971 4 XXX XXXX</div>
                            <div>Dubai Design District, UAE</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-xs tracking-[0.25em] text-[#888] mb-3 sm:mb-4">NAVIGATE</div>
                        <div className="space-y-2 text-sm">
                            <div><Link href="#about" className="text-[#a8a8a8] hover:text-[#d4af37] transition-colors">Studio</Link></div>
                            <div><Link href="#projects" className="text-[#a8a8a8] hover:text-[#d4af37] transition-colors">Works</Link></div>
                            <div><Link href="#services" className="text-[#a8a8a8] hover:text-[#d4af37] transition-colors">Specializations</Link></div>
                            <div><Link href="/portfolio" className="text-[#a8a8a8] hover:text-[#d4af37] transition-colors">Portfolio</Link></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 pt-10 sm:pt-12 border-t border-[#1a1a1a] text-xs text-[#707070]">
                    <div className="tracking-[0.3em]">© 2026 LUXORA INTERIORS</div>
                    <div className="flex gap-6 sm:gap-8 md:gap-10 tracking-[0.2em]">
                        <Link href="#" className="hover:text-[#d4af37] transition-colors">PRIVACY POLICY</Link>
                        <Link href="#" className="hover:text-[#d4af37] transition-colors">TERMS OF SERVICE</Link>
                    </div>
                </div>
            </div>
        </footer>
        );
}