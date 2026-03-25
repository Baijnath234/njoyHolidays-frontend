"use client";

import { motion } from "framer-motion";
import NavBar from "../components/Layout/nabar";

export default function ContactPage() {
  return (
    <>
      <section>
        <NavBar />
      </section>
      <section className="relative min-h-screen bg-[#0f172a] text-white overflow-hidden top-20">
        {/* Floating Gradients */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-300">
              Get in touch with Njoy Holidayz — we are here to help you plan
              your dream trip.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-xl p-8 rounded-xl"
            >
              <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>

              <p className="mb-3">
                📍 8 J.J ROAD, UPPER BAZRAR, Ranchi, JHARKHAND
              </p>
              <p className="mb-3">📞 +91 9334222448</p>
              <p className="mb-3">📧 holidayznjoy@gmail.com</p>

              <div className="mt-6 space-y-3">
                <a
                  href="tel:+919334222448"
                  className="block bg-black px-4 py-2 rounded-lg text-center"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/919334222448"
                  className="block bg-green-500 px-4 py-2 rounded-lg text-center"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-xl p-8 rounded-xl space-y-4"
            >
              <h2 className="text-2xl font-semibold mb-4">Send Enquiry</h2>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
              />

              <input
                type="text"
                placeholder="Phone"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
              />

              <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-3 rounded-lg font-semibold">
                Send Message
              </button>
            </motion.form>
          </div>

          {/* Google Map */}
          <div className="mt-16 rounded-xl overflow-hidden">
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
