import React from "react";
import NavBar from "../components/Layout/nabar";
import Services from "../components/welcome/Services";
import Footer from "../components/Layout/Footer";

const page = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default page;
