export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.PLACE_ID}&fields=reviews&key=${process.env.GOOGLE_API_KEY}`,
    );

    const data = await res.json();

    if (!data?.result?.reviews) {
      return Response.json({ error: "No reviews found" }, { status: 404 });
    }

    return Response.json(data.result.reviews);
  } catch {
    return Response.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
