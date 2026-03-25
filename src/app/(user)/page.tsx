"use client";

import Footer from "@/components/Layout/Footer";
import NavBar from "@/components/Layout/nabar";
import Explore from "@/components/welcome/Explore";
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

      <NavBar />

      <main className="relative z-0">
        <WelcomePage />
      </main>

      <div>
        <Explore />
        <HotelBooking />
        <FlightBooking />
        <Visa />
        <PopularDestinations />
        <WhyChooseUs />
        <CustomerReviews />
        <ContactCTA />
      </div>

      <Footer />
    </>
  );
}