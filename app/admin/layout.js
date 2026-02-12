// // app/admin/layout.js
// import { redirect } from 'next/navigation';
// import { cookies } from 'next/headers';
// import { verifyToken } from '@/lib/auth';

// export default async function AdminLayout({ children }) {
//   // Await cookies() because it's async in server components
//   const cookieStore = await cookies();
//   const token = cookieStore.get('admin_token')?.value; // now .value is valid

//   if (!token) {
//     redirect('/login');
//   }

//   const isValid = await verifyToken(token);

//   if (!isValid) {
//     redirect('/login');
//   }

//   return (
//     <div className="min-h-screen bg-gray-950">
//       <header className="bg-black border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <h1 className="text-xl font-bold text-white">Admin Panel</h1>
//           <form action="/api/auth/logout" method="POST">
//             <button
//               type="submit"
//               className="text-sm text-gray-400 hover:text-white transition-colors"
//             >
//               Logout
//             </button>
//           </form>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 py-8">
//         {children}
//       </main>
//     </div>
//   );
// }
// app/admin/layout.js
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import AdminNavbar from "../components/AdminNavbar";
import { Playfair_Display, Inter } from "next/font/google";

// 1. Force dynamic rendering to prevent "logged out" users from seeing cached admin data
export const revalidate = 0;
export const dynamic = 'force-dynamic';

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Admin Panel | LUXORA",
  description: "Admin panel for managing LUXORA interior architecture projects",
};

export default async function AdminLayout({ children }) {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("admin_token");
  const token = tokenCookie?.value;

  // 2. Server-side protection
  if (!token) {
    redirect("/login");
  }

  const isValid = await verifyToken(token);
  if (!isValid) {
    redirect("/login");
  }

  const fontClasses = `${playfair.variable} ${inter.variable}`;

  return (
    // 3. Container-only wrapper (No <html> or <body> tags here)
    <div className={`${fontClasses} min-h-screen bg-[#0d0d0d] text-[#e8e8e8] antialiased`}>
      <AdminNavbar fontClasses={fontClasses} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}