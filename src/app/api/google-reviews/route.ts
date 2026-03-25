export async function GET() {

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=reviews&key=YOUR_KEY`
  );

  const data = await res.json();

  console.log({data});
  

  return Response.json(data.result.reviews);
}