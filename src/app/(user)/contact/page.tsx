"use client";

import { motion } from "framer-motion";
import NavBar from "../../../components/Layout/nabar";
import ContactForm from "@/components/common/ContactForm";
import { useTheme } from "@/app/context/ThemeContext";

export default function ContactPage() {
  const { theme } = useTheme();

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
      ? "bg-gray-100 border border-gray-200 text-black"
      : "bg-white/10 border border-white/10 text-white";

  const textMuted = theme === "light" ? "text-gray-600" : "text-gray-300";
  const callButton =
    theme === "light"
      ? "bg-gray-900 text-white hover:bg-gray-800"
      : "bg-white text-black hover:bg-gray-100";

  return (
    <>
      <section>
        <NavBar />
      </section>

      <section
        className={`relative min-h-screen overflow-hidden top-20 transition-all duration-500 ${sectionBg}`}
      >
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
            <p className={`${textMuted} max-w-2xl mx-auto`}>
              Get in touch with Njoy Holidayz - we are here to help you plan
              your dream trip.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${cardStyle} backdrop-blur-xl p-6 sm:p-8 rounded-xl`}
            >
              <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>

              <div className={`space-y-3 ${textMuted}`}>
                <p>
                  <span className="font-semibold">Address:</span> 8 J.J Road,
                  Upper Bazar, Ranchi, Jharkhand
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +91 9334222448
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  holidayznjoy@gmail.com
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href="tel:+919334222448"
                  className={`block px-4 py-2 rounded-lg text-center font-semibold transition ${callButton}`}
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/919334222448"
                  className="block bg-green-500 px-4 py-2 rounded-lg text-center text-white font-semibold hover:bg-green-600 transition"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>

            <ContactForm />
          </div>

          <div className="mt-16 rounded-xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps?q=Ranchi,upper-bazar,8-JJ-Road&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
