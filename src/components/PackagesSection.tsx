import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import PackageCard from "./common/packageCards";
import {PackageData} from '../data/data'

const packagesData = [
  {
    title: "Paragliding In Bir, Stunning Dhauladhar Views At Colonel's Resort",
    location: "Himachal Pradesh",
    price: "₹9,990 / person",
    duration: "3D - 2N",
    image: "/images/image1.jpg",
    badge: "Tripoto's Mindful Retreats",
    button: "Book Now",
  },
  {
    title: "Conquer The Kuari Pass: Your Himalayan Adventure Begins Here",
    location: "Uttarakhand",
    price: "₹8,800 / person",
    duration: "6D - 5N",
    image: "/images/image2.jpg",
    badge: "Tripoto Verified Partners",
    button: "Get Quotes",
  },
  {
    title: "Wake Up To Ocean Views At This Iconic Resort In The Andaman Islands",
    location: "Andaman and Nicobar",
    price: "₹1,33,700 / couple",
    duration: "5D - 4N",
    image: "/images/image3.jpg",
    badge: "Flights Not Included",
    button: "Book Now",
  },
  {
    title: "Explore The Enchanting Beauty Of The Maldives With Tripoto",
    location: "Maldives",
    price: "₹1,20,000 / couple",
    duration: "5D - 4N",
    image: "/images/image4.jpg",
    badge: "Tripoto's Mindful Retreats",
    button: "Book Now",
  },
  {
    title: "Discover The Hidden Gems Of Bali With Tripoto",
    location: "Bali, Indonesia",
    price: "₹1,00,000 / couple",
    duration: "6D - 5N",
    image: "/images/image5.jpg",
    badge: "Tripoto Verified Partners",
    button: "Get Quotes",
  }
  // Add more slides if you want
];

export default function PackagesSectio() {
  return (
    <>
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Exclusively Curated:{" "}
          <span className="text-blue-600">Tripoto&apos;s Mindful Retreats</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {packagesData.map((pkg:any, idx:any) => (
            <SwiperSlide key={idx}>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {pkg.badge}
                </div>

                {/* Image */}
                <div className="relative h-56 w-full">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-400">{pkg.duration}</p>
                  <h3 className="text-lg font-semibold mt-2 text-gray-800">
                    {pkg.title}
                  </h3>
                  <p className="text-blue-500 mt-3 font-medium">
                    {pkg.location}
                  </p>
                  <p className="text-gray-700 font-bold mt-1">{pkg.price}</p>

                  <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-full font-semibold hover:from-blue-600 hover:to-blue-800 transition-all">
                    {pkg.button}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-y-auto p-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Travel Packages
          </h1>
          <div className="space-y-6">
            {PackageData.map((pkg:any) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
