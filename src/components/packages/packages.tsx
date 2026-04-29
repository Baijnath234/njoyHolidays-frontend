"use client";

import React, { useMemo } from "react";
import baliImage from "../../../public/asset/images/Bali Adveture.jpg";
import Vietnam from "../../../public/asset/images/Vietnam.jpg";
import dubai from "../../../public/asset/images/dubai.jpg";
import malaysia from "../../../public/asset/images/Malaysia.jpg";
import colombo from "../../../public/asset/images/colombo.jpg";
import Paris from "../../../public/asset/images/Paris.jpg";
import { StaticImageData } from "next/image";
import TripCard from "../TripCard";
import { useTheme } from "@/app/context/ThemeContext";
import { useApi } from "@/hooks/useApi";
import { API_CONFIG, API_ENDPOINTS } from "@/config/api";
import { mockTrips as defaultMockTrips } from "@/data/trips";

export type Trip = {
  slug: string;
  title: string;
  image: string | StaticImageData;
  locationLabel: string;
  duration: string;
  location: string;
  price: number;
  unit: string;
  buttonLabel: string;
  partnerLogo?: string;
  partnerText?: string;
};

const defaultImage =
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80";

const mapApiTripToDisplay = (item: any, index: number): Trip => ({
  slug: item.packageName
    ? item.packageName.toString().toLowerCase().replace(/\s+/g, "-")
    : item.slug || `package-${index}`,
  title: item.packageName || item.title || "Tour Package",
  image: item.imageUrl || defaultImage,
  locationLabel: item.destination || item.locationLabel || "Unknown",
  duration: item.duration || "N/A",
  location: item.destination || item.location || "Unknown",
  price: Number(item.price || item.dayNight?.[0]?.hotelPrice || 0) || 0,
  unit: item.unit || "person",
  buttonLabel: item.buttonLabel || "Book Now",
});

export const mockTrips: Trip[] = [
  {
    image: baliImage,
    slug: "Bali-adventure-package",
    title: "Bali Adventure Package",
    locationLabel: "Bali, Indonesia",
    duration: "7 Days",
    location: "Indonesia",
    price: 29999,
    unit: "person",
    buttonLabel: "Book Now",
  },
  {
    image: Vietnam,
    slug: "Vietnam-Package",
    title: "Vietnam Package",
    locationLabel: "Vietnam",
    duration: "5 Days",
    location: "Hanoi",
    price: 45999,
    unit: "person",
    buttonLabel: "Book Now",
  },
  {
    image: dubai,
    slug: "Dubai-Package",
    title: "Dubai Package",
    locationLabel: "Dubai, UAE",
    duration: "3 Days",
    location: "Dubai, UAE",
    price: 38999,
    unit: "couple",
    buttonLabel: "Book Now",
  },
  {
    image: malaysia,
    slug: "Malaysia-Package",
    title: "Malaysia Package",
    locationLabel: "Malaysia",
    duration: "3 Days",
    location: "Langkawi",
    price: 38999,
    unit: "couple",
    buttonLabel: "Book Now",
  },
  {
    image: colombo,
    slug: "Sri-lanka-Package",
    title: "Sri Lanka Package",
    locationLabel: "Colombo",
    duration: "3 Days",
    location: "colombo",
    price: 38999,
    unit: "couple",
    buttonLabel: "Book Now",
  },
  {
    image: Paris,
    slug: "France-Package",
    title: "France Package",
    locationLabel: "France",
    duration: "3 Days",
    location: "Paris",
    price: 38999,
    unit: "couple",
    buttonLabel: "Book Now",
  },
];

const Packages = () => {
  const { theme } = useTheme();
  const { data, status, error, reload } = useApi<any[]>(API_ENDPOINTS.PACKAGES.GET_ALL, {
    baseUrl: API_CONFIG.PACKAGES_API_URL,
    skipAuth: true,
  });
  const hasInvalidResponse = status === "success" && !Array.isArray(data);

  const packages = useMemo<Trip[]>(() => {
    if (status === "success" && Array.isArray(data) && data.length) {
      return data.map(mapApiTripToDisplay);
    }

    return defaultMockTrips;
  }, [data, status]);

  const isUsingMock = status === "error" || hasInvalidResponse || (!data?.length && status !== "loading");

  // 🎨 THEME UI
  const textColor = theme === "light" ? "text-black" : "text-white";

  const overlayStyle = theme === "light" ? "bg-white/40" : "bg-black/40";

  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="absolute w-full h-[50vh] overflow-hidden top-20">

          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05')",
            }}
          />

          {/* Overlay */}
          <div className={`absolute inset-0 ${overlayStyle}`} />

          {/* Content */}
          <div
            className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-4 ${textColor}`}
          >
            <h1 className="text-3xl md:text-5xl font-bold">
              Explore Packages
            </h1>

            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Search and compare flights from top airlines. Book the best deals
              for domestic and international travel.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 mt-150 mb-20">
        {packages.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </div>

      {isUsingMock && (
        <div className="max-w-6xl mx-auto rounded-lg bg-yellow-50 border border-yellow-200 p-4 text-yellow-800">
          Unable to reach the live packages API. Showing fallback mock packages instead.
          {hasInvalidResponse ? " Error: Package API returned an invalid response." : ""}
          {error ? ` Error: ${error}` : ""}
          <button
            type="button"
            onClick={reload}
            className="ml-3 font-semibold underline"
          >
            Retry
          </button>
        </div>
      )}

      <section></section>
    </>
  );
};

export default Packages;
