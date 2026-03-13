"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Images from "../../../public/asset/images/NjoyHolidays_logo.png";
import Link from "next/link";
import {
  FaFacebookF,
  FaHome,
  FaHotel,
  FaInstagram,
  FaUserCircle,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoCallSharp, IoPricetagsOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { GiPalmTree } from "react-icons/gi";
import { MdFlight, MdMiscellaneousServices, MdPublic } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

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
  console.log({ isModalOpen });

  const [activeTab, setActiveTab] = useState<"service">("service");

  const dataMap = {
    service: services,
  };

  const data = dataMap[activeTab];

  const router = useRouter();

  const openMenuModal = (menu: string, href: string) => {
    const modalMenus = ["Services"];

    if (modalMenus.includes(menu)) {
      setActiveMenu(menu);
      setIsModalOpen(true);

      if (menu === "Services") {
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

  const navLinkss = [
    {
      label: "Home",
      icon: <FaHome className="text-[#0dbeff]" size={28} />,
      href: "/",
    },
    {
      label: "Domestic",
      icon: <GiPalmTree className="text-[#0dbeff]" size={28} />,
      href: "/domestic",
    },
    {
      label: "International",
      icon: <MdPublic className="text-[#0dbeff]" size={28} />,
      href: "/international",
    },
    {
      label: "Flight",
      icon: <MdFlight className="text-[#0dbeff]" size={28} />,
      href: "/flight",
    },
    {
      label: "Hotels",
      icon: <FaHotel className="text-[#0dbeff]" size={28} />,
      href: "/hotels",
    },
    {
      label: "Services",
      icon: <MdMiscellaneousServices className="text-[#0dbeff]" size={28} />,
      href: "/services",
    },
  ];

  const navLinks = [
    "Home",
    "Domestic",
    "International",
    "Flight",
    "Hotels",
    "Services",
  ].map((label) => ({
    label,
    href:
      label === "Home" ? "/" : "/" + label.toLowerCase().replace(/\s+/g, "-"),
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
          <Link
            href=""
            // onClick={''}
            className="text-xl focus:outline-none"
          >
            <FiSearch className="text-black" size={28} />
          </Link>
        </div>
        <div className="relative flex items-center justifuy-center">
          <Link href="" className="text-xl focus:outline-none">
            <IoPricetagsOutline className="text-black" size={28} />
          </Link>
        </div>

        {/* Profile Icon + Modal Wrapper */}
        <div className="relative flex items-center justify-center">
          <Link
            href=""
            onClick={toggleProfileModal}
            className="text-xl focus:outline-none"
          >
            <FaUserCircle className="text-black" size={28} />
          </Link>

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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white text-black px-6 py-6 space-y-6 shadow-lg z-0">
          {navLinkss.map((link) => (
            <div
              key={link.label}
              onClick={() => {
                openMenuModal(link.label, link.href);
                setMenuOpen(false);
              }}
              className="flex items-center gap-4 text-xl font-semibold p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition"
            >
              <span className="text-2xl text-blue-500">{link.icon}</span>
              {link.label}
            </div>
          ))}

          <div className="flex md:flex-row justify-center gap-10 mt-10">
            <a href="tel:+919334222448" className="hover:text-white">
              <IoCallSharp className="text-[#067506]" size={30} />
            </a>
            <a
              href="https://www.facebook.com/Njoy-Holidayz-Tours-and-Visa-Services-106747764361698/"
              className="hover:text-white"
            >
              <FaFacebookF className="text-[#0d5cdb]" size={30} />
            </a>
            <a
              href="https://mobile.twitter.com/njoy_holidayz"
              className="hover:text-white"
            >
              <FaXTwitter className="text-black" size={30} />
            </a>
            <a
              href="https://www.instagram.com/njoy_holidayz?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
              className="hover:text-white"
            >
              <FaInstagram className="text-[#bd1a1a]" size={30} />
            </a>
          </div>
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
