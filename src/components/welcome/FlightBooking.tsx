import React from "react";

type Flight = {
  id: number;
  airline: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
};

const flights: Flight[] = [
  {
    id: 1,
    airline: "SkyJet Airlines",
    from: "New York",
    to: "London",
    departureTime: "08:30 AM",
    arrivalTime: "08:15 PM",
    duration: "7h 45m",
    price: 520
  },
  {
    id: 2,
    airline: "AeroWorld",
    from: "New York",
    to: "London",
    departureTime: "01:00 PM",
    arrivalTime: "01:10 AM",
    duration: "8h 10m",
    price: 480
  },
  {
    id: 3,
    airline: "FlyFast",
    from: "New York",
    to: "London",
    departureTime: "06:45 PM",
    arrivalTime: "06:30 AM",
    duration: "7h 45m",
    price: 450
  },
  {
    id: 3,
    airline: "FlyFast",
    from: "New York",
    to: "London",
    departureTime: "06:45 PM",
    arrivalTime: "06:30 AM",
    duration: "7h 45m",
    price: 450
  }
];

const FlightBooking = () => {
  return (
    <main className=" px-6 max-w-7xl mx-auto ">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Flights Booking
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Find flights that match your schedule, compare options, and book
          confidently — all in just a few steps.
        </p>
      </section>

      {/* Available Flights */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {flights.map((flight) => (
            <div
              key={flight.id}
              className="border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{flight.airline}</h3>
                <p className="text-gray-500">
                  {flight.from} → {flight.to}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                <div>
                  <strong>Departure:</strong> {flight.departureTime}
                </div>
                <div>
                  <strong>Arrival:</strong> {flight.arrivalTime}
                </div>
                <div>
                  <strong>Duration:</strong> {flight.duration}
                </div>
                <div>
                  <strong>Price:</strong> ${flight.price}
                </div>
              </div>

              <button className="w-full py-3 rounded-lg bg-[#0dbeff]/100 text-white hover:bg-[#faca2d] transition-colors">
                Book Flight
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FlightBooking;
