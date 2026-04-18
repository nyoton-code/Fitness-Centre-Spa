"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import data from "../data/Fr.json";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Contact form data:", formData);
  };
  return (
    <div
      className="bg-secondary-main flex text-white justify-center py-14 flex-wrap"
      id="contact"
    >
      <div className="contact w-1/3 max-lg:w-2/5 max-sm:w-4/5">
        <span className="text-main-g text-xl capitalize font-semibold mb-3 block">
          Contact info
        </span>
        <p className="text-xs leading-5 text-[#e5e5e5b0] mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, magnam
          optio, eveniet error reiciendis nihil deleniti, veritatis modi tempore
          quas perspiciatis possimus nostruo.
        </p>
        <div className="flex items-center mb-6">
          <FontAwesomeIcon
            icon={faLocation}
            className="bg-main-g text-black p-2 text-xl"
          />
          <div className="ml-2">
            <span className="font-semibold text-sm">Office adress</span>
            <p className="text-gray-300 text-xs">
              {data.contractInfo.info[0].info}
            </p>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <FontAwesomeIcon
            icon={faPhone}
            className="bg-main-g text-black p-2 text-xl"
          />
          <div className="ml-2">
            <span className="font-semibold text-sm">phone number</span>
            <p className="text-gray-300 text-xs">
              {data.contractInfo.info[1].info}
            </p>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <FontAwesomeIcon
            icon={faMessage}
            className="bg-main-g text-black p-2 text-xl"
          />
          <div className="ml-2">
            <span className="font-semibold text-sm">Email adress</span>
            <p className="text-gray-300 text-xs">
              {" "}
              {data.contractInfo.info[2].info}
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/3 ml-5 max-lg:w-2/5 max-sm:w-4/5 max-sm:ml-0 max-sm:mt-5">
        <span className="text-main-g text-xl capitalize font-semibold mb-3 block">
          Get In Touch
        </span>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              name="name"
              placeholder="your name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="p-1.5 pl-3 w-10/12 bg-rgb text-white"
            />
          </div>
          <div className="mb-2">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="p-1.5 pl-3  w-10/12 bg-rgb text-white"
            />
          </div>
          <div className="mb-2">
            <input
              type="tel"
              name="phone"
              placeholder="your phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="p-1.5 pl-3 w-10/12 bg-rgb text-white"
            />
          </div>
          <div className="mb-2">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="p-1.5 pl-3 h-24  w-10/12  bg-rgb text-white focus:outline-none "
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className=" w-10/12 bg-main-g p-1.5 text-black text-sm"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
