import { mockTrips } from "@/components/welcome/Explore";
import ProductDetails from "@/components/ProductDetails/productDetails";
import { notFound } from "next/navigation";

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

  if (!trip) return notFound();

  return <ProductDetails trip={trip} />;
}