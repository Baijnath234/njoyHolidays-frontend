// components/TripCard.js
import Image from "next/image";
import { MapPin } from "lucide-react";

interface Trip {
  image: string;
  title: string;
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
  console.log({trip});
  
  return (
    <div className="w-[340px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-52">
        <Image
          src={trip.image}
          alt={trip.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded font-semibold shadow">
          📍 {trip.locationLabel}
        </div>
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {trip.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg leading-snug mb-2">
          {trip.title}
        </h3>
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <MapPin size={14} className="mr-1" />
          <span className="text-blue-600">{trip.location}</span>
        </div>
        <div className="text-base font-bold mb-3">
          ₹ {trip.price.toLocaleString()}{" "}
          <span className="text-sm font-normal text-gray-500">
            / {trip.unit}
          </span>
        </div>
        <button className="bg-black text-white px-4 py-2 text-sm rounded-md hover:bg-gray-800 transition">
          {trip.buttonLabel}
        </button>
        {trip.partnerLogo && (
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <Image src={trip.partnerLogo} width={24} height={24} alt="Partner" />
            {trip.partnerText}
          </div>
        )}
      </div>
    </div>
  );
}
