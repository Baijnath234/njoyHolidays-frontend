'use client';
import NavBar from '@/components/nabar'
import Image from 'next/image';
import { motion } from 'framer-motion';

const destinations = [
  { name: 'Dubai', tag: 'Dazzling', image: '/dubai.jpg' },
  { name: 'Thailand', tag: 'Twinkling', image: '/thailand.jpg' },
  { name: 'Singapore', tag: 'Stunning', image: '/singapore.jpg' },
  { name: 'Malaysia', tag: 'Mesmerizing', image: '/malaysia.jpg' },
  { name: 'Bali', tag: 'Blissful', image: '/bali.jpg' },
  { name: 'Hong Kong', tag: 'Heavenly', image: '/bali.jpg' },
  { name: 'Europe', tag: 'Enchanting', image: '/bali.jpg' },
  { name: 'Vietnam', tag: 'Vibrant', image: '/bali.jpg' },
  { name: 'Australia', tag: 'Attractive', image: '/bali.jpg' },
  { name: 'Taiwan', tag: 'Blissful', image: '/bali.jpg' },
];

const page = () => {
  return (
    <>
    <NavBar/>

    <section>
         <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Popular Destinations</h1>

      {/* Destination Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {destinations.map((dest) => (
          <motion.div
            key={dest.name}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <Image
              src={dest.image}
              alt={dest.name}
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded">
              <p className="text-sm">{dest.tag}</p>
              <p className="text-lg font-bold">{dest.name}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative bg-white rounded-lg overflow-hidden shadow-xl"
      >
        <Image
          src="/bali-feature.jpg"
          alt="Bali Trip"
          width={1200}
          height={500}
          className="w-full object-cover h-[400px]"
        />
        <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black via-transparent text-white w-full">
          <h2 className="text-3xl font-bold">Bali</h2>
          <p className="text-xl mb-2">6N | 7D</p>
          <p className="text-lg font-semibold">Starting from ₹74,999</p>
          <div className="flex gap-4 mt-2 text-sm">
            <span>✈️ Flights</span>
            <span>🏨 Hotel</span>
            <span>🍽️ Meals</span>
            <span>🗺️ Sightseeing</span>
            <span>🚗 Transfers</span>
          </div>
        </div>
      </motion.div>
    </div>
    </section>
    </>
  )
}

export default page
