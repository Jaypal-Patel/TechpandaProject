import React, { useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const AdvancedOption = () => {
  const [symbol, setSymbol] = useState("NIFTY");
  const [expiry, setExpiry] = useState("26/12/2024");
  const [strikeCount, setStrikeCount] = useState(30);
  const [duration, setDuration] = useState("Day");
  const [live, setLive] = useState(true);
  const [historicalDate, setHistoricalDate] = useState("2024-03-12");
  //const [replay, setReplay] = useState(false);

  const generateChartData = () => {
    const dataPointsCE = Array.from({ length: strikeCount }, (_, i) => ({
      label: (6200 + i * 200).toString(),
      y: Math.floor(Math.random() * 100000),
    }));

    const dataPointsPE = Array.from({ length: strikeCount }, (_, i) => ({
      label: (6200 + i * 200).toString(),
      y: Math.floor(Math.random() * 80000),
    }));

    return {
      animationEnabled: true,
      title: {
        text: `${symbol} Open Interest Analysis`,
      },
      axisX: {
        title: "Strike Price",
        labelFontColor: "#666",
      },
      axisY: {
        title: "Open Interest",
        labelFontColor: "#666",
      },
      data: [
        {
          type: "column",
          name: "CE OI Change",
          showInLegend: true,
          color: "#26a69a",
          dataPoints: dataPointsCE,
        },
        {
          type: "column",
          name: "PE OI Change",
          showInLegend: true,
          color: "#ef5350",
          dataPoints: dataPointsPE,
        },
      ],
    };
  };

  const chartData = generateChartData();

  return (
    <div className="min-h-screen h-full mt-40">
      {/* Controls */}
      <div className="max-w-screen-xl mx-auto p-6 bg-white shadow-lg rounded-md border border-gray-200 mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6 text-center">
          Open Interest Analysis
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-gray-600 mb-2">
              Symbol
            </label>
            <select
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              className="w-full p-3 border rounded-md"
            >
              <option value="NIFTY">NIFTY</option>
              <option value="BANKNIFTY">BANKNIFTY</option>
              <option value="MINDCPNIFTY">MINDCPNIFTY</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-gray-600 mb-2">
              Expiry
            </label>
            <select
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full p-3 border rounded-md"
            >
              <option value="26/12/2024">26/12/2024</option>
              <option value="25/01/2025">25/01/2025</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-gray-600 mb-2">
              Strike Count
            </label>
            <input
              type="number"
              value={strikeCount}
              onChange={(e) => setStrikeCount(Number(e.target.value))}
              className="w-full p-3 border rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-gray-600 mb-2">
              Duration
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-3 border rounded-md"
            >
              <option value="Day">Day</option>
              <option value="Week">Week</option>
              <option value="Month">Month</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={live}
              onChange={(e) => setLive(e.target.checked)}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-3 text-sm sm:text-base font-medium text-gray-600">
              Live
            </label>
          </div>

          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-gray-600 mb-2">
              Historical Date
            </label>
            <input
              type="date"
              value={historicalDate}
              onChange={(e) => setHistoricalDate(e.target.value)}
              className="w-full p-3 border rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Chart */}
      <div style={{ margin: "20px" }}>
        <CanvasJSChart options={chartData} />
      </div>
    </div>
  );
};

export default AdvancedOption;
