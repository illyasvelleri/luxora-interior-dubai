import { v2 as cloudinary } from "cloudinary";

/* ----------------------------------
   FORCE SERVER EXECUTION
----------------------------------- */
if (typeof window !== "undefined") {
  throw new Error("Cloudinary module must not run on the client.");
}

/* ----------------------------------
   ENV VALIDATION (Fail Fast)
----------------------------------- */
const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  throw new Error("Cloudinary environment variables are missing.");
}

/* ----------------------------------
   CONFIG
----------------------------------- */
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

/* ----------------------------------
   UPLOAD IMAGE
----------------------------------- */
export async function uploadImage(file, options = {}) {
  if (!file) throw new Error("No file provided.");
  if (!file.type?.startsWith("image/"))
    throw new Error("Invalid file type.");
  if (file.size > 10 * 1024 * 1024)
    throw new Error("File exceeds 10MB limit.");

  const folder = options.folder || "luxora/projects";
  const publicId = options.publicId;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder,
          public_id: publicId,
          overwrite: true,
          resource_type: "image",
          transformation: [
            { width: 2200, crop: "limit" },
            { quality: "auto:best" },
            { format: "webp" },
          ],
        },
        (error, result) => {
          if (error || !result) {
            return reject(new Error("Cloudinary upload failed."));
          }

          resolve({
            url: result.secure_url,
            public_id: result.public_id,
            width: result.width,
            height: result.height,
          });
        }
      )
      .end(buffer);
  });
}

/* ----------------------------------
   DELETE IMAGE (FIXED)
----------------------------------- */
export async function deleteImage(publicId) {
  if (!publicId) {
    throw new Error("No public_id provided for deletion.");
  }

  const result = await cloudinary.uploader.destroy(publicId);

  console.log("Cloudinary delete response:", result);

  if (!result || result.result !== "ok") {
    throw new Error(
      `Cloudinary deletion failed: ${result?.result || "unknown error"}`
    );
  }

  return true;
}
