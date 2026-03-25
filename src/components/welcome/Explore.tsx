"use client";

import React from "react";
import TripCard from "../TripCard";
import Image from "next/image";
import Maldives from "../../../public/asset/images/Maldives.jpg";
import Dubai3 from "../../../public/asset/images/Dubai3.jpg";
import Bali from "../../../public/asset/images/Bali.jpg";
import Singapore from "../../../public/asset/images/Singapore.jpg";
import Thailand from "../../../public/asset/images/Thailand.jpg";
import Goa from "../../../public/asset/images/Goa.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import {mockTrips} from "@/data/trips"

export default function Exploer() {

  console.log({mockTrips});
  
  const { theme } = useTheme();

  // 🎨 THEME STYLES
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

  const textMuted = theme === "light" ? "text-gray-600" : "text-gray-300";

  const overlayStyle = theme === "light" ? "bg-white/30" : "bg-black/40";

  const buttonStyle =
    theme === "light" ? "bg-blue-500 text-white" : "bg-orange-400 text-white";

  const destinations = [
    { name: "Maldives", image: Maldives },
    { name: "Dubai", image: Dubai3 },
    { name: "Bali", image: Bali },
    { name: "Singapore", image: Singapore },
    { name: "Thailand", image: Thailand },
    { name: "Goa", image: Goa },
  ];

  return (
    <>
      {/* SECTION 1 */}
      <section className={`relative py-28 overflow-hidden ${sectionBg}`}>
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* SERVICES */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Passport", desc: "Professional assistance..." },
              { title: "Visa", desc: "Expert visa processing..." },
              { title: "Air Tickets", desc: "Find cheapest flights..." },
              { title: "Holiday Packages", desc: "Custom packages..." },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`${cardStyle} backdrop-blur-xl border p-10 rounded-2xl shadow-xl`}
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className={`${textMuted} text-sm`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* ABOUT */}
          <motion.div>
            <span className="text-cyan-400 uppercase text-sm">Few Words</span>

            <h2 className="text-4xl font-bold mt-3 mb-6">
              About Njoy Holidayz
            </h2>

            <p className={`${textMuted} mb-8`}>
              At NjoyHolidayz we create unforgettable travel experiences...
            </p>

            <Link
              href="/about"
              className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              More About Us →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 (PACKAGES) */}
      <section className={`relative py-28 overflow-hidden ${sectionBg}`}>
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm mb-2">Explore Packages</p>

            <h2 className="text-4xl font-bold">Popular Tour Packages</h2>

            <p className={`${textMuted} mt-4`}>
              Explore the world’s most incredible destinations...
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {mockTrips.map((trip, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                className={`${cardStyle} backdrop-blur-xl border p-4 rounded-2xl shadow-xl`}
              >
                <TripCard trip={trip} />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-14">
            <Link href="/packages">
              <button className="bg-orange-400 text-white px-8 py-3 rounded-lg font-semibold">
                View More Packages →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className={`relative py-28 overflow-hidden ${sectionBg}`}>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">International Tours</h2>
            <p className={`${textMuted} mt-4`}>
              Discover breathtaking destinations...
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {destinations.map((item, index) => (
              <div
                key={index}
                className="relative h-[240px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

                <div className={`absolute inset-0 ${overlayStyle}`} />

                <div className="absolute bottom-4 left-4 text-white font-semibold">
                  {item.name}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="grid md:grid-cols-4 gap-10 text-center">
            {[120, 3500, 5000, 98].map((num, i) => (
              <div
                key={i}
                className={`${cardStyle} backdrop-blur-xl p-8 rounded-xl`}
              >
                <h3 className="text-4xl font-bold text-cyan-400">
                  <CountUp end={num} />+
                </h3>
                <p className={textMuted}>Stats</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}
