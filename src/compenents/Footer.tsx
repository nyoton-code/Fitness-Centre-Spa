"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="footer pt-2 bg-secondary-main text-white">
        <div className="container">
          <div className="text-center my-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-2xl w-10 h-10 text-blue-600 hover:text-blue-800"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-2xl w-10 h-10 text-blue-600 hover:text-blue-800"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-2xl w-10 h-10 text-pink-500 hover:text-pink-800"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl w-10 h-10 text-blue-600 hover:text-blue-800"
              />
            </a>
          </div>

          <ul className="flex justify-center pb-4">
            <li className="mr-4 text-base">Home</li>
            <li className="mr-4 text-base">News</li>
            <li className="mr-4 text-base">About</li>
            <li className="mr-4 text-base">Contact Us</li>
            <li className="mr-4 text-base">Our Team</li>
          </ul>
        </div>

        <div className="p-5 text-center bg-gray-950 text-yellow-50 font-bold">
          copywriting &#169;{new Date().getFullYear()} by{" "}
          <a
            href="https://nyoton-code.github.io/portfolio-one-v1"
            target="_blank"
            className="text-blue-900"
          >
            Neyoweb
          </a>
        </div>
      </div>
    </>
  );
}
