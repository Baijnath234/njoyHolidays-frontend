import NavBar from "@/components/Layout/nabar";
import ProductDetails from "@/components/ProductDetails/productDetails";
import { mockTrips } from "@/components/welcome/Explore";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {

 const trip = mockTrips.find((t) => t.slug === params.slug);

  if (!trip) return notFound();

  return (
    <div>
      <NavBar />
      <ProductDetails trip={trip} />
    </div>
  );
}