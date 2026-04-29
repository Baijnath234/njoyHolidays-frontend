"use client";

import { useApi } from "@/hooks/useApi";
import { API_ENDPOINTS, API_CONFIG } from "@/config/api";
import { format } from "date-fns";
import { Trash2, Eye } from "lucide-react";
import { useFetch } from "@/hooks/useApi";
import { useEffect, useState } from "react";

const LOCAL_BOOKINGS_KEY = "njoyHolidayzBookings";

interface Booking {
  id: string;
  _id?: string;
  fullName: string;
  email: string;
  phone: string;
  numberOfPeople: number;
  travelDate: string;
  specialRequests: string;
  createdAt: string;
  status?: "pending" | "confirmed" | "cancelled";
  packages?: Array<{
    slug: string;
    title: string;
    duration: string;
    price: number;
    quantity: number;
    unit: string;
  }>;
  totalAmount?: number;
}

const getBookingId = (booking: Booking) => booking.id || booking._id || "";

const saveLocalBookings = (bookings: Booking[]) => {
  window.localStorage.setItem(LOCAL_BOOKINGS_KEY, JSON.stringify(bookings));
};

export default function AdminBookingsPage() {
  const { data: bookings, status, error, reload } = useApi<Booking[]>(
    API_ENDPOINTS.BOOKINGS.GET_ALL,
    { baseUrl: API_CONFIG.BASE_URL }
  );

  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [localBookings, setLocalBookings] = useState<Booking[]>([]);
  const { makeRequest } = useFetch();

  useEffect(() => {
    const savedBookings = window.localStorage.getItem(LOCAL_BOOKINGS_KEY);

    if (!savedBookings) {
      return;
    }

    try {
      const parsedBookings = JSON.parse(savedBookings);
      if (Array.isArray(parsedBookings)) {
        setLocalBookings(parsedBookings);
      }
    } catch {
      setLocalBookings([]);
    }
  }, []);

  const apiBookings = Array.isArray(bookings) ? bookings : [];
  const apiBookingIds = new Set(apiBookings.map(getBookingId));
  const bookingList = [
    ...apiBookings,
    ...localBookings.filter((booking) => !apiBookingIds.has(getBookingId(booking))),
  ];
  const totalBookings = bookingList.length;
  const confirmedBookings = bookingList.filter(
    (booking) => booking.status === "confirmed",
  ).length;
  const pendingBookings = bookingList.filter(
    (booking) => !booking.status || booking.status === "pending",
  ).length;

  const handleDeleteBooking = async (bookingId: string) => {
    if (!confirm("Are you sure you want to delete this booking?")) return;

    const localBooking = localBookings.find(
      (booking) => getBookingId(booking) === bookingId,
    );

    if (localBooking) {
      const updatedBookings = localBookings.filter(
        (booking) => getBookingId(booking) !== bookingId,
      );
      setLocalBookings(updatedBookings);
      saveLocalBookings(updatedBookings);
      alert("Booking deleted successfully");
      return;
    }

    const endpoint = API_ENDPOINTS.BOOKINGS.DELETE.replace(":id", bookingId);
    const { error } = await makeRequest(endpoint, "DELETE");

    if (error) {
      alert("Error deleting booking: " + error);
    } else {
      alert("Booking deleted successfully");
      reload();
    }
  };

  const handleUpdateStatus = async (bookingId: string, newStatus: string) => {
    const localBooking = localBookings.find(
      (booking) => getBookingId(booking) === bookingId,
    );

    if (localBooking) {
      const updatedBookings = localBookings.map((booking) =>
        getBookingId(booking) === bookingId
          ? { ...booking, status: newStatus as Booking["status"] }
          : booking,
      );
      setLocalBookings(updatedBookings);
      saveLocalBookings(updatedBookings);
      alert("Booking updated successfully");
      return;
    }

    const endpoint = API_ENDPOINTS.BOOKINGS.UPDATE.replace(":id", bookingId);
    const { error } = await makeRequest(endpoint, "PUT", { status: newStatus });

    if (error) {
      alert("Error updating booking: " + error);
    } else {
      alert("Booking updated successfully");
      reload();
    }
  };

  if (status === "loading") {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Bookings</h1>
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <div className="animate-spin inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
          <p className="mt-4 text-gray-600">Loading bookings...</p>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Bookings</h1>
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg">
          Error loading bookings: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Bookings</h1>
        <button
          onClick={reload}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Refresh
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <div className="rounded-lg bg-white p-5 shadow">
          <p className="text-sm font-medium text-gray-500">Total Bookings</p>
          <p className="mt-3 text-3xl font-bold text-gray-900">
            {totalBookings}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            {confirmedBookings} confirmed, {pendingBookings} pending
          </p>
        </div>
      </div>

      {bookingList.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-600 text-lg">No bookings yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookingList.map((booking) => (
            <div
              key={getBookingId(booking)}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 border-l-4 border-blue-600"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {/* Customer Name */}
                <div>
                  <p className="text-sm text-gray-600">Customer Name</p>
                  <p className="font-semibold">{booking.fullName}</p>
                </div>

                {/* Email */}
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-blue-600">{booking.email}</p>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold">{booking.phone}</p>
                </div>

                {/* Travel Date */}
                <div>
                  <p className="text-sm text-gray-600">Travel Date</p>
                  <p className="font-semibold">{booking.travelDate}</p>
                </div>

                {/* Number of People */}
                <div>
                  <p className="text-sm text-gray-600">Travelers</p>
                  <p className="font-semibold">{booking.numberOfPeople} people</p>
                </div>

                {/* Booking Date */}
                <div>
                  <p className="text-sm text-gray-600">Booked On</p>
                  <p className="font-semibold">
                    {booking.createdAt
                      ? format(new Date(booking.createdAt), "MMM dd, yyyy")
                      : "N/A"}
                  </p>
                </div>

                {/* Status */}
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <select
                    value={booking.status || "pending"}
                    onChange={(e) =>
                      handleUpdateStatus(getBookingId(booking), e.target.value)
                    }
                    className={`px-3 py-1 rounded-full font-semibold text-sm ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              {booking.specialRequests && (
                <div className="mb-4 bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Special Requests</p>
                  <p>{booking.specialRequests}</p>
                </div>
              )}

              {booking.packages && booking.packages.length > 0 && (
                <div className="mb-4 bg-blue-50 p-3 rounded">
                  <p className="text-sm text-gray-600 mb-2">Booked Packages</p>
                  <div className="space-y-2">
                    {booking.packages.map((pkg) => (
                      <div
                        key={`${getBookingId(booking)}-${pkg.slug}`}
                        className="flex items-center justify-between gap-4 text-sm"
                      >
                        <div>
                          <p className="font-semibold">{pkg.title}</p>
                          <p className="text-gray-600">{pkg.duration}</p>
                        </div>
                        <p className="font-semibold">
                          {pkg.quantity} x {"\u20b9"}
                          {pkg.price.toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                  {booking.totalAmount ? (
                    <p className="mt-3 text-right font-bold text-gray-900">
                      Total: {"\u20b9"}{booking.totalAmount.toLocaleString()}
                    </p>
                  ) : null}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 justify-end pt-4 border-t">
                <button
                  onClick={() => setSelectedBooking(booking)}
                  className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition"
                >
                  <Eye size={18} />
                  View Details
                </button>

                <button
                  onClick={() => handleDeleteBooking(getBookingId(booking))}
                  className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded hover:bg-red-100 transition"
                >
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for viewing booking details */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4">Booking Details</h2>

            <div className="space-y-3 mb-6">
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-semibold">{selectedBooking.fullName}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold">{selectedBooking.email}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-semibold">{selectedBooking.phone}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Travel Date</p>
                <p className="font-semibold">{selectedBooking.travelDate}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Number of Travelers</p>
                <p className="font-semibold">{selectedBooking.numberOfPeople}</p>
              </div>

              {selectedBooking.specialRequests && (
                <div>
                  <p className="text-sm text-gray-600">Special Requests</p>
                  <p className="font-semibold">{selectedBooking.specialRequests}</p>
                </div>
              )}

              {selectedBooking.packages && selectedBooking.packages.length > 0 && (
                <div>
                  <p className="text-sm text-gray-600">Booked Packages</p>
                  <div className="mt-2 space-y-2">
                    {selectedBooking.packages.map((pkg) => (
                      <div key={`${getBookingId(selectedBooking)}-${pkg.slug}`}>
                        <p className="font-semibold">{pkg.title}</p>
                        <p className="text-sm text-gray-600">
                          {pkg.quantity} x {"\u20b9"}{pkg.price.toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedBooking.totalAmount ? (
                <div>
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="font-semibold">
                    {"\u20b9"}{selectedBooking.totalAmount.toLocaleString()}
                  </p>
                </div>
              ) : null}

              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className={`font-semibold ${
                  selectedBooking.status === "confirmed"
                    ? "text-green-600"
                    : selectedBooking.status === "cancelled"
                      ? "text-red-600"
                      : "text-yellow-600"
                }`}>
                  {(selectedBooking.status || "pending").toUpperCase()}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedBooking(null)}
              className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded font-semibold hover:bg-gray-300 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
