import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: String,
    year: String,
    location: String,
    area: String,
    client: String,
    duration: String,

    // Hero Image
    image: {
      url: String,
      public_id: String,
    },

    // Gallery
    gallery: [
      {
        url: String,
        public_id: String,
      },
    ],

    description: String,
    challenge: String,
    solution: String,
    outcome: String,

    scope: String,
    services: [String],
    materials: [String],

    heightClass: {
      type: String,
      enum: ["row-span-1", "row-span-2", "row-span-3"],
      default: "row-span-1",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
