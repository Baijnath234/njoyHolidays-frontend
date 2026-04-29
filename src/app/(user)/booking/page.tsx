"use client";

import { useState } from "react";
import NavBar from "@/components/Layout/nabar";
import Footer from "@/components/Layout/Footer";
import { BookingCart } from "@/components/Booking/BookingCart";
import { BookingForm } from "@/components/Booking/BookingForm";
import { useBooking } from "@/hooks/useBooking";
import Link from "next/link";

export default function BookingPage() {
  const { bookings, clearBookings } = useBooking();

  const handleBookingComplete = () => {
    // Optionally clear bookings after successful submission
    setTimeout(() => {
      clearBookings();
    }, 3000);
  };

  return (
    <>
      <NavBar />

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Complete Your Booking
            </h1>
            <p className="text-gray-600">
              Review your selections and provide your details to finalize your booking.
            </p>
          </div>

          {bookings.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">📦</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-6">
                Add packages or trips to get started!
              </p>
              <Link
                href="/product/bali-adventure-1"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all"
              >
                Browse Packages
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Section */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="sticky top-6">
                  <BookingCart />
                </div>
              </div>

              {/* Booking Form Section */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <BookingForm onSubmit={handleBookingComplete} />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
