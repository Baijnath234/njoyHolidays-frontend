import { GiIndianPalace } from "react-icons/gi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";
import {  FcAbout } from "react-icons/fc";
import React from "react";

const services = [
  {
    title: "Domestic Tour",
    description:
      "Explore the best destinations across the country with customized itineraries, comfortable stays, and seamless travel arrangements.",
    icon: <GiIndianPalace className="text-black w-8 h-8" />,
  },
  {
    title: "International Tour",
    description:
      "Discover global destinations with expertly planned packages including flights, hotels, sightseeing, and guided experiences.",
    icon: <MdOutlineTravelExplore className="text-black w-8 h-8" />,
  },
  {
    title: "Flight Booking",
    description:
      "Book domestic and international flights at competitive prices with flexible options and hassle-free ticketing support.",
    icon: <MdOutlineFlightTakeoff className="text-black w-8 h-8" />,
  },
  {
    title: "Hotel Booking",
    description:
      "Find and reserve top-rated hotels and resorts tailored to your comfort, budget, and preferred location.",
    icon: <FaHotel className="text-black w-8 h-8" />,
  },
  {
    title: "Visa Assistance",
    description:
      "Get professional guidance and complete support for tourist and business visa applications with smooth documentation handling.",
    icon: <RiVisaLine className="text-black w-8 h-8" />,
  },
  {
    title: "Know About",
    description:
      "Learn more about our company, travel expertise, customer commitment, and how we create memorable journeys.",
    icon: <FcAbout className="text-white w-8 h-8" />,
  },
];

const Services = () => {
  return (
   <main className="min-h-screen py-20">

  <div className="max-w-6xl mx-auto px-6">

    {/* Hero Section */}
    <section className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Services
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-20">
        Because you don’t just need another service provider — you need a team
        that understands your vision and knows how to execute it flawlessly.
      </p>
    </section>

    {/* Services Grid */}
    <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-gray-50 p-10 border border-gray-200 rounded-xl text-center hover:shadow-md transition-shadow"
        >
          <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-gray-200 rounded-lg">
            {service.icon}
          </div>

          <h3 className="text-lg font-semibold mb-3">
            {service.title}
          </h3>

          <p className="text-gray-900 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </section>

  </div>

</main>
  );
};

export default Services;
