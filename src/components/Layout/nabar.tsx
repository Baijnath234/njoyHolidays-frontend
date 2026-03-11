"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Images from "../../../public/asset/images/NjoyHolidays_logo.png";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoPricetagsOutline } from "react-icons/io5";
import AndhraPradesh from "../../../public/asset/images/AndhraPradesh.jpg";
import ArunachalPradesh from "../../../public/asset/images/Arunachal Pradesh.jpg";
import Assam from "../../../public/asset/images/Assam.jpg";
import Bihar from "../../../public/asset/images/Bihar.jpg";
import Chhattisgarh from "../../../public/asset/images/Chhattisgarh.jpg";
import Goa from "../../../public/asset/images/Goa.jpg";
import Gujarat from "../../../public/asset/images/Gujarat.jpg";
import HimachalPradesh from "../../../public/asset/images/Himachal Pradesh.jpg";
import Jharkhand from "../../../public/asset/images/Jharkhand.jpg";
import Karnataka from "../../../public/asset/images/Karnataka.jpg";
import Kerala from "../../../public/asset/images/Kerala.jpg";
import MadhyaPradesh from "../../../public/asset/images/Madhya Pradesh.jpg";
import Maharashtra from "../../../public/asset/images/Maharashtra.jpg";
import Manipur from "../../../public/asset/images/Manipur.jpg";
import Meghalaya from "../../../public/asset/images/Meghalaya.jpg";
import Mizoram from "../../../public/asset/images/Mizoram.jpg";
import Nagaland from "../../../public/asset/images/Nagaland.jpg";
import Odisha from "../../../public/asset/images/Odisha.jpg";
import Punjab from "../../../public/asset/images/Punjab.jpg";
import Rajasthan from "../../../public/asset/images/Rajasthan.jpg";
import Sikkim from "../../../public/asset/images/Sikkim.jpg";
import TamilNadu from "../../../public/asset/images/TamilNadu.jpg";
import Telangana from "../../../public/asset/images/Telangana.jpg";
import Tripura from "../../../public/asset/images/Tripura.jpg";
import UttarPradesh from "../../../public/asset/images/UttarPradesh.jpg";
import Uttarakhand from "../../../public/asset/images/Uttarakhand.jpg";
import Andaman from "../../../public/asset/images/Andaman.jpg";
import Chandigarh from "../../../public/asset/images/Chandigarh.jpg";
import Dadra from "../../../public/asset/images/Dadra.jpg";
import Delhi from "../../../public/asset/images/Delhi.jpg";
import JammuKashmir from "../../../public/asset/images/JammuKashmir.jpg";
import Ladakh from "../../../public/asset/images/Ladakh.jpg";
import Lakshadweep from "../../../public/asset/images/Lakshadweep.jpg";
import Puducherry from "../../../public/asset/images/Puducherry.jpg";
import WestBengal from "../../../public/asset/images/WestBengal.jpg";
import { useRouter } from "next/navigation";

type Country = [];

const states = [
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

const territories = [
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

const services = [
  {
    Title: "Air Ticket",
    Image: "",
  },
  {
    Title: "Travel Insurance",
    Image: "",
  },
  {
    Title: "Hotel booking",
    Image: "",
  },
  {
    Title: "Tour package",
    Image: "",
  },
  {
    Title: "Passport Assistence",
    Image: "",
  },
  {
    Title: "Visa Assistence",
    Image: "",
  },
  {
    Title: "Western Union",
    Image: "",
  },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfileModal = () => setShowProfileModal((prev) => !prev);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [countries, setCountries] = useState<Country[]>([]);

 useEffect(() => {
  fetch(
    "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json"
  )
    .then((res) => res.json())
    .then((data) => {
      const indiaStates = data.filter((s) => s.country_code === "IN");
      console.log(indiaStates);
    });
}, []);

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,region,flags",
      );

      const data = await res.json();

      const formatted: Country[] = data.map((c: any, index: number) => ({
        id: index,
        Title: c.name.common,
        Continent: c.region,
        Image: c.flags.png,
      }));

      setCountries(formatted);
    };

    fetchCountries();
  }, []);

  const AsiaData = countries.filter((c) => c.Continent === "Asia");
  const AfricaData = countries.filter((c) => c.Continent === "Africa");
  const EuropeData = countries.filter((c) => c.Continent === "Europe");
  const NorthAmericaData = countries.filter((c) => c.Continent === "Americas");
  const SouthAmericaData = countries.filter((c) => c.Continent === "Americas");
  const AntarcticaData = countries.filter((c) => c.Continent === "Antarctic");
  const AustraliaData = countries.filter((c) => c.Continent === "Oceania");

  const [activeTab, setActiveTab] = useState<
    | "states"
    | "Asia"
    | "Africa"
    | "NorthAmerica"
    | "SouthAmerica"
    | "Antarctica"
    | "Europe"
    | "Australia"
    | "territories"
    | "service"
  >("states");

  const dataMap = {
    states,
    territories,
    Asia: AsiaData,
    Africa: AfricaData,
    NorthAmerica: EuropeData,
    SouthAmerica: NorthAmericaData,
    Antarctica: SouthAmericaData,
    Europe: AntarcticaData,
    Australia: AustraliaData,
    service: services,
  };

  const data = dataMap[activeTab];

  const router = useRouter();

  const openMenuModal = (menu: string, href: string) => {
    const modalMenus = ["Domestic", "International", "Services"];

    if (modalMenus.includes(menu)) {
      setActiveMenu(menu);
      setIsModalOpen(true);

      if (menu === "Domestic") {
        setActiveTab("states");
      } else if (menu === "International") {
        setActiveTab("Asia");
      } else if (menu === "Services") {
        setActiveTab("service");
      }
    } else {
      setIsModalOpen(false);
      setActiveMenu(null);
      router.push(href);
    }
  };

  const closeMenuModal = () => {
    setActiveMenu(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  const navLinks = [
    "Domestic",
    "International",
    "Vacations",
    "Flight",
    "Hotels",
    "Services",
  ].map((label) => ({
    label,
    href: "/" + label.toLowerCase().replace(/\s+/g, "-"),
  }));

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 h-22 flex items-center justify-between px-6 py-4 text-black transition-all duration-300 ${
        isScrolled
          ? "shadow backdrop-blur bg-[#0dbeff]/100"
          : "shadow backdrop-blur bg-[#0dbeff]/100"
      }`}
    >
      {/* Logo */}
      <div className="w-100 h-14 flex items-center ">
        <Link href="/" className="flex items-center ">
          <div className="relative w-50 h-50 ">
            <Image
              src={Images.src}
              alt="NJOY Holiday's Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </Link>
      </div>

      {/* Desktop Menu - Centered */}
      <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
        {navLinks.map((link) => (
          <a
            key={link.label}
            onClick={() => openMenuModal(link.label, link.href)}
            className="hover:underline font-medium"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Right side desktop icons */}
      <div className="hidden md:flex items-center space-x-4 text-sm relative z-40">
        {/* Search icon */}
        <div className="relative flex items-center justify-center">
          <button
            // onClick={''}
            className="text-xl focus:outline-none"
          >
            <FiSearch className="text-black" size={28} />
          </button>
        </div>
        <div className="relative flex items-center justifuy-center">
          <button className="text-xl focus:outline-none">
            <IoPricetagsOutline className="text-black" size={28} />
          </button>
        </div>

        {/* Profile Icon + Modal Wrapper */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={toggleProfileModal}
            className="text-xl focus:outline-none"
          >
            <FaUserCircle className="text-black" size={28} />
          </button>

          {/* Profile Modal */}
          {showProfileModal && (
            <div className="absolute top-10 right-0 shadow-lg bg-white rounded-xl p-4 w-48 flex flex-col space-y-2 text-sm z-50 border border-gray-200">
              <Link href="/profile" className="hover:underline">
                👤 Profile
              </Link>
              <Link href="/settings" className="hover:underline">
                ⚙️ Settings
              </Link>
              <Link href="/about-us" className="hover:underline">
                ℹ️ About Us
              </Link>
              <button className="text-left hover:underline">
                🔐 Login / Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <button
        className="md:hidden focus:outline-none text-white z-20"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <svg
          className="w-6 h-6 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white text-black px-6 py-4 space-y-2 shadow-lg z-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block hover:underline"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+919334222448" className="block mt-2 font-medium">
            📞 +91 9334222448
          </a>
        </div>
      )}

      {activeMenu && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-start pt-20">
          <div className="bg-white w-[90%] max-w-7xl h-[80vh] rounded-xl shadow-xl overflow-y-auto p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{activeMenu}</h2>

              <button
                onClick={closeMenuModal}
                className="text-gray-600 hover:text-black"
              >
                CLOSE ✕
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6">
              {activeMenu === "Domestic" && (
                <>
                  <button
                    onClick={() => setActiveTab("states")}
                    className={`px-4 py-2 rounded-full ${
                      activeTab === "states"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    States
                  </button>

                  <button
                    onClick={() => setActiveTab("territories")}
                    className={`px-4 py-2 rounded-full ${
                      activeTab === "territories"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    Territories
                  </button>
                </>
              )}

              {activeMenu === "International" && (
                <>
                  {}
                  <button
                    onClick={() => setActiveTab("Asia")}
                    className={`px-4 py-2 rounded-full ${
                      activeTab === "Asia"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    Asia
                  </button>

                  <button
                    onClick={() => setActiveTab("Africa")}
                    className={`px-4 py-2 rounded-full ${
                      activeTab === "Africa"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    Africa
                  </button>
                  <button
                    onClick={() => setActiveTab("NorthAmerica")}
                    className={`px-4 py-2 rounded-full ${
                      activeTab === "NorthAmerica"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    North America
                  </button>
                  <button
                    onClick={() => setActiveTab("SouthAmerica")}
                    className={`px-4 py-2 rounded-full ${
                      activeTab === "SouthAmerica"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    South America
                  </button>
                  <button
                    onClick={() => setActiveTab("Antarctica")}
                    className={`px-4 py-2 rounded-full ${
                      activeTab === "Antarctica"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    Antarctica
                  </button>
                  <button
                    onClick={() => setActiveTab("Europe")}
                    className={`px-4 py-2 rounded-full ${
                      activeTab === "Europe"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    Europe
                  </button>
                  <button
                    onClick={() => setActiveTab("Australia")}
                    className={`px-4 py-2 rounded-full ${
                      activeTab === "Australia"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    Australia
                  </button>
                </>
              )}

              {activeMenu === "Services" && (
                <button
                  onClick={() => setActiveTab("service")}
                  className={`px-4 py-2 rounded-full ${
                    activeTab === "service"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Services
                </button>
              )}
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {data?.map((item, index) => (
                <div
                  key={`${item.Title}-${index}`}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                >
                  <div className="relative w-full h-40">
                    <Image
                      src={item.Image}
                      alt={item.Title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>

                  <div className="p-3 font-semibold text-sm">{item.Title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
