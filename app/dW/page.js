"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DW = () => {
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
                Demineralized Water
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
                  Demineralization is a type of water purification. While it can
                  refer to any treatment process that removes minerals from
                  water, the term demineralization is typically reserved
                  specifically for ion exchange (IX) processes used for near
                  total removal of ionic mineral contaminants. Often, the terms
                  demineralization and deionization are used interchangeably. IX
                  demineralization utilizes both cation and anion exchange
                  resins, sometimes even in the same column or bed. Following
                  demineralization, the treated water will be of a high level of
                  purity comparable to distilled water, but typically at a much
                  lower cost. In the presence of water, minerals and salts
                  dissociate into their constituent ions. These dissolved solids
                  consist of negatively-charged ions known as anions, and
                  positively-charged ions known as cations, each of which are
                  attracted to counterions (or ions of an opposing charge).
                  Present within an IX column is a resin which consists of
                  plastic beads to which an ionic functional group has been
                  bound. These functional groups loosely hold ions of an
                  opposing charge through mutual electrostatic attraction.
                  During an active IX cycle, a water with dissolved ions is
                  introduced to the resin. The ions in solution will exchange
                  places with the ions on the resin beads, clinging to the
                  resins functional groups even as the resulting solution is
                  drained away. IX happens when one ion has greater affinity for
                  the functional group than the ion that is already present. The
                  specific ionic contaminants present will dictate whether
                  anionic and/or cationic resin types are needed.
                </p>
              </div>
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="demi.jpg"
              />
              <p className="text-gray-500 dark:text-gray-400 text-justify mt-6">
                In the presence of water, minerals and salts dissociate into
                their constituent ions. These dissolved solids consist of
                negatively-charged ions known as anions, and positively-charged
                ions known as cations, each of which are attracted to
                counterions (or ions of an opposing charge). Present within an
                IX column is a resin which consists of plastic beads to which an
                ionic functional group has been bound. These functional groups
                loosely hold ions of an opposing charge through mutual
                electrostatic attraction. During an active IX cycle, a water
                with dissolved ions is introduced to the resin. The ions in
                solution will exchange places with the ions on the resin beads,
                clinging to the resins functional groups even as the resulting
                solution is drained away. IX happens when one ion has greater
                affinity for the functional group than the ion that is already
                present. The specific ionic contaminants present will dictate
                whether anionic and/or cationic resin types are needed.
              </p>
            </div>
            <div className="text-center mt-20 mx-auto">
              <h5 className="lg:text-5xl md:text-3xl text-2xl text-gray-900 font-bold">
                Benefits of Demineralized water
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
                      "Demineralized water is highly pure, containing minimal concentrations of dissolved minerals and impurities."}
                    {index === 1 &&
                      "By removing minerals such as calcium, magnesium, and carbonate ions, demineralized water helps prevent scaling and deposits in equipment, machinery, and pipelines."}
                    {index === 2 &&
                      "In industrial processes, demineralized water can improve the performance and efficiency of equipment by reducing the risk of corrosion, fouling, and blockages caused by mineral deposits."}
                    {index === 3 &&
                      "Demineralized water provides a consistent and reliable water quality, which is essential for maintaining process consistency and product quality in manufacturing and laboratory settings."}
                    {index === 4 &&
                      "Demineralized water is chemically compatible with a wide range of materials, including plastics, metals, and ceramics."}
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

export default DW;
