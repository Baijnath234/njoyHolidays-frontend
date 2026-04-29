"use client";

import Link from "next/link";
import {
  CalendarDays,
  CircleDollarSign,
  ClipboardList,
  Map,
  PackagePlus,
  Plane,
  RefreshCw,
  Users,
} from "lucide-react";
import { useMemo } from "react";
import { API_CONFIG, API_ENDPOINTS } from "@/config/api";
import { useApi } from "@/hooks/useApi";
import { useAuthFetch } from "@/hooks/useAuthFetch";
import { mockTrips } from "@/data/trips";

type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
};

type Booking = {
  id: string;
  fullName: string;
  numberOfPeople: number;
  travelDate: string;
  createdAt: string;
  status?: "pending" | "confirmed" | "cancelled";
};

type PackageDay = {
  hotelPrice?: string | number;
  flightPrice?: string | number;
  dayName?: string;
};

type TourPackage = {
  _id?: string;
  id?: string;
  packageName?: string;
  title?: string;
  destination?: string;
  duration?: string;
  price?: string | number;
  dayNight?: PackageDay[];
  itinerary?: unknown[];
  location?: string;
  locationLabel?: string;
  slug?: string;
};

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
});

const parseAmount = (value: unknown) => {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  if (typeof value === "string") {
    const amount = Number(value.replace(/[^\d.-]/g, ""));
    return Number.isFinite(amount) ? amount : 0;
  }

  return 0;
};

const getPackageExpense = (pkg: TourPackage) => {
  const dayExpense =
    pkg.dayNight?.reduce(
      (sum, day) => sum + parseAmount(day.hotelPrice) + parseAmount(day.flightPrice),
      0,
    ) ?? 0;

  return dayExpense || parseAmount(pkg.price);
};

const getMonthLabel = (date: Date) =>
  date.toLocaleString("en-US", { month: "short" });

export default function AdminDashboard() {
  const {
    data: bookingsData,
    status: bookingsStatus,
    error: bookingsError,
    reload: reloadBookings,
  } = useApi<Booking[]>(API_ENDPOINTS.BOOKINGS.GET_ALL, {
    baseUrl: API_CONFIG.BASE_URL,
  });

  const {
    data: packagesData,
    status: packagesStatus,
    error: packagesError,
    reload: reloadPackages,
  } = useApi<TourPackage[]>(API_ENDPOINTS.PACKAGES.GET_ALL, {
    baseUrl: API_CONFIG.PACKAGES_API_URL,
    skipAuth: true,
  });

  const {
    data: tripsData,
    status: tripsStatus,
    error: tripsError,
    reload: reloadTrips,
  } = useApi<TourPackage[]>(API_ENDPOINTS.TRIPS.GET_ALL, {
    baseUrl: API_CONFIG.BASE_URL,
  });

  const {
    data: usersData,
    status: usersStatus,
    error: usersError,
    reload: reloadUsers,
  } = useAuthFetch<User[]>("http://192.168.1.3:8080/api/user/users");

  const bookings = Array.isArray(bookingsData) ? bookingsData : [];
  const users = Array.isArray(usersData) ? usersData : [];
  const trips = Array.isArray(tripsData) ? tripsData : [];
  const packages = Array.isArray(packagesData) ? packagesData : [];
  const displayTrips = trips.length ? trips : mockTrips;
  const displayPackages = packages.length ? packages : mockTrips;

  const stats = useMemo(() => {
    const totalUsers = users.length;
    const activeUsers = users.filter((user) => user.isActive).length;
    const totalBookings = bookings.length;
    const confirmedBookings = bookings.filter(
      (booking) => booking.status === "confirmed",
    ).length;
    const pendingBookings = bookings.filter(
      (booking) => !booking.status || booking.status === "pending",
    ).length;
    const cancelledBookings = bookings.filter(
      (booking) => booking.status === "cancelled",
    ).length;
    const totalTravelers = bookings.reduce(
      (sum, booking) => sum + (Number(booking.numberOfPeople) || 0),
      0,
    );
    const totalTrips = displayTrips.length;
    const totalPackages = displayPackages.length;
    const totalTripItinerary = displayTrips.reduce((sum, pkg: any) => {
      if (Array.isArray(pkg.dayNight)) {
        return sum + pkg.dayNight.length;
      }

      if (Array.isArray(pkg.itinerary)) {
        return sum + pkg.itinerary.length;
      }

      return sum;
    }, 0);
    const totalPackageItinerary = displayPackages.reduce((sum, pkg: any) => {
      if (Array.isArray(pkg.dayNight)) {
        return sum + pkg.dayNight.length;
      }

      if (Array.isArray(pkg.itinerary)) {
        return sum + pkg.itinerary.length;
      }

      return sum;
    }, 0);
    const totalExpense = displayPackages.reduce(
      (sum, pkg: any) => sum + getPackageExpense(pkg),
      0,
    );

    return {
      activeUsers,
      cancelledBookings,
      confirmedBookings,
      pendingBookings,
      totalBookings,
      totalExpense,
      totalPackageItinerary,
      totalPackages,
      totalTravelers,
      totalTripItinerary,
      totalTrips,
      totalUsers,
    };
  }, [bookings, displayPackages, displayTrips, users]);

  const monthlyBookings = useMemo(() => {
    const now = new Date();
    const months = Array.from({ length: 6 }, (_, index) => {
      const date = new Date(now.getFullYear(), now.getMonth() - (5 - index), 1);
      return {
        key: `${date.getFullYear()}-${date.getMonth()}`,
        label: getMonthLabel(date),
        value: 0,
      };
    });

    bookings.forEach((booking) => {
      const date = new Date(booking.createdAt || booking.travelDate);

      if (Number.isNaN(date.getTime())) {
        return;
      }

      const key = `${date.getFullYear()}-${date.getMonth()}`;
      const month = months.find((item) => item.key === key);

      if (month) {
        month.value += 1;
      }
    });

    return months;
  }, [bookings]);

  const packageExpenseRows = useMemo(() => {
    return displayPackages.slice(0, 5).map((pkg: any, index) => ({
      key:
        pkg._id ||
        pkg.id ||
        pkg.slug ||
        `${pkg.packageName || pkg.title || "tour-package"}-${index}`,
      name: pkg.packageName || pkg.title || "Tour Package",
      destination: pkg.destination || pkg.location || pkg.locationLabel || "N/A",
      expense: getPackageExpense(pkg),
    }));
  }, [displayPackages]);

  const maxMonthlyBookings = Math.max(...monthlyBookings.map((item) => item.value), 1);
  const maxPackageExpense = Math.max(
    ...packageExpenseRows.map((item) => item.expense),
    1,
  );
  const confirmedPercent = stats.totalBookings
    ? Math.round((stats.confirmedBookings / stats.totalBookings) * 100)
    : 0;
  const pendingPercent = stats.totalBookings
    ? Math.round((stats.pendingBookings / stats.totalBookings) * 100)
    : 0;
  const cancelledPercent = Math.max(0, 100 - confirmedPercent - pendingPercent);
  const isLoading =
    bookingsStatus === "loading" ||
    packagesStatus === "loading" ||
    tripsStatus === "loading" ||
    usersStatus === "loading";
  const hasErrors = bookingsError || packagesError || tripsError || usersError;

  const summaryCards = [
    {
      label: "Total Users",
      value: stats.totalUsers,
      helper: `${stats.activeUsers} active users`,
      href: "/admin/users",
      icon: Users,
      color: "bg-blue-50 text-blue-700",
    },
    {
      label: "Total Bookings",
      value: stats.totalBookings,
      helper: `${stats.totalTravelers} travellers`,
      href: "/admin/bookings",
      icon: CalendarDays,
      color: "bg-emerald-50 text-emerald-700",
    },
    {
      label: "Total Trips",
      value: stats.totalTrips,
      helper: `${stats.totalTripItinerary} itinerary days`,
      href: "/admin/trips",
      icon: Map,
      color: "bg-sky-50 text-sky-700",
    },
    {
      label: "Total Packages",
      value: stats.totalPackages,
      helper: `${stats.totalPackageItinerary} itinerary days`,
      href: "/admin/trips",
      icon: PackagePlus,
      color: "bg-violet-50 text-violet-700",
    },
    {
      label: "Total Expense",
      value: `\u20b9${currencyFormatter.format(stats.totalExpense)}`,
      helper: "Package + itinerary cost",
      href: "/admin/trips/create",
      icon: CircleDollarSign,
      color: "bg-amber-50 text-amber-700",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            NjoyHolidayz Dashboard
          </h1>
          <p className="mt-2 text-gray-600">
            Track users, bookings, packages, itinerary days, and expenses.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            reloadBookings();
            reloadPackages();
            reloadTrips();
            reloadUsers();
          }}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
        >
          <RefreshCw size={16} />
          Refresh
        </button>
      </div>

      {isLoading && (
        <div className="rounded-lg bg-white p-4 text-sm text-gray-600 shadow">
          Loading dashboard data...
        </div>
      )}

      {hasErrors && (
        <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4 text-sm text-yellow-800">
          Some live dashboard data could not be loaded.
          {bookingsError ? ` Bookings: ${bookingsError}` : ""}
          {packagesError ? ` Packages: ${packagesError}` : ""}
          {tripsError ? ` Trips: ${tripsError}` : ""}
          {usersError ? ` Users: ${usersError}` : ""}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <Link
              key={card.label}
              href={card.href}
              className="rounded-lg bg-white p-5 shadow transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">{card.label}</p>
                  <p className="mt-3 text-3xl font-bold text-gray-900">
                    {card.value}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{card.helper}</p>
                </div>
                <div className={`rounded-lg p-3 ${card.color}`}>
                  <Icon size={22} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <section className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Booking Graph
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Last 6 months booking calculation
              </p>
            </div>
            <ClipboardList className="text-blue-600" size={22} />
          </div>

          <div className="mt-8 flex h-64 items-end gap-4 border-b border-gray-200 pb-4">
            {monthlyBookings.map((month) => (
              <div key={month.key} className="flex h-full flex-1 flex-col justify-end">
                <div className="flex flex-1 items-end">
                  <div
                    className="w-full rounded-t-lg bg-blue-600 transition-all"
                    style={{
                      height: `${Math.max((month.value / maxMonthlyBookings) * 100, month.value ? 10 : 3)}%`,
                    }}
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-semibold text-gray-800">{month.value}</p>
                  <p className="text-xs text-gray-500">{month.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Radial Graph
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Booking status percentage
              </p>
            </div>
            <Plane className="text-emerald-600" size={22} />
          </div>

          <div className="mt-8 flex flex-col items-center">
            <div
              className="grid h-48 w-48 place-items-center rounded-full"
              style={{
                background: `conic-gradient(#16a34a 0 ${confirmedPercent}%, #f59e0b ${confirmedPercent}% ${
                  confirmedPercent + pendingPercent
                }%, #ef4444 ${confirmedPercent + pendingPercent}% 100%)`,
              }}
            >
              <div className="grid h-32 w-32 place-items-center rounded-full bg-white text-center">
                <div>
                  <p className="text-3xl font-bold text-gray-900">
                    {stats.totalBookings}
                  </p>
                  <p className="text-xs text-gray-500">Bookings</p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid w-full gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-600">
                  <span className="h-3 w-3 rounded-full bg-green-600" />
                  Confirmed
                </span>
                <span className="font-semibold">{confirmedPercent}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-600">
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  Pending
                </span>
                <span className="font-semibold">{pendingPercent}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-600">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  Cancelled
                </span>
                <span className="font-semibold">{cancelledPercent}%</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="rounded-lg bg-white p-6 shadow">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Package Expense Calculation
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Top package costs from live package API or fallback trips
            </p>
          </div>
          <Link href="/admin/trips/create" className="text-sm font-semibold text-blue-600">
            Add package
          </Link>
        </div>

        <div className="mt-6 space-y-4">
          {packageExpenseRows.map((pkg) => (
            <div key={pkg.key} className="space-y-2">
              <div className="flex items-center justify-between gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-800">{pkg.name}</p>
                  <p className="text-gray-500">{pkg.destination}</p>
                </div>
                <p className="font-semibold text-gray-900">
                  {"\u20b9"}{currencyFormatter.format(pkg.expense)}
                </p>
              </div>
              <div className="h-3 rounded-full bg-gray-100">
                <div
                  className="h-3 rounded-full bg-emerald-500"
                  style={{
                    width: `${Math.max((pkg.expense / maxPackageExpense) * 100, 4)}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
