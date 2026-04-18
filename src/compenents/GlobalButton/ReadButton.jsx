"use client ";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./button.css";

function Readbutton(hrefLink) {
  return (
    <a href={hrefLink.hrefLink}>
      <button className="btn-7 shadow-green-glow  hover:shadow-none   group w-36 font-extralight text-base capitalize py-4 px-4 cursor-pointer relative overflow-hidden">
        <span>
          Read More{" "}
          <FontAwesomeIcon
            icon={faSquareArrowUpRight}
            className="inline-block ml-2 transition-transform duration-300 group-hover:rotate-45"
          />
        </span>
      </button>
    </a>
  );
}
export default Readbutton;
