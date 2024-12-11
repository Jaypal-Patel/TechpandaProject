import React from "react";

function Services() {
  const services = [
    {
      title: "Market Indicators",
      description: "Real-time indicators to assist with trading decisions.",
      icon: "📊", // Replace with an icon library if needed
    },
    {
      title: "Trading Strategies",
      description: "Developed strategies for all market conditions.",
      icon: "📈",
    },
    {
      title: "AI Tools",
      description: "Leverage AI to make data-driven decisions.",
      icon: "🤖",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-14">
          Our <span className="text-yellow-400">Services</span>
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="md:flex justify-center items-center bg-[#1E3A8A] cursor-pointer shadow-lg rounded-lg p-6 md:p-8 hover:shadow-xl transition-transform duration-500 hover:scale-[1.02]"
            >
              <div className="text-3xl lg:text-4xl mb-4">{service.icon}</div>
              <div className="w-[90%]">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-base lg:text-lg text-white">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
