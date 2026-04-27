"use client";

import { useMemo } from "react";
import { useAuthFetch } from "@/hooks/useAuthFetch";

type FormattedTrip = {
  slug: number;
  title: string;
  price: string | number;
  duration: string;
  date: string;
  pax: string | number;
  hotels: string;
};

export default function AdminTrips() {
  const { data, status, error } = useAuthFetch<any[]>(
    "http://192.168.1.3:8082/api/packages/getAllTourPackage",
  );

  const trips = useMemo<FormattedTrip[]>(() => {
    if (!data) return [];
    return data.map((item: any, index: number) => ({
      slug: index,
      title: item.packageName,
      price: item.dayNight?.[0]?.hotelPrice || "N/A",
      duration: item.duration,
      date: item.dayNight?.[0]?.dayName || "N/A",
      pax: item.noOfPersons,
      hotels: item.dayNight?.[0]?.hotelName || "N/A",
    }));
  }, [data]);

  if (status === "loading") {
    return <div className="p-6">Loading trips...</div>;
  }

  if (status === "error") {
    return (
      <div className="p-6 text-red-600">
        Unable to load trips. {error || "Please login or try again later."}
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-5">All Trips</h1>

      <table className="w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Title</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Pax</th>
            <th>Hotel</th>
          </tr>
        </thead>

        <tbody>
          {trips.map((trip) => (
            <tr key={trip.slug} className="border-t">
              <td className="p-3">{trip.title}</td>
              <td>₹{trip.price}</td>
              <td>{trip.duration}</td>
              <td>{trip.date}</td>
              <td>{trip.pax}</td>
              <td>{trip.hotels}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
