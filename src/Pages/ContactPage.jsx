import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] flex items-center justify-center bg-[url('/images/contact-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-4xl md:text-6xl font-bold text-white">
          Contact Us
        </h1>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-gray-400">
            Have questions or want to work with us? We’d love to hear from you.
            Reach out through the details below or send us a message.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="w-6 h-6 text-blue-400" />
              <div>
                <h4 className="font-semibold">Office Address</h4>
                <p className="text-gray-400">
                  123 Business Street, Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="w-6 h-6 text-green-400" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-400">+880 1234 567 890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="w-6 h-6 text-red-400" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-400">info@company.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm">Your Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Your Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Message</label>
              <textarea
                rows="5"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902441123456!2d90.39945231543142!3d23.75088598458961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f9d8b0f0f7%3A0xabcdef123456789!2sDhaka!5e0!3m2!1sen!2sbd!4v1709999999999"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
