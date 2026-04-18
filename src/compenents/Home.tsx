// "use client";

// import {
//   faArrowUp,
//   faSquareArrowUpRight,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function HomeStats() {
//   return (
//     <>
//       <div>
//         <h1 className="text-3xl bg-red-600 capitalize">gellon </h1>
//       </div>
//       <div
//         className="fixed h-8 w-8 bg-gray-100 bottom-3 right-3 z-50 r cursor-pointer "
//         id="arrow"
//       >
//         <a
//           href="#home"
//           className="w-full h-full flex justify-center items-center relative"
//         >
//           <FontAwesomeIcon icon={faArrowUp} className="relative z-30" />
//           <span
//             className="bg-main-g absolute bottom-0 left-0 w-full h-0 z-10"
//             id="heigt"
//           ></span>
//         </a>
//       </div>
//       <div className="landing-page relative" id="home">
//         <div className="headbar flex bg-secondary-main justify-evenly max-lg:justify-between items-center h-20 ">
//           <div className="logo max-lg:ml-7">
//             <h2 className="text-white  text-xl font-bold tracking-wide">
//               <span className="text-main-g ">fitness</span>
//             </h2>
//           </div>
//           <div
//             id="one"
//             className="sidebar-button flex flex-col w-7 h-5 justify-between cursor-pointer absolute top-8 right-12 visibile lg:hidden "
//           >
//             <span
//               id="two"
//               className="block w-full h-0.5  bg-white transition-all .active:"
//             ></span>
//             <span
//               id="th"
//               className="block w-full h-0.5  bg-white transition-all"
//             ></span>
//             <span
//               id="three"
//               className="block w-full h-0.5  bg-white transition-all"
//             ></span>
//           </div>

//           <div
//             id="sidebar"
//             className="links flex basis-6/12 relative transition duration-[1s] max-lg:-translate-x-52 max-lg:z-30 max-lg:absolute max-lg:top-0 max-lg:h-full max-lg:w-52 max-lg:bg-black"
//           >
//             <span className="text-white  text-xl font-bold tracking-wide mt-10 ml-5 lg:hidden">
//               <span className="text-main-g ">Ntoyon</span>web
//             </span>
//             <ul className="flex items-center max-lg: max-lg:flex-col max-lg:absolute max-lg:block max-lg:z-30 max-lg:h-full max-lg  ml-5 max-lg:top-1/2 max-lg:-translate-y-1/4 ">
//               <a href="#home">
//                 <li className="text-xs  mr-7 text-txt-c transition capitalize hover:text-main-g max-lg:block max-lg:ml-0  max-lg:mb-12 max-lg:text-sm max-lg:hover:scale-95 ">
//                   home
//                 </li>
//               </a>
//               <a href="#about">
//                 {/* {" "} */}
//                 <li className="text-xs  mr-7 text-txt-c transition capitalize hover:text-main-g max-lg:block max-lg:ml-0 max-lg:mb-12 max-lg:text-sm max-lg:hover:scale-95  ">
//                   about
//                 </li>
//               </a>
//               <a href="#service">
//                 <li className="text-xs  mr-7 text-txt-c transition capitalize hover:text-main-g max-lg:block max-lg:ml-0 max-lg:mb-12 max-lg:text-sm max-lg:hover:scale-95 ">
//                   services
//                 </li>
//               </a>
//               <a href="#gallery">
//                 <li
//                   className="text-xs  mr-7 text-txt-c transition capitalize hover:text-main-g max-lg:block max-lg:ml-0 max-lg:mb-12 max-lg:text-sm
//                           max-lg:hover:scale-95 "
//                 >
//                   gallery
//                 </li>
//               </a>
//               <a href="#prices">
//                 {/* {" "} */}
//                 <li
//                   className="text-xs  mr-7 text-txt-c transition capitalize hover:text-main-g max-lg:block max-lg:ml-0 max-lg:mb-12 max-lg:text-sm
//                       max-lg:hover:scale-95 "
//                 >
//                   prices
//                 </li>
//               </a>
//               <a href="#testimonial">
//                 {/* {" "} */}
//                 <li className="text-xs  mr-7 text-txt-c transition capitalize hover:text-main-g max-lg:block max-lg:ml-0 max-lg:mb-12 max-lg:text-sm max-lg:hover:scale-95 ">
//                   testimonial
//                 </li>
//               </a>
//               <a href="#contact">
//                 {/* {" "} */}
//                 <li className="text-xs font-medium  ml-10 bg-main-g text-black text-center py-2 px-7 transition capitalize  hover:text-white max-lg:text-sm max-lg:ml-4">
//                   contact us
//                 </li>
//               </a>
//             </ul>
//           </div>
//         </div>
//         <div className="h-[calc(100vh-60px)]  relative">
//           <div className="absolute w-full h-full bg-cover bg-bottom bg-main-bg grayscale z-0"></div>
//           <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             <p className="text-white text-center capitalize tracking-widest max-sm:text-base max-sm:tracking-wise max-sm:mb-5">
//               fitness <span className="text-main-g">for</span> everyone
//             </p>
//             <h1 className="my-3 text-5xl tracking-wide uppercase font-bold text-center text-white max-sm:w-80 ">
//               {/* {" "} */}
//               start your
//               <span className="text-transparent stroke-green-500 font-bold outline-text">
//                 fitness
//               </span>
//             </h1>
//             <p className="text-txt-c text-xs text-center max-sm:hidden">
//               begin your fitness journey now join us to achieve your health
//               goals with expert guidance and a supportive community.
//             </p>
//             <div className="text-center mt-7">
//               <span className="mr-5  text-sm font-bold text-txt-c border p-3 cursor-pointer">
//                 Get Started <FontAwesomeIcon icon={faSquareArrowUpRight} />{" "}
//               </span>
//               <span className="text-sm font-bold bg-main-g px-5 py-3 cursor-pointer">
//                 Subscribe
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="stats bg-main-g flex mx-48 justify-center max-sm:mx-11 -mt-11 mb-20 z-20 relative max-lg:flex-wrap max-sm:-mt-36">
//         <div className="w-1/4 relative p-4 text-center before:h-1/2 before:w-0.25 before:absolute before:z-30 before:right-0 before:bg-gray-900 top-2 max-lg:w-2/5 max-md:w-full max-lg:before:hidden">
//           <span className="text-3xl font-bold after:content-['+'] after:text-white ">
//             08
//           </span>
//           <p className="text-sm capitalize my-1 mb-3 -tracking-normal ">
//             years experience
//           </p>
//         </div>

//         <div className="w-1/4 relative p-4 text-center before:h-1/2 before:w-0.25 before:absolute before:z-30 before:right-0 before:bg-gray-900 top-2  max-lg:w-2/5 max-md:w-full max-lg:before:hidden">
//           <span className="text-3xl font-bold after:content-['+'] after:text-white">
//             350
//           </span>
//           <p className="text-sm capitalize my-1 mb-3 -tracking-normal">
//             exercices equipment
//           </p>
//         </div>

//         <div className="w-1/4 relative p-4 text-center top-2  before:h-1/2 before:w-0.25 before:absolute before:z-30 before:right-0 before:bg-gray-900  max-lg:w-2/5 max-md:w-full max-lg:before:hidden">
//           <span className="text-3xl font-bold after:content-['k'] after:text-white">
//             225
//           </span>
//           <p className="text-sm capitalize my-1 mb-3 -tracking-normal">
//             happy client
//           </p>
//         </div>

//         <div className="w-1/4 text-center p-4 relative top-2   max-lg:w-2/5 max-md:w-full max-lg:before:hidden">
//           <span className="text-3xl font-bold after:content-['+'] after:text-white">
//             50
//           </span>
//           <p className="text-sm capitalize my-1 mb-3 -tracking-normal">
//             expert training
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomeStats;
