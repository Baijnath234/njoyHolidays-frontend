"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { FaEye, FaEyeSlash, FaCopy, FaCheck } from "react-icons/fa";
import { useState } from "react";

export default function EnvPage() {
  const { theme } = useTheme();
  const [showValues, setShowValues] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

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
      ? "bg-gray-100 border-gray-200 text-black"
      : "bg-white/10 border-white/10 text-white";

  const textMuted = theme === "light" ? "text-gray-600" : "text-gray-300";

  // Environment variables to display
  const envVars = [
    {
      key: "NEXT_PUBLIC_API_BASE_URL",
      value: process.env.NEXT_PUBLIC_API_BASE_URL,
      description: "Main API endpoint for auth, bookings, users",
      category: "API",
    },
    {
      key: "NEXT_PUBLIC_PACKAGES_API_URL",
      value: process.env.NEXT_PUBLIC_PACKAGES_API_URL,
      description: "Packages and tours API endpoint",
      category: "API",
    },
    {
      key: "NEXT_PUBLIC_FLIGHT_API_URL",
      value: process.env.NEXT_PUBLIC_FLIGHT_API_URL,
      description: "Flight search API endpoint",
      category: "API",
    },
    {
      key: "NEXT_PUBLIC_RAPIDAPI_KEY",
      value: process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      description: "RapidAPI key for flight searches",
      category: "API",
      sensitive: true,
    },
    {
      key: "NEXT_PUBLIC_RAPIDAPI_HOST",
      value: process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
      description: "RapidAPI host for flight searches",
      category: "API",
    },
    {
      key: "NEXT_PUBLIC_FORM_ENDPOINT",
      value: process.env.NEXT_PUBLIC_FORM_ENDPOINT,
      description: "Form submission endpoint for contact/visa forms",
      category: "Forms",
    },
  ];

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const getStatusColor = (value: string | undefined) => {
    if (!value) return "text-red-400";
    if (value.includes("your-") || value.includes("YOUR_")) return "text-yellow-400";
    return "text-green-400";
  };

  const getStatusText = (value: string | undefined) => {
    if (!value) return "Not Set";
    if (value.includes("your-") || value.includes("YOUR_")) return "Placeholder";
    return "Configured";
  };

  return (
    <div className={`${sectionBg} min-h-screen transition-all duration-500`}>
      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Environment Configuration
          </h1>
          <p className={`${textMuted} text-lg mb-8`}>
            View and manage your application environment variables
          </p>

          {/* Toggle Values Button */}
          <button
            onClick={() => setShowValues(!showValues)}
            className="flex items-center gap-2 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            {showValues ? <FaEyeSlash /> : <FaEye />}
            {showValues ? "Hide Values" : "Show Values"}
          </button>
        </motion.div>

        {/* Environment Variables Grid */}
        <div className="grid gap-6">
          {["API", "Forms"].map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">{category} Configuration</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {envVars
                  .filter((env) => env.category === category)
                  .map((env) => (
                    <div
                      key={env.key}
                      className={`${cardStyle} backdrop-blur-xl border p-6 rounded-xl`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{env.key}</h3>
                          <p className={`${textMuted} text-sm mb-2`}>{env.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${getStatusColor(env.value)}`}>
                            {getStatusText(env.value)}
                          </span>
                          {env.value && (
                            <button
                              onClick={() => copyToClipboard(env.value || "", env.key)}
                              className="text-cyan-400 hover:text-cyan-300 transition"
                              title="Copy value"
                            >
                              {copiedKey === env.key ? <FaCheck /> : <FaCopy />}
                            </button>
                          )}
                        </div>
                      </div>

                      {showValues && (
                        <div className="bg-black/20 rounded-lg p-3 font-mono text-sm break-all">
                          {env.sensitive && env.value ? "••••••••••••••••" : env.value || "Not set"}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`${cardStyle} backdrop-blur-xl border p-8 rounded-xl mt-12`}
        >
          <h3 className="text-xl font-bold mb-4">How to Configure</h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">1. Create/Edit .env.local file</h4>
              <pre className="bg-black/20 p-3 rounded text-xs overflow-x-auto">
{`# Add to d:\\Avinash\\njoyHolidays-frontend\\.env.local
NEXT_PUBLIC_API_BASE_URL=https://your-api.com
NEXT_PUBLIC_PACKAGES_API_URL=https://packages-api.com
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id`}
              </pre>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">2. Restart Development Server</h4>
              <p className={`${textMuted}`}>Run <code className="bg-black/20 px-1 rounded">npm run dev</code> to apply changes</p>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">3. For Production</h4>
              <p className={`${textMuted}`}>Set environment variables in your hosting platform (Vercel, Netlify, etc.)</p>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className={`${textMuted} mb-4`}>Need help setting up?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://formspree.io"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition"
            >
              Get Formspree Account
            </a>
            <a
              href="https://rapidapi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition"
            >
              Get RapidAPI Key
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
