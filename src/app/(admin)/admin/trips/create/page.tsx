"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Accordion from "@/components/Accordion";
import { generateTripPDF } from "@/lib/generatePDF";

type Room = {
  roomType: string;
  meal: string;
  pax: number;
  date: string;
  rate: number;
};

type Trip = {
  travelDate: string;
  adults: number;
  children: number;
  nights: number;
  days: number;
  hotelType: string;
  mealPlan: string;
  transport: string;
  destination: string;
  flightSource: string;
  rooms: Room[];
};

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
  // packageId: number;
  packageName: string;
  noOfPersons: string;
  duration: string;
  destination: string;
  active: boolean;
  dayNight: DayNight[];
};

export default function CreateTrip() {
  const router = useRouter();

  const [trip, setTrip] = useState<Trip>({
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

  // update room
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


  const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzc0NDQyODk1LCJleHAiOjE3NzQ1MjkyOTV9.1Sw0TTc8BjZZHCrjvTSWcLs1Nw0fDy0uAagyiDf57Mk";

  // ✅ UPDATED SUBMIT FUNCTION (API INTEGRATION)
  const handleSubmit = async () => {
    try {
      const payload: TourPackagePayload = {
        // packageId: 1,
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

      const res = await fetch(
        "http://192.168.1.13:8082/api/packages/tourPackage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
             Authorization: `Bearer ${TOKEN}`,
          },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) throw new Error("API failed");

      alert("Trip created successfully ✅");
      router.push("/admin/trips");
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
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
        <h2 className="font-bold">Total Price: ₹{totalPrice}</h2>

        <div className="flex gap-4 mt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
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
