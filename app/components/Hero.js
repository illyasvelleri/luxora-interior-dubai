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
          Luxury Interior<br />Design and Fit-out
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#b8b8b8] max-w-2xl mx-auto mb-14 leading-relaxed tracking-wide">
          Interior Architecture and Turnkey Execution for High-End Commercial and Residential Spaces Across the United Arab Emirates.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center px-14 py-5 border border-[#d4af37]/60 text-[#d4af37] text-xs tracking-[0.35em] hover:bg-[#d4af37]/10 transition-all duration-700"
        >
          REQUEST QUOTATION
        </Link>
      </div>
    </section>
  );
}
