"use client";

import Image from "next/image";

const destinations = [
  {
    title: "Goa Beach Escape",
    location: "Goa, India",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: "₹14,999",
  },
  {
    title: "Bali Island Tour",
    location: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f",
    price: "₹39,999",
  },
  {
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: "₹69,999",
  },
  {
    title: "Dubai Luxury Trip",
    location: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    price: "₹44,999",
  },
];

export default function SummerVacation() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          🌞 Summer Vacation Specials
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Discover the best destinations for your summer getaway. Beaches,
          mountains, and luxury escapes curated just for you.
        </p>
      </div>

      {/* Destination Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {destinations.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
          >
            <div className="relative h-56">
              <Image
                src={place.image}
                alt={place.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {place.title}
              </h3>

              <p className="text-sm text-gray-500">
                📍 {place.location}
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-blue-600 font-bold">
                  {place.price}
                </span>

                <button className="text-sm bg-[#0dbeff] hover:bg-[#0aa8e0] text-white px-4 py-2 rounded-lg">
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition">
          View All Summer Packages
        </button>
      </div>

    </section>
  );
}