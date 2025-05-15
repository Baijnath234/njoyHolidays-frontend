// pages/klook.js
import dynamic from "next/dynamic";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

export default function OffresPage() {
  const offers = [
    {
      id: 1,
      title: "Travel eSIM up for grabs!",
      description:
        "Stay online the smart way with Klook's Exclusive Travel eSIM deals.",
      image: "/images/luxury6.jpg",
      buttonLabel: "Book now",
      buttonLink: "#",
    },
    {
      id: 2,
      title: "Explore Top Attractions!",
      description: "Skip the lines and discover wonders with unbeatable deals.",
      image: "/images/luxury10.jpg",
      buttonLabel: "Explore now",
      buttonLink: "#",
    },
    {
      id: 3,
      title: "Stay Connected Always",
      description: "Get global coverage with our top travel eSIM options.",
      image: "/images/luxury2.jpg",
      buttonLabel: "Get yours",
      buttonLink: "#",
    },
    {
      id: 4,
      title: "Adventure Awaits!",
      description: "From safaris to city tours — find your next thrill.",
      image: "/images/luxury1.jpg",
      buttonLabel: "Adventure",
      buttonLink: "#",
    },
    {
      id: 5,
      title: "Plan your dream trip",
      description:
        "Flexible bookings & exclusive discounts for early planners!",
      image: "/images/luxury8.jpg",
      buttonLabel: "Plan now",
      buttonLink: "#",
    },
    {
      id: 6,
      title: "VIP Airport Access",
      description: "Upgrade your journey with lounge access & VIP perks.",
      image: "/images/luxury5.jpg",
      buttonLabel: "Upgrade",
      buttonLink: "#",
    },
  ];

  const carouselResponsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="px-16 py-12 max-w-screen-xl mx-auto">
      {/* Offers Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gradient bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          Exclusive Offers For You ✨
        </h2>
        <Carousel
          responsive={carouselResponsive}
          infinite
          arrows
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          showDots={true}
          containerClass="carousel-container"
          itemClass="px-4"
        >
          {offers.map((offer) => (
            <div key={offer.id} className="relative">
              {/* Badge */}
              <span className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                NEW
              </span>

              {/* Offer Card */}
              <div className="w-[340px] h-[380px] rounded-2xl bg-white shadow-2xl text-gray-800 p-0 flex flex-col justify-between hover:scale-105 transition-all duration-500 overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold leading-snug mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-gray-600">{offer.description}</p>

                  <a
                    href={offer.buttonLink}
                    className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md font-semibold shadow-md transition-colors hover:from-pink-500 hover:to-red-500"
                  >
                    {offer.buttonLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Why Choose NJOY Holiday's Section */}
      <section>
        <h2 className="text-4xl font-extrabold mb-14 text-center text-indigo-700">
          Why Choose NJOY Holiday's 🚀
        </h2>
        <div className="grid md:grid-cols-4 gap-10 text-center">
          {[
            {
              title: "Discover Endless Possibilities",
              desc: "Half a million attractions, hotels & more — your journey begins here.",
              icon: "🧭",
            },
            {
              title: "Unbeatable Deals",
              desc: "Great activities, better prices. Plus, earn Klook credits to save more.",
              icon: "🎉",
            },
            {
              title: "Effortless Exploring",
              desc: "Book last minute, skip queues, enjoy free cancellations anytime.",
              icon: "📱",
            },
            {
              title: "Travel With Confidence",
              desc: "Thousands of trusted reviews and 24/7 support — we've got your back.",
              icon: "🎈",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-500 hover:scale-105"
            >
              <div className="text-5xl mb-6">{item.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-indigo-700">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
