"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useTheme } from "@/app/context/ThemeContext";

import Maldives from "../../../public/asset/images/Maldives.jpg";
import Dubai3 from "../../../public/asset/images/Dubai3.jpg";
import Singapore from "../../../public/asset/images/Singapore.jpg";
import Thailand from "../../../public/asset/images/Thailand.jpg";
import Goa from "../../../public/asset/images/Goa.jpg";

export default function PopularDestinations() {
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

  const statsBg =
    theme === "light"
      ? "bg-gray-100 text-black"
      : "bg-[#020617] text-white";

  const cardStyle =
    theme === "light"
      ? "bg-white border-gray-200 text-black"
      : "bg-white/10 border-white/10 text-white";

  const textMuted =
    theme === "light" ? "text-gray-600" : "text-gray-400";

  const overlayStyle =
    theme === "light" ? "bg-white/30" : "bg-black/30";

  return (
    <>
      {/* DESTINATIONS */}
      <section className={`relative py-24 overflow-hidden ${sectionBg}`}>

        {/* Floating blobs */}
        <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-cyan-400 uppercase text-sm mb-2">
              Explore
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Popular Destinations
            </h2>

            <p className={`${textMuted} mt-4`}>
              Discover the world’s most beautiful travel destinations
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* Large */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="col-span-2 row-span-2 relative h-[420px] rounded-xl overflow-hidden group"
            >
              <Image
                src={Maldives}
                alt="Maldives"
                fill
                className="object-cover group-hover:scale-110 transition"
              />

              <div className={`absolute inset-0 ${overlayStyle}`} />

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold">Maldives</h3>
              </div>
            </motion.div>

            {/* Small cards */}
            {[{ img: Dubai3, name: "Dubai" },
              { img: Singapore, name: "Singapore" },
              { img: Thailand, name: "Thailand" },
              { img: Goa, name: "Goa" }].map((dest, i) => (

              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative h-[200px] rounded-xl overflow-hidden group"
              >
                <Image
                  src={dest.img}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition"
                />

                <div className={`absolute inset-0 ${overlayStyle}`} />

                <div className="absolute bottom-4 left-4 text-white font-semibold">
                  {dest.name}
                </div>
              </motion.div>

            ))}
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className={`relative py-24 overflow-hidden ${statsBg}`}>

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-4xl font-bold mb-16"
          >
            Every Year At NjoyHolidayz
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            {[5000, 3500, 1200, 98].map((num, i) => (
              <div
                key={i}
                className={`${cardStyle} backdrop-blur-xl p-8 rounded-xl border`}
              >
                <h3 className="text-4xl font-bold text-cyan-400">
                  <CountUp end={num} duration={3} />+
                </h3>
                <p className={`${textMuted} mt-2`}>Stats</p>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}