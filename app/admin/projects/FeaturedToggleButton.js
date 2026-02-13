"use client";

import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FeaturedToggleButton({ id, isFeatured }) {
  const router = useRouter();
  const [featured, setFeatured] = useState(isFeatured);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    if (loading) return;

    setLoading(true);

    const res = await fetch(`/api/admin/projects/${id}/favorite`, {
      method: "PATCH",
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Something went wrong");
      setLoading(false);
      return;
    }

    // 🔥 Instant UI update
    setFeatured(data.isFeatured);

    setLoading(false);

    // Keep server component in sync
    router.refresh();
  };

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className={`absolute top-3 left-3 backdrop-blur-sm p-2 rounded-full transition-all duration-200 ${
        featured ? "bg-yellow-500/20" : "bg-black/70"
      } ${loading ? "opacity-60 cursor-not-allowed" : "hover:scale-110"}`}
    >
      <Star
        className={`w-5 h-5 transition-colors duration-200 ${
          featured
            ? "text-yellow-400 fill-yellow-400"
            : "text-white"
        }`}
      />
    </button>
  );
}
