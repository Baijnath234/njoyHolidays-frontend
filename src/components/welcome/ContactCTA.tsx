"use client";

import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

export default function ContactCTA() {
  return (
    <section className="py-16 bg-[#0dbeff]/100 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Plan Your Dream Trip Today</h2>
        <p className="mb-8 text-lg">
          Contact our travel experts and start your journey with Njoy Holidays.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="tel:+919334222448"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
          >
            📞 Call Us
          </a>
          <a
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Contact Us
          </a>
          <a
            href="https://Wa.me/+919334222448"
            className="flex justify-center bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold gap-2"
          >
            <FaWhatsapp size={20} color="green" />
            WhatsApp
          </a>
        </div>

        <div className="flex md:flex-row justify-center gap-4 mt-10">
          <a
            href="https://www.facebook.com/Njoy-Holidayz-Tours-and-Visa-Services-106747764361698/"
            className="hover:text-white"
          >
            <FaFacebookF size={30} />
          </a>
          <a
            href="https://mobile.twitter.com/njoy_holidayz"
            className="hover:text-white"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.instagram.com/njoy_holidayz?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
            className="hover:text-white"
          >
            <FaInstagram size={30} />
          </a>
          {/*  */}
        </div>
      </div>
    </section>
  );
}
