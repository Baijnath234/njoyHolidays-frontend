import { useMemo } from "react";
import { generateTripPDF } from "@/lib/generatePDF";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Trip } from "@/types";

export async function generateStaticParams() {
  return [];
}

type Props = {
  params: {
    slug: string;
  };
};

export default function TripDetails({ params }: Props) {
  const [trips] = useLocalStorage<Trip[]>("trips", []);

  const trip = useMemo(
    () => trips.find((item) => item.slug === params.slug) ?? null,
    [params.slug, trips],
  );

  if (!trip) {
    return <div className="p-6">Loading trip details...</div>;
  }

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