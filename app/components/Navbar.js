"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Home,
    Building2,
    LayoutGrid,
    Ruler,
    FolderOpen,
    Mail,
    Menu,
    X,
} from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: "/", icon: Home, label: "HOME" },                 
        { href: "/about", icon: LayoutGrid, label: "ABOUT US" }, 
        { href: "/services", icon: Ruler, label: "SPECIALIZATIONS" }, 
        { href: "/portfolio", icon: FolderOpen, label: "PORTFOLIO" }, 
        { href: "#contact", icon: Mail, label: "ENQUIRE" },      
    ];


    return (
        <>
            {/* ───────── NAVBAR ───────── */}
            <nav className="fixed top-0 left-0 right-0 z-40 bg-transparent backdrop-blur-sm">
                <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-20 py-6 sm:py-8 flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-lg sm:text-xl tracking-[0.4em] font-light"
                    >
                        LUXORA
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10 lg:gap-16 text-xs tracking-[0.25em]">
                        <Link href="/" className="hover:text-[#d4af37]">HOME</Link>
                        <Link href="/about" className="hover:text-[#d4af37]">ABOUT US</Link>
                        <Link href="/services" className="hover:text-[#d4af37]">SPECIALIZATIONS</Link>
                        <Link href="/portfolio" className="hover:text-[#d4af37]">PORTFOLIO</Link>
                        <Link href="/contact" className="hover:text-[#d4af37]">ENQUIRE</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden p-3 rounded-xl bg-white/70 backdrop-blur-xl border border-white/20"
                        aria-label="Open menu"
                    >
                        <Menu className="w-6 h-6 text-black" />
                    </button>
                </div>
            </nav>

            {/* ───────── MOBILE SIDEBAR ───────── */}
            <div
                className={`
          fixed inset-y-0 right-0 z-50
          w-20 sm:w-24
          bg-white/95 backdrop-blur-2xl
          border-l border-slate-100/60
          shadow-[-16px_0_40px_-12px_rgba(0,0,0,0.18)]
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
            >
                <div className="flex flex-col h-full items-center pt-6">

                    {/* Close */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="mb-10 p-3 rounded-xl hover:bg-slate-100"
                        aria-label="Close menu"
                    >
                        <X className="w-7 h-7 text-black" />
                    </button>

                    {/* Icon Nav */}
                    <nav className="flex flex-col items-center gap-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="group relative p-3.5 rounded-xl text-black hover:text-[#d4af37]"
                            >
                                <item.icon className="w-7 h-7" />

                                {/* Tooltip */}
                                <span
                                    className="
                    absolute right-full mr-4 top-1/2 -translate-y-1/2
                    px-4 py-2 bg-black/90 text-white text-sm rounded-lg
                    opacity-0 group-hover:opacity-100
                    whitespace-nowrap
                  "
                                >
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* ───────── BACKDROP ───────── */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                />
            )}
        </>
    );
}
