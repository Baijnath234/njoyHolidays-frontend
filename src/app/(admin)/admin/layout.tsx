import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <ul className="space-y-3">
          <li>
            <Link href="/admin" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>

          <li>
            <Link href="/admin/trips" className="hover:text-gray-300">
              Trips
            </Link>
          </li>

          <li>
            <Link href="/admin/bookings" className="hover:text-gray-300">
              Bookings
            </Link>
          </li>

          <li>
            <Link href="/admin/users" className="hover:text-gray-300">
              Users
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
