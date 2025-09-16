import React from "react";

const AboutCompanies = () => {
  const companies = [
    {
      name: "Nirob Trading Corporation",
      logo: "/images/logo4.png",
      tagline: "Partnership, Prosperity Through Trusted Trade",
      description: `Nirob Trading Corporation is a trusted name in the global trading industry,
      specializing in supplying, export-import, and commission agency services. With years of experience 
      and strong international networks, we provide our clients with smooth, reliable, and cost-effective trade solutions.`,
      points: [
        "Coal, Stone, and Sand – High-quality raw materials for construction and energy sectors.",
        "Chemicals – Industrial and agricultural chemicals meeting international standards.",
        "Food & Agro Products – Supplying essential food grains and commodities.",
        "Fertilizers – Premium fertilizers to support sustainable agricultural growth.",
      ],
    },
    {
      name: "Nirob Agro Care LTD",
      logo: "/images/logo3.png",
      tagline: "Where pure possibilities are served, quality to nourish the world",
      description: `Nirob AgroCare LTD is a trusted export-import and supply company, dedicated to providing high-quality 
      fertilizers, chemicals, food products, wheat, and other agro-based items.`,
      points: [
        "Strong commitment to reliability, sustainability, and customer satisfaction.",
        "Connecting local and global markets with timely delivery and international standards.",
        "Supporting agriculture, industry, and trade with empowering products.",
      ],
    },
    {
      name: "Nirob InfoTech LTD",
      logo: "/images/logo1.png",
      tagline: "Empowering the Digital Future",
      description: `Nirob InfoTech LTD provides cutting-edge technology solutions and IT services to businesses,
      empowering them to grow in the digital age.`,
      points: [
        "Software solutions tailored for businesses.",
        "IT consultancy and support services.",
        "Digital transformation and automation strategies.",
      ],
    },
    {
      name: "Kumkum Construction",
      logo: "/images/logo2.png",
      tagline: "We are committed to excellence in the forefront of construction",
      description: `Kumkum Construction is a leading name in the construction industry, delivering reliable 
      and innovative building solutions across various sectors.`,
      points: [
        "Residential and commercial construction expertise.",
        "High-quality raw materials and sustainable practices.",
        "Commitment to durability, safety, and modern design.",
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <img
          src="/images/company.png"
          alt="Companies"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Our Reputed Companies
          </h1>
        </div>
      </div>

      {/* Companies Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 px-6 py-6 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-xl mb-16">
          {[
            {
              img: "/images/logo4.png",
              name: "Nirob Trading Corporation",
              tagline: "Powering Progress Through Trusted Trade",
            },
            {
              img: "/images/logo3.png",
              name: "Kumkum Construction",
              tagline:
                "We are committed to raising the standard of Construction",
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
              className="rounded-2xl shadow-lg p-6 w-64 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <p className="text-[15px] font-semibold text-white">
                {item.name}
              </p>
              <p className="text-[11px] text-gray-300 mt-2 italic whitespace-nowrap overflow-hidden text-ellipsis">
                {item.tagline}
              </p>
            </div>
          ))}
        </div>

        {/* Company Details (staggered left-right) */}
        <div className="flex flex-col gap-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-40 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Logo Box */}
              <div className="flex-shrink-0">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-38 h-38 object-contain mx-auto"
                />
              </div>

              {/* Text Content */}
              <div className="bg-gray-800 rounded-2xl shadow-lg p-6 w-full md:w-3/4">
                <h2 className="text-2xl font-semibold">{company.name}</h2>
                <p className="text-sm text-gray-400 mb-4">{company.tagline}</p>
                <p className="text-gray-300 mb-4">{company.description}</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {company.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCompanies;
