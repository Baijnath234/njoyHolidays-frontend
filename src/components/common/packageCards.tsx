import { motion } from "framer-motion";


type Package = {
  title: string;
  location: {
    city: string;
    country: string;
  };
  category: string;
  duration: {
    nights: number;
    days: number;
  };
  price: number;
  itinerary: {
    day: number;
    activities: string[];
  }[];
  inclusions: string[];
  exclusions: string[];
  availableDates: string[];
};


type PackageCardProps = {
  pkg: Package;
};

export default function PackageCard({pkg} : PackageCardProps) {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mx-auto mb-6 hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800">{pkg.title}</h2>
      <p className="text-gray-500 mb-2">
        {pkg.location.city}, {pkg.location.country} • {pkg.category}
      </p>
      <p className="text-sm text-gray-600">
        {pkg.duration.nights} Nights / {pkg.duration.days} Days
      </p>
      <p className="text-lg font-semibold text-blue-600 mt-2">${pkg.price}</p>

      <div className="mt-4">
        <h3 className="font-semibold">Itinerary:</h3>
        <ul className="list-disc ml-5 text-sm text-gray-700">
          {pkg.itinerary.map((item:any) => (
            <li key={item.day}>
              <strong>Day {item.day}:</strong> {item.activities.join(", ")}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Inclusions:</h3>
        <p className="text-sm text-gray-700">{pkg.inclusions.join(", ")}</p>
      </div>

      <div className="mt-2">
        <h3 className="font-semibold">Exclusions:</h3>
        <p className="text-sm text-gray-700">{pkg.exclusions.join(", ")}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Available Dates:</h3>
        <ul className="text-sm text-gray-700">
          {pkg.availableDates.map((date:any) => (
            <li key={date}>{new Date(date).toLocaleDateString()}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
