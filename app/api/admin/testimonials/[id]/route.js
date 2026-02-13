import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Testimonial from "@/models/Testimonial";
import { uploadImage, deleteImage } from "@/lib/services/cloudinary";

export const runtime = "nodejs";

// ---------------- UPDATE ----------------
export async function PATCH(req, context) {
    try {
        await connectDB();

        const { id } = await context.params;
        const existing = await Testimonial.findById(id);

        if (!existing) {
            return NextResponse.json(
                { success: false, message: "Testimonial not found" },
                { status: 404 }
            );
        }

        const contentType = req.headers.get("content-type");

        // -------- Toggle Active (JSON)
        if (contentType?.includes("application/json")) {
            const body = await req.json();

            if (body.toggleActive) {
                existing.isActive = !existing.isActive;
                await existing.save();

                return NextResponse.json({
                    success: true,
                    testimonial: existing,
                });
            }
        }

        // -------- Full Update (FormData)
        const formData = await req.formData();

        const name = formData.get("name")?.trim();
        const position = formData.get("position")?.trim();
        const company = formData.get("company")?.trim();
        const quote = formData.get("quote")?.trim();
        const imageFile = formData.get("image");

        if (name) existing.name = name;
        if (position) existing.position = position;
        if (company) existing.company = company;
        if (quote) existing.quote = quote;

        // Replace image if new uploaded
        if (imageFile && imageFile.size > 0) {
            if (existing.image?.public_id) {
                await deleteImage(existing.image.public_id);
            }

            const uploaded = await uploadImage(imageFile, {
                folder: "luxora/testimonials", // ✅ FIXED
            });

            existing.image = {
                url: uploaded.url,
                public_id: uploaded.public_id,
            };
        }

        await existing.save();

        return NextResponse.json({
            success: true,
            testimonial: existing,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

// ---------------- DELETE ----------------
export async function DELETE(req, context) {
    try {
        await connectDB();

        const { id } = await context.params;

        const testimonial = await Testimonial.findById(id);

        if (!testimonial) {
            return NextResponse.json(
                { success: false, message: "Testimonial not found" },
                { status: 404 }
            );
        }

        if (testimonial.image?.public_id) {
            await deleteImage(testimonial.image.public_id);
        }

        await testimonial.deleteOne();

        return NextResponse.json({
            success: true,
            message: "Deleted successfully",
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}
