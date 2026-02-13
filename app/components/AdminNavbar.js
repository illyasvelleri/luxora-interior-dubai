// 'use client';

// import { useState } from "react";
// import Link from "next/link";
// import { Home, LayoutGrid, LogOut, Menu, X, Plus } from "lucide-react";
// import { useRouter, usePathname } from "next/navigation";

// export default function AdminNavbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();

//   const navItems = [
//     { href: "/admin/dashboard", icon: Home, label: "DASHBOARD" },
//     { href: "/admin/projects", icon: LayoutGrid, label: "PROJECTS" },
//     { href: "/admin/new-project", icon: Plus, label: "NEW PROJECT" },
//   ];

//   const handleLogout = async () => {
//     await fetch("/api/auth/logout", { method: "POST" });
//     router.push("/login");
//   };

//   const isActive = (href) => pathname?.startsWith(href);

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#222]">
//         <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
//           <Link href="/admin" className="text-white font-bold text-lg">ADMIN PANEL</Link>

//           {/* Desktop nav */}
//           <div className="hidden lg:flex gap-2">
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
//                   isActive(item.href) ? "bg-[#d4af37] text-black" : "text-[#999] hover:text-white hover:bg-[#1a1a1a]"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-[#1a1a1a]"
//             >
//               LOGOUT
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <button onClick={() => setIsOpen(true)} className="lg:hidden p-2 rounded-lg bg-[#1a1a1a]">
//             <Menu className="w-5 h-5 text-white" />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile sidebar */}
//       <div
//         className={`fixed inset-y-0 right-0 z-50 w-72 bg-[#0d0d0d] border-l border-[#222] shadow-2xl transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col h-full">
//           <div className="flex justify-between items-center px-6 py-5 border-b border-[#222]">
//             <div className="text-white font-bold">Admin Panel</div>
//             <button onClick={() => setIsOpen(false)}><X className="w-5 h-5 text-white" /></button>
//           </div>
//           <nav className="flex-1 flex flex-col px-4 py-6 space-y-2">
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`px-4 py-3 rounded-lg text-white hover:bg-[#1a1a1a]`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <button
//               onClick={() => {
//                 setIsOpen(false);
//                 handleLogout();
//               }}
//               className="px-4 py-3 rounded-lg text-red-400 hover:bg-[#1a1a1a]"
//             >
//               LOGOUT
//             </button>
//           </nav>
//         </div>
//       </div>

//       {/* Backdrop */}
//       {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 z-40 lg:hidden" />}
//     </>
//   );
// }
'use client';

import { useState } from "react";
import Link from "next/link";
import { Home, LayoutGrid, LogOut, Menu, X, Plus, Pen } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { href: "/admin/dashboard", icon: Home, label: "DASHBOARD" },
    { href: "/admin/projects", icon: LayoutGrid, label: "PROJECTS" },
    { href: "/admin/new-project", icon: Plus, label: "NEW PROJECT" },
    { href: "/admin/testimonials", icon: Pen, label: "TESTIMONIALS" },
  ];

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { 
        method: "POST",
        headers: { 'Content-Type': 'application/json' }
      });

      if (res.ok) {
        // ✅ 1. Tell Next.js to re-validate server components (clears cache)
        router.refresh(); 
        // ✅ 2. Send the user back to login
        router.push("/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const isActive = (href) => pathname === href;

  return (
    <>
      {/* Navbar spacer to prevent content from going under the fixed nav */}
      <div className="h-[72px]" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#222]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 py-6 flex justify-between items-center">
          <Link href="/admin/dashboard" className="text-white font-bold text-lg tracking-widest">
            LUXORA <span className="text-[#d4af37] font-light ml-2">ADMIN</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-widest transition-all duration-300 ${
                  isActive(item.href) 
                    ? "bg-[#d4af37] text-black" 
                    : "text-[#999] hover:text-white hover:bg-[#1a1a1a]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="w-[1px] h-6 bg-[#222] mx-2" />

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-widest text-red-500 hover:bg-red-500/10 transition-all"
            >
              <LogOut className="w-4 h-4" />
              LOGOUT
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="lg:hidden p-2 rounded-lg bg-[#1a1a1a] text-white"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72  bg-[#0d0d0d] border-l border-[#222] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center px-6 py-6 border-b border-[#222]">
            <div className="text-white font-bold tracking-widest">MENU</div>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6 text-white hover:rotate-90 transition-transform" />
            </button>
          </div>
          
          <nav className="flex-1 flex flex-col px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 px-4 py-4 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.href) 
                    ? "bg-[#d4af37] text-black" 
                    : "text-[#999] hover:text-white hover:bg-[#1a1a1a]"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
            
            <button
              onClick={() => {
                setIsOpen(false);
                handleLogout();
              }}
              className="flex items-center gap-4 px-4 py-4 rounded-lg text-red-400 hover:bg-red-500/10 transition-all mt-auto"
            >
              <LogOut className="w-5 h-5" />
              LOGOUT
            </button>
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300" 
        />
      )}
    </>
  );
}