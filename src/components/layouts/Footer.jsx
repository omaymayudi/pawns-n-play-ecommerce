import BoxPage from "../elements/BoxPage";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiHandPeace } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-[rgb(16,24,40)] w-full">
      <BoxPage>
        <hr className="w-full h-0.5  bg-gray-200 border-0 rounded mb-5 " />
        <div className="md:flex justify-between md:py-5">
          <div className="md:w-1/2">
            <h2 className="text-sm lg:text-base xl:text-xl text-white text-center md:text-start pb-4">
              © 2024 Paws n’ Play. All rights reserved.
            </h2>
          </div>
          <div className="md:w-1/2">
            <ul className="text-white flex justify-center md:justify-end gap-4 lg:text-xl xl:text-2xl text-xl pb-10">
              <li>
                <a href="">
                  <span>
                    <FaTwitter />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <FaLinkedin />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <FaFacebook />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <FaGithub />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <PiHandPeace />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <FaDribbble />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </BoxPage>
    </div>
  );
};

export default Footer;
