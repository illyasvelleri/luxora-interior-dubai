"use client";

import { useEffect, useState } from "react";
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Save, 
  X, 
  MessageSquare, 
  User, 
  Briefcase, 
  Building2,
  Image as ImageIcon,
  CheckCircle2,
  XCircle,
  Upload
} from "lucide-react";

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // ---------------- FETCH ALL ----------------
  const fetchTestimonials = async () => {
    const res = await fetch("/api/admin/testimonials");
    const data = await res.json();
    if (res.ok) setTestimonials(data.testimonials);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // ---------------- CREATE ----------------
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const res = await fetch("/api/admin/testimonials", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      setLoading(false);
      return;
    }

    e.target.reset();
    await fetchTestimonials();
    setLoading(false);
  };

  // ---------------- DELETE ----------------
  const handleDelete = async (id) => {
    if (!confirm("Delete this testimonial?")) return;

    await fetch(`/api/admin/testimonials/${id}`, {
      method: "DELETE",
    });

    fetchTestimonials();
  };

  // ---------------- TOGGLE ACTIVE ----------------
  const toggleActive = async (id) => {
    await fetch(`/api/admin/testimonials/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ toggleActive: true }),
    });

    fetchTestimonials();
  };

  // ---------------- UPDATE ----------------
  const handleUpdate = async (e, id) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch(`/api/admin/testimonials/${id}`, {
      method: "PATCH",
      body: formData,
    });

    setEditingId(null);
    fetchTestimonials();
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-4 sm:p-6 lg:p-10 pt-20 sm:pt-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-2">
            Manage Testimonials
          </h1>
          <p className="text-[#888] text-sm sm:text-base">
            {testimonials.length} testimonial{testimonials.length !== 1 ? 's' : ''} in your collection
          </p>
        </div>

        {/* ---------------- CREATE FORM ---------------- */}
        <div className="bg-[#121212] border border-[#222] rounded-lg p-6 lg:p-8 mb-8 lg:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#d4af37]/10 rounded-lg">
              <Plus className="w-5 h-5 text-[#d4af37]" />
            </div>
            <h2 className="text-xl lg:text-2xl font-serif text-[#d4af37]">Create New Testimonial</h2>
          </div>

          <form onSubmit={handleCreate} className="space-y-6">
            
            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              <div>
                <label className="block text-sm text-[#999] mb-2 uppercase tracking-wider flex items-center gap-2">
                  <User className="w-3.5 h-3.5" />
                  Name *
                </label>
                <input
                  name="name"
                  required
                  placeholder="Client name"
                  className="w-full bg-[#1a1a1a] border border-[#333] p-3 rounded focus:border-[#d4af37] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[#999] mb-2 uppercase tracking-wider flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  Position
                </label>
                <input
                  name="position"
                  placeholder="Job title"
                  className="w-full bg-[#1a1a1a] border border-[#333] p-3 rounded focus:border-[#d4af37] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[#999] mb-2 uppercase tracking-wider flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5" />
                  Company
                </label>
                <input
                  name="company"
                  placeholder="Company name"
                  className="w-full bg-[#1a1a1a] border border-[#333] p-3 rounded focus:border-[#d4af37] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Quote */}
            <div>
              <label className="block text-sm text-[#999] mb-2 uppercase tracking-wider flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5" />
                Quote *
              </label>
              <textarea
                name="quote"
                required
                placeholder="Enter testimonial quote..."
                rows={4}
                className="w-full bg-[#1a1a1a] border border-[#333] p-3 rounded focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm text-[#999] mb-2 uppercase tracking-wider flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                Profile Image
              </label>
              <label className="block cursor-pointer">
                <div className="border-2 border-dashed border-[#333] rounded-lg p-6 text-center hover:border-[#d4af37] transition-colors">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-[#666]" />
                  <p className="text-sm text-[#999]">Click to upload image</p>
                  <p className="text-xs text-[#666] mt-1">PNG, JPG up to 5MB</p>
                </div>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="hidden"
                />
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4 border-t border-[#222]">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-[#d4af37] text-black px-8 py-3 rounded font-medium hover:bg-[#c19d2f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Creating...
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    Create Testimonial
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* ---------------- LIST ---------------- */}
        {testimonials.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-[#121212] border border-[#222] rounded-lg p-12 max-w-md mx-auto">
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-[#666]" />
              </div>
              <h3 className="text-xl font-serif mb-2">No Testimonials Yet</h3>
              <p className="text-[#888]">Create your first testimonial using the form above</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 lg:space-y-6">
            {testimonials.map((t) => (
              <div
                key={t._id}
                className="bg-[#121212] border border-[#222] rounded-lg p-6 lg:p-8 hover:border-[#333] transition-all"
              >
                {editingId === t._id ? (
                  // ---------------- EDIT MODE ----------------
                  <form onSubmit={(e) => handleUpdate(e, t._id)} className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Edit2 className="w-5 h-5 text-[#d4af37]" />
                      <h3 className="text-lg font-serif text-[#d4af37]">Edit Testimonial</h3>
                    </div>

                    {/* Edit Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm text-[#999] mb-2">Name *</label>
                        <input
                          defaultValue={t.name}
                          name="name"
                          required
                          className="w-full bg-[#1a1a1a] border border-[#333] p-3 rounded focus:border-[#d4af37] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#999] mb-2">Position</label>
                        <input
                          defaultValue={t.position}
                          name="position"
                          className="w-full bg-[#1a1a1a] border border-[#333] p-3 rounded focus:border-[#d4af37] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#999] mb-2">Company</label>
                        <input
                          defaultValue={t.company}
                          name="company"
                          className="w-full bg-[#1a1a1a] border border-[#333] p-3 rounded focus:border-[#d4af37] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-[#999] mb-2">Quote *</label>
                      <textarea
                        defaultValue={t.quote}
                        name="quote"
                        required
                        rows={4}
                        className="w-full bg-[#1a1a1a] border border-[#333] p-3 rounded focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[#999] mb-2">Update Image</label>
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        className="w-full bg-[#1a1a1a] border border-[#333] p-3 rounded"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-[#222]">
                      <button
                        type="submit"
                        className="flex items-center gap-2 bg-[#d4af37] text-black px-6 py-2.5 rounded font-medium hover:bg-[#c19d2f] transition-colors"
                      >
                        <Save className="w-4 h-4" />
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingId(null)}
                        className="flex items-center gap-2 bg-[#1a1a1a] border border-[#333] text-white px-6 py-2.5 rounded hover:bg-[#222] transition-colors"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  // ---------------- VIEW MODE ----------------
                  <>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      {/* Client Info */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          {/* Avatar */}
                          {t.image?.url ? (
                            <img
                              src={t.image.url}
                              alt={t.name}
                              className="w-16 h-16 rounded-full object-cover border-2 border-[#222]"
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border-2 border-[#222] flex items-center justify-center">
                              <User className="w-8 h-8 text-[#666]" />
                            </div>
                          )}

                          {/* Name & Details */}
                          <div>
                            <h3 className="text-lg font-medium text-white mb-1">{t.name}</h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-[#888]">
                              {t.position && (
                                <span className="flex items-center gap-1">
                                  <Briefcase className="w-3.5 h-3.5" />
                                  {t.position}
                                </span>
                              )}
                              {t.company && (
                                <>
                                  <span>•</span>
                                  <span className="flex items-center gap-1">
                                    <Building2 className="w-3.5 h-3.5" />
                                    {t.company}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => toggleActive(t._id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-all ${
                            t.isActive
                              ? "bg-green-500/10 border border-green-500/20 text-green-500 hover:bg-green-500/20"
                              : "bg-[#1a1a1a] border border-[#333] text-[#666] hover:border-[#666]"
                          }`}
                        >
                          {t.isActive ? (
                            <>
                              <CheckCircle2 className="w-4 h-4" />
                              Active
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4" />
                              Inactive
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => setEditingId(t._id)}
                          className="flex items-center gap-2 bg-[#1a1a1a] border border-[#333] text-white px-4 py-2 rounded text-sm hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
                        >
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(t._id)}
                          className="flex items-center gap-2 bg-red-600/10 border border-red-600/20 text-red-500 px-4 py-2 rounded text-sm hover:bg-red-600/20 transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-6 p-6 bg-[#1a1a1a] rounded-lg border-l-4 border-[#d4af37]">
                      <MessageSquare className="w-5 h-5 text-[#d4af37] mb-3" />
                      <p className="text-[#ccc] leading-relaxed italic">"{t.quote}"</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}