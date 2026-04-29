import { mockTrips, Trip } from "../../../../data/trips";
import ProductDetails from "@/components/ProductDetails/productDetails";
import NavBar from '@/components/Layout/nabar';
import { API_CONFIG, API_ENDPOINTS } from "@/config/api";

const defaultImage =
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80";

const mapApiPackageToTrip = (item: any, index: number): Trip => ({
  slug: item.packageName
    ? item.packageName.toString().toLowerCase().replace(/\s+/g, "-")
    : item.slug || `package-${index}`,
  title: item.packageName || item.title || "Tour Package",
  image: item.imageUrl || defaultImage,
  locationLabel: item.destination || item.locationLabel || "Unknown",
  duration: item.duration || "N/A",
  location: item.destination || item.location || "Unknown",
  price: Number(item.price || item.dayNight?.[0]?.hotelPrice || 0) || 0,
  unit: item.unit || "person",
  buttonLabel: item.buttonLabel || "Book Now",
  highlights: item.highlights || [],
  inclusions: item.inclusions || [],
  exclusions: item.exclusions || [],
  itinerary: item.itinerary || [],
});

export async function generateStaticParams() {
  return mockTrips.map((trip) => ({
    slug: trip.slug,
  }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  let trip: Trip | undefined;
  let loadError: string | null = null;

  try {
    const res = await fetch(`${API_CONFIG.PACKAGES_API_URL}${API_ENDPOINTS.PACKAGES.GET_ALL}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      const message = await res.text();
      throw new Error(message || `Package API failed with status ${res.status}`);
    }

    const apiData = await res.json();

    if (!Array.isArray(apiData)) {
      throw new Error("Package API returned an invalid response.");
    }

    const apiTrips = apiData.map(mapApiPackageToTrip);
    trip = apiTrips.find((t) => t.slug === slug);
  } catch (error) {
    loadError = error instanceof Error ? error.message : "Package API load failed.";
    console.error("Package API load failed:", error);
  }

  if (!trip) {
    trip = mockTrips.find((t) => t.slug === slug);
  }

  if (!trip) {
    return <div className="p-6">Trip Not Found</div>;
  }

  return (
    <div>
      <NavBar />
      {loadError && (
        <div className="mx-auto mt-6 max-w-6xl rounded-lg bg-yellow-50 border border-yellow-200 p-4 text-yellow-800">
          Unable to load live package details. Showing fallback content instead.
        </div>
      )}
      <ProductDetails trip={trip} />
    </div>
  );
}
