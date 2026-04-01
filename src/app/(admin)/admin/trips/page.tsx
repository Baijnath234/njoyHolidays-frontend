"use client";
import { useEffect, useState } from "react";

export default function AdminTrips() {
  const [trips, setTrips] = useState<any[]>([]);
  console.log({ trips });


  useEffect(() => {
    const fetchTrips = async () => {
      try {
        // ✅ Get token dynamically
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("No token found");
          return;
        }

        const res = await fetch(
          "http://192.168.1.3:8082/api/packages/getAllTourPackage",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!res.ok) {
          console.error("Failed request:", res.status);
          return;
        }

        const data = await res.json();
        console.log("RAW API:", data);

        const formattedTrips = data.map((item: any, index: number) => ({
          slug: index,
          title: item.packageName,
          price: item.dayNight?.[0]?.hotelPrice || "N/A",
          duration: item.duration,
          date: item.dayNight?.[0]?.dayName || "N/A",
          pax: item.noOfPersons,
          hotels: item.dayNight?.[0]?.hotelName || "N/A",
        }));

        setTrips(formattedTrips);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    // ✅ Ensure client-side execution
    if (typeof window !== "undefined") {
      fetchTrips();
    }
  }, []);

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
              <td>{trip.holtes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
