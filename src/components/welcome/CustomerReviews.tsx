"use client";

import Slider from "react-slick";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";

const reviews = [
  {
    name: "Star World Team",
    text: "Best travel agent for all India tour packages. Service and co-operation with staff is very positive.",
  },
  {
    name: "Pooja Kushwaha",
    text: "Everything went perfect on the trip! We had no problems with transportation, hotels and cruise.",
  },
  {
    name: "Nitesham",
    text: "Great experience and within budget. From beginning to end the holiday was perfect.",
  },
  {
    name: "Rini Mathew",
    text: "Thank you so much for a nice trip. Nice experience with Rover Holidays.",
  },
];

export default function Testimonials() {
  const { theme } = useTheme();

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // 🎨 THEME UI
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
      : "bg-white/5 border-white/10 text-white";

  const textMuted =
    theme === "light" ? "text-gray-600" : "text-gray-400";

  const headingColor =
    theme === "light" ? "text-black" : "text-white";

  return (
    <section className={`relative py-24 overflow-hidden ${sectionBg}`}>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-500/10 to-blue-600/20 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 mb-2 uppercase text-sm">
            Testimonials
          </p>

          <h2 className={`${headingColor} text-4xl md:text-5xl font-bold`}>
            What Our Travelers Say
          </h2>

          <p className={`${textMuted} mt-4`}>
            Real experiences from travelers who explored the world with us
          </p>
        </motion.div>

        {/* Button */}
        <div className="flex justify-center mb-12">
          <a
            href="https://g.page/r/CbKa2yipvreHEAE/review"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-lg hover:scale-105 transition"
          >
            View Google Reviews
          </a>
        </div>

        {/* Slider */}
        <div className="w-full max-w-6xl mx-auto">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-3 h-full">
                <div
                  className={`h-full flex flex-col justify-between backdrop-blur-xl border p-6 rounded-2xl shadow-lg transition hover:-translate-y-2 ${cardStyle}`}
                >
                  <div>
                    <div className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>

                    <p className={`${textMuted} mb-6 text-sm`}>
                      {review.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-black font-semibold">
                      {review.name.charAt(0)}
                    </div>

                    <h4 className="font-semibold text-sm">
                      {review.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}