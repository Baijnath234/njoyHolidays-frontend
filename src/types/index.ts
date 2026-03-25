export interface Trip {
  slug: string;
  title: string;
  image: string;
  locationLabel: string;
  duration: string;
  location: string;
  price: number;
  unit: string;
  buttonLabel: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: string[];
}