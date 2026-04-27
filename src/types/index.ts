
export type Room = {
  roomType: string;
  meal: string;
  pax: number;
  date: string;
  rate: number;
};

// export interface Trip {
//   slug: string;
//   title: string;
//   image: string;
//   locationLabel: string;
//   duration: string;
//   location: string;
//   price: number;
//   unit: string;
//   destination: string;
//   days:number;
//   nights:number;
//   rooms: Room[];
//   buttonLabel: string;
//   highlights: string[];
//   inclusions: string[];
//   exclusions: string[];
//   itinerary: string[];
// }

export interface Trip  {
  travelDate: string;
  adults: number;
  children: number;
  nights: number;
  days: number;
  hotelType: string;
  mealPlan: string;
  transport: string;
  destination: string;
  flightSource: string;
  rooms: Room[];
};