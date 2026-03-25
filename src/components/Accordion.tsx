"use client";

import { useState } from "react";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl mb-4 bg-white shadow">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 font-semibold bg-gray-100 rounded-xl"
      >
        {title}
      </button>

      {open && <div className="p-4">{children}</div>}
    </div>
  );
}