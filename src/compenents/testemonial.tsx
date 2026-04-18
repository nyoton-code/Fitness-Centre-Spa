"use client";

import {
  faStar,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../data/Fr.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import c1 from "../../public/imgs/c1.jpg";
import c2 from "../../public/imgs/c2.jpg";
import c3 from "../../public/imgs/c3.jpg";
import c4 from "../../public/imgs/c4.jpg";
import Image from "next/image";

function Testimonial() {
  const testimonialsData = data.testimonials;
  const images = [c1, c2, c3, c4];

  const stars = () =>
    Array.from({ length: 5 }, (_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className="text-yellow-400 mx-0.5"
      />
    ));

  return (
    <div id="testimonial" className="my-14 px-4 md:px-10 lg:px-20">
      <h3 className="text-main-g text-xl mb-2 text-center capitalize">
        our clients say
      </h3>
      <p className="text-3xl md:text-5xl font-semibold capitalize text-center dark:text-white">
        latest testimonials
      </p>

      <div className="mt-10">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          // pagination={true}
          className="mySwiper"
          loop
          effect="fade"
          // navigation
          pagination={{ clickable: true }}
          grabCursor
          speed={1000}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 bg-white dark:bg-gray-900 dark:shadow-[0_1px_6px_rgba(255,255,255,0.05)] p-6 md:p-10 rounded-2xl transition-colors duration-300 min-h-[20rem]">
                {/* Avatar */}
                <div className="flex-shrink-0 relative">
                  <div className="relative h-28 w-28 sm:h-32 sm:w-32 md:h-44 md:w-44">
                    <Image
                      src={images[testimonial.id - 1]}
                      alt={testimonial.name}
                      className="h-full w-full rounded-full object-cover z-40 relative"
                    />
                    <span className="absolute -left-4 -top-3 h-full w-full rounded-full bg-main-g z-20"></span>
                    <span className="absolute -left-8 -top-8 h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36 rounded-full bg-main-g z-30"></span>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="mr-2 text-main-g"
                    />
                    {testimonial.feedback}
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className="ml-2 text-main-g"
                    />
                  </p>
                  <h2 className="text-lg sm:text-xl md:text-2xl text-main-g font-semibold tracking-wide mb-1">
                    {testimonial.name}
                  </h2>
                  <span className="block text-gray-500 dark:text-gray-400 mb-2">
                    {testimonial.role}
                  </span>
                  <div className="flex justify-center md:justify-start flex-wrap mt-2">
                    {stars()}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
