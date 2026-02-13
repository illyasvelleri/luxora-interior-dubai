"use client";

import Image from "next/image";

export default function TestimonialScroller({ testimonials }) {
  return (
    <div className="relative">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling Wrapper */}
      <div className="overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-6 lg:gap-8 pb-4 animate-[scroll-slow_40s_linear_infinite] hover:[animation-play-state:paused]">
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={`${item._id}-${index}`}
              className="flex-shrink-0 w-[340px] sm:w-[400px] border border-[#1c1c1c] p-8 lg:p-10 hover:border-[#d4af37] transition-all duration-700 group"
            >
              <div className="text-[#d4af37] text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">"</div>

              <p className="text-[#bfbfbf] leading-relaxed mb-8 line-clamp-6">
                {item.quote}
              </p>

              <div className="flex items-center gap-4">
                {item.image?.url && (
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#1c1c1c] group-hover:ring-[#d4af37] transition-all duration-500">
                    <Image
                      src={item.image.url}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div>
                  <div className="text-white font-medium">
                    {item.name}
                  </div>
                  <div className="text-sm text-[#707070]">
                    {item.position} {item.company && `— ${item.company}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Hint (Mobile) */}
      <div className="mt-8 text-center md:hidden">
        <p className="text-xs text-[#707070] tracking-wider">
          ← SWIPE TO VIEW MORE →
        </p>
      </div>

      {/* Animation Keyframes */}
      <style jsx global>{`
        @keyframes scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}