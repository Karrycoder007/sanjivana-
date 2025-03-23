"use client";

import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6 md:p-12">
      {/* Left Side - Information Section */}
      <div className="md:w-1/2 flex flex-col justify-center p-8 space-y-6">
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Have questions or need assistance? Our team is here to help you.
          Reach out via the form or contact us through our social platforms.
        </p>

        {/* Contact Details */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-500" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-500" />
            <span>contact@grudhrasolutions.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>Ponda, Goa, India</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-6">
          <a href="#" className="text-blue-500 text-2xl hover:scale-110 transition">
            <FaFacebook />
          </a>
          <a href="#" className="text-blue-500 text-2xl hover:scale-110 transition">
            <FaTwitter />
          </a>
          <a href="#" className="text-blue-500 text-2xl hover:scale-110 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="md:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-gray-50 dark:bg-gray-700"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-gray-50 dark:bg-gray-700"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 h-40"
            required
          ></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
