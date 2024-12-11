import React from "react";
import { Link } from "react-router-dom";

function Futures() {
  const futuresFeatures = [
    {
      title: "Futures Analysis",
      description:
        "Gain valuable insights into futures market trends and price predictions.",
      icon: "📊",
      path: "futures-analysis",
      color: "#F59E0B",
      text: "white",
    },
    {
      title: "Long vs Short",
      description:
        "Compare long and short strategies to find the best approach to futures trading.",
      icon: "📈",
      path: "long-vs-short",
      color: "#FFFFFF",
      text: "black",
    },
    {
      title: "Price vs OI",
      description:
        "Track price movements in relation to open interest to understand market direction.",
      icon: "📉",
      path: "price-vs-oi",
      color: "#10B981",
      text: "white",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-14">
          Our <span className="text-yellow-400">Futures</span>
        </h2>

        {/* Futures Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {futuresFeatures.map((feature, index) => (
            <Link
              style={{ backgroundColor: feature.color }}
              to={`/${feature.path}`}
              key={index}
              className="shadow-lg rounded-lg cursor-pointer p-6 lg:py-10 hover:shadow-xl  transition-transform duration-500 hover:scale-[1.03]"
            >
              <div className="text-3xl lg:text-4xl mb-4">{feature.icon}</div>
              <h3
                style={{ color: feature.text }}
                className="text-xl lg:text-2xl font-bold  mb-2"
              >
                {feature.title}
              </h3>
              <p
                style={{ color: feature.text }}
                className="text-base lg:text-lg"
              >
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Futures;
