import { mockTrips } from "@/data/trips";
import { API_CONFIG, API_ENDPOINTS } from "@/config/api";

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

export default async function TripDetails({ params }: Props) {
  const { slug } = await params;

  let apiTrip: any = null;
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

    apiTrip = apiData.find(
      (item: any) =>
        (item.packageName || item.title || item.slug)
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "-") === slug,
    );
  } catch (error) {
    loadError = error instanceof Error ? error.message : "Unable to load package details.";
    console.error("Unable to load package details:", error);
  }

  const mockTrip = mockTrips.find((item) => item.slug === slug);
  const trip = apiTrip || mockTrip;

  if (!trip) {
    return <div className="p-6">Trip not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow">
      {loadError && (
        <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4 text-yellow-800">
          Unable to load live package details. Showing fallback content instead.
        </div>
      )}

      <h1 className="text-3xl font-bold">
        {apiTrip ? apiTrip.packageName || apiTrip.title : trip.title}
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-sm text-gray-500">Destination</p>
          <p className="text-lg font-medium">
            {apiTrip?.destination || trip.locationLabel}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Duration</p>
          <p className="text-lg font-medium">
            {apiTrip?.duration || trip.duration}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Persons</p>
          <p className="text-lg font-medium">
            {apiTrip?.noOfPersons || "N/A"}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Hotel</p>
          <p className="text-lg font-medium">
            {apiTrip?.dayNight?.[0]?.hotelName || trip.locationLabel}
          </p>
        </div>
      </div>

      {apiTrip?.dayNight && (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Day-wise Plan</h2>
          <div className="space-y-4">
            {apiTrip.dayNight.map((day: any, index: number) => (
              <div key={index} className="rounded-lg border p-4">
                <p className="font-semibold">{day.dayName || `Day ${index + 1}`}</p>
                <p>{day.hotelName || "Hotel details not available"}</p>
                <p>{day.roomType || "Room type not available"}</p>
                <p>{day.mealPlan ? `Meal plan: ${day.mealPlan}` : "Meal plan not available"}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {!apiTrip && (
        <div>
          <p className="text-sm text-gray-500">Agency fallback content</p>
          <p className="mt-2 text-base text-gray-700">
            This view is showing mock package details because the live API data is unavailable.
          </p>
        </div>
      )}
    </div>
  );
}
