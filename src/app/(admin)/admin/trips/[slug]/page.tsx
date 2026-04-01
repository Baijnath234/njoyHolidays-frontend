"use client";

import { useEffect, useState } from "react";
import { generateTripPDF } from "@/lib/generatePDF";
import { Trip } from "@/types";

type Props = {
  params: {
    slug: string;
  };
};

export default function TripDetails({ params }: Props) {
  const [trip, setTrip] = useState<Trip | null>(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("trips") || "[]");
    const found = data.find((t: Trip) => t.slug === params.slug);
    setTrip(found);
  }, [params.slug]);

  if (!trip) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{trip.title}</h1>

      <button
        onClick={() => generateTripPDF(trip)}
        className="mt-4 bg-green-600 text-white px-4 py-2"
      >
        Download Itinerary PDF
      </button>
    </div>
  );
}