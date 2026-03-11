import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

interface Hotel {
  image: string | StaticImageData;
  name: string;
  city: string;
  rating: number;
  price: number;
  per: string;
}

export default function HotelCard({ hotel }: { hotel: Hotel }) {

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[300px] hover:shadow-xl transition">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{hotel.name}</h3>

        <div className="flex items-center text-gray-500 text-sm mt-1">
          <FaMapMarkerAlt className="mr-1" />
          {hotel.city}
        </div>

        {/* Rating */}
        <div className="flex items-center mt-2 text-yellow-500">
          <FaStar />
          <span className="ml-1 text-gray-700 text-sm">{hotel.rating}</span>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-lg font-bold text-black">
            ₹{hotel.price}
            <span className="text-sm text-gray-500">/{hotel.per}</span>
          </div>

          <button className="bg-[#0dbeff] text-white px-4 py-2 rounded-lg hover:bg-[#099ad1] transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

