"use client";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsFiltersOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsFiltersOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleFiltersDropdown = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  return (
    <nav className="bg-gray-100 border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2 lg:p-3">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="flex flex-col items-center">
            <img src="/logo.png" className="h-10" alt="Flowbite Logo" />
            <span className="self-center lg:hidden md:hidden text-base font-semibold whitespace-nowrap dark:text-white">
              Reinewelle Projects LLP
            </span>
          </div>
          {/* <span className="self-center hidden lg:flex  md:text-sm lg:text-xl font-semibold whitespace-nowrap dark:text-white" style={{ fontFamily: 'Baskerville' }}>Reinewelle Projects LLP</span> */}
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faTimes}
                size="2xl"
                className="z-50 absolute right-4 top-5 p-2 py-1 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden dark:focus:ring-gray-600"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                size="2xl"
                className="z-50 absolute right-4 top-4 p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden dark:focus:ring-gray-600"
              />
            )}
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul
            className="flex flex-col font-medium text-lg lg:gap-4 md:gap-4 absolute right-0 md:relative lg:relative md:p-0 border border-gray-100 rounded-lg bg-white lg:bg-gray-100 md:bg-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 z-20 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 top-0 text-left pt-16 pb-6 mt-20 w-80 lg:w-full md:w-full overflow-y-auto max-h-[calc(100vh-80px)] md:max-h-auto overflow-hidden md:overflow-visible
            "
            style={{ fontFamily: "Baskerville" }}
          >
            <li className="">
              <Link
                href={"/"}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-blue-500  hover:text-orange-600 -mt-10 lg:mt-0 md:mt-0"
                aria-current="page"
              >
                Home
              </Link>
              {/* <span className="border-l border-gray-300 h-full mx-2"></span> */}
            </li>
            <li className="">
              <Link
                href={"aboutUs"}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-blue-500  hover:text-orange-600"
                aria-current="page"
              >
                About us
              </Link>
              {/* <span className="border-l border-gray-300 h-full mx-2"></span> */}
            </li>
            <li className="">
              <Link
                href={"products"}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-blue-500  hover:text-orange-600"
                aria-current="page"
              >
                Products
              </Link>
              {/* <span className="border-l border-gray-300 h-full mx-2"></span> */}
            </li>
            <li
              className=""
              // className="relative group"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={toggleFiltersDropdown} // Toggle dropdown state
              >
                <Link
                  href={"services"}
                  className=" py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-blue-500  hover:text-orange-600 flex"
                  aria-current="page"
                >
                  Services
                  <svg
                    className="w-4 h-4 mt-4 md:mt-4 lg:mt-4  transform -translate-y-1/2  z-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
              </button>
              {/* Vertical line after "Services" */}
              {/* <div className="absolute top-0 bottom-0 lg:-right-9 md:-right-8  border-l border-gray-300 h-full"></div> */}
              <ul
                className={`relative lg:absolute md:absolute align-middle ${
                  isFiltersOpen ? "block" : "hidden"
                } bg-white -mt-0 rounded-md text-sm shadow-lg lg:w-44 md:w-44 w-48 lg:-ml-10 md:-ml-9 border border-gray-200`}
              >
                <li className="border-b border-gray-200">
                  <Link
                    href={"zld"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  >
                    Zero Liquid Discharge (ZLD)
                  </Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link
                    href={"waterTreatment"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  >
                    Water Treatment Plant
                  </Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link
                    href={"etp"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  >
                    Effluent Treatment Plant
                  </Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link
                    href={"stp"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  >
                    Standard Temperature and Pressure
                  </Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link
                    href={"rO"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  >
                    Reverse Osmosis
                  </Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link
                    href={"dW"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  >
                    Demineralized Water
                  </Link>
                </li>
              </ul>
            </li>

            <li className="">
              <Link
                href={"contact"}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-blue-500  hover:text-orange-600"
              >
                Contact us
              </Link>
              {/* <span className="border-l border-gray-300 h-full mx-2"></span> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
