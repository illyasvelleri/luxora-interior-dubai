import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Project from "@/models/Project";
import { uploadImage } from "@/lib/services/cloudinary";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();

    // --------------------------
    // TEXT FIELDS
    // --------------------------
    const title = formData.get("title");
    const category = formData.get("category");
    const year = formData.get("year");
    const location = formData.get("location");
    const area = formData.get("area");
    const client = formData.get("client");
    const duration = formData.get("duration");
    const description = formData.get("description");
    const challenge = formData.get("challenge");
    const solution = formData.get("solution");
    const outcome = formData.get("outcome");
    const scope = formData.get("scope");
    const heightClass = formData.get("heightClass");

    const services = JSON.parse(formData.get("services") || "[]");
    const materials = JSON.parse(formData.get("materials") || "[]");

    // --------------------------
    // FILES
    // --------------------------
    const mainImage = formData.get("image"); // Hero image
    const galleryImages = formData.getAll("images"); // Gallery images

    if (!title)
      return NextResponse.json(
        { success: false, message: "Title is required" },
        { status: 400 }
      );

    if (!mainImage || mainImage.size === 0)
      return NextResponse.json(
        { success: false, message: "Hero image is required" },
        { status: 400 }
      );

    // --------------------------
    // UPLOAD IMAGES
    // --------------------------
    const mainUpload = await uploadImage(mainImage); // { url, public_id }

    const galleryUploads = await Promise.all(
      galleryImages
        .filter((img) => img && img.size > 0)
        .map((img) => uploadImage(img))
    );

    // --------------------------
    // SAVE TO DB
    // --------------------------
    const project = await Project.create({
      title,
      category,
      year,
      location,
      area,
      client,
      duration,
      description,
      challenge,
      solution,
      outcome,
      scope,
      heightClass,
      services,
      materials,
      image: {
        url: mainUpload.url,
        public_id: mainUpload.public_id,
      },
      gallery: galleryUploads.map((img) => ({
        url: img.url,
        public_id: img.public_id,
      })),
    });

    return NextResponse.json({ success: true, project });
  } catch (error) {
    console.error("PROJECT CREATE ERROR:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Server error" },
      { status: 500 }
    );
  }
}
