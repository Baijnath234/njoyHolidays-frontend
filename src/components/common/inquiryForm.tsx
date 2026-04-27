import React from "react";

const inquiryForm = () => {
  return (
    <section className="mt-20 bg-gray-100 p-8 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Need Help Booking a Hotel?
      </h2>

      <form className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded-md"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="border p-3 rounded-md"
        />

        <input
          type="text"
          placeholder="Destination"
          className="border p-3 rounded-md"
        />

        <input type="date" className="border p-3 rounded-md" />

        <textarea
          placeholder="Special Requests"
          className="border p-3 rounded-md md:col-span-2"
        />

        <button
          type="submit"
          className="bg-orange-500 text-white py-3 rounded-md md:col-span-2"
        >
          Send Booking Request
        </button>
      </form>

      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg"
      >
        Chat for Hotel Booking
      </a>
    </section>
  );
};

export default inquiryForm;
