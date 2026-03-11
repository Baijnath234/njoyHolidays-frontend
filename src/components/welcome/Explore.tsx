import React from 'react'
import TripCard from '../TripCard';
import baliImage from "../../../public/asset/images/Bali Adveture.jpg";
import Vietnam from "../../../public/asset/images/Vietnam.jpg"
import dubai from "../../../public/asset/images/dubai.jpg"
import malaysia from "../../../public/asset/images/Malaysia.jpg"
 
const Exploer = () => {

     const mockTrips = [
    {
      image: baliImage,
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
      title: "Vietnam Package",
      locationLabel: "Vietnam",
      duration: "5 Days",
      location: "Hanoi",
      price: 45999,
      unit: "person",
      buttonLabel: "Explore Now",
    },
    {
      image: dubai,
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
      title: "Malaysia Package",
      locationLabel: "Malaysia",
      duration: "3 Days",
      location: "Langkawi",
      price: 38999,
      unit: "couple",
      buttonLabel: "Book Now",
    },
    {
      image: malaysia,
      title: "Malaysia Package",
      locationLabel: "Malaysia",
      duration: "3 Days",
      location: "Langkawi",
      price: 38999,
      unit: "couple",
      buttonLabel: "Book Now",
    },
    {
      image: malaysia,
      title: "Malaysia Package",
      locationLabel: "Malaysia",
      duration: "3 Days",
      location: "Langkawi",
      price: 38999,
      unit: "couple",
      buttonLabel: "Book Now",
    },
  ];

  return (
    <div >
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
          Explore Our Top Packages
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {/* Ideally you map multiple trips here */}
          {mockTrips.map((trip, index) => (
            <TripCard key={index} trip={trip} />
          ))}
        </div>
    </div>
  )
}

export default Exploer