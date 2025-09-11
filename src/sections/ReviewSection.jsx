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

const ReviewSection = () => {
  return (
    <div className="w-full bg-gray-900 py-12 border-y border-gray-700">
      <h2 className="text-center text-3xl font-bold text-gray-100 mb-10 tracking-wide">
        What Our Clients Say
      </h2>

      <div className="overflow-hidden relative">
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
              {/* Rating stars */}
              <div className="flex mb-3 text-yellow-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                {review.review}
              </p>

              {/* Profile info */}
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
      </div>
    </div>
  );
};



export default ReviewSection