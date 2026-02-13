import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Testimonial from "@/models/Testimonial";

export async function GET() {
  await connectDB();

  const testimonials = await Testimonial.find({ isActive: true })
    .sort({ order: 1 })
    .lean();

  return NextResponse.json({ testimonials });
}
