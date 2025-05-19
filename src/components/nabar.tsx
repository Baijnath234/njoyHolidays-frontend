"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Images from "../../public/asset/images/logo4.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleModal = () => setShowModal(per => !per);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true)
      return () => (window.onscroll = null)
    }
  }, [])

  const navLinks = [
    "Vacations",
    "Destinations",
    "Visa",
    "Flight Ticket",
    "Hotels Booking",
    "Offers",
  ].map((label) => ({
    label,
    href: "/" + label.toLowerCase().replace(/\s+/g, "-"),
  }));

  return (
   <header className={`sticky top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 text-black transition-all duration-300 ${isScrolled ? "shadow backdrop-blur bg-white/80" : "bg-transparent"}`}>
      {/* Logo */}
      <div className="w-100 h-12 flex items-center ">
        <a className="flex items-center ">
          <div className="relative w-35 h-35 ">
            <Image
              src={Images.src}
              alt="NJOY Holiday's Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          {/* <h2 className="text-xl font-bold">NJOY Holiday's</h2> */}
        </a>
      </div>

      {/* Desktop Menu - Centered */}
      <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:underline font-medium"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Phone number - Right aligned on desktop */}
      <div className="hidden md:block text-sm">
        <a href="tel:+919334222448">📞 +91 9334222448</a>
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white text-black px-6 py-4 space-y-2 shadow-lg z-20">
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
    </header>
  );
}
