"use client";

import React, { useState } from "react";


// interface Hotels {
//   hotels: string;
//   checkIn: string;
//   checkOut: string;
//   rooms: string;
//   price: string;
// }

const HotelSearch = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  return (
    <div>
      <section>
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-6xl mx-auto relative z-20 top-90 mt-32">
          <div className="grid md:grid-cols-5 gap-4">
            <input
              type="text"
              placeholder="CITY, AREA or PROPERTY"
              className="border p-3 rounded-lg"
              onChange={(e) => setFrom(e.target.value)}
            />

            <input
              type="date"
              placeholder="Check-In"
              className="border p-3 rounded-lg"
              onChange={(e) => setDate(e.target.value)}
            />

            <input
              type="date"
              placeholder="Check-Out"
              className="border p-3 rounded-lg"
              onChange={(e) => setDate(e.target.value)}
            />

            <input
              type="text"
              placeholder="Rooms & Guests"
              className="border p-3 rounded-lg"
              onChange={(e) => setTo(e.target.value)}
            />

            <button
              // onClick={}
              className="bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-600"
            >
              Search Flights
            </button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6"></div>
      </section>
    </div>
  );
};

export default HotelSearch;
