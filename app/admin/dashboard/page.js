import connectDB from "@/lib/db";
import Project from "@/models/Project";
import Link from "next/link";
import {
  LayoutGrid,
  Plus,
  Pen,
  TrendingUp,
  Calendar,
  Eye,
  Image as ImageIcon,
  Clock,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

export default async function AdminDashboard() {
  await connectDB();

  const projects = await Project.find().sort({ createdAt: -1 }).lean();
  const recentProjects = projects.slice(0, 6);

  // Calculate stats
  const totalProjects = projects.length;
  const currentYear = new Date().getFullYear();
  const thisYearProjects = projects.filter(p => p.year === currentYear.toString()).length;
  const totalImages = projects.reduce((sum, p) => sum + (p.gallery?.length || 0), 0);

  // Get categories count
  const categories = {};
  projects.forEach(p => {
    if (p.category) {
      categories[p.category] = (categories[p.category] || 0) + 1;
    }
  });

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-4 sm:p-6 lg:p-10 pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-2">
            Dashboard
          </h1>
          <p className="text-[#888] text-sm sm:text-base">
            Welcome back! Here's your portfolio overview
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">

          {/* Total Projects */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-[#222] rounded-lg p-6 hover:border-[#d4af37] transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-[#d4af37]/10 rounded-lg">
                <LayoutGrid className="w-6 h-6 text-[#d4af37]" />
              </div>
              <span className="text-xs text-[#666] font-medium">TOTAL</span>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold">{totalProjects}</div>
              <div className="text-sm text-[#888]">Total Projects</div>
            </div>
          </div>

          {/* This Year */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-[#222] rounded-lg p-6 hover:border-[#d4af37] transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-xs text-[#666] font-medium">{currentYear}</span>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold">{thisYearProjects}</div>
              <div className="text-sm text-[#888]">This Year</div>
            </div>
          </div>

          {/* Total Images */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-[#222] rounded-lg p-6 hover:border-[#d4af37] transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <ImageIcon className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-xs text-[#666] font-medium">GALLERY</span>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold">{totalImages}</div>
              <div className="text-sm text-[#888]">Total Images</div>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-[#222] rounded-lg p-6 hover:border-[#d4af37] transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Sparkles className="w-6 h-6 text-purple-500" />
              </div>
              <span className="text-xs text-[#666] font-medium">TYPES</span>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold">{Object.keys(categories).length}</div>
              <div className="text-sm text-[#888]">Categories</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Recent Projects */}
          <div className="lg:col-span-2 bg-[#121212] border border-[#222] rounded-lg p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl lg:text-2xl font-serif">Recent Projects</h2>
              <Link
                href="/admin/projects"
                className="text-sm text-[#d4af37] hover:text-[#c19d2f] flex items-center gap-1"
              >
                View All
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {recentProjects.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <LayoutGrid className="w-8 h-8 text-[#666]" />
                  </div>
                  <p className="text-[#888] mb-4">No projects yet</p>
                  <Link
                    href="/admin/new-project"
                    className="inline-flex items-center gap-2 bg-[#d4af37] text-black px-6 py-2.5 rounded font-medium hover:bg-[#c19d2f] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Create First Project
                  </Link>
                </div>
              ) : (
                recentProjects.map((project) => (
                  <Link
                    key={project._id}
                    href={`/admin/projects/${project._id}`}
                    className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg hover:bg-[#222] transition-all group"
                  >
                    {/* Project Image */}
                    <div className="w-20 h-20 bg-[#0d0d0d] rounded-lg overflow-hidden flex-shrink-0">
                      {project.image?.url ? (
                        <img
                          src={project.image.url}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <LayoutGrid className="w-6 h-6 text-[#333]" />
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-white group-hover:text-[#d4af37] transition-colors truncate">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1 text-xs text-[#666]">
                        {project.category && <span>{project.category}</span>}
                        {project.year && <span>• {project.year}</span>}
                        {project.gallery?.length > 0 && (
                          <span>• {project.gallery.length} images</span>
                        )}
                      </div>
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-[#666] group-hover:text-[#d4af37] transition-colors" />
                  </Link>
                ))
              )}
            </div>
          </div>

          {/* Quick Actions & Categories */}
          <div className="space-y-6">

            {/* Quick Actions */}
            <div className="bg-[#121212] border border-[#222] rounded-lg p-6">
              <h2 className="text-xl font-serif mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  href="/admin/projects/new"
                  className="flex items-center gap-3 p-4 bg-[#d4af37] text-black rounded-lg hover:bg-[#c19d2f] transition-all group"
                >
                  <Plus className="w-5 h-5" />
                  <span className="font-medium">New Project</span>
                </Link>
                <Link
                  href="/admin/projects"
                  className="flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-lg hover:bg-[#222] transition-all group"
                >
                  <LayoutGrid className="w-5 h-5 text-[#d4af37]" />
                  <span className="font-medium text-white">Manage Projects</span>
                </Link>
                <Link
                  href="/admin/testimonials"
                  className="flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-lg hover:bg-[#222] transition-all group"
                >
                  <Pen className="w-5 h-5 text-[#d4af37]" />
                  <span className="font-medium text-white">Manage Testimonials</span>
                </Link>
              </div>
            </div>

            {/* Categories Breakdown */}
            {Object.keys(categories).length > 0 && (
              <div className="bg-[#121212] border border-[#222] rounded-lg p-6">
                <h2 className="text-xl font-serif mb-6">Categories</h2>
                <div className="space-y-3">
                  {Object.entries(categories)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 5)
                    .map(([category, count]) => (
                      <div key={category} className="flex items-center justify-between">
                        <span className="text-sm text-[#999]">{category}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#d4af37] rounded-full"
                              style={{ width: `${(count / totalProjects) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-white w-6 text-right">
                            {count}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Portfolio Status */}
            <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#d4af37]/5 border border-[#d4af37]/20 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white mb-1">Portfolio Ready</h3>
                  <p className="text-sm text-[#999] leading-relaxed">
                    Your portfolio is looking great! Keep adding projects to showcase your work.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}