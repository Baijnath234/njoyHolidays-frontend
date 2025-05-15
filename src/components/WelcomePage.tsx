"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "/images/beach.jpg",
    title: "Let's Go with Enjoy Holidays",
  },
  {
    image: "/images/image.jpg",
    title: "SAVE AT SANDALS® RESORTS",
  },
  {
    image: "/images/image6.jpg",
    title: "EXPERIENCE LUXURY IN PARADISE",
  },
];

const WelcomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-screen">
            {/* <img
              src="/images/logo2.png"
              alt="Logo"
              className="absolute align-items-center justify-content-center w-50 z-20"
            /> */}
            {/* Background image (full width and height) */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center blur-[2px] brightness-75 z-0"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white tracking-tight leading-tight mb-6 animate-fadeIn">
                {slide.title}
              </h1>
              <p className="text-center text-lg md:text-2xl font-medium text-gray-300 max-w-2xl mb-8 animate-fadeIn delay-200">
                UP TO 65% OFF AND UP TO ₹100 INSTANT CREDITS
              </p>
              <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 px-10 py-4 rounded-full text-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 animate-fadeIn delay-400">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WelcomePage;
