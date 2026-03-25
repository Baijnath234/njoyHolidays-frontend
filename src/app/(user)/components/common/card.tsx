import React from 'react'

interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
      <button className="mt-5 text-blue-600 font-medium hover:underline">
        Learn More →
      </button>
    </div>
  );
}