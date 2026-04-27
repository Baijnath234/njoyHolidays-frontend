// export const dynamic = "auto";

// export async function GET() {
//   try {
//     const res = await fetch(
//       `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.PLACE_ID}&fields=reviews&key=${process.env.GOOGLE_API_KEY}`
//     );

//     if (!res.ok) {
//       return Response.json(
//         { error: "Google API failed" },
//         { status: res.status }
//       );
//     }

//     const data = await res.json();

//     if (!data?.result?.reviews) {
//       return Response.json(
//         { error: "No reviews found" },
//         { status: 404 }
//       );
//     }

//     return Response.json(data.result.reviews);
//   } catch (error) {
//     console.error("Google Reviews API Error:", error);

//     return Response.json(
//       { error: "Failed to fetch reviews" },
//       { status: 500 }
//     );
//   }
// }
