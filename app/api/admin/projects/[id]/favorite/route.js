import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Project from "@/models/Project";

export const runtime = "nodejs";

export async function PATCH(req, context) {
  try {
    await connectDB();

    const { id } = await context.params; // ✅ FIX

    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json({ success: false }, { status: 404 });
    }

    // Turning OFF → always allow
    if (project.isFeatured) {
      project.isFeatured = false;
      project.featuredOrder = 0;
      await project.save();

      return NextResponse.json({
        success: true,
        isFeatured: false,
      });
    }

    // Turning ON → enforce limit
    const featuredCount = await Project.countDocuments({
      isFeatured: true,
    });

    if (featuredCount >= 4) {
      return NextResponse.json(
        {
          success: false,
          message: "Maximum of 4 featured projects allowed",
        },
        { status: 400 }
      );
    }

    // Auto-assign order
    const maxOrderProject = await Project.findOne({
      isFeatured: true,
    }).sort({ featuredOrder: -1 });

    const nextOrder = maxOrderProject
      ? maxOrderProject.featuredOrder + 1
      : 1;

    project.isFeatured = true;
    project.featuredOrder = nextOrder;

    await project.save();

    return NextResponse.json({
      success: true,
      isFeatured: true,
      featuredOrder: nextOrder,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
