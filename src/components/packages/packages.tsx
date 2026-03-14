import React from "react";
import baliImage from "../../../public/asset/images/Bali Adveture.jpg";
import Vietnam from "../../../public/asset/images/Vietnam.jpg";
import dubai from "../../../public/asset/images/dubai.jpg";
import malaysia from "../../../public/asset/images/Malaysia.jpg";
import colombo from "../../../public/asset/images/colombo.jpg";
import Paris from "../../../public/asset/images/Paris.jpg";
import { StaticImageData } from "next/image";
import TripCard from "../TripCard";

export type Trip = {
  slug: string;
  image: StaticImageData;
  locationLabel: string;
  duration: string;
  location: string;
  price: number;
  unit: string;
  buttonLabel: string;
};

export const mockTrips: Trip[] = [
  {
    image: baliImage,
    slug: "Bali-adventure-package",
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
    locationLabel: "France",
    duration: "3 Days",
    location: "Paris",
    price: 38999,
    unit: "couple",
    buttonLabel: "Book Now",
  },
];

const packages = () => {
  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="absolute w-full h-[50vh] overflow-hidden top-20">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold">Explore Packages</h1>

            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Search and compare flights from top airlines. Book the best deals
              for domestic and international travel.
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap justify-center gap-10 mt-150">
        {/* Ideally you map multiple trips here */}
        {mockTrips.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </div>
      <section></section>
    </>
  );
};

export default packages;
