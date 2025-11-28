"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "./Button";

const LeadForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      return toast.error("Please fill all fields");
    }
    try {
      const res = await fetch("https://srviz-1gw2.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        console.log("hiiiiii")
        toast.success("Form submitted successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(data.message || "Submission failed");
      }
    } catch (err) {
      toast.error("Server error, try again later.");
      console.error(err);
    }
  };

  return (
    <section className="mt-20 px-6 max-w-md mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-3 rounded-xl"/>
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-3 rounded-xl"/>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border p-3 rounded-xl"/>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="border p-3 rounded-xl"/>
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
};

export default LeadForm;
