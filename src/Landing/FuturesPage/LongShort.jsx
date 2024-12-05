import React, { useState } from "react";

const data = [
  {
    Symbol: "NIFTY",
    Date: "2024-12-03",
    Time: "15:30",
    ltp: 24534.0,
    PriceChange: -19.2,
    ChangePercentage: -0.08,
    OI: 21300,
    OIChange: -21300,
    OIChangePercentage: -0.08,
    type: "Long Unwinding",
  },
  {
    Symbol: "NIFTY",
    Date: "2024-12-03",
    Time: "15:15",
    ltp: 24533.2,
    PriceChange: -4.55,
    ChangePercentage: -0.02,
    OI: 23275,
    OIChange: 23275,
    OIChangePercentage: 0.1,
    type: "Short Build",
  },
];

function LongShort() {
  return (
    <div className="w-full p-4 md:mt-[80px] mt-[30px]">
      <h2 className="text-2xl font-bold mb-4">
        Futures Long vs Short Analysis
      </h2>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Symbol Option */}
        <div>
          <label htmlFor="symbol" className="block font-medium">
            Symbol
          </label>
          <select id="symbol" className="border px-4 py-2 rounded">
            <option value="All">All</option>
            <option value="NIFTY">NIFTY</option>
            <option value="SUPREMEIND">SUPREMEIND</option>
            <option value="CYIENT">CYIENT</option>
          </select>
        </div>

        {/* Expiry Date Option*/}
        <div>
          <label htmlFor="expiry" className="block font-medium">
            Expiry Date
          </label>
          <select id="expiry" className="border px-4 py-2 rounded">
            <option value="20-08-2024">20-08-2024</option>
            <option value="17-07-2024">17-07-2024</option>
            <option value="24-04-2024">24-04-2024</option>
            <option value="28-06-2024">28-06-2024</option>
          </select>
        </div>

        {/* Interval */}
        <div>
          <label htmlFor="interval" className="block font-medium">
            Interval
          </label>
          <select id="expiry" className="border px-4 py-2 rounded">
            <option value="5M">5M</option>
            <option value="10M">10M</option>
            <option value="15M">15M</option>
            <option value="30M">30M</option>
          </select>
        </div>

        {/* Live Option */}
        <div>
          <label htmlFor="live" className="block font-medium">
            Live
          </label>
          <input type="checkbox" id="live" className="w-4 h-4" />
        </div>

        {/* Historical Date */}
        <div>
          <label htmlFor="date" className="block font-medium">
            Historical Date
          </label>
          <input type="date" id="date" className="border px-4 py-2 rounded" />
        </div>
      </div>

      {/* Data Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse border text-left">
          <thead>
            <tr>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Symbol</th>
              <th className="border px-4 py-2">Last Price</th>
              <th className="border px-4 py-2">Price Change</th>
              <th className="border px-4 py-2">OI Change</th>
              <th className="border px-4 py-2">Long vs Short</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.Date}</td>
                <td className="border px-4 py-2">{item.Time}</td>
                <td className="border px-4 py-2">{item.Symbol}</td>
                <td className="border px-4 py-2">{item.ltp}</td>
                <td
                  className={`border px-4 py-2 ${
                    item.PriceChange > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.PriceChange}
                </td>
                <td
                  className={`border px-4 py-2 ${
                    item.OIChange > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.OIChange}
                </td>
                <td className="border px-4 py-2">{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LongShort;
