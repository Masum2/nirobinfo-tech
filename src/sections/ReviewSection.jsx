import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Sarah Johnson",
    position: "Product Manager",
    image: "https://i.pravatar.cc/100?img=1",
    review:
      "This service exceeded my expectations! The team was professional, fast, and delivered exactly what I needed.",
    rating: 5,
  },
  {
    name: "Michael Smith",
    position: "Software Engineer",
    image: "https://i.pravatar.cc/100?img=2",
    review:
      "Great experience overall. The process was smooth, and the final result was better than I imagined.",
    rating: 4,
  },
  {
    name: "Emily Davis",
    position: "UI/UX Designer",
    image: "https://i.pravatar.cc/100?img=3",
    review:
      "Amazing work! The design quality and attention to detail were top-notch. Highly recommended.",
    rating: 5,
  },
  {
    name: "James Brown",
    position: "Entrepreneur",
    image: "https://i.pravatar.cc/100?img=4",
    review:
      "Solid performance, reliable service. Definitely coming back for future projects.",
    rating: 4,
  },
];

// Calculate overall rating
const averageRating =
  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

const ReviewSection = () => {
  return (
    <div className="w-full bg-gray-900 py-12 border-y border-gray-700">
      <h2 className="text-center text-3xl font-bold text-gray-100 mb-10 tracking-wide">
        What Our Clients Say
      </h2>

      {/* ⭐ Overall Rating Section */}
      <div className="flex flex-col items-center justify-center mb-12">
  
        {/* Stars */}
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => {
            const starValue = i + 1;
            return (
              <span
                key={i}
                className={`text-5xl ${
                  averageRating >= starValue ? "text-green-500" : "text-gray-400"
                }`}
              >
                ★
              </span>
            );
          })}
        </div>

        {/* Numeric rating */}
        <p className="text-4xl font-bold">
          <span className="text-green-500">{averageRating.toFixed(1)}</span>
          <span className="text-gray-400">/5.0</span>
        </p>
             {/* Title */}
        <h3 className="text-gray-300 text-lg font-medium mb-3 mt-3">
          Overall Average Rating
        </h3>
      </div>
 

      {/* Scrolling Reviews */}
      {/* <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-8 items-stretch w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 w-80 flex-shrink-0 hover:scale-105 transition-transform duration-300"
            >
     
              <div className="flex mb-3 text-yellow-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>


              <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                {review.review}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-600"
                />
                <div>
                  <h4 className="text-gray-100 font-semibold">
                    {review.name}
                  </h4>
                  <p className="text-gray-400 text-xs">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div> */}

      {/* Logos */}
      <div className="mb-6 animate-fadeDown mt-8 flex justify-center align-items-center">
        <span className="bg-gray-800/40 text-[#FFF] text-2xl px-4 py-2 rounded-lg mt-8 inline-flex items-center gap-2 border border-gray-700 rounded-2xl">
          <span>👋</span> Our Companies
        </span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 px-2 bg-gray-800/40 backdrop-blur-md border border-gray-700">
        {[
          {
            img: "/images/logo4.png",
            name: "Nirob Trading Corporation",
            tagline: "Powering Progress Through Trusted Trade",
          },
          {
            img: "/images/logo3.png",
            name: "Kumkum Construction",
            tagline: "we commited to raising the standard of Construction",
          },
          {
            img: "/images/logo1.png",
            name: "Nirob InfoTech LTD",
            tagline: "Empowering the Tech Flow",
          },
          {
            img: "/images/logo2.png",
            name: "Nirob Agro Care LTD",
            tagline:
              "Where green possibilities are created & quality moves the world",
          },
        ].map((item, index) => (
          <div
            key={index}
            className=" rounded-2xl shadow-lg p-6 w-64 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl"
          >
            {/* Logo */}
            <img
              src={item.img}
              alt={item.name}
              className="w-20 h-20 object-contain mb-4"
            />
            {/* Company Name */}
            <p className="text-[15px] font-semibold text-white">
              {item.name}
            </p>
            {/* Tagline */}
            <p className="text-[12px] text-gray-300 mt-2 italic whitespace-nowrap overflow-hidden text-ellipsis">
              {item.tagline}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
