"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WaterTreatment = () => {
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
    } else {
      // Hide elements when scrolling up
      setShowElements([true, true, true, true, true]);
    }
  }, [scrollDirection]);

  return (
    <>
      <Navbar />
      <div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-12 mx-auto">
            <div className="text-center mt-20 mx-auto">
              <h5
                className="lg:text-5xl md:text-3xl text-2xl text-gray-900 font-bold"
                style={{ fontFamily: "Baskerville" }}
              >
                Water Treatment
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
                  Water treatment is any process that improves the quality of
                  water to make it appropriate for a specific end-use. The end
                  use may be drinking, industrial water supply, irrigation,
                  river flow maintenance, water recreation or many other uses,
                  including being safely returned to the environment. Water
                  treatment removes contaminants and undesirable components, or
                  reduces their concentration so that the water becomes fit for
                  its desired end-use. This treatment is crucial to human health
                  and allows humans to benefit from both drinking and irrigation
                  use. Water Combination is primarily caused by the discharge of
                  untreated wastewater from enterprises. The effluent from
                  various enterprises, which contains varying levels of
                  contaminants, is dumped into rivers or other water resources.
                  The wastewater may have a high proportion of organic and
                  inorganic contaminants at the initial discharge. Industries
                  generate wastewater as a result of fabrication processes,
                  processes dealing with paper and pulp, textiles, chemicals,
                  and from various streams such as cooling towers, boilers, and
                  production lines.
                </p>
              </div>
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="treatment.jpg"
              />
              <p className="text-gray-500 dark:text-gray-400 text-justify mt-6">
                Treatment for drinking water production involves the removal of
                contaminants and/or inactivation of any potentially harmful
                microbes from raw water to produce water that is pure enough for
                human consumption without any short term or long term risk of
                any adverse health effect. In general terms, the greatest
                microbial risks are associated with ingestion of water that is
                contaminated with human or animal (including bird) faeces.
                Faeces can be a source of pathogenic bacteria, viruses, protozoa
                and helminths. The removal or destruction of microbial pathogens
                is essential, and commonly involves the use of reactive chemical
                agents such as suspended solids, to remove bacteria, algae,
                viruses, fungi, and minerals including iron and manganese.
                Research including Professor Linda Lawton's group at Robert
                Gordon University, Aberdeen is working to improve detection of
                cyanobacteria.[2] These substances continue to cause great harm
                to several less developed countries who do not have access to
                effective water purification systems.
              </p>
            </div>
            <div className="text-center mt-20 mx-auto">
              <h5 className="lg:text-5xl md:text-3xl text-2xl text-gray-900 font-bold">
                Benefits of Water Treatment
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
                      " Water treatment removes contaminants and pathogens from drinking water, reducing the risk of waterborne diseases such as cholera, typhoid, and dysentery."}
                    {index === 1 &&
                      "Treatment processes such as disinfection ensure that drinking water meets regulatory standards and is safe for consumption."}
                    {index === 2 &&
                      "Water treatment helps to minimize the discharge of pollutants and contaminants into natural water bodies, such as rivers, lakes, and oceans."}
                    {index === 3 &&
                      "By removing pathogens and contaminants from water sources, treatment facilities contribute to the reduction of waterborne diseases, particularly in communities with limited access to clean water and sanitation infrastructure."}
                    {index === 4 &&
                      "Access to clean and safe water is essential for economic development and prosperity."}
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

export default WaterTreatment;
