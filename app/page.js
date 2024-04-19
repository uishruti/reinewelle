"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const testimonials = [
    {
      name: "Suraj Yadav",
      // role: "Senior Product Designer",
      content:
        "Installing the water treatment plant from Reinewelle has been a game-changer for our community. Not only has it improved the quality of our drinking water, but it has also given us peace of mind knowing that our health is safeguarded. Thank you for your outstanding service and dedication to providing clean water solutions.",
      image: "profile.png",
      rating: 5,
    },
    {
      name: "Kajal More",
      // role: "CTO",
      content:
        "As a facility manager, ensuring compliance with water quality standards is paramount. Reinewelle water treatment plant not only met but exceeded our expectations. Their team worked closely with us to tailor a solution that addressed our specific needs, and the results speak for themselves. I highly recommend their services to anyone in need of reliable water treatment solutions.",
      image: "woman.png",
      rating: 4,
    },
    {
      name: "Jay Patil",
      // role: "CTO",
      content:
        " We were facing serious contamination issues in our industrial wastewater, causing environmental concerns and regulatory headaches. Reinewelle came to our rescue with their innovative water treatment technology. Since implementing their system, we've seen a significant reduction in pollutants discharged into the environment. Their expertise and support have been invaluable.",
      image: "profile.png",
      rating: 4,
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {}, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(intervalId);
  }); // Clear interval on component unmount or testimonial index change

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {}, 5000); // Change review every 5 seconds

    return () => clearInterval(intervalId);
  }); // Clear interval on component unmount or when startIndex changes

  function openModal() {
    // Get the modal element
    var modal = document.createElement("div");
    modal.classList.add(
      "fixed",
      "top-0",
      "left-0",
      "w-full",
      "h-full",
      "flex",
      "items-center",
      "justify-center",
      "z-50",
      "bg-black",
      "bg-opacity-50"
    );

    // Create an iframe for the YouTube video
    var youtubeIframe = document.createElement("iframe");
    youtubeIframe.src = "https://www.youtube.com/embed/aSTFFhk3tzM"; // Replace VIDEO_ID with the ID of your YouTube video
    youtubeIframe.allowFullscreen = true;

    // Set different sizes based on screen width
    if (window.innerWidth >= 1024) {
      // Desktop size
      youtubeIframe.width = "800";
      youtubeIframe.height = "450";
    } else if (window.innerWidth >= 768) {
      // Tablet size
      youtubeIframe.width = "700";
      youtubeIframe.height = "337.5";
    } else {
      // Mobile size
      youtubeIframe.width = "300";
      youtubeIframe.height = "168.75";
    }

    // Create a close button with your custom icon
    var closeButton = document.createElement("button");
    closeButton.innerHTML =
      '<img src="close1.png" alt="Close" class="w-10 h-10">'; // Replace "your-close-icon.png" with the path to your close icon
    closeButton.classList.add(
      "absolute",
      "top-0",
      "right-0",
      "m-4",
      "p-2",
      "rounded-full",
      "focus:outline-none"
    );

    // Append iframe and close button to modal
    modal.appendChild(youtubeIframe);
    modal.appendChild(closeButton);

    // Append modal to body
    document.body.appendChild(modal);

    // Close modal when clicked outside video or on close button
    modal.addEventListener("click", function (event) {
      if (event.target === modal || event.target === closeButton) {
        modal.remove();
      }
    });

    // Add event listener to close button
    closeButton.addEventListener("click", function () {
      modal.remove();
    });
  }

  useEffect(() => {
    const animatedSection = document.querySelector(".fadeInAnimation");
    animatedSection.classList.add("fadeInAnimation");
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <>
      <Navbar />

      <Slider
        ref={sliderRef}
        {...settings}
        className="slider-container overflow-hidden"
      >
        <div className="slide-item relative lg:-mt-16 md:-mt-8">
          <img
            src="/slider3.png"
            alt=""
            className="slider-image mt-20 md:mt-14 lg:mt-16 object-cover"
          />
          <div className="absolute lg:top-96 md:top-64 top-48 left-0 p-3 w-full justify-between transform -translate-y-1/2 flex items-center space-x-4">
            <button
              className="hidden md:hidden lg:block text-white bg-gray-900 p-2 rounded-full transition duration-300 hover:bg-gray-800"
              onClick={handlePrevSlide}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              className="hidden md:hidden lg:block text-white right-0 bg-gray-900 p-2 rounded-full transition duration-300 hover:bg-gray-800"
              onClick={handleNextSlide}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="slide-item relative lg:-mt-16 md:-mt-8">
          <img
            src="/slider5.png"
            alt=""
            className="slider-image mt-20 md:mt-12 lg:mt-16 object-cover"
          />
          <div className="absolute lg:top-96 md:top-64 top-48 left-0 p-3 w-full justify-between transform -translate-y-1/2 flex items-center space-x-4">
            <button
              className="hidden md:hidden lg:block text-white bg-gray-900 p-2 rounded-full transition duration-300 hover:bg-gray-800"
              onClick={handlePrevSlide}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              className="hidden md:hidden lg:block text-white right-0 bg-gray-900 p-2 rounded-full transition duration-300 hover:bg-gray-800"
              onClick={handleNextSlide}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </Slider>

      <div className=" max-w-6xl mx-auto lg:mt-10 mt-8 md:mt-6">
        <div className="line-container mb-2 ml-2">
          <h1
            className="title-font font-semibold lg:text-3xl text-xl mb-2 text-gray-700 mt-2"
            style={{ fontFamily: "Baskerville" }}
          >
            About Reinewelle Projects
          </h1>
        </div>
        <div className=" p-6 md:-mt-6 -mt-6 lg:-mt-8">
          <p className="text-gray-700 dark:text-gray-400 text-justify mt-6">
            Reinewelle Projects is a leading provider of water treatment
            solutions for industries across Maharashtra. With a strong presence
            in the market, Reinewelle has earned a reputation for delivering
            high-quality and reliable water treatment systems to its clients. As
            an authorized channel partner of LiqSure Systems Pvt Ltd, Reinewelle
            combines its expertise with the global leaders cutting-edge
            technologies to offer innovative and sustainable solutions.
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-400 text-justify">
            Headquartered in Pune Maharashtra, Reinewelle Projects operates with
            a vision to contribute to the growth and development of industries
            in Maharashtra by providing efficient and cost-effective water
            treatment solutions. The company understands the critical importance
            of water management and offers a comprehensive range of services,
            tailored to meet the unique requirements of different industries.
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-400 text-justify">
            As an authorized channel partner of LiqSure Systems, Reinewelle
            leverages the expertise and resources of one of the leading global
            water treatment companies. This partnership enables them to access
            cutting-edge technologies, industry best practices, and continuous
            innovation, ensuring their clients receive world-class solutions.
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-400 text-justify">
            With a customer-centric approach and a focus on delivering
            sustainable and environmentally friendly solutions, Reinewelle
            Projects continues to be the preferred choice for industries in
            Maharashtra seeking reliable and efficient water treatment
            solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 fadeInAnimation relative">
        <div className="text-center lg:py-28 md:py-16 mx-auto relative">
          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            className="wave absolute bottom-0 left-0 w-full z-10"
          >
            <path
              fill="#D3ECF9" // Adjust background color as needed
              d="M0,224L48,192C96,160,192,96,288,96C384,96,480,160,576,197.3C672,235,768,245,864,218.7C960,192,1056,128,1152,138.7C1248,149,1344,235,1392,277.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <div className="relative z-20">
            <h4
              className="lg:text-6xl md:text-3xl text-2xl text-gray-900 italic absolute bottom-12 left-0 right-0"
              style={{ fontFamily: "'Playfair Display', 'serif'" }}
            >
              A Trusted Industry
            </h4>
          </div>
        </div>

        <section className="relative z-20">
          <div className="px-5">
            <div className="flex flex-wrap text-center lg:gap-2 md:gap-16">
              {/* Your existing content */}
              <div className="p-4 w-full md:w-72 lg:w-72 flex flex-col items-center rounded-xl container">
                <div className="p-1 inline-block px-2">
                  <img
                    src="industry1.png"
                    alt="Image"
                    className="w-14 h-14 mb-2 image"
                  />
                </div>
                <div>
                  <p
                    className="leading-relaxed text-xl font-bold text-black text-color-change"
                    style={{ fontFamily: "Baskerville" }}
                  >
                    Industry Leaders
                  </p>
                  <p className="leading-relaxed text-sm p-2 text-black ">
                    They are innovative, adaptable and adept at providing high
                    quality products and services to their clients.
                  </p>
                </div>
              </div>

              <div className="relative hidden md:flex justify-center mt-24">
                <div className="absolute left-1/2 w-0.5 h-16 bg-gray-300 transform -translate-x-1/2"></div>
              </div>

              <div className="p-4 w-full md:w-72 lg:w-72 flex flex-col items-center rounded-xl container">
                <div className=" p-1 inline-block px-2">
                  <img
                    src="expert1.png"
                    alt="Image"
                    className="w-14 h-14 mb-2 image"
                  />
                </div>
                <div>
                  <p
                    className="leading-relaxed text-xl font-bold text-black text-color-change "
                    style={{ fontFamily: "Baskerville" }}
                  >
                    Expert Solution{" "}
                  </p>
                  <p className="leading-relaxed text-sm p-2 text-black">
                    A global management consulting firm known for its expertise
                    in strategy, operations, and organizational transformation.
                  </p>
                </div>
              </div>

              <div className="relative hidden lg:block justify-center mt-24">
                <div className="absolute left-1/2 w-0.5 h-16 bg-gray-300 transform -translate-x-1/2"></div>
              </div>

              <div className="p-4 w-full md:w-72 lg:w-72 flex flex-col items-center rounded-xl container">
                <div className="p-1 inline-block px-2">
                  <img
                    src="skill1.png"
                    alt="Image"
                    className="w-14 h-14 mb-2 image"
                  />
                </div>
                <div>
                  <p
                    className="leading-relaxed text-xl font-bold text-black text-color-change"
                    style={{ fontFamily: "Baskerville" }}
                  >
                    Skilled Approach{" "}
                  </p>
                  <p className="leading-relaxed text-sm p-2 text-black ">
                    The skills approach works by providing a map for how to
                    reach effective leadership in an organization.
                  </p>
                </div>
              </div>

              <div className="relative hidden md:flex justify-center mt-24">
                <div className="absolute left-1/2 w-0.5 h-16 bg-gray-300 transform -translate-x-1/2"></div>
              </div>

              <div className="p-4 w-full md:w-72 lg:w-72 flex flex-col items-center rounded-xl container">
                <div className="p-1 inline-block px-2">
                  <img
                    src="service1.png"
                    alt="Image"
                    className="w-14 h-14 mb-2 image"
                  />
                </div>
                <div>
                  <p
                    className="leading-relaxed text-xl font-bold text-black text-color-change"
                    style={{ fontFamily: "Baskerville" }}
                  >
                    Services{" "}
                  </p>
                  <p className="leading-relaxed text-sm p-2 text-black">
                    Services are essentially intangible activities which are
                    separately identifiable and provide satisfaction of wants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center mt-10 mx-auto">
        <h4
          className="lg:text-5xl md:text-3xl text-2xl text-gray-900"
          style={{ fontFamily: "'Playfair Display', 'serif'" }}
        >
          Blog
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
        <h3 className="text-base mt-2 text-gray-700 font-normal text-center"></h3>

        <div className="max-w-6xl mx-auto lg:mt-16 mt-20 md:mt-14 relative">
          <img
            alt="ecommerce"
            className="w-full lg:h-full h-full md:h-full object-cover rounded"
            src="blog1.png"
          />
          <div
            className="absolute -top-1 left-0 w-full lg:h-full h-full md:h-full flex items-center justify-center"
            style={{ background: "rgba(0, 0, 0, 0.5)" }}
          >
            <div>
              <button
                id="playButton"
                className="focus:outline-none"
                onClick={openModal}
              >
                <img
                  alt="ecommerce"
                  className="object-cover rounded"
                  src="play1.png"
                  style={{ width: "80px", height: "80px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-orange-700 inline-flex"></div>
      </div>
      {/* <iframe
        className="mx-auto bg-white p-4"
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/aSTFFhk3tzM"
        title="YouTube video player"
        frameBorder="0" // Corrected attribute name
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen // Corrected attribute name
      ></iframe> */}
      <div>
        <div className=" text-center mt-20 mx-auto">
          <h4
            className="lg:text-5xl md:text-3xl text-2xl text-gray-900"
            style={{ fontFamily: "'Playfair Display', 'serif'" }}
          >
            What Our Customers Say
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
        <div className="flex flex-col lg:flex-row justify-between bg-slate-50 max-w-6xl max-h-full mx-auto rounded-2xl mt-16 mb-10">
          <section className="text-gray-600 body-font lg:w-1/2">
            <div className="container px-10 py-8 mx-auto">
              <div className="flex items-center mb-4">
                <img
                  alt="testimonial"
                  className="w-16 h-16 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={testimonials[currentTestimonialIndex].image}
                />
                <div className="ml-4">
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    {testimonials[currentTestimonialIndex].name}
                  </h2>
                  <p className="text-gray-500">
                    {testimonials[currentTestimonialIndex].role}
                  </p>
                </div>
              </div>
              <div className="flex items-center ml-20 -mt-6 mb-4">
                {[...Array(testimonials[currentTestimonialIndex].rating)].map(
                  (_, index) => (
                    <svg
                      key={index}
                      className="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  )
                )}
              </div>
              <div className="xl:w-full lg:w-full w-full mx-auto text-center">
                <p
                  className="leading-relaxed text-justify text-lg"
                  style={{ fontFamily: "Baskerville" }}
                >
                  {" "}
                  {testimonials[currentTestimonialIndex].content}
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              </div>
            </div>
          </section>

          <section className="text-gray-600 body-font lg:w-1/2 lg:h-96 custom-scrollbars overflow-y-auto">
            <div className="container p-6 py-2 ">
              <div className="">
                <div className=" lg:mb-0 mb-6 p-4">
                  <div className="h-full text-center ">
                    <div className="flex items-center mb-4">
                      <img
                        alt="testimonial"
                        className="w-16 h-16 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                        src="profile.png"
                      />
                      <div className="ml-4">
                        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                          Suraj Yadav
                        </h2>
                        {/* <p className="text-gray-500">Senior Product Designer</p> */}
                      </div>
                    </div>
                    <p
                      className="leading-relaxed text-justify text-lg"
                      style={{ fontFamily: "Baskerville" }}
                    >
                      Installing the water treatment plant from Reinewelle has
                      been a game-changer for our community. Not only has it
                      improved the quality of our drinking water, but it has
                      also given us peace of mind knowing that our health is
                      safeguarded. Thank you for your outstanding service and
                      dedication to providing clean water solutions.
                    </p>
                    <span className="inline-block h-1 lg:w-96 w-20 md:w-72 rounded border-b border-gray-600 mt-6 mb-4"></span>
                  </div>
                </div>
                <div className=" lg:mb-0 mb-6 p-4">
                  <div className="h-full text-center ">
                    <div className="flex items-center mb-4">
                      <img
                        alt="testimonial"
                        className="w-16 h-16 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                        src="profile.png"
                      />
                      <div className="ml-4">
                        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                          Jay Patil
                        </h2>
                        {/* <p className="text-gray-500">UI Develeoper</p> */}
                      </div>
                    </div>
                    <p
                      className="leading-relaxed text-justify text-lg"
                      style={{ fontFamily: "Baskerville" }}
                    >
                      We were facing serious contamination issues in our
                      industrial wastewater, causing environmental concerns and
                      regulatory headaches. Reinewelle came to our rescue with
                      their innovative water treatment technology. Since
                      implementing their system, we've seen a significant
                      reduction in pollutants discharged into the environment.
                      Their expertise and support have been invaluable.
                    </p>
                    <span className="inline-block h-1 lg:w-96 w-20 md:w-72 rounded border-b border-gray-600 mt-6 mb-4"></span>
                  </div>
                </div>
                <div className=" lg:mb-0 p-4">
                  <div className="h-full text-center ">
                    <div className="flex items-center mb-4">
                      <img
                        alt="testimonial"
                        className="w-16 h-16 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                        src="woman.png"
                      />
                      <div className="ml-4">
                        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                          Kajal More{" "}
                        </h2>
                        {/* <p className="text-gray-500">CTO</p> */}
                      </div>
                    </div>
                    <p
                      className="leading-relaxed text-justify text-lg"
                      style={{ fontFamily: "Baskerville" }}
                    >
                      As a facility manager, ensuring compliance with water
                      quality standards is paramount. Reinewelle water treatment
                      plant not only met but exceeded our expectations. Their
                      team worked closely with us to tailor a solution that
                      addressed our specific needs, and the results speak for
                      themselves. I highly recommend their services to anyone in
                      need of reliable water treatment solutions.
                    </p>
                    <span className="inline-block h-1 lg:w-96 w-20 md:w-72 rounded border-b border-gray-600 mt-6 mb-4"></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
