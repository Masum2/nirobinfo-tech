import React, { useState, useEffect } from "react";

const HeroSection = () => {
    const images = [
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
        "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
            setIsTransitioning(true);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // যখন শেষ image এ পৌঁছে যাবে, transition ছাড়া আবার প্রথমে set করবে
    useEffect(() => {
        if (currentIndex === images.length) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false); // transition off
                setCurrentIndex(0); // প্রথমে ফেরত
            }, 1000); // transition সময়ের সমান delay

            return () => clearTimeout(timeout);
        } else {
            setIsTransitioning(true);
        }
    }, [currentIndex, images.length]);

    return (
        <section className="text-center mt-20 px-6 pb-[20px]">
            <p className="text-[#12A0E2] font-medium uppercase tracking-widest">
                Top 100 Design Studios in USA
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
                Empowering the Tech Flow
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto mt-6">
                Your trusted tech partner — from bold ideas to big success..
            </p>
            <button className="mt-8 bg-[#12A0E2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ED8A12] cursor-pointer transition">
                Book a Meeting
            </button>

            {/* Hero Image Infinite Slider */}
            <div className="mt-16 flex justify-center relative overflow-hidden max-w-4xl mx-auto rounded-2xl shadow-lg">
                <div
                    className={`flex ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Slide ${index}`}
                            className="w-full flex-shrink-0 rounded-2xl"
                        />
                    ))}
                    {/* Extra clone of first image for smooth loop */}
                    <img
                        src={images[0]}
                        alt="Clone first"
                        className="w-full flex-shrink-0 rounded-2xl"
                    />
                </div>
            </div>

            {/* Logos */}
            <div className="mb-6 animate-fadeDown mt-8 ">
                <span className="bg-gray-800/40 text-[#FFF] text-sm px-4 py-2 rounded-lg mt-8 inline-flex items-center gap-2 border border-gray-700 rounded-2xl">
                    <span>👋</span> Out Companies
                </span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8  px-6">
                {[
                    { img: "/images/logo2.png", name: "Nirob Trading Corporation", tagline: "(Powering Progress Through Trusted Trade)" },
                    { img: "/images/logo3.png", name: "Nirob Trading Corporation", tagline: "(Powering Progress Through Trusted Trade)" },
                    { img: "/images/logo1.png", name: "Nirob Trading Corporation", tagline: "(Powering Progress Through Trusted Trade)" },
                    { img: "/images/logo4.png", name: "Nirob Trading Corporation", tagline: "(Powering Progress Through Trusted Trade)" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg p-6 w-64 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl"
                    >
                        {/* Logo */}
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-20 h-20 object-contain mb-4"
                        />
                        {/* Company Name */}
                        <p className="text-[15px] font-semibold text-white">{item.name}</p>
                        {/* Tagline */}
                        <p className="text-[10px] text-gray-300 mt-2 italic">{item.tagline}</p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default HeroSection;
