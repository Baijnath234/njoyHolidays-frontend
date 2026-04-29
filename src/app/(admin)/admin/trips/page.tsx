"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useApi } from "@/hooks/useApi";
import { API_ENDPOINTS, API_CONFIG } from "@/config/api";
import { mockTrips } from "@/data/trips";

type FormattedTrip = {
  slug: string;
  title: string;
  price: string | number;
  duration: string;
  date: string;
  pax: string | number;
  hotels: string;
  destination: string;
};

const formatApiTrip = (item: any): FormattedTrip => {
  const slug = item.packageName
    ? item.packageName.toString().toLowerCase().replace(/\s+/g, "-")
    : item.slug || `trip-${Math.random().toString(36).substr(2, 6)}`;

  return {
    slug,
    title: item.packageName || item.title || "Untitled Trip",
    price: item.dayNight?.[0]?.hotelPrice || item.price || "N/A",
    duration: item.duration || "N/A",
    date: item.dayNight?.[0]?.dayName || item.travelDate || "N/A",
    pax: item.noOfPersons || "N/A",
    hotels: item.dayNight?.[0]?.hotelName || item.hotelName || "N/A",
    destination: item.destination || item.location || "N/A",
  };
};

const fallbackTrips: FormattedTrip[] = mockTrips.map((item) => ({
  slug: item.slug,
  title: item.title,
  price: item.price,
  duration: item.duration,
  date: item.duration,
  pax: "--",
  hotels: item.locationLabel,
  destination: item.location,
}));

export default function AdminTrips() {
  const { data, status, error, reload } = useApi<any[]>(API_ENDPOINTS.PACKAGES.GET_ALL, {
    baseUrl: API_CONFIG.PACKAGES_API_URL,
    skipAuth: true,
  });
  const hasInvalidResponse = status === "success" && !Array.isArray(data);

  const trips = useMemo<FormattedTrip[]>(() => {
    if (status === "success" && Array.isArray(data) && data.length) {
      return data.map(formatApiTrip);
    }
    return fallbackTrips;
  }, [data, status]);

  const usingMockData = status === "error" || hasInvalidResponse || (!data?.length && status !== "loading");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">All Trips</h1>
          {usingMockData && (
            <p className="text-sm text-yellow-700 mt-1">
              API unavailable, showing fallback mock trips instead.
            </p>
          )}
        </div>

        <Link
          href="/admin/trips/create"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          + Add New Trip
        </Link>
      </div>

      {status === "loading" && (
        <div className="p-6 bg-white rounded-lg shadow">Loading trips...</div>
      )}

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="p-4">Title</th>
              <th className="p-4">Destination</th>
              <th className="p-4">Duration</th>
              <th className="p-4">Date</th>
              <th className="p-4">Pax</th>
              <th className="p-4">Hotel</th>
              <th className="p-4">Details</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => (
              <tr key={trip.slug} className="border-t text-sm text-gray-700">
                <td className="p-4">{trip.title}</td>
                <td className="p-4">{trip.destination}</td>
                <td className="p-4">{trip.duration}</td>
                <td className="p-4">{trip.date}</td>
                <td className="p-4">{trip.pax}</td>
                <td className="p-4">{trip.hotels}</td>
                <td className="p-4">
                  <Link
                    href={`/admin/trips/${trip.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {(status === "error" || hasInvalidResponse) && (
        <div className="rounded-lg bg-red-50 p-4 text-red-700">
          Unable to reach the package API.{" "}
          {hasInvalidResponse ? "The API returned an invalid response." : error || "Please check your API endpoint."}
          <button
            type="button"
            onClick={reload}
            className="ml-3 font-semibold underline"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
}
