import React from "react";
import HotelSearch from "./HotelSearch";
import Footer from "../Layout/Footer";

const Hotel = () => {
  return (
    <div>
      <section>
        <div className="absolute w-full h-[50vh] overflow-hidden top-20">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Find Your Perfect Hotel Stay
            </h1>

            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Search and compare flights from top airlines. Book the best deals
              for domestic and international travel.
            </p>
          </div>
        </div>
      </section>

      <section>
        <HotelSearch />
      </section>
      <div className="mx-auto relative top-130 ">
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
