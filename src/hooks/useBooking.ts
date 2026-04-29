"use client";

import { useContext } from "react";
import { BookingContext, BookingContextType } from "@/context/BookingContext";

export function useBooking(): BookingContextType {
  const context = useContext(BookingContext);
  
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  
  return context;
}
