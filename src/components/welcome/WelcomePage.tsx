"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Banner1 from "../../../public/asset/images/Dadra.jpg";
import { useTheme } from "@/app/context/ThemeContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const { theme } = useTheme();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // 🎨 THEME BACKGROUND
  const sectionBg =
    theme === "light"
      ? "bg-sky-100"
      : theme === "dark"
      ? "bg-[#0f172a]"
      : theme === "ocean"
      ? "bg-gradient-to-r from-[#0f172a] to-[#0ea5e9]"
      : theme === "sunset"
      ? "bg-gradient-to-r from-orange-400 to-pink-500"
      : "bg-[#0f172a]";

  // 🎨 TEXT COLOR
  // const textColor = theme === "light" ? "text-black" : "text-white";

  return (
    <section
      className={`${sectionBg} min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden transition-all duration-500`}
    >
      {/* ✈️ Plane Animation */}
      <motion.div
        initial={{ x: -300, y: 100, opacity: 0 }}
        animate={{
          x: [-300, 200, 600],
          y: [100, -50, -120],
          opacity: [1, 1, 1],
          rotate: [1, 10, 5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute z-20 pointer-events-none"
      >
        <Image
          src="/asset/images/plane.png"
          alt="plane"
          width={280}
          height={280}
          className="object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* 🌈 BLOBS */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-cyan-300/20 blur-3xl rounded-full animate-pulse" />

      {/* HERO CARD */}
      <div className="relative w-full max-w-6xl rounded-[32px] overflow-hidden shadow-2xl">
        
        {/* IMAGE */}
        <Image
          src={Banner1}
          alt="travel"
          className="w-full h-[500px] object-cover"
          priority
        />

        {/* OVERLAY */}
        <div
          className={`absolute inset-0 ${
            theme === "light"
              ? "bg-gradient-to-r from-white/40 to-transparent"
              : "bg-gradient-to-r from-black/40 via-black/10 to-transparent"
          }`}
        />

        {/* LIGHT EFFECT */}
        <div className="absolute top-10 left-10 w-[200px] h-[200px] bg-white/20 blur-2xl rounded-full animate-pulse" />

        {/* GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 1.02 }}
          className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 backdrop-blur-2xl border p-6 md:p-8 rounded-3xl max-w-sm md:max-w-md shadow-xl
          ${
            theme === "light"
              ? "bg-white/70 border-gray-200 text-black"
              : "bg-white/20 border-white/30 text-white"
          }`}
        >
          <h2 className="text-4xl font-bold leading-tight">
            Discover Your <br /> Next Escape
          </h2>

          <p className="mt-4 text-sm leading-relaxed">
            Find unforgettable destinations, curated experiences, and seamless
            travel planning — all in one place.
          </p>

          <button className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition">
            <Link href="/contact">BOOK NOW</Link>
          </button>
        </motion.div>

        {/* SEARCH BAR */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 flex items-center rounded-full px-2 py-2 shadow-xl gap-2
          ${
            theme === "light"
              ? "bg-white text-black"
              : "bg-white/90 text-black"
          }`}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search destinations..."
            className={`outline-none bg-transparent px-4 py-2 text-sm w-32 sm:w-48 md:w-64 placeholder-gray-600 ${
              theme === "light" ? "text-black" : "text-gray-700"
            }`}
          />

          <button 
            type="submit"
            className="bg-blue-600 p-2 rounded-full text-white hover:scale-110 transition"
          >
            <FaSearch size={14} />
          </button>
        </motion.form>

        {/* CURVE */}
        <div
          className={`hidden md:block absolute bottom-0 left-0 w-[200px] h-[140px] rounded-tr-[120px]
          ${theme === "light" ? "bg-white" : "bg-[#f4f1ee]"}`}
        />

        {/* FLOAT ICON */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 right-10 text-white/30 text-5xl"
        >
          ✈️
        </motion.div>
      </div>
    </section>
  );
}