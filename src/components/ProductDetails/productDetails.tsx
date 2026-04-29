"use client";

import { Trip } from "@/data/trips";
import Image from "next/image";
import { useBooking } from "@/hooks/useBooking";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  trip: Trip;
};

export default function ProductDetails({ trip }: Props) {
  const { addBooking } = useBooking();
  const router = useRouter();
  const [added, setAdded] = useState(false);

  const handleAddToBooking = () => {
    addBooking({
      slug: trip.slug,
      title: trip.title,
      price: trip.price,
      unit: trip.unit,
      image: trip.image,
      duration: trip.duration,
    });

    setAdded(true);

    // Reset the button state after 2 seconds
    setTimeout(() => setAdded(false), 2000);
  };

  const handleProceedToBooking = () => {
    router.push("/booking");
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 mt-30">
      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-8">
        <Image
          src={trip.image}
          alt={trip.title}
          loading="lazy"
          className="rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold">{trip.title}</h1>

          <p className="text-gray-600 mt-2">{trip.locationLabel}</p>

          <p className="mt-3 font-semibold">
            Duration: {trip.duration}
          </p>

          <p className="mt-3 text-xl font-bold">
            ₹{trip.price} / {trip.unit}
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToBooking}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                added
                  ? "bg-green-600 text-white"
                  : "bg-teal-600 text-white hover:bg-teal-700"
              }`}
            >
              {added ? "✓ Added to Booking" : "Add to Booking"}
            </button>

            <button
              onClick={handleProceedToBooking}
              className="px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
            >
              Go to Booking
            </button>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Tour Highlights</h2>

        <ul className="list-disc ml-6 mt-4">
          {trip.highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="grid md:grid-cols-2 gap-10 mt-10">
        <div>
          <h2 className="text-xl font-semibold">Inclusions</h2>

          <ul className="list-disc ml-6 mt-4">
            {trip.inclusions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Exclusions</h2>

          <ul className="list-disc ml-6 mt-4">
            {trip.exclusions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Itinerary */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-6">
          Day Wise Itinerary
        </h2>

        <div className="space-y-6">
          {trip.itinerary.map((day) => (
            <div key={day.day} className="border p-5 rounded-lg">
              <h3 className="font-semibold">
                Day {day.day}: {day.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {day.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}