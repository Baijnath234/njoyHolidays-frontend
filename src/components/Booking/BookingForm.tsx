"use client";

import { useState } from "react";
import { useFetch } from "@/hooks/useApi";
import { API_ENDPOINTS, API_CONFIG } from "@/config/api";

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  numberOfPeople: number;
  travelDate: string;
  specialRequests: string;
}

interface BookingFormProps {
  onSubmit?: (data: BookingFormData) => void;
  isLoading?: boolean;
}

export function BookingForm({ onSubmit, isLoading = false }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    email: "",
    phone: "",
    numberOfPeople: 1,
    travelDate: "",
    specialRequests: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { makeRequest } = useFetch();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "numberOfPeople" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate form
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.travelDate
    ) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      // Submit booking to API
      const { data, error: apiError } = await makeRequest<any>(
        API_ENDPOINTS.BOOKINGS.CREATE,
        "POST",
        formData,
        { baseUrl: API_CONFIG.BASE_URL }
      );

      if (apiError) {
        throw new Error(apiError);
      }

      setSubmitted(true);

      // Call parent callback if provided
      if (onSubmit) {
        onSubmit(formData);
      }

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          numberOfPeople: 1,
          travelDate: "",
          specialRequests: "",
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit booking");
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Booking Submitted Successfully!
        </h3>
        <p className="text-green-700">
          We have received your booking request. Our team will contact you shortly to confirm the details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Booking Information</h2>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Full Name */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Number of People */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Number of People *
          </label>
          <select
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "Person" : "People"}
              </option>
            ))}
          </select>
        </div>

        {/* Travel Date */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Preferred Travel Date *
          </label>
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {/* Special Requests */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700 mb-2">
          Special Requests
        </label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          placeholder="Any special requirements or preferences?"
          rows={4}
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? "Processing..." : "Complete Booking"}
      </button>
    </form>
  );
}
