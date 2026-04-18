"use client";
import dynamic from "next/dynamic";
import Header from "../compenents/Header";
import Hero from "../compenents/Hero";
// import "./i18n";
import Coaches from "../compenents/Coaches";
import Stats from "../compenents/Stats";
import About from "../compenents/About";
import Service from "../compenents/service";
import ClientOnly from "../compenents/ClientOnly";
import Video from "../compenents/video";
// import Schedule from "../compenents/Schedual";

const Gallery = dynamic(() => import("../compenents/Gallery"), {
  loading: () => (
    <div className="h-96 flex items-center justify-center bg-gray-100">
      <div className="text-gray-600">Loading gallery...</div>
    </div>
  ),
});

const Pricing = dynamic(() => import("../compenents/Pricing"), {
  loading: () => (
    <div className="h-64 flex items-center justify-center bg-gray-100">
      <div className="text-gray-600">Loading pricing...</div>
    </div>
  ),
});

const Testimonial = dynamic(() => import("../compenents/testemonial"), {
  loading: () => (
    <div className="h-64 flex items-center justify-center bg-gray-100">
      <div className="text-gray-600">Loading testimonials...</div>
    </div>
  ),
});

const Schedule = dynamic(() => import("../compenents/Schedual"), {
  loading: () => (
    <div className="h-64 flex items-center justify-center bg-gray-100">
      <div className="text-gray-600">Loading schedule...</div>
    </div>
  ),
});

const Contact = dynamic(() => import("../compenents/Contact"), {
  loading: () => (
    <div className="h-64 flex items-center justify-center bg-gray-100">
      <div className="text-gray-600">Loading contact...</div>
    </div>
  ),
});

const Map = dynamic(() => import("../compenents/Map"), {
  loading: () => (
    <div className="h-96 flex items-center justify-center bg-gray-100">
      <div className="text-gray-600">Loading map...</div>
    </div>
  ),
});

const Footer = dynamic(() => import("../compenents/Footer"), {
  loading: () => (
    <div className="h-32 flex items-center justify-center bg-gray-100">
      <div className="text-gray-600">Loading footer...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Service />
      <Coaches />
      <Gallery />
      <Pricing />
      <Testimonial />
      <Video />
      <Schedule />
      <Contact />
      <ClientOnly>
        <Map />
      </ClientOnly>
      <Footer />
    </div>
  );
}
