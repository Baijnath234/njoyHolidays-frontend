"use client";

import React from "react";
import { motion } from "framer-motion";
import HotelCard from "../common/HotelCard";

import RoyalOrchid from "../../../../../public/asset/images/RoyalOrchid.jpg";
import Atlantis from "../../../../../public/asset/images/Atlantis (1).jpg";
import HanoiPearl from "../../../../../public/asset/images/Atlantis (2).jpg";
import { useTheme } from "@/app/context/ThemeContext";

const featuredHotels = [
  {
    image: RoyalOrchid,
    name: "Royal Orchid Metropole",
    city: "Mysore",
    rating: 4.5,
  },
  {
    image: Atlantis,
    name: "Atlantis The Palm",
    city: "Dubai",
    rating: 4.8,
  },
  {
    image: HanoiPearl,
    name: "Hanoi Pearl Hotel",
    city: "Hanoi",
    rating: 4.4,
  },
];

const HotelBooking = () => {
  const { theme } = useTheme();

  // 🎨 THEME UI ONLY
  const sectionBg =
    theme === "light"
      ? "bg-white text-black"
      : theme === "dark"
      ? "bg-[#0f172a] text-white"
      : theme === "ocean"
      ? "bg-gradient-to-r from-[#0f172a] to-[#0ea5e9] text-white"
      : theme === "sunset"
      ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white"
      : "bg-[#0f172a] text-white";

  const cardStyle =
    theme === "light"
      ? "bg-gray-100 border-gray-200 text-black"
      : "bg-white/10 border-white/10 text-white";

  const textMuted =
    theme === "light" ? "text-gray-600" : "text-gray-400";

  const borderStyle =
    theme === "light" ? "border-gray-300" : "border-white/20";

  return (
    <section className={`relative py-28 overflow-hidden ${sectionBg}`}>

      {/* Floating gradient blobs */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-2">
            Comfortable Stays
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Hotel Booking Assistance
          </h2>

          <p className={`${textMuted} max-w-2xl mx-auto mt-4`}>
            We help you find the best hotels worldwide based on your budget,
            location, and travel preferences.
          </p>
        </motion.div>

        {/* Hotel Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {featuredHotels.map((hotel, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${cardStyle} backdrop-blur-xl border p-4 rounded-2xl shadow-xl`}
            >
              <HotelCard hotel={hotel} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">

          <p className={`text-lg ${textMuted} mb-8`}>
            Need help finding the perfect hotel?
          </p>

          <div className="flex justify-center gap-6 flex-wrap">

            <motion.a
              whileHover={{ scale: 1.08 }}
              href="tel:+919334222448"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-3 rounded-xl font-semibold"
            >
              📞 Call Us
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              href="https://wa.me/919334222448"
              className="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold"
            >
              💬 WhatsApp
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              href="/contact"
              className={`px-8 py-3 rounded-xl ${borderStyle}`}
            >
              Send Enquiry
            </motion.a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HotelBooking;