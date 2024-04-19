"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const zld = () => {
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
            <div className="text-center mt-4 mx-auto relative">
              <h5
                className="lg:text-6xl md:text-3xl text-2xl text-gray-900 relative z-10"
                style={{ fontFamily: "Baskerville" }}
              >
                Zero liquid zld{" "}
              </h5>
              <div className="flex justify-center z-10">
                <hr className="mt-7 lg:w-56 md:w-56 w-24 border-t-2 border-cyan-800 mr-3" />
                <img
                  src="drop.png"
                  alt="Your Image"
                  className="mt-2"
                  style={{ width: "40px", height: "40px" }}
                />
                <hr className="mt-7 lg:w-56 md:w-56 w-24 border-t-2 border-cyan-800 ml-3" />
              </div>
              <div className="wave-animation absolute bottom-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="wave"></div>
              </div>
            </div>
            <div className="lg:w-4/5 mx-auto flex flex-wrap mt-10">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <p className="text-gray-500 dark:text-gray-400 text-justify -mt-8">
                  Zero liquid discharge (ZLD) is an engineering approach to
                  water treatment where all water is recovered and contaminants
                  are reduced to solid waste. While many water treatment
                  processes attempt to maximize the recovery of freshwater and
                  minimize waste, ZLD is the most demanding target because the
                  cost and challenges of recovery increase as the wastewater
                  gets more concentrated. Salinity, scaling compounds, and
                  organics all increase in concentration, which add costs
                  associated with managing these increases. ZLD is achieved by
                  stringing together water treatment technology that can treat
                  wastewater as the contaminants are concentrated. The primary
                  objective of ZLD is to minimize environmental impact by
                  preventing any discharge of effluent into water bodies,
                  thereby conserving water resources and reducing pollution.
                </p>
              </div>
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="zerowater.jpg"
              />
              <p className="text-gray-500 dark:text-gray-400 text-justify mt-6">
                Several methods of waste management are classified as ZLD,
                despite using different boundaries to define the point where
                discharge occurs. Usually, a facility or site property line that
                houses the industrial process is considered the border or
                boundary condition where wastewater must be treated, recycled,
                and converted to solids for disposal to achieve zero liquid
                discharge. Certain facilities send their liquid waste off-site
                for treatment, deep well disposal, or incineration and they
                consider this to qualify as ZLD. This approach eliminates the
                continuous discharge of liquids to surface waters or sewers, but
                can significantly increase cost. Some engineers describe their
                designs as near-ZLD or minimal liquid discharge to highlight
                that they discharge low levels of wastewater, but these
                processes do not eliminate liquid in their waste. For some
                facilities, it may be more economical to approach but not
                achieve complete ZLD by concentrating brine to lower volumes.
                Furthermore, it may be possible to avoid the creation of liquid
                waste on-site through careful water conservation or by treating
                contaminants at their source before they can enter the main flow
                of water.
              </p>
            </div>
            <div className="text-center mt-20 mx-auto">
              <h5 className="lg:text-5xl md:text-3xl text-2xl text-gray-900 font-bold">
                Benefits of Zero Liquid Discharge
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
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default zld;
