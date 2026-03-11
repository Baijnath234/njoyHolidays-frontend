"use client";

import { FaMoneyBillWave, FaHeadset, FaGlobe, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaMoneyBillWave size={32} />,
    title: "Best Price Guarantee",
    text: "We offer the most competitive travel prices.",
  },
  {
    icon: <FaHeadset size={32} />,
    title: "24/7 Support",
    text: "Our travel experts are available anytime.",
  },
  {
    icon: <FaGlobe size={32} />,
    title: "Worldwide Destinations",
    text: "Explore destinations across the globe.",
  },
  {
    icon: <FaUsers size={32} />,
    title: "5000+ Happy Travellers",
    text: "Thousands of customers trust our services.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-blue-500 mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}