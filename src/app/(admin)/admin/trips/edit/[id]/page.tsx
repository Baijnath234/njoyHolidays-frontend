import React from 'react'
import { mockTrips } from '@/data/trips'

export async function generateStaticParams() {
  return mockTrips.map((trip) => ({
    id: trip.slug,
  }));
}

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const page = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <div>Edit page for {id}</div>
  )
}

export default page