import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AndhraPradesh from "../../../../../public/asset/images/AndhraPradesh.jpg";
import ArunachalPradesh from "../../../../../public/asset/images/Arunachal Pradesh.jpg";
import Assam from "../../../../../public/asset/images/Assam.jpg";
import Bihar from "../../../../../public/asset/images/Bihar.jpg";
import Chhattisgarh from "../../../../../public/asset/images/Chhattisgarh.jpg";
import Goa from "../../../../../public/asset/images/Goa.jpg";
import Gujarat from "../../../../../public/asset/images/Gujarat.jpg";
import HimachalPradesh from "../../../../../public/asset/images/Himachal Pradesh.jpg";
import Jharkhand from "../../../../../public/asset/images/Jharkhand.jpg";
import Karnataka from "../../../../../public/asset/images/Karnataka.jpg";
import Kerala from "../../../../../public/asset/images/Kerala.jpg";
import MadhyaPradesh from "../../../../../public/asset/images/Madhya Pradesh.jpg";
import Maharashtra from "../../../../../public/asset/images/Maharashtra.jpg";
import Manipur from "../../../../../public/asset/images/Manipur.jpg";
import Meghalaya from "../../../../../public/asset/images/Meghalaya.jpg";
import Mizoram from "../../../../../public/asset/images/Mizoram.jpg";
import Nagaland from "../../../../../public/asset/images/Nagaland.jpg";
import Odisha from "../../../../../public/asset/images/Odisha.jpg";
import Punjab from "../../../../../public/asset/images/Punjab.jpg";
import Rajasthan from "../../../../../public/asset/images/Rajasthan.jpg";
import Sikkim from "../../../../../public/asset/images/Sikkim.jpg";
import TamilNadu from "../../../../../public/asset/images/TamilNadu.jpg";
import Telangana from "../../../../../public/asset/images/Telangana.jpg";
import Tripura from "../../../../../public/asset/images/Tripura.jpg";
import UttarPradesh from "../../../../../public/asset/images/UttarPradesh.jpg";
import Uttarakhand from "../../../../../public/asset/images/Uttarakhand.jpg";
import Andaman from "../../../../../public/asset/images/Andaman.jpg";
import Chandigarh from "../../../../../public/asset/images/Chandigarh.jpg";
import Dadra from "../../../../../public/asset/images/Dadra.jpg";
import Delhi from "../../../../../public/asset/images/Delhi.jpg";
import JammuKashmir from "../../../../../public/asset/images/JammuKashmir.jpg";
import Ladakh from "../../../../../public/asset/images/Ladakh.jpg";
import Lakshadweep from "../../../../../public/asset/images/Lakshadweep.jpg";
import Puducherry from "../../../../../public/asset/images/Puducherry.jpg";
import WestBengal from "../../../../../public/asset/images/WestBengal.jpg";
import type { StaticImageData } from "next/image";

type Destination = {
  Title: string;
  Image: StaticImageData;
};

const states: Destination[] = [
  {
    Title: "Andhra Pradesh",
    Image: AndhraPradesh,
  },
  {
    Title: "Arunachal Pradesh",
    Image: ArunachalPradesh,
  },
  {
    Title: "Assam",
    Image: Assam,
  },
  {
    Title: "Bihar",
    Image: Bihar,
  },
  {
    Title: "Chhattisgarh",
    Image: Chhattisgarh,
  },
  {
    Title: "Goa",
    Image: Goa,
  },
  {
    Title: "Gujarat",
    Image: Gujarat,
  },
  {
    Title: "Himachal Pradesh",
    Image: HimachalPradesh,
  },
  {
    Title: "Jharkhand",
    Image: Jharkhand,
  },
  {
    Title: "Karnataka",
    Image: Karnataka,
  },
  {
    Title: "Kerala",
    Image: Kerala,
  },
  {
    Title: "Madhya Pradesh",
    Image: MadhyaPradesh,
  },
  {
    Title: "Maharashtra",
    Image: Maharashtra,
  },
  {
    Title: "Manipur",
    Image: Manipur,
  },
  {
    Title: "Meghalaya",
    Image: Meghalaya,
  },
  {
    Title: "Mizoram",
    Image: Mizoram,
  },
  {
    Title: "Nagaland",
    Image: Nagaland,
  },
  {
    Title: "Odisha",
    Image: Odisha,
  },
  {
    Title: "Punjab",
    Image: Punjab,
  },
  {
    Title: "Rajasthan",
    Image: Rajasthan,
  },
  {
    Title: "Sikkim",
    Image: Sikkim,
  },
  {
    Title: "Tamil Nadu",
    Image: TamilNadu,
  },
  {
    Title: "Telangana",
    Image: Telangana,
  },
  {
    Title: "Tripura",
    Image: Tripura,
  },
  {
    Title: "Uttar Pradesh",
    Image: UttarPradesh,
  },
  {
    Title: "Uttarakhand",
    Image: Uttarakhand,
  },
  {
    Title: "West Bengal",
    Image: WestBengal,
  },
];

const territories: Destination[] = [
  {
    Title: "Andaman and Nicobar Islands",
    Image: Andaman,
  },
  {
    Title: "Chandigarh",
    Image: Chandigarh,
  },
  {
    Title: "Dadra and Nagar Haveli and Daman & Diu",
    Image: Dadra,
  },
  {
    Title: "Delhi (NCT)",
    Image: Delhi,
  },
  {
    Title: "Jammu & Kashmir",
    Image: JammuKashmir,
  },
  {
    Title: "Ladakh",
    Image: Ladakh,
  },
  {
    Title: "Lakshadweep",
    Image: Lakshadweep,
  },
  {
    Title: "Puducherry",
    Image: Puducherry,
  },
];

const Domestic = () => {
  const [activeTab, setActiveTab] = useState<"states" | "territories">(
    "states",
  );

  const dataMap = {
    states,
    territories,
  };
  const data = dataMap[activeTab];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 mt-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Explore Destinations
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {["states", "territories"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "states" | "territories")}
            className={`px-6 py-2 rounded-full transition ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data?.map((item: Destination, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
          >
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src={item.Image}
                alt={item.Title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="p-3 font-semibold text-sm text-center">
              {item.Title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Domestic;
