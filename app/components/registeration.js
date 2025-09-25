"use client";
import { useState } from "react";
import axios from "axios";

export default function RegPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
  console.log("Register button clicked"); // <- debug
  setLoading(true);
  try {
    const orderId = `webinar_${Date.now()}`;
    console.log("Order ID:", orderId);

    const { data: paymentData } = await axios.post("/api/cashfree", {
      orderId,
      amount: 99,
      customerName: form.name,
      customerEmail: form.email,
      customerPhone: form.phone,
    });

    console.log("Cashfree response:", paymentData);

    const paymentLink = paymentData.paymentLink;

    await axios.post("/api/register", { ...form, orderId, paymentLink });
    console.log("Saved to SheetDB");

    window.open(paymentLink, "_blank");
  } catch (error) {
    console.error("Error in registration:", error);
    alert("Something went wrong. Try again.");
  }
  setLoading(false);
};


  return (
    <div className="flex flex-col lg:flex-row gap-10 p-6 lg:p-12">
      {/* Left: Form */}
      <div className="flex-1 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Register for Webinar</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Processing..." : "Register for ₹99"}
        </button>
      </div>

      {/* Right: YouTube Video */}
      <div className="flex-1 aspect-video">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Webinar Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
