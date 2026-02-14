import Image from "next/image";
import Link from "next/link";
import connectDB from "@/lib/db";
import Project from "@/models/Project";

export default async function Portfolio() {
  await connectDB();

  const projects = await Project.find({})
    .sort({ createdAt: -1 })
    .lean();

  return (
    <main className="bg-[#0d0d0d] text-[#e8e8e8] min-h-screen">

      {/* Portfolio Header */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20 relative pl-8 md:pl-10 lg:pl-12 border-l border-[#1f1f1f]">
          {/* Golden vertical accent line */}
          <div className="absolute -left-[1px] top-0 h-16 md:h-20 lg:h-24 w-[2px] bg-[#d4af37]" />

          <div className="relative">
            <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">
              PORTFOLIO
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 sm:mb-10 md:mb-12 tracking-tight leading-[0.95]">
              Complete Works
            </h1>

            <p className="text-[#a8a8a8] text-base sm:text-lg max-w-2xl leading-relaxed">
              A curated selection of institutional, commercial, and sacred architecture projects delivered across the United Arab Emirates.
            </p>
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="pb-20 sm:pb-28 md:pb-40">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-3 sm:gap-4 md:gap-6">

            {projects.map((project) => {

              // ✅ SAFE IMAGE RESOLVER (handles old + new schema)
              const imageUrl =
                typeof project.image === "string"
                  ? project.image
                  : project.image?.url ||
                  project.image?.secure_url ||
                  null;


              return (
                <Link
                  key={project._id}
                  href={`/portfolio/${project._id}`}
                  className={`relative group overflow-hidden ${project.heightClass || "row-span-1"}`}
                >

                  {/* Image */}
                  <div className="absolute inset-0">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={project.title || "Project Image"}
                        fill
                        sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
                        className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
                      />
                    ) : (
                      <div className="w-full h-full bg-neutral-800" />
                    )}
                  </div>


                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/40 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">

                    <div className="text-xs tracking-[0.2em] text-[#d4af37] mb-2 sm:mb-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 delay-75">
                      {project.category}
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 tracking-tight leading-tight opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#a8a8a8] opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      <span>{project.location?.split(",")[0]}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.area}</span>
                    </div>

                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 border border-[#d4af37]/0 group-hover:border-[#d4af37]/30 transition-colors duration-500 pointer-events-none" />

                </Link>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 sm:py-32 md:py-40 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-20 text-center">
          <div className="text-xs tracking-[0.3em] text-[#888] mb-4 sm:mb-6">PROJECT ENQUIRIES</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-10 tracking-tight">Commission LUMINA</h2>
          <p className="text-[#a8a8a8] text-base sm:text-lg mb-12 sm:mb-16 leading-relaxed max-w-2xl mx-auto px-4">
            Every institutional project represents a unique partnership between design discipline and organizational vision. We invite enquiries from organizations seeking permanent architectural solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 sm:px-12 md:px-14 py-4 sm:py-5 border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-700 text-xs tracking-[0.3em]"
          >
            REQUEST CONSULTATION
          </Link>
        </div>
      </section>
    </main>
  );
}
