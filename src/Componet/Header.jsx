import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const toggleDropdown = (label) => {
    setDropdown(dropdown === label ? null : label);
  };

  const navbar = [
    { label: "Services", items: ["Indicators", "Strategy", "AI Tools"] },
    {
      label: "Futures",
      items: ["Futures Analysis", "Long vs Short", "Price vs OI"],
    },
    {
      label: "Options",
      items: [
        "OI Analysis",
        "Trending Strikes",
        "Call vs Put OI",
        "Advanced Option Chain",
        "Option Chain",
        "Put-Call Ratio",
        "ATM Premium",
        "Price vs OI",
        "Long & Short",
      ],
    },
    {
      label: "Strategy",
      items: [
        "Straddle Strangle",
        "Multi Strike Straddle",
        "Straddle Snapshot",
      ],
    },
  ];

  return (
    <header className="relative">
      {/* Navbar */}
      <div className="fixed top-0 right-0 left-0 w-full h-[70px] lg:h-[85px] md:h-[75px] bg-[#0D1B2A] text-white flex justify-between items-center md:px-16 lg:px-20 px-4 z-50">
        <div className="flex items-center gap-24">
          <Link className="w-[250px] h-[55px]" to={"/"}>
            <img
              className="w-[70%] md:w-[100%] mt-2 object-cover"
              src="./image/Logo.png"
              alt="Swarajy Algo"
            />
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden lg:flex items-center gap-7 text-[17px] font-semibold">
            {navbar.map((nav, index) => (
              <div
                className="relative"
                key={index}
                onMouseEnter={() => toggleDropdown(nav.label)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <span className="cursor-pointer hover:text-yellow-400">
                  {nav.label}
                </span>
                {dropdown === nav.label && (
                  <ul className="absolute whitespace-nowrap bg-white text-black text-base font-medium rounded shadow-lg py-2">
                    {nav.items.map((item, idx) => (
                      <li
                        className="block hover:bg-gray-200 px-4 py-1"
                        key={idx}
                      >
                        <Link to={`${item.toLowerCase().replace(/ /g, "-")}`}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Link to={"/contact"}>
              <span className="hover:text-yellow-400">Contact</span>
            </Link>
            <Link to={"/tred"}>
              <span className="hover:text-yellow-400">
                Algo Trading Platform
              </span>
            </Link>
          </div>
        </div>

        {/* Right-side Menu */}
        <div className="flex items-center md:gap-5 gap-3">
          <div className="hidden lg:flex items-center gap-6 text-[16px] font-semibold">
            <Link>
              <button className="bg-yellow-400 text-black py-[8px] px-3 rounded-lg">
                FREE TRIAL
              </button>
            </Link>
            <Link>
              <div className="bg-[#005CE6] py-[8px] px-3 rounded-lg">
                <Link to={"/login"}>Login</Link>/
                <Link to={"signup"}>Sign Up</Link>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div onClick={toggleMenu} className="lg:hidden">
            {menu ? (
              <IoClose className="text-2xl md:text-3xl" />
            ) : (
              <IoMenu className="text-2xl md:text-3xl" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`lg:hidden fixed top-0 pt-[50px] left-0 right-0 w-full z-40 bg-[#0D1B2A] text-white transition-transform duration-500 ${
          menu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex gap-3 justify-between items-center px-4 py-3">
          <Link>
            <button className="bg-yellow-400 text-black py-[8px] px-3 rounded-lg">
              FREE TRIAL
            </button>
          </Link>
          <Link>
            <div className="bg-[#005CE6] py-[8px] px-3 rounded-lg">
              <Link to={"/login"}>Login</Link>/
              <Link to={"signup"}>Sign Up</Link>
            </div>
          </Link>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col mt-4 pb-4 px-4 space-y-3">
          {navbar.map((nav, index) => (
            <div key={index}>
              <span
                onMouseEnter={() => toggleDropdown(nav.label)}
                onMouseLeave={() => toggleDropdown(null)}
                className="cursor-pointer hover:text-yellow-400"
              >
                {nav.label}
              </span>
              {dropdown === nav.label && (
                <ul className="ml-4 mt-2">
                  {nav.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="py-1 text-sm font-normal hover:underline"
                    >
                      <Link
                        to={`${item.toLowerCase().replace(/ /g, "-")}`}
                        onClick={() => setMenu(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <Link to={"/contect"}>
            <span className="hover:text-yellow-400">Contact</span>
          </Link>
          <Link to={"/tred"}>
            <span className="">Algo Trading Platform</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
