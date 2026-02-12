// 'use client'

// import { useState } from "react";

// export default function NewProject() {
//   const [loading, setLoading] = useState(false);
//   const [heroFile, setHeroFile] = useState(null);
//   const [galleryFiles, setGalleryFiles] = useState([]);

//   const initialState = {
//     title: "",
//     category: "",
//     year: "",
//     location: "",
//     area: "",
//     client: "",
//     duration: "",
//     description: "",
//     challenge: "",
//     solution: "",
//     outcome: "",
//     scope: "",
//     services: "",
//     materials: "",
//     heightClass: "row-span-1",
//   };

//   const [form, setForm] = useState(initialState);

//   const handleChange = (e) => {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const formData = new FormData();

//       // Append text fields
//       Object.keys(form).forEach((key) => {
//         if (key === "services" || key === "materials") {
//           const valueArray = form[key]
//             .split("\n")
//             .map((item) => item.trim())
//             .filter(Boolean);

//           formData.append(key, JSON.stringify(valueArray));
//         } else {
//           formData.append(key, form[key]);
//         }
//       });

//       // Append hero image
//       if (heroFile) {
//         formData.append("image", heroFile);
//       }

//       // Append gallery images
//       galleryFiles.forEach((file) => {
//         formData.append("images", file);
//       });

//       const response = await fetch("/api/admin/projects", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Project creation failed");
//       }

//       alert("Project created successfully");

//       setForm(initialState);
//       setHeroFile(null);
//       setGalleryFiles([]);

//     } catch (error) {
//       console.error(error);
//       alert("Error creating project");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#0d0d0d] text-white p-10 pt-24">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-serif mb-10">New Project</h1>

//         <form onSubmit={handleSubmit} className="space-y-6">

//           {["title","category","year","location","area","client","duration","scope"].map((field) => (
//             <input
//               key={field}
//               name={field}
//               value={form[field]}
//               placeholder={field.toUpperCase()}
//               onChange={handleChange}
//               className="w-full bg-[#1a1a1a] border border-[#333] p-3"
//             />
//           ))}

//           {["description","challenge","solution","outcome"].map((field) => (
//             <textarea
//               key={field}
//               name={field}
//               value={form[field]}
//               placeholder={field.toUpperCase()}
//               rows={4}
//               onChange={handleChange}
//               className="w-full bg-[#1a1a1a] border border-[#333] p-3"
//             />
//           ))}

//           <textarea
//             name="services"
//             value={form.services}
//             placeholder="SERVICES (one per line)"
//             rows={4}
//             onChange={handleChange}
//             className="w-full bg-[#1a1a1a] border border-[#333] p-3"
//           />

//           <textarea
//             name="materials"
//             value={form.materials}
//             placeholder="MATERIALS (one per line)"
//             rows={4}
//             onChange={handleChange}
//             className="w-full bg-[#1a1a1a] border border-[#333] p-3"
//           />

//           <select
//             name="heightClass"
//             value={form.heightClass}
//             onChange={handleChange}
//             className="w-full bg-[#1a1a1a] border border-[#333] p-3"
//           >
//             <option value="row-span-1">Normal</option>
//             <option value="row-span-2">Tall</option>
//             <option value="row-span-3">Extra Tall</option>
//           </select>

//           <div>
//             <label className="block mb-2">Hero Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setHeroFile(e.target.files?.[0] || null)}
//               className="w-full"
//             />
//           </div>

//           <div>
//             <label className="block mb-2">Gallery Images</label>
//             <input
//               type="file"
//               accept="image/*"
//               multiple
//               onChange={(e) =>
//                 setGalleryFiles(
//                   e.target.files ? Array.from(e.target.files) : []
//                 )
//               }
//               className="w-full"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-[#d4af37] text-black px-8 py-3 mt-6"
//           >
//             {loading ? "Creating..." : "Create Project"}
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }












'use client'

import { useState } from "react";
import { X, Upload, Image as ImageIcon, CheckCircle2 } from "lucide-react";

export default function NewProject() {
  const [loading, setLoading] = useState(false);
  const [heroFile, setHeroFile] = useState(null);
  const [heroPreview, setHeroPreview] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [galleryPreviews, setGalleryPreviews] = useState([]);

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

  const handleHeroChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setHeroFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeroPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryChange = (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setGalleryFiles(files);

    const previews = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        previews.push(reader.result);
        if (previews.length === files.length) {
          setGalleryPreviews(previews);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeHeroImage = () => {
    setHeroFile(null);
    setHeroPreview(null);
  };

  const removeGalleryImage = (index) => {
    const newFiles = galleryFiles.filter((_, i) => i !== index);
    const newPreviews = galleryPreviews.filter((_, i) => i !== index);
    setGalleryFiles(newFiles);
    setGalleryPreviews(newPreviews);
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
      setHeroPreview(null);
      setGalleryFiles([]);
      setGalleryPreviews([]);

    } catch (error) {
      console.error(error);
      alert("Error creating project");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-4 sm:p-6 lg:p-10 sm:pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-2">New Project</h1>
          <p className="text-[#888] text-sm sm:text-base">Add a new project to your portfolio</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 lg:space-y-10">

          {/* Basic Information Section */}
          <div className="bg-[#121212] border border-[#222] p-6 lg:p-8 rounded-lg">
            <h2 className="text-xl lg:text-2xl font-serif mb-6 text-[#d4af37]">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {["title", "category", "year", "location"].map((field) => (
                <div key={field}>
                  <label className="block text-sm text-[#999] mb-2 uppercase tracking-wider">
                    {field}
                  </label>
                  <input
                    name={field}
                    value={form[field]}
                    placeholder={`Enter ${field}`}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-[#333] p-3 rounded focus:border-[#d4af37] focus:outline-none transition-colors"
                    required={field === "title"}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Project Details Section */}
          <div className="bg-[#121212] border border-[#222] p-6 lg:p-8 rounded-lg">
            <h2 className="text-xl lg:text-2xl font-serif mb-6 text-[#d4af37]">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {["area", "client", "duration", "scope"].map((field) => (
                <div key={field}>
                  <label className="block text-sm text-[#999] mb-2 uppercase tracking-wider">
                    {field}
                  </label>
                  <input
                    name={field}
                    value={form[field]}
                    placeholder={`Enter ${field}`}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-[#333] p-3 rounded focus:border-[#d4af37] focus:outline-none transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-[#121212] border border-[#222] p-6 lg:p-8 rounded-lg">
            <h2 className="text-xl lg:text-2xl font-serif mb-6 text-[#d4af37]">Project Content</h2>
            <div className="space-y-6">
              {["description", "challenge", "solution", "outcome"].map((field) => (
                <div key={field}>
                  <label className="block text-sm text-[#999] mb-2 uppercase tracking-wider">
                    {field}
                  </label>
                  <textarea
                    name={field}
                    value={form[field]}
                    placeholder={`Enter ${field}...`}
                    rows={4}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-[#333] p-3 rounded focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Services & Materials Section */}
          <div className="bg-[#121212] border border-[#222] p-6 lg:p-8 rounded-lg">
            <h2 className="text-xl lg:text-2xl font-serif mb-6 text-[#d4af37]">Services & Materials</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-[#999] mb-2 uppercase tracking-wider">
                  Services <span className="text-[#666]">(one per line)</span>
                </label>
                <textarea
                  name="services"
                  value={form.services}
                  placeholder="Space Planning&#10;Interior Design&#10;3D Visualization"
                  rows={6}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#333] p-3 rounded focus:border-[#d4af37] focus:outline-none transition-colors resize-none font-mono text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-[#999] mb-2 uppercase tracking-wider">
                  Materials <span className="text-[#666]">(one per line)</span>
                </label>
                <textarea
                  name="materials"
                  value={form.materials}
                  placeholder="Italian Marble&#10;Oak Wood&#10;Brass Fixtures"
                  rows={6}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#333] p-3 rounded focus:border-[#d4af37] focus:outline-none transition-colors resize-none font-mono text-sm"
                />
              </div>
            </div>
          </div>

          {/* Display Settings */}
          <div className="bg-[#121212] border border-[#222] p-6 lg:p-8 rounded-lg">
            <h2 className="text-xl lg:text-2xl font-serif mb-6 text-[#d4af37]">Display Settings</h2>
            <div>
              <label className="block text-sm text-[#999] mb-2 uppercase tracking-wider">
                Grid Height
              </label>
              <select
                name="heightClass"
                value={form.heightClass}
                onChange={handleChange}
                className="w-full md:w-1/2 lg:w-1/3 bg-[#1a1a1a] border border-[#333] p-3 rounded focus:border-[#d4af37] focus:outline-none transition-colors cursor-pointer"
              >
                <option value="row-span-1">Normal Height</option>
                <option value="row-span-2">Tall (2x)</option>
                <option value="row-span-3">Extra Tall (3x)</option>
              </select>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="bg-[#121212] border border-[#222] p-6 lg:p-8 rounded-lg">
            <h2 className="text-xl lg:text-2xl font-serif mb-6 text-[#d4af37]">Hero Image</h2>

            {!heroPreview ? (
              <label className="block cursor-pointer">
                <div className="border-2 border-dashed border-[#333] rounded-lg p-8 lg:p-12 text-center hover:border-[#d4af37] transition-colors">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-[#666]" />
                  <p className="text-[#999] mb-2">Click to upload hero image</p>
                  <p className="text-sm text-[#666]">PNG, JPG up to 10MB</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleHeroChange}
                  className="hidden"
                />
              </label>
            ) : (
              <div className="relative group">
                <img
                  src={heroPreview}
                  alt="Hero preview"
                  className="w-full h-64 lg:h-96 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={removeHeroImage}
                  className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Hero image ready</span>
                </div>
              </div>
            )}
          </div>

          {/* Gallery Images Section */}
          <div className="bg-[#121212] border border-[#222] p-6 lg:p-8 rounded-lg">
            <h2 className="text-xl lg:text-2xl font-serif mb-6 text-[#d4af37]">Gallery Images</h2>

            <label className="block cursor-pointer mb-6">
              <div className="border-2 border-dashed border-[#333] rounded-lg p-6 lg:p-8 text-center hover:border-[#d4af37] transition-colors">
                <ImageIcon className="w-10 h-10 mx-auto mb-3 text-[#666]" />
                <p className="text-[#999] mb-1">Click to upload gallery images</p>
                <p className="text-sm text-[#666]">Select multiple images</p>
              </div>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleGalleryChange}
                className="hidden"
              />
            </label>

            {galleryPreviews.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-[#999]">
                    {galleryPreviews.length} image{galleryPreviews.length !== 1 ? 's' : ''} selected
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryPreviews.map((preview, index) => (
                    <div key={index} className="relative group aspect-square">
                      <img
                        src={preview}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(index)}
                        className="absolute top-2 right-2 z-20 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>

                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center pointer-events-none">
                        <span className="text-white text-sm font-medium">
                          Image {index + 1}
                        </span>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t border-[#222]">
            <button
              type="button"
              onClick={() => {
                if (confirm("Are you sure you want to reset the form?")) {
                  setForm(initialState);
                  setHeroFile(null);
                  setHeroPreview(null);
                  setGalleryFiles([]);
                  setGalleryPreviews([]);
                }
              }}
              className="w-full sm:w-auto bg-[#1a1a1a] border border-[#333] text-white px-8 py-3 rounded hover:bg-[#222] transition-colors"
            >
              Reset Form
            </button>
            <button
              type="submit"
              disabled={loading || !form.title || !heroFile}
              className="w-full sm:w-auto bg-[#d4af37] text-black px-8 py-3 rounded font-medium hover:bg-[#c19d2f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Creating Project...
                </>
              ) : (
                "Create Project"
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}