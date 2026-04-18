"use client";
import { useState } from "react";
import { faMaximize, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "../data/Fr.json";

function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      src: "/imgs/g4.jpg",
      alt: "Gallery Image 1",
      className: "h-[295px]",
    },
    {
      id: 2,
      src: "/imgs/g6.jpg",
      alt: "Gallery Image 2",
      className: "lg:h-[610px] lg:row-span-2 row-span-1 h-[295px]",
    },
    {
      id: 3,
      src: "/imgs/g8.jpg",
      alt: "Gallery Image 3",
      className: "h-[295px] sm:col-span-2 col-span-1",
    },
    {
      id: 4,
      src: "/imgs/g14.jpg",
      alt: "Gallery Image 4",
      className: "h-[295px]",
    },
    {
      id: 5,
      src: "/imgs/g10.jpg",
      alt: "Gallery Image 5",
      className: "h-[295px]",
    },
    {
      id: 6,
      src: "/imgs/g1.jpg",
      alt: "Gallery Image 6",
      className: "h-[605px] row-span-2 max-sm:row-span-1 max-sm:h-[295px]",
    },
    {
      id: 7,
      src: "/imgs/g9.jpg",
      alt: "Gallery Image 7",
      className: "h-[295px]",
    },
    {
      id: 8,
      src: "/imgs/g7.jpg",
      alt: "Gallery Image 8",
      className: "h-[295px]",
    },
    {
      id: 9,
      src: "/imgs/g8.jpg",
      alt: "Gallery Image 9",
      className: "h-[295px] max-lg:hidden max-sm:block",
    },
  ];

  const openSlider = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      {/* ==== Gallery Grid ==== */}
      <motion.section
        id="gallery"
        className="max-w-7xl mx-auto px-4 py-20 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-main-g text-lg mb-2 uppercase tracking-wide">
          {data.gallery.title}
        </h3>
        <p className="text-4xl md:text-5xl font-bold capitalize mb-12">
          {data.gallery.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl cursor-pointer shadow-lg group ${item.className}`}
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ scale: 1.02, zIndex: 2 }}
              onClick={() => openSlider(idx)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={100}
                className="object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                loading="lazy"
              />

              <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              <FontAwesomeIcon
                icon={faMaximize}
                className="absolute h-6 w-6 text-white inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ==== Popup Slider ==== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-white text-3xl z-50"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay, Keyboard]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              keyboard={{ enabled: true }}
              initialSlide={currentIndex}
              className="w-full h-full flex items-center justify-center"
            >
              {galleryItems.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="flex justify-center items-center relative"
                >
                  <motion.div className="w-full h-full flex items-center justify-center relative">
                    {/* Fixed size image in the middle */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="relative w-[300px] h-[300px]"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover rounded-lg w-full h-full"
                        priority
                      />
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Gallery;
