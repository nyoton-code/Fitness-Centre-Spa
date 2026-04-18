"use client";
import { useState } from "react";
import homeContent from "../data/Fr.json";
// import "../utils/i18n";
// import LangSwitcher from "./LangSwitcher";
// { "name": "équipe", "href": "#team", "icon": "faUsers" , "id": 4},

import {
  faHouse,
  faUser,
  faDumbbell,
  faImages,
  faTags,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import LangSwitcher from "./LangSwitcher";
import ThemeToggle from "./ThemeToggle";

const iconMap = {
  faHouse,
  faUser,
  faDumbbell,
  faImages,
  faTags,
  faComments,
};

const header = homeContent.header;
export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-secondary-main">
        {/* <div className=" flex container justify-between lg:justify-around  items-center h-20   mx-auto"> */}
        <div className=" flex justify-between items-center h-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="logo">
            <h2 className="text-white text-xl font-bold tracking-wide">
              <span className="text-main-g uppercase text-xl sm:text-2xl tracking-[4px]">
                {/* <Image src={hero} alt="logo" className="w-36 h-10" /> */}
                Fitness<span className="text-white"> center </span>
              </span>
            </h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {header.links.map((data) => (
              <a
                href={data.href}
                className="text-txt-c hover:text-main-g transition-colors duration-300 text-sm font-medium capitalize"
                key={data.id}
              >
                {data.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-main-g text-black px-6 py-2 rounded-sm hover:bg-opacity-90 transition-all duration-300 text-sm font-medium"
            >
              Contact us
            </a>
          </nav>
          {/* <LangSwitcher /> */}

          <div className="flex gap-2 items-center">
            <div className=" text-center">
              <ThemeToggle />
            </div>
            <div>
              <button
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                onClick={toggleSidebar}
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isSidebarOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isSidebarOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isSidebarOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-secondary-main transform transition-transform duration-300 ease-in-out z-50 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-white text-xl font-bold tracking-wide">
                <span className="text-main-g">
                  {header.logo[0] + " " + header.logo[1]}{" "}
                </span>
              </h2>
              <button
                onClick={closeSidebar}
                className="text-white hover:text-main-g transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-6">
                {header.links.map((data, index) => (
                  <li key={index} className="p-2 pb-3 lg:p-0">
                    <a
                      href={data.href}
                      onClick={closeSidebar}
                      className="text-txt-c  hover:text-main-g  transition-colors duration-300 text-lg font-medium block capitalize"
                    >
                      <FontAwesomeIcon
                        icon={iconMap[data.icon]}
                        className="w-6 h-6 mr-3 text-xl"
                      />
                      <span>{data.name}</span>
                    </a>
                  </li>
                ))}
                <li className="pt-4">
                  <a
                    href="#contact"
                    onClick={closeSidebar}
                    className="bg-main-g text-black px-6 py-3 rounded-sm hover:bg-opacity-90 transition-all duration-300 text-lg font-medium block text-center"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeSidebar}
          ></div>
        )}
      </header>

      <div className="h-20"></div>
    </>
  );
}
