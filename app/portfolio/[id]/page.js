import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import connectDB from "@/lib/db";
import Project from "@/models/Project";

/* ---------------------------------- */
/* VIEWPORT (Required in Next 15)     */
/* ---------------------------------- */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
};

/* ---------------------------------- */
/* SEO METADATA                       */
/* ---------------------------------- */
export async function generateMetadata({ params }) {
  await connectDB();

  const { id } = await params; // 🔥 required in Next 15

  const project = await Project.findById(id).lean();

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description || "",
    openGraph: {
      title: project.title,
      description: project.description || "",
      images: project.image?.url ? [project.image.url] : [],
    },
  };
}

/* ---------------------------------- */
/* PAGE                               */
/* ---------------------------------- */
export default async function ProjectDetail({ params }) {
  await connectDB();

  const { id } = await params; // 🔥 required

  const project = await Project.findById(id).lean();

  if (!project) return notFound();

  /* ------------------------------- */
  /* Get NEXT project efficiently    */
  /* Instead of fetching everything  */
  /* ------------------------------- */
  // Proper next project logic
  let nextProject = await Project.findOne({
    createdAt: { $lt: project.createdAt },
  })
    .sort({ createdAt: -1 })
    .lean();

  if (!nextProject) {
    nextProject = await Project.findOne()
      .sort({ createdAt: -1 })
      .lean();
  }


  const heroImage = project.image?.url || null;

  const galleryImages =
    project.gallery?.length > 0
      ? project.gallery.map((img) => img.url).filter(Boolean)
      : [];

  return (
    <main className="bg-[#0d0d0d] text-[#e8e8e8] min-h-screen">

      {/* HERO */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] mt-20 sm:mt-24">
        {heroImage && (
          <Image
            src={heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
      </section>

      {/* HEADER */}
      <section className="py-16 sm:py-20 md:py-24 border-b border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16">

            <div className="md:col-span-8 relative pl-8 md:pl-10 lg:pl-12 border-l border-[#1f1f1f]">
              {/* Golden vertical accent line */}
              <div className="absolute -left-[1px] top-0 h-16 md:h-20 lg:h-24 w-[2px] bg-[#d4af37]" />

              <div className="relative">
                <div className="text-xs tracking-[0.3em] text-[#888] mb-4">
                  {project.category}
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight leading-[1.05]">
                  {project.title}
                </h1>

                <p className="text-[#a8a8a8] text-base sm:text-lg leading-[1.8]">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="md:col-span-4 space-y-6 text-sm">
              <Detail label="CLIENT" value={project.client} />
              <Detail label="LOCATION" value={project.location} />
              <Detail label="AREA" value={project.area} />
              <Detail label="DURATION" value={project.duration} />
              <Detail label="COMPLETION" value={project.year} highlight />
            </div>

          </div>
        </div>
      </section>

      {/* CHALLENGE / SOLUTION / OUTCOME */}
      <section className="py-20 sm:py-28 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-20 space-y-20">
          <SectionBlock title="THE CHALLENGE" text={project.challenge} />
          <SectionBlock title="OUR SOLUTION" text={project.solution} />
          <SectionBlock title="THE OUTCOME" text={project.outcome} />
        </div>
      </section>

      {/* GALLERY */}
      {galleryImages.length > 0 && (
        <section className="py-20 sm:py-28 md:py-32">
          <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="relative h-[60vh] overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt={`${project.title} ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Services & Materials */}
      <section className="py-20 sm:py-28 md:py-32 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Services */}
            <div>
              <div className="text-xs tracking-[0.3em] text-[#888] mb-8">SERVICES PROVIDED</div>
              <ul className="space-y-4">
                {project.services.map((service, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-[#d4af37] mt-1">—</span>
                    <span className="text-[#a8a8a8] text-base sm:text-lg">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials */}
            <div>
              <div className="text-xs tracking-[0.3em] text-[#888] mb-8">KEY MATERIALS</div>
              <ul className="space-y-4">
                {project.materials.map((material, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-[#d4af37] mt-1">—</span>
                    <span className="text-[#a8a8a8] text-base sm:text-lg">{material}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      {nextProject && (
        <section className="py-20 sm:py-28 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20 text-center">

            <div className="text-xs tracking-[0.3em] text-[#888] mb-4">
              NEXT PROJECT
            </div>

            <Link href={`/portfolio/${nextProject._id}`}>
              <div className="relative h-[60vh] overflow-hidden group mb-8">

                {nextProject.image?.url && (
                  <Image
                    src={nextProject.image.url}
                    alt={nextProject.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 to-transparent flex items-end justify-center pb-12">
                  <h2 className="font-serif text-3xl md:text-4xl">
                    {nextProject.title}
                  </h2>
                </div>

              </div>
            </Link>

            <Link
              href="/portfolio"
              className="inline-block px-12 py-5 border border-[#404040] hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-700 text-xs tracking-[0.3em]"
            >
              VIEW ALL PROJECTS
            </Link>

          </div>
        </section>
      )}

    </main>
  );
}

/* ------------------------------ */
/* Reusable Components            */
/* ------------------------------ */

function Detail({ label, value, highlight }) {
  if (!value) return null;

  return (
    <div>
      <div className="text-[#707070] tracking-[0.2em] mb-2 text-xs">
        {label}
      </div>
      <div className={highlight ? "text-[#d4af37]" : "text-[#d0d0d0]"}>
        {value}
      </div>
    </div>
  );
}

function SectionBlock({ title, text }) {
  if (!text) return null;

  return (
    <div>
      <div className="text-xs tracking-[0.3em] text-[#888] mb-6">
        {title}
      </div>
      <p className="text-[#a8a8a8] text-base sm:text-lg leading-[1.8]">
        {text}
      </p>
    </div>
  );
}
