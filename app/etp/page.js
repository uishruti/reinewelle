"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ETP = () => {
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
                Effluent Treatment Plant{" "}
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
                  Effluent treatment plant, also known as ETP is a waste water
                  treatment process (WWTP) that is used to treat waste water.
                  It's mostly used in industries like pharmaceuticals, textiles,
                  and chemicals where extreme water contamination is a
                  possibility. Effluent Treatment Plant plays a significant role
                  in the treatment of industrial waste water as well as domestic
                  sewage. Organic matter, inorganic matter, heavy metals, oil &
                  grease, suspended particles, and other contaminants are
                  treated in the wastewater treatment process of an ETP plant.
                  Chemical treatment, biological treatment, a combination of
                  chemical and biological treatment, and thermal treatment are
                  the several types of wastewater treatment plants. Effluent is
                  generated in many manufacturing industries like textile,
                  pharmaceuticals and chemicals, tanneries etc. Contaminated
                  water cannot be released without treatment as it contains
                  toxic and non-toxic chemicals. Releasing it may cause
                  contamination of the existing pure water and will affect the
                  environment. As a result ETPs are installed in most
                  manufacturing industries.
                </p>
              </div>
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="wastewater.jpeg"
              />
              <p className="text-gray-500 dark:text-gray-400 text-justify mt-6">
                Effluent Treatment Plant or ETP is one type of waste water
                treatment method which is particularly designed to purify
                industrial waste water for its reuse and its aim is to release
                safe water to environment from the harmful effect caused by the
                effluent. Industrial effluents contain various materials,
                depending on the industry. Some effluents contain oils and
                grease, and some contain toxic materials (e.g., cyanide).
                Effluents from food and beverage factories contain degradable
                organic pollutants. Since industrial waste water contains a
                diversity of impurities and therefore specific treatment
                technology called ETP is required. The ETP Plant works at
                various levels and involves various physical, chemical,
                biological and membrane processes to treat waste water from
                different industrial sectors like chemicals, drugs,
                pharmaceutical, refineries, dairy, ready mix plants & textile
                etc. The Effluent treatment plants (ETP) are used for the
                removal of high amounts of organic compounds, debris, dirt,
                grit, pollution, toxic, non-toxic materials and polymers etc.
                from industrial effluent. The ETP plants use evaporation and
                drying methods and other auxiliary techniques such as
                centrifuging, filtration , incineration for chemical processing
                and effluent treatment.
              </p>
            </div>
            <div className="text-center mt-20 mx-auto">
              <h5 className="lg:text-5xl md:text-3xl text-2xl text-gray-900 font-bold">
                Benefits of Effluent Treatment Plant{" "}
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
                      "One of the primary benefits of ETPs is their role in protecting the environment by treating industrial wastewater to remove harmful pollutants and contaminants. "}
                    {index === 1 &&
                      "ETPs help industries comply with local, national, and international environmental regulations governing the discharge of wastewater. "}
                    {index === 2 &&
                      "Effluent treatment plants contribute to public health and safety by reducing the risk of waterborne diseases and contamination of drinking water sources. "}
                    {index === 3 &&
                      "ETPs promote resource conservation by reclaiming and recycling water, energy, and valuable materials from industrial wastewater."}
                    {index === 4 &&
                      "Effluent treatment plants support sustainable development goals by promoting responsible water management practices and reducing the environmental impact of industrial activities. "}
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

export default ETP;
