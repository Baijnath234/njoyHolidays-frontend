"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaPlaneDeparture,
  FaSyncAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { useTheme } from "@/app/context/ThemeContext";
import ContactForm from "@/components/common/ContactForm";

const visaServices = [
  {
    title: "Tourist Visa",
    description:
      "Assistance with tourist visa documentation, appointments, and applications.",
    icon: <FaPlaneDeparture />,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Business Visa",
    description:
      "Professional support for business visas and corporate travel documentation.",
    icon: <FaBriefcase />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Student Visa",
    description:
      "Guidance for university admissions, visa applications, and embassy interviews.",
    icon: <FaUserGraduate />,
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Visa Extension",
    description:
      "Extend your visa legally with proper documentation and expert support.",
    icon: <FaSyncAlt />,
    color: "from-orange-500 to-yellow-400",
  },
];

const Visa = () => {
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

  const inputStyle =
    theme === "light"
      ? "bg-white border border-gray-300 placeholder-gray-500 text-black"
      : "bg-white/5 border border-white/10 placeholder-gray-400 text-white";

  return (
    <section className={`relative py-28 overflow-hidden ${sectionBg}`}>

      {/* Floating gradient blobs */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 tracking-widest uppercase text-sm mb-2">
            Visa Consultancy
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Visa Consultancy Services
          </h2>

          <p className={`mt-4 ${textMuted} max-w-2xl mx-auto`}>
            Expert guidance for visa applications, renewals, and complex visa
            issues.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.08 }}
              href="tel:+919334222448"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-3 rounded-xl font-semibold shadow-lg"
            >
              📞 Call Us
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              href="https://wa.me/919334222448"
              className="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
            >
              💬 WhatsApp
            </motion.a>
          </div>
        </motion.div>

        {/* SERVICES */}
        <div className="mb-24">

          <div className="text-center mb-14">
            <h3 className="text-3xl font-semibold">Our Visa Services</h3>
            <p className={`${textMuted} mt-2`}>
              We handle your visa process professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaServices.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12, scale: 1.04 }}
                className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-white/20 to-white/5"
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition bg-gradient-to-br ${item.color}`}
                />

                {/* Card */}
                <div className={`${cardStyle} backdrop-blur-xl border p-6 rounded-2xl shadow-xl h-full`}>
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl mb-4 text-white text-xl bg-gradient-to-br ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className={`text-sm ${textMuted}`}>
                    {item.description}
                  </p>

                  <div className={`mt-5 h-1 w-0 group-hover:w-full transition-all bg-gradient-to-r ${item.color}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className={`${cardStyle} backdrop-blur-xl border p-10 rounded-2xl`}>
          <ContactForm
            title="Request Visa Consultation"
            buttonLabel="Request Consultation"
            showVisaFields
          />
        </div>

      </div>
    </section>
  );
};

export default Visa;