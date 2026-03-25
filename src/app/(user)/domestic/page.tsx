"use client";
import Footer from "@/app/(user)/components/Layout/Footer";
import NavBar from "@/app/(user)/components/Layout/nabar";
import Domestic from "@/app/(user)/components/domestic/Domestic";



const page = () => {
  return (
    <>
      <NavBar />
      <Domestic/>
      <Footer/>
    </>
  );
};

export default page;
