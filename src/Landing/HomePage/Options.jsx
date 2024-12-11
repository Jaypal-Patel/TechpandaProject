import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Options() {
  const settings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 6000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const optionsFeatures = [
    {
      title: "OI Analysis",
      description:
        "In-depth analysis of Open Interest to gauge market sentiment.",
      icon: "📊",
      path: "oi-analysis",
    },
    {
      title: "Trending Strikes",
      description:
        "Track the most active strikes and their impact on options trading.",
      icon: "🔥",
      path: "trending-strikes",
    },
    {
      title: "Call vs Put OI",
      description:
        "Analyse the relationship between call and put open interest.",
      icon: "⚖️",
      path: "call-vs-put-oi",
    },
    {
      title: "Advanced Option Chain",
      description:
        "Comprehensive analysis of the option chain to spot opportunities and trends.",
      icon: "🔍",
      path: "advanced-option-chain",
    },
    {
      title: "Option Chain",
      description:
        "Access a detailed view of the option chain, tracking active options contracts.",
      icon: "📜",
      path: "option-chain",
    },
    {
      title: "Put-Call Ratio",
      description:
        "Understand the market's directional bias through the Put-Call ratio.",
      icon: "📈",
      path: "put-call-ratio",
    },
    {
      title: "ATM Premium",
      description:
        "Analyse the premiums for At-the-money options for insights into market volatility.",
      icon: "💰",
      path: "atm-premium",
    },
    {
      title: "Price vs OI",
      description:
        "Compare price movements with open interest to spot emerging market trends.",
      icon: "📉",
      path: "price-vs-oi",
    },
    {
      title: "Long & Short",
      description:
        "Track the balance of long and short positions to understand the market’s positioning.",
      icon: "🔄",
      path: "long-&-short",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-14">
          Our
          <span className="text-yellow-400"> Options</span>
        </h2>

        {/* Slider */}
        <Slider {...settings}>
          {optionsFeatures.map((feature, index) => (
            <Link
              to={`/${feature.path}`}
              key={index}
              className="md:h-[220px] lg:h-[240px] w-[300px] bg-[#1E3A8A] shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl lg:text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-base lg:text-lg text-white">
                {feature.description}
              </p>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Options;
