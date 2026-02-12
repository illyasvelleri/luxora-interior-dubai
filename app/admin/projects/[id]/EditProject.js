

'use client'

import { useRouter } from "next/navigation";
import { Upload, X, ImageIcon, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function EditProject({ project }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const initialState = {
        ...project,
        services: project.services?.join("\n") || "",
        materials: project.materials?.join("\n") || "",
    };

    const [form, setForm] = useState({
        ...project,
        services: project.services?.join("\n") || "",
        materials: project.materials?.join("\n") || "",
    });

    const [heroPreview, setHeroPreview] = useState(project.image?.url);
    const [galleryPreviews, setGalleryPreviews] = useState(
        project.gallery?.map(g => g.url) || []
    );

    const [heroFile, setHeroFile] = useState(null);
    const [galleryFiles, setGalleryFiles] = useState([]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleHeroChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setHeroFile(file);
        setHeroPreview(URL.createObjectURL(file));
    };

    const removeHeroImage = () => {
        setHeroFile(null);
        setHeroPreview(null);
    };

    const handleGalleryChange = (e) => {
        const files = Array.from(e.target.files);
        if (!files.length) return;

        setGalleryFiles(files);
        setGalleryPreviews(files.map((file) => URL.createObjectURL(file)));
    };

    const removeGalleryImage = (index) => {
        const updatedPreviews = [...galleryPreviews];
        const updatedFiles = [...galleryFiles];

        updatedPreviews.splice(index, 1);
        updatedFiles.splice(index, 1);

        setGalleryPreviews(updatedPreviews);
        setGalleryFiles(updatedFiles);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();

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

        if (heroFile) formData.append("image", heroFile);
        galleryFiles.forEach((file) => formData.append("images", file));

        const res = await fetch(`/api/admin/projects/${project._id}`, {
            method: "PUT",
            body: formData,
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
            alert("Update failed");
            setLoading(false);
            return;
        }

        alert("Project updated successfully");
        router.refresh();
        setLoading(false);

    };

    return (
        <div className="min-h-screen bg-[#0d0d0d] text-white p-4 sm:p-6  pt-36 sm:pt-24">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8 lg:mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-2">Edit Project</h1>
                    <p className="text-[#888] text-sm sm:text-base">Update your portfolio project</p>
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
                                    setHeroPreview(project.image?.url || null);
                                    setGalleryFiles([]);
                                    setGalleryPreviews(project.gallery?.map(g => g.url) || []);
                                }
                            }}
                            className="w-full sm:w-auto bg-[#1a1a1a] border border-[#333] text-white px-8 py-3 rounded hover:bg-[#222] transition-colors"
                        >
                            Reset Form
                        </button>
                        <button
                            type="submit"
                            disabled={loading || !form.title}
                            className="w-full sm:w-auto bg-[#d4af37] text-black px-8 py-3 rounded font-medium hover:bg-[#c19d2f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                    Updating Project...
                                </>
                            ) : (
                                "Update Project"
                            )}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}