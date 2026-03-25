"use client";
import React from "react";

const Searchbar = () => {
  return (
      <div className="bg-white rounded-full flex items-center px-6 py-4 w-full max-w-3xl shadow-2xl border-2 border-gray-200 animate-slideInUp">
        <input
          type="text"
          placeholder="Where to?"
          className="flex-grow p-2 text-gray-800 placeholder-gray-500 outline-none text-lg"
        />
        <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-6 py-2 rounded-full text-xl font-bold transition-all duration-300">
          →
        </button>
      </div>
  );
};

export default Searchbar;
