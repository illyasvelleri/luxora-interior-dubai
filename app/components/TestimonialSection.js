import Image from "next/image";
import connectDB from "@/lib/db";
import Testimonial from "@/models/Testimonial";
import TestimonialScroller from "./TestimonialScroller";

export default async function TestimonialSection() {
  await connectDB();

  const testimonials = await Testimonial.find({ isActive: true })
    .sort({ order: 1 })
    .limit(6)
    .lean();

  if (!testimonials.length) return null;

  // Serialize for client component
  const serializedTestimonials = testimonials.map(t => ({
    _id: t._id.toString(),
    name: t.name,
    position: t.position,
    company: t.company,
    quote: t.quote,
    image: t.image
  }));

  return (
    <section className="py-28 md:py-40 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20">

        <div className="mb-20">
          <div className="text-xs tracking-[0.3em] text-[#707070] mb-4">
            TESTIMONIALS
          </div>
          <h2 className="font-serif text-4xl md:text-6xl">
            Client Perspectives
          </h2>
        </div>

        <TestimonialScroller testimonials={serializedTestimonials} />
      </div>
    </section>
  );
}