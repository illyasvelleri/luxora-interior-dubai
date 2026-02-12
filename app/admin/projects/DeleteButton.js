"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteButton({ id }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const confirmed = confirm(
      "Are you sure? This will permanently delete the project."
    );

    if (!confirmed) return;

    try {
      setLoading(true);

      const res = await fetch(`/api/admin/projects/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        router.refresh();
      } else {
        alert("Delete failed");
      }
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}
