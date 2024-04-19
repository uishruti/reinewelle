"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const services = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1); // Number of slides to show based on screen size

  const partnerImages = [
    "Tata.png",
    "client1bg.png",
    "cooper1.jpg",
    "client-5.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "godrej.jpeg",
  ];

  // Update number of slides to show based on screen size
  const updateSlidesToShow = () => {
    if (window.innerWidth < 768) {
      setSlidesToShow(1); // Mobile view: 1 slide
    } else if (window.innerWidth < 1024) {
      setSlidesToShow(3); // Tablet view: 3 slides
    } else {
      setSlidesToShow(5); // Desktop view: 5 slides
    }
  };

  useEffect(() => {
    updateSlidesToShow(); // Update slides to show initially

    // Update slides to show on window resize
    window.addEventListener("resize", updateSlidesToShow);

    // Clear event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === Math.ceil(partnerImages.length / slidesToShow) - 1
          ? 0
          : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slidesToShow]); // Listen for changes in slidesToShow

  return (
    <>
      <Navbar />
      <div className=" max-w-8xl mx-auto rounded-md mt-16">
        <div className="w-full mx-auto lg:mt-16 mt-20 md:mt-14 relative">
          <img
            alt="ecommerce"
            className="w-full lg:h-58 h-28 md:h-40 object-cover rounded"
            src="service4.jpg"
          />
          <div
            className="absolute -top-1 left-0 w-full lg:h-58 h-32 md:h-44 flex items-center justify-center"
            style={{ background: "rgba(0, 0, 0, 0.5)" }}
          >
            <p
              className="lg:text-6xl text-3xl md:text-4xl font-bold italic text-white"
              style={{ fontFamily: "Baskerville" }}
            >
              Services{" "}
            </p>
          </div>
        </div>

        <section className="relative z-20 mt-28">
          <div className=" text-center">
            <h
              className="max-w-lg lg:text-5xl text-xl md:text-4xl  text-gray-900 dark:text-white"
              style={{ fontFamily: "'Playfair Display', 'serif'" }}
            >
              We Provide All Kinds of Residential &
            </h>
            <p
              className="lg:text-5xl text-xl md:text-4xl leading-normal  text-gray-900 dark:text-white"
              style={{ fontFamily: "'Playfair Display', 'serif'" }}
            >
              Commercial Water Solutions
            </p>
          </div>

          <div className="px-5">
            <div className="grid place-items-center p-1">
              <img src="zig.png" alt="Image" className="w-16 h-16" />
            </div>

            <div>
              <p className="max-w-5xl mx-auto text-gray-600 dark:text-white text-base mt-10 text-center">
                We now supply our water residential and commercial. We provide
                approximately 250 companies and ten thousand residential areas
                our service at present. Our clients are very satisfied if you
                check our review and now we want to expand our company more.
              </p>
            </div>
            <div className="flex flex-wrap text-center lg:gap-2 md:gap-16 mt-8">
              {/* Your existing content */}
              <div className="p-4 w-full md:w-72 lg:w-72 flex flex-col items-center rounded-xl container">
                <div className=" p-1 inline-block px-2">
                  <img src="702.png" alt="Image" className=" w-24 h-24" />
                </div>
                <div>
                  <p className=" text-sm text-gray-700 -mt-4">
                    BOTTLES DELIVERED
                  </p>
                </div>
              </div>

              <div className="relative hidden md:flex justify-center mt-10">
                <div className="absolute left-1/2 w-0.5 h-16 bg-gray-300 transform -translate-x-1/2"></div>
              </div>

              <div className="p-4 w-full md:w-72 lg:w-72 flex flex-col items-center rounded-xl container">
                <div className=" p-1 inline-block px-2">
                  <img src="15.png" alt="Image" className=" w-24 h-24" />
                </div>
                <div>
                  <p className=" text-sm text-gray-700 -mt-4">
                    OUTLETS IN COUNTRY
                  </p>
                </div>
              </div>

              <div className="relative hidden lg:block justify-center mt-10">
                <div className="absolute left-1/2 w-0.5 h-16 bg-gray-300 transform -translate-x-1/2"></div>
              </div>

              <div className="p-4 w-full md:w-72 lg:w-72 flex flex-col items-center rounded-xl container">
                <div className=" p-1 inline-block px-2">
                  <img src="12.png" alt="Image" className=" w-24 h-24" />
                </div>
                <div>
                  <p className=" text-sm text-gray-700 -mt-4">
                    OUTLETS IN COUNTRY
                  </p>
                </div>
              </div>

              <div className="relative hidden md:flex justify-center mt-10">
                <div className="absolute left-1/2 w-0.5 h-16 bg-gray-300 transform -translate-x-1/2"></div>
              </div>

              <div className="p-4 w-full md:w-72 lg:w-72 flex flex-col items-center rounded-xl container">
                <div className=" p-1 inline-block px-2">
                  <img src="5s.png" alt="Image" className=" w-24 h-24" />
                </div>
                <div>
                  <p className=" text-sm text-gray-700 -mt-4">
                    FILTRATION PLANT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <section className="text-gray-600 body-font bg-blue-50 mt-16 mb-16">
            <div className="container px-5 py-20 ">
              <div className=" text-center relative">
                <h
                  className="max-w-lg lg:text-5xl text-3xl md:text-5xl text-gray-900 dark:text-white lg:ml-48"
                  style={{ fontFamily: "'Playfair Display', 'serif'" }}
                >
                  What We Do
                </h>
                <div className="absolute hidden md:hidden lg:block h-full bg-blue-800 w-1 top-0 lg:left-1/2 md:left-52 bottom-0 mt-1"></div>
                <p className="max-w-lg text-center lg:text-left text-gray-900 dark:text-white text-sm mt-1 lg:mt-0 lg:float-right lg:mr-20 md:ml-24">
                  Reinewelle is dedicated to delivering top-notch services that
                  ensure clean water flows seamlessly into homes, businesses,
                  and communities, promoting health and well-being for all.
                </p>
              </div>

              <div className=" grid w-full lg:grid-cols-3 md:grid-cols-2  mt-10">
                <div className="p-4 ">
                  <div
                    className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-300 hover:border border-transparent hover:border-indigo-500"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="overlay-container">
                      <img
                        className="blog-image lg:h-80 md:h-64  object-cover object-center"
                        src="zerowater.jpg"
                        alt="blog"
                      />
                      <div className="overlay"></div>
                    </div>

                    <div className="p-6">
                      <h1
                        className="title-font text-xl font-medium text-gray-900 mb-3 text-center"
                        style={{ fontFamily: "Poppins" }}
                      >
                        Zero Liquid Discharge (ZLD)
                      </h1>
                      <p className="leading-relaxed mb-3 text-center">
                        ZLD is a water treatment process to reduce wastewater
                        and produce clean water that is suitable for reuse
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="wasteWater"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 px-3 py-1 rounded-md border border-indigo-500 "
                          style={{ fontFamily: "Baskerville" }}
                        >
                          Know More
                          <FontAwesomeIcon
                            className="ml-2"
                            icon={faArrowRight}
                          />
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-3 border-r-2 border-gray-200">
                          {/* <!-- Content inside the span --> */}
                        </span>
                        <img
                          src="waterr.png"
                          alt="Your Image"
                          className=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-full lg:w-full w-full">
                  <div
                    className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 transition duration-300 hover:border border-transparent hover:border-indigo-500 rounded-lg overflow-hidden"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="overlay-container">
                      <img
                        className="blog-image lg:h-80 md:h-64 w-full object-cover object-center"
                        src="treatment.jpg"
                        alt="blog"
                      />
                      <div className="overlay"></div>
                    </div>
                    <div className="p-6">
                      <h1
                        className="title-font text-xl font-medium text-gray-900 mb-3 text-center"
                        style={{ fontFamily: "Poppins" }}
                      >
                        Water Treatment
                      </h1>
                      <p className="leading-relaxed mb-3 text-center">
                        WT is a process that improves the quality of water to
                        make it appropriate for a specific end-use.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="wasteWater"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 px-3 py-1 rounded-md border border-indigo-500 "
                          style={{ fontFamily: "Baskerville" }}
                        >
                          Know More
                          <FontAwesomeIcon
                            className="ml-2"
                            icon={faArrowRight}
                          />
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-3 border-r-2 border-gray-200">
                          {/* <!-- Content inside the span --> */}
                        </span>
                        <img
                          src="treat.png"
                          alt="Your Image"
                          className=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-full lg:w-full">
                  <div
                    className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-300 hover:border border-transparent hover:border-indigo-500"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="overlay-container">
                      <img
                        className="blog-image lg:h-80 md:h-64 w-full object-cover object-center"
                        src="waste2.jpeg"
                        alt="blog"
                      />
                      <div className="overlay"></div>
                    </div>
                    <div className="p-6">
                      <h1
                        className="title-font text-xl font-medium text-gray-900 mb-3 text-center"
                        style={{ fontFamily: "Poppins" }}
                      >
                        Effluent Treatment Plant
                      </h1>
                      <p className="leading-relaxed mb-3 text-center">
                        ETP is a facility to treat and purify industrial
                        wastewater before its safe discharge into the
                        environment.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="wasteWater"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 px-3 py-1 rounded-md border border-indigo-500 "
                          style={{ fontFamily: "Baskerville" }}
                        >
                          Know More
                          <FontAwesomeIcon
                            className="ml-2"
                            icon={faArrowRight}
                          />
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-3 border-r-2 border-gray-200">
                          {/* <!-- Content inside the span --> */}
                        </span>
                        <img
                          src="waste.png"
                          alt="Your Image"
                          className=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-full lg:w-full">
                  <div
                    className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-300 hover:border border-transparent hover:border-indigo-500"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="overlay-container">
                      <img
                        className="blog-image lg:h-80 md:h-64 w-full object-cover object-center"
                        src="temp.jpg"
                        alt="blog"
                      />
                      <div className="overlay"></div>
                    </div>
                    <div className="p-6">
                      <h1
                        className="title-font text-xl font-medium text-gray-900 mb-3 text-center"
                        style={{ fontFamily: "Poppins" }}
                      >
                        Standard Temperature and Pressure
                      </h1>
                      <p className="leading-relaxed mb-3 text-center">
                        STP is a experimental measurements used to allow
                        comparisons to be made between different sets of data.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="stp"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 px-3 py-1 rounded-md border border-indigo-500 "
                          style={{ fontFamily: "Baskerville" }}
                        >
                          Know More
                          <FontAwesomeIcon
                            className="ml-2"
                            icon={faArrowRight}
                          />
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-3 border-r-2 border-gray-200">
                          {/* <!-- Content inside the span --> */}
                        </span>
                        <img
                          src="thermo.png"
                          alt="Your Image"
                          className=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-full lg:w-full">
                  <div
                    className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-300 hover:border border-transparent hover:border-indigo-500"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="overlay-container">
                      <img
                        className="blog-image lg:h-80 md:h-64 w-full object-cover object-center"
                        src="blog.jpg"
                        alt="blog"
                      />
                      <div className="overlay"></div>
                    </div>
                    <div className="p-6">
                      <h1
                        className="title-font text-xl font-medium text-gray-900 mb-3 text-center"
                        style={{ fontFamily: "Poppins" }}
                      >
                        Reverse Osmosis
                      </h1>
                      <p className="leading-relaxed mb-3 text-center">
                        RO is a water purification process that uses a membrane
                        to separate water molecules from other substances.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="rO"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 px-3 py-1 rounded-md border border-indigo-500 "
                          style={{ fontFamily: "Baskerville" }}
                        >
                          Know More
                          <FontAwesomeIcon
                            className="ml-2"
                            icon={faArrowRight}
                          />
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-3 border-r-2 border-gray-200">
                          {/* <!-- Content inside the span --> */}
                        </span>
                        <img
                          src="float.png"
                          alt="Your Image"
                          className=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-full lg:w-full">
                  <div
                    className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-300 hover:border border-transparent hover:border-indigo-500"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="overlay-container">
                      <img
                        className="blog-image lg:h-80 md:h-64 w-full object-cover object-center"
                        src="demi.jpg"
                        alt="blog"
                      />
                      <div className="overlay"></div>
                    </div>
                    <div className="p-6">
                      <h1
                        className="title-font text-xl font-medium text-gray-900 mb-3 text-center"
                        style={{ fontFamily: "Poppins" }}
                      >
                        Demineralized Water
                      </h1>
                      <p className="leading-relaxed mb-3 text-center">
                        DW is commonly used in industrial where the presence of
                        minerals could interfere with processes or cause
                        contamination.
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="dW"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 px-3 py-1 rounded-md border border-indigo-500 "
                          style={{ fontFamily: "Baskerville" }}
                        >
                          Know More
                          <FontAwesomeIcon
                            className="ml-2"
                            icon={faArrowRight}
                          />
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-3 border-r-2 border-gray-200">
                          {/* <!-- Content inside the span --> */}
                        </span>
                        <img
                          src="water.png"
                          alt="Your Image"
                          className=""
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <div className=" text-center relative mb-10">
            <h
              className="max-w-lg lg:text-5xl text-3xl md:text-5xl text-gray-900 dark:text-white lg:ml-48"
              style={{ fontFamily: "'Playfair Display', 'serif'" }}
            >
              Trusted Partners
            </h>
            <div className="absolute hidden md:hidden lg:block h-full bg-blue-800 w-1 top-0 lg:left-1/2 md:left-52 bottom-0 mt-1"></div>
            <p className="max-w-lg text-center lg:text-left text-gray-900 dark:text-white text-sm mt-1 lg:mt-0 lg:float-right lg:mr-20 md:ml-24">
              Natural water, Fresh Water, mineral water they are working with
              us. They work with us because we are giving them fresh, safe, pure
              and healthy water with trust and honesty.
            </p>
          </div>
          <section className="max-w-6xl mx-auto text-gray-600 body-font">
            <div className="container px-5 py-24">
              <div
                // className={`grid lg:grid-cols-${slidesToShow} md:grid-cols-3 sm:grid-cols-1 -mb-10 -mt-4`}
                className={`grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 -mb-10 -mt-4`}

              >
                {partnerImages
                  .slice(
                    currentSlideIndex * slidesToShow,
                    (currentSlideIndex + 1) * slidesToShow
                  )
                  .map((partnerImage, index) => (
                    <div
                      key={index}
                      className="sm:mb-0 mb-6 flex justify-center"
                    >
                      {" "}
                      {/* Added flex and justify-center classes */}
                      <div className="rounded-lg overflow-hidden lg:w-20 lg:h-20 md:w-20 md:h-20 w-36 h-36">
                        <img
                          alt={`Partner ${index}`}
                          className="object-cover rounded-md"
                          src={partnerImage}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default services;
