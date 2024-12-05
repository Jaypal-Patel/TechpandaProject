import React from "react";

function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/featured/stock-market-pictures-pd5zksxr07t7a4xu.jpg')", // Update
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-5xl mx-auto text-center text-white px-4 md:px-5">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Smarter Trading with{" "}
          <span className="text-yellow-400">SwarajyAlgo TradeSuite</span>
        </h1>

        <p className="mt-6 text-base md:text-lg lg:text-xl font-medium">
          Access advanced trading tools, strategies, and AI-driven insights for
          smarter market decisions.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#005CE6] hover:bg-[#0045b3] text-white py-3 px-6 rounded-lg text-base md:text-lg font-semibold">
            Get Started
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-6 rounded-lg text-base md:text-lg font-semibold">
            Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
