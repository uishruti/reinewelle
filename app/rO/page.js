"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RO = () => {
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
                Reverse Osmosis
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
                  Reverse osmosis (RO) is a water purification process that uses
                  a semi-permeable membrane to separate water molecules from
                  other substances. RO applies pressure to overcome osmotic
                  pressure that favors even distributions. RO can remove
                  dissolved or suspended chemical species as well as biological
                  substances (principally bacteria), and is used in industrial
                  processes and the production of potable water. RO retains the
                  solute on the pressurized side of the membrane and the
                  purified solvent passes to the other side. It relies on the
                  relative sizes of the various molecules to decide what passes
                  through. "Selective" membranes reject large molecules, while
                  accepting smaller molecules (such as solvent molecules, e.g.,
                  water).[1] RO is most commonly known for its use in drinking
                  water purification from seawater, removing the salt and other
                  effluent materials from the water molecules.
                </p>
              </div>
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="blog.jpg"
              />
              <p className="text-gray-500 dark:text-gray-400 text-justify mt-6">
              A process of osmosis through semi-permeable membranes was first observed in 1748 by Jean-Antoine Nollet. For the following 200 years, osmosis was only a laboratory phenomenon. In 1950, the University of California at Los Angeles (UCLA) first investigated osmotic desalination. Researchers at both UCLA and University of Florida desalinated seawater in the mid-1950s, but the flux was too low to be commercially viable.[4] Sidney Loeb at UCLA and Srinivasa Sourirajan[5] at the National Research Council of Canada, Ottawa, found techniques for making asymmetric membranes characterized by an effectively thin "skin" layer supported atop a highly porous and much thicker substrate region. John Cadotte, of Filmtec corporation, discovered that membranes with particularly high flux and low salt passage could be made by interfacial polymerization of m-phenylene diamine and trimesoyl chloride. Cadotte's patent on this process[6] was the subject of litigation and expired. Almost all commercial RO membrane is now made by this method. By 2019, approximately 16,000 desalination plants operated around the world, producing around 95 million cubic metres per day (25 billion US gallons per day). Around half of this capacity was in the Middle East and North Africa region.
              </p>
            </div>
            <div className="text-center mt-20 mx-auto">
              <h5 className="lg:text-5xl md:text-3xl text-2xl text-gray-900 font-bold">
                Benefits of Reverse Osmosis
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
                      "RO systems effectively remove a wide range of contaminants from water, including dissolved salts, heavy metals, minerals, organic compounds, bacteria, viruses, and other impurities. "}
                    {index === 1 &&
                      "By eliminating impurities and dissolved solids, reverse osmosis can significantly improve the taste, odor, and overall quality of water."}
                    {index === 2 &&
                      "RO systems provide access to clean, safe drinking water, which is essential for maintaining good health."}
                    {index === 3 &&
                      "RO systems offer a convenient and reliable way to access purified water at home, in offices, and in other settings. "}
                    {index === 4 &&
                      "Using reverse osmosis to purify water can have positive environmental implications. "}
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

export default RO;
