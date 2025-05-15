import Image from "next/image";

const destinations = [
  { name: "Ireland", image: "/images/luxury1.jpg" },
  { name: "UK", image: "/images/luxury2.jpg" },
  { name: "Classic Europe", image: "/images/luxury3.jpg" },
  { name: "Africa", image: "/images/luxury4.jpg" },
  { name: "The Americas", image: "/images/luxury5.jpg" },
  { name: "Asia", image: "/images/luxury6.jpg" },
  { name: "Exotic Islands", image: "/images/luxury7.jpg" },
  { name: "Polar Regions", image: "/images/luxury8.jpg" },
  { name: "Oceania", image: "/images/luxury9.jpg" },
];

export default function LuxuryDestinations() {
  return (
    <section className="bg-[#faf9f6] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title and Description */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-gray-800 mb-6">
            Luxury Destinations
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Let Adams & Butler open up a world of wonder and create magical memories
            that stay with you far beyond your travels. Whether you're seeking a cultural city break,
            a child-friendly family holiday, unlimited adventure, a romantic escape, or a unique journey,
            we're here to handcraft every moment just for you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group transform hover:scale-105 transition duration-500 ease-in-out"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                width={400}
                height={300}
                className="object-cover w-full h-64 brightness-90 group-hover:brightness-75 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute bottom-4 left-4 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-white text-2xl font-semibold drop-shadow-lg">
                  {dest.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
