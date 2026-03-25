"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import owner from "../../../../public/asset/images/owner.jpeg";
import Link from "next/link";
import NavBar from "../../../components/Layout/nabar";

export default function AboutPage() {
  return (
    <>
    <section>
      <NavBar/>
    </section>
      <section className="relative bg-[#0f172a] text-white overflow-hidden top-20">
        {/* Floating Background */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4">About Njoy Holidayz</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We don’t just plan trips — we create unforgettable travel
              experiences that turn your dreams into reality.
            </p>
          </motion.div>

          {/* Owner Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-3xl"
            >
              <Image
                src={owner} // 👉 Replace with your owner image
                alt="Owner"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-4">Meet the Founder</h2>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Founded by a passionate traveler and visionary entrepreneur,
                Njoy Holidayz was built with a mission to simplify travel and
                deliver memorable journeys.
              </p>

              <p className="text-gray-300 leading-relaxed">
                With years of experience in the travel industry, our founder
                believes that every trip should be seamless, affordable, and
                unforgettable.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-cyan-400">
                – Ketul Patel (Founder)
              </h3>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-10 mb-24">
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To provide seamless travel solutions with the best pricing,
                customer support, and personalized experiences for every
                traveler.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To become India’s most trusted travel partner, delivering
                exceptional journeys across the globe.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Best Pricing</h3>
                <p className="text-gray-300 text-sm">
                  Affordable travel packages without compromising quality.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
                <p className="text-gray-300 text-sm">
                  Dedicated travel experts available 24/7.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Trusted Service</h3>
                <p className="text-gray-300 text-sm">
                  Thousands of happy travelers trust our services.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Explore the World?
            </h2>

            <p className="text-gray-300 mb-6">
              Let us plan your next unforgettable journey.
            </p>

            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 rounded-xl text-black font-semibold hover:scale-105 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
