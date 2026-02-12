import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Project from "@/models/Project";
import { deleteImage , uploadImage } from "@/lib/services/cloudinary";

export const runtime = "nodejs";

export async function DELETE(req, context) {
  try {
    await connectDB();

     const { id } = await context.params;

    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    // ----------------------------
    // DELETE HERO IMAGE
    // ----------------------------
    if (project.image?.public_id) {
      await deleteImage(project.image.public_id);
    }

    // ----------------------------
    // DELETE GALLERY IMAGES
    // ----------------------------
    if (project.gallery?.length > 0) {
      await Promise.all(
        project.gallery.map((img) =>
          img.public_id ? deleteImage(img.public_id) : null
        )
      );
    }

    await Project.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE PROJECT ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET(req, context) {
  await connectDB();
  const { id } = await context.params;

  const project = await Project.findById(id);
  if (!project) {
    return NextResponse.json({ success: false }, { status: 404 });
  }

  return NextResponse.json({ success: true, project });
}



export async function PUT(req, context) {
  try {
    await connectDB();
    const { id } = await context.params;

    const formData = await req.formData();

    const project = await Project.findById(id);
    if (!project)
      return NextResponse.json({ success: false }, { status: 404 });

    const services = JSON.parse(formData.get("services") || "[]");
    const materials = JSON.parse(formData.get("materials") || "[]");

    const updatedFields = {
      title: formData.get("title"),
      category: formData.get("category"),
      year: formData.get("year"),
      location: formData.get("location"),
      area: formData.get("area"),
      client: formData.get("client"),
      duration: formData.get("duration"),
      description: formData.get("description"),
      challenge: formData.get("challenge"),
      solution: formData.get("solution"),
      outcome: formData.get("outcome"),
      scope: formData.get("scope"),
      heightClass: formData.get("heightClass"),
      services,
      materials,
    };

    // HERO UPDATE
    const newHero = formData.get("image");
    if (newHero && newHero.size > 0) {
      if (project.image?.public_id) {
        await deleteImage(project.image.public_id);
      }

      const upload = await uploadImage(newHero);

      updatedFields.image = {
        url: upload.url,
        public_id: upload.public_id,
      };
    }

    // GALLERY REPLACE
    const newGallery = formData.getAll("images");
    if (newGallery && newGallery.length > 0 && newGallery[0].size > 0) {
      // delete old
      await Promise.all(
        project.gallery.map((img) =>
          img.public_id ? deleteImage(img.public_id) : null
        )
      );

      const uploads = await Promise.all(
        newGallery.map((img) => uploadImage(img))
      );

      updatedFields.gallery = uploads.map((u) => ({
        url: u.url,
        public_id: u.public_id,
      }));
    }

    const updated = await Project.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    return NextResponse.json({ success: true, project: updated });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

