"use client";

import { FaMoneyBillWave, FaHeadset, FaGlobe, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useTheme } from "@/app/context/ThemeContext";

const features = [
  {
    icon: <FaMoneyBillWave size={28} />,
    title: "Best Price Guarantee",
    text: "We offer the most competitive travel prices.",
  },
  {
    icon: <FaHeadset size={28} />,
    title: "24/7 Support",
    text: "Our travel experts are available anytime.",
  },
  {
    icon: <FaGlobe size={28} />,
    title: "Worldwide Destinations",
    text: "Explore destinations across the globe.",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Happy Travellers",
    number: 5000,
    text: "Thousands of customers trust our services.",
  },
];

export default function WhyChooseUs() {
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

      {/* Floating blobs */}
      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase text-sm mb-2">
            Why Travelers Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose Njoy Holidayz
          </h2>

          <p className={`${textMuted} mt-4 max-w-2xl mx-auto`}>
            We deliver unforgettable travel experiences with premium services,
            expert planning, and a passion for exploration.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`${cardStyle} backdrop-blur-xl border p-8 rounded-2xl shadow-xl text-center`}
            >

              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black">

                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {item.icon}
                </motion.div>

              </div>

              {/* Title */}
              <h3 className="font-semibold text-xl mb-3">
                {item.title}
              </h3>

              {/* Counter */}
              {item.number && (
                <div className="text-3xl font-bold text-cyan-400 mb-3">
                  <CountUp end={item.number} duration={3} />+
                </div>
              )}

              {/* Text */}
              <p className={`${textMuted} text-sm leading-relaxed`}>
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}