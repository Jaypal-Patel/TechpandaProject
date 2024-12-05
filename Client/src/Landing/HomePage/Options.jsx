import React from "react";

function Options() {
  const optionsFeatures = [
    {
      title: "OI Analysis",
      description:
        "In-depth analysis of Open Interest to gauge market sentiment.",
      icon: "📊", // Replace with a custom icon if needed
    },
    {
      title: "Trending Strikes",
      description:
        "Track the most active strikes and their impact on options trading.",
      icon: "🔥",
    },
    {
      title: "Call vs Put OI",
      description:
        "Analyse the relationship between call and put open interest.",
      icon: "⚖️",
    },
    {
      title: "Advanced Option Chain",
      description:
        "Comprehensive analysis of the option chain to spot opportunities and trends.",
      icon: "🔍",
    },
    {
      title: "Option Chain",
      description:
        "Access a detailed view of the option chain, tracking active options contracts.",
      icon: "📜",
    },
    {
      title: "Put-Call Ratio",
      description:
        "Understand the market's directional bias through the Put-Call ratio.",
      icon: "📈",
    },
    {
      title: "ATM Premium",
      description:
        "Analyse the premiums for At-the-money options for insights into market volatility.",
      icon: "💰",
    },
    {
      title: "Price vs OI",
      description:
        "Compare price movements with open interest to spot emerging market trends.",
      icon: "📉",
    },
    {
      title: "Long & Short",
      description:
        "Track the balance of long and short positions to understand the market’s positioning.",
      icon: "🔄",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Our
          <span className="text-yellow-400"> Options</span>
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {optionsFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
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

export default Options;
