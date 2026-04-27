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