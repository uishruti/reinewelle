import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const product = () => {
  return (
    <>
      <Navbar />
      <div className=" max-w-8xl mx-auto rounded-md">
        <div className="w-full mx-auto lg:mt-16 mt-20 md:mt-14 relative">
          <img
            alt="ecommerce"
            className="w-full lg:h-58 h-28 md:h-40 object-cover rounded"
            src="prod.png"
          />
          <div
            className="absolute -top-1 left-0 w-full lg:h-58 h-32 md:h-44 flex items-center justify-center"
            style={{ background: "rgba(0, 0, 0, 0.5)" }}
          >
            <p
              className="lg:text-6xl text-3xl md:text-4xl font-bold italic text-white"
              style={{ fontFamily: "Baskerville" }}
            >
              Product Categories{" "}
            </p>
          </div>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-16 mx-auto">
            {" "}
            {/* Added mx-auto here */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto lg:gap-4 md:gap-7 gap-6">
              <div className="lg:w-full md:w-full p-4 w-full bg-white rounded-md shadow-lg">
                <div className="image-container">
                  <a className="block relative h-64 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="ETP.jpg"
                    />
                  </a>
                  <div className="overlay">DESALINATION</div>
                </div>
              </div>
              <div className="lg:w-full md:w-full p-4 w-full bg-white rounded-md shadow-lg">
                <div className="image-container">
                  <a className="block relative h-64 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="water.jpg"
                    />
                  </a>
                  <div className="overlay text-lg font-semibold">
                    {" "}
                    EFFLUENT & SEWAGE TREATMENT 
                  </div>
                </div>
              </div>
              <div className="lg:w-full md:w-full p-4 w-full bg-white rounded-md shadow-lg md:mt-4 lg:mt-0">
                <div className="image-container">
                  <a className="block relative h-64 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="zero.jpg"
                    />
                  </a>
                  <div className="overlay text-lg font-semibold">
                    {" "}
                    ZERO LIQUID DISCHARGE/RECYCLE/REUSE{" "}
                  </div>
                </div>
              </div>
              {/* <div className="lg:w-full md:w-full p-4 w-full bg-white rounded-md shadow-lg md:mt-4 lg:mt-0">
                <div className="image-container">
                  <a className="block relative h-64 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="zero.jpg"
                    />
                  </a>
                  <div className="overlay text-lg font-semibold">
                    {" "}
                    ZERO LIQUID DISCHARGE/RECYCLE/REUSE{" "}
                  </div>
                </div>
              </div>
              <div className="lg:w-full md:w-full p-4 w-full bg-white rounded-md shadow-lg">
                <div className="image-container">
                  <a className="block relative h-64 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="water.jpg"
                    />
                  </a>
                  <div className="overlay text-lg font-semibold">
                    {" "}
                    EFFLUENT & SEWAGE TREATMENT
                  </div>
                </div>
              </div>
              <div className="lg:w-full md:w-full p-4 w-full bg-white rounded-md shadow-lg">
                <div className="image-container">
                  <a className="block relative h-64 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="ETP.jpg"
                    />
                  </a>
                  <div className="overlay">DESALINATION</div>
                </div>
              </div> */}

              {/* <div className="lg:w-full md:w-full p-4 w-full bg-white rounded-md shadow-lg md:mt-4 lg:mt-0">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="zero.jpg"
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font lg:text-lg font-medium">
                    ZERO LIQUID DISCHARGE/RECYCLE/REUSE{" "}
                  </h2>
                </div>
              </div> */}
              {/* <div className="lg:w-full md:w-full p-4 w-full bg-white rounded-md shadow-lg">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="water.jpg"
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font lg:text-lg font-medium">
                    EFFLUENT & SEWAGE TREATMENT
                  </h2>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default product;
