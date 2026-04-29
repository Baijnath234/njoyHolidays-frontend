"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useFetch } from "@/hooks/useApi";
import { API_ENDPOINTS } from "@/config/api";

export default function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { makeRequest } = useFetch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await makeRequest<any>(
        API_ENDPOINTS.AUTH.FORGOT_PASSWORD,
        "POST",
        {
          username: email
        },
      );

      if (error) {
        throw new Error(error);
      }

      alert("Reset link sent to your email");
      setEmail("");

    } catch (error) {

      if (error instanceof Error) {
        alert(error.message);
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden text-white">

      {/* Floating Gradient Blobs */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl shadow-2xl w-[400px]"
      >

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold">
            Forgot Password
          </h1>

          <p className="text-gray-300 text-sm mt-2">
            Enter your email to receive a password reset link.
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-cyan-400"
          />

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-3 rounded-lg font-semibold shadow-lg"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </motion.button>

        </form>

        <div className="text-center mt-6">

          <Link
            href="/singUp"
            className="text-cyan-400 hover:underline text-sm"
          >
            ← Back to Login
          </Link>

        </div>

      </motion.div>

    </section>
  );
}