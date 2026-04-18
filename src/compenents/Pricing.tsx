"use client";
// import PricingCard from "./PricingCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import data from "../data/Fr.json";

export default function Pricing() {
  const pricingOptions = [
    {
      bgColor: "bg-secondary-main",
      textColor: "text-white",
      borderColor: "border-main-g",
      buttonBg: "bg-main-g",
      buttonTextColor: "text-black",
    },
    {
      bgColor: "bg-main-g",
      textColor: "text-black",
      borderColor: "border-secondary-main",
      buttonBg: "bg-secondary-main",
      buttonTextColor: "text-white",
    },
    {
      bgColor: "bg-secondary-main",
      textColor: "text-white",
      borderColor: "border-main-g",
      buttonBg: "bg-main-g",
      buttonTextColor: "text-black",
    },
  ];

  return (
    <div id="prices" className="mt-10 p-2 ">
      <h3 className="text-main-g text-xl mb-4 capitalize text-center">
        clear pricing
      </h3>
      <p className="text-5xl font-semibold uppercase text-center">
        sport gym membership
      </p>
      <p className="text-center my-2">
        14 days unlimited free trial. no contract or credit card required.
      </p>

      <div className="pricing mt-5 flex mx-4 justify-center  pb-9 max-lg:flex-wrap ">
        {/* {pricingOptions.map((card, idx) => ( */}
        {data.membershipPlans.map((plan, i) => (
          <div
            key={plan.id}
            className={`relative flex flex-col items-center text-center ${pricingOptions[i].bgColor} ${pricingOptions[i].textColor} w-80 p-8 rounded-2xl shadow-lg shadow-slate-300  dark:shadow-gray-600 mx-4 mt-6 transition-transform hover:scale-105 `}
          >
            {/* Title */}
            <h4 className="font-bold text-xl capitalize">
              {data.membershipPlans[i].name}
              <span className="block text-sm font-light mt-1"></span>
            </h4>

            {/* Price */}
            <span className="font-extrabold text-4xl mt-6">
              {data.membershipPlans[i].price}
              <span className="block text-sm font-light mt-2">/package</span>
            </span>

            {/* Subtitle */}
            <p className="text-xs capitalize font-light mt-3 mb-6">
              all plans include a 30 day trial!
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-6 h-60">
              {data.membershipPlans[i].features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm font-light flex items-center  gap-2"
                >
                  <span className="text-lg font-bold">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <a href="#contact">
              <button
                className={`${pricingOptions[i].buttonBg} ${pricingOptions[i].buttonTextColor} px-10 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition-transform`}
              >
                Choose Plan <FontAwesomeIcon icon={faSquareArrowUpRight} />
              </button>
            </a>
          </div>
        ))}
        {/* ))} */}
      </div>
    </div>
  );
}
