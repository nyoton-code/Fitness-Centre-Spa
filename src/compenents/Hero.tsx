"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import imghero from "../../public/imgs/g5.jpg";
import "../utils/i18n";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useTranslation();

  const parentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeInOut" as const,
      },
    },
  };

  const childrenVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" as const },
    },
  };

  return (
    <div className="landing-page relative" id="home">
      <div className="h-[calc(100vh-60px)] relative ">
        <Image
          src={imghero}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/70 z-[1]" />

        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        >
          <div className="w-[350px]  sm:min-w-[550px] lg:w-[800px]  flex flex-col items-center px-4">
            {/* into */}
            <motion.p
              variants={childrenVariants}
              className="text-white text-center capitalize tracking-[9px] md:tracking-widest max-sm:text-base max-sm:mb-5"
            >
              {t("hero.into.0")}{" "}
              <span className="text-main-g">{t("hero.into.1")}</span>{" "}
              {t("hero.into.2")}
            </motion.p>

            {/* title */}
            <motion.h1
              variants={childrenVariants}
              className="my-3 text-4xl sm:text-5xl uppercase font-bold text-center text-white"
            >
              {t("hero.title.0")}{" "}
              <span className="text-transparent stroke-green-500 font-bold outline-text">
                {t("hero.title.1")}
              </span>
            </motion.h1>

            {/* description */}
            <motion.p
              variants={childrenVariants}
              className="text-txt-c text-xs text-center max-sm:hidden"
            >
              {t("hero.description")}
            </motion.p>

            {/* buttons */}
            <motion.div
              variants={childrenVariants}
              className="text-center mt-7 flex justify-center gap-4"
            >
              <motion.a
                href="#prices"
                variants={childrenVariants}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className="mr-2 text-sm font-bold bg-main-g text-txt-c dark:text-black  p-3 cursor-pointer rounded transition"
              >
                {t("hero.buttons.0.name")}{" "}
                <FontAwesomeIcon icon={faSquareArrowUpRight} />
              </motion.a>
              <motion.a
                href="#about"
                className="text-sm font-bold  px-5 py-3 border text-txt-c cursor-pointer rounded transition"
                variants={childrenVariants}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
              >
                {t("hero.buttons.1.name")}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
