"use client";

import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";

export default function ContactCTA() {
  const { theme } = useTheme();

  // 🎨 THEME UI
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
    theme === "light" ? "text-gray-600" : "text-gray-300";

  const socialStyle =
    theme === "light"
      ? "bg-white border-gray-300 text-black"
      : "bg-white/10 border-white/20 text-white";

  return (
    <section className={`relative py-28 overflow-hidden ${sectionBg}`}>

      {/* Gradient blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Plan Your Dream Trip Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`mb-12 text-lg ${textMuted}`}
        >
          Contact our travel experts and start your journey with
          <span className="text-cyan-400 font-semibold">
            {" "}Njoy Holidayz
          </span>
        </motion.p>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className={`${cardStyle} backdrop-blur-xl border p-10 rounded-3xl shadow-xl`}
        >

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">

            <motion.a
              whileHover={{ scale: 1.08 }}
              href="tel:+919334222448"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-3 rounded-xl font-semibold shadow-lg"
            >
              📞 Call Us
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              href="/contact"
              className={`px-8 py-3 rounded-xl font-semibold shadow-lg ${
                theme === "light"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              Contact Us
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              href="https://wa.me/919334222448"
              className="flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
            >
              <FaWhatsapp />
              WhatsApp
            </motion.a>

          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">

            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.facebook.com/Njoy-Holidayz-Tours-and-Visa-Services-106747764361698/"
              className={`${socialStyle} backdrop-blur-lg border p-4 rounded-full`}
            >
              <FaFacebookF size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://mobile.twitter.com/njoy_holidayz"
              className={`${socialStyle} backdrop-blur-lg border p-4 rounded-full`}
            >
              <FaTwitter size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.instagram.com/njoy_holidayz"
              className={`${socialStyle} backdrop-blur-lg border p-4 rounded-full`}
            >
              <FaInstagram size={20} />
            </motion.a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}