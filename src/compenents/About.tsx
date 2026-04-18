"use client";

import Image from "next/image";
import aboutImg from "../../public/imgs/g6.jpg";
import aboutImg2 from "../../public/imgs/g4.jpg";
import Readbutton from "./GlobalButton/ReadButton";
import AboutData from "../data/Fr.json";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" as const },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" as const },
    },
  };

  return (
    <div className="container py-24" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeIn}
        transition={{ staggerChildren: 0.2 }}
        className="flex justify-center lg:flex-row flex-col-reverse items-center"
        id="about"
      >
        {/* Left Image */}
        <motion.div
          variants={fadeInUp}
          className="w-11/12 md:w-9/12 lg:w-5/12 max-h-full mt-5 lg:mt-0 
          border border-t-transparent border-r-transparent border-l-[10px] border-b-[10px] border-l-main-g border-b-main-g"
        >
          <Image
            className="md:h-[550px] w-full object-cover"
            src={aboutImg}
            alt="About image"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={fadeInUp}
          className="text w-full lg:w-7/12 md:ml-8 text-center lg:text-left"
        >
          <h3 className="text-main-g mb-5 uppercase text-[15px] font-medium max-lg:mt-8 max-lg:mb-4">
            about us
          </h3>
          <p className="md:text-4xl xl:text-5xl capitalize text-2xl font-semibold leading-relaxed">
            {AboutData.about.subtitle}
          </p>
          <p className="text-xl text-gray-500 dark:text-gray-400 my-5">
            {AboutData.about.paragraphs}
          </p>

          {/* Features and Secondary Image */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-between mt-8 px-6"
          >
            {/* List */}
            <div className="list max-lg:mx-auto max-lg:text-left pr-2">
              <ul
                role="list"
                className="text-gray-600 dark:text-gray-400 text-sm capitalize list-disc marker:text-black dark:marker:text-gray-300 ml-6"
              >
                {AboutData.about.list.map((item, index) => (
                  <li className="mb-4 text-lg" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
              <Readbutton hrefLink={"#contact"} />
            </div>

            {/* Secondary Image (desktop only) */}
            <motion.div
              variants={fadeInUp}
              className="border border-transparent border-b-main-g border-b-8 h-[255px] w-[450px] md:block hidden"
            >
              <Image
                className="h-full w-full object-cover"
                src={aboutImg2}
                alt="Secondary about image"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
