"use client";

const reviews = [
  {
    name: "Rahul Sharma",
    text: "Amazing experience! The Bali package was well organized and affordable.",
  },
  {
    name: "Priya Singh",
    text: "Booked Dubai tour with Njoy Holidays. Everything was perfect!",
  },
  {
    name: "Amit Kumar",
    text: "Best travel agency. Visa process was very smooth.",
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-16 bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <p className="text-gray-600 mb-4">
                ⭐⭐⭐⭐⭐
              </p>

              <p className="text-gray-700 italic mb-4">
                {review.text}
              </p>

              <h4 className="font-semibold">
                {review.name}
              </h4>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}