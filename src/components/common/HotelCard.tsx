"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

interface Hotel {
  image: string | StaticImageData;
  name: string;
  city: string;
  rating: number;
}

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300">

      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center text-sm shadow">
          <FaStar className="text-yellow-500 mr-1" />
          <span className="font-medium">{hotel.rating}</span>
        </div>

        {/* Hotel Name on Image */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="text-lg font-semibold leading-snug">
            {hotel.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Location */}
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <FaMapMarkerAlt className="mr-1 text-blue-500" />
          <span className="font-medium">{hotel.city}</span>
        </div>

        {/* Divider */}
        <div className="border-t my-3" />

        {/* CTA */}
        <button className="w-full bg-gradient-to-r from-[#0dbeff] to-[#0077ff] text-white py-2 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
          Request Booking
        </button>

      </div>
    </div>
  );
}