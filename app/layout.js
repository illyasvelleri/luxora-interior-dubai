import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  title: "About LUXORA | Institutional Interior Architecture & Fit-Out UAE",
  description:
    "LUXORA is a Dubai-based institutional interior architecture and fit-out consultancy delivering airports, government buildings, sacred architecture, and large-scale commercial environments across the UAE.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0d0d0d",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`
          ${playfair.variable}
          ${inter.variable}
          antialiased
          bg-[#0d0d0d]
          text-[#e8e8e8]
        `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
