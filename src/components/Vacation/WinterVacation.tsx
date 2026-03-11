"use client";

import Image from "next/image";

const winterTrips = [
  {
    title: "Manali Snow Retreat",
    location: "Himachal Pradesh, India",
    image:
      "https://images.unsplash.com/photo-1605540436563-5bca919ae766",
    price: "₹12,999",
  },
  {
    title: "Kashmir Winter Paradise",
    location: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1608889175631-4d6ef4d6d0c5",
    price: "₹18,999",
  },
  {
    title: "Swiss Alps Snow Tour",
    location: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    price: "₹75,000",
  },
  {
    title: "Lapland Northern Lights",
    location: "Finland",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
    price: "₹92,000",
  },
];

export default function WinterVacation() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-100 via-white to-gray-50">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          ❄️ Winter Vacation Specials
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Enjoy magical winter destinations with snowy mountains,
          cozy stays, and unforgettable adventures.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {winterTrips.map((trip, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
          >
            <div className="relative h-56">
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {trip.title}
              </h3>

              <p className="text-sm text-gray-500">
                📍 {trip.location}
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-blue-600 font-bold">
                  {trip.price}
                </span>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <button className="bg-[#0dbeff] hover:bg-[#0aa8e0] text-white px-8 py-3 rounded-full font-semibold transition">
          View All Winter Packages
        </button>
      </div>

    </section>
  );
}