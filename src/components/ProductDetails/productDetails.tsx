import { Trip } from "@/data/trips";
import Image from "next/image";

type Props = {
  trip: Trip;
};

export default function ProductDetails({ trip }: Props) {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 mt-30">
      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-8">
        <Image
          src={trip.image}
          alt={trip.title}
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

          <button className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg">
            {trip.buttonLabel}
          </button>
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