import React from "react";

function Futures() {
  const futuresFeatures = [
    {
      title: "Futures Analysis",
      description:
        "Gain valuable insights into futures market trends and price predictions.",
      icon: "📊", // Replace with custom icons if needed
    },
    {
      title: "Long vs Short",
      description:
        "Compare long and short strategies to find the best approach to futures trading.",
      icon: "📈",
    },
    {
      title: "Price vs OI",
      description:
        "Track price movements in relation to open interest to understand market direction.",
      icon: "📉",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Our <span className="text-yellow-400">Futures</span>
        </h2>

        {/* Futures Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {futuresFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Futures;
