"use client";

import { useState } from "react";
import { useFetch } from "@/hooks/useApi";
import { API_ENDPOINTS } from "@/config/api";

interface Itinerary {
  legs: {
    departure: string;
    arrival: string;
    carriers: {
      marketing: {
        name: string;
      }[];
    };
  }[];
  price: {
    formatted: string;
  };
}

interface Flight {
  airline: string;
  departure: string;
  arrival: string;
  price: string;
}

export default function FlightSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDdepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("")
  const [flights, setFlights] = useState<Flight[]>([]);
  console.log({flights});
  
  const [loading, setLoading] = useState(false);
  const { makeRequest } = useFetch();

  const searchFlights = async () => {
    setLoading(true);

    try {
      const queryParams = new URLSearchParams({
        originSkyId: from,
        destinationSkyId: to,
        originEntityId: "27544008",
        destinationEntityId: "27537542",
        date: departureDate,
        returnDate: arrivalDate,
        cabinClass: "economy",
        adults: "1",
        sortBy: "best",
        currency: "USD",
        market: "en-US",
        countryCode: "US",
      }).toString();

      const { data, error } = await makeRequest<any>(
        `${API_ENDPOINTS.FLIGHTS.SEARCH}?${queryParams}`,
        "GET",
        undefined,
        {
          baseUrl: "https://sky-scrapper.p.rapidapi.com",
          skipAuth: true,
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "YOUR_RAPIDAPI_KEY",
            "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
          },
        }
      );

      if (error) {
        throw new Error(error);
      }

      // adjust based on API response
      const results =
       (data?.data?.itineraries as Itinerary[])?.map((item) => ({
          airline: item.legs[0]?.carriers?.marketing[0]?.name,
          departure: item.legs[0]?.departure,
          arrival: item.legs[0]?.arrival,
          price: item.price?.formatted,
        })) || [];

        console.log({results});
        
      setFlights(results);
    } catch (error) {
      console.error("Flight API Error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto mt-32">

      {/* Search Box */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <div className="grid md:grid-cols-5 gap-4">

          <input
            type="text"
            placeholder="From"
            className="border p-3 rounded-lg"
            onChange={(e) => setFrom(e.target.value)}
          />

          <input
            type="text"
            placeholder="To"
            className="border p-3 rounded-lg"
            onChange={(e) => setTo(e.target.value)}
          />

          <input
            type="date"
            className="border p-3 rounded-lg"
            onChange={(e) => setDdepartureDate(e.target.value)}
          />
          
          <input
            type="date"
            className="border p-3 rounded-lg"
            onChange={(e) => setArrivalDate(e.target.value)}
          />

          <button
            onClick={searchFlights}
            className="bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-600"
          >
            Search Flights
          </button>

        </div>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center mt-8 text-lg font-semibold">
          Searching flights...
        </p>
      )}

      {/* Flight Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {flights.map((flight, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border hover:shadow-xl"
          >

            <div className="flex justify-between mb-3">
              <h3 className="font-bold text-lg">{flight.airline}</h3>

              <span className="text-blue-600 font-semibold">
                {flight.price}
              </span>
            </div>

            <p>✈ Departure: {flight.departure}</p>
            <p>🛬 Arrival: {flight.arrival}</p>

            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Book Now
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}