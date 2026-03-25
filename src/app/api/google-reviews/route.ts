export const dynamic = "force-dynamic";

export async function GET() {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.PLACE_ID}&fields=reviews&key=${process.env.GOOGLE_API_KEY}`,
  );

  const data = await res.json();

  return Response.json(data.result.reviews);
}
