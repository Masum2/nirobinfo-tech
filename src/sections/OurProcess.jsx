import React from "react";

const OurProcess = () => {
  const steps = [
    {
      title: "Discover & Consult",
      description:
        "We listen first — understanding your vision, challenges, and goals to set the right foundation.",
      icon: "🔍",
    },
    {
      title: "Customized Solution Design",
      description:
        "Our team builds tailored, scalable solutions powered by web development, AI/ML, and IoT to fit your unique needs.",
      icon: "💡",
    },
    {
      title: "Agile Development & Testing",
      description:
        "Through agile methods, we design, test, and refine — ensuring your solution is efficient, reliable, and future-ready.",
      icon: "⚙️",
    },
    {
      title: "Launch & Long-Term Support",
      description:
        "From a smooth launch to ongoing support, we’re with you every step — driving continuous growth and innovation.",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">PROCESS</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          At <span className="text-orange-400 font-semibold">Nirob IT</span>, we
          operate at the intersection of strategy, creativity, and technology to
          help businesses digitally transform and stay ahead in a competitive
          world.
        </p>
      </div>

      {/* Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
          {/* Logos */}
            <div className="mb-6 animate-fadeDown mt-8 flex justify-center align-items-center">
                <span className="bg-gray-800/40 text-[#FFF] text-2xl px-4 py-2 rounded-lg mt-8 inline-flex items-center gap-2 border border-gray-700 rounded-2xl">
                    <span>👋</span> Our Companies
                </span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8  px-6  bg-gray-800/40 backdrop-blur-md border border-gray-700">
                {[
                    { img: "/images/logo4.png", name: "Nirob Agro Care LTD", tagline: "(Where green possibilities are created &  quality moves the world)" },

                    { img: "/images/logo3.png", name: "Kumkum Construction", tagline: "(we commited to raising the standard of Construction)" },
                    { img: "/images/logo1.png", name: "Nirob InfoTech LTD", tagline: "(Empowering the Tech Flow)" },
                                        { img: "/images/logo2.png", name: "Nirob Trading Corporation", tagline: "(Powering Progress Through Trusted Trade)" },

                ].map((item, index) => (
                    <div
                        key={index}
                        className="  rounded-2xl shadow-lg p-6 w-64 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl"
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

export default OurProcess;
