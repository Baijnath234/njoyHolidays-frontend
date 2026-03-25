"use client";

import Image from "next/image";

const categories = [
  {
    title: "Relaxation",
    description: "Beach, spa, or luxury resort trips for ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Adventure",
    description: "Hiking, camping, skiing, and wildlife safari adventures.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    title: "Cultural / Educational",
    description: "City tours, museums, and historical heritage sites.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
  },
  {
    title: "Specialty",
    description: "Cruises, honeymoons, and unique volunteer tourism.",
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
  },
  {
    title: "Family / Social",
    description: "Family vacations, theme parks, and holiday gatherings.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
];

export default function VacationCategories() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          Choose Your Perfect Vacation
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Whether you seek relaxation, adventure, or cultural experiences,
          we have the perfect vacation designed for you.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            {/* Image */}
            <div className="relative h-64">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">

              <h3 className="text-xl font-bold text-white">
                {category.title}
              </h3>

              <p className="text-sm text-gray-200 mt-2">
                {category.description}
              </p>

              <button className="mt-4 w-fit bg-[#0dbeff] hover:bg-[#0aa8e0] text-white px-4 py-2 rounded-lg text-sm">
                Explore
              </button>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}