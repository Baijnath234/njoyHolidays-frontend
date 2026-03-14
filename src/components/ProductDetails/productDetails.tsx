import Image from "next/image";
import { Trip } from "../welcome/Explore";

type Props = {
  trip: Trip;
};

export default function ProductDetails({ trip }: Props) {
  return (
    <div className="max-w-6xl mx-auto mt-32 p-6">
      <h1 className="text-4xl font-bold mb-6">{trip.slug}</h1>

      <Image
        src={trip.image}
        alt={trip.slug}
        width={600}
        height={400}
        className="rounded-lg"
      />

      <p className="mt-4">📍 {trip.locationLabel}</p>
      <p>⏳ {trip.duration}</p>
      <p className="text-2xl font-bold mt-4">
        ₹{trip.price} / {trip.unit}
      </p>
    </div>
  );
}
