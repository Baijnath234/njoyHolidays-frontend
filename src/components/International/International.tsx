"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Country = {
  id: number;
  Title: string;
  Continent: string;
  Image: string;
};

const International = () => {
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,region,flags",
        );

        const data = await res.json();

        const formatted: Country[] = data.map(
          (
            c: {
              name: { common: string };
              region: string;
              flags: { png: string };
            },
            index: number,
          ) => ({
            id: index,
            Title: c.name.common,
            Continent: c.region,
            Image: c.flags.png,
          }),
        );

        setCountries(formatted);
      } catch (error) {
        console.error("Failed to load countries:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const dataMap = useMemo(
    () => ({
      Asia: countries.filter((c) => c.Continent === "Asia"),
      Africa: countries.filter((c) => c.Continent === "Africa"),
      Europe: countries.filter((c) => c.Continent === "Europe"),
      NorthAmerica: countries.filter((c) => c.Continent === "Americas"),
      SouthAmerica: countries.filter((c) => c.Continent === "Americas"),
      Antarctica: countries.filter((c) => c.Continent === "Antarctic"),
      Australia: countries.filter((c) => c.Continent === "Oceania"),
    }),
    [countries],
  );

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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 mt-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-10"
      >
        Explore Destinations
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center gap-2 sm:gap-4 mb-10 overflow-x-auto pb-2 px-4 sm:px-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as keyof typeof dataMap)}
            className={`px-3 sm:px-6 py-2 rounded-full transition whitespace-nowrap flex-shrink-0 ${
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
      {isLoading ? (
        <div className="text-center py-16 text-gray-500">Loading countries...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {data?.map((item: Country, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <div className="relative w-full h-32 sm:h-40 overflow-hidden">
                <Image
                  src={item.Image}
                  alt={item.Title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-2 sm:p-3 font-semibold text-xs sm:text-sm text-center">
                {item.Title}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default International;
