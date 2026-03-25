"use client";

import Image from "next/image";
import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Images from "../../../../../public/asset/images/NjoyHolidays_logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-300">
      {/* 🔥 Top CTA */}
      <div className="px-6 py-12 border-b border-white/10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Plan Your Next Trip ✈️
        </h2>
        <p className="text-gray-400 mb-6 text-sm md:text-base">
          Discover destinations, hotels & visa services—all in one place.
        </p>

        <button className="bg-[#0dbeff] hover:bg-[#0099cc] px-6 py-3 rounded-full text-white font-medium transition">
          Explore Packages
        </button>
      </div>

      {/* 🔥 Main Footer */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        {/* Mobile: stacked | Desktop: grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="w-32 h-20 relative mb-4">
              <Image
                src={Images.src}
                alt="logo"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-sm text-gray-400 mb-4">
              Your trusted travel partner for tours, hotels, and visa services.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="p-2 bg-white/10 rounded-full hover:bg-[#0dbeff] transition cursor-pointer"
                  >
                    <Icon size={14} />
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Packages</li>
              <li className="hover:text-white cursor-pointer">Hotels</li>
              <li className="hover:text-white cursor-pointer">Visa Services</li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Top Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li>Dubai</li>
              <li>Maldives</li>
              <li>Thailand</li>
              <li>Europe</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Ranchi, Jharkhand</li>
              <li>+91 9334222448</li>
              <li>holidayznjoy@gmail.com</li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://Wa.me/+919334222448"
              className="inline-block mt-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white text-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* 🔥 Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 Njoy Holidayz. All rights reserved.</p>

          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">Terms</span>
          </div>
        </div>
      </div>

      {/* 🔥 Floating Buttons (Mobile Optimized) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {/* WhatsApp Button */}
        <div className="group relative flex items-center">
          {/* Label */}
          <span className="absolute right-14 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full shadow">
            Chat with us
          </span>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-40 animate-pulse" />

          {/* Button */}
          <a
            href="https://Wa.me/+919334222448"
            className="relative bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <FaWhatsapp className="text-white text-lg" />
          </a>
        </div>

        {/* Scroll to Top */}
        <div className="group relative flex items-center">
          {/* Label */}
          <span className="absolute right-14 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full shadow">
            Back to top
          </span>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-[#0dbeff] blur-xl opacity-40 animate-pulse" />

          {/* Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative bg-gradient-to-r from-[#0dbeff] to-[#0077ff] p-4 rounded-full shadow-lg text-white transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
