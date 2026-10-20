"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import teamData from "../data/Fr.json"; // adjust path
import { motion } from "framer-motion";

function Coaches() {
  const { title, subtitle, coaches } = teamData.Team;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      id="coaches"
      className="px-4 sm:px-8 md:px-14 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900 text-center transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="mb-12">
        <p className="text-main-g uppercase tracking-wider">{title}</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white">
          {subtitle}
        </h2>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        spaceBetween={20}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        // navigation
        // // pagination={{
        //   dynamicBullets: true,
        // }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        // className="px-2 sm:px-6 md:px-10"
      >
        {coaches.map((coach) => (
          <SwiperSlide key={coach.id}>
            <div className="relative  overflow-hidden shadow-lg group  ">
              {/* Image */}
              <Image
                src={`/imgs/coach${coach.id}.jpg`}
                alt={coach.name}
                width={500}
                height={700}
                className="w-full h-[26rem] sm:h-[28rem] lg:h-[30rem] object-cover "
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0   transition duration-500 group-hover:bg-opacity-40 before:bg-main-g before:w-full before:h-2 before:absolute before:bottom-0 before:left-0 "></div>

              {/* Bottom Card */}
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="w-11/12 bg-main-g bg-opacity-90 text-white text-center py-6 transform translate-y-full transition-all duration-500 group-hover:-translate-y-4">
                  <FontAwesomeIcon
                    icon={faDumbbell}
                    className="text-3xl bg-white text-black p-5 mb-3 rounded-full"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {coach.name}
                  </h3>
                  <p className="text-sm mb-4">{coach.role}</p>

                  {/* Social Media */}
                  <div className="flex gap-4 justify-center">
                    <a href={coach["social media"].facebook} target="_blank">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="text-xl sm:text-2xl hover:text-green-400"
                      />
                    </a>
                    <a href={coach["social media"].twitter} target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="text-xl sm:text-2xl hover:text-green-400"
                      />
                    </a>
                    <a href={coach["social media"].instagram} target="_blank">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-xl sm:text-2xl hover:text-green-400"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}

export default Coaches;
