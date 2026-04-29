"use client";

import { FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaSearch, FaMapMarkerAlt, FaPlane, FaHotel, FaPassport } from "react-icons/fa";
import { searchContent, SearchResult } from "@/data/searchData";
import { useTheme } from "@/app/context/ThemeContext";
import Link from "next/link";

export default function SearchPage() {
  const router = useRouter();
  const { theme } = useTheme();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    setQuery(q);
    setSearchInput(q);
  }, []);

  // 🎨 THEME STYLES
  const sectionBg =
    theme === "light"
      ? "bg-white text-black"
      : theme === "dark"
        ? "bg-[#0f172a] text-white"
        : theme === "ocean"
          ? "bg-gradient-to-r from-[#0f172a] to-[#0ea5e9] text-white"
          : theme === "sunset"
            ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white"
            : "bg-[#0f172a] text-white";

  const cardStyle =
    theme === "light"
      ? "bg-gray-100 border-gray-200 text-black hover:shadow-lg"
      : "bg-white/10 border-white/10 text-white hover:bg-white/20";

  const inputStyle =
    theme === "light"
      ? "bg-white border border-gray-300 text-black placeholder-gray-500"
      : "bg-white/10 border border-white/20 text-white placeholder-gray-400";

  const textMuted = theme === "light" ? "text-gray-600" : "text-gray-300";

  // Get icon by category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "destination":
        return <FaMapMarkerAlt className="w-5 h-5" />;
      case "service":
        return <FaPlane className="w-5 h-5" />;
      case "page":
        return <FaHotel className="w-5 h-5" />;
      case "package":
        return <FaPassport className="w-5 h-5" />;
      default:
        return <FaSearch className="w-5 h-5" />;
    }
  };

  // Get category badge color
  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case "destination":
        return "bg-blue-500/20 text-blue-300";
      case "service":
        return "bg-purple-500/20 text-purple-300";
      case "page":
        return "bg-green-500/20 text-green-300";
      case "package":
        return "bg-orange-500/20 text-orange-300";
      default:
        return "bg-gray-500/20 text-gray-300";
    }
  };

  // Perform search
  useEffect(() => {
    if (!query) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timeout = setTimeout(() => {
      const searchResults = searchContent(query);
      setResults(searchResults);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  // Handle search form submit
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput)}`);
    }
  };

  return (
    <div className={`${sectionBg} min-h-screen transition-all duration-500`}>
      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Search Travel & Tours
          </h1>
          <p className={`${textMuted} text-lg mb-8`}>
            Find destinations, packages, services, and more
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex gap-2 mb-8">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search for flights, hotels, destinations..."
              className={`${inputStyle} flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition`}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg"
            >
              <FaSearch className="inline mr-2" />
              Search
            </button>
          </form>
        </motion.div>

        {/* Results Section */}
        <div>
          {isSearching ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin inline-block w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full" />
            </div>
          ) : query && results.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${cardStyle} backdrop-blur-xl border p-12 rounded-2xl text-center`}
            >
              <FaSearch className="text-5xl mx-auto mb-4 opacity-50" />
              <h2 className="text-2xl font-bold mb-2">No Results Found</h2>
              <p className={textMuted}>
                No travel destinations or services match "{query}". Try different keywords.
              </p>
            </motion.div>
          ) : query && results.length > 0 ? (
            <>
              <div className="mb-6 text-sm">
                <p className={textMuted}>
                  Found <span className="font-bold text-cyan-400">{results.length}</span> results for "{query}"
                </p>
              </div>

              <div className="space-y-4">
                {results.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${cardStyle} backdrop-blur-xl border p-6 rounded-xl transition-all duration-300 hover:scale-102`}
                  >
                    <Link href={result.href} className="block">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="mt-1 text-cyan-400">
                          {getCategoryIcon(result.category)}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold">{result.title}</h3>
                            <span className={`${getCategoryBadgeColor(result.category)} px-3 py-1 rounded-full text-xs font-semibold uppercase`}>
                              {result.category}
                            </span>
                          </div>
                          <p className={textMuted}>{result.description}</p>

                          {/* Keywords */}
                          <div className="flex flex-wrap gap-2 mt-3">
                            {result.keywords.slice(0, 3).map((keyword) => (
                              <span
                                key={keyword}
                                className="text-xs px-2 py-1 rounded bg-white/10 border border-white/20"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="text-cyan-400 text-xl">→</div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${cardStyle} backdrop-blur-xl border p-12 rounded-2xl text-center`}
            >
              <FaSearch className="text-5xl mx-auto mb-4 opacity-50" />
              <h2 className="text-2xl font-bold mb-2">Start Your Search</h2>
              <p className={textMuted}>
                Enter a destination, service, or keyword above to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>

        {/* Quick Links */}
        {!query && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Popular Searches</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {["Maldives", "Dubai", "Visa", "Flights", "Hotels", "Packages"].map(
                (term) => (
                  <Link
                    key={term}
                    href={`/search?q=${encodeURIComponent(term)}`}
                    className={`${cardStyle} backdrop-blur-xl border p-4 rounded-lg text-center hover:scale-105 transition`}
                  >
                    {term}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
