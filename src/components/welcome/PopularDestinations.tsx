"use client";

import Image from "next/image";
import Maldives from "../../../public/asset/images/Maldives.jpg"
import Dubai3 from "../../../public/asset/images/Dubai3.jpg"
import Bali from "../../../public/asset/images/Bali.jpg"
import Singapore from "../../../public/asset/images/Singapore.jpg"
import Thailand from "../../../public/asset/images/Thailand.jpg"
import Goa from "../../../public/asset/images/Goa.jpg"

const destinations = [
  {
    name: "Maldives",
    image: Maldives,
  },
  {
    name: "Dubai",
    image: Dubai3,
  },
  {
    name: "Bali",
    image: Bali,
  },
  {
    name: "Singapore",
    image: Singapore,
  },
  {
    name: "Thailand",
    image: Thailand,
  },
  {
    name: "Goa",
    image: Goa,
  },
];

export default function PopularDestinations() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Popular Destinations
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">

          {destinations.map((item, index) => (
            <div
              key={index}
              className="relative h-[250px] rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}