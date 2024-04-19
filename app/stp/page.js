"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stp = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [showElements, setShowElements] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollDirection === "down") {
      // Sequentially reveal elements only when scrolling down
      const delays = [1000, 2000, 3000, 4000, 5000];
      delays.forEach((delay, index) => {
        setTimeout(() => {
          setShowElements((prevState) => {
            const newShowElements = [...prevState];
            newShowElements[index] = true;
            return newShowElements;
          });
        }, delay);
      });
    }
  }, [scrollDirection]);

  return (
    <>
      <Navbar />
      <div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-16 mx-auto">
            <div className="text-center mt-20 mx-auto">
              <h5
                className="lg:text-5xl md:text-3xl text-2xl text-gray-900 font-bold"
                style={{ fontFamily: "Baskerville" }}
              >
                Standard Temperature and Pressure
              </h5>
              <div className="flex justify-center">
                <hr className="mt-7 lg:w-56 md:w-56 w-24 border-t-2 border-cyan-800 mr-3" />
                <img
                  src="drop.png"
                  alt="Your Image"
                  className="mt-2"
                  style={{ width: "40px", height: "40px" }}
                />
                <hr className="mt-7 lg:w-56 md:w-56 w-24 border-t-2 border-cyan-800 ml-3" />
              </div>
            </div>
            <div className="lg:w-4/5 mx-auto flex flex-wrap mt-10">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <p className="text-gray-500 dark:text-gray-400 text-justify -mt-8">
                  Standard temperature and pressure (STP) or Standard conditions
                  for temperature and pressure are various standard sets of
                  conditions for experimental measurements used to allow
                  comparisons to be made between different sets of data. The
                  most used standards are those of the International Union of
                  Pure and Applied Chemistry (IUPAC) and the National Institute
                  of Standards and Technology (NIST), although these are not
                  universally accepted. Other organizations have established a
                  variety of other definitions. In industry and commerce, the
                  standard conditions for temperature and pressure are often
                  necessary for expressing the volumes of gases and liquids and
                  related quantities such as the rate of volumetric flow (the
                  volumes of gases vary significantly with temperature and
                  pressure): standard cubic meters per second (Sm3/s), and
                  normal cubic meters per second (Nm3/s).
                </p>
              </div>
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="temp.jpg"
              />
              <p className="text-gray-500 dark:text-gray-400 text-justify mt-6">
                STP conditions are important to calculate and express fluid flow
                rates and the volumes of liquids and gases when standard state
                conditions are applied. These properties are also highly
                dependent on temperature and pressure conditions and changes.
                Adopting and stating standard conditions enable similar
                experiments to occur in similar laboratory conditions and to
                generate similar and comparable results. It also makes it easier
                to compare different measurements for gases, such as the moles
                (mol) of gas in a given volume. Both temperature and air
                pressure vary from one place to another. To test, compare and
                document chemical and physical processes where temperature and
                pressure play a role, including data centers or anywhere
                computers are used, a standard reference of both is required.
              </p>
            </div>
            <div className="text-center mt-20 mx-auto">
              <h5 className="lg:text-5xl md:text-3xl text-2xl text-gray-900 font-bold">
                Benefits of Standard Temperature and Pressure
              </h5>
              <div className="flex justify-center">
                <hr className="mt-7 lg:w-56 md:w-56 w-24 border-t-2 border-cyan-800 mr-3" />
                <img
                  src="drop.png"
                  alt="Your Image"
                  className="mt-2"
                  style={{ width: "40px", height: "40px" }}
                />
                <hr className="mt-7 lg:w-56 md:w-56 w-24 border-t-2 border-cyan-800 ml-3" />
              </div>
            </div>

            <div className="max-w-6xl mx-auto mt-10">
              {showElements.map((showElement, index) => (
                <div
                  key={index}
                  className={`flex mt-6 transition-opacity duration-200 ${
                    showElement ? "" : "opacity-0"
                  }`}
                >
                  <img
                    src={`${index + 1}.png`}
                    alt="Image"
                    className="w-8 h-8"
                  />
                  <p className="leading-relaxed ml-2 mt-1">
                    {index === 0 &&
                      "STP provides a consistent reference point for comparing gas properties."}
                    {index === 1 &&
                      "By setting specific values for temperature and pressure (0°C or 273.15 K and 1 atmosphere or 101.325 kPa), STP allows for easy comparison of gas properties under standard conditions."}
                    {index === 2 &&
                      "STP is often used in conjunction with the ideal gas law (PV = nRT), where P is pressure, V is volume, n is the number of moles of gas, R is the gas constant, and T is temperature.."}
                    {index === 3 &&
                      "STP is commonly used for calibrating instruments and equipment used in gas analysis."}
                    {index === 4 &&
                      "STP promotes standardization in scientific research and industrial applications."}
                  </p>
                </div>
              ))}
            </div>
            {/* <div className=" max-w-6xl mx-auto mt-10">
              <div className=" flex mt-4">
                <img src="1.png" alt="Image" className="w-8 h-8" />
                <p className="leading-relaxed ml-2 mt-1">
                  Wastewater treatment significantly reduces the pollution load
                  discharged into water bodies, protecting aquatic ecosystems,
                  marine life, and sensitive habitats.
                </p>
              </div>
              <div className=" flex mt-6">
                <img src="2.png" alt="Image" className="w-8 h-8" />
                <p className="leading-relaxed ml-2 mt-1">
                  Proper wastewater treatment prevents the spread of waterborne
                  diseases by removing pathogens and harmful bacteria from
                  sewage.
                </p>
              </div>
              <div className=" flex mt-6">
                <img src="3.png" alt="Image" className="w-8 h-8" />
                <p className="leading-relaxed ml-2 mt-1">
                  Wastewater treatment facilities often incorporate processes
                  for recovering valuable resources from sewage, such as energy
                  and nutrients.
                </p>
              </div>
              <div className=" flex mt-6">
                <img src="4.png" alt="Image" className="w-8 h-8" />
                <p className="leading-relaxed ml-2 mt-1">
                  Treated wastewater can be reclaimed for various non-potable
                  purposes, including irrigation, industrial processes, and
                  groundwater recharge.
                </p>
              </div>
              <div className=" flex mt-6">
                <img src="5.png" alt="Image" className="w-8 h-8" />
                <p className="leading-relaxed ml-2 mt-1">
                  Wastewater treatment ensures compliance with environmental
                  regulations and standards set by regulatory agencies.
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default stp;
