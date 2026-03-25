"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { useState } from "react";
import NavBar from "../../../components/Layout/nabar";

const themes = [
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
  { name: "Ocean Blue", value: "ocean" },
  { name: "Sunset", value: "sunset" },
];

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(true);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="min-h-screen p-8 bg-[var(--bg)] text-[var(--text)]">
        <h1 className="text-3xl font-bold mb-6">⚙️ Settings</h1>

        {/* Accordion */}
        <div className="border rounded-xl overflow-hidden">
          {/* Header */}
          <button
            onClick={() => setOpen(!open)}
            className="w-full p-4 text-left font-semibold bg-gray-100 dark:bg-[#1a2238]"
          >
            🎨 Theme Customization
          </button>

          {/* Content */}
          {open && (
            <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {themes.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setTheme(item.value)}
                  className={`p-4 rounded-xl border transition ${
                    theme === item.value
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-gray-300"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
