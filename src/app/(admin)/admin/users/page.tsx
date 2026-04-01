"use client";

import React, { useEffect, useState } from "react";

type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  profileImage?: string;
};


const Page = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch Users
  const fetchUsers = async () => {
  try {
    // ✅ Get token from localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found");
      return;
    }

    const res = await fetch(
      "http://192.168.1.3:8080/api/user/users",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      console.error("Unauthorized or failed request");
      return;
    }

    const data: User[] = await res.json();
    setUsers(data);
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔹 Toggle Active/Inactive
  // const toggleStatus = async (id: string, currentStatus: boolean) => {
  //   try {
  //     await fetch(
  //       `http://192.168.1.11:8081/api/user/user/${id}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${TOKEN}`,
  //         },
  //         body: JSON.stringify({ isActive: !currentStatus }),
  //       }
  //     );

  //     // Optimistic UI update
  //     setUsers((prev) =>
  //       prev.map((user) =>
  //         user._id === id
  //           ? { ...user, isActive: !currentStatus }
  //           : user
  //       )
  //     );
  //   } catch (error) {
  //     console.error("Error updating status:", error);
  //   }
  // };

  if (loading) return <div className="p-6">Loading users...</div>;

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