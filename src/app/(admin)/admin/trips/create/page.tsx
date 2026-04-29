"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Accordion from "@/components/Accordion";
import { generateTripPDF } from "@/lib/generatePDF";
import { Room, Trip } from "@/types";
import { API_CONFIG, API_ENDPOINTS } from "@/config/api";

type DayNight = {
  flightSource: string;
  flightDestination: string;
  flightTime: string;
  flightPrice: string;
  hotelName: string;
  roomType: string;
  noOfRooms: string;
  pax: string;
  hotelPrice: string;
  mealPlan: string;
  transportFacility: string;
  active: boolean;
  dayName: string;
};

type TourPackagePayload = {
  packageName: string;
  noOfPersons: string;
  duration: string;
  destination: string;
  active: boolean;
  dayNight: DayNight[];
};

export default function CreateTrip() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [trip, setTrip] = useState<Trip>({
    slug: "",
    title: "",
    image: "",
    locationLabel: "",
    travelDate: "",
    adults: 0,
    children: 0,
    nights: 0,
    days: 0,
    hotelType: "",
    mealPlan: "",
    transport: "",
    destination: "",
    flightSource: "",
    rooms: [
      {
        roomType: "",
        meal: "",
        pax: 0,
        date: "",
        rate: 0,
      },
    ],
  });

  const updateRoom = <K extends keyof Room>(
    index: number,
    field: K,
    value: Room[K],
  ) => {
    const updated = [...trip.rooms];
    updated[index][field] = value;
    setTrip({ ...trip, rooms: updated });
  };

  const addRoom = () => {
    setTrip({
      ...trip,
      rooms: [
        ...trip.rooms,
        { roomType: "", meal: "", pax: 0, date: "", rate: 0 },
      ],
    });
  };

  const totalPrice = trip.rooms.reduce((sum, r) => sum + r.rate, 0);

  const validateTrip = () => {
    if (!trip.destination.trim()) {
      return "Destination is required.";
    }

    if (!trip.flightSource.trim()) {
      return "Flight source is required.";
    }

    if (trip.adults + trip.children <= 0) {
      return "Please add at least one traveller.";
    }

    if (trip.days <= 0 || trip.nights < 0) {
      return "Please enter a valid duration.";
    }

    const invalidRoom = trip.rooms.find(
      (room) =>
        !room.roomType.trim() ||
        !Number.isFinite(room.pax) ||
        !Number.isFinite(room.rate) ||
        room.pax <= 0 ||
        room.rate <= 0,
    );

    if (invalidRoom) {
      return "Please complete room type, pax, and rate for every room.";
    }

    return null;
  };

  const readErrorMessage = async (res: Response) => {
    const fallback = `API failed with status ${res.status}`;
    const text = await res.text();

    if (!text) {
      return fallback;
    }

    try {
      const data = JSON.parse(text) as { message?: string; error?: string };
      return data.message || data.error || fallback;
    } catch {
      return text;
    }
  };

  const handleSubmit = async () => {
    const validationError = validateTrip();

    if (validationError) {
      setSubmitError(validationError);
      return;
    }

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const payload: TourPackagePayload = {
        packageName: `${trip.destination} Trip`,
        noOfPersons: String(trip.adults + trip.children),
        duration: `${trip.days} Days ${trip.nights} Nights`,
        destination: trip.destination,
        active: true,

        dayNight: trip.rooms.map(
          (room, index): DayNight => ({
            flightSource: trip.flightSource,
            flightDestination: trip.destination,
            flightTime: "10:00 AM",
            flightPrice: "5000",

            hotelName: trip.hotelType || "Hotel",
            roomType: room.roomType,
            noOfRooms: "1",
            pax: `${room.pax} Pax`,
            hotelPrice: String(room.rate),

            mealPlan: room.meal || trip.mealPlan,
            transportFacility: trip.transport,

            active: true,
            dayName: `Day${index + 1}`,
          }),
        ),
      };

      const url = `${API_CONFIG.PACKAGES_API_URL}${API_ENDPOINTS.PACKAGES.CREATE}`;
      const localToken = window.localStorage.getItem("token");

      if (!localToken) {
        throw new Error("Authentication token not found. Please log in again.");
      }

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localToken}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(await readErrorMessage(res));
      }

      alert("Trip created successfully");
      router.push("/admin/trips");
    } catch (error) {
      console.error(error);
      setSubmitError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create Trip</h1>

      {/* Destination */}
      <Accordion title="1. Destination">
        <input
          placeholder="Destination"
          className="input"
          onChange={(e) => setTrip({ ...trip, destination: e.target.value })}
        />
      </Accordion>

      {/* Flight Source */}
      <Accordion title="2. Flight Source">
        <input
          placeholder="From (City)"
          className="input"
          onChange={(e) => setTrip({ ...trip, flightSource: e.target.value })}
        />
      </Accordion>

      {/* Date */}
      <Accordion title="3. Date of Travelling">
        <input
          type="date"
          className="input"
          onChange={(e) => setTrip({ ...trip, travelDate: e.target.value })}
        />
      </Accordion>

      {/* Pax */}
      <Accordion title="4. Person (Pax)">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Adults"
            className="input"
            onChange={(e) =>
              setTrip({ ...trip, adults: Number(e.target.value) })
            }
          />
          <input
            type="number"
            placeholder="Children"
            className="input"
            onChange={(e) =>
              setTrip({ ...trip, children: Number(e.target.value) })
            }
          />
        </div>
      </Accordion>

      {/* Duration */}
      <Accordion title="5. Duration">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Nights"
            className="input"
            onChange={(e) =>
              setTrip({ ...trip, nights: Number(e.target.value) })
            }
          />
          <input
            type="number"
            placeholder="Days"
            className="input"
            onChange={(e) => setTrip({ ...trip, days: Number(e.target.value) })}
          />
        </div>
      </Accordion>

      {/* Hotel */}
      <Accordion title="6. Hotel Type">
        <select
          className="input"
          onChange={(e) => setTrip({ ...trip, hotelType: e.target.value })}
        >
          <option>Standard</option>
          <option>Premium</option>
          <option>Luxury</option>
        </select>
      </Accordion>

      {/* Rooms */}
      <Accordion title="7. Rooms Details">
        {trip.rooms.map((room, i) => (
          <div key={i} className="border p-3 mb-3 rounded-lg">
            <div className="grid grid-cols-3 gap-3">
              <input
                placeholder="Room Type"
                className="input"
                onChange={(e) => updateRoom(i, "roomType", e.target.value)}
              />

              <select
                className="input"
                onChange={(e) => updateRoom(i, "meal", e.target.value)}
              >
                <option>CPAI</option>
                <option>MAPAI</option>
                <option>APAI</option>
              </select>

              <input
                type="number"
                placeholder="Pax"
                className="input"
                onChange={(e) => updateRoom(i, "pax", Number(e.target.value))}
              />

              <input
                type="date"
                className="input"
                onChange={(e) => updateRoom(i, "date", e.target.value)}
              />

              <input
                type="number"
                placeholder="Rate"
                className="input"
                onChange={(e) => updateRoom(i, "rate", Number(e.target.value))}
              />
            </div>
          </div>
        ))}

        <button onClick={addRoom} className="text-blue-600">
          + Add Room
        </button>
      </Accordion>

      {/* Meal */}
      <Accordion title="8. Meal Plan">
        <select
          className="input"
          onChange={(e) => setTrip({ ...trip, mealPlan: e.target.value })}
        >
          <option>CPAI</option>
          <option>MAPAI</option>
          <option>APAI</option>
        </select>
      </Accordion>

      {/* Transport */}
      <Accordion title="9. Transport">
        <select
          className="input"
          onChange={(e) => setTrip({ ...trip, transport: e.target.value })}
        >
          <option>Sedan</option>
          <option>SUV</option>
          <option>Tempo Traveller</option>
        </select>
      </Accordion>

      {/* Summary */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="font-bold">Total Price: {"\u20b9"}{totalPrice}</h2>

        {submitError && (
          <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
            {submitError}
          </div>
        )}

        <div className="flex gap-4 mt-4">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          <button
            onClick={() => generateTripPDF(trip)}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Export PDF
          </button>
        </div>
      </div>
    </div>
  );
}
