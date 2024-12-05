import React from "react";

function AboutUs() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center text-white">
        <h2 className="text-[#0D1B2A] text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-yellow-400">Us</span>
        </h2>
        <p className="text-lg md:text-xl font-medium leading-relaxed text-[#2C3E50]">
          SwarajyAlgo is revolutionizing the trading experience with
          cutting-edge AI technology and advanced market analytics. Our platform
          offers powerful tools for both beginner and advanced traders in
          options, futures, and more.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
