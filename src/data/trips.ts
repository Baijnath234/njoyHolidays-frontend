import { StaticImageData } from "next/image";
import baliImage from "../../public/asset/images/Bali Adveture.jpg";

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Trip = {
  slug: string;
  title: string;
  image: string | StaticImageData;
  locationLabel: string;
  duration: string;
  location: string;
  price: number;
  unit: string;
  buttonLabel: string;

  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
};

export const mockTrips = [
  {
    slug: "bali-adventure-1", // ✅ FIX: unique slug
    title: "Bali Adventure Package",
    image: baliImage,
    locationLabel: "Bali, Indonesia",
    duration: "7 Nights & 8 Days",
    location: "Indonesia",
    price: 45999,
    unit: "person",
    buttonLabel: "Enquire Now",
    highlights: [],
    inclusions: [],
    exclusions: [],
    itinerary: [],
  },
  {
    slug: "bali-adventure-2",
    title: "Bali Adventure Package",
    image: baliImage,
    locationLabel: "Bali, Indonesia",
    duration: "7 Nights & 8 Days",
    location: "Indonesia",
    price: 45999,
    unit: "person",
    buttonLabel: "Enquire Now",

    // 🔥 NEW: Quotation Details
    quotationNumber: "QT-20260324-001",
    quotationDate: "2026-03-24",

    // 🔥 NEW: Passenger Details
    passengerDetails: [
      {
        name: "Rahul Sharma",
        age: 32,
        type: "Adult",
      },
      {
        name: "Priya Sharma",
        age: 28,
        type: "Adult",
      },
    ],

    // 🔥 UPDATED: Highlights
    highlights: [
      "Ubud Monkey Forest visit",
      "Tanah Lot Temple sunset tour",
      "Private beach experience in Nusa Dua",
      "Water sports adventure (Jet Ski, Banana Ride)",
    ],

    // 🔥 UPDATED: Inclusions
    inclusions: [
      "Airport pickup and drop",
      "4-star hotel accommodation",
      "Daily breakfast",
      "All sightseeing transfers",
      "English-speaking guide",
    ],

    // 🔥 UPDATED: Exclusions
    exclusions: [
      "Flight tickets",
      "Personal expenses",
      "Travel insurance",
      "Visa fees",
      "Extra meals not mentioned",
    ],

    // 🔥 UPDATED: Itinerary
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali",
        description:
          "Arrival at Denpasar Airport, transfer to hotel, check-in and relax.",
      },
      {
        day: 2,
        title: "Ubud Tour",
        description:
          "Visit Monkey Forest, Tegallalang Rice Terrace, and local markets.",
      },
      {
        day: 3,
        title: "Water Sports Day",
        description:
          "Enjoy Jet Ski, Banana Boat, and Parasailing at Nusa Dua Beach.",
      },
      {
        day: 4,
        title: "Temple Tour",
        description: "Visit Tanah Lot Temple and enjoy sunset views.",
      },
      {
        day: 5,
        title: "Leisure Day",
        description: "Free day for shopping and exploring Bali streets.",
      },
      {
        day: 6,
        title: "Island Exploration",
        description: "Visit nearby islands and enjoy beach activities.",
      },
      {
        day: 7,
        title: "Relaxation & Spa",
        description: "Enjoy Balinese spa and relaxation session.",
      },
      {
        day: 8,
        title: "Departure",
        description: "Check-out and transfer to airport for departure.",
      },
    ],
  },
];
