"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../../public/asset/images/Banner.png";
import Banner1 from "../../public/asset/images/Banner1.png";
import Banner2 from "../../public/asset/images/Banner2.png";

const slides = [
  { image: Banner.src },
  { image: Banner1.src },
  { image: Banner2.src },
];

const WelcomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[70vh]">
            {/* Use an img tag for better image scaling */}
            <div className="absolute w-full">
              <img src={slide.image} className="w-full h-[70vh]" />
              {/* Button centered over image */}
              <div className="relative inset-0 flex items-center justify-center z-10">
                <button className="...">Learn More</button>
              </div>
            </div>

            {/* Centered Button */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 px-10 py-4 rounded-full text-xl font-semibold shadow-lg transform transition-all duration-500 animate-bounce-in">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-bounce-in {
          animation: bounce-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WelcomePage;
