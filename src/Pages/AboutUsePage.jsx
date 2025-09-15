import React from "react";

const AboutUsePage = () => {
  const cards = [
    {
      title: "Client-Centered Approach",
      text: "We listen first, act second. Every solution is designed with your unique needs and long-term success in mind.",
      icon: "👥",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      title: "End-to-End Support",
      text: "From the very first consultation to post-project assistance, we’re by your side at every stage of your digital journey.",
      icon: "🤝",
      gradient: "from-orange-400 to-orange-600",
    },
    {
      title: "Excellence in Delivery",
      text: "We don’t settle for “good enough.” Our focus is on delivering high-quality, scalable, and reliable solutions every time.",
      icon: "⚙️",
      gradient: "from-teal-300 to-teal-600",
    },
    {
      title: "Trust & Transparency",
      text: "Clear communication, honest guidance, and ethical practices are the foundation of every partnership we build.",
      icon: "📝",
      gradient: "from-green-300 to-teal-500",
    },
    {
      title: "Collaborative Growth",
      text: "We see ourselves as part of your team, working hand-in-hand to turn challenges into opportunities and ideas into success.",
      icon: "📈",
      gradient: "from-orange-300 to-orange-600",
    },
    {
      title: "Finishing with Confidence",
      text: "Every project is completed with precision, dedication, and care—ensuring lasting value for your business.",
      icon: "✅",
      gradient: "from-sky-300 to-sky-600",
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <img
          src="/images/about.png"
          alt="About Us"
          className="w-full h-full object-cover"
        />
     <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
  <h1 className="text-4xl md:text-6xl font-bold text-white">About Us</h1>
</div>

      </div>

      {/* About Content */}
   <div className="max-w-5xl mx-auto px-6 py-12 text-center">
  <p className="text-lg md:text-xl leading-relaxed bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent">
    At <span className="font-semibold">Nirob InfoTech LTD</span>, your success
    comes first. We don’t just deliver technology—we take the time to truly
    understand your unique challenges, goals, and vision. Every solution we
    create is carefully tailored to fit your business needs, ensuring real
    impact and measurable growth.
  </p>

  <p className="mt-6 text-lg md:text-xl leading-relaxed bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent">
    We believe in building more than projects—we build long-term partnerships
    founded on trust, transparency, and mutual success. When you grow, we grow
    with you.
  </p>
</div>


      {/* Card Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg p-6 text-center bg-gradient-to-br ${card.gradient}`}
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
            <p className="text-gray-100">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsePage;
