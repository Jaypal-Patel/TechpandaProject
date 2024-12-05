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
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Our <span className="text-yellow-400">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
