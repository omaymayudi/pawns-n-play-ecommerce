import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";

export const CardOurTeam = ({ avatar, name, position }) => {
  return (
    <div className="w-full pb-[6px] lg:px-2 px-1 ">
      <img src={`/ourteam/${avatar}`} alt="" />
      <p className="text-center lg:text-start font-semibold text-black text-xs lg:text-xl leading-[180%] lg:pt-5">
        {name}
      </p>
      <p className="text-center lg:text-start font-legular text-black/70 lg:text-lg text-[10px] leading-[180%] lg:pt-2">
        {position}
      </p>
      <div className="pt-1 lg:pt-3">
        <ul className="text-black/50 flex justify-center lg:justify-start gap-1 lg:gap-3 lg:text-xl">
          <li>
            <span>
              <a href="#">
                <FaTwitter />
              </a>
            </span>
          </li>
          <li>
            <span>
              <a href="#">
                <FaLinkedin />
              </a>
            </span>
          </li>
          <li>
            <span>
              <a href="#">
                <FaDribbble />
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
