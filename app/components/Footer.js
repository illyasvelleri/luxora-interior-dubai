import Link from "next/link";
import Image from "next/image"
import { Phone, Mail, MapPin, Globe, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-[#1a1a1a] py-12 sm:py-16 bg-[#0d0d0d]">
            <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">

                {/* Top Grid */}
                <div className="grid md:grid-cols-3 gap-10 sm:gap-12 mb-12 sm:mb-16">

                    {/* Brand */}
                    <div>

                        {/* Logo – using PNG with built-in tagline */}
                        <Link href="/" className="block">
                            <Image
                                src="/logo(png).png"
                                alt="Luxora Design and Fitout"
                                width={360}
                                height={110}
                                className="h-10 sm:h-20 md:h-20 lg:h-20 xl:h-22 2xl:h-26 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Contact */}
                    <div>
                        <div className="text-xs tracking-[0.25em] text-[#888] mb-4">
                            CONTACT DETAILS
                        </div>

                        <div className="space-y-3 text-sm text-[#a8a8a8]">

                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-[#d4af37]" />
                                <span>+971 567568557</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-[#d4af37]" />
                                <span>+971 55 431 4696</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-[#d4af37]" />
                                <span>Info@luxorafitout.ae</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-[#d4af37]" />
                                <span>Al Qusais, Dubai, UAE</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Globe size={16} className="text-[#d4af37]" />
                                <span>www.luxorafitout.ae</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Instagram size={16} className="text-[#d4af37]" />
                                <span>luxora_design_fitout</span>
                            </div>

                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <div className="text-xs tracking-[0.25em] text-[#888] mb-4">
                            NAVIGATE
                        </div>

                        <div className="space-y-2 text-sm">
                            <div>
                                <Link href="/about" className="text-[#a8a8a8] hover:text-[#d4af37] transition-colors">
                                    About
                                </Link>
                            </div>
                            <div>
                                <Link href="/services" className="text-[#a8a8a8] hover:text-[#d4af37] transition-colors">
                                    Services
                                </Link>
                            </div>
                            <div>
                                <Link href="/portfolio" className="text-[#a8a8a8] hover:text-[#d4af37] transition-colors">
                                    Portfolio
                                </Link>
                            </div>
                            <div>
                                <Link href="/contact" className="text-[#a8a8a8] hover:text-[#d4af37] transition-colors">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t border-[#1a1a1a] text-xs text-[#707070]">
                    <div className="tracking-[0.3em]">
                        © 2025 – {new Date().getFullYear()} LUXORA DESIGN AND FITOUT
                    </div>

                    <div className="flex gap-8 tracking-[0.2em]">
                        <Link href="#" className="hover:text-[#d4af37] transition-colors">
                            PRIVACY POLICY
                        </Link>
                        <Link href="#" className="hover:text-[#d4af37] transition-colors">
                            TERMS OF SERVICE
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}