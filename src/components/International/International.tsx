"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Country = [];

const Domestic = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [activeTab, setActiveTab] = useState<
    | "Asia"
    | "Africa"
    | "NorthAmerica"
    | "SouthAmerica"
    | "Antarctica"
    | "Europe"
    | "Australia"
  >("Asia");

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,region,flags",
      );

      const data = await res.json();

      const formatted: Country[] = data.map((c: any, index: number) => ({
        id: index,
        Title: c.name.common,
        Continent: c.region,
        Image: c.flags.png,
      }));

      setCountries(formatted);
    };

    fetchCountries();
  }, []);

  const AsiaData = countries.filter((c) => c.Continent === "Asia");
  const EuropeData = countries.filter((c) => c.Continent === "Europe");
  const AfricaData = countries.filter((c) => c.Continent === "Africa");
  const NorthAmericaData = countries.filter((c) => c.Continent === "Americas");
  const SouthAmericaData = countries.filter((c) => c.Continent === "Americas");
  const AntarcticaData = countries.filter((c) => c.Continent === "Antarctic");
  const AustraliaData = countries.filter((c) => c.Continent === "Oceania");

  const dataMap = {
    Asia: AsiaData,
    Africa: AfricaData,
    NorthAmerica: EuropeData,
    SouthAmerica: NorthAmericaData,
    Antarctica: SouthAmericaData,
    Europe: AntarcticaData,
    Australia: AustraliaData,
    // service: services,
  };
  const data = dataMap[activeTab];

  const tabs = [
    "Asia",
    "Africa",
    "NorthAmerica",
    "SouthAmerica",
    "Antarctica",
    "Europe",
    "Australia",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 mt-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Explore Destinations
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-6 py-2 rounded-full transition ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data?.map((item: any, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
          >
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src={item.Image}
                alt={item.Title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="p-3 font-semibold text-sm text-center">
              {item.Title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Domestic;
