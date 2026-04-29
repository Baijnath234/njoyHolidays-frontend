"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Images from "../../../public/asset/images/NjoyHolidays_logo.png";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { useTheme } from "@/app/context/ThemeContext";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  // 🔐 AUTH STATES (replace with real auth later)
  const [isLoggedIn] = useState(false);
  const [isSignedUp] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfileModal = () => setShowProfileModal((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const isHamburgerButton = target.closest('button[aria-label="Toggle mobile menu"]');
      const isMenuContainer = target.closest('.mobile-menu-container');
      const isProfileContainer = target.closest('.profile-modal-container');

      if (menuOpen && !isMenuContainer && !isHamburgerButton) {
        setMenuOpen(false);
      }
      if (showProfileModal && !isProfileContainer) {
        setShowProfileModal(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, showProfileModal]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/packages" },
    { label: "Domestic", href: "/domestic" },
    { label: "International", href: "/international" },
    { label: "Services", href: "/services" },
  ];

  // 🎨 THEME BASED NAVBAR STYLE
  const navBg =
    theme === "light"
      ? "bg-sky-400 text-black"
      : theme === "dark"
        ? "bg-[#020617] text-white"
        : theme === "ocean"
          ? "bg-[#0f172a] text-cyan-300"
          : theme === "sunset"
            ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
            : "bg-[#020617] text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300
      ${isScrolled ? "backdrop-blur-lg shadow-lg" : ""}
      ${navBg}`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <div className="relative w-[140px] h-[50px]">
          <Image
            src={Images.src}
            alt="NjoyHolidayz Logo"
            fill
            className="object-contain"
          />
        </div>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="relative font-medium group"
          >
            {link.label}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      {/* Right Side */}
      <div className="hidden md:flex items-center gap-4 relative">
        {/* Not Signed Up */}
        {!isSignedUp && (
          <Link href="/signUp">
            <button
              className={`px-4 py-2 rounded-full transition ${
                theme === "light"
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Sign Up
            </button>
          </Link>
        )}

        {/* Signed but Not Logged In */}
        {isSignedUp && !isLoggedIn && (
          <Link href="/login">
            <button className="px-4 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
              Login
            </button>
          </Link>
        )}

        {/* Logged In */}
        {isLoggedIn && (
          <div className="relative">
            <button onClick={toggleProfileModal}>
              <FaUserCircle size={30} />
            </button>

            {showProfileModal && (
              <div className="profile-modal-container absolute right-0 mt-3 w-48 bg-white dark:bg-[#1a2238] rounded-xl shadow-lg p-3 space-y-2 text-sm z-50">
                <Link href="/profile" className="block hover:underline">
                  👤 Profile
                </Link>
                <Link href="/settings" className="block hover:underline">
                  ⚙️ Settings
                </Link>
                <Link href="/about-us" className="block hover:underline">
                  ℹ️ About Us
                </Link>
                <button className="w-full text-left hover:underline">
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        )}

        {/* Settings Icon */}
        <Link href="/settings">
          <button
            className={`p-2 rounded-full transition ${
              theme === "light"
                ? "border-white hover:bg-white/30"
                : "border-gray-300 hover:bg-gray-100 dark:hover:bg-[#1a2238]"
            }`}
          >
            <FiSettings size={20} />
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col space-y-1 p-2"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={`block w-6 h-0.5 transition-all duration-300 ${theme === "light" ? "bg-black" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
        <span className={`block w-6 h-0.5 transition-all duration-300 ${theme === "light" ? "bg-black" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-6 h-0.5 transition-all duration-300 ${theme === "light" ? "bg-black" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`mobile-menu-container md:hidden absolute top-full left-0 right-0 px-6 py-6 space-y-4 shadow-lg z-50 ${navBg}`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold cursor-pointer hover:text-blue-500 block"
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
            {!isSignedUp && (
              <Link href="/signUp" className="block mb-2">
                Sign Up
              </Link>
            )}
            {isSignedUp && !isLoggedIn && (
              <Link href="/login" className="block">
                Login
              </Link>
            )}
          </div>

          <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
            <Link href="/settings">
              <button className="p-2 rounded-full border hover:bg-gray-200 transition">
                <FiSettings size={20} />
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
