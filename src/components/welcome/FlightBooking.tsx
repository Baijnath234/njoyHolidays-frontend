"use client";

import { FaPlaneDeparture, FaClock, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";

const services = [
  {
    icon: <FaPlaneDeparture size={30} />,
    title: "Domestic Flights",
    text: "Book affordable domestic flights across India with flexible schedules and trusted airlines.",
  },
  {
    icon: <FaClock size={30} />,
    title: "International Flights",
    text: "Get the best international flight deals with convenient connections and premium airlines.",
  },
  {
    icon: <FaHeadset size={30} />,
    title: "24/7 Booking Support",
    text: "Our experts help with bookings, rescheduling, cancellations, and travel advice.",
  },
];

export default function FlightBooking() {
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
            Air Travel Assistance
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Flight Booking Support
          </h2>

          <p className={`${textMuted} max-w-2xl mx-auto mt-4`}>
            We help you find the best flight options based on your schedule,
            destination, and budget.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">

          {services.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${cardStyle} backdrop-blur-xl border p-10 rounded-2xl text-center shadow-xl`}
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className={`${textMuted} text-sm`}>
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center">

          <p className={`text-lg ${textMuted} mb-8`}>
            Need help booking your flight?
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
}