"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const wasteWater = () => {
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
                Effluent Treatment Plant (ETP)
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
                  Wastewater treatment is a process which removes and eliminates
                  contaminants from wastewater and converts this into an
                  effluent that can be returned to the water cycle. Once
                  returned to the water cycle, the effluent creates an
                  acceptable impact on the environment or is reused for various
                  purposes called water reclamation.The treatment process takes
                  place in a wastewater treatment plant. There are several kinds
                  of wastewater which are treated at the appropriate type of
                  wastewater treatment plant. For domestic wastewater also
                  called municipal wastewater or sewage, the treatment plant is
                  called a Sewage Treatment. For industrial wastewater,
                  treatment either takes place in a separate Industrial
                  wastewater treatment, or in a sewage treatment plant usually
                  after some form of pre-treatment. Further types of wastewater
                  treatment plants include Agricultural wastewater treatment and
                  leachate treatment plants.
                </p>
              </div>
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="wastewater.jpeg"
              />
              <p className="text-gray-500 dark:text-gray-400 text-justify mt-6">
                Wastewater is any water that has been used in homes, businesses,
                industries, or agriculture and contains pollutants or harmful
                contaminants. It can be the water from toilets, sinks, showers,
                washing machines and industrial discharges. There is a need of
                wastewater treatment before it can be safely released back into
                the environment especially in industrial areas, where we found
                some stringent discharge to the environment which leads to
                harmful effects on both environment and human beings.
                Industries, wastewater treatment plants, and other entities that
                produce or manage waste are typically required to adhere to
                these stringent discharge means to prevent pollution and
                minimize negative impacts on the environment. Violations of
                these regulations can result in fines, penalties, and legal
                consequences.
              </p>
            </div>
            <div className="text-center mt-20 mx-auto">
              <h5 className="lg:text-5xl md:text-3xl text-2xl text-gray-900 font-bold">
                Benefits of Wastewater Treatment
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
                      "Lower waste volumes decrease the cost associated with waste management."}
                    {index === 1 &&
                      "Recycling water on-site lowers water acquisition costs and risk. Recycling on-site can also result in fewer treatment needs, versus treating to meet stringent environmental discharge standards."}
                    {index === 2 &&
                      "Reduce trucks associated with off-site wastewater disposal and their associated greenhouse gas impact and community road incident risk."}
                    {index === 3 &&
                      "Improve environmental performance and regulatory risk profile for future permitting."}
                    {index === 4 &&
                      "Some processes may recover valuable resources, for example, ammonium sulfate fertilizer or sodium chloride salt for ice melting."}
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

export default wasteWater;
