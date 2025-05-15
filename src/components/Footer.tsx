"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm pt-16 pb-8 relative">
      {/* Chat Button (left side) */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <button className="bg-gray-700 text-white px-3 py-2 rotate-[-90deg] origin-bottom-left rounded-t-md tracking-widest font-semibold hover:bg-gray-600">
          CHAT WITH US
        </button>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 border-b border-gray-700 pb-12">
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-4">TAILORED EXPERIENCES</h4>
            <ul className="space-y-2">
              <li>Adventure</li>
              <li>Celebration</li>
              <li>Culinary</li>
              <li>Family</li>
              <li>Ultraluxe</li>
              <li>Voyages</li>
              <li>Speciality</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-4">DESTINATIONS</h4>
            <ul className="space-y-2">
              <li>Ireland</li>
              <li>UK</li>
              <li>Africa</li>
              <li>Classic Europe</li>
              <li>Asia</li>
              <li>The Americas</li>
              <li>Exotic Islands</li>
              <li>Polar Regions</li>
              <li>Oceania</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-bold mb-4">PRIVATE RENTALS</h4>
            <ul className="space-y-2">
              <li>Castles</li>
              <li>Estates</li>
              <li>Villas & Houses</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-bold mb-4">NEWS & PRESS</h4>
            <ul className="space-y-2">
              <li>All</li>
              <li>Press</li>
              <li>News</li>
              <li>Newsletter</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="text-white font-bold mb-4">ABOUT US</h4>
            <ul className="space-y-2">
              <li>Why choose A&B</li>
              <li>Our Team</li>
              <li>Work with us</li>
            </ul>
          </div>
        </div>

        {/* Logo and Contact Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 space-y-8 md:space-y-0">
          {/* Left side */}
          <div className="text-center md:text-left">
            <div className="text-white text-2xl font-bold mb-4">NJOY HOLIDAY&apos;S</div>
            <div className="space-y-1">
              <p>sales@njoyholidays.com</p>
              <p>Ranchi Toll Free: +91 700454818</p>
              <p>Delhi Toll Free: +91 7004564818</p>
              <p>Gujrat: +91 7004564818</p>
            </div>
          </div>

          {/* Right side - Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn size={20} /></a>
            <a href="#" className="hover:text-white"><FaYoutube size={20} /></a>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-xs text-gray-500 space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Sustainability Policy</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
          <p>NJOY Holiday&apos;s ©2025 | Site by Ranchi</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white shadow-lg z-50"
      >
        ↑
      </button>
    </footer>
  );
}

// https://www.youtube.com/watch?v=mhQWPV8GUDw
// fixed bottom-10 right-10