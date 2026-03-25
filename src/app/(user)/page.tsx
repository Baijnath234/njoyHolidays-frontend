"use client";

import Footer from "../(user)/components/Layout/Footer";
import NavBar from "../(user)/components/Layout/nabar";
import Explore from "../(user)/components/welcome/Explore";
import FlightBooking from "../(user)/components/welcome/FlightBooking";
import HotelBooking from "../(user)/components/welcome/HotelBooking";
import Visa from "../(user)/components/welcome/Visa";
import WelcomePage from "../(user)/components/welcome/WelcomePage";
import Head from "next/head";
import PopularDestinations from "../(user)/components/welcome/PopularDestinations";
import CustomerReviews from "../(user)/components/welcome/CustomerReviews";
import WhyChooseUs from "../(user)/components/welcome/WhyChooseUs";
import ContactCTA from "../(user)/components/welcome/ContactCTA";

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