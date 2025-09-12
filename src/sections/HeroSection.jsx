import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
    const images = [
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
        "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            {/* Background Image Slider */}
            <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content on Top */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <motion.h1
                    className="text-3xl md:text-6xl font-bold text-white leading-tight"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <span className="text-[#0FCEE0]">Empowering</span> the{" "}
                    <span className="text-[#0FCEE0]">Tech</span> Flow
                </motion.h1>

                <motion.p
                    className="text-gray-200 max-w-2xl mt-4 text-sm md:text-lg"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Your trusted tech partner — from bold ideas to big success..
                </motion.p>

                <motion.button
                    className="mt-6 bg-[#12A0E2] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#ED8A12] transition"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    Book a Meeting
                </motion.button>
            </div>
          
        </section>
    );
};

export default HeroSection;
