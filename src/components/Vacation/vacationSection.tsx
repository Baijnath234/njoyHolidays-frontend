"use client";

import React from "react";
import SummarVacation from "../Vacation/SummarVacation";
import WinterVacation from "./WinterVacation";
import VacationCategories from "./VacationCateogies";
import Footer from "../Layout/Footer";


const VacationSection = () => {

  return (
    <div>
      <section>
        <div className="absolute w-full h-[50vh] overflow-hidden top-20">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Discover Your Next Vacation
            </h1>

            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Explore amazing destinations, exclusive deals, and unforgettable
              travel experiences.
            </p>

            <button className="mt-6 px-6 py-3 bg-[#0dbeff] hover:bg-[#0aa8e0] text-white font-semibold rounded-lg transition">
              Explore Packages
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto relative top-130 ">
        <SummarVacation />
      </div>
      <div className="mx-auto relative top-130 ">
        <WinterVacation />
      </div>
      <div className="mx-auto relative top-130 ">
        <VacationCategories />
      </div>
      <div className="mx-auto relative top-130 ">
        <Footer />
      </div>
    </div>
  );
};

export default VacationSection;
