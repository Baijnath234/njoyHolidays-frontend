import { mockTrips } from "../../../../data/trips";
import ProductDetails from "@/app/(user)/components/ProductDetails/productDetails";
import NavBar from "@/app/(user)/components/Layout/nabar";

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

  const trip = mockTrips.find((t) => t.slug === slug);

  if (!trip) {
    return <div>Trip Not Found</div>;
  }

  return (
    <div>
      <NavBar />
      <ProductDetails trip={trip} />
    </div>
  );
}
