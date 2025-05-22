
export const PackageData = [
  {
    id: "pkg_001",
    title: "2 Nights 3 Days in Paris",
    location: {
      city: "Paris",
      country: "France",
    },
    category: "Weekend Getaway", // or "Adventure", "Romantic", etc.
    duration: {
      nights: 2,
      days: 3,
    },
    price: 299.99,
    itinerary: [
      {
        day: 1,
        activities: ["Arrival", "City Tour", "Eiffel Tower Visit"],
      },
      {
        day: 2,
        activities: ["Louvre Museum", "Seine Cruise"],
      },
      {
        day: 3,
        activities: ["Montmartre", "Departure"],
      },
    ],
    inclusions: ["Hotel", "Breakfast", "City Tour"],
    exclusions: ["Flights", "Lunch", "Dinner"],
    availableDates: ["2025-06-10", "2025-07-01"],
    createdAt: "2025-05-18T10:00:00Z",
  },
  {
    id: "pkg_002",
    title: "2 Nights 3 Days in Paris",
    location: {
      city: "Paris",
      country: "France",
    },
    category: "Weekend Getaway", // or "Adventure", "Romantic", etc.
    duration: {
      nights: 2,
      days: 3,
    },
    price: 299.99,
    itinerary: [
      {
        day: 1,
        activities: ["Arrival", "City Tour", "Eiffel Tower Visit"],
      },
      {
        day: 2,
        activities: ["Louvre Museum", "Seine Cruise"],
      },
      {
        day: 3,
        activities: ["Montmartre", "Departure"],
      },
    ],
    inclusions: ["Hotel", "Breakfast", "City Tour"],
    exclusions: ["Flights", "Lunch", "Dinner"],
    availableDates: ["2025-06-10", "2025-07-01"],
    createdAt: "2025-05-18T10:00:00Z",
  },
];

export const DestinationData = [
  {
    id: "dest_001",
    name: "Paris",
    country: "France",
    description: "City of lights and love",
    images: ["eiffel.jpg"],
  },
];

export const HotelsData = [
  {
    id: "hotel_001",
    name: "Hilton Paris",
    location: {
      city: "Paris",
      country: "France",
    },
    stars: 5,
    amenities: ["WiFi", "Pool", "Breakfast"],
    pricePerNight: 120.0,
    availableRooms: 10,
  },
];

export const FightData = [
  {
    id: "flight_001",
    airline: "Air France",
    from: "New York",
    to: "Paris",
    departure: "2025-06-15T10:00:00Z",
    arrival: "2025-06-15T20:00:00Z",
    price: 600.0,
  },
];

export const visaData = [
  {
    id: "visa_001",
    country: "France",
    requirements: ["Passport", "Photo", "Proof of Funds"],
    processingTime: "5-10 Business Days",
    fee: 90.0,
  },
];
