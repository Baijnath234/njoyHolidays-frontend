export type Package = {
  title: string;
  location: {
    city: string;
    country: string;
  };
  category: string;
  duration: {
    nights: number;
    days: number;
  };
  price: number;
  itinerary: {
    day: number;
    activities: string[];
  }[];
  inclusions: string[];
  exclusions: string[];
  availableDates: string[];
};