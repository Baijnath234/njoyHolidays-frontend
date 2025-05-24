"use client";

import Footer from "@/components/Footer";
import LuxuryDestinations from "@/components/LuxuryDestinations";
import MatchmakerSection from "@/components/MatchmakerSection";
import NavBar from "@/components/nabar";
import OffresPage from "@/components/offers";
import TestimonialSection from "@/components/TestimonialSection";
import TripCard from "@/components/TripCard";
import WelcomePage from "@/components/WelcomePage";
import Head from "next/head";

export default function Home() {
  const mockTrips = [
    {
      image: "/images/image7.jpg",
      title: "Bali Adventure Package",
      locationLabel: "Bali, Indonesia",
      duration: "7 Days",
      location: "Ubud",
      price: 29999,
      unit: "person",
      buttonLabel: "Book Now",
      partnerLogo: "/images/trips/partner-logo.png",
      partnerText: "In partnership with GoTravel",
    },
    {
      image: "/images/image8.jpg",
      title: "Mountain Escape",
      locationLabel: "Swiss Alps",
      duration: "5 Days",
      location: "Zermatt",
      price: 45999,
      unit: "person",
      buttonLabel: "Explore Now",
    },
    {
      image: "/images/image9.jpg",
      title: "Romantic Paris Getaway",
      locationLabel: "Paris, France",
      duration: "3 Days",
      location: "Eiffel Tower",
      price: 38999,
      unit: "couple",
      buttonLabel: "Book Now",
      partnerLogo: "/images/trips/partner-logo.png",
      partnerText: "Sponsored by EuroTrips",
    },
  ];

  return (
    <>
      <Head>
        <title>NJOY Holiday&apos;s</title>
      </Head>

      <main className="min-h-[80vh] text-white font-sans relative overflow-hidden">
        {/* NavBar section */}
        <div className="relative z-30">
          <NavBar />
        </div>
        {/* Hero Section */}
        <section className="relative z-0">
          <WelcomePage />
        </section>
      </main>
      {/* Trip Cards Section */}
      <section className="relative px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Explore Our Top Packages
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {/* Ideally you map multiple trips here */}
          {mockTrips.map((trip, index) => (
            <TripCard key={index} trip={trip} />
          ))}
        </div>
      </section>

      {/* Matchmaker Section */}
      <section className="relative z-0 mt-28">
        <MatchmakerSection />
      </section>

      {/* Luxury Destinations Section */}
      <section className="relative z-0 mt-28">
        <LuxuryDestinations />
      </section>

      {/* Offers Section */}
      <section className="relative z-0 mt-28">
        <OffresPage />
      </section>

      {/* Testimonials Section */}
      <section className="relative z-0 mt-28">
        <TestimonialSection />
      </section>

      {/* Footer */}
      <section className="relative z-0 mt-28">
        <Footer />
      </section>
    </>
  );
}
