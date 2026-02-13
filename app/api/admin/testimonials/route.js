// import { NextResponse } from "next/server";
// import connectDB from "@/lib/db";
// import Testimonial from "@/models/Testimonial";
// import { uploadImage } from "@/lib/services/cloudinary";

// export const runtime = "nodejs";

// export async function POST(req) {
//   try {
//     await connectDB();
//     const formData = await req.formData();

//     const name = formData.get("name");
//     const position = formData.get("position");
//     const company = formData.get("company");
//     const quote = formData.get("quote");
//     const imageFile = formData.get("image");

//     if (!name || !quote) {
//       return NextResponse.json(
//         { success: false, message: "Name and quote required" },
//         { status: 400 }
//       );
//     }

//     let imageData = null;

//     if (imageFile && imageFile.size > 0) {
//       const upload = await uploadImage(imageFile);
//       imageData = {
//         url: upload.url,
//         public_id: upload.public_id,
//       };
//     }

//     const maxOrder = await Testimonial.findOne({})
//       .sort({ order: -1 });

//     const testimonial = await Testimonial.create({
//       name,
//       position,
//       company,
//       quote,
//       image: imageData,
//       order: maxOrder ? maxOrder.order + 1 : 1,
//     });

//     return NextResponse.json({ success: true, testimonial });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, message: error.message },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Testimonial from "@/models/Testimonial";
import { uploadImage, deleteImage } from "@/lib/services/cloudinary";

export const runtime = "nodejs";

// ---------------- GET ALL ----------------
export async function GET() {
  try {
    await connectDB();

    const testimonials = await Testimonial.find({})
      .sort({ order: 1 })
      .lean();

    return NextResponse.json({
      success: true,
      testimonials,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// ---------------- CREATE ----------------
export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name")?.trim();
    const position = formData.get("position")?.trim();
    const company = formData.get("company")?.trim();
    const quote = formData.get("quote")?.trim();
    const imageFile = formData.get("image");

    if (!name || !quote) {
      return NextResponse.json(
        { success: false, message: "Name and quote are required." },
        { status: 400 }
      );
    }

    let imageData = null;

    if (imageFile && imageFile.size > 0) {
      const uploaded = await uploadImage(imageFile, {
        folder: "luxora/testimonials", // ✅ FIXED FOLDER
      });

      imageData = {
        url: uploaded.url,
        public_id: uploaded.public_id,
      };
    }

    const maxOrder = await Testimonial.findOne({})
      .sort({ order: -1 })
      .select("order");

    const testimonial = await Testimonial.create({
      name,
      position,
      company,
      quote,
      image: imageData,
      isActive: true,
      order: maxOrder ? maxOrder.order + 1 : 1,
    });

    return NextResponse.json({
      success: true,
      testimonial,
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
