// import { NextResponse } from "next/server";
// import connectDB from "@/lib/connectDB";
// import Project from "@/models/Project";
// import cloudinary from "@/lib/cloudinary";

// export async function POST(req) {
//   try {
//     await connectDB();

//     const formData = await req.formData();

//     // Text fields
//     const title = formData.get("title");
//     const category = formData.get("category");
//     const year = formData.get("year");
//     const location = formData.get("location");
//     const area = formData.get("area");
//     const client = formData.get("client");
//     const duration = formData.get("duration");
//     const description = formData.get("description");
//     const challenge = formData.get("challenge");
//     const solution = formData.get("solution");
//     const outcome = formData.get("outcome");
//     const scope = formData.get("scope");
//     const heightClass = formData.get("heightClass");

//     const services = JSON.parse(formData.get("services") || "[]");
//     const materials = JSON.parse(formData.get("materials") || "[]");

//     // Hero image
//     const heroFile = formData.get("image");

//     if (!heroFile) {
//       return NextResponse.json({ error: "Hero image required" }, { status: 400 });
//     }

//     const heroBuffer = Buffer.from(await heroFile.arrayBuffer());

//     const heroUpload = await new Promise((resolve, reject) => {
//       cloudinary.uploader.upload_stream(
//         { folder: "luxora/projects" },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       ).end(heroBuffer);
//     });

//     // Multiple gallery images
//     const galleryFiles = formData.getAll("images");
//     const uploadedGallery = [];

//     for (let file of galleryFiles) {
//       if (!file || !file.name) continue;

//       const buffer = Buffer.from(await file.arrayBuffer());

//       const uploadResult = await new Promise((resolve, reject) => {
//         cloudinary.uploader.upload_stream(
//           { folder: "luxora/projects/gallery" },
//           (error, result) => {
//             if (error) reject(error);
//             else resolve(result);
//           }
//         ).end(buffer);
//       });

//       uploadedGallery.push(uploadResult.secure_url);
//     }

//     // Save to DB
//     const project = await Project.create({
//       title,
//       category,
//       year,
//       location,
//       area,
//       client,
//       duration,
//       description,
//       challenge,
//       solution,
//       outcome,
//       scope,
//       services,
//       materials,
//       image: heroUpload.secure_url,
//       images: uploadedGallery,
//       heightClass,
//     });

//     return NextResponse.json({ success: true, project });

//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Upload failed" }, { status: 500 });
//   }
// }
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
