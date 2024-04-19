"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  const industryCountRef = useRef(null);
  const expertCountRef = useRef(null);
  const skillCountRef = useRef(null);
  const serviceCountRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when at least 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting(entry.target); // Pass the target element to startCounting
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (industryCountRef.current) {
      observer.observe(industryCountRef.current);
    }
    if (expertCountRef.current) {
      observer.observe(expertCountRef.current);
    }
    if (skillCountRef.current) {
      observer.observe(skillCountRef.current);
    }
    if (serviceCountRef.current) {
      observer.observe(serviceCountRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const startCounting = (target) => {
    const startCountingAnimation = (element, endValue) => {
      let start = 0;
      const step = () => {
        const increment = Math.ceil(endValue / 100); // Increment by 1% of endValue
        if (start < endValue) {
          start += increment;
          element.innerText = start;
          setTimeout(step, 10); // Adjust the timeout for smoother animation
        } else {
          element.innerText = endValue;
        }
      };
      step();
    };

    const industryCount = target.querySelector("#industryCount");
    const expertCount = target.querySelector("#expertCount");
    const skillCount = target.querySelector("#skillCount");
    const serviceCount = target.querySelector("#serviceCount");

    if (industryCount) {
      startCountingAnimation(industryCount, 2700);
    }
    if (expertCount) {
      startCountingAnimation(expertCount, 1300);
    }
    if (skillCount) {
      startCountingAnimation(skillCount, 74);
    }
    if (serviceCount) {
      startCountingAnimation(serviceCount, 46);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="w-full mx-auto lg:mt-16 mt-20 md:mt-14 relative">
            <img
              alt="ecommerce"
              className="w-full lg:h-60 h-32 md:h-48 object-cover rounded"
              src="vector.png"
            />
            <div
              className="absolute -top-1 left-0 w-full lg:h-64 h-36 md:h-52 flex items-center justify-center"
              style={{ background: "rgba(0, 0, 0, 0.5)" }}
            >
              <p
                className="lg:text-5xl text-3xl md:text-4xl font-bold italic text-white"
                style={{ fontFamily: "Baskerville" }}
              >
                About Us{" "}
              </p>
            </div>
          </div>
        </section>

        <div className="container px-1 py-16 mx-auto bg-blue-50">
          <div className=" text-center mt-10 mx-auto">
            <h4
              className="lg:text-5xl md:text-3xl text-2xl text-gray-900"
              style={{ fontFamily: "'Playfair Display', 'serif'" }}
            >
              Cooling Water Tower
            </h4>
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
            <h3 className=" text-base mt-2 text-gray-700 font-normal text-center">
              {/* <p>We take great pride in everything that we do,</p> 
                        complete control over products allows us to ensure customers receive best service. */}
            </h3>
          </div>
          <div className=" max-w-6xl mx-auto flex flex-wrap mt-4">
            <img
              alt="ecommerce"
              className="lg:w-2/4 lg:h-96 w-full h-64 lg:mt-6 object-cover object-center rounded shadow-lg"
              src="cooling1.jpg"
            />
            <div className="lg:w-2/4 w-full lg:pl-10 lg:py-6 mt-6 lg:-mt-6">
              <p className="text-gray-700 dark:text-gray-400 text-justify mt-6">
                A cooling water tower is a type of heat exchange system used to
                remove excess heat from industrial processes, power plants, or
                air conditioning systems. It is an essential component of many
                large-scale facilities that generate heat and need to dissipate
                it efficiently.
              </p>
              <p className="text-gray-700 dark:text-gray-400 text-justify mt-6">
                The primary purpose of a cooling water tower is to cool down
                water that has been heated during the industrial process or in
                power generation. It works on the principle of evaporative
                cooling, which involves transferring heat from the hot water to
                the atmosphere through the process of evaporation.
              </p>
              <p className="text-gray-700 dark:text-gray-400 text-justify mt-6">
                A cooling water tower plays a vital role in industrial and
                commercial settings by dissipating excess heat through the
                evaporative cooling process. By facilitating heat transfer from
                hot water to the atmosphere, it helps maintain safe operating
                temperatures for various applications.
              </p>
            </div>
          </div>
        </div>

        <div className=" text-center mt-4 mx-auto py-16">
          <h4
            className="lg:text-5xl md:text-3xl text-2xl text-gray-900 font-bold"
            style={{ fontFamily: "'Playfair Display', 'serif'" }}
          >
            Why Should You Work With Us?
          </h4>
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
          <h3 className=" text-base mt-2 text-gray-700 font-normal text-center">
            {/* <p>We take great pride in everything that we do,</p> 
                        complete control over products allows us to ensure customers receive best service. */}
          </h3>
        </div>

        <div className="max-w-8xl mx-auto -mt-10 mb-10 relative overflow-hidden">
          <div className="water-animation"></div>
          <section className="text-gray-600 body-font relative z-10">
            <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 md:w-1/3 lg:w-1/4 sm:w-1/2 w-full">
                  <div
                    ref={industryCountRef}
                    className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col items-center"
                  >
                    <img
                      src="industry2.png"
                      alt="Image"
                      className="w-14 h-14 mb-2"
                    />
                    <h2
                      id="industryCount"
                      className="title-font font-medium text-3xl text-gray-900"
                    >
                      0
                    </h2>
                    <p className="leading-relaxed">Industry Leaders</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 lg:w-1/4 sm:w-1/2 w-full">
                  <div
                    ref={expertCountRef}
                    className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col items-center"
                  >
                    <img
                      src="expert2.png"
                      alt="Image"
                      className="w-14 h-14 mb-2"
                    />
                    <h2
                      id="expertCount"
                      className="title-font font-medium text-3xl text-gray-900"
                    >
                      1.3K
                    </h2>
                    <p className="leading-relaxed">Expert Solutions</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 lg:w-1/4 sm:w-1/2 w-full">
                  <div
                    ref={skillCountRef}
                    className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col items-center"
                  >
                    <img
                      src="skill2.png"
                      alt="Image"
                      className="w-14 h-14 mb-2"
                    />
                    <h2
                      id="skillCount"
                      className="title-font font-medium text-3xl text-gray-900"
                    >
                      74
                    </h2>
                    <p className="leading-relaxed"> Skilled Approach</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 lg:w-1/4 sm:w-1/2 w-full">
                  <div
                    ref={serviceCountRef}
                    className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col items-center"
                  >
                    <img
                      src="service2.png"
                      alt="Image"
                      className="w-14 h-14 mb-2"
                    />
                    <h2
                      id="serviceCount"
                      className="title-font font-medium text-3xl text-gray-900"
                    >
                      46
                    </h2>
                    <p className="leading-relaxed">Services</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className=" bg-slate-100  p-1 min-h-screen">
          <div className=" text-center w-full flex justify-center mt-6">
            <h4
              className="lg:text-5xl md:text-3xl text-3xl text-gray-900 font-bold  pt-6 lg:w-1/2 md:w-1/2 w-60 "
              style={{ fontFamily: "Baskerville"}}
            >
              Reinewelle Basic Water Composition
            </h4>
          </div>

          <div className="flex items-center justify-center w-full bg-slate-100
           lg:-mt-20 mt-16 md:mt-16 md:flex-col flex-col lg:flex-row p-1">
            <div className=" flex flex-col">
              <div className="lg:flex-row  flex flex-row md:flex-row justify-between max-w-2xl mx-auto">

                <div className=" lg:mt-28 md:mt-10 mt-0">
                  <h2
                    className=" text-2xl font-semibold text-right"
                    style={{ fontFamily: "'Playfair Display', 'serif'" }}
                  >
                    Potassium
                  </h2>

                  <p
                    className=" text-xl font-semibold text-right"
                    style={{ fontFamily: "'Playfair Display', 'serif'" }}
                  >
                    2.5 mg/L
                  </p>
                  <p className=" text-right lg:w-72 md:w-72 w-52 mt-4 text-gray-500 ">
                    To purify water 2.5mg potassium is needed for every litter.
                  </p>
                </div>

                <div className="flex lg:mt-28 md:mt-10 mt-0">
                  <div className=" flex">
                    <span
                      className=" text-3xl ml-5"
                      style={{ color: "#13bcea" }}
                    >
                      K+
                    </span>
                    <img
                      src="drop1.png"
                      alt="Image Description"
                      className="h-16 lg:h-20 md:h-20 "
                    />
                  </div>
                  <img
                    src="zag.png"
                    alt="Image Description"
                    className=" lg:w-24 md:w-24 w-0 h-10 lg:-mr-4 md:mr-0 mr-0"
                  />
                </div>
              </div>

              <div className="lg:flex-row  flex flex-row md:flex-row  lg:mt-0 md:-mt-32 ">
                <div className="lg:mt-48 md:mt-48 mt-5">
                  <h2
                    className=" text-2xl font-semibold text-right"
                    style={{ fontFamily: "'Playfair Display', 'serif'" }}
                  >
                    Fluroide{" "}
                  </h2>
                  <p
                    className=" text-xl font-semibold text-right"
                    style={{ fontFamily: "'Playfair Display', 'serif'" }}
                  >
                    0.5 mg/L
                  </p>
                  <p className=" text-right lg:w-72 md:w-72 w-52 mt-4 text-gray-500 ">
                    0.5mg fluoride is needed to purify 1 litter of water.{" "}
                  </p>
                </div>

                <div className="flex lg:mt-48 md:mt-48 mt-0">
                  <div className=" flex">
                    <span
                      className=" text-3xl ml-5"
                      style={{ color: "#13bcea" }}
                    >
                      Fl
                    </span>
                    <img
                      src="drop1.png"
                      alt="Image Description"
                      className="h-16 lg:h-20 md:h-20 lg:ml-2 md:ml-4 ml-4"
                    />
                  </div>
                  <img
                    src="zag.png"
                    alt="Image Description"
                    className=" lg:w-24 md:w-24 w-0 h-10 lg:-mr-4 md:mr-0 mr-0"
                  />
                </div>
              </div>
            </div>

            <div className=" flex justify-center ml-8">
              <img
                alt="ecommerce"
                className="object-fit lg:mt-60 md:mt-24 mt-10 lg:mb-48 md:mb-0 mb-10 w-32 h-52 lg:w-72 lg:h-96 md:w-52 md:h-72 "
                src="glass.png"
              />
            </div>

            <div className=" flex flex-col">
              <div className="flex justify-between max-w-xl mx-auto lg:mt-28 md:mt-28 mt-10">
                <div className="flex">
                <img
                    src="zag.png"
                    alt="Image Description"
                    className=" lg:w-24 md:w-24 w-0 h-10"
                  />
                  <div className=" flex">
                    <img
                      src="drop1.png"
                      alt="Image Description"
                      className="h-16 lg:h-20 md:h-20 "
                    />
                    <span
                      className=" text-3xl mr-8"
                      style={{ color: "#13bcea" }}
                    >
                      Cl
                    </span>
                  </div>
                </div>
                <div className="">
                  <h2
                    className=" text-2xl font-semibold text-left"
                    style={{ fontFamily: "'Playfair Display', 'serif'" }}
                  >
                    Chloride
                  </h2>
                  <p
                    className=" text-xl font-semibold text-left"
                    style={{ fontFamily: "'Playfair Display', 'serif'" }}
                  >
                    350a mg/L
                  </p>
                  <p className=" text-left lg:w-72 md:w-72 w-52 mt-4 text-gray-500 ">
                    To purify your water give 35oa mg chlorine for every liter
                    of water...
                  </p>
                </div>
              </div>

              <div className="flex lg:mt-48 md:mt-14 mt-10 lg:pb-0 md:pb-10 pb-10">
                <div className="flex">
                <img
                    src="zag.png"
                    alt="Image Description"
                    className=" lg:w-24 md:w-24 w-0 h-10"
                  />
                  <div className=" flex">
                    <img
                      src="drop1.png"
                      alt="Image Description"
                      className="h-16 lg:h-20 md:h-20 "
                    />
                    <span
                      className=" text-3xl mr-6"
                      style={{ color: "#13bcea" }}
                    >
                      Mg
                    </span>
                  </div>
                </div>
                <div className=" lg:ml-6">
                  <h2
                    className=" text-2xl font-semibold text-left"
                    style={{ fontFamily: "'Playfair Display', 'serif'" }}
                  >
                    Magnesium{" "}
                  </h2>
                  <p
                    className=" text-xl font-semibold text-left"
                    style={{ fontFamily: "'Playfair Display', 'serif'" }}
                  >
                    14.5 mg/L
                  </p>
                  <p className=" text-left lg:w-72 md:w-72 w-52 mt-4 text-gray-500 ">
                    14.5mg of magnesium will be required to purify every litter
                    of water…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-center mt-24 mb-16 mx-auto bg-peach rounded-full shadow-inner"
          style={{ width: "100%", height: "auto" }}
        >
          <div className="p-10">
            <h4
              className="lg:text-5xl md:text-3xl text-xl text-gray-900 font-bold"
              style={{ fontFamily: "'Playfair Display', 'serif'" }}
            >
              Mission, Vision, Values
            </h4>
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
            <h3 className=" text-base mt-2 text-gray-700 font-normal text-center">
              {/* <p>We take great pride in everything that we do,</p> 
                        complete control over products allows us to ensure customers receive best service. */}
            </h3>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-4 mx-auto">
                <div className=" grid lg:grid-cols-3 md:grid-cols-3 mb-4">
                  <div className=" lg:w-full md:w-56 p-4">
                    <div
                      className="border border-gray-300 p-6 rounded-lg"
                      style={{ backgroundColor: "whitesmoke" }}
                    >
                      <div className=" flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  mb-4 bg-blue-100">
                          <img
                            src="vision.png"
                            alt="Your Image"
                            style={{ width: "30px", height: "30px" }}
                          />
                        </div>
                        <h2
                          className="lg:text-xl text-gray-900 title-font lg:mt-3 md:mt-3 mt-3 ml-4 font-semibold"
                          style={{ fontFamily: "Baskerville" }}
                        >
                          Vision
                        </h2>
                      </div>
                      <p
                        className="leading-relaxed text-base"
                        style={{ fontFamily: "Baskerville" }}
                      >
                        Ensuring access to potable water for all, contributing
                        to public health and environmental well-being.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-full md:w-56  p-4">
                    <div
                      className="border border-gray-300 p-6 rounded-lg"
                      style={{ backgroundColor: "whitesmoke" }}
                    >
                      <div className=" flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  mb-4 bg-blue-100">
                          <img
                            src="mission.png"
                            alt="Your Image"
                            style={{ width: "30px", height: "30px" }}
                          />
                        </div>
                        <h2
                          className="lg:text-xl text-gray-900 font-semibold title-font lg:mt-3 md:mt-3 mt-3 ml-4"
                          style={{ fontFamily: "Baskerville" }}
                        >
                          Mission
                        </h2>
                      </div>
                      <p
                        className="leading-relaxed text-base"
                        style={{ fontFamily: "Baskerville" }}
                      >
                        To continuously improve processes and technologies to
                        enhance the quality and efficiency of water treatment.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-full md:w-56  p-4">
                    <div
                      className="border border-gray-300 p-6 rounded-lg"
                      style={{ backgroundColor: "whitesmoke" }}
                    >
                      <div className=" flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  mb-4 bg-blue-100">
                          <img
                            src="values.png"
                            alt="Your Image"
                            style={{ width: "30px", height: "30px" }}
                          />
                        </div>
                        <h2
                          className="lg:text-xl text-gray-900 font-semibold title-font lg:mt-3 md:mt-3 mt-3 ml-4"
                          style={{ fontFamily: "Baskerville" }}
                        >
                          Values
                        </h2>
                      </div>
                      <p
                        className="leading-relaxed text-base"
                        style={{ fontFamily: "Baskerville" }}
                      >
                        Prioritizing the safety of employees, customers, and the
                        environment in all aspects of operations to keep wolrd
                        healthy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
