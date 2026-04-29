"use client";

import { useMemo } from "react";
import { useAuthFetch } from "@/hooks/useAuthFetch";

type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  profileImage?: string;
};

const Page = () => {
  const { data, status, error } = useAuthFetch<User[]>(
    "http://192.168.1.3:8080/api/user/users",
  );

  const users = useMemo(() => data ?? [], [data]);
  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.isActive).length;
  const inactiveUsers = totalUsers - activeUsers;

  if (status === "loading") {
    return <div className="p-6">Loading users...</div>;
  }

  if (status === "error") {
    return (
      <div className="p-6 text-red-600">
        Unable to load users. {error || "Please login or try again later."}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Admin Users</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <div className="rounded-lg bg-white p-5 shadow">
          <p className="text-sm font-medium text-gray-500">Total Users</p>
          <p className="mt-3 text-3xl font-bold text-gray-900">
            {totalUsers}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            {activeUsers} active, {inactiveUsers} inactive
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Profile</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t">
                
                <td className="p-3">
                  <img
                    src={user.profileImage || "/default-user.png"}
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>

                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.isActive
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="p-3">
                  <button
                    // onClick={() =>
                    //   toggleStatus(user._id, user.isActive)
                    // }
                    className={`px-4 py-1 rounded text-white ${
                      user.isActive
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {user.isActive ? "Deactivate" : "Activate"}
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
