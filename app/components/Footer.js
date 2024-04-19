import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer
      className="footer-container dark:bg-gray-700 max-w-6xl mx-auto rounded-xl mb-6"
      style={{ backgroundColor: "#003366" }}
    >
      <div className="mx-auto w-full max-w-screen-xl">
        <div className=" p-4 m-2">
          <img
            src="logo2.png"
            alt="Your Image"
            className=""
            style={{ width: "60px", height: "60px" }}
          />
        </div>
        <div className="grid lg:grid-cols-3 px-4 py-6 lg:py-2 md:grid-cols-3">
          <div className=" lg:mt-4 md:mt-10 mt-10">
            <h2
              className="mb-6 text-base font-semibold text-white uppercase dark:text-white ml-4"
              style={{ fontFamily: "Baskerville" }}
            >
              Contact
            </h2>
            <ul className="text-white font-medium lg:ml-4 text-sm">
              <div className="flex mb-6 border-b border-gray-300 pb-6">
                <FontAwesomeIcon
                  className="mt-1"
                  icon={faLocationDot}
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
                <a
                  className="ml-3 text-pretty"
                  href="https://www.google.com/maps?q=S.NO.%2010/9/3K,%20NR.ASWAD%20HOTEL,HAVELI,%20NANDED%20N.V.%20HAVELI%20NANDED%20PUNE-411041%20MAHARASHTRA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  S.NO. 10/9/3K, NR.ASWAD HOTEL,HAVELI, NANDED N.V. HAVELI
                  NANDED PUNE-411041 MAHARASHTRA
                </a>
              </div>
              <div className="flex mb-3 border-b border-gray-300 pb-6">
                <FontAwesomeIcon
                  className="mt-1"
                  icon={faEnvelope}
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
                <div className="ml-3">
                  <p>
                    <a href="mailto:reinewelleprojects@gmail.com">
                      reinewelleprojects@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@reinewelleprojects.com">
                      info@reinewelleprojects.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex mb-3 border-b border-gray-300 pb-6">
                <FontAwesomeIcon
                  className="mt-1"
                  icon={faPhone}
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
                <p className="ml-3 mt-1">
                  <a href="tel:+919561968494">9561968494</a>
                </p>
              </div>
            </ul>
          </div>

          <div className="mt-10 lg:mt-4 mt:mt-10 lg:ml-28 md:ml-20">
            <h2
              className="mb-6 text-base font-semibold text-white uppercase dark:text-white"
              style={{ fontFamily: "Baskerville" }}
            >
              Company
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-2 border-b border-gray-300 pb-4">
                <a href="/" className="hover:underline hover:text-yellow-500">
                  Home
                </a>
              </li>
              <li className="mb-2 border-b border-gray-300 pb-4">
                <a
                  href="aboutUs"
                  className="hover:underline hover:text-yellow-500"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2 border-b border-gray-300 pb-4">
                <a
                  href="products"
                  className="hover:underline hover:text-yellow-500"
                >
                  Products
                </a>
              </li>
              <li className="mb-2 border-b border-gray-300 pb-4">
                <a
                  href="services"
                  className="hover:underline hover:text-yellow-500"
                >
                  Services
                </a>
              </li>
              <li className="mb-2 border-b border-gray-300 pb-4">
                <a
                  href="contact"
                  className="hover:underline hover:text-yellow-500"
                >
                  Contact Info
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="md:ml-8 md:mt-10 mt-10 lg:ml-16 lg:mt-0">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2 border-b border-gray-300 pb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2 border-b border-gray-300 pb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-2 border-b border-gray-300 pb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div> */}

          {/* <div className="mt-10 lg:mt-4 mt:mt-10 lg:ml-28 md:ml-16">
            <h2
              className="mb-6 text-sm font-semibold text-white uppercase dark:text-white"
              style={{ fontFamily: "Baskerville" }}
            >
              Services
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-2 border-b border-gray-300 pb-4">
                <a href="zld" className="hover:underline">
                  Zero Liquid Discharge (ZLD)
                </a>
              </li>
              <li className="mb-2 border-b border-gray-300 pb-4">
                <a href="waterTreatment" className="hover:underline">
                  Water Treatment Plant
                </a>
              </li>
              <li className="mb-2 border-b border-gray-300 pb-4">
                <a href="wasteWater" className="hover:underline">
                  Effluent Treatment Plant
                </a>
              </li>
              <li className="mb-2 border-b border-gray-300 pb-4">
                <a href="wasteWater" className="hover:underline">
                  Standard temperature and pressure
                </a>
              </li>
              <li className="mb-2 border-b border-gray-300 pb-4">
                <a href="wasteWater" className="hover:underline">
                  Reverse Osmosis
                </a>
              </li>
              <li className="mb-2 border-b border-gray-300 pb-4">
                <a href="wasteWater" className="hover:underline">
                  Demineralized Water
                </a>
              </li>
            </ul>
          </div> */}

          <div className="mt-10 lg:mt-4 mt:mt-10 lg:ml-28 md:ml-16">
            <h2
              className="mb-6 text-base font-semibold text-white uppercase dark:text-white"
              style={{ fontFamily: "Baskerville" }}
            >
              Business Hours
            </h2>
            <p className=" text-white font-medium">Monday-Friday: 9am to 5pm</p>
            <p className=" text-white mt-4 font-medium">
              Saturday: 10am to 4pm
            </p>
            <p className=" text-white mt-4 font-medium">Sunday: Closed</p>
          </div>
        </div>
        <div className="px-4 py-6 text-center bg-blue-950 mt-16">
          <span
            className="text-base text-gray-400 font-medium"
            style={{ fontFamily: "Baskerville" }}
          >
            © 2024 <a>Reinewelle™</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
