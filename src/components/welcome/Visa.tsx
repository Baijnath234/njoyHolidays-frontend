import React from "react";
import Card from "../common/card";

const Visa = () => {
  return (
    <>
      <section className="bg-white mt-30">
         {/* HERO */}
      <main className="from-indigo-700 to-blue-600 text-black">
        <div className="flex items-center justify-center px-6 text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold">
              Visa Consultancy Services
            </h1>
            <p className="mt-6 text-lg opacity-90">
              Expert guidance for visa applications, renewals, and complex visa
              issues — all in one place.
            </p>
            <button className="mt-8 px-8 py-3 bg-[#faca2d]/100 text-black rounded-full font-semibold hover:bg-[#0dbeff]/100 transition">
              Get Free Consultation
            </button>
          </div>
        </div>
      </main>

      {/* VISA SERVICES/  VISA RENEWAL/  VISA PROBLEM SOLUTIONS  */}
      <section
        title="Our Visa Services"
        sub-title="We handle your visa process with accuracy, speed, and professionalism."
        className="flex items-center justify-center text-center mt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto justify-items-center">
          <Card
            title="Tourist Visa"
            description="Assistance for tourist visas including documentation, appointment booking, and application filing."
          />
          <Card
            title="Business Visa"
            description="Professional support for business visas, invitations, and compliance requirements."
          />
          <Card
            title="Student Visa"
            description="Complete guidance for student visas, offer letters, and embassy interviews."
          />
          <Card
            title="Visa Extension"
            description="Extend your existing visa legally with proper documentation."
          />
          {/* <Card
            title="Residence Permit Renewal"
            description="Renew residence permits and long-term visas efficiently."
          />
          <Card
            title="Overstay Regularization"
            description="Legal solutions for visa overstays and penalties."
          />
          <Card
            title="Visa Rejection"
            description="Analyze rejection reasons and reapply with a stronger profile."
          />
          <Card
            title="Blacklisting Issues"
            description="Legal assistance for blacklist removal and appeals."
          />
          <Card
            title="Document Issues"
            description="Correction and verification of visa-related documents."
          />
          <Card
            title="Emergency Cases"
            description="Urgent visa assistance for medical or legal emergencies."
          /> */}
        </div>
      </section>

      {/* CONTACT */}
      <section
        title="Contact Us for Visa Assistance"
        sub-title="Talk to our experts and get the right solution for your visa needs."
        className="flex items-center justify-center text-center py-6"
      >
        <form className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <input className="border p-4 rounded-xl" placeholder="Full Name" />
          <input
            className="border p-4 rounded-xl"
            placeholder="Email Address"
          />
          <input
            className="border p-4 rounded-xl"
            placeholder="Country You Are Applying For"
          />
          <input className="border p-4 rounded-xl" placeholder="Visa Type" />
          <textarea
            className="border p-4 rounded-xl md:col-span-2"
            rows={4}
            placeholder="Describe Your Visa Issue"
          />
          <button className="bg-[#0dbeff]/100 text-white py-3 px-8 rounded-xl hover:bg-[#faca2d] transition w-fit">
            Request Consultation
          </button>
        </form>
      </section>
      </section>
    </>
  );
};

export default Visa;
