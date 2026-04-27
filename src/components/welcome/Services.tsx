"use client";

import {
  GiIndianPalace
} from "react-icons/gi";
import { MdOutlineTravelExplore, MdOutlineFlightTakeoff } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";

const services = [
  {
    title: "Domestic Tour",
    description:
      "Explore India's most beautiful destinations with curated travel experiences.",
    icon: <GiIndianPalace size={28} />,
    link: "/domestic",
  },
  {
    title: "International Tour",
    description:
      "Discover global destinations with expertly planned tour packages.",
    icon: <MdOutlineTravelExplore size={28} />,
    link: "/international",
  },
  {
    title: "Flight Booking",
    description:
      "Affordable domestic and international flight bookings with flexible options.",
    icon: <MdOutlineFlightTakeoff size={28} />,
    link: "/flight",
  },
  {
    title: "Hotel Booking",
    description:
      "Book premium hotels and resorts tailored to your comfort and budget.",
    icon: <FaHotel size={28} />,
    link: "/hotels",
  },
  {
    title: "Visa Assistance",
    description:
      "Professional support for tourist and business visa applications.",
    icon: <RiVisaLine size={28} />,
    link: "/visa",
  },
  {
    title: "About Us",
    description:
      "Learn about our travel expertise and commitment to unforgettable journeys.",
    icon: <FcAbout size={28} />,
    link: "/about",
  },
];

export default function Services() {
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
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase text-sm mb-2">
            What We Offer
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Our Travel Services
          </h2>

          <p className={`${textMuted} max-w-2xl mx-auto mt-4`}>
            From flights to visa support, we provide everything you need
            for a seamless travel experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">

          {services.map((service, index) => (
            <div
              key={index}
              className="transition-transform duration-200 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <Link
                href={service.link}
                className={`block ${cardStyle} backdrop-blur-xl border p-10 rounded-2xl shadow-xl`}
              >
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className={`${textMuted} text-sm leading-relaxed`}>
                  {service.description}
                </p>
              </Link>
            </div>
          ))}

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-10 text-center">

          {[5000, 3500, 98].map((num, i) => (
            <div
              key={i}
              className={`${cardStyle} backdrop-blur-xl border p-8 rounded-xl`}
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {num}+
              </h3>
              <p className={`${textMuted} mt-2`}>
                {i === 0
                  ? "Happy Travelers"
                  : i === 1
                  ? "Trips Organized"
                  : "Customer Satisfaction"}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}