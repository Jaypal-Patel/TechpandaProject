import React from "react";
import { Link } from "react-router-dom";
import {
  FaSquareTwitter,
  FaSquareWhatsapp,
  FaSquareInstagram,
} from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-[#93989F] pb-4 pt-6 md:px-10">
      <div className="container mx-auto px-6 lg:px-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Section 1: About */}
          <div className="lg:col-span-2">
            <Link>
              <img
                className="w-[250px] h-[55px] object-cover"
                src="./image/Logo.png"
                alt="Swarajy Algo"
              />
            </Link>
            <p className="text-sm leading-6 mt-3">
              Welcome to the world of algorithmic trading – where innovation
              meets financial markets. At TradeArth, we believe that the future
              of trading lies in the power of algorithms. Algorithmic trading,
              often referred to as algo trading, leverages advanced mathematical
              models and automated systems to execute trades with speed,
              precision, and efficiency.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="lg:ps-20">
            <h2 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li className="hover:text-blue-500 cursor-pointer">Trade</li>
              <li className="hover:text-blue-500 cursor-pointer">Market</li>
              <li className="hover:text-blue-500 cursor-pointer">
                Crypto Currency
              </li>
            </ul>
          </div>

          {/* Section 3: Company */}
          <div className="lg:ps-20">
            <h2 className="text-lg font-semibold text-white mb-4">Company</h2>
            <ul className="space-y-2">
              <li className="hover:text-blue-500 cursor-pointer">Home</li>
              <li className="hover:text-blue-500 cursor-pointer">About</li>
              <li className="hover:text-blue-500 cursor-pointer">Contect</li>
            </ul>
          </div>

          {/* Section 4: Legal */}
          <div className="lg:ps-20">
            <h2 className="text-lg font-semibold text-white mb-4">Legal</h2>
            <ul className="space-y-2">
              <li className="hover:text-blue-500 cursor-pointer">
                Trade Policy
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Media Section */}
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-col-1 lg:justify-between items-center mt-10 border-t border-blue-300 pt-2 text-gray-500">
          <p className="text-sm">
            @ 2025 <span className="text-blue-600">Techpanda</span>. All Rights
            Reserved
          </p>
          <div className="flex lg:justify-end md:justify-end space-x-2 lg:space-x-4 mt-1">
            <div className="flex justify-center items-center lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white shadow-lg rounded-full">
              <a href="#" className="text-[#28AAE1]">
                <FaSquareTwitter className="text-lg lg:text-2xl md:text-xl" />
              </a>
            </div>
            <div className="flex justify-center items-center lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white shadow-lg rounded-full">
              <a href="#" className="text-[#D52423]">
                <IoLogoYoutube className="text-lg lg:text-2xl md:text-xl" />
              </a>
            </div>
            <div className="flex justify-center items-center lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white shadow-lg rounded-full">
              <a href="#" className="text-[#33D952] ">
                <FaSquareWhatsapp className="text-lg lg:text-2xl md:text-xl" />
              </a>
            </div>
            <div className="flex justify-center items-center lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white shadow-lg rounded-full">
              <a href="#" className="text-[#E62991] ">
                <FaSquareInstagram className="text-lg lg:text-2xl md:text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
