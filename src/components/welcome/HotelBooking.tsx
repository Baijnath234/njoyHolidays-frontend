import React from "react";
import HotelCard from "../common/HotelCard";
import RoyalOrchid from "../../../public/asset/images/RoyalOrchid.jpg"
import Atlantis  from "../../../public/asset/images/Atlantis (1).jpg"
import HanoiPearl from "../../../public/asset/images/Atlantis (2).jpg"
import BerjayaLangkawi from "../../../public/asset/images/BerjayaLangkawi (1).jpg"
import TajExotica from "../../../public/asset/images/BerjayaLangkawi (2).jpg"
import AyanaResort from "../../../public/asset/images/BerjayaLangkawi (3).jpg"

const mockHotels = [
  {
    image: RoyalOrchid,
    name: "Royal Orchid Metropole",
    city: "Mysore",
    rating: 4.5,
    price: 2999,
    per: "night",
  },
  {
    image: Atlantis,
    name: "Atlantis The Palm",
    city: "Dubai",
    rating: 4.8,
    price: 8999,
    per: "night",
  },
  {
    image: HanoiPearl,
    name: "Hanoi Pearl Hotel",
    city: "Hanoi",
    rating: 4.4,
    price: 4599,
    per: "night",
  },
  {
    image: BerjayaLangkawi,
    name: "Berjaya Langkawi Resort",
    city: "Langkawi",
    rating: 4.6,
    price: 3899,
    per: "night",
  },
  {
    image: TajExotica,
    name: "Taj Exotica Resort",
    city: "Goa",
    rating: 4.7,
    price: 6999,
    per: "night",
  },
  {
    image: AyanaResort,
    name: "Ayana Resort Bali",
    city: "Bali",
    rating: 4.9,
    price: 7999,
    per: "night",
  },
];

const HotelBooking = () => {
  return (
    <main className="min-h-screen px-6 max-w-7xl mx-auto mt-30 mb-30">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Hotels Booking</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-20">
          Find the best hotels near you, compare prices, and book confidently —
          all in one place.
        </p>
      </section>

      <section>
        <div className="flex flex-wrap justify-center gap-10">
          {/* Ideally you map multiple trips here */}
          {mockHotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HotelBooking;
