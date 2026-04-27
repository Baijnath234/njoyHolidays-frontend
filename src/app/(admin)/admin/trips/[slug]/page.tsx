import { mockTrips } from "@/data/trips";

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
  const trip = mockTrips.find((item) => item.slug === slug);

  if (!trip) {
    return <div className="p-6">Trip not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{trip.title}</h1>
      {/* PDF generation requires client-side, removed for static export */}
    </div>
  );
}