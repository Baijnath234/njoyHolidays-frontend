"use client";

import React, { createContext, useState, useCallback, ReactNode } from "react";

export interface BookingItem {
  id: string;
  slug: string;
  title: string;
  price: number;
  unit: string;
  image: any;
  duration: string;
  quantity: number;
  addedAt: Date;
}

export interface BookingContextType {
  bookings: BookingItem[];
  addBooking: (item: Omit<BookingItem, "id" | "addedAt" | "quantity">) => void;
  removeBooking: (id: string) => void;
  clearBookings: () => void;
  updateQuantity: (id: string, quantity: number) => void;
  totalPrice: number;
}

export const BookingContext = createContext<BookingContextType | undefined>(
  undefined
);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<BookingItem[]>([]);

  const addBooking = useCallback(
    (item: Omit<BookingItem, "id" | "addedAt" | "quantity">) => {
      setBookings((prev) => {
        const existingItem = prev.find((b) => b.slug === item.slug);

        if (existingItem) {
          // Update quantity if item already exists
          return prev.map((b) =>
            b.slug === item.slug ? { ...b, quantity: b.quantity + 1 } : b
          );
        }

        // Add new item
        return [
          ...prev,
          {
            ...item,
            id: `${item.slug}-${Date.now()}`,
            quantity: 1,
            addedAt: new Date(),
          },
        ];
      });
    },
    []
  );

  const removeBooking = useCallback((id: string) => {
    setBookings((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeBooking(id);
      return;
    }

    setBookings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, [removeBooking]);

  const clearBookings = useCallback(() => {
    setBookings([]);
  }, []);

  const totalPrice = bookings.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        removeBooking,
        clearBookings,
        updateQuantity,
        totalPrice,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
