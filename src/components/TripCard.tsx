"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { StaticImageData } from "next/image";

interface Trip {
  image: string | StaticImageData;
  slug: string;
  locationLabel: string;
  duration: string;
  location: string;
  price: number;
  unit: string;
  buttonLabel: string;
  partnerLogo?: string;
  partnerText?: string;
}

export default function TripCard({ trip }: { trip: Trip }) {
  return (
    <Link href={`/product/${trip.slug}`} className="group w-[340px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 block">

      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={trip.image}
          alt={trip.slug}
          fill
          loading="lazy"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Top Tags */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 text-xs rounded-full font-medium shadow">
          📍 {trip.locationLabel}
        </div>

        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {trip.duration}
        </div>

        {/* Bottom Title Overlay */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="text-lg font-semibold leading-snug">
            {trip.slug}
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">

        {/* Location */}
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin size={14} className="mr-1" />
          <span className="text-blue-500 font-medium">
            {trip.location}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-xl font-bold text-gray-800">
            ₹ {trip.price.toLocaleString()}
            <span className="text-sm font-normal text-gray-500">
              {" "} / {trip.unit}
            </span>
          </div>

          {/* Optional Partner Badge */}
          {trip.partnerText && (
            <div className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
              {trip.partnerText}
            </div>
          )}
        </div>

        {/* CTA Button */}
        <button
          type="button"
          className="w-full bg-gradient-to-r from-[#0dbeff] to-[#0077ff] text-white py-2 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          {trip.buttonLabel}
        </button>
      </div>
    </Link>
  );
}