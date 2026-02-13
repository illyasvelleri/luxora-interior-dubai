import connectDB from "@/lib/db";
import Project from "@/models/Project";
import DeleteButton from "./DeleteButton";
import FeaturedToggleButton from "./FeaturedToggleButton";

import { Plus, Search, Filter, Grid3x3, List, Calendar, Tag } from "lucide-react";
import Link from "next/link";

export default async function AdminProjectsPage() {
  await connectDB();
  const projects = await Project.find().sort({ createdAt: -1 }).lean();

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-4 sm:p-6 lg:p-10 pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="mb-8 lg:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-2">
                Manage Projects
              </h1>
              <p className="text-[#888] text-sm sm:text-base">
                {projects.length} project{projects.length !== 1 ? 's' : ''} in portfolio
              </p>
            </div>

            <Link
              href="/admin/projects/new"
              className="inline-flex items-center justify-center gap-2 bg-[#d4af37] text-black px-6 py-3 rounded font-medium hover:bg-[#c19d2f] transition-colors"
            >
              <Plus className="w-5 h-5" />
              New Project
            </Link>
          </div>

        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-[#121212] border border-[#222] rounded-lg p-12 max-w-md mx-auto">
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Grid3x3 className="w-8 h-8 text-[#666]" />
              </div>
              <h3 className="text-xl font-serif mb-2">No Projects Yet</h3>
              <p className="text-[#888] mb-6">Start building your portfolio by adding your first project</p>
              <Link
                href="/admin/new-project"
                className="inline-flex items-center justify-center gap-2 bg-[#d4af37] text-black px-6 py-3 rounded font-medium hover:bg-[#c19d2f] transition-colors"
              >
                <Plus className="w-5 h-5" />
                Create First Project
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-[#121212] border border-[#222] rounded-lg overflow-hidden hover:border-[#d4af37] transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-[#1a1a1a]">
                  {project.image?.url ? (
                    <img
                      src={project.image.url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Grid3x3 className="w-12 h-12 text-[#333]" />
                    </div>
                  )}


                  <FeaturedToggleButton
                    id={project._id.toString()}
                    isFeatured={project.isFeatured}
                  />


                  {/* Overlay Badge */}
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    {project.heightClass === 'row-span-3' ? 'XL' : project.heightClass === 'row-span-2' ? 'L' : 'M'}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5 space-y-3">
                  {/* Title */}
                  <h2 className="text-lg font-serif font-semibold line-clamp-1 group-hover:text-[#d4af37] transition-colors">
                    {project.title}
                  </h2>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#888]">
                    {project.category && (
                      <span className="flex items-center gap-1">
                        <Tag className="w-3.5 h-3.5" />
                        {project.category}
                      </span>
                    )}
                    {project.year && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.year}
                      </span>
                    )}
                  </div>

                  {/* Additional Details */}
                  {(project.location || project.client) && (
                    <div className="flex flex-wrap gap-2 text-xs">
                      {project.location && (
                        <span className="bg-[#1a1a1a] px-2 py-1 rounded">
                          📍 {project.location}
                        </span>
                      )}
                      {project.client && (
                        <span className="bg-[#1a1a1a] px-2 py-1 rounded line-clamp-1">
                          👤 {project.client}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Description Preview */}
                  {project.description && (
                    <p className="text-sm text-[#666] line-clamp-2">
                      {project.description}
                    </p>
                  )}

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-xs text-[#666] pt-2 border-t border-[#222]">
                    {project.gallery?.length > 0 && (
                      <span>📸 {project.gallery.length} images</span>
                    )}
                    {project.services?.length > 0 && (
                      <span>⚙️ {project.services.length} services</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-3 pt-4">
                    <Link
                      href={`/admin/projects/${project._id}`}
                      className="flex-1 text-center bg-[#1a1a1a] border border-[#333] text-white px-4 py-2 rounded text-sm hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
                    >
                      Edit Project
                    </Link>

                    <DeleteButton id={project._id.toString()} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination (if needed in future) */}
        {projects.length > 0 && (
          <div className="mt-12 flex justify-center">
            <div className="bg-[#121212] border border-[#222] rounded-lg px-6 py-3 text-sm text-[#888]">
              Showing all {projects.length} projects
            </div>
          </div>
        )}

      </div>
    </div>
  );
}