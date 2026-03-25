"use client";

import Footer from "@/app/(user)/components/Layout/Footer";
import NavBar from "@/app/(user)/components/Layout/nabar";
import Exploer from "@/app/(user)/components/welcome/Explore";
import FlightBooking from "@/app/(user)/components/welcome/FlightBooking";
import HotelBooking from "@/app/(user)/components/welcome/HotelBooking";
import Visa from "@/app/(user)/components/welcome/Visa";
import WelcomePage from "@/app/(user)/components/welcome/WelcomePage";
import Head from "next/head";
import PopularDestinations from "@/app/(user)/components/welcome/PopularDestinations";
import CustomerReviews from "@/app/(user)/components/welcome/CustomerReviews";
import WhyChooseUs from "@/app/(user)/components/welcome/WhyChooseUs";
import ContactCTA from "@/app/(user)/components/welcome/ContactCTA";

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
      <div>
        <Exploer />

        <HotelBooking />

        <FlightBooking />

        <Visa />

        <PopularDestinations />

        <WhyChooseUs />

        <CustomerReviews />

        <ContactCTA />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
