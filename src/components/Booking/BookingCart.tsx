"use client";

import { useBooking } from "@/hooks/useBooking";
import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";

export function BookingCart() {
  const { bookings, removeBooking, updateQuantity, totalPrice } = useBooking();

  if (bookings.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          No bookings yet
        </h2>
        <p className="text-gray-600">
          Add packages or trips to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Your Booking Cart</h2>

      <div className="space-y-4 mb-6">
        {bookings.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 flex gap-4 items-start"
          >
            {/* Image */}
            <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex-grow">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.duration}</p>
              <p className="font-semibold text-lg mt-2">
                ₹{(item.price * item.quantity).toLocaleString()} 
                <span className="text-sm font-normal text-gray-600">
                  {" "}(₹{item.price.toLocaleString()} × {item.quantity} {item.unit})
                </span>
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-2 border rounded hover:bg-gray-100"
              >
                <Minus size={18} />
              </button>
              <span className="w-8 text-center font-semibold">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-2 border rounded hover:bg-gray-100"
              >
                <Plus size={18} />
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeBooking(item.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Price Summary */}
      <div className="border-t pt-4 bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Subtotal:</span>
          <span className="font-semibold">₹{totalPrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Tax (10%):</span>
          <span className="font-semibold">₹{(totalPrice * 0.1).toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center text-lg font-bold border-t pt-2 mt-2">
          <span>Total:</span>
          <span>₹{(totalPrice * 1.1).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
