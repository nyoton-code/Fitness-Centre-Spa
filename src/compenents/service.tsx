"use client";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import imgService from "../assets/imgs/service.jpg";
import serviceData from "../data/Fr.json";
import Readbutton from "./GlobalButton/ReadButton";
import { motion } from "framer-motion";

const data = serviceData.services.servicesoffer;

export default function Service() {
  return (
    <motion.div
      id="service"
      className="service mb-10 mt-16 max-w-7xl mx-auto px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeInOut" as const }}
    >
      <h3 className="text-main-g text-xl mb-4 text-center">our services</h3>
      <p className="text-5xl sm:text-2xl font-semibold capitalize text-center">
        services offered at our gym
      </p>

      <Tab.Group>
        <div className="lg:flex mt-10 w-full min-h-[500px]">
          {/* Tabs */}
          <Tab.List className="flex lg:flex-col lg:w-[6%] w-full bg-secondary-main text-white overflow-x-auto rounded-md shadow-md">
            {data.map((item) => (
              <Tab
                key={item.id}
                className={({ selected }) =>
                  `flex-1 cursor-pointer text-sm md:text-base font-medium py-4 px-2 text-center
                   transition-all duration-300 ease-in-out
                   ${
                     selected
                       ? "bg-main-g text-white"
                       : "hover:bg-gray-700 dark:hover:bg-gray-600"
                   }
                   lg:[writing-mode:vertical-rl] lg:rotate-180 lg:h-32 lg:justify-center lg:items-center flex`
                }
              >
                {item.id}.{item.name}
              </Tab>
            ))}
          </Tab.List>

          {/* Panels */}
          <Tab.Panels className="lg:w-[94%] w-full min-h-[400px] lg:h-[650px] mt-6 lg:mt-0 relative">
            {data.map((item) => (
              <Tab.Panel
                key={item.id}
                className="flex flex-col lg:flex-row bg-gray-100 dark:bg-gray-800 w-full h-full rounded-md overflow-hidden shadow-md transition-all duration-500"
              >
                {/* Image */}
                <div className="relative w-full lg:w-7/12 h-60 lg:h-auto hidden lg:block">
                  <Image
                    src={imgService}
                    alt="Service background"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="w-full lg:w-5/12 px-6 py-10 text-left flex items-center justify-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-main-g mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {item.paragraphs[0]}
                      <br />
                      <br />
                      {item.paragraphs[1]}
                    </p>
                    <div className="mt-4">
                      <Readbutton hrefLink={"#contact"} />
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </motion.div>
  );
}
