"use client";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef(null); // Ref to reference the form element

  const sendEnquiry = (e) => {
    e.preventDefault();

    const serviceId = "service_9t2nbeh";
    const templateId = "template_lk3byvd";
    const userId = "pLaWeES_hw0dVjMaF"; // Your EmailJS User ID

    // Prepare template parameters including the name field value
    const templateParams = {
      from_name: name, // Add sender's name
      from_email: email,
      message: message,
      subject: subject,
      phone: phone,
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (result) => {
        console.log(result.text);
        alert("Enquiry sent successfully!");
        // Reset form fields upon successful submission
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
        setPhone("");
      },
      (error) => {
        console.error("Error sending enquiry:", error);
        alert(
          "An error occurred while sending the enquiry. Please try again later."
        );
      }
    );
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Navbar />
      <div className=" max-w-8xl mx-auto rounded-md mt-16">
        <div className="w-full mx-auto lg:mt-16 mt-20 md:mt-14 relative">
          <img
            alt="ecommerce"
            className="w-full lg:h-60 h-28 md:h-40 object-cover rounded"
            src="cont1.jpg"
          />
          <div
            className="absolute -top-1 left-0 w-full lg:h-60 h-32 md:h-44 flex items-center justify-center"
            style={{ background: "rgba(0, 0, 0, 0.5)" }}
          >
            <p
              className="lg:text-6xl text-3xl md:text-4xl font-bold italic text-white"
              style={{ fontFamily: "Baskerville" }}
            >
              Contact Us{" "}
            </p>
          </div>
        </div>

        <div className=" max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="lg:mt-10 lg:ml-10">
            <div className="line-container lg:-mt-6 mt-6 md:mt-6 ml-4">
              <h1 className="title-font font-medium lg:text-3xl text-xl mb-2 text-gray-500 mt-2">
                Reach out to us
              </h1>
            </div>
            <div className="outline-none focus:outline-none px-3 py-1 rounded-md items-center text-white lg:mt-10 md:mt-10 mt-10">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-20 h-12 rounded-full bg-slate-50">
                  <img
                    alt="ecommerce"
                    className="w-6 h-8 object-cover"
                    src="map.png"
                  />
                </div>
                <div
                  className="text-gray-800 pr-1 font-medium cursor-pointer text-sm md:text-base lg:text-base mt-2 pl-7"
                  style={{ fontFamily: "Baskerville" }}
                >
                  <a
                    href="https://www.google.com/maps?q=S.NO.%2010/9/3K,%20NR.ASWAD%20HOTEL,HAVELI,%20NANDED%20N.V.%20HAVELI%20NANDED%20PUNE-411041%20MAHARASHTRA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    S.NO. 10/9/3K, NR.ASWAD HOTEL,HAVELI, NANDED N.V. HAVELI
                    NANDED PUNE-411041 MAHARASHTRA
                  </a>
                </div>
              </div>
            </div>

            <div className="outline-none focus:outline-none px-3 py-1 rounded-md items-center text-white mt-2">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-50">
                  <img
                    alt="ecommerce"
                    className="w-6 h-6 object-cover"
                    src="mail2.png"
                  />
                </div>
                <div className="text-gray-800 pr-1 font-medium cursor-pointer text-sm md:text-base lg:text-base mt-2 pl-7">
                  <p>
                    <a
                      href="mailto:reinewelleprojects@gmail.com"
                      style={{ fontFamily: "Baskerville" }}
                    >
                      reinewelleprojects@gmail.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:info@reinewelleprojects.com"
                      style={{ fontFamily: "Baskerville" }}
                    >
                      info@reinewelleprojects.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="outline-none focus:outline-none px-3 py-1  items-center text-white mt-2">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-50">
                  <img
                    alt="ecommerce"
                    className="w-6 h-6 object-cover"
                    src="phone.png"
                  />
                </div>

                {/* <div className="text-black font-semibold pl-4">Call Us</div> */}
                <div className="text-gray-800 pr-1 font-medium cursor-pointer text-sm md:text-base lg:text-base mt-2 pl-7">
                  <a
                    href="tel:+919561968494"
                    style={{ fontFamily: "Baskerville" }}
                  >
                    9561968494
                  </a>
                </div>
              </div>
            </div>

            <div className="outline-none focus:outline-none px-3 py-1 rounded-md items-center text-white mt-2">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-50">
                  <img
                    alt="ecommerce"
                    className="w-6 h-6 object-cover"
                    src="time.png"
                  />
                </div>
                {/* <div className="text-black font-semibold pl-4">Our Timing</div> */}
                <div
                  className="text-gray-800 pr-1 font-medium text-sm md:text-base lg:text-base pl-7"
                  style={{ fontFamily: "Baskerville" }}
                >
                  Mon - Sun : 11:00 AM - 07:00 PM / 12:00 AM - 12:00 AM
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-full md:w-5/6  px-4 p-4  flex flex-col mx-auto w-full lg:mt-6 md:mt-10 mt-10 lg:mr-10 md:mr-9 mb-10">
            <div className="line-container lg:-mt-6 mt-6 md:-mt-8 ml-4">
              <h1 className="title-font font-medium lg:text-3xl text-xl mb-2 text-gray-500 mt-2">
                Contact Information{" "}
              </h1>
            </div>
            <form ref={formRef} onSubmit={sendEnquiry}>
              {" "}
              {/* Add ref attribute to the form */}
              <div className=" grid lg:grid-cols-2 md:grid-cols-2">
                <div className="relative mb-4 mt-10">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) =>
                      setName(capitalizeFirstLetter(e.target.value))
                    }
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="relative mb-4 lg:ml-4 lg:mt-10 md:mt-10 md:ml-4 ml-0">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="relative mb-4 ">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Subject
                  </label>
                  <input
                    type="subject"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Subject"
                  />
                </div>
                <div className="relative mb-4 lg:ml-4 md:ml-4 ml-0">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Number"
                  />
                </div>
              </div>
              <div className="relative mb-4">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) =>
                    setMessage(capitalizeFirstLetter(e.target.value))
                  }
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg w-96 mt-2"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        <div>
          {/* <div className="line-container lg:-mt-6 mt-6 md:mt-6 ml-4">
            <h1 className="title-font font-medium lg:text-3xl text-xl mb-2 text-gray-500 mt-2">
              Reach out to us
            </h1>
          </div> */}
          <div>
            <section className="text-gray-600 body-font relative mt-6 mb-10">
              <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
                <div className=" max-w-6xl lg:w-full md:w-full sm:w-1/2 bg-gray-300 rounded-lg overflow-hidden lg:p-60 md:p-44 p-40 flex items-end justify-start relative mx-auto">
                  <iframe
                    width="100%"
                    height="100%"
                    className="absolute inset-0"
                    frameBorder="0"
                    title="map"
                    marginHeight="0"
                    marginWidth="0"
                    scrolling="no"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60551.95923898965!2d73.72035143525838!3d18.461113137981616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29598ebf615a3%3A0x63c4129af9a373da!2sNanded%2C%20Pune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1710496223168!5m2!1sen!2sus"
                  ></iframe>
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

export default Contact;
