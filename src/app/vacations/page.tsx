import NavBar from '@/components/nabar'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <NavBar/>

      <section>
         <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">Vacation Packages</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* National Section */}
          <div className="bg-blue-50 p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">🏞️ National Vacations</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>Yosemite National Park</li>
              <li>Grand Canyon Tour</li>
              <li>Hawaii Beach Resort</li>
            </ul>
          </div>

          {/* International Section */}
          <div className="bg-green-50 p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">✈️ International Vacations</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>Paris City Escape</li>
              <li>Bali Tropical Paradise</li>
              <li>Tokyo Cultural Adventure</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
      </section>
    </>
  )
}

export default page
