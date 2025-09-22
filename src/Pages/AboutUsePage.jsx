import React from "react";

const AboutUsPage = () => {
  const cards = [
    {
      title: "Client-Centered Approach",
      text: "We listen first, act second. Every solution is designed with your unique needs and long-term success in mind.",
      icon: "👥",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      title: "End-to-End Support",
      text: "From the first consultation to post-project assistance, we’re by your side at every stage of your digital journey.",
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
          src="/images/aboutus.png"
          alt="About Us"
          className="w-full h-full object-fit"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-lg">
            About Us
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-lg md:text-xl leading-relaxed bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent font-medium">
          At <span className="font-bold">Nirob InfoTech LTD</span>, we believe
          every great business idea deserves a powerful digital presence. Founded
          in 2025, we are a forward-thinking software and IT solutions company
          dedicated to helping organizations transform, innovate, and thrive in
          the digital age.
        </p>
      </div>

      {/* Icons Section */}
     <div className="max-w-5xl mx-auto px-6 py-12">
  <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl p-8">
    {/* Icons */}
    <div className="flex items-center justify-center gap-8">
      <img src="/images/icon1.png" className="w-20 h-20" alt="icon" />
      <img src="/images/icon2.png" className="w-20 h-20" alt="icon" />
      <img src="/images/icon3.png" className="w-20 h-20" alt="icon" />
    </div>

    {/* Paragraph */}
    <p className="mt-8 text-gray-300 text-center leading-relaxed">
      From startups to established enterprises, we work closely with our clients
      to understand their unique needs and craft custom solutions that go beyond
      expectations. Our team of passionate developers, designers, and strategists
      specialize in:
    </p>

    {/* List */}
    <ul className="mt-6 text-left max-w-2xl mx-auto space-y-3 text-gray-200">
      <li>✅ Web Development – Building fast, secure, and scalable websites and applications.</li>
      <li>✅ Mobile App Development – Creating user-friendly mobile experiences for iOS and Android.</li>
      <li>
        ✅ Artificial Intelligence & Machine Learning – Developing intelligent
        solutions that optimize decision-making, efficiency, and growth.
      </li>
      <li>
        ✅ Digital Strategy & Innovation – Blending creativity with technology to
        deliver measurable business impact.
      </li>
    </ul>

    {/* More Paragraphs */}
    <p className="mt-6 text-gray-300 text-center leading-relaxed">
      What sets us apart is our commitment to innovation and quality. We don’t
      just deliver projects—we build long-term partnerships. Every line of code,
      every design, and every strategy we create is driven by our mission to
      empower businesses with technology that makes a real difference.
    </p>
    <p className="mt-6 text-gray-300 text-center leading-relaxed">
      At Nirob InfoTech LTD, we see ourselves not just as a technology provider,
      but as a digital growth partner. By combining technology, creativity, and
      strategy, we design digital experiences that strengthen brands, enhance
      customer engagement, and fuel sustainable success.
    </p>
  </div>
</div>


      {/* Philosophy Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-lg md:text-xl leading-relaxed bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
          At <span className="font-semibold">Nirob InfoTech LTD</span>, your
          success comes first. We don’t just deliver technology—we take the time
          to truly understand your unique challenges, goals, and vision.
        </p>

        <p className="mt-6 text-lg md:text-xl leading-relaxed bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
          We believe in building more than projects—we build long-term
          partnerships founded on trust, transparency, and mutual success.
        </p>
      </div>

      {/* Card Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg p-8 text-center bg-gradient-to-br ${card.gradient} transform hover:scale-105 transition duration-300 ease-in-out`}
          >
            <div className="text-5xl mb-4">{card.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-100">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;
