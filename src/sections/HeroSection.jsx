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
            {/* <p className="text-[#12A0E2] font-medium uppercase tracking-widest">
                Top 100 Design Studios in USA
            </p> */}
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


        </section>
    );
};

export default HeroSection;
