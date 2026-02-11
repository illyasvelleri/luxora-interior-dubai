'use client'

import { useState } from "react";

export default function NewProject() {
  const [loading, setLoading] = useState(false);
  const [heroFile, setHeroFile] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);

  const initialState = {
    title: "",
    category: "",
    year: "",
    location: "",
    area: "",
    client: "",
    duration: "",
    description: "",
    challenge: "",
    solution: "",
    outcome: "",
    scope: "",
    services: "",
    materials: "",
    heightClass: "row-span-1",
  };

  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      // Append text fields
      Object.keys(form).forEach((key) => {
        if (key === "services" || key === "materials") {
          const valueArray = form[key]
            .split("\n")
            .map((item) => item.trim())
            .filter(Boolean);

          formData.append(key, JSON.stringify(valueArray));
        } else {
          formData.append(key, form[key]);
        }
      });

      // Append hero image
      if (heroFile) {
        formData.append("image", heroFile);
      }

      // Append gallery images
      galleryFiles.forEach((file) => {
        formData.append("images", file);
      });

      const response = await fetch("/api/admin/projects", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Project creation failed");
      }

      alert("Project created successfully");

      setForm(initialState);
      setHeroFile(null);
      setGalleryFiles([]);

    } catch (error) {
      console.error(error);
      alert("Error creating project");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-10 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-serif mb-10">New Project</h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {["title","category","year","location","area","client","duration","scope"].map((field) => (
            <input
              key={field}
              name={field}
              value={form[field]}
              placeholder={field.toUpperCase()}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333] p-3"
            />
          ))}

          {["description","challenge","solution","outcome"].map((field) => (
            <textarea
              key={field}
              name={field}
              value={form[field]}
              placeholder={field.toUpperCase()}
              rows={4}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333] p-3"
            />
          ))}

          <textarea
            name="services"
            value={form.services}
            placeholder="SERVICES (one per line)"
            rows={4}
            onChange={handleChange}
            className="w-full bg-[#1a1a1a] border border-[#333] p-3"
          />

          <textarea
            name="materials"
            value={form.materials}
            placeholder="MATERIALS (one per line)"
            rows={4}
            onChange={handleChange}
            className="w-full bg-[#1a1a1a] border border-[#333] p-3"
          />

          <select
            name="heightClass"
            value={form.heightClass}
            onChange={handleChange}
            className="w-full bg-[#1a1a1a] border border-[#333] p-3"
          >
            <option value="row-span-1">Normal</option>
            <option value="row-span-2">Tall</option>
            <option value="row-span-3">Extra Tall</option>
          </select>

          <div>
            <label className="block mb-2">Hero Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setHeroFile(e.target.files?.[0] || null)}
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-2">Gallery Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) =>
                setGalleryFiles(
                  e.target.files ? Array.from(e.target.files) : []
                )
              }
              className="w-full"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#d4af37] text-black px-8 py-3 mt-6"
          >
            {loading ? "Creating..." : "Create Project"}
          </button>

        </form>
      </div>
    </div>
  );
}
