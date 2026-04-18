"use client";

import { useEffect, useState } from "react";
import homeContent from "../data/Fr.json";
import { motion } from "framer-motion";

const stats = homeContent.stats;

function useCounter(to, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(to);
    if (isNaN(end)) return;

    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [to, duration]);

  return count;
}

export default function Stats() {
  const [isViewed, setIsViewed] = useState(false);

  return (
    <motion.div
      className="relative grid w-4/5 sm:w-3/5 mx-auto -mt-10 z-10 stats bg-main-g grid-cols-2 lg:grid-cols-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setIsViewed(true)}
    >
      {stats.map((stat, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const num = useCounter(isViewed ? stat.number : 0);
        return (
          <div
            key={index}
            className={`relative p-4 text-center top-2 ${
              index !== stats.length - 1
                ? "before:h-1/2 before:w-0.25 before:absolute before:z-30 before:right-0 before:bg-gray-900 max-lg:before:hidden"
                : ""
            }`}
          >
            <span className="text-3xl font-bold after:content-['+'] after:text-white">
              {isViewed ? num : ""}
            </span>
            <p className="text-sm capitalize my-1 mb-3 -tracking-normal">
              {stat.label}
            </p>
          </div>
        );
      })}
    </motion.div>
  );
}
