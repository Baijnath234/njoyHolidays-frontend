// components/MatchmakerSection.ts

import Image from "next/image";

export default function MatchmakerSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-12 bg-white">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2">
      <div className="relative w-full h-80 md:h-[500px]">
          <Image
            src="/images/image9.jpg" 
            alt="Couple walking on water"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Your Matchmaker for the Perfect Trip
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
          From destination gurus to experts in all types of travel, we have the
          perfect Travel Consultant to help plan your trip of a lifetime. With
          a dedication to personalized one-on-one experiences, our experts will
          connect with you from anywhere at your convenience – online, by phone,
          or in-person if you’re in the same region. Our goal: save you time and
          make you fall in love with every trip.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded shadow">
          Meet Your Matchmaker
        </button>
      </div>
    </section>
  );
}
