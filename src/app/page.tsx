"use client";

import Footer from "@/components/Layout/Footer";
import NavBar from "@/components/Layout/nabar";
import Exploer from "@/components/welcome/Explore";
import FlightBooking from "@/components/welcome/FlightBooking";
import HotelBooking from "@/components/welcome/HotelBooking";
import Visa from "@/components/welcome/Visa";
import WelcomePage from "@/components/welcome/WelcomePage";
import Head from "next/head";
import PopularDestinations from "@/components/welcome/PopularDestinations";
import CustomerReviews from "@/components/welcome/CustomerReviews";
import WhyChooseUs from "@/components/welcome/WhyChooseUs";
import ContactCTA from "@/components/welcome/ContactCTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>NJOY Holiday&apos;s</title>
      </Head>

      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <main className="relative z-0">
        <WelcomePage />
      </main>

      {/* Sections Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Exploer />

        <HotelBooking />

        <FlightBooking />

        <Visa />

        <PopularDestinations />

        <CustomerReviews />

        <WhyChooseUs />

        <ContactCTA />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
