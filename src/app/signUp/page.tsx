"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

interface FormData {
  username?: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword?: string;
}

interface ErrorType {
  username?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

export default function AuthForm() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<ErrorType>({});

  const validate = () => {
    const newErrors: ErrorType = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password required";
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      if (!isLogin) {
        const res = await fetch("http://192.168.1.11:8081/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.username,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
            role: "USER",
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Registration failed");
        }

        alert("Registration successful");
        setIsLogin(true);
      } else {
        const res = await fetch("http://192.168.1.11:8081/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: formData.email,
            password: formData.password,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Invalid credentials");
        }

        console.log("Login success:", data);

        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("role", data.role);

        // ✅ FIXED NAVIGATION
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 0);
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden text-white">
      {/* Floating gradient blobs */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl shadow-2xl w-[420px]"
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          {isLogin ? "Welcome Back ✈️" : "Start Your Journey 🌍"}
        </h2>

        <p className="text-center text-gray-300 text-sm mb-6">
          {isLogin
            ? "Login to explore amazing travel packages"
            : "Create your account to start travelling"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-cyan-400"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}

          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none"
            />
          )}

          {!isLogin && (
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none"
            />
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none"
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none"
            />
          )}

          {/* Animated Button */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-3 rounded-lg font-semibold shadow-lg"
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </motion.button>
        </form>

        {/* Links */}
        <div className="text-center mt-6 space-y-2">
          <p
            onClick={() => setIsLogin(!isLogin)}
            className="cursor-pointer text-cyan-400 text-sm hover:underline"
          >
            {isLogin ? "Create new account" : "Already have an account? Login"}
          </p>

          {isLogin && (
            <Link
              href="/forgot-password"
              className="text-sm text-gray-300 hover:text-cyan-400"
            >
              Forgot Password?
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
