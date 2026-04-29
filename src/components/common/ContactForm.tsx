"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";

interface ContactFormProps {
  title?: string;
  buttonLabel?: string;
  showVisaFields?: boolean;
}

const ContactForm = ({
  title = "Send Enquiry",
  buttonLabel = "Send Message",
  showVisaFields = false,
}: ContactFormProps) => {
  const { theme } = useTheme();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [visaType, setVisaType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const formEndpoint =
    process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://formspree.io/f/your-form-id";
  const hasValidEndpoint = !formEndpoint.includes("your-form-id");
  const inputStyle =
    theme === "light"
      ? "w-full p-3 rounded-lg bg-white border border-gray-200 text-black"
      : "w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in the required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formTitle: title,
          fullName,
          email,
          phone,
          country,
          visaType,
          message,
          page: showVisaFields ? "Visa Page" : "Contact Page",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit your enquiry. Please try again later.");
      }

      setStatus("success");
      setFullName("");
      setEmail("");
      setPhone("");
      setCountry("");
      setVisaType("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again."
      );
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/10 backdrop-blur-xl p-8 rounded-xl space-y-4"
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      {status === "success" && (
        <div className="rounded-lg bg-emerald-500/10 border border-emerald-500 text-emerald-100 p-4">
          Your enquiry was sent successfully. We will contact you soon.
        </div>
      )}

      {status === "error" && (
        <div className="rounded-lg bg-red-500/10 border border-red-500 text-red-100 p-4">
          {errorMessage}
        </div>
      )}

      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Full Name"
        className={inputStyle}
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className={inputStyle}
      />

      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        className={inputStyle}
      />

      {showVisaFields && (
        <>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
            className={inputStyle}
          />
          <input
            type="text"
            value={visaType}
            onChange={(e) => setVisaType(e.target.value)}
            placeholder="Visa Type"
            className={inputStyle}
          />
        </>
      )}

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        placeholder="Your Message"
        className={inputStyle}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-3 rounded-lg font-semibold hover:scale-105 transition"
      >
        {status === "loading" ? "Sending..." : buttonLabel}
      </button>
    </motion.form>
  );
};

export default ContactForm;
