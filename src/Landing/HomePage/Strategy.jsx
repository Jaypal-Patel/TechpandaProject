import React from "react";

function Strategy() {
  const strategies = [
    {
      title: "Straddle Strangle",
      description:
        "Use our tools for executing straddle and strangle strategies to profit from market volatility.",
      icon: "🌪️",
      color: "#F59E0B",
      text: "white",
    },
    {
      title: "Multi Strike Straddle",
      description: "Maximize returns with multi-strike options straddles.",
      icon: "📈",
      color: "white",
      text: "black",
    },
    {
      title: "Straddle Snapshot",
      description:
        "Get a quick snapshot of the best available straddle opportunities.",
      icon: "📊",
      color: "#10B981",
      text: "white",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-14">
          Our <span className="text-yellow-400">Strategies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <div
              style={{ backgroundColor: strategy.color }}
              key={index}
              className={`shadow-md rounded-lg p-6 lg:py-10 hover:shadow-lg transition-transform duration-500 hover:scale-[1.05] cursor-pointer`}
            >
              <div className="text-3xl lg:text-4xl mb-4">{strategy.icon}</div>
              <h3
                style={{ color: strategy.text }}
                className="text-xl lg:text-2xl font-bold mb-2"
              >
                {strategy.title}
              </h3>
              <p
                style={{ color: strategy.text }}
                className="text-base lg:text-lg"
              >
                {strategy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Strategy;
