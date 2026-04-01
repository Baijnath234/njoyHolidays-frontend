
type Room = {
  roomType: string;
  meal: string;
  pax: number;
  date: string;
  rate: number;
};

export interface Trip {
  slug: string;
  title: string;
  image: string;
  locationLabel: string;
  duration: string;
  location: string;
  price: number;
  unit: string;
  destination: string;
  days:number;
  nights:number;
  rooms: Room[];
  buttonLabel: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: string[];
}