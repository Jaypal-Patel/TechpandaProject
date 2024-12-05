import React from "react";

function Strategy() {
  const strategies = [
    {
      title: "Straddle Strangle",
      description:
        "Use our tools for executing straddle and strangle strategies to profit from market volatility.",
      icon: "🌪️",
    },
    {
      title: "Multi Strike Straddle",
      description: "Maximize returns with multi-strike options straddles.",
      icon: "📈",
    },
    {
      title: "Straddle Snapshot",
      description:
        "Get a quick snapshot of the best available straddle opportunities.",
      icon: "📊",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Our <span className="text-yellow-400">Strategies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{strategy.icon}</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                {strategy.title}
              </h3>
              <p className="text-gray-600">{strategy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Strategy;
